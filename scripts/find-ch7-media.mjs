import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(
  "https://dribbble.com/shots/23829737-Best-AI-UX-Design-Patterns-for-Meeting-Assistant-Tools",
  { waitUntil: "networkidle", timeout: 120000 }
);

const media = await page.evaluate(() => {
  const nodes = [...document.querySelectorAll("h2, h3, p, strong")];
  const h7 = nodes.find((n) => /^#7\./.test((n.textContent || "").trim()));
  if (!h7) return { error: "no #7 heading" };

  const items = [];
  let el = h7;
  for (let i = 0; i < 40 && el; i++) {
    el = el.nextElementSibling;
    if (!el) break;
    if (/^#8\./.test(el.textContent || "")) break;
    el.querySelectorAll("video, img[src*='userupload']").forEach((node) => {
      const src = (node.currentSrc || node.src || "").split("?")[0];
      if (!src) return;
      items.push({
        type: node.tagName.toLowerCase(),
        src,
      });
    });
  }
  return { items };
});

console.log(JSON.stringify(media, null, 2));
await browser.close();
