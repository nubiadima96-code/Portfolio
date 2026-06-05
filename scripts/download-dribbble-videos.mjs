import https from "https";
import fs from "fs";
import path from "path";

const videos = {
  CaseEmailAssistant: [
    { file: "ch1.mp4", url: "https://cdn.dribbble.com/userupload/13836491/file/original-c2b3b2cac6ec40a553fc059b2e966a75.mp4" },
    { file: "ch2-a.mp4", url: "https://cdn.dribbble.com/userupload/13836621/file/original-bddd801fbef0ff58d7bb30806b8e9610.mp4" },
    { file: "ch2-b.mp4", url: "https://cdn.dribbble.com/userupload/13836622/file/original-8fff852cf2a7a8236a9b28c9921764c3.mp4" },
    { file: "ch3-a.mp4", url: "https://cdn.dribbble.com/userupload/13836740/file/original-72be88df8779bd99fec5a8ce85823b29.mp4" },
    { file: "ch3-b.mp4", url: "https://cdn.dribbble.com/userupload/13836747/file/original-f054a04c5d6b8f4114375908dd2be35c.mp4" },
  ],
  CaseMeetingAssistant: [
    { file: "ch1.mp4", url: "https://cdn.dribbble.com/userupload/13591254/file/original-a0b9f2a0f78b15ebe7dd079a1160976f.mp4" },
    { file: "ch2.mp4", url: "https://cdn.dribbble.com/userupload/13591301/file/original-af8ab00702652593cbc3e38de6dfc03e.mp4" },
    { file: "ch3.mp4", url: "https://cdn.dribbble.com/userupload/13591464/file/original-78d894e426a091b1b724e958755f425d.mp4" },
    { file: "ch4.mp4", url: "https://cdn.dribbble.com/userupload/13591480/file/original-bcafc609cd9949995508f359352532c6.mp4" },
    { file: "ch5.mp4", url: "https://cdn.dribbble.com/userupload/13591566/file/original-a3c8327bd0eeb5f017ef101f8baa874e.mp4" },
    { file: "ch6.mp4", url: "https://cdn.dribbble.com/userupload/13591622/file/original-1c5a647e0e6bff5df8fd3d6b4b935bde.mp4" },
    { file: "ch7.mp4", url: "https://cdn.dribbble.com/userupload/13591622/file/original-1c5a647e0e6bff5df8fd3d6b4b935bde.mp4" },
  ],
  CaseDataManagement: [
    { file: "ch1.mp4", url: "https://cdn.dribbble.com/userupload/13805975/file/original-c67a31510e27e1e5983bf96ca973afae.mp4" },
    { file: "ch2.mp4", url: "https://cdn.dribbble.com/userupload/13806087/file/original-f0b9334796b16607bb3f723cc4189c84.mp4" },
    { file: "ch3.mp4", url: "https://cdn.dribbble.com/userupload/13806208/file/original-0428e20b10ddafb77cf8b7247e326511.mp4" },
  ],
};

const download = (url, dest) =>
  new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          download(res.headers.location, dest).then(resolve).catch(reject);
          return;
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve(dest)));
      })
      .on("error", reject);
  });

for (const [dir, list] of Object.entries(videos)) {
  const out = path.join("public/assets", dir);
  fs.mkdirSync(out, { recursive: true });
  for (const v of list) {
    const dest = path.join(out, v.file);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 10000) {
      console.log("skip", dir, v.file);
      continue;
    }
    try {
      await download(v.url, dest);
      console.log("ok", dir, v.file, fs.statSync(dest).size);
    } catch (e) {
      console.log("fail", dir, v.file, e.message);
    }
  }
}
