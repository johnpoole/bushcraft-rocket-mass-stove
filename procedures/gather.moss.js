// Gather and dry moss
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.moss",
    "kind": "gather",
    "title": "Gather and dry moss",
    "purpose": "Collect moss and dry it, for insulation in the roof.",
    "requires": {
      "tools": [
        "bark-tray",
        "knife"
      ],
      "materials": [],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "dry-moss",
          "qty": 1
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Find thick carpets of feather moss or sphagnum on the forest floor, away from the camp paths.",
      "Cut around a mat with the knife and roll it up from one edge, like a carpet. Shake out the soil and needles.",
      "Wring the wettest mats out by hand.",
      "Spread the moss 5 cm thick on bare, sunny rock, and turn it every few hours. Bring it under cover at night and before rain.",
      "Repeat over three or four dry days until it is dry.",
      "Store it under cover, off the ground, until you use it."
    ],
    "checks": [
      "About 1 m³ of moss, loosely piled.",
      "A handful squeezed hard feels springy and leaves no damp on your palm."
    ],
    "safety": [],
    "estimate": {
      "hours": 8,
      "note": "Plus about 3 dry days of drying, with turning in between."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
