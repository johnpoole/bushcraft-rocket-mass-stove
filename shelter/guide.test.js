const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const M = require('../simulator/model.js');
const { S, derived: D, stoveChanges } = require('./layout.js');

const guidePath = path.join(__dirname, '..', 'build-guide.html');
const html = fs.readFileSync(guidePath, 'utf8');

// The size given in the guide's sizing table for a part, by the text of its first cell.
function sizeOf(part) {
  const m = html.match(new RegExp(`<tr><td>${part.replace(/[()]/g, '\\$&')}</td><td>(.*?)</td>`));
  if (!m) throw new Error(`build-guide.html has no sizing row for "${part}"`);
  return m[1];
}

test('the build guide gives the same stove sizes as the shelter layout', () => {
  const st = S.stove;
  const want = [
    ['Feed tube (vertical, sticks drop in)', `${st.feedHeight} cm tall`],
    ['Burn tunnel (horizontal)', `${st.tunnelLength} cm long`],
    ['Heat riser', `${st.riserHeight} cm tall`],
    ['Riser insulation', `${st.riserInsulation} cm`],
    ['Gap from riser top to cooktop', `${st.topGap} cm`],
    ['Gap from riser to dome wall', `${st.sideGap} cm`],
    ['Bench channel', `about ${D.channelLength.toFixed(1)} m, ${stoveChanges.bends} bends`],
    ['Mass over the channel', `${st.benchCover} cm`],
    ['Chimney', `top ${S.chimney.top} m`],
    ['Chimney', 'stone and cob all the way up'],
  ];
  for (const [part, text] of want) assert.ok(sizeOf(part).includes(text), `guide row "${part}" says "${sizeOf(part)}", expected it to include "${text}"`);
});

test('the instructions quote the stage volumes, the step, the bench warmth, the weir and the net from the design', () => {
  // These numbers used to be typed into the guide; now the procedures quote them from params.js.
  const L = require('../procedures/lib.js');
  const { load } = require('../procedures/index.js');
  const quoted = new Set(load().flatMap((p) => L.placeholders(p)));
  for (const k of ['volume.stage1', 'volume.stage2', 'stove.stepHeight', 'stove.warmHours', 'weir.pen', 'net.length']) {
    assert.ok(quoted.has(k), `no instruction quotes {${k}}`);
  }
});

test('the build guide links to the stove instructions instead of repeating them', () => {
  for (const id of ['plan.stove-stage-one', 'plan.stove-stage-two', 'stove.first-firing', 'stove.make-blocks', 'fish.build-weir']) {
    assert.ok(html.includes(`procedures/#${id}`), `build-guide.html does not link to ${id}`);
  }
});
