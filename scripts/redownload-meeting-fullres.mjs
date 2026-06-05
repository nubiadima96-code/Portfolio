import fs from "fs";
import https from "https";
import path from "path";

const manifestPath = path.join(
  "public/assets/CaseMeetingAssistant/manifest.json"
);
const outDir = path.join("public/assets/CaseMeetingAssistant");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

const download = (url) =>
  new Promise((resolve, reject) => {
    const clean = url.split("?")[0];
    https
      .get(clean, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          download(res.headers.location).then(resolve).catch(reject);
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject);
  });

for (const entry of manifest) {
  if (!/\.(png|jpg|jpeg|webp)$/i.test(entry.localName)) continue;
  const dest = path.join(outDir, entry.localName);
  const buf = await download(entry.url);
  fs.writeFileSync(dest, buf);
  console.log(entry.localName, buf.length);
}

const updated = manifest.map((entry) => ({
  ...entry,
  url: entry.url.split("?")[0],
}));
fs.writeFileSync(manifestPath, JSON.stringify(updated, null, 2) + "\n");
console.log("manifest urls stripped of resize params");
