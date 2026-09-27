// Gather and chop dry grass
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.grass-fibre",
    "kind": "gather",
    "title": "Gather and chop dry grass",
    "purpose": "Collect dry grass and sedge to give cob strength, to make light clay, to tie formers, and to bed and cover with.",
    "requires": {
      "tools": [
        "knife",
        "axe"
      ],
      "materials": [],
      "skills": [
        "skill.knife",
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "grass-fibre",
          "qty": 4
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Find standing dead grass or sedge in meadows, along the lakeshore and in old burns. In September it is dry and pale on the stem.",
      "Grab a handful near the ground and cut it with the knife below your hand.",
      "Tie the handfuls into armloads with a twist of grass and carry them in.",
      "Keep long grass for formers and bedding. For cob, light clay and plaster, lay a bundle across a stump and chop it with the axe into lengths of 5–10 cm; for plaster, chop it again to 2–3 cm.",
      "Store it under cover, off the ground."
    ],
    "checks": [
      "Four armloads, dry: a bundle crackles when squeezed and is not damp at its centre."
    ],
    "safety": [],
    "estimate": {
      "hours": 2
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
