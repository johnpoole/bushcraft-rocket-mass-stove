// Build the dome, cooktop and step
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.dome",
    "kind": "task",
    "builds": ["dome"],
    "title": "Build the dome, cooktop and step",
    "purpose": "Build the cob dome around the riser, with the gas outlet to the bench, a cleanout, and a flat stone cooktop on top, and set a step to cook from.",
    "requires": {
      "tools": [
        "measuring-stick",
        "size-gauge",
        "saw",
        "knife"
      ],
      "materials": [
        {
          "id": "cob",
          "qty": 0.2
        },
        {
          "id": "flat-stones",
          "qty": 4
        }
      ],
      "skills": [
        "skill.tread-mix",
        "skill.saw"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The riser is finished and firm."
    ],
    "steps": [
      {
        "call": "gather.cob",
        "times": 4,
        "note": "one batch a day as the walls go up"
      },
      {
        "call": "gather.flat-stones"
      },
      "Mark the dome square on the base, leaving a {stove.sideGap} cm gap between the outside of the riser and the inside of the dome wall on every side.",
      "Build the dome walls of cob {stove.domeWall} cm thick, about 20 cm higher each day, letting each day's work firm before the next.",
      "On the south side, bring the dome wall tight against the feed tube's refractory and seal the joint with cob, so no gas can pass between them.",
      "At the bottom of the west wall, on the bench side, leave an outlet {stove.size} × {stove.size} cm with its floor at the shelter floor. Bridge it with a small flat stone as a lintel.",
      "In the south face, west of the feed tube, leave a cleanout at floor level about 15 cm wide and 12 cm high, bridged with a flat stone lintel.",
      "Check the side gap with the measuring stick every 20 cm of height.",
      "Stop the walls {stove.topGap} cm above the riser top lip. Level the top with a straight stick.",
      "Bed the largest flat slab, at least as wide as the dome, on a layer of cob across the top. That stone is the cooktop, about {stove.cooktopHeight} m above the floor.",
      "Close the cleanout with a flat stone plug and seal its edges with a bead of cob, so it can be cut free and lifted.",
      "Saw a round {stove.stepHeight} cm long from a dry dead trunk at least 30 cm thick. Stand it by the south-west corner of the dome, a hand-width clear of the feed tube, as a step. If there is no such trunk, stack flat stones to the same height."
    ],
    "checks": [
      "The gap from riser to dome wall is {stove.sideGap} cm on all four sides.",
      "Before the cooktop went on, the gap from the riser lip to the top of the walls was {stove.topGap} cm.",
      "The size gauge passes through the outlet both ways.",
      "Standing on the step, the cooktop is at about waist height."
    ],
    "safety": [
      "The cooktop gets hot enough to burn skin through a sleeve. Never lean on it."
    ],
    "estimate": {
      "hours": 8,
      "waitDays": 2,
      "note": "Estimate: over four or five days while the walls firm; the top needs two more days before the duct is joined."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
