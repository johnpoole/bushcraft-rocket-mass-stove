// Kill, gut and split fish
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.clean-fish",
    "kind": "skill",
    "title": "Kill, gut and split fish",
    "purpose": "Kill fish quickly and clean them so nothing that can be eaten is lost and nothing spoils.",
    "requires": {
      "tools": [
        "knife",
        "club"
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
      "Kill each fish as soon as it is out of the water: hold it on the rock and strike it once, hard, on the top of the head just behind the eyes with the club.",
      "Bleed it: cut through the gills on both sides with the knife tip and rinse the fish in the water. Bled flesh keeps longer.",
      "Gut it: put the knife tip into the vent, sharp edge up, and cut forward along the belly to the gills, shallow, so you do not cut the gut. Pull the guts out.",
      "Keep the liver, the roe and the heart in the pot. Burbot liver is large and oily; it is some of the best food on the lake. Leave the gall bladder, the small green sac on the liver; it makes everything bitter.",
      "Scrape out the dark blood line along the backbone with your thumbnail and rinse the belly.",
      "To split a fish for smoking: lay it on its belly, cut down along one side of the backbone from head to tail, and open it out flat like a book, still joined along the belly skin. Cut the backbone out, leaving the tail on. Cut the head off and keep it for broth.",
      "On fish thicker than 3 cm, cut slits across the flesh every 3 cm, down to the skin but not through it, so smoke and air dry it right through.",
      "Put the guts back in the lake out in deep water, or use them as bait. Never leave them on shore.",
      "Wash the rock, the knife and your hands in the lake when you finish."
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
