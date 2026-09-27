// Everything a procedure can name as a tool or a material.
// A tool comes from the kit or is made by a procedure; a material comes from the site
// as it stands or is produced by a procedure. Nothing else exists at day zero.
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
    tarp: { name: 'Tarp', source: 'kit' },
    'gill-net': { name: 'Gill net', source: 'kit' },
    'fishing-kit': { name: 'Fishing line and hooks', source: 'kit' },
    'snare-wire': { name: 'Snare wire', source: 'kit' },

    'measuring-stick': { name: 'Measuring stick, marked every 10 cm', source: 'make.measuring-stick' },
    'digging-stick': { name: 'Digging stick', source: 'make.digging-stick' },
    'bark-tray': { name: 'Bark carrying tray', source: 'make.bark-tray' },
    'snow-paddle': { name: 'Snow paddle', source: 'make.snow-paddle' },
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
  };

  const api = { KIT, TOOLS, MATERIALS };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Catalog = api;
})(this);
