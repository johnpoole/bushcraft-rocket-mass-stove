// Cut the cache pole
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.cache-pole",
    "kind": "make",
    "title": "Cut the cache pole",
    "purpose": "Cut a stout pole long enough to span the two cache trees.",
    "requires": {
      "tools": [
        "saw",
        "axe",
        "measuring-stick"
      ],
      "materials": [],
      "skills": [
        "skill.felling",
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [
        "cache-pole"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Find a straight spruce or pine, dead standing or live, about 10–12 cm thick at chest height.",
      "Fell it (skill.felling) and limb it from the butt toward the top.",
      "Measure from the butt with the stick and saw it off where it is still 7 cm thick, at least 5 m, so it overhangs each tree by 50 cm.",
      "Peel the bark from the middle 2 m with the axe held flat, so the hoist line runs smoothly."
    ],
    "checks": [
      "At least 5 m long, 10–12 cm thick at the butt, 7 cm at the top, smooth in the middle."
    ],
    "safety": [
      "Felling is the most dangerous job in camp. Clear two escape routes and never cut in gusting wind."
    ],
    "estimate": {
      "hours": 1.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
