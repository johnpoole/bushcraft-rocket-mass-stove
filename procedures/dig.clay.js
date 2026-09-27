// Dig clay
(function (root) {
  'use strict';
  const procedure = {
    "id": "dig.clay",
    "kind": "gather",
    "title": "Dig clay",
    "purpose": "Dig clay subsoil for cob, mortar, blocks and plaster.",
    "requires": {
      "tools": [
        "digging-stick",
        "bark-tray",
        "knife"
      ],
      "materials": [],
      "skills": [
        "skill.clay-test"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "clay",
          "qty": 0.1
        }
      ]
    },
    "preconditions": [
      "A clay deposit has been found and passed the clay test."
    ],
    "steps": [
      "Scrape off the moss, topsoil and roots down to the clay layer. Pile the topsoil to one side to put back.",
      "Loosen the clay with the digging stick and lift it out in lumps. Cut sticky clay with the knife.",
      "Pick out roots and stones as you go.",
      "Carry it half a tray at a time to the mixing place, and keep the pile covered with bark so it neither dries out nor washes away.",
      "When the pit is finished, put the topsoil back over it."
    ],
    "checks": [
      "About 0.1 m³ of clay, free of roots and stones, covered at the mixing place."
    ],
    "safety": [
      "Do not dig under an overhanging bank: undercut banks collapse."
    ],
    "estimate": {
      "hours": 2,
      "note": "About 0.05 m³ an hour, more in soft ground."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
