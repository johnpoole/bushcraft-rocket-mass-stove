// Bank snow against the walls and roof
(function (root) {
  'use strict';
  const procedure = {
    "id": "shelter.snow-bank",
    "kind": "task",
    "title": "Bank snow against the walls and roof",
    "purpose": "Use snow, which insulates far better than soil, to wrap the shelter for the winter.",
    "requires": {
      "tools": [
        "snow-paddle",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "snow",
          "qty": 8
        }
      ],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "Snow has come to stay, usually in October.",
      "The earth skirt is done."
    ],
    "steps": [
      "Clear the door, the air inlet in the front wall, the vent in the back wall, and the chimney cleanout first. Mark each with a stick pushed into the snow beside it.",
      "Paddle snow against the back and end walls in layers about 20 cm deep, treading each layer firm before adding the next.",
      "Build the bank up to the roof edge, 50 cm thick at the top and wider at the base.",
      "Along the front wall, bank around the door and the air inlet but keep both open, with a clear space in front of each at least as wide as the opening.",
      "Keep a clear space of 50 cm all round the chimney and its cleanout. Snow against the warm masonry melts and refreezes into ice.",
      "Let snow lie on the roof up to 30 cm deep. Paddle off anything deeper, and anything within 50 cm of the chimney.",
      "After every snowfall and every windy night: clear the door, the air inlet, the vent and the chimney top before you light the stove, then top up the bank."
    ],
    "checks": [
      "Bank at the roof edge on the back and end walls, 50 cm thick at the top.",
      "Door, air inlet, vent, chimney top and cleanout all open.",
      "Snow on the roof no deeper than 30 cm, measured with the stick.",
      "Rafters sag no more than 2 cm at mid-span under the snow load."
    ],
    "safety": [
      "A blocked air inlet, vent or chimney fills the shelter with carbon monoxide. Clear them before every firing.",
      "Snow is heavy: 30 cm of settled snow on this roof weighs about 700 kg. If the rafters sag more than 2 cm, paddle the roof clear."
    ],
    "estimate": {
      "hours": 5,
      "note": "Plus about half an hour after each snowfall."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
