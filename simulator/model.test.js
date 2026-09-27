const test = require('node:test');
const assert = require('node:assert/strict');
const M = require('./model.js');

const run = (change = {}) => {
  const res = M.simulate({ ...M.DEFAULTS, ...change });
  return { res, ids: M.diagnose(res).map((d) => d.id) };
};

test('guide design draws well with no problems', () => {
  const { res, ids } = run();
  assert.equal(res.stalled, false);
  assert.ok(res.airRatio >= 1.5, `air ratio ${res.airRatio}`);
  assert.ok(res.temps.riserMean > 680, `riser ${res.temps.riserMean}`);
  assert.ok(res.temps.exhaust > 50 && res.temps.exhaust < 150, `exhaust ${res.temps.exhaust}`);
  assert.ok(res.heat.keptFraction > 0.8, `kept ${res.heat.keptFraction}`);
  assert.ok(res.bench.warmHours >= 6, `warm hours ${res.bench.warmHours}`);
  assert.deepEqual(ids, []);
});

test('a narrow chimney is named as the pinch point and carries the most drag', () => {
  const { res, ids } = run({ chimneySize: 7 });
  assert.ok(ids.includes('pinch'));
  const worst = M.SECTIONS.reduce((a, s) => (res.lossShare[s] > res.lossShare[a] ? s : a));
  assert.equal(worst, 'chimney');
  assert.ok(res.airFlow < run().res.airFlow);
});

test('a tall feed tube makes the fire climb and weakens the pull', () => {
  const { res, ids } = run({ feedHeight: 60 });
  assert.ok(ids.includes('burnBack'));
  assert.ok(res.airRatio < run().res.airRatio);
});

test('a short riser breaks the riser-to-tunnel rule and weakens the pull', () => {
  const { res, ids } = run({ riserHeight: 60 });
  assert.ok(ids.includes('shortRiser'));
  assert.ok(res.airRatio < run().res.airRatio);
});

test('a longer channel cools the exhaust and a very long one chokes the pull', () => {
  const temps = [150, 300, 450].map((L) => run({ channelLength: L }).res.temps.exhaust);
  assert.ok(temps[0] > temps[1] && temps[1] > temps[2], temps.join(' > '));
  assert.ok(run({ channelLength: 800 }).res.airRatio < 1.5);
  assert.ok(run({ channelLength: 100 }).ids.includes('hotExhaust'));
});

test('a lit stove stays on its hot running draft as the channel grows a little', () => {
  let last = Infinity;
  for (let L = 400; L <= 450; L += 5) {
    const r = run({ channelLength: L, bends: 2, chimneyAboveRiser: 170 }).res;
    assert.ok(r.airRatio >= 1.5, `air ratio ${r.airRatio} at ${L} cm`);
    assert.ok(r.airRatio <= last, `air ratio rose from ${last} to ${r.airRatio} at ${L} cm`);
    last = r.airRatio;
  }
});

test('a bare riser runs cooler than an insulated one', () => {
  assert.ok(run({ riserInsulation: 0 }).res.temps.riserMean < run().res.temps.riserMean - 50);
  assert.ok(run({ riserInsulation: 0 }).ids.includes('bareRiser'));
  assert.ok(run({ riserInsulation: 0, coldStart: true }).ids.includes('coolRiser'));
});

test('a tight gap over the riser shows up as drag', () => {
  const { res, ids } = run({ topGap: 2 });
  assert.ok(ids.includes('tightTop'));
  assert.ok(res.lossShare.topGap > 0.2);
});

test('damp fuel runs a cooler fire', () => {
  assert.ok(run({ fuel: 'damp' }).res.temps.fire < run().res.temps.fire - 100);
});

test('safety faults are flagged as dangers', () => {
  for (const [change, id] of [
    [{ riverStones: true }, 'riverStones'],
    [{ cracksSealed: false }, 'cracks'],
    [{ feedLid: true }, 'feedLid'],
    [{ chimneyAboveRiser: -20 }, 'lowChimney'],
  ]) {
    const d = M.diagnose(M.simulate({ ...M.DEFAULTS, ...change })).find((x) => x.id === id);
    assert.ok(d, `missing ${id}`);
    assert.equal(d.level, 'danger');
  }
});

test('a lid on the feed tube starves the fire', () => {
  assert.ok(run({ feedLid: true }).res.airRatio < 1);
});

test('stove stalls when nothing can lift the gas', () => {
  const { res, ids } = run({ coldStart: true, feedHeight: 80, riserHeight: 40, chimneyAboveRiser: -30, chimneySize: 5, channelSize: 5 });
  assert.ok(res.stalled || res.airRatio < 1, `air ratio ${res.airRatio}`);
  assert.ok(ids.includes('stalled') || ids.includes('starved'));
});

test('bad input is rejected with the parameter named', () => {
  assert.throws(() => M.simulate({ ...M.DEFAULTS, riserHeight: 0 }), /riserHeight/);
  assert.throws(() => M.simulate({ ...M.DEFAULTS, topGap: NaN }), /topGap/);
  assert.throws(() => M.simulate({ ...M.DEFAULTS, fuel: 'wet' }), /fuel/);
  const { bends, ...missing } = M.DEFAULTS;
  assert.throws(() => M.simulate(missing), /bends/);
});
