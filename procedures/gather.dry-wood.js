// Gather dry dead wood
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.dry-wood",
    "kind": "gather",
    "title": "Gather dry dead wood",
    "purpose": "Collect dry, dead wood from finger- to wrist-thick for fires.",
    "requires": {
      "tools": [
        "saw"
      ],
      "materials": [],
      "skills": [
        "skill.saw"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "dry-wood",
          "qty": 4
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Look for standing dead trees and dead branches still on the trunk, not wood lying on the ground, which soaks up water.",
      "Test each piece: dry wood snaps cleanly with a crack. If it bends, it is wet or alive; leave it.",
      "Snap what you can by hand. Saw thicker pieces into lengths of about 50 cm.",
      "Bundle the wood into armloads and carry them to where they will be used. Keep them off the ground on two poles, under cover."
    ],
    "checks": [
      "Four armloads stacked off the ground and under cover.",
      "Each piece snaps rather than bends."
    ],
    "safety": [],
    "estimate": {
      "hours": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
