// Gather chinking moss
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.chinking-moss",
    "kind": "gather",
    "title": "Gather chinking moss",
    "purpose": "Collect fresh moss to stuff the gaps between the logs. It packs tighter damp than dry, and dries in place.",
    "requires": {
      "tools": [
        "knife",
        "bark-tray"
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
          "id": "chinking-moss",
          "qty": 0.25
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Find thick feather moss or sphagnum on the forest floor, away from the camp paths and at least 10 m from the shelter.",
      "Cut around a mat with the knife and roll it up. Shake out the soil and needles.",
      "Pack it loosely into the bark tray and carry it to the walls.",
      "Pile it under a bark sheet or the roof edge so it stays damp but not soaking."
    ],
    "checks": [
      "About 0.25 m³ of loose moss, about a dozen trays, with no soil in it."
    ],
    "safety": [],
    "estimate": {
      "hours": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
