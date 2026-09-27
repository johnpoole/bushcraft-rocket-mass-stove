// Mix clay by treading
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.tread-mix",
    "kind": "skill",
    "title": "Mix clay by treading",
    "purpose": "Mix clay, sand, fibre and water into an even cob, mortar or refractory mix with your feet, without a tarp or tools.",
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
      "Mix on a bare, flat rock ledge swept clean, not on the tarp, which is on the roof, and not on soil, which gets trodden in.",
      "Tip the clay on in a heap about a tray at a time and flatten it. Spread the sand over it.",
      "Add water a potful at a time, only as much as it takes to work. Every litre you add is a litre to dry.",
      "Tread it with your heels, working across the heap and back.",
      "Fold it: slide both hands under one edge, lift it over onto the middle, and tread again. Repeat from each side.",
      "Add fibre last, if the mix takes it, a little at a time between treadings.",
      "It is mixed when a broken lump is one even colour with no streaks of sand or clay.",
      "Clay water is cold: warm your feet by the fire between batches, and stop if they go numb.",
      "Cover any mix you are not using with wet grass and bark so it does not dry out."
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
