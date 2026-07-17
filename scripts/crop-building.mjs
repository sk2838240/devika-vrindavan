import sharp from "sharp";
import path from "node:path";

const src = path.resolve("public/images/destination-building.png");
const dst = path.resolve("public/images/destination-building-cropped.png");

const meta = await sharp(src).metadata();
console.log("Source:", meta.width, "x", meta.height);

// approved_05 layout: text occupies roughly left 38% with white margin, building extends from ~38% to right edge.
// Crop right ~62% of the image.
const left = Math.round(meta.width * 0.475);
const width = meta.width - left;
const top = 0;
const height = meta.height;

await sharp(src)
  .extract({ left, top, width, height })
  .toFile(dst);

const out = await sharp(dst).metadata();
console.log("Output:", out.width, "x", out.height, "→", dst);
