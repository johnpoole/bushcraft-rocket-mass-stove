// Mix clay plaster
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.plaster",
    "kind": "gather",
    "title": "Mix clay plaster",
    "purpose": "Mix a fine clay-and-sand plaster to seal the outside of the stove and bench.",
    "requires": {
      "tools": [
        "pot",
        "bark-tray"
      ],
      "materials": [
        {
          "id": "clay",
          "qty": 0.015
        },
        {
          "id": "sand",
          "qty": 0.035
        },
        {
          "id": "grass-fibre",
          "qty": 0.5
        },
        {
          "id": "water",
          "qty": 15
        }
      ],
      "skills": [
        "skill.tread-mix"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "plaster",
          "qty": 0.05
        }
      ]
    },
    "preconditions": [
      "The mixing place: a bare, flat rock ledge at least 1.5 m across within about 20 m of the stove, swept clean. The east arm is mostly bare granite. Clay and sand are piled beside it under bark."
    ],
    "steps": [
      {
        "call": "dig.clay"
      },
      {
        "call": "gather.sand"
      },
      {
        "call": "gather.grass-fibre"
      },
      "Pick the finest sand: rub it between your palms and pick out anything bigger than a pea.",
      "Tread clay and sand together at about the cob ratio, a little wetter.",
      "Work in grass chopped to 2–3 cm.",
      "Test a patch before plastering: smear 1 cm on a flat stone and dry it by the fire. If it cracks, add sand."
    ],
    "checks": [
      "About 0.05 m³.",
      "A 1 cm test patch dried by the fire shows no crack wider than a hairline."
    ],
    "safety": [],
    "estimate": {
      "hours": 1.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
