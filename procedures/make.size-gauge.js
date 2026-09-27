// Make the stove size gauges
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.size-gauge",
    "kind": "make",
    "title": "Make the stove size gauges",
    "purpose": "Make two gauge sticks: one exactly the stove's {stove.size} cm clear opening, to check that no part of the gas path is narrower, and one a finger-width longer, to size the formers.",
    "requires": {
      "tools": [
        "saw",
        "knife",
        "measuring-stick",
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
        "size-gauge"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Cut a straight, dry, dead stick about 2 cm thick and 30 cm long.",
      "Cut a length of fishing line as long as one 10 cm space on the measuring stick. Fold it back and forth into ten equal zigzags: one zigzag is 1 cm.",
      "Measure {stove.size} cm on the stick with the measuring stick and the 1 cm line, and saw it off square. That is the opening gauge.",
      "Cut a second stick 1 cm longer. That is the former gauge: cob shrinks a little as it dries, so formers are made about 1 cm oversize.",
      "Cut a ring round the former gauge with the knife so you can tell them apart by touch."
    ],
    "checks": [
      "The opening gauge measures {stove.size} cm against the measuring stick, to within 2 mm.",
      "The former gauge is 1 cm longer and ringed."
    ],
    "safety": [],
    "estimate": {
      "hours": 0.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
