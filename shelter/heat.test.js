const test = require('node:test');
const assert = require('node:assert/strict');
const H = require('./heat.js');
const { S } = require('./layout.js');

const ua = (m) => H.conductance(S, m).total;
const base = ua({});

test('each winterizing step lowers the heat loss', () => {
  let last = Infinity;
  for (const [name, m] of H.SCENARIOS.slice(0, 4)) {
    const v = ua(m);
    assert.ok(v < last, `${name}: ${v.toFixed(1)} W/°C is not below ${last.toFixed(1)}`);
    last = v;
  }
});

test('the roof is the biggest leak in the shelter as first built', () => {
  const c = H.conductance(S, {});
  for (const k of ['walls', 'door', 'floor', 'air']) assert.ok(c.roof > c[k], `roof ${c.roof.toFixed(1)} vs ${k} ${c[k].toFixed(1)}`);
});

test('layering the roof saves far more than digging the floor down, with no digging', () => {
  const roofSaves = base - ua({ roof: true });
  const digSaves = base - ua({ dig: true });
  assert.ok(roofSaves > 0.3 * base, `roof saves ${roofSaves.toFixed(1)} of ${base.toFixed(1)} W/°C`);
  assert.ok(digSaves > 0 && digSaves < 0.1 * base, `digging saves ${digSaves.toFixed(1)} W/°C`);
  assert.ok(roofSaves > 5 * digSaves);
});

test('the earth skirt moves less soil than digging the floor down', () => {
  assert.ok(H.soilMoved(S, { skirt: true }) < H.soilMoved(S, { dig: true }));
});

test('roof, skirt and snow bank together at least halve the heat loss', () => {
  assert.ok(ua({ roof: true, skirt: true, snow: true }) < 0.5 * base);
});
