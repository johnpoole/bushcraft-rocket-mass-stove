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
  const worst = res.sections.reduce((a, s) => (res.lossShare[s] > res.lossShare[a] ? s : a));
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
  assert.throws(() => M.simulate({ ...M.DEFAULTS, design: 'foo' }), /design/);
  assert.throws(() => M.simulate({ ...M.DEFAULTS, ...M.DESIGN_DEFAULTS.batch, portWidth: 0 }), /portWidth/);
  const { bends, ...missing } = M.DEFAULTS;
  assert.throws(() => M.simulate(missing), /bends/);
});

test('a narrowing before a J-tube riser only throttles it', () => {
  const { res, ids } = run({ throat: true });
  assert.ok(ids.includes('throat'));
  assert.ok(res.sections.includes('throat'));
  assert.ok(res.airRatio < run().res.airRatio / 2, `air ratio ${res.airRatio}`);
});

// The batch box at its guide sizes, with any change on top.
const batch = (change = {}) => run({ ...M.DESIGN_DEFAULTS.batch, ...change });

test('the batch box sizes follow the published ratios from the riser', () => {
  const g = M.batchGuide(11);
  const d = (11 * 2) / Math.sqrt(Math.PI);
  assert.ok(Math.abs(g.B - 0.7234 * d) < 1e-9);
  assert.ok(Math.abs(g.portWidth - 0.5 * g.B) < 1e-9 && Math.abs(g.portHeight - 2.2 * g.B) < 1e-9);
  assert.ok(Math.abs(g.fireboxWidth - 2 * g.B) < 1e-9 && Math.abs(g.fireboxHeight - 3 * g.B) < 1e-9);
  const { params: p } = batch().res;
  assert.ok(Math.abs(p.portWidth - g.portWidth) < 0.5 && Math.abs(p.portHeight - g.portHeight) < 0.5);
  assert.ok(p.fireboxDepth >= g.fireboxDepth[0] && p.fireboxDepth <= g.fireboxDepth[1]);
  assert.ok(p.riserHeight >= g.riserHeight[0] && p.riserHeight <= g.riserHeight[1]);
});

test('the batch box at its guide sizes draws well, spins hard and has no problems', () => {
  const { res, ids } = batch();
  assert.equal(res.stalled, false);
  assert.deepEqual(res.sections, ['inlet', 'firebox', 'port', 'riser', 'topGap', 'sideGap', 'channel', 'chimney']);
  assert.ok(res.airRatio >= 1.5, `air ratio ${res.airRatio}`);
  assert.ok(res.temps.exhaust > 50 && res.temps.exhaust < 150, `exhaust ${res.temps.exhaust}`);
  assert.equal(res.burnBackRatio, null);
  assert.equal(res.swirl, 1);
  assert.ok(res.swirl > run().res.swirl);
  assert.deepEqual(ids, []);
});

test('a batch box without its P-channel burns smoky and stops spinning', () => {
  const { res, ids } = batch({ pChannel: false });
  assert.ok(ids.includes('noPChannel'));
  assert.ok(res.swirl < batch().res.swirl);
  assert.ok(res.airRatio < batch().res.airRatio);
});

test('a tight port chokes the batch box and a wide one loses its jet', () => {
  const tight = batch({ portWidth: 2.5 });
  assert.ok(tight.ids.includes('tightPort'));
  assert.ok(tight.res.airRatio < 1, `air ratio ${tight.res.airRatio}`);
  assert.ok(tight.ids.includes('starved'));
  const wide = batch({ portWidth: 9 });
  assert.ok(wide.ids.includes('widePort'));
  assert.ok(wide.res.swirl < batch().res.swirl);
});

test('a leaking door is named and lets in air the fire does not need', () => {
  const { res, ids } = batch({ doorSealed: false });
  assert.ok(ids.includes('doorLeak'));
  assert.ok(res.temps.fire < batch().res.temps.fire);
});

test('a batch box riser shorter than the ratios is named', () => {
  assert.ok(batch({ riserHeight: 60 }).ids.includes('shortRiser'));
  assert.ok(batch({ riserHeight: 60 }).res.airRatio < batch().res.airRatio);
});

test('J-tube-only checks stay off for the batch box', () => {
  const { ids } = batch({ feedHeight: 80, feedLid: true, tunnelLength: 15 });
  for (const id of ['burnBack', 'feedLid', 'shortTunnel', 'shortFeed']) assert.ok(!ids.includes(id), `${id} shown for a batch box`);
});
