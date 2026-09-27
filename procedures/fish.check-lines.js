// Check the lines
(function (root) {
  'use strict';
  const procedure = {
    "id": "fish.check-lines",
    "kind": "task",
    "title": "Check the lines",
    "purpose": "Take up the four set lines at first light and bring in what they caught.",
    "requires": {
      "tools": [
        "fishing-kit",
        "knife",
        "club"
      ],
      "materials": [],
      "skills": [
        "skill.hook-and-line",
        "skill.clean-fish"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The lines were set the evening before (fish.set-lines)."
    ],
    "steps": [
      "Go to each set line in turn. A bent pole or a line pulled to one side means a fish.",
      "Pull the fish in steadily, hand over hand, and lift it onto the rocks by the gills, not by the line.",
      "Kill it at once with the club and take the hook out with the knife tip.",
      "Take up every line, wind it on its stick, and take the hooks home. Unused bait goes back in the lake.",
      {
        "call": "food.clean-fish",
        "note": "take the catch to the cleaning rock"
      }
    ],
    "checks": [
      "All four lines and hooks back at camp, none left in the water."
    ],
    "safety": [],
    "estimate": {
      "hours": 0.75
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
