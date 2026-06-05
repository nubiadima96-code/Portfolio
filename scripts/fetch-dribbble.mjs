import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";

const shots = [
  {
    id: "23829737",
    url: "https://dribbble.com/shots/23829737-Best-AI-UX-Design-Patterns-for-Meeting-Assistant-Tools",
    dir: "CaseMeetingAssistant",
  },
  {
    id: "23904076",
    url: "https://dribbble.com/shots/23904076-AI-Driven-Data-Management-Visualization-Product-UX-patterns",
    dir: "CaseDataManagement",
  },
  {
    id: "23915489",
    url: "https://dribbble.com/shots/23915489-AI-Email-Assistant-Inbox-Management-Reply-Tasks-Automation",
    dir: "CaseEmailAssistant",
  },
];

const download = (url, dest) =>
  new Promise((resolve, reject) => {
    const mod = url.startsWith("https") ? https : http;
    mod
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
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

const assetsRoot = path.join(process.cwd(), "public", "assets");

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
});

for (const shot of shots) {
  console.log(`\n=== ${shot.id} ===`);
  await page.goto(shot.url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(4000);

  const meta = await page.evaluate(() => {
    const og = document.querySelector('meta[property="og:image"]');
    const imgs = [...document.querySelectorAll("img")]
      .map((el) => ({
        src: el.currentSrc || el.src,
        w: el.naturalWidth,
        h: el.naturalHeight,
        alt: el.alt || "",
      }))
      .filter((i) => i.src && i.src.includes("dribbble") && i.w > 200);
    return { og: og?.content || null, imgs };
  });

  console.log("og:image", meta.og);
  const candidates = [
    ...(meta.og ? [{ src: meta.og, w: 9999, h: 9999 }] : []),
    ...meta.imgs,
  ]
    .filter((v, i, a) => a.findIndex((x) => x.src === v.src) === i)
    .sort((a, b) => b.w * b.h - a.w * a.h);

  const outDir = path.join(assetsRoot, shot.dir);
  fs.mkdirSync(outDir, { recursive: true });

  let index = 0;
  for (const img of candidates.slice(0, 12)) {
    const ext = img.src.includes(".png") ? "png" : "jpg";
    const name = index === 0 ? "cover-main.png" : `${String(index).padStart(2, "0")}.${ext}`;
    const dest = path.join(outDir, name);
    try {
      await download(img.src, dest);
      console.log("saved", name, img.w, img.h, img.src.slice(0, 80));
      index++;
    } catch (e) {
      console.log("fail", name, e.message);
    }
  }
}

await browser.close();
console.log("\nDone.");
