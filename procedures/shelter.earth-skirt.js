// Bank earth around the foot of the walls
(function (root) {
  'use strict';
  const procedure = {
    "id": "shelter.earth-skirt",
    "kind": "task",
    "title": "Bank earth around the foot of the walls",
    "purpose": "Seal the draughts where the walls meet the ground with a low bank of earth, before the snow comes. It stops air leaking in under the bottom log; it adds little insulation.",
    "requires": {
      "tools": [
        "measuring-stick",
        "bark-tray",
        "digging-stick"
      ],
      "materials": [
        {
          "id": "soil",
          "qty": 1
        },
        {
          "id": "birch-bark",
          "qty": 4
        }
      ],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The log walls are up and chinked with moss.",
      "The drain ditch runs along the uphill side, behind the back wall."
    ],
    "steps": [
      {
        "call": "gather.birch-bark"
      },
      {
        "call": "dig.soil",
        "times": 2,
        "note": "for about 1 m³"
      },
      "Lay sheets of birch bark against the bottom log of each wall, overlapping by a hand-width, white side out. The bark keeps wet soil off the logs so they do not rot.",
      "Pile soil against the bark along the back wall and both end walls, 30 cm high at the wall and sloping out to 50 cm from it.",
      "Along the front wall, bank only below the air inlet, and leave the door clear.",
      "Leave a gap of 30 cm around the cleanout plug at the foot of the chimney, so it can still be lifted.",
      "Tread the bank firm and shape its outer face so water runs away from the walls, not into the drain ditch behind the back wall.",
      "Lay moss back over the bank so rain does not wash it away."
    ],
    "checks": [
      "Bank 30 cm high against the back and end walls, measured with the stick.",
      "The air inlet, the door and the chimney cleanout are all clear.",
      "After rain, no water stands against the walls."
    ],
    "safety": [],
    "estimate": {
      "hours": 3,
      "note": "Moving about 1 m³ of soil takes about 10 more hours in the two digging runs."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
