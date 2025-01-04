const fs = require("fs");
const path = require("path");

const { replace } = require("./replaceTokens");
const manifest = require("../manifest.json");

const dir = path.resolve(__dirname, "../webext");

// Copy content scripts and icons
const webextFiles = [
  ...manifest["content_scripts"].map(scripts => scripts.js).flat(),
  ...manifest["web_accessible_resources"].map(war => war.resources).flat(),
  ...Object.keys(manifest.icons).map(key => manifest.icons[key])
];

webextFiles.forEach(file => {
  const destPath = path.resolve(dir, path.dirname(file));
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true });
  }
  fs.copyFile(
    path.resolve(__dirname, `../${file}`),
    path.resolve(dir, file),
    err => {
      if (err) {
        console.error(err);
        throw err;
      }
    }
  );
});

// Transform and copy the manifest
// Assumes the dir is already created by the content scripts
fs.writeFileSync(
  path.resolve(dir, "manifest.json"),
  replace(JSON.stringify(manifest, null, 2)),
  "utf8"
);
