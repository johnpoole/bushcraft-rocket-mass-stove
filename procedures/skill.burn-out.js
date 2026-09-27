// Burn out a hollow
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.burn-out",
    "kind": "skill",
    "title": "Burn out a hollow",
    "purpose": "Hollow a piece of wood with hot coals and scraping, without an adze or a gouge.",
    "requires": {
      "tools": [
        "knife",
        "pot"
      ],
      "materials": [],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Mark the rim with the knife: a line 3 cm in from every edge. The hollow stays inside it.",
      "Smear a band of wet clay or wet moss along the rim and on the outside, so the fire cannot spread past the line.",
      "Lift a few hot coals from the fire on a flat stick and lay them in the middle of the marked area.",
      "Blow on them gently through a hollow stem or with your breath from close by, so they burn down into the wood and not out to the sides.",
      "When the coals dim, tip them back into the fire and scrape out the char with the edge of a sharp stone or the back of the knife, down to clean brown wood.",
      "Do it again, over and over, moving the coals toward the corners as the middle deepens.",
      "Stop when the bottom is 4 cm thick. Measure it by pushing the knife point through the bottom beside the rim once, near the end, and plugging the hole with a peg.",
      "Keep a pot of water beside you. If the rim starts to glow, wet it at once."
    ],
    "checks": [],
    "safety": [
      "Work on bare mineral soil, well clear of the moss and the shelter."
    ],
    "estimate": {
      "hours": 0
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
