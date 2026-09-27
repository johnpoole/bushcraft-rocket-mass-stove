// Gather spruce boughs
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.boughs",
    "kind": "gather",
    "title": "Gather spruce boughs",
    "purpose": "Cut spruce boughs for the roof layer and bedding.",
    "requires": {
      "tools": [
        "saw",
        "knife"
      ],
      "materials": [],
      "skills": [
        "skill.saw",
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "spruce-boughs",
          "qty": 6
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Cut boughs about 60–80 cm long from the lower branches of spruce trees, with the saw or knife.",
      "Take no more than a third of the branches from any one tree, and move on through the stand.",
      "Carry them in armloads with the butt ends together."
    ],
    "checks": [
      "Six armloads of green, flat boughs."
    ],
    "safety": [],
    "estimate": {
      "hours": 2
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
