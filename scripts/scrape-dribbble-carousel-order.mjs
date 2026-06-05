import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const shot = {
  url: "https://dribbble.com/shots/23915489-AI-Email-Assistant-Inbox-Management-Reply-Tasks-Automation",
  dir: "CaseEmailAssistant",
};

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  viewport: { width: 1400, height: 900 },
});
await page.goto(shot.url, { waitUntil: "domcontentloaded", timeout: 120000 });

for (let i = 0; i < 12; i++) {
  await page.mouse.wheel(0, 1200);
  await page.waitForTimeout(800);
}

await page.waitForTimeout(3000);

const html = await page.content();
const manifest = JSON.parse(
  fs.readFileSync(path.join("public/assets", shot.dir, "manifest.json"), "utf8")
);
const idToLocal = Object.fromEntries(
  manifest.map((m) => [m.url.match(/userupload\/(\d+)\//)?.[1], m.localName])
);

// Ordered upload IDs as they appear in HTML (first occurrence only)
const seen = new Set();
const orderedIds = [];
const re = /userupload\/(\d+)\/file\/(original|still)-/g;
let m;
while ((m = re.exec(html)) !== null) {
  if (seen.has(m[1])) continue;
  seen.add(m[1]);
  orderedIds.push({ id: m[1], kind: m[2], local: idToLocal[m[1]] });
}

console.log("Total unique uploads in HTML:", orderedIds.length);
orderedIds.forEach((o, i) => console.log(i, o.id, o.kind, o.local || "?"));

// Find carousel strips: buttons with small images in sequence
const carousels = await page.evaluate(() => {
  const results = [];
  const strips = document.querySelectorAll(
    '[class*="thumbnail"], [class*="thumb"], [role="tablist"], ul[class*="media"]'
  );
  for (const strip of strips) {
    const imgs = [...strip.querySelectorAll("img[src*='userupload']")];
    if (imgs.length < 3) continue;
    const ids = imgs.map((img) => img.src.match(/userupload\/(\d+)\//)?.[1]).filter(Boolean);
    const y = strip.getBoundingClientRect().top;
    results.push({ y, count: ids.length, ids });
  }
  results.sort((a, b) => a.y - b.y);
  return results;
});

console.log("\nCarousel strips found:", carousels.length);
carousels.forEach((c, i) => {
  console.log(`\nStrip ${i + 1} (y=${c.y}, n=${c.count}):`);
  console.log(c.ids.map((id) => idToLocal[id] || id).join(" -> "));
});

await browser.close();
