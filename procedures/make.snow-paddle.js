// Make a snow paddle
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.snow-paddle",
    "kind": "make",
    "title": "Make a snow paddle",
    "purpose": "Make a wooden paddle for moving snow, since there is no shovel.",
    "requires": {
      "tools": [
        "axe",
        "saw",
        "knife",
        "measuring-stick"
      ],
      "materials": [],
      "skills": [
        "skill.axe",
        "skill.saw",
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [
        "snow-paddle"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Find a straight, dead standing spruce or pine about 20 cm thick with no knots in its lower part. Saw off a length of 1.3 m.",
      "Saw a club 50 cm long from wrist-thick green wood.",
      "Stand the log on end, set the axe edge across the middle of the top, and drive it in with the club. Work it down the log until it splits in half.",
      "Lay one half flat side down. With the axe, hew away the round side along 45 cm at one end until the blade there is 2–3 cm thick and about 25 cm wide.",
      "Hew and carve the other 85 cm down to a round handle about 4 cm thick.",
      "Carve the edges of the blade smooth and bevel its end."
    ],
    "checks": [
      "Blade 45 × 25 cm, 2–3 cm thick, no cracks.",
      "Lifts a full load of wet snow without bending at the neck."
    ],
    "safety": [],
    "estimate": {
      "hours": 4
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
