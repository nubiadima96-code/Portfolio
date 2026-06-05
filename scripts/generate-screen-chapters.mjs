import fs from "fs";
import path from "path";

const configs = [
  {
    out: "meetingAssistantScreens.ts",
    exportName: "meetingAssistantChapters",
    dir: "CaseMeetingAssistant",
    chapters: [
      { label: "#1 · Meeting recording & transcript", until: "08.png" },
      { label: "#2 · Transcript editing & filler words", until: "13.png" },
      { label: "#3 · Notes & AI generation", until: "18.jpg" },
      { label: "#4 · Scheduling & follow-ups", until: "24.png" },
      { label: "#5 · Tasks & issue breakdown", until: "28.png" },
      { label: "#6 · Overview & integrations", until: null },
    ],
  },
  {
    out: "dataManagementScreens.ts",
    exportName: "dataManagementChapters",
    dir: "CaseDataManagement",
    chapters: [
      { label: "#1 · Catalog enrichment", until: "09.png" },
      { label: "#2 · Data completion flows", until: "16.png" },
      { label: "#3 · Dashboard & visualization", until: null },
    ],
  },
];

const titleFor = (file, i) => {
  if (file.includes("still")) return `Video preview · ${file}`;
  if (file.endsWith(".jpg")) return `Lifestyle / context · ${file}`;
  return `UI pattern ${String(i).padStart(2, "0")}`;
};

const descFor = (file) => {
  if (file.includes("still"))
    return "Frame from the embedded Dribbble video for this chapter — pairs with the UI screens in the carousel below it.";
  if (file.endsWith(".jpg"))
    return "Collaboration context from the shot — teams reviewing data or dashboards.";
  return "Screen from the Dribbble carousel — full-resolution UI from the published case study.";
};

for (const cfg of configs) {
  const manifest = JSON.parse(
    fs.readFileSync(path.join("public/assets", cfg.dir, "manifest.json"), "utf8")
  );
  const files = manifest
    .filter((m) => m.localName !== "cover-main.png")
    .map((m) => m.localName);

  const chaptersOut = [];
  let start = 0;
  for (const ch of cfg.chapters) {
    const endIdx = ch.until ? files.indexOf(ch.until) + 1 : files.length;
    const slice = files.slice(start, endIdx);
    chaptersOut.push({
      label: ch.label,
      screens: slice.map((file, j) => ({
        file,
        title: titleFor(file, start + j + 1),
        description: descFor(file),
      })),
    });
    start = endIdx;
  }

  const ts = `import type { CaseScreen } from "@/components/cases/AiUxScreenGallery";

export const ${cfg.exportName}: { label: string; screens: CaseScreen[] }[] = ${JSON.stringify(chaptersOut, null, 2)};
`;

  fs.writeFileSync(path.join("lib/caseScreens", cfg.out), ts);
  console.log("Wrote", cfg.out, chaptersOut.map((c) => c.screens.length));
}
