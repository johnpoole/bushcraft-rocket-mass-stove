// Insulate the roof
(function (root) {
  'use strict';
  const procedure = {
    "id": "shelter.roof-insulate",
    "kind": "task",
    "title": "Insulate the roof",
    "purpose": "Lay 15 cm of dry moss on the inner tarp piece, cover it with the outer piece left open at the top and bottom edges so the moss can breathe, and hold it down with soil. This halves the shelter's heat loss and keeps the moss dry.",
    "requires": {
      "tools": [
        "knife",
        "measuring-stick",
        "bark-tray",
        "tarp-outer"
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
      "Untie the outer tarp piece and roll it up to the back beam.",
      "Spread dry moss over the inner piece, 15 cm deep after pressing it down lightly with your palms. Check the depth with the measuring stick every metre.",
      "Keep the moss 30 cm short of the west edge, beside the chimney. Cover that strip with bark and soil only.",
      "Unroll the outer piece down over the moss, overlapping the sides by 20 cm and folding them down.",
      "Leave the front (low) edge and the back (high) edge of the outer piece open: push a row of short spruce twigs under each edge so it stands 3–5 cm clear of the moss. Air moves in at the front and out at the back and carries off any moisture that gets past the inner piece.",
      "Tie the outer piece to the roof poles at its sides and corners.",
      "Carry soil up in the bark tray and spread it 5–10 cm deep over the outer piece, with moss or boughs on the steepest part to stop it sliding. Keep the soil off the open front and back edges."
    ],
    "checks": [
      "Dry moss 15 cm deep everywhere between the tarp pieces, measured with the stick.",
      "No moss within 30 cm of the chimney.",
      "The front and back edges of the outer piece stand clear of the moss, with daylight showing through the gap.",
      "Rafters sag less than 2 cm at mid-span under the finished roof, measured against a string pulled tight from end to end.",
      "After a cold night, the underside of the inner piece is dry to the touch from inside. If it is damp or frosted, open the vent wider."
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
