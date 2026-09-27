// Everything a procedure can name as a tool or a material.
// A tool comes from the kit or is made by a procedure; a material comes from the site
// as it stands or is produced by a procedure. Nothing else exists at day zero.
// Shared entries live here; each domain adds its own in catalog.<domain>.js.
(function (root) {
  'use strict';

  // The ten items taken in. Nothing else is carried, so every other tool is made on site.
  const KIT = ['sleeping-bag', 'axe', 'saw', 'knife', 'pot', 'ferro-rod', 'tarp', 'gill-net', 'fishing-kit', 'snare-wire'];

  const TOOLS = {
    'sleeping-bag': { name: 'Sleeping bag', source: 'kit' },
    axe: { name: 'Axe', source: 'kit' },
    saw: { name: 'Folding or bow saw', source: 'kit' },
    knife: { name: 'Fixed-blade knife', source: 'kit' },
    pot: { name: 'Cooking pot', source: 'kit' },
    'ferro-rod': { name: 'Ferro rod and striker', source: 'kit' },
    tarp: { name: 'Tarp, {tarp.width} × {tarp.length} m', source: 'kit' },
    'gill-net': { name: 'Gill net', source: 'kit' },
    'fishing-kit': { name: 'Fishing line and hooks', source: 'kit' },
    'snare-wire': { name: 'Snare wire', source: 'kit' },

    'measuring-stick': { name: 'Measuring stick, marked every 10 cm', source: 'make.measuring-stick' },
    'digging-stick': { name: 'Digging stick', source: 'make.digging-stick' },
    'bark-tray': { name: 'Bark carrying tray', source: 'make.bark-tray' },
    'snow-paddle': { name: 'Snow paddle', source: 'make.snow-paddle' },
    club: { name: 'Wooden club', source: 'make.club' },
  };

  const MATERIALS = {
    'dry-wood': { name: 'Dry dead wood, wrist-thick and smaller', unit: 'armloads', source: 'gather.dry-wood' },
    'birch-bark': { name: 'Birch bark sheets, about 60 × 80 cm', unit: 'count', source: 'gather.birch-bark' },
    'root-cordage': { name: 'Split spruce root cordage', unit: 'm', source: 'make.root-cordage' },
    poles: { name: 'Straight poles, 4–6 cm thick, 3.5 m long', unit: 'count', source: 'gather.poles' },
    'spruce-boughs': { name: 'Spruce boughs', unit: 'armloads', source: 'gather.boughs' },
    'dry-moss': { name: 'Dry moss', unit: 'm³', source: 'gather.moss' },
    soil: { name: 'Mineral soil', unit: 'm³', source: 'dig.soil' },
    snow: { name: 'Snow lying on the ground', unit: 'm³', source: 'site' },
    water: { name: 'Lake or creek water', unit: 'litres', source: 'site' },
    stakes: { name: 'Pointed stakes, 5–8 cm thick', unit: 'count', source: 'gather.stakes' },
    stones: { name: 'Dense stones from dry ground', unit: 'm³', source: 'gather.stones' },
    'flat-stones': { name: 'Flat stone slabs from dry ground', unit: 'count', source: 'gather.flat-stones' },
    clay: { name: 'Clay subsoil, free of roots and stones', unit: 'm³', source: 'dig.clay' },
    sand: { name: 'Coarse sand', unit: 'm³', source: 'gather.sand' },
  };

  // Domain parts, each adding { TOOLS, MATERIALS }. In the browser each part file and
  // engine/catalog.js must be loaded before this one; in Node they are required here.
  const node = typeof module !== 'undefined' && module.exports;
  const engine = node ? require('../engine/catalog.js') : root.ProcCatalog;
  if (!engine) throw new Error('engine/catalog.js did not load before procedures/catalog.js');
  const parts = {};
  for (const part of ['stove', 'shelter', 'food']) parts[part] = node ? require(`./catalog.${part}.js`) : (root.CATALOG_PARTS || {})[part];

  const api = engine.assemble({ KIT, TOOLS, MATERIALS }, parts);
  if (node) module.exports = api;
  else root.Catalog = api;
})(this);
