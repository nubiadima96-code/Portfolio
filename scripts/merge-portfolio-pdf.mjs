import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument } from "pdf-lib";

const materialsDir = path.join(process.cwd(), "public", "About Page Materials");
const sourcesDir = path.join(materialsDir, "_sources");

const sourceFiles = [
  "CV.pdf",
  "Portfolio-Page-1.pdf",
  "Portfolio-Page-2.pdf",
  "Portfolio-Page-3.pdf",
  "Portfolio-Page-4.pdf",
];

const outputFile = "CV-UXUI-Product-Designer-Dmytro-Chyzh.pdf";
const outputPath = path.join(materialsDir, outputFile);

await mkdir(sourcesDir, { recursive: true });

const legacyCv = path.join(materialsDir, outputFile);
const legacyCvSource = path.join(sourcesDir, "CV.pdf");

try {
  await readFile(legacyCvSource);
} catch {
  await copyFile(legacyCv, legacyCvSource);
  console.log("Saved CV source copy");
}

for (const fileName of sourceFiles.slice(1)) {
  const from = path.join(materialsDir, fileName);
  const to = path.join(sourcesDir, fileName);
  try {
    await readFile(to);
  } catch {
    await copyFile(from, to);
    console.log(`Saved source copy: ${fileName}`);
  }
}

const merged = await PDFDocument.create();

for (const fileName of sourceFiles) {
  const filePath = path.join(sourcesDir, fileName);
  const bytes = await readFile(filePath);
  const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
  const pages = await merged.copyPages(pdf, pdf.getPageIndices());

  for (const page of pages) {
    merged.addPage(page);
  }

  console.log(`Added ${pages.length} page(s) from ${fileName}`);
}

const mergedBytes = await merged.save();
await writeFile(outputPath, mergedBytes);

console.log(`\nMerged PDF saved: ${outputPath}`);
console.log(`Total pages: ${merged.getPageCount()}`);
