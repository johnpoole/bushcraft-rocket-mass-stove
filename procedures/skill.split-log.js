// Split a log lengthwise
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.split-log",
    "kind": "skill",
    "title": "Split a log lengthwise",
    "purpose": "Split a short log into halves along its length, for the counter top and the water basin.",
    "requires": {
      "tools": [
        "axe",
        "club",
        "wedges"
      ],
      "materials": [],
      "skills": [
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Choose a length with straight grain and no knots in it. Twisted or knotty wood will not split straight.",
      "Look at the end grain for a check (a crack) running across the middle. Split along it if there is one.",
      "Lay the log on the ground, or stand a short one on end on the chopping block.",
      "Set the axe edge across the middle of the end grain and drive it 2–3 cm in with the club.",
      "Drive a wedge into the crack beside the axe with the club, then free the axe.",
      "Follow the crack along the side of the log: drive the next wedge into it 20–30 cm further on, then the next, leapfrogging the wedges until the halves come apart.",
      "Cut through any fibres still holding the halves together with the axe."
    ],
    "checks": [],
    "safety": [
      "Keep your feet clear of the line of the split. A log springs apart suddenly.",
      "Strike the axe head with the club only on its back, never with another axe or a stone."
    ],
    "estimate": {
      "hours": 0
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
