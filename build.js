// Simple build script — copies web source files into www/
// Capacitor's webDir is set to "www" in capacitor.config.json
const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'app.js',
  'style.css',
  'sw.js',
  'manifest.json',
];

if (!fs.existsSync('www')) fs.mkdirSync('www');
if (!fs.existsSync('www/icons')) fs.mkdirSync('www/icons', { recursive: true });

files.forEach(f => {
  if (fs.existsSync(f)) {
    fs.copyFileSync(f, path.join('www', f));
    console.log(`✓ ${f}`);
  } else {
    console.warn(`⚠ missing: ${f}`);
  }
});

// Copy icons if they exist
['icons/icon-192.png', 'icons/icon-512.png', 'icons/icon.svg'].forEach(f => {
  if (fs.existsSync(f)) {
    fs.copyFileSync(f, path.join('www', f));
    console.log(`✓ ${f}`);
  }
});

console.log('\nwww/ ready for cap sync');
