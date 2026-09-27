// Winterize the shelter
(function (root) {
  'use strict';
  const procedure = {
    "id": "plan.winterize",
    "kind": "plan",
    "title": "Winterize the shelter",
    "purpose": "Cut the shelter's heat loss before the cold: a layered roof, a bank of earth at the foot of the walls, and snow banked against the walls once it comes.",
    "requires": {
      "tools": [],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The shelter frame and walls are built."
    ],
    "steps": [
      {
        "call": "make.measuring-stick"
      },
      {
        "call": "make.digging-stick"
      },
      {
        "call": "make.root-cordage"
      },
      {
        "call": "make.bark-tray"
      },
      {
        "call": "shelter.roof-cover",
        "note": "in the first days"
      },
      {
        "call": "shelter.roof-insulate",
        "note": "once the moss is dry"
      },
      {
        "call": "shelter.earth-skirt",
        "note": "in October, before the ground freezes"
      },
      {
        "call": "make.snow-paddle"
      },
      {
        "call": "shelter.snow-bank",
        "note": "once snow comes to stay"
      }
    ],
    "checks": [
      "The roof, the earth skirt and the snow bank all pass their own checks.",
      "The shelter heat model shows the heat loss falling at each stage."
    ],
    "safety": [],
    "estimate": {
      "hours": 0
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
