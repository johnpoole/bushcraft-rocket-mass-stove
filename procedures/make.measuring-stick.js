// Make a measuring stick
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.measuring-stick",
    "kind": "make",
    "title": "Make a measuring stick",
    "purpose": "Make a stick marked every 10 cm, so every size in these instructions can be measured without a ruler.",
    "requires": {
      "tools": [
        "saw",
        "knife",
        "fishing-kit"
      ],
      "materials": [],
      "skills": [
        "skill.saw",
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [
        "measuring-stick"
      ],
      "materials": []
    },
    "preconditions": [
      "Before you leave home, measure the length of the saw blade from the kit (the toothed part only) with a ruler, and remember it. It is your reference length on site."
    ],
    "steps": [
      "Cut a straight, dry, dead stick about 2.5 cm thick and a little over 1 m long.",
      "Lay the saw blade along the stick from one end and cut a notch at the end of the teeth. Move the blade on from that notch and repeat until you pass 100 cm, then work out where 100 cm falls from the blade length you remember, and cut a deep notch there. Cut the stick off just beyond it.",
      "Cut a length of fishing line exactly as long as the stick. Fold it in half and mark 50 cm on the stick at the fold.",
      "Cut a second length of line 50 cm long, from the end of the stick to the 50 cm mark. Fold it back and forth into five equal zigzags, adjusting until all the folds line up. One zigzag is 10 cm.",
      "Using that 10 cm piece, cut a shallow notch every 10 cm along the stick. Cut every 50 cm notch deeper."
    ],
    "checks": [
      "The two halves of the stick match the 50 cm line exactly.",
      "Ten notches of equal spacing between the end and the 100 cm mark."
    ],
    "safety": [],
    "estimate": {
      "hours": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
