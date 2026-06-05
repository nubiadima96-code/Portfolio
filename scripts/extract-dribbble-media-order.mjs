import { chromium } from "playwright";

const shot = {
  url: "https://dribbble.com/shots/23915489-AI-Email-Assistant-Inbox-Management-Reply-Tasks-Automation",
  dir: "CaseEmailAssistant",
};

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(shot.url, { waitUntil: "networkidle", timeout: 120000 });
await page.waitForTimeout(3000);

const data = await page.evaluate(() => {
  const headings = [...document.querySelectorAll("h2, h3, [class*='description']")].filter((el) =>
    /#\d|Personalized|Priority|Email management/i.test(el.textContent || "")
  );

  // Shot media blocks: each block often has main + thumbnails
  const blocks = document.querySelectorAll(
    "[class*='shot-media'], [class*='media-gallery'], [data-shot-media], .js-shot-media"
  );

  const allThumbs = [...document.querySelectorAll("button img, [class*='thumbnail'] img")].map(
    (img) => ({
      src: img.currentSrc || img.src,
      alt: img.alt,
      parentTag: img.closest("button")?.getAttribute("aria-label") || "",
    })
  );

  const videos = [...document.querySelectorAll("video source, video")].map((v) => ({
    src: v.src || v.querySelector("source")?.src,
  }));

  return {
    headingCount: headings.length,
    headings: headings.slice(0, 10).map((h) => h.textContent?.trim().slice(0, 80)),
    blockCount: blocks.length,
    thumbCount: allThumbs.length,
    thumbs: allThumbs.slice(0, 20),
    videos: videos.slice(0, 10),
    bodySnippet: document.body.innerHTML.includes("shot-page-media"),
  };
});

console.log(JSON.stringify(data, null, 2));

const jsonFromPage = await page.evaluate(() => {
  const found = [];
  document.querySelectorAll("script").forEach((s) => {
    const t = s.textContent || "";
    if (!t.includes("attachments") && !t.includes("media")) return;
    if (t.includes("userupload") && t.length < 500000) {
      const matches = t.match(/"attachments":\[[^\]]{0,5000}/);
      if (matches) found.push(matches[0].slice(0, 500));
    }
  });
  return found;
});
console.log("script snippets", jsonFromPage.length);

await browser.close();
