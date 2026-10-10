import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Encode delivery copies only. Original full-size project artwork is preserved.
const assets = new URL("../public/assets/", import.meta.url);
const output = new URL("optimized/", assets);
await fs.mkdir(output, { recursive: true });
const projects = ["NOIRE-Modern-Forms-Fashion-Homepage.png", "Lumiere-Luxury-Salon-Website-Mockup.png", "elevate-architecture.png", "terra-skincare.png", "maison-interiors.png", "aura-retreat.png"];
const supporting = ["hero-img.png", "hero-bg.png", "dark-phone.jpg", "dark-section-bg.png", "cta-architecture.jpg", "process-bg.jpg"];
const report = [];
for (const file of [...projects, ...supporting]) {
  const original = new URL(file, assets);
  const stem = path.parse(file).name;
  const source = sharp(await fs.readFile(original));
  const metadata = await source.metadata();
  const full = new URL(`${stem}.webp`, output);
  await source.clone().webp({ quality: 90, effort: 6 }).toFile(fileURLToPath(full));
  if (projects.includes(file)) {
    const small = new URL(`${stem}-800.webp`, output);
    await source.clone().resize({ width: 800 }).webp({ quality: 88, effort: 6 }).toFile(fileURLToPath(small));
  }
  report.push({ file, width: metadata.width, height: metadata.height, originalBytes: (await fs.stat(original)).size, deliveredBytes: (await fs.stat(full)).size });
}
console.log(JSON.stringify(report, null, 2));
