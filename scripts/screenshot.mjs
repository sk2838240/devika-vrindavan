import puppeteer from "puppeteer";
import path from "node:path";
import fs from "node:fs";

const url = process.env.URL || "http://localhost:3001";
const outDir = path.resolve("screenshots");
fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  protocolTimeout: 180000,
});
console.log("Browser launched");
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

console.log("Visiting", url);
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
await new Promise((r) => setTimeout(r, 6000));

const totalHeight = await page.evaluate(() => document.body.scrollHeight);
const step = 600;
for (let y = 0; y < totalHeight; y += step) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await new Promise((r) => setTimeout(r, 250));
}
await page.evaluate(() => window.scrollTo(0, 0));
await new Promise((r) => setTimeout(r, 1500));
console.log("Loaded + scrolled, taking screenshots");

const fullPath = path.join(outDir, "full-page.png");
await page.screenshot({ path: fullPath, fullPage: true });
console.log("→", fullPath);

const sections = [
  { id: "hero", label: "01-hero" },
  { id: "vrindavan", label: "02-vrindavan" },
  { id: "spiritual", label: "03-spiritual" },
  { id: "philosophy", label: "04-philosophy" },
  { id: "destination", label: "05-destination" },
  { id: "suites", label: "06-suites" },
  { id: "experience", label: "07-experience" },
  { id: "devika", label: "08-devika" },
  { id: "enquiry", label: "09-enquiry" },
];

for (const s of sections) {
  const elem = await page.$(`#${s.id}`);
  if (!elem) {
    console.warn("missing:", s.id);
    continue;
  }
  await page.evaluate((id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo(0, top);
    }
  }, s.id);
  await new Promise((r) => setTimeout(r, 1500));
  const out = path.join(outDir, `${s.label}.png`);
  await page.screenshot({ path: out, fullPage: false });
  console.log("→", out);
}

await browser.close();
