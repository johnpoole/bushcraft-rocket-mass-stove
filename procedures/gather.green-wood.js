// Cut green wood for smoke
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.green-wood",
    "kind": "gather",
    "title": "Cut green wood for smoke",
    "purpose": "Cut green hardwood that smoulders and smokes, to smoke and dry fish.",
    "requires": {
      "tools": [
        "saw",
        "axe"
      ],
      "materials": [],
      "skills": [
        "skill.saw",
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "green-wood",
          "qty": 3
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Cut live alder, willow or birch, wrist-thick and smaller, from thickets where thinning does no harm. Do not use spruce, pine or other conifers: their pitch makes bitter, sooty smoke.",
      "Saw it into lengths of about 50 cm.",
      "Split anything thicker than 5 cm once with the axe.",
      "Stack it beside the smoke rack."
    ],
    "checks": [
      "Three armloads of green hardwood that bends rather than snaps and hisses when laid on coals."
    ],
    "safety": [],
    "estimate": {
      "hours": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
