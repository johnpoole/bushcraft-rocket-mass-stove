// Make spruce root cordage
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.root-cordage",
    "kind": "gather",
    "title": "Make spruce root cordage",
    "purpose": "Make strong, flexible cordage for lashing and tying from the roots of spruce trees.",
    "requires": {
      "tools": [
        "knife"
      ],
      "materials": [],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "root-cordage",
          "qty": 10
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Under a spruce, lift the moss with your hands 1–2 m out from the trunk. The long roots run just under it.",
      "Choose roots about as thick as a pencil. Cut one free near the tree with the knife and pull it up gently along its length, lifting the moss as you go, until you have 1–2 m.",
      "Take a few roots from each tree and move on. Press the moss back down over the gaps.",
      "Split each root in half along its length: start the split at the thick end with the knife, then pull the two halves apart with even force, thumbs close to the split. If the split runs off to one side, pull harder on the thicker half.",
      "Peel the bark off by pulling each half through a split stick pinched in your fist.",
      "Coil the cordage and keep it in water, in the pot or in the lake shallows under a stone, until you use it. Dry root goes stiff; soak it again before tying."
    ],
    "checks": [
      "About 10 m of split, peeled root that bends double without cracking."
    ],
    "safety": [],
    "estimate": {
      "hours": 1.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
