const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { PAGES } = require('../nav.js');

const root = path.join(__dirname, '..');
const fileFor = (href) => path.join(root, href === '' || href.endsWith('/') ? href + 'index.html' : href);

test('every menu link points at a page that exists', () => {
  for (const [href, name] of PAGES) assert.ok(fs.existsSync(fileFor(href)), `menu item "${name}" links to ${href || '/'}, but ${fileFor(href)} does not exist`);
});

test('every page loads the menu from the right place', () => {
  for (const [href] of PAGES) {
    const file = fileFor(href);
    const depth = path.relative(root, path.dirname(file)).split(path.sep).filter(Boolean).length;
    const src = `${'../'.repeat(depth)}nav.js`;
    const html = fs.readFileSync(file, 'utf8');
    assert.ok(html.includes(`<script src="${src}"></script>`), `${path.relative(root, file)} does not load ${src}`);
  }
});
