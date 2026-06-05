import fs from "fs";
import path from "path";
import sharp from "sharp";

/** Upload ID prefixes that belong to each Dribbble shot (from page JSON). */
const shotUploadPrefixes = {
  CaseMeetingAssistant: [
    "1358988",
    "1359125",
    "1359128",
    "1359130",
    "1359146",
    "1359148",
    "1359156",
    "1359162",
    "1372473",
  ],
  CaseDataManagement: [
    "1380423",
    "1380597",
    "1380608",
    "1380620",
    "1380634",
    "1380688",
  ],
  CaseEmailAssistant: [
    "1383648",
    "1383649",
    "1383661",
    "1383662",
    "1383673",
    "1383674",
  ],
};

const assetsRoot = path.join(process.cwd(), "public", "assets");

const isValidImage = async (filePath) => {
  try {
    const meta = await sharp(filePath).metadata();
    return meta.width > 400 && meta.height > 200;
  } catch {
    return false;
  }
};

const belongsToShot = (filename, prefixes) => {
  const m = filename.match(/userupload\/(\d+)\//);
  if (!m) return false;
  const id = m[1];
  return prefixes.some((p) => id.startsWith(p));
};

for (const [dir, prefixes] of Object.entries(shotUploadPrefixes)) {
  const folder = path.join(assetsRoot, dir);
  const archive = path.join(folder, "_archive");
  fs.mkdirSync(archive, { recursive: true });

  const manifestPath = path.join(folder, "manifest.json");
  let manifest = [];
  if (fs.existsSync(manifestPath)) {
    try {
      manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    } catch {
      manifest = [];
    }
  }

  for (const file of fs.readdirSync(folder)) {
    if (!file.endsWith(".png") && !file.endsWith(".jpg")) continue;
    const full = path.join(folder, file);
    const entry = manifest.find((e) => e.localName === file);
    const url = entry?.url || "";
    if (url && !belongsToShot(url, prefixes)) {
      fs.renameSync(full, path.join(archive, file));
    }
  }

  const remaining = [];
  for (const file of fs.readdirSync(folder)) {
    if (!file.endsWith(".png") && !file.endsWith(".jpg")) continue;
    const full = path.join(folder, file);
    if (!(await isValidImage(full))) {
      fs.renameSync(full, path.join(archive, file));
      continue;
    }
    const entry = manifest.find((e) => e.localName === file);
    remaining.push({ file, full, url: entry?.url || "", mtime: fs.statSync(full).mtimeMs });
  }

  remaining.sort((a, b) => {
    if (a.url.includes("/original-") && !b.url.includes("/original-")) return -1;
    if (b.url.includes("/original-") && !a.url.includes("/original-")) return 1;
    return a.url.localeCompare(b.url) || a.mtime - b.mtime;
  });

  const tempDir = path.join(folder, "_temp");
  fs.mkdirSync(tempDir, { recursive: true });
  remaining.forEach((item, i) => {
    const name = i === 0 ? "cover-main.png" : `${String(i).padStart(2, "0")}.png`;
    fs.renameSync(item.full, path.join(tempDir, name));
  });

  for (const f of fs.readdirSync(folder)) {
    if (f === "_temp" || f === "_archive" || f === "manifest.json") continue;
    const p = path.join(folder, f);
    if (fs.statSync(p).isFile()) fs.renameSync(p, path.join(archive, f));
  }

  for (const f of fs.readdirSync(tempDir)) {
    fs.renameSync(path.join(tempDir, f), path.join(folder, f));
  }
  fs.rmdirSync(tempDir);

  const final = fs
    .readdirSync(folder)
    .filter((f) => f.endsWith(".png"))
    .sort();
  console.log(`${dir}: ${final.length} screens →`, final.join(", "));
}
