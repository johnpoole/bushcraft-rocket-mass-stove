// Tools and materials used only by the shelter procedures. Merged into catalog.js.
(function (root) {
  'use strict';

  const TOOLS = {
    'tarp-inner': { name: 'Inner tarp piece (vapour barrier), {tarp.width} × {tarp.innerLength} m', source: 'make.tarp-pieces' },
    'tarp-outer': { name: 'Outer tarp piece (rain cover), {tarp.width} × {tarp.outerLength} m', source: 'make.tarp-pieces' },
    'hook-pole': { name: 'Hook pole, 4.5 m, with a branch-stub hook at the top', source: 'make.hook-pole' },
    wedges: { name: 'Three hardwood splitting wedges', source: 'make.wedges' },
    door: { name: 'Door of lashed poles faced with spruce boughs', source: 'make.door' },
    'water-basin': { name: 'Water basin, a burned-out half log', source: 'make.water-basin' },
  };

  const MATERIALS = {
    'frame-posts': { name: 'Frame posts, about 14 cm thick, 1.8–2.6 m long, saddled at the top', unit: 'count', source: 'gather.frame-posts' },
    'beam-logs': { name: 'Beam and plate logs, 16–18 cm thick, cut to fit between the supports', unit: 'count', source: 'gather.beam-logs' },
    rafters: { name: 'Rafters, 3.0 m long, at least 8 cm thick at the small end', unit: 'count', source: 'gather.rafters' },
    'wall-stakes': { name: 'Tall pointed wall stakes, 7–9 cm thick, 2.6 m long', unit: 'count', source: 'gather.wall-stakes' },
    'wall-logs': { name: 'Peeled wall logs, 12–18 cm thick, in 1.4–2.9 m lengths', unit: 'm', source: 'gather.wall-logs' },
    'hewn-logs': { name: 'Wall logs hewn flat top and bottom', unit: 'm', source: 'gather.hewn-logs' },
    'chinking-moss': { name: 'Fresh moss for chinking', unit: 'm³', source: 'gather.chinking-moss' },
  };

  const part = { TOOLS, MATERIALS };
  if (typeof module !== 'undefined' && module.exports) module.exports = part;
  else (root.CATALOG_PARTS = root.CATALOG_PARTS || {})['shelter'] = part;
})(this);
