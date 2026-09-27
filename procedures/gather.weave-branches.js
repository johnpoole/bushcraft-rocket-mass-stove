// Cut weaving branches
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.weave-branches",
    "kind": "gather",
    "title": "Cut weaving branches",
    "purpose": "Cut long, bendy willow or spruce branches to weave between the weir stakes.",
    "requires": {
      "tools": [
        "knife",
        "saw"
      ],
      "materials": [],
      "skills": [
        "skill.knife",
        "skill.saw"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "weave-branches",
          "qty": 4
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Cut willow shoots 1–2 cm thick at the butt and 1.5–2.5 m long from the thickets along the creek. Where there is no willow, cut the long lower branches of spruce.",
      "Strip the side twigs by pulling each shoot through your closed hand.",
      "Take no more than a third of the shoots from any one bush.",
      "Keep them in the creek until you weave them, so they stay bendy."
    ],
    "checks": [
      "Four armloads of shoots at least 1.5 m long that bend into a U without cracking."
    ],
    "safety": [],
    "estimate": {
      "hours": 1.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
