import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import https from "https";

const shots = [
  {
    id: "23829737",
    url: "https://dribbble.com/shots/23829737-Best-AI-UX-Design-Patterns-for-Meeting-Assistant-Tools",
    dir: "CaseMeetingAssistant",
    uploadPrefixes: [
      "1358988",
      "1359125",
      "1359128",
      "1359130",
      "1359146",
      "1359148",
      "1359156",
      "1359162",
      "1372473",
    ],
  },
  {
    id: "23904076",
    url: "https://dribbble.com/shots/23904076-AI-Driven-Data-Management-Visualization-Product-UX-patterns",
    dir: "CaseDataManagement",
    uploadPrefixes: [
      "1380423",
      "1380597",
      "1380608",
      "1380620",
      "1380634",
      "1380688",
    ],
  },
  {
    id: "23915489",
    url: "https://dribbble.com/shots/23915489-AI-Email-Assistant-Inbox-Management-Reply-Tasks-Automation",
    dir: "CaseEmailAssistant",
    uploadPrefixes: [
      "1383648",
      "1383649",
      "1383661",
      "1383662",
      "1383673",
      "1383674",
    ],
  },
];

const download = (url, dest) =>
  new Promise((resolve, reject) => {
    const fullUrl = url.includes("resize=") ? url : `${url}${url.includes("?") ? "&" : "?"}resize=3840x2160`;
    https
      .get(fullUrl, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          download(res.headers.location, dest).then(resolve).catch(reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode}`));
          return;
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve(dest)));
      })
      .on("error", reject);
  });

const belongs = (url, prefixes) => {
  const m = url.match(/userupload\/(\d+)\//);
  if (!m) return false;
  return prefixes.some((p) => m[1].startsWith(p));
};

const assetsRoot = path.join(process.cwd(), "public", "assets");
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
});

for (const shot of shots) {
  console.log(`\n=== ${shot.dir} ===`);
  await page.goto(shot.url, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForTimeout(2500);

  const urls = await page.evaluate(() => {
    const found = new Set();
    const add = (u) => {
      if (!u || typeof u !== "string") return;
      if (!u.includes("cdn.dribbble.com/userupload")) return;
      if (u.includes("/avatars/")) return;
      found.add(u.replace(/\\u002F/g, "/").split("&resize=")[0]);
    };
    document.querySelectorAll("script").forEach((s) => {
      const t = s.textContent || "";
      const re = /https?:\/\/cdn\.dribbble\.com\/userupload\/[^"'\s\\]+/g;
      let m;
      while ((m = re.exec(t)) !== null) add(m[0]);
    });
    return [...found];
  });

  const images = urls
    .filter((u) => belongs(u, shot.uploadPrefixes))
    .filter((u) => /\.(png|jpg|jpeg)(\?|$)/i.test(u) || u.includes("/original-") || u.includes("/still-"))
    .filter((u) => !u.endsWith(".mp4") && !u.includes(".mp4"))
    .filter((u) => u.includes("/file/original-") || u.includes("/file/still-"))
    .sort();

  const unique = [];
  const seen = new Set();
  for (const u of images) {
    const key = u.match(/\/file\/([^?]+)/)?.[1];
    if (!key || seen.has(key)) continue;
    seen.add(key);
    unique.push(u);
  }

  console.log("Shot images:", unique.length);

  const outDir = path.join(assetsRoot, shot.dir);
  const archive = path.join(outDir, "_archive");
  fs.mkdirSync(archive, { recursive: true });

  for (const f of fs.readdirSync(outDir)) {
    if (f.endsWith(".png") || f.endsWith(".jpg")) {
      fs.renameSync(path.join(outDir, f), path.join(archive, `${Date.now()}-${f}`));
    }
  }

  const manifest = [];
  let idx = 0;
  for (const url of unique) {
    const ext = url.includes(".jpg") ? "jpg" : "png";
    const name = idx === 0 ? `cover-main.${ext}` : `${String(idx).padStart(2, "0")}.${ext}`;
    const dest = path.join(outDir, name);
    try {
      await download(url, dest);
      manifest.push({
        localName: name,
        url,
        fileKey: url.match(/\/file\/([^?]+)/)?.[1],
      });
      console.log("OK", name);
      idx++;
    } catch (e) {
      console.log("FAIL", url.slice(0, 60), e.message);
    }
  }

  fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
}

await browser.close();
console.log("\nDone. Run: node scripts/organize-dribbble-assets.mjs");
