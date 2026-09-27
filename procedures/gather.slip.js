// Make clay slip
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.slip",
    "kind": "gather",
    "title": "Make clay slip",
    "purpose": "Make clay slip, clay stirred into water, to fill cracks and to bond one lift to the next.",
    "requires": {
      "tools": [
        "pot"
      ],
      "materials": [
        {
          "id": "clay",
          "qty": 0.002
        },
        {
          "id": "water",
          "qty": 2
        }
      ],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "slip",
          "qty": 2
        }
      ]
    },
    "preconditions": [
      "Clay is piled at the mixing place."
    ],
    "steps": [
      {
        "call": "dig.clay"
      },
      "Break two double handfuls of clay into the pot and cover them with water. Let them soak for an hour.",
      "Stir and squeeze with your hand until there are no lumps.",
      "Pick out any grit you feel."
    ],
    "checks": [
      "A potful, about 2 litres, like thin cream: it coats a finger and drips off slowly."
    ],
    "safety": [],
    "estimate": {
      "hours": 0.25
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
