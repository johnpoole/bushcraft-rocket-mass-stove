// Gather flat stones
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.flat-stones",
    "kind": "gather",
    "title": "Gather flat stones",
    "purpose": "Collect flat slabs for the tunnel floor, duct covers, cooktop, plinths and cleanout plugs.",
    "requires": {
      "tools": [
        "measuring-stick"
      ],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "flat-stones",
          "qty": 10
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Look for flat slabs of dense rock on dry ground, split off outcrops by frost. Take only from dry ground, as for all stones near heat.",
      "Measure each with the measuring stick and sort them by size: small (about 20 cm across) for plugs and duct covers, large (40 cm and more) for the tunnel roof, floor and cooktop.",
      "Tap each with another stone. A clear ring means it is sound; a dull thud means a crack. Leave the cracked ones.",
      "Carry them edge-on, against your body, and stack them on edge off the ground."
    ],
    "checks": [
      "Ten sound slabs, sorted by size, each ringing clear when tapped."
    ],
    "safety": [],
    "estimate": {
      "hours": 2
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
