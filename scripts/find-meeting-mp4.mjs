import { chromium } from "playwright";

const mp4 = new Set();
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
page.on("response", (res) => {
  const u = res.url();
  if (u.includes(".mp4")) mp4.add(u.split("?")[0]);
});
await page.goto(
  "https://dribbble.com/shots/23829737-Best-AI-UX-Design-Patterns-for-Meeting-Assistant-Tools",
  { waitUntil: "networkidle", timeout: 120000 }
);
await page.waitForTimeout(3000);
for (let i = 0; i < 20; i++) {
  await page.mouse.wheel(0, 1500);
  await page.waitForTimeout(500);
}
const assets = await page.evaluate(() => {
  const html = document.documentElement.innerHTML;
  return [...new Set([...html.matchAll(/https:\/\/cdn\.dribbble\.com\/userupload\/1359162[^"'\\s]+/g)].map((m) => m[0].split("?")[0]))];
});
console.log("mp4:\n" + [...mp4].join("\n"));
console.log("\n9162x assets:\n" + assets.join("\n"));
await browser.close();
