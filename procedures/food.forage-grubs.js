// Pick grubs and ants from dead wood
(function (root) {
  'use strict';
  const procedure = {
    "id": "food.forage-grubs",
    "kind": "gather",
    "title": "Pick grubs and ants from dead wood",
    "purpose": "Eat the beetle grubs and ants you find in dead wood as you split it: protein and some fat, all winter.",
    "requires": {
      "tools": [
        "axe",
        "knife",
        "pot"
      ],
      "materials": [],
      "skills": [
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "grubs",
          "qty": 1
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "As you split dead wood, look in soft, tunnelled wood and under loose bark for white beetle grubs and for carpenter ant nests.",
      "Pick them out with the knife tip into the pot.",
      "Toast them on the cooktop or on a flat stone by the fire until crisp, or boil them in the broth. Do not eat them raw."
    ],
    "checks": [
      "A handful picked and cooked."
    ],
    "safety": [],
    "estimate": {
      "hours": 0.3
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
