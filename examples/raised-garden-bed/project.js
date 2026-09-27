// The raised garden bed as a project for the engine.
(function (root) {
  'use strict';

  const node = typeof module !== 'undefined' && module.exports;
  const design = node ? require('./design.js') : root.GardenDesign;

  const project = {
    id: 'raised-garden-bed',
    root: 'plan.build-bed',
    pageTitle: 'Raised Garden Bed',
    heading: 'Raised garden bed',
    intro: 'A cedar bed {bed.length} × {bed.width} m and {bed.height} cm deep, built over two weekends. Each job lists the tools, materials and skills it needs and calls other jobs as steps. The tools in the shed are assumed; the lumber, soil and seed are bought, and the prices are rough. Start from the plan.',
    labels: {
      kitHeading: 'Tools in the shed',
      kitIntro: 'Already owned. Anything else is bought or made here.',
      kit: 'owned',
      site: 'on hand',
      carried: 'Owned tools',
      carriedNone: 'No owned tools',
      fromSite: 'On hand',
      fromSiteNone: 'Nothing on hand is used',
    },
    currency: '$',
    // Starts on a Saturday. Six hours on weekend days, an hour and a half on weekday evenings.
    calendar: {
      start: '2027-04-24',
      days: 45,
      hours: { type: 'weekly', hours: [6, 1.5, 1.5, 1.5, 1.5, 1.5, 6] },
    },
    schedule: {
      pageTitle: 'Raised Bed Schedule',
      heading: 'Schedule',
      linkText: 'Schedule',
      planLinkText: 'The plan',
      intro: 'The plan run day by day from a Saturday: six hours on weekend days, an hour and a half on weekday evenings. Daily watering comes first, then each job in order, starting only when what it needs exists and the soil has settled. Hours are estimates.',
      milestones: ['plan.first-weekend', 'soil.fill', 'plant.sow', 'plant.thin'],
    },
    parts: () => design.parts,
    params: () => design.params,
  };

  if (node) module.exports = project;
  else root.PROJECT = project;
})(this);
