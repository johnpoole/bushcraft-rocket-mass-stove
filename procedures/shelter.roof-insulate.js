// Insulate the roof
(function (root) {
  'use strict';
  const procedure = {
    "id": "shelter.roof-insulate",
    "kind": "task",
    "title": "Insulate the roof",
    "purpose": "Lay 15 cm of dry moss under the tarp and soil on top, which halves the shelter's heat loss.",
    "requires": {
      "tools": [
        "knife",
        "measuring-stick",
        "bark-tray"
      ],
      "materials": [
        {
          "id": "dry-moss",
          "qty": 1
        },
        {
          "id": "soil",
          "qty": 0.5
        }
      ],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The roof is covered.",
      "A dry day, with no rain coming."
    ],
    "steps": [
      {
        "call": "gather.moss",
        "note": "start this in the first days: the moss needs three or four dry days"
      },
      {
        "call": "dig.soil"
      },
      "Untie the front half of the tarp and fold it back up the roof.",
      "Spread dry moss over the boughs of the uncovered half, 15 cm deep after pressing it down lightly with your palms. Check the depth with the measuring stick every metre.",
      "Fold the tarp back down over the moss and tie it again.",
      "Do the same for the back half, working from the back wall.",
      "Keep the moss 30 cm short of the west edge, beside the chimney. Cover that strip with bark and soil only.",
      "Carry soil up in the bark tray and spread it 5–10 cm deep over the tarp, with moss or boughs on the steepest part to stop it sliding."
    ],
    "checks": [
      "Dry moss 15 cm deep everywhere under the tarp, measured with the stick.",
      "No moss outside the tarp edges, and none within 30 cm of the chimney.",
      "Rafters sag less than 2 cm at mid-span under the finished roof, measured against a string pulled tight from end to end.",
      "After the next rain, the moss under the tarp is still dry."
    ],
    "safety": [
      "Keep the tarp and moss well away from the chimney: a spark melts through a tarp and dry moss burns fast."
    ],
    "estimate": {
      "hours": 4
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
