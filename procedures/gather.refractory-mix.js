// Mix refractory mix
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.refractory-mix",
    "kind": "gather",
    "title": "Mix refractory mix",
    "purpose": "Mix clay and sand without fibre for the hottest parts: the burn tunnel, the feed tube and the riser wall.",
    "requires": {
      "tools": [
        "pot",
        "bark-tray"
      ],
      "materials": [
        {
          "id": "clay",
          "qty": 0.025
        },
        {
          "id": "sand",
          "qty": 0.035
        },
        {
          "id": "water",
          "qty": 10
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
          "id": "refractory-mix",
          "qty": 0.05
        }
      ]
    },
    "preconditions": [
      "The mixing place: a bare, flat rock ledge at least 1.5 m across within about 20 m of the stove, swept clean. The east arm is mostly bare granite. Clay and sand are piled beside it under bark."
    ],
    "steps": [
      "Measure 1 part clay to 1–2 parts sand, using your fire test to pick the amount.",
      "Tread them together with as little water as you can, until it is one even colour.",
      "Add no fibre: it burns out in the hottest parts and leaves the wall weak. Pick out any roots or grass you see."
    ],
    "checks": [
      "About 0.05 m³.",
      "A ball dropped from waist height flattens on the bottom but does not crack apart, and no fibre shows in a broken lump."
    ],
    "safety": [],
    "estimate": {
      "hours": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
