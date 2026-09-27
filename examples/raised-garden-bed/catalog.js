// Everything the garden bed procedures can name. Tools you own are the kit; lumber, screws,
// mesh, soil and seed are bought at the rough prices below; sticks and water are on hand.
(function (root) {
  'use strict';

  const node = typeof module !== 'undefined' && module.exports;
  const engine = node ? require('../../engine/catalog.js') : root.ProcCatalog;
  if (!engine) throw new Error('engine/catalog.js did not load before the garden catalog');

  // Tools already in the shed.
  const KIT = ['tape-measure', 'drill-driver', 'hand-saw', 'speed-square', 'spade', 'wheelbarrow', 'rake', 'level', 'garden-hose', 'work-gloves'];

  const TOOLS = {
    'tape-measure': { name: 'Tape measure', source: 'kit' },
    'drill-driver': { name: 'Cordless drill-driver with a star bit', source: 'kit' },
    'hand-saw': { name: 'Hand saw', source: 'kit' },
    'speed-square': { name: 'Speed square', source: 'kit' },
    spade: { name: 'Spade', source: 'kit' },
    wheelbarrow: { name: 'Wheelbarrow', source: 'kit' },
    rake: { name: 'Garden rake', source: 'kit' },
    level: { name: 'Spirit level, 60 cm or longer', source: 'kit' },
    'garden-hose': { name: 'Garden hose with a spray nozzle', source: 'kit' },
    'work-gloves': { name: 'Work gloves', source: 'kit' },

    'staple-gun': { name: 'Heavy-duty staple gun', source: 'bought', cost: 25 },
    'tin-snips': { name: 'Tin snips', source: 'bought', cost: 20 },
    'layout-stakes': { name: 'Four layout stakes and a string line', source: 'make.layout-stakes' },
  };

  // Prices are rough, in dollars, to budget with; check your local supplier.
  const MATERIALS = {
    sticks: { name: 'Straight sticks about 40 cm long', unit: 'count', source: 'site' },
    water: { name: 'Tap water', unit: 'litres', source: 'site' },
    sod: { name: 'Lifted sod and weeds', unit: 'm²', source: 'site.clear' },

    'cedar-boards': { name: 'Cedar boards, {board.size}, {board.length} m long', unit: 'count', source: 'bought', cost: 38 },
    'cedar-post': { name: 'Cedar post, {post.side} cm square, 2.4 m long', unit: 'count', source: 'bought', cost: 30 },
    'deck-screws': { name: 'Exterior deck screws, 75 mm, box of 100', unit: 'boxes', source: 'bought', cost: 18 },
    'hardware-cloth': { name: 'Galvanized hardware cloth, 13 mm mesh, 1.2 m wide', unit: 'm', source: 'bought', cost: 12 },
    staples: { name: 'Staples for the staple gun, 12 mm', unit: 'boxes', source: 'bought', cost: 8 },
    'mason-line': { name: 'Mason line', unit: 'rolls', source: 'bought', cost: 6 },
    topsoil: { name: 'Screened topsoil', unit: 'm³', source: 'bought', cost: 55 },
    compost: { name: 'Finished compost', unit: 'm³', source: 'bought', cost: 75 },
    straw: { name: 'Straw bale for mulch', unit: 'bales', source: 'bought', cost: 12 },
    seeds: { name: 'Seed packets', unit: 'count', source: 'bought', cost: 4 },

    'side-boards': { name: 'Side boards cut to length', unit: 'count', source: 'wood.cut-boards' },
    'corner-posts': { name: 'Corner posts cut to length', unit: 'count', source: 'wood.cut-posts' },
    'bed-frame': { name: 'Assembled bed frame', unit: 'count', source: 'frame.assemble' },
    'soil-mix': { name: 'Topsoil and compost, mixed', unit: 'm³', source: 'soil.mix' },
    'settled-bed': { name: 'Bed of soil watered in and settled', unit: 'count', source: 'soil.settle' },
  };

  const api = engine.assemble({ KIT, TOOLS, MATERIALS });
  if (node) module.exports = api;
  else root.Catalog = api;
})(this);
