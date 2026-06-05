import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(
  "https://dribbble.com/shots/23829737-Best-AI-UX-Design-Patterns-for-Meeting-Assistant-Tools",
  { waitUntil: "networkidle", timeout: 120000 }
);
await page.waitForTimeout(2000);

const found = await page.evaluate(async () => {
  const h = [...document.querySelectorAll("h2,h3,strong,b,span,div")].find((el) =>
    /#7\.\s*Enhancing Data Interaction/i.test(el.textContent || "")
  );
  if (!h) return { error: "no h7" };
  h.scrollIntoView({ block: "center" });
  await new Promise((r) => setTimeout(r, 1500));
  const root = h.closest("section") || h.parentElement?.parentElement?.parentElement;
  const scope = root || document.body;
  const videos = [...scope.querySelectorAll("video")].map((v) => ({
    src: v.currentSrc || v.src,
    poster: v.poster,
  }));
  const imgs = [...scope.querySelectorAll("img[src*='userupload']")].map((i) => i.src.split("?")[0]);
  return { videos, imgs: [...new Set(imgs)] };
});

console.log(JSON.stringify(found, null, 2));
await browser.close();
