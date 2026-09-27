// Clear the ice holes
(function (root) {
  'use strict';
  const procedure = {
    "id": "ice.clear-holes",
    "kind": "task",
    "title": "Clear the ice holes",
    "purpose": "Open the ice holes each morning while they have only skinned over, rather than cutting new ones.",
    "requires": {
      "tools": [
        "axe",
        "slush-ladle",
        "ice-pole",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "snow",
          "qty": 0.1
        }
      ],
      "skills": [
        "skill.read-ice",
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The holes are cut and covered (ice.cut-holes, fish.ice-net)."
    ],
    "steps": [
      "Walk out on your packed path with the ice pole across your body.",
      "Lift the bough cover off each hole and set it aside on the snow.",
      "Chip out the skin of new ice with the axe, from the middle outward, and ladle out the chips and slush.",
      "Chip back any ice growing in from the sides until the hole is as wide as it was cut.",
      "After the day's fishing, lay the boughs back and heap snow over them into a mound 30 cm high."
    ],
    "checks": [
      "Each hole had no more than 3 cm of new ice under its cover.",
      "Each hole open to its full width, then covered again with a mound of snow."
    ],
    "safety": [
      "Keep your mittens out of the water. Ladle; do not reach in."
    ],
    "estimate": {
      "hours": 0.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
