// Gather net sinkers
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.net-sinkers",
    "kind": "gather",
    "title": "Gather net sinkers",
    "purpose": "Make sinkers to hold the bottom of the gill net down, since the kit net has none.",
    "requires": {
      "tools": [
        "knife"
      ],
      "materials": [
        {
          "id": "birch-bark",
          "qty": 1
        }
      ],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "net-sinkers",
          "qty": 13
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Pick 13 stones from the shore, each about the size of an egg and about 150–250 g, about the weight of a large apple. Smooth, flat stones with a narrow waist are best.",
      "Cut a sheet of birch bark into pieces about 10 × 15 cm. Wrap each stone in one, like a parcel, so a tie holds it however it lies.",
      "Keep the wrapped stones wet in the shallows until you rig the net, so the bark stays soft."
    ],
    "checks": [
      "13 wrapped stones, each about the weight of a large apple, none slipping out of its wrap when shaken."
    ],
    "safety": [],
    "estimate": {
      "hours": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
