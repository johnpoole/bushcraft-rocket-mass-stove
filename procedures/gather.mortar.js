// Mix mortar
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.mortar",
    "kind": "gather",
    "title": "Mix mortar",
    "purpose": "Mix clay mortar for bedding stones and blocks in the bench: the cob mix without fibre, a little wetter.",
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
          "id": "water",
          "qty": 20
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
          "id": "mortar",
          "qty": 0.05
        }
      ]
    },
    "preconditions": [
      "The mixing place: a bare, flat rock ledge at least 1.5 m across within about 20 m of the stove, swept clean. The east arm is mostly bare granite. Clay and sand are piled beside it under bark."
    ],
    "steps": [
      "Measure the same clay and sand as for cob, with no fibre.",
      "Tread it together, adding water a potful at a time, a little wetter than for blocks.",
      "Mix only as much as you will lay today."
    ],
    "checks": [
      "About 0.05 m³.",
      "It holds a thumb-deep dent without slumping."
    ],
    "safety": [],
    "estimate": {
      "hours": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
