const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const gate = require('../gate.js');

const root = path.join(__dirname, '..');
function pages(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    if (e.name.startsWith('.') || e.name === 'node_modules') return [];
    const p = path.join(dir, e.name);
    return e.isDirectory() ? pages(p) : e.name.endsWith('.html') ? [p] : [];
  });
}

test('gate.js holds a real password hash', () => {
  assert.match(gate.HASH, /^[0-9a-f]{64}$/);
});

test('every page loads the password screen first, from the right place', () => {
  for (const file of pages(root)) {
    const rel = path.relative(root, file);
    const depth = path.dirname(rel).split(path.sep).filter((s) => s !== '.').length;
    const tag = `<script src="${'../'.repeat(depth)}gate.js"></script>`;
    const html = fs.readFileSync(file, 'utf8');
    assert.ok(html.includes(tag), `${rel} does not load ${tag}`);
    const first = html.indexOf('<script');
    assert.equal(first, html.indexOf(tag), `${rel} runs another script before the password screen`);
  }
});

test('the pick 2 offline copy keeps the password screen', () => {
  assert.match(fs.readFileSync(path.join(root, 'pick-2', 'sw.js'), 'utf8'), /'\.\.\/gate\.js'/);
});
