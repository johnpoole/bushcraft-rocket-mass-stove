// Tools and materials used only by the food procedures. Merged into catalog.js.
(function (root) {
  'use strict';

  const TOOLS = {
    'fish-weir': { name: 'The fish weir across the creek, fishing', source: 'fish.build-weir' },
    'snare-line': { name: 'The snare line, set', source: 'snare.set-line' },
    'net-poles': { name: 'Net poles: a crossbar on two tripods at the shore', source: 'make.net-poles' },
    'smoke-rack': { name: 'Smoke rack: a two-tier pole frame with a bark roof over a fire pit', source: 'make.smoke-rack' },
    'cache-pole': { name: 'Cache pole, 5 m long, 10–12 cm thick', source: 'make.cache-pole' },
    'stub-ladder': { name: 'Stub ladder: a 5.5 m pole with branch stubs as steps', source: 'make.stub-ladder' },
    'ice-pole': { name: 'Long ice pole, 5 m', source: 'make.ice-gear' },
    'slush-ladle': { name: 'Slotted wooden slush ladle', source: 'make.ice-gear' },
    gaff: { name: 'Wooden gaff hook', source: 'make.ice-gear' },
  };

  const MATERIALS = {
    'fresh-fish': { name: 'Fresh fish, killed and gutted (whole weight)', unit: 'kg', source: 'food.clean-fish' },
    'smoked-fish': { name: 'Smoked, dried fish (weight of the whole fish that went on the rack)', unit: 'kg', source: 'food.smoke-fish' },
    'green-wood': { name: 'Green alder, willow or birch for smoke', unit: 'armloads', source: 'gather.green-wood' },
    'net-floats': { name: 'Dry wooden net floats, 15 cm', unit: 'count', source: 'gather.net-floats' },
    'net-sinkers': { name: 'Bark-wrapped stone net sinkers', unit: 'count', source: 'gather.net-sinkers' },
    'creek-stones': { name: 'Wet stones from the creek bed and shore (never for heat)', unit: 'm³', source: 'gather.creek-stones' },
    'weave-branches': { name: 'Willow or spruce branches for weaving, 1.5–2.5 m', unit: 'armloads', source: 'gather.weave-branches' },
    hares: { name: 'Snowshoe hares', unit: 'count', source: 'snare.check-line' },
    berries: { name: 'Blueberries, lowbush cranberries and crowberries', unit: 'litres', source: 'food.pick-berries' },
    'rose-hips': { name: 'Rose hips, seeds out', unit: 'litres', source: 'food.pick-rose-hips' },
    grubs: { name: 'Beetle grubs and ants from dead wood', unit: 'handfuls', source: 'food.forage-grubs' },
    'cattail-roots': { name: 'Cattail roots, peeled', unit: 'kg', source: 'food.dig-cattail' },
  };

  const part = { TOOLS, MATERIALS };
  if (typeof module !== 'undefined' && module.exports) module.exports = part;
  else (root.CATALOG_PARTS = root.CATALOG_PARTS || {})['food'] = part;
})(this);
