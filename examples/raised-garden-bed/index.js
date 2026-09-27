// The list of procedure files for the garden bed. Each one is a module named after its id.
(function (root) {
  'use strict';
  const IDS = [
    'base.lay-mesh',
    'frame.assemble',
    'frame.place',
    'make.layout-stakes',
    'plan.build-bed',
    'plan.first-weekend',
    'plan.first-weeks',
    'plan.second-weekend',
    'plan.thinning',
    'plant.sow',
    'plant.thin',
    'routine.water',
    'site.choose',
    'site.clear',
    'site.mark-out',
    'skill.drive-screws',
    'skill.lift',
    'skill.measure-cut',
    'soil.fill',
    'soil.mix',
    'soil.settle',
    'wood.cut-boards',
    'wood.cut-posts',
  ];
  const load = () => IDS.map((id) => require(`./${id}.js`));
  if (typeof module !== 'undefined' && module.exports) module.exports = { IDS, load };
  else root.PROCEDURE_IDS = IDS;
})(this);
