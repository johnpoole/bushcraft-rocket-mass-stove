// Lay stones in cob
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.stone-in-cob",
    "kind": "skill",
    "title": "Lay stones in cob",
    "purpose": "Build solid walls and a solid core of stone bedded in cob or mortar, with no voids and nothing loose.",
    "requires": {
      "tools": [],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Use only dense stones from dry ground near the heat.",
      "Spread a bed of cob or mortar before each stone, then press the stone into it with a slight twist until it squeezes out on all sides.",
      "Keep stones about 2 cm apart. Stone should not touch stone: fill every gap with mortar worked in with your fingers.",
      "Lay long stones across the wall, not along it, every few courses, to tie the two faces together.",
      "Stagger joints so no joint runs straight up.",
      "Keep the faces straight with a plumb line of fishing line and a stone.",
      "Do not build more than about half a metre of wet wall in a day: it slumps. Let each day's work firm overnight."
    ],
    "checks": [],
    "safety": [],
    "estimate": {
      "hours": 0
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
