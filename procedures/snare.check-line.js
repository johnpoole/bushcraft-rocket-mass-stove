// Check the snare line
(function (root) {
  'use strict';
  const procedure = {
    "id": "snare.check-line",
    "kind": "gather",
    "title": "Check the snare line",
    "purpose": "Walk the snare line every morning, take out the hares and keep every snare fishing.",
    "requires": {
      "tools": [
        "snare-wire",
        "knife",
        "club",
        "pot"
      ],
      "materials": [],
      "skills": [
        "skill.snare",
        "skill.skin-hare"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "hares",
          "qty": 0.3
        }
      ]
    },
    "preconditions": [
      "The snare line is set (snare.set-line)."
    ],
    "steps": [
      "Walk the line from the first blaze every morning.",
      "At each set: if a hare is caught, take it out of the loop and reset the snare.",
      "If a snare is sprung or kinked, replace the wire. If a set has shown no sign for three days, move it to a fresher run.",
      "After snowfall, pack the trail as you walk, and raise each loop so its bottom is 5–8 cm above the new snow.",
      "Take hares to the skinning stump. Skin, gut and cook them the same day, or hang them to freeze once it stays cold.",
      "Count the snares standing before you leave the line. Keep {snares.count} to 20 running all winter."
    ],
    "checks": [
      "Every snare on the line is set, at the right height above the snow, and counted."
    ],
    "safety": [
      "A fox or wolverine may be at a snare. Make noise as you come, and let it go."
    ],
    "estimate": {
      "hours": 1,
      "note": "Planning figure: about one hare every three mornings."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
