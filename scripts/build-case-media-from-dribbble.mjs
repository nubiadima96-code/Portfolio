import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import https from "https";

const shots = [
  {
    dir: "CaseEmailAssistant",
    url: "https://dribbble.com/shots/23915489-AI-Email-Assistant-Inbox-Management-Reply-Tasks-Automation",
    excludeUploadIds: ["13836481", "13836482"],
    videoMap: {
      "13836491": "ch1.mp4",
      "13836621": "ch2-a.mp4",
      "13836622": "ch2-b.mp4",
      "13836740": "ch3-a.mp4",
      "13836747": "ch3-b.mp4",
    },
  },
  {
    dir: "CaseMeetingAssistant",
    url: "https://dribbble.com/shots/23829737-Best-AI-UX-Design-Patterns-for-Meeting-Assistant-Tools",
    excludeUploadIds: [],
    videoMap: {
      "13591254": "ch1.mp4",
      "13591301": "ch2.mp4",
      "13591464": "ch3.mp4",
      "13591480": "ch4.mp4",
      "13591566": "ch5.mp4",
      "13591622": "ch6.mp4",
    },
  },
  {
    dir: "CaseDataManagement",
    url: "https://dribbble.com/shots/23904076-AI-Driven-Data-Management-Visualization-Product-UX-patterns",
    excludeUploadIds: [],
    videoMap: {
      "13805975": "ch1.mp4",
      "13806087": "ch2.mp4",
      "13806208": "ch3.mp4",
      "13806344": "ch4.mp4",
      "13806882": "ch5.mp4",
    },
  },
];

const download = (url, dest) =>
  new Promise((resolve, reject) => {
    https
      .get(url.split("?")[0], { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          download(res.headers.location, dest).then(resolve).catch(reject);
          return;
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve(dest)));
      })
      .on("error", reject);
  });

const browser = await chromium.launch({ headless: true });

for (const shot of shots) {
  const page = await browser.newPage();
  await page.goto(shot.url, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForTimeout(4000);

  const chapters = await page.evaluate(({ excludeIds }) => {
    const bodyText = document.body.innerText;
    const sectionMeta = [];
    const re = /#(\d+)\.\s*([^\n]+)\n+([\s\S]*?)(?=\n#(\d+)\.|Let's discuss|As an AI|$)/g;
    let m;
    while ((m = re.exec(bodyText)) !== null) {
      sectionMeta.push({
        number: `#${m[1]}`,
        title: m[2].trim().replace(/\u00a0/g, " "),
        description: m[3].trim().replace(/\u00a0/g, " ").split("\n\n")[0],
      });
    }

    const headingEls = [...document.querySelectorAll("h2, h3, p")].filter((el) =>
      /^#\d+\./.test((el.textContent || "").trim())
    );

    const chapters = sectionMeta.map((meta, idx) => {
      const startEl = headingEls[idx];
      const endEl = headingEls[idx + 1];
      const slides = [];
      const seen = new Set();

      const addMediaFrom = (root) => {
        if (!root) return;
        for (const v of root.querySelectorAll("video")) {
          const url = (v.querySelector("source")?.src || v.src || "").split("?")[0];
          const id = url.match(/userupload\/(\d+)\//)?.[1];
          if (!url || !id || excludeIds.includes(id) || seen.has(url)) continue;
          seen.add(url);
          slides.push({
            type: "video",
            uploadId: id,
            poster: v.poster?.split("?")[0] || null,
          });
        }
        for (const img of root.querySelectorAll("img")) {
          const url = (img.src || "").split("?")[0];
          const id = url.match(/userupload\/(\d+)\//)?.[1];
          if (!url.includes("userupload") || url.includes("/still-") || !id) continue;
          if (excludeIds.includes(id) || seen.has(url)) continue;
          seen.add(url);
          slides.push({ type: "image", url, uploadId: id });
        }
      };

      if (startEl && endEl) {
        let el = startEl;
        while ((el = el.nextElementSibling) && el !== endEl) {
          addMediaFrom(el);
        }
      }

      // Walk up to parent shot description column
      if (slides.length === 0 && startEl) {
        let parent = startEl.parentElement;
        for (let i = 0; i < 8 && parent; i++) {
          const sibs = [...parent.parentElement?.children || []];
          const myIdx = sibs.indexOf(parent);
          for (let j = myIdx + 1; j < sibs.length && (!endEl || sibs[j].compareDocumentPosition(endEl) & Node.DOCUMENT_POSITION_FOLLOWING); j++) {
            addMediaFrom(sibs[j]);
            if (endEl && sibs[j].contains(endEl)) break;
          }
          parent = parent.parentElement;
        }
      }

      return { ...meta, label: `${meta.number}. ${meta.title}`, slides };
    });

    return chapters;
  }, { excludeIds: shot.excludeUploadIds });

  const outDir = path.join("public/assets", shot.dir);
  const mediaDir = path.join(outDir, "media");
  fs.mkdirSync(mediaDir, { recursive: true });

  for (let si = 0; si < chapters.length; si++) {
    const ch = chapters[si];
    const built = { label: ch.label, description: ch.description, slides: [] };
    let imgIdx = 0;

    for (const slide of ch.slides) {
      if (slide.type === "video") {
        const local = shot.videoMap[slide.uploadId];
        if (!local) continue;
        const posterName = `s${si + 1}-poster-${slide.uploadId}.png`;
        if (slide.poster) {
          try {
            await download(slide.poster, path.join(mediaDir, posterName));
          } catch {
            /* */
          }
        }
        built.slides.push({
          type: "video",
          src: `media/${local}`,
          poster: `media/${posterName}`,
          title: "Video demo",
        });
      } else {
        imgIdx++;
        const ext = slide.url.endsWith(".jpg") ? "jpg" : "png";
        const name = `s${si + 1}-${String(imgIdx).padStart(2, "0")}.${ext}`;
        await download(slide.url, path.join(mediaDir, name));
        built.slides.push({
          type: "image",
          src: `media/${name}`,
          title: `Screen ${imgIdx}`,
        });
      }
    }
    chapters[si] = built;
  }

  for (const file of Object.values(shot.videoMap)) {
    const src = path.join(outDir, file);
    const dest = path.join(mediaDir, file);
    if (fs.existsSync(src) && !fs.existsSync(dest)) fs.copyFileSync(src, dest);
  }

  fs.writeFileSync(path.join(outDir, "dribbble-sections.json"), JSON.stringify(chapters, null, 2));
  console.log(
    shot.dir,
    chapters.map((c) => `${c.label}: ${c.slides.length}`).join(" | ")
  );
}

await browser.close();
console.log("Done");
