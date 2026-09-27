// The camp as a project for the engine: its name, words, top plan, calendar and design numbers.
(function (root) {
  'use strict';

  const node = typeof module !== 'undefined' && module.exports;

  const project = {
    id: 'camp',
    root: 'plan.season',
    pageTitle: 'Camp Instructions',
    heading: 'Instructions',
    intro: 'Every job in the camp, written like code. Each one lists the tools, materials and skills it needs, and calls other instructions as steps, the way a function calls functions. Only the ten kit items are assumed; everything else is made or gathered by an instruction here. Start from a plan.',
    labels: {
      kitHeading: 'The kit',
      kitIntro: 'The only things carried in. Every other tool is made on site.',
      kit: 'kit',
      site: 'on the site',
      carried: 'Carried in',
      carriedNone: 'Nothing from the kit',
      fromSite: 'Taken from the site',
      fromSiteNone: 'Nothing beyond what it gathers',
    },
    // East arm of Great Slave Lake from mid-September: sunrise to sunset, less an hour for water,
    // washing and mending, and no more than a long day's physical work on short rations.
    calendar: {
      start: '2026-09-15',
      days: 140,
      hours: { type: 'daylight', latitude: 62.5, overheadHours: 1.0, maxWorkHours: 10, minWorkHours: 3 },
    },
    schedule: {
      pageTitle: 'Season Schedule',
      heading: 'Season schedule',
      linkText: 'Season schedule',
      planLinkText: 'The season plan',
      intro: "The season plan run day by day: daylight at 62.5° N, daily routines first, then each building job in order, starting only when its tools and materials exist and any drying wait has passed. Hours are the instructions' own estimates, so this is a rough guide, not a promise.",
      milestones: ['plan.first-days', 'shelter.frame', 'fish.build-weir', 'snare.set-line', 'shelter.walls', 'plan.stove-stage-one', 'stove.first-firing', 'plan.stove-stage-two', 'shelter.earth-skirt', 'shelter.snow-bank', 'fish.ice-net'],
    },
    parts: () => (node ? require('../shelter/layout.js') : root.ShelterLayout).PARTS,
    params: () => (node
      ? require('./params.js').load()
      : root.ProcParams.build(root.ShelterLayout, root.StoveModel)),
  };

  if (node) module.exports = project;
  else root.PROJECT = project;
})(this);
