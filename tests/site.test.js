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

test('every link into the instructions names an instruction that exists', () => {
  const L = require('../engine/lib.js');
  const reg = L.byId(require('../procedures/index.js').load());
  const pages = ['index.html', 'build-guide.html', 'survival-plan.html', 'shelter/index.html', 'rocket-mass-stove-section.html', 'simulator/index.html'];
  for (const page of pages) {
    const html = fs.readFileSync(path.join(root, page), 'utf8');
    for (const m of html.matchAll(/procedures\/#([a-z0-9.-]+)/g)) {
      assert.ok(m[1] === 'schedule' || reg.has(m[1]), `${page} links to procedures/#${m[1]}, which does not exist`);
    }
  }
});

test('the shelter 3D view draws every design part, so the day slider can show it', () => {
  const { PARTS } = require('../shelter/layout.js');
  const html = fs.readFileSync(path.join(root, 'shelter', 'index.html'), 'utf8');
  const drawn = new Set([...html.matchAll(/beginPart\('([a-z-]+)'\)/g)].map((m) => m[1]));
  for (const id of Object.keys(PARTS)) assert.ok(drawn.has(id), `shelter/index.html draws nothing for design part "${id}"`);
  for (const id of drawn) assert.ok(id in PARTS, `shelter/index.html draws "${id}", which is not a design part`);
});
