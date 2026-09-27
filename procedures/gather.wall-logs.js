// Cut wall logs
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.wall-logs",
    "kind": "gather",
    "title": "Cut wall logs",
    "purpose": "Fell one tree and cut it into wall logs, 15 cm thick, and bring them to the site.",
    "requires": {
      "tools": [
        "saw",
        "axe",
        "measuring-stick"
      ],
      "materials": [],
      "skills": [
        "skill.felling",
        "skill.saw",
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "wall-logs",
          "qty": 5
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Choose a straight spruce or pine about 18–20 cm thick at chest height that is still 12 cm thick 6 m up. Prefer sound standing dead trees with the bark falling off: they weigh half as much and do not shrink after the walls are up.",
      "Take trees from across the stand, not all from one spot, and none within 10 m of the shelter trees.",
      "Fell it.",
      "Limb it with the axe, from the butt toward the top, cutting the stubs flush.",
      "Saw it into pieces about 1.4 m, 2.0 m and 2.9 m long, the lengths the walls take, measured with the stick. Stop where it gets thinner than 12 cm.",
      "Peel off any bark left on with the axe held flat. Bark holds water and insects under it.",
      "Carry the pieces to the site on your shoulder, or drag the longest ones, and stack them on two cross-logs off the ground."
    ],
    "checks": [
      "About 5 m of straight log, 12–18 cm thick, peeled and stacked off the ground."
    ],
    "safety": [
      "A green 2.9 m log of this size weighs about 30 kg. Lift with your legs, one end at a time."
    ],
    "estimate": {
      "hours": 1.5,
      "note": "About 15 minutes to fell, 20 to limb and buck, 25 to peel, 30 to carry from up to 100 m. Wall logs for the whole shelter are about 18 trees."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
