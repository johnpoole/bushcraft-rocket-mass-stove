// Steady heat loss from the shelter: conduction through roof, walls, door and floor, plus
// air leaking in and out. Used to compare the roof, earth skirt, snow bank and digging down.
// Every constant below is a rough estimate for materials on site; they sit in one place so
// they can be argued with. The tests check directions and rough sizes, not exact watts.
(function (root) {
  'use strict';

  const ESTIMATES = Object.freeze({
    films: 0.17,             // m²K/W, still air on the inside face plus wind on the outside
    kLog: 0.12,              // W/m·K, spruce or pine across the grain
    roofWet: { depth: 0.10, k: 0.6 },   // tarp under 10 cm of damp moss and dirt
    boughsR: 0.1,            // m²K/W, the spruce bough layer
    dryMoss: { depth: 0.15, k: 0.06 },  // moss kept dry under the tarp
    kSoil: 1.0,              // W/m·K, damp mineral soil
    kSnow: 0.2,              // W/m·K, settled snow
    doorU: 3.0,              // W/m²K, a hide or blanket hung in the doorway
    floorU: 0.4,             // W/m²K, into the ground under a dry floor
    ventACH: 0.5,            // air changes an hour through the inlet and vent, always open for the stove
    ventACHBanked: 1.0,      // the vent opened to about twice the size once snow banking stops the leaks
    leakACH: 0.8,            // air changes an hour through gaps in the walls and at the ground line
    skirt: { height: 0.3, thickness: 0.4, leakCut: 0.3 },  // share of the leakage the earth skirt stops
    snowBank: { thickness: 0.5, roofDepth: 0.3, frontShare: 0.6, leakCut: 0.7 },
    dig: { depth: 0.3, extraR: 1.0 },   // path through soil for wall buried by digging the floor down
    // Moisture, in litres of water a day put into the shelter air.
    moisture: { person: 1.0, cooking: 0.5, drying: 0.3, benchDrying: 6 },
    stoveAir: 33,            // m³ an hour drawn through the shelter by the stove while it burns
    firingHours: 2,
    indoor: 10, outdoor: -30, outdoorRH: 0.9,
    roofFilmIn: 0.13, roofFilmOut: 0.04,
  });

  function geometry(S) {
    const x = S.inside.x, z = S.inside.z, hb = S.backHeight, hf = S.frontHeight;
    const door = S.door.width * S.door.height;
    return {
      back: x * hb,
      front: x * hf - door,
      ends: 2 * z * (hb + hf) / 2,
      door,
      roof: x * Math.hypot(z, hb - hf),
      floor: x * z,
      perimeter: 2 * (x + z),
      banked: x + 2 * z,            // back and end walls, where the earth skirt goes
      volume: x * z * (hb + hf) / 2,
    };
  }

  // Heat loss in W per °C between inside and outside, for a set of measures.
  function conductance(S, measures = {}, E = ESTIMATES) {
    const g = geometry(S);
    const R = (...parts) => E.films + parts.reduce((a, b) => a + b, 0);
    const rLog = 0.15 / E.kLog;
    const rRoof = measures.roof
      ? R(E.roofWet.depth / E.roofWet.k, E.boughsR, E.dryMoss.depth / E.dryMoss.k)
      : R(E.roofWet.depth / E.roofWet.k);
    const rSnowWall = E.snowBank.thickness / E.kSnow;
    const rRoofSnow = E.snowBank.roofDepth / E.kSnow;

    let walls = 0;
    const skirtArea = measures.skirt ? g.banked * E.skirt.height : 0;
    const digArea = measures.dig ? g.perimeter * E.dig.depth : 0;
    const snow = !!measures.snow;
    // Back and end walls.
    const side = g.back + g.ends;
    const sideR = R(rLog, snow ? rSnowWall : 0);
    walls += (side - skirtArea) / sideR + skirtArea / (sideR + E.skirt.thickness / E.kSoil);
    // Front wall, partly banked with snow around the door and inlet.
    const fb = snow ? E.snowBank.frontShare : 0;
    walls += g.front * (1 - fb) / R(rLog) + g.front * fb / R(rLog, rSnowWall);
    // Wall buried by digging the floor down: the same wall, with soil outside it instead of air.
    if (digArea) walls -= digArea / R(rLog) - digArea / R(rLog, E.dig.extraR);

    const roof = g.roof / (rRoof + (snow ? rRoofSnow : 0));
    const door = g.door * E.doorU;
    const floor = g.floor * E.floorU;
    let leak = E.leakACH;
    if (measures.skirt) leak *= 1 - E.skirt.leakCut;
    if (snow) leak *= 1 - E.snowBank.leakCut;
    const air = 0.33 * ((snow ? E.ventACHBanked : E.ventACH) + leak) * g.volume;
    const total = walls + roof + door + floor + air;
    return { walls, roof, door, floor, air, total };
  }

  // Soil moved for each option, in m³.
  function soilMoved(S, measures, E = ESTIMATES) {
    const g = geometry(S);
    let v = 0;
    if (measures.skirt) v += g.banked * E.skirt.height * E.skirt.thickness * 1.25; // sloped face
    if (measures.dig) v += g.floor * E.dig.depth;
    return v;
  }

  // Water vapour held by saturated air, g/m³, and the dew point for a relative humidity.
  const satDensity = (T) => 6.112 * Math.exp(17.67 * T / (T + 243.5)) * 100 * 2.1674 / (273.15 + T);
  function dewPoint(T, rh) {
    const g = Math.log(rh) + 17.67 * T / (243.5 + T);
    return 243.5 * g / (17.67 - g);
  }

  // The roof from inside to outside, as layers of thermal resistance, with the tarp pieces
  // marked. tarp: 'over-moss' is one tarp on top of the moss; 'split' is the tarp cut in two,
  // one piece under the moss as a vapour barrier and one over it to shed rain.
  function roofLayers(tarp, snow, E = ESTIMATES) {
    const L = [{ name: 'inside air', R: E.roofFilmIn }, { name: 'spruce boughs', R: E.boughsR }];
    if (tarp === 'split') L.push({ name: 'inner tarp', R: 0, barrier: true });
    L.push({ name: 'dry moss', R: E.dryMoss.depth / E.dryMoss.k });
    L.push({ name: tarp === 'split' ? 'outer tarp' : 'tarp', R: 0, barrier: tarp !== 'split', shed: true });
    L.push({ name: 'soil', R: E.roofWet.depth / E.roofWet.k });
    if (snow) L.push({ name: 'snow', R: E.snowBank.roofDepth / E.kSnow });
    L.push({ name: 'outside air', R: E.roofFilmOut });
    return L;
  }

  // Temperature at the face of each layer nearest the inside.
  function layerTemps(layers, Tin, Tout) {
    const total = layers.reduce((a, l) => a + l.R, 0);
    let r = 0;
    return layers.map((l) => { const t = Tin - (Tin - Tout) * r / total; r += l.R; return { ...l, T: t }; });
  }

  // Daily water balance of the shelter air: what goes in, how much the air changes carry
  // out, and the humidity the air settles at. With the bench still drying, add its water.
  function moisture(S, measures = {}, E = ESTIMATES) {
    const g = geometry(S);
    const src = E.moisture.person + E.moisture.cooking + E.moisture.drying + (measures.benchDrying ? E.moisture.benchDrying : 0);
    let leak = E.leakACH;
    if (measures.skirt) leak *= 1 - E.skirt.leakCut;
    if (measures.snow) leak *= 1 - E.snowBank.leakCut;
    const vent = measures.snow ? (measures.smallVent ? E.ventACH : E.ventACHBanked) : E.ventACH;
    const airPerDay = (vent + leak) * g.volume * 24 + E.stoveAir * E.firingHours;   // m³
    const vOut = satDensity(E.outdoor) * E.outdoorRH;
    const vIn = vOut + src * 1000 / airPerDay;           // g/m³ where removal matches the sources
    const rh = vIn / satDensity(E.indoor);
    return { sources: src, airPerDay, rh, dewPoint: rh >= 1 ? E.indoor : dewPoint(E.indoor, rh), saturated: rh >= 1 };
  }

  // Does water condense on a vapour barrier in the roof? It does when the barrier is colder
  // than the dew point of the shelter air.
  function roofCondensation(S, tarp = 'split', measures = {}, E = ESTIMATES) {
    const layers = layerTemps(roofLayers(tarp, !!measures.snow, E), E.indoor, E.outdoor);
    const barrier = layers.find((l) => l.barrier);
    const m = moisture(S, measures, E);
    return { barrier: barrier.name, barrierTemp: barrier.T, dewPoint: m.dewPoint, rh: m.rh, condenses: barrier.T < m.dewPoint };
  }

  const SCENARIOS = [
    ['As first built', {}],
    ['Layered roof', { roof: true }],
    ['Roof and earth skirt', { roof: true, skirt: true }],
    ['Roof, skirt and snow bank', { roof: true, skirt: true, snow: true }],
    ['Floor dug down 30 cm instead', { dig: true }],
  ];

  const api = { ESTIMATES, geometry, conductance, soilMoved, SCENARIOS, satDensity, dewPoint, roofLayers, layerTemps, moisture, roofCondensation };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ShelterHeat = api;
})(this);
