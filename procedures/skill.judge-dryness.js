// Judge when clay is dry
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.judge-dryness",
    "kind": "skill",
    "title": "Judge when clay is dry",
    "purpose": "Tell when clay work is dry enough to build on, fire harder or seal, without guessing.",
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
      "Drying time grows with the square of the thickness: a 6 cm layer dries in a day or two over a warm duct; a 20 cm slab takes weeks. Build thin.",
      "Thumb test, for building on: press your thumb hard in. Ready when it leaves only a shallow mark, the thumb comes away dry, and the colour has turned paler.",
      "Break test, for blocks: break one open. Dry is the same pale colour right through, warm rather than cool on the broken face, and two blocks ring when tapped together.",
      "Bark test, for a whole bench: lay a sheet of bark on it overnight. Damp underneath in the morning means still wet.",
      "Wet clay must not freeze: it crumbles. Cover wet work with dry grass at night, and stop adding wet material if the shelter itself freezes overnight.",
      "Heat wet clay slowly: short, small fires first. Fast heating cracks it."
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
