// Gather birch bark
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.birch-bark",
    "kind": "gather",
    "title": "Gather birch bark",
    "purpose": "Collect sheets of birch bark for tinder, trays and edge covers.",
    "requires": {
      "tools": [
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
          "id": "birch-bark",
          "qty": 6
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Find fallen dead birch trunks. The bark outlasts the wood inside and peels off in sheets.",
      "Cut through the bark along the length of the trunk with the tip of the knife, about 80 cm long.",
      "Work your fingers under the edge of the cut and peel the sheet off around the trunk.",
      "Only if there is no dead birch: take thin outer bark from a living tree by cutting through the papery layers only, never into the green or red layer beneath, which kills the tree.",
      "Stack the sheets flat under a stone so they do not curl."
    ],
    "checks": [
      "Six sheets about 60 × 80 cm, flat and dry."
    ],
    "safety": [],
    "estimate": {
      "hours": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
