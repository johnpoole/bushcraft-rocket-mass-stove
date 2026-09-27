// Build the chimney
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.chimney",
    "kind": "task",
    "title": "Build the chimney",
    "purpose": "Build the chimney outside the west wall in stone and cob all the way up, with no wood in it, tall enough to draw and clear of the roof.",
    "requires": {
      "tools": [
        "size-gauge",
        "measuring-stick",
        "fishing-kit"
      ],
      "materials": [
        {
          "id": "stones",
          "qty": 0.2
        },
        {
          "id": "cob",
          "qty": 0.15
        },
        {
          "id": "flat-stones",
          "qty": 16
        }
      ],
      "skills": [
        "skill.stone-in-cob"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The duct reaches the foot of the chimney outside the west wall."
    ],
    "steps": [
      {
        "call": "gather.cob",
        "times": 3,
        "note": "one batch at a time as it goes up"
      },
      {
        "call": "gather.stones"
      },
      {
        "call": "gather.flat-stones"
      },
      "Clear the chimney foot to mineral soil and lay a footing of large stones level with the duct floor.",
      "Build the chimney square, {chimney.outer} cm outside, with a flue {stove.size} × {stove.size} cm in the middle, of dry-land stones bedded in cob.",
      "At the foot, in the west face, leave a cleanout about {stove.size} cm wide and 12 cm high, bridged with a flat stone lintel.",
      "Every 30 cm of height, lay two long flat stones through the wall on opposite sides to tie it together, turning a quarter turn each time.",
      "Check the flue with the size gauge at every course, and the outside with a plumb line of fishing line and a stone.",
      "Build no more than 50 cm of height a day, and let it firm overnight.",
      "Reach the upper courses from a log round or a stable stack of stones, never from the roof.",
      "Stop at {chimney.top} m above the shelter floor, which is {chimney.aboveRiser} cm above the riser top.",
      "Close the foot cleanout with a flat stone plug sealed with a bead of cob."
    ],
    "checks": [
      "Its top is {chimney.top} m above the shelter floor, and at least 60 cm above the roof surface beside it.",
      "The lowest branch overhead is at least 2 m above the top.",
      "The size gauge, tied across a length of fishing line, drops freely from the top to the cleanout.",
      "No boughs or tarp within 30 cm of the chimney."
    ],
    "safety": [
      "Keep wood out of the flue entirely. In stage one there is no bench to take the heat out of the exhaust; while the stove starts up, the gas reaching the chimney is far hotter than the 100 °C it settles to once the bench is built. A burning chimney would take the shelter with it."
    ],
    "estimate": {
      "hours": 14,
      "waitDays": 4,
      "note": "Estimate: about 0.35 m³ of stone and cob, built over five or six days."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
