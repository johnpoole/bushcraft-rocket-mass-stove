// Steady-state draft model of the rocket mass stove.
// Buoyancy of each hot column is balanced against friction in each section to find
// how much air the stove pulls, and from that the fire power and gas temperatures.
(function (root) {
  'use strict';

  const G = 9.81;            // m/s²
  const CP = 1100;           // J/kg·K, flue gas
  const AIR_HEAT = 3.0e6;    // J released per kg of air when wood burns with exactly enough air
  const T_FLAME_MAX = 1400;  // K, practical ceiling for a wood fire
  const FUEL_W_PER_CM2 = 80; // W of wood a feed tube can burn per cm² of opening
  const FRICTION = 0.06;     // Darcy factor for rough clay and stone walls
  const REFR_T = 3;          // cm, refractory inner wall of the riser
  const K_REFR = 1.0, K_INSUL = 0.2; // W/m·K
  const BENCH_WIDTH = 0.5;   // m
  const MASS_DENSITY = 1800, MASS_C = 900;

  const DEFAULTS = Object.freeze({
    feedSize: 10, tunnelSize: 10, riserSize: 10, channelSize: 10, chimneySize: 10,
    feedHeight: 30, tunnelLength: 40, riserHeight: 100,
    riserInsulation: 8, topGap: 7, sideGap: 5,
    channelLength: 350, bends: 2, benchCover: 20,
    chimneyAboveRiser: 60,
    ambient: 10, fuel: 'dry', coldStart: false, burnHours: 2,
    riverStones: false, fibreInRefractory: false, cracksSealed: true, feedLid: false,
  });

  const SECTIONS = ['feed', 'tunnel', 'riser', 'topGap', 'sideGap', 'channel', 'chimney'];
  const SECTION_NAMES = {
    feed: 'feed tube', tunnel: 'burn tunnel', riser: 'heat riser', topGap: 'gap over the riser',
    sideGap: 'gap between riser and dome', channel: 'bench channel', chimney: 'chimney',
  };

  const rho = (T) => 353 / T;
  const area = (cm) => (cm / 100) ** 2;

  function geometry(p) {
    const riserOuter = p.riserSize + 2 * (REFR_T + p.riserInsulation);
    return {
      feed: { A: area(p.feedSize), L: p.feedHeight / 100, D: p.feedSize / 100, K: 0.5 + 1.2 + (p.feedLid ? 5000 : 0) },
      tunnel: { A: area(p.tunnelSize), L: p.tunnelLength / 100, D: p.tunnelSize / 100, K: 1.2 },
      riser: { A: area(p.riserSize), L: p.riserHeight / 100, D: p.riserSize / 100, K: 0 },
      // Gas spills over the riser lip through a curtain as tall as the gap and as long as the lip.
      topGap: { A: (4 * p.riserSize * p.topGap) / 1e4, L: 0, D: 1, K: 1.5 },
      // Half the ring around the riser carries gas toward the outlet side.
      sideGap: { A: (((riserOuter + 2 * p.sideGap) ** 2 - riserOuter ** 2) / 2) / 1e4, L: p.riserHeight / 100, D: (2 * p.sideGap) / 100, K: 1.0 },
      channel: { A: area(p.channelSize), L: p.channelLength / 100, D: p.channelSize / 100, K: 1.0 + 1.1 * p.bends },
      chimney: { A: area(p.chimneySize), L: (p.riserHeight + p.chimneyAboveRiser) / 100, D: p.chimneySize / 100, K: 2.0 },
    };
  }

  // Temperatures along the gas path for a given air mass flow m (kg/s).
  function temperatures(p, m, T0) {
    const eta = p.fuel === 'damp' ? 0.7 : 0.92;
    const coldFactor = p.coldStart ? 4 : 1;
    const Pmax = FUEL_W_PER_CM2 * p.feedSize ** 2;
    const mcp = m * CP;
    const Pburn = Math.min(Pmax, m * AIR_HEAT);
    const Tfire = Math.min(T_FLAME_MAX, T0 + (eta * Pburn) / mcp);

    // The riser stands in the dome mass, so its outer face sheds heat readily.
    const Rwall = (REFR_T / 100) / K_REFR + (p.riserInsulation / 100) / K_INSUL + 1 / 25;
    const Gr = coldFactor * (1 / Rwall) * 4 * (p.riserSize / 100) * (p.riserHeight / 100);
    const TriserTop = T0 + (Tfire - T0) * Math.exp(-Gr / mcp);

    const Gbell = coldFactor * (2.0 * Math.sqrt(7 / p.topGap) + 4.0 * (p.riserHeight / 100));
    const Tbell = T0 + (TriserTop - T0) * Math.exp(-Gbell / mcp);

    const x = (coldFactor * 8 * 4 * (p.channelSize / 100) * (p.channelLength / 100)) / mcp;
    const Texit = T0 + (Tbell - T0) * Math.exp(-x);
    const TchannelMean = x > 1e-9 ? T0 + ((Tbell - T0) * (1 - Math.exp(-x))) / x : Tbell;

    return {
      Pmax, Pburn, Tfire, TriserTop, Tbell, Texit, TchannelMean,
      Tfeed: T0 + 0.1 * (Tfire - T0),
      TriserMean: (Tfire + TriserTop) / 2,
      TdownMean: (TriserTop + Tbell) / 2,
      Ttop: TriserTop,
    };
  }

  function sectionTemps(t) {
    return {
      feed: t.Tfeed, tunnel: t.Tfire, riser: t.TriserMean, topGap: t.Ttop,
      sideGap: t.TdownMean, channel: t.TchannelMean, chimney: t.Texit,
    };
  }

  function draft(p, t, T0) {
    const Hf = p.feedHeight / 100, Hr = p.riserHeight / 100, Hc = (p.riserHeight + p.chimneyAboveRiser) / 100;
    const r0 = rho(T0);
    return G * (
      Hr * (rho(t.TdownMean) - rho(t.TriserMean)) +
      Hc * (r0 - rho(t.Texit)) -
      Hf * (r0 - rho(t.Tfeed))
    );
  }

  function losses(geo, temps, m) {
    const out = {};
    for (const s of SECTIONS) {
      const g = geo[s];
      const r = rho(temps[s]);
      const k = (g.L > 0 ? (FRICTION * g.L) / g.D : 0) + g.K;
      out[s] = (k * m * m) / (2 * r * g.A * g.A);
    }
    return out;
  }

  function validate(p) {
    for (const key of Object.keys(DEFAULTS)) {
      if (!(key in p)) throw new Error(`simulate: parameter "${key}" is missing`);
      const d = DEFAULTS[key];
      if (typeof d === 'number' && !Number.isFinite(p[key])) {
        throw new Error(`simulate: parameter "${key}" must be a number, got ${JSON.stringify(p[key])}`);
      }
    }
    for (const key of ['feedSize', 'tunnelSize', 'riserSize', 'channelSize', 'chimneySize',
      'feedHeight', 'tunnelLength', 'riserHeight', 'topGap', 'sideGap', 'channelLength', 'burnHours']) {
      if (p[key] <= 0) throw new Error(`simulate: parameter "${key}" must be above 0, got ${p[key]}`);
    }
    if (p.riserHeight + p.chimneyAboveRiser <= 0) {
      throw new Error(`simulate: chimney top must be above the tunnel floor, got riserHeight ${p.riserHeight} + chimneyAboveRiser ${p.chimneyAboveRiser}`);
    }
    if (p.fuel !== 'dry' && p.fuel !== 'damp') throw new Error(`simulate: fuel must be "dry" or "damp", got ${JSON.stringify(p.fuel)}`);
  }

  function simulate(input) {
    const p = Object.assign({}, input);
    validate(p);
    const T0 = p.ambient + 273.15;
    const geo = geometry(p);

    const imbalance = (m) => {
      const t = temperatures(p, m, T0);
      const l = losses(geo, sectionTemps(t), m);
      return draft(p, t, T0) - SECTIONS.reduce((a, s) => a + l[s], 0);
    };

    // Draft and drag can balance at more than one flow: a hot, fast-running stove and a
    // cool, sluggish one. A lit stove at full fire runs on the fastest balance, so take the
    // highest flow at which the draft still beats the drag.
    const lo0 = 1e-6, hiMax = 0.2, steps = 240;
    if (imbalance(hiMax) > 0) throw new Error(`simulate: draft still exceeds drag at ${hiMax} kg/s; the flow search range is too small for these parameters`);
    const grid = Array.from({ length: steps + 1 }, (_, i) => lo0 * (hiMax / lo0) ** (i / steps));
    let top = -1;
    for (let i = steps - 1; i >= 0; i--) if (imbalance(grid[i]) > 0) { top = i; break; }
    let m = 0;
    if (top >= 0) {
      let lo = grid[top], hi = grid[top + 1];
      for (let i = 0; i < 60; i++) {
        const mid = Math.sqrt(lo * hi);
        if (imbalance(mid) > 0) lo = mid; else hi = mid;
      }
      m = lo;
    }

    const stalled = m === 0;
    const mm = stalled ? lo0 : m;
    const t = temperatures(p, mm, T0);
    const st = sectionTemps(t);
    const l = losses(geo, st, mm);
    const totalLoss = SECTIONS.reduce((a, s) => a + l[s], 0);
    const velocity = {}, lossShare = {};
    for (const s of SECTIONS) {
      velocity[s] = stalled ? 0 : m / (rho(st[s]) * geo[s].A);
      lossShare[s] = stalled ? 0 : l[s] / totalLoss;
    }

    const mcp = m * CP;
    const Pburn = stalled ? 0 : t.Pburn;
    const heatToCore = stalled ? 0 : mcp * (t.Tfire - t.Tbell);
    const heatToBench = stalled ? 0 : mcp * (t.Tbell - t.Texit);
    const heatUpChimney = stalled ? 0 : mcp * (t.Texit - T0);

    const benchHeight = (p.channelSize + p.benchCover + 10) / 100;
    const benchMass = MASS_DENSITY * (BENCH_WIDTH * benchHeight - area(p.channelSize)) * (p.channelLength / 100);
    const benchRise = (heatToBench * p.burnHours * 3600) / (benchMass * MASS_C);
    const benchLossWK = 8 * (BENCH_WIDTH + benchHeight) * (p.channelLength / 100);
    const tau = (benchMass * MASS_C) / benchLossWK;
    const warmHours = benchRise > 5 ? (tau * Math.log(benchRise / 5)) / 3600 : 0;

    const hr = p.riserHeight, hf = p.feedHeight;
    const r0 = rho(T0);
    const burnBackRatio = stalled ? 0
      : (hr * (r0 - rho(t.TriserMean))) / (hf * (r0 - rho(t.Tfire)));

    const K = (T) => T - 273.15;
    return {
      params: p,
      stalled,
      airFlow: m,
      airRatio: stalled ? 0 : (m * AIR_HEAT) / t.Pmax,
      firePower: Pburn,
      fuelCapacity: t.Pmax,
      draft: stalled ? draft(p, t, T0) : totalLoss,
      burnBackRatio,
      temps: {
        ambient: p.ambient,
        fire: stalled ? p.ambient : K(t.Tfire),
        riserMean: stalled ? p.ambient : K(t.TriserMean),
        riserTop: stalled ? p.ambient : K(t.TriserTop),
        bell: stalled ? p.ambient : K(t.Tbell),
        exhaust: stalled ? p.ambient : K(t.Texit),
        cooktop: stalled ? p.ambient : K(T0 + (t.TriserTop - T0) * Math.min(0.6, 0.35 * Math.sqrt(7 / p.topGap))),
      },
      velocity,
      lossShare,
      heat: {
        core: heatToCore, bench: heatToBench, chimney: heatUpChimney,
        keptFraction: Pburn > 0 ? 1 - heatUpChimney / Pburn : 0,
      },
      bench: { massKg: benchMass, riseC: benchRise, warmHours },
    };
  }

  function diagnose(res) {
    const p = res.params;
    const out = [];
    const add = (id, level, title, text) => out.push({ id, level, title, text });
    const c = (x) => `${Math.round(x)}°C`;

    if (p.feedLid) add('feedLid', 'danger', 'Lid on the feed tube',
      'The fire cannot get air. Gas builds up inside and can puff back out when the lid is lifted. Never cover the feed tube while it burns.');
    if (!p.cracksSealed) add('cracks', 'danger', 'Cracks not sealed',
      'Smoke and carbon monoxide leak out of the cracks into the shelter. Carbon monoxide has no smell and can kill.');
    if (p.riverStones) add('riverStones', 'danger', 'Stones from wet ground',
      'Stones from rivers, lakes or wet ground hold water. Near the fire the water turns to steam and the stone can burst and throw pieces.');

    if (res.stalled) {
      add('stalled', 'danger', 'No draft',
        'The hot columns cannot lift the gas through the stove. Smoke and flame come back out of the feed tube.');
    } else if (res.airRatio < 1) {
      add('starved', 'danger', 'Fire starved of air',
        `The stove pulls only ${Math.round(res.airRatio * 100)}% of the air the sticks need. The fire smoulders, smoke rolls out of the feed tube and it makes carbon monoxide.`);
    } else if (res.airRatio < 1.5) {
      add('smoky', 'problem', 'Weak pull, smoky burn',
        'There is barely enough air for the sticks. Smoke is not burned off, soot and tar build up in the bench channel, and smoke can spill from the feed tube.');
    }

    if (!res.stalled) {
      const feedA = p.feedSize ** 2;
      const pinch = [['tunnel', p.tunnelSize], ['riser', p.riserSize], ['channel', p.channelSize], ['chimney', p.chimneySize]]
        .filter(([, s]) => s * s < 0.8 * feedA)
        .sort((a, b) => a[1] - b[1]);
      if (pinch.length) {
        const [s, size] = pinch[0];
        add('pinch', 'problem', `Pinch point at the ${SECTION_NAMES[s]}`,
          `The ${SECTION_NAMES[s]} is ${size} × ${size} cm but the feed tube is ${p.feedSize} × ${p.feedSize} cm. It causes ${Math.round(res.lossShare[s] * 100)}% of the drag in the whole stove and throttles the fire.`);
      }
      const big = [['tunnel', p.tunnelSize], ['riser', p.riserSize]].filter(([, s]) => s * s > 1.5 * feedA);
      if (big.length) {
        add('oversize', 'note', `Oversize ${SECTION_NAMES[big[0][0]]}`,
          'The gas slows down and cools in the larger passage, so the fire burns less cleanly than it would at the feed tube size.');
      }
      if (res.temps.riserMean < 630) add('coolRiser', 'problem', 'Riser runs cool',
        `The riser averages ${c(res.temps.riserMean)}. Smoke needs about 650°C to burn off, so it passes through unburned and coats the channel with soot and tar.`);
      if (res.burnBackRatio < 2) add('burnBack', 'problem', 'Fire climbs the feed tube',
        `The riser pulls only ${res.burnBackRatio.toFixed(1)} times as hard as the hot feed tube. The fire creeps up the sticks and burns at the top of the feed tube, and smoke spills into the shelter.`);
      if (res.temps.exhaust < 50 && res.airRatio >= 1) add('coldExhaust', 'problem', 'Exhaust too cold',
        `Gas leaves at ${c(res.temps.exhaust)}. The chimney pulls weakly, water condenses and drips back into the channel, and the stove is hard to start from cold.`);
      else if (res.temps.exhaust > 150) add('hotExhaust', 'note', 'Heat going up the chimney',
        `Gas leaves at ${c(res.temps.exhaust)}. A longer bench channel would keep more of that heat in the mass.`);
    }

    if (p.riserHeight < 2 * p.tunnelLength) add('shortRiser', 'problem', 'Riser short for the tunnel',
      `The riser is ${p.riserHeight} cm and the tunnel ${p.tunnelLength} cm. The riser should be at least twice the tunnel length or the flame is not pulled sideways.`);
    if (p.riserInsulation < 5) add('bareRiser', 'problem', 'Riser not insulated',
      'Without insulation the riser walls soak up the heat. It takes a long time to start pulling and the burn stays smoky until the mass warms.');
    if (p.tunnelLength < 25) add('shortTunnel', 'note', 'Short burn tunnel',
      'The flame reaches the riser before it mixes with the air, so less of the smoke burns.');
    if (p.feedHeight < 20) add('shortFeed', 'note', 'Short feed tube',
      'The fire sits close to the opening. Sparks and smoke spill out and long sticks topple.');
    if (p.topGap < 4) add('tightTop', 'problem', 'Gap over the riser too tight',
      `A ${p.topGap} cm gap chokes the gas as it turns over the riser. It causes ${Math.round(res.lossShare.topGap * 100)}% of the drag.`);
    else if (p.topGap > 10) add('wideTop', 'note', 'Wide gap over the riser',
      `The cooktop sits far from the flame and only reaches about ${c(res.temps.cooktop)}.`);
    if (p.sideGap < 3) add('tightSide', 'problem', 'Gap around the riser too tight',
      `The gas cannot fall freely inside the dome. The narrow gap causes ${Math.round(res.lossShare.sideGap * 100)}% of the drag.`);
    if (p.bends > 4) add('bends', 'note', 'Many bends in the channel',
      `${p.bends} bends each add drag and each needs its own cleanout. Ash collects in every one.`);
    if (p.benchCover < 15) add('thinMass', 'problem', 'Thin mass over the channel',
      'The bench gets hot spots over the channel, cracks, and gives its heat back quickly instead of over the night.');
    else if (p.benchCover > 25) add('thickMass', 'note', 'Thick mass over the channel',
      'The bench stores more heat but takes many hours of firing before the top feels warm.');
    if (p.chimneyAboveRiser < 0) add('lowChimney', 'danger', 'Chimney top below the riser top',
      'When the stove is cold or the wind gusts, the gas runs backwards and smoke fills the shelter.');
    else if (p.chimneyAboveRiser < 60) add('shortChimney', 'problem', 'Chimney short',
      'The chimney top should be at least 60 cm above the riser top and clear of the roof. Wind eddies around the roof can push smoke back down.');
    if (p.fibreInRefractory) add('fibre', 'problem', 'Fibre in the tunnel walls',
      'Straw and grass burn out of the hot tunnel walls and leave holes. The walls weaken and crumble.');
    if (p.fuel === 'damp') add('damp', 'problem', 'Damp fuel',
      'Heat goes into boiling off water. The fire runs cooler, smokes, and leaves tar in the channel.');
    if (p.coldStart) add('cold', 'note', 'Stove cold',
      'The cold mass soaks up heat and the pull is weak. Warm the riser first with a small hot tinder fire at its base.');

    const order = { danger: 0, problem: 1, note: 2 };
    return out.sort((a, b) => order[a.level] - order[b.level]);
  }

  const api = { DEFAULTS, SECTIONS, SECTION_NAMES, simulate, diagnose };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.StoveModel = api;
})(this);
