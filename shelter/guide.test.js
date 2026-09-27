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
    ['Chimney', `to ${S.chimney.masonryHeight} m`],
  ];
  for (const [part, text] of want) assert.ok(sizeOf(part).includes(text), `guide row "${part}" says "${sizeOf(part)}", expected it to include "${text}"`);
});

test('the build guide quotes the stage volumes, the step and the bench warmth from the design', () => {
  const V = D.volumes;
  assert.ok(html.includes(`about ${V.stage1.toFixed(1)} m³`), `stage one volume ${V.stage1.toFixed(1)} m³ missing`);
  assert.ok(html.includes(`about ${V.stage2.toFixed(1)} m³`), `stage two volume ${V.stage2.toFixed(1)} m³ missing`);
  assert.ok(html.includes(`log round ${Math.round(D.stepHeight * 100)} cm high`), 'step height missing');
  const res = M.simulate({ ...M.DEFAULTS, ...stoveChanges });
  assert.ok(html.includes(`about ${Math.round(res.bench.warmHours)} hours`), `bench warmth ${Math.round(res.bench.warmHours)} hours missing`);
});

test('the build guide gives the weir and gill net the same sizes as the camp layout', () => {
  const pen = (2 * S.camp.weir.penRadius).toFixed(1);
  assert.ok(html.includes(`ring of stakes ${pen} m across`), `weir pen ${pen} m missing from the guide`);
  assert.ok(html.includes(`${S.camp.gillNet.length} m gill net`), `gill net ${S.camp.gillNet.length} m missing from the guide`);
});
