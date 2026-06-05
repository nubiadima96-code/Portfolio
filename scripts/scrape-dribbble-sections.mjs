import { chromium } from "playwright";

const shot = {
  url: "https://dribbble.com/shots/23915489-AI-Email-Assistant-Inbox-Management-Reply-Tasks-Automation",
  dir: "CaseEmailAssistant",
};

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(shot.url, { waitUntil: "networkidle", timeout: 120000 });
await page.waitForTimeout(4000);

const data = await page.evaluate(() => {
  const text = document.body.innerText;
  const idx = text.indexOf("#1");
  const snippet = idx >= 0 ? text.slice(idx, idx + 8000) : text.slice(0, 8000);

  // Media blocks between description sections
  const blocks = [...document.querySelectorAll("[class*='block-grid'], [class*='content-block'], .e-content, .formatted-text")];
  const blockInfo = blocks.map((b) => ({
    cls: b.className?.slice?.(0, 80),
    text: b.textContent?.trim().slice(0, 200),
    imgs: [...b.querySelectorAll("img")].map((i) => i.src).filter((s) => s.includes("userupload")),
    videos: [...b.querySelectorAll("video")].map((v) => v.src || v.querySelector("source")?.src),
  }));

  return { snippet, blockCount: blockInfo.length, blocks: blockInfo.filter((b) => b.imgs.length || b.videos.length || b.text?.includes("#")) };
});

console.log(data.snippet);
console.log("\n--- blocks ---");
console.log(JSON.stringify(data.blocks, null, 2));

await browser.close();
