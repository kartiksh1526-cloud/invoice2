const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const frontend = path.join(root, "frontend");
const output = path.join(root, "dist");
const requiredFiles = [
  "dashboard.html",
  "history.html",
  "items.html",
  "quotation.html",
  "preview.html",
  "css/style.css",
  "js/catalog.js",
  "js/dashboard.js",
  "js/items.js",
  "js/pdf.js",
  "js/quotation.js",
  "js/theme.js",
  "js/word.js"
];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(frontend, file))) {
    throw new Error(`Required frontend deployment file is missing: ${file}`);
  }
}

fs.rmSync(output, { recursive: true, force: true });
fs.cpSync(frontend, output, { recursive: true });
console.log(`Static frontend built successfully into ${path.relative(root, output)}.`);
