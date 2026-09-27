// Set lines under the ice overnight
(function (root) {
  'use strict';
  const procedure = {
    "id": "fish.set-ice-lines",
    "kind": "task",
    "title": "Set lines under the ice overnight",
    "purpose": "Set baited lines through the ice holes in the evening, when burbot feed.",
    "requires": {
      "tools": [
        "fishing-kit",
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
    "preconditions": [
      "The ice holes are open (ice.clear-holes)."
    ],
    "steps": [
      "Bait a hook for each hole with a strip of fish or a piece of liver.",
      "Tie each line to the middle of a stick 60 cm long, and lay the stick across the hole so a fish cannot pull the line under.",
      "Let the bait down to 20 cm off the bottom, by the knot you tied at the depth.",
      "Cover the hole with its boughs and snow. The line runs up through the cover to the stick."
    ],
    "checks": [
      "A baited line in each hole, its stick across the top, and the hole covered."
    ],
    "safety": [],
    "estimate": {
      "hours": 0.3
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
