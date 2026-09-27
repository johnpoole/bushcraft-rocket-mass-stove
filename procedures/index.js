// The list of procedure files. Each one is a module named after its id.
// tests/procedures.test.js fails if a file is missing from this list or the list names a missing file.
(function (root) {
  'use strict';

  const IDS = [
    'dig.soil',
    'gather.birch-bark',
    'gather.boughs',
    'gather.dry-wood',
    'gather.moss',
    'gather.poles',
    'make.bark-tray',
    'make.digging-stick',
    'make.measuring-stick',
    'make.root-cordage',
    'make.snow-paddle',
    'plan.winterize',
    'shelter.earth-skirt',
    'shelter.roof-cover',
    'shelter.roof-insulate',
    'shelter.snow-bank',
    'skill.axe',
    'skill.knife',
    'skill.saw',
    'task.light-fire',
  ];

  const load = () => IDS.map((id) => require(`./${id}.js`));

  if (typeof module !== 'undefined' && module.exports) module.exports = { IDS, load };
  else root.PROCEDURE_IDS = IDS;
})(this);
