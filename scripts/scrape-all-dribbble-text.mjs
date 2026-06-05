import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const shots = [
  {
    url: "https://dribbble.com/shots/23829737-Best-AI-UX-Design-Patterns-for-Meeting-Assistant-Tools",
    dir: "CaseMeetingAssistant",
    count: 7,
  },
  {
    url: "https://dribbble.com/shots/23904076-AI-Driven-Data-Management-Visualization-Product-UX-patterns",
    dir: "CaseDataManagement",
    count: 5,
  },
];

const browser = await chromium.launch({ headless: true });

for (const shot of shots) {
  const page = await browser.newPage();
  await page.goto(shot.url, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForTimeout(5000);

  const sections = await page.evaluate((max) => {
    const text = document.body.innerText;
    const out = [];
    for (let n = 1; n <= max; n++) {
      const marker = `#${n}.`;
      const start = text.indexOf(marker);
      if (start < 0) continue;
      const next = text.indexOf(`#${n + 1}.`, start + marker.length);
      const chunk = text.slice(start, next > start ? next : start + 2500);
      const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
      const label = lines[0] || marker;
      const description = lines.slice(1).join(" ").replace(/\s+/g, " ").trim();
      out.push({ label, description: description.slice(0, 1200) });
    }
    return out;
  }, shot.count);

  const jsonPath = path.join("public/assets", shot.dir, "dribbble-sections.json");
  const existing = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  const merged = existing.map((ch, i) => ({
    ...ch,
    label: sections[i]?.label || ch.label,
    description: sections[i]?.description || ch.description,
  }));
  fs.writeFileSync(jsonPath, JSON.stringify(merged, null, 2));
  console.log(shot.dir, sections.length, "sections updated");
  await page.close();
}

await browser.close();
