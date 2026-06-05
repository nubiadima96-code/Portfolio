import fs from "fs";
import path from "path";

const strip = (text) => {
  const cut = text.split(/Not a fan of reading\?/i)[0];
  return cut.replace(/\s+/g, " ").trim();
};

for (const dir of [
  "CaseEmailAssistant",
  "CaseMeetingAssistant",
  "CaseDataManagement",
]) {
  const file = path.join("public/assets", dir, "dribbble-sections.json");
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const cleaned = data.map((ch) => ({
    ...ch,
    description: strip(ch.description || ""),
  }));
  fs.writeFileSync(file, JSON.stringify(cleaned, null, 2));
  console.log(dir, "ok");
}
