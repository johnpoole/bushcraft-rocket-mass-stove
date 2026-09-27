// Cut the tarp in two
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.tarp-pieces",
    "kind": "make",
    "title": "Cut the tarp in two",
    "purpose": "Cut the kit tarp into an outer piece that sheds rain over the roof moss and an inner piece under the moss that keeps the shelter's moisture out of it.",
    "requires": {
      "tools": [
        "tarp",
        "knife",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "dry-wood",
          "qty": 1
        },
        {
          "id": "birch-bark",
          "qty": 1
        }
      ],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [
        "tarp-inner",
        "tarp-outer"
      ],
      "materials": []
    },
    "preconditions": [
      "The night-one lean-to can come down: you need the whole tarp flat on the ground for an hour."
    ],
    "steps": [
      {
        "call": "gather.birch-bark"
      },
      "Spread the tarp flat on clean, dry ground, shiny side up, with no stones or sticks under it.",
      "Measure {tarp.outerLength} m from one short end along both long edges with the measuring stick, and mark each point with charcoal from the fire.",
      "Lay a straight pole across the tarp between the two marks, and kneel on it to hold it still.",
      "Cut along the pole with the knife, drawing the blade toward you in short strokes with the tarp pulled tight. This gives an outer piece {tarp.width} × {tarp.outerLength} m and an inner piece {tarp.width} × {tarp.innerLength} m.",
      {
        "call": "task.light-fire"
      },
      "Seal each cut edge so it does not fray: hold a glowing stick from the fire just against the edge and draw it slowly along, melting the threads together. Keep water in the pot beside you.",
      "Make tie points along the cut edge of each piece every 50 cm: fold a pebble the size of a thumbnail into the edge, twist the fabric around it to make a neck, and tie root cordage tight around the neck.",
      "Mark the outer piece with a charcoal cross in one corner so you can tell the pieces apart."
    ],
    "checks": [
      "Two pieces, {tarp.width} × {tarp.outerLength} m and {tarp.width} × {tarp.innerLength} m, measured with the stick.",
      "Cut edges melted closed along their whole length, with no loose threads.",
      "A tie point every 50 cm along each cut edge holds when you hang your weight from it with both hands."
    ],
    "safety": [
      "Melt the edge in the open, upwind of the smoke: burning plastic fumes are harmful."
    ],
    "estimate": {
      "hours": 1.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
