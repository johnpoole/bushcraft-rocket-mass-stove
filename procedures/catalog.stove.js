// Tools and materials used only by the stove procedures. Merged into catalog.js.
(function (root) {
  'use strict';

  const TOOLS = {
    'size-gauge': { name: 'Stove size gauges: one the clear opening, one a finger longer for formers', source: 'make.size-gauge' },
    'block-mould': { name: 'Two-cell wooden block mould and strike-off stick', source: 'make.block-mould' },
    'ash-rake': { name: 'Wooden ash rake, 1.2 m', source: 'make.ash-rake' },
  };

  const MATERIALS = {
    'grass-fibre': { name: 'Dry grass and sedge, long or chopped', unit: 'armloads', source: 'gather.grass-fibre' },
    withies: { name: 'Willow or alder shoots for weaving', unit: 'count', source: 'gather.withies' },
    cob: { name: 'Cob: clay, sand and chopped grass', unit: 'm³', source: 'gather.cob' },
    'refractory-mix': { name: 'Refractory mix: clay and sand, no fibre', unit: 'm³', source: 'gather.refractory-mix' },
    mortar: { name: 'Clay mortar: cob mix without fibre, a little wetter', unit: 'm³', source: 'gather.mortar' },
    'light-clay': { name: 'Light clay insulation: grass coated in clay slurry', unit: 'm³', source: 'gather.light-clay' },
    slip: { name: 'Clay slip: clay stirred into water', unit: 'litres', source: 'gather.slip' },
    plaster: { name: 'Fine clay-and-sand plaster', unit: 'm³', source: 'gather.plaster' },
    'stove-former': { name: 'Grass-and-bark former for the burn tunnel or feed tube', unit: 'count', source: 'gather.stove-formers' },
    'riser-basket': { name: 'Woven withy basket, the riser former', unit: 'count', source: 'gather.riser-basket' },
    'fired-bricks': { name: 'Pit-fired clay tiles for the tunnel floor', unit: 'count', source: 'gather.fired-bricks' },
    'clay-blocks': { name: 'Dry clay blocks, 20 × 10 × 8 cm', unit: 'count', source: 'stove.make-blocks' },
  };

  const part = { TOOLS, MATERIALS };
  if (typeof module !== 'undefined' && module.exports) module.exports = part;
  else (root.CATALOG_PARTS = root.CATALOG_PARTS || {})['stove'] = part;
})(this);
