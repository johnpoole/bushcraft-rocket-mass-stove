// Test clay
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.clay-test",
    "kind": "skill",
    "title": "Test clay",
    "purpose": "Tell whether soil has enough clay to bind cob, and how much sand it needs.",
    "requires": {
      "tools": [
        "pot",
        "knife"
      ],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Dig a handful from below the topsoil and dark roots, where the soil changes colour, usually 20–50 cm down on a creek bank or in low ground.",
      "Wet it and knead it until it is like stiff dough. Roll it between your palms into a snake about as thick as a pencil.",
      "Bend the snake around your finger. Good clay bends into a ring without cracking. If it cracks at once, there is too little clay; look deeper or elsewhere.",
      "Rub a pinch between wet fingers. Clay feels smooth and slippery and stains your skin; sand feels gritty; silt feels like flour.",
      "Shake test: half-fill the pot with soil, fill it with water, stir hard, and let it stand for an hour. Sand settles first at the bottom, then silt, and clay last on top. Good cob soil has a clay layer at least a fifth of the depth.",
      "Fire test: make three small patties, 5 cm across and 1 cm thick, with 0, 1 and 2 parts sand to 1 part clay. Dry them by the fire, then put them in the coals for an hour. The mix whose patty comes out whole, without cracks and without crumbling, is your ratio."
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
