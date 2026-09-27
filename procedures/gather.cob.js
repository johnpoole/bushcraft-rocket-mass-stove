// Mix cob
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.cob",
    "kind": "gather",
    "title": "Mix cob",
    "purpose": "Mix one batch of cob, the bulk material: about 1 part clay to 2–3 parts sand, with chopped dry grass.",
    "requires": {
      "tools": [
        "pot",
        "bark-tray"
      ],
      "materials": [
        {
          "id": "clay",
          "qty": 0.02
        },
        {
          "id": "sand",
          "qty": 0.04
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
          "id": "cob",
          "qty": 0.05
        }
      ]
    },
    "preconditions": [
      "The mixing place: a bare, flat rock ledge at least 1.5 m across within about 20 m of the stove, swept clean. The east arm is mostly bare granite. Clay and sand are piled beside it under bark."
    ],
    "steps": [
      "Use the sand-to-clay ratio from your fire test, between 2 and 3 parts sand to 1 of clay.",
      "Tread the clay and sand together on the ledge, with water from the pot, until it is one even colour.",
      "Scatter in half an armload of chopped dry grass, about a good handful for every potful of clay, and tread and fold it in.",
      "Keep it as stiff as you can work.",
      "Use it the same day, or cover it with wet grass and bark."
    ],
    "checks": [
      "About 0.05 m³, about two and a half bark trays full.",
      "A ball dropped from waist height flattens on the bottom but does not splatter or crack apart."
    ],
    "safety": [],
    "estimate": {
      "hours": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
