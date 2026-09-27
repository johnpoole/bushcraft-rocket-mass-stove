// Gather dry-land stones
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.stones",
    "kind": "gather",
    "title": "Gather dry-land stones",
    "purpose": "Collect stones for the stove, bench, plinths and chimney, only from dry ground.",
    "requires": {
      "tools": [
        "bark-tray"
      ],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "stones",
          "qty": 0.25
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Collect stones only from dry ground above the high-water line and away from springs and seeps: scree, frost-heaved rock, dry banks. Stones from the lake, streams or wet ground hold water and can burst when heated.",
      "Choose dense, hard stone: granite-type rock that rings when two pieces are knocked together. Leave shale, layered or crumbly stone.",
      "Carry them to a dry pile near where they will be used, fist- to loaf-sized in the bark tray and larger ones by hand, and keep the pile off wet ground."
    ],
    "checks": [
      "About 0.25 m³ of dense stones on a dry pile.",
      "No stone from wet ground in the pile."
    ],
    "safety": [
      "Lift with your legs, back straight. Roll the big ones rather than carrying them."
    ],
    "estimate": {
      "hours": 3
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
