// Set baited lines overnight
(function (root) {
  'use strict';
  const procedure = {
    "id": "fish.set-lines",
    "kind": "task",
    "title": "Set baited lines overnight",
    "purpose": "Set four baited lines off the shore in the evening: two off rocky points for lake trout and two in weedy bays for pike.",
    "requires": {
      "tools": [
        "fishing-kit",
        "snare-wire",
        "knife"
      ],
      "materials": [],
      "skills": [
        "skill.hook-and-line"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Take the bait kept from the day's cleaning: belly strips, eyes and livers.",
      "Walk to the two rocky points either side of the camp. At each, set a line for lake trout on a spring pole, with the bait just off the bottom where it drops away.",
      "Walk to the weedy bay and set two lines for pike, each with a snare-wire leader, the bait 50 cm down along the edge of the weeds.",
      "Check each spring pole is wedged firmly: pull the line hard toward the water and the pole must stay put."
    ],
    "checks": [
      "Four lines out, each baited, each pole bending back when the line is pulled."
    ],
    "safety": [],
    "estimate": {
      "hours": 0.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
