// Build the heat riser
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.riser",
    "kind": "task",
    "builds": ["riser"],
    "title": "Build the heat riser",
    "purpose": "Build the insulated riser over the tunnel mouth: a thin refractory wall around a woven basket former, wrapped in light clay insulation, so it gets very hot and pulls hard.",
    "requires": {
      "tools": [
        "size-gauge",
        "measuring-stick",
        "fishing-kit",
        "knife"
      ],
      "materials": [
        {
          "id": "riser-basket",
          "qty": 1
        },
        {
          "id": "refractory-mix",
          "qty": 0.02
        },
        {
          "id": "light-clay",
          "qty": 0.09
        },
        {
          "id": "birch-bark",
          "qty": 2
        },
        {
          "id": "root-cordage",
          "qty": 2
        }
      ],
      "skills": [
        "skill.tread-mix"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The tunnel and feed tube are built and the formers are out.",
      "The riser basket is woven and has dried for two days."
    ],
    "steps": [
      {
        "call": "gather.riser-basket"
      },
      {
        "call": "gather.birch-bark"
      },
      {
        "call": "make.root-cordage"
      },
      "Stand the basket on the tunnel walls over the open mouth, its inside lined up with the inside of the tunnel.",
      "Hang a stone on a length of fishing line as a plumb line and set the basket upright on two sides.",
      {
        "call": "gather.refractory-mix"
      },
      {
        "call": "gather.light-clay"
      },
      "Build a refractory wall {stove.refractory} cm thick around the basket, pressing the mix into the weave. Work up 20–30 cm at a time.",
      "Around it, pack {stove.riserInsulation} cm of light clay, squeezing each handful firm. If it slumps, wrap a sheet of birch bark round the outside as a form, tie it with root cordage and move it up as you go.",
      "Stop each layer at 20–30 cm and let it firm for half a day before the next, until a thumb pressed into it leaves only a shallow mark. Check it is plumb before each new layer.",
      "Bring the refractory wall and the insulation level with the top of the basket, {stove.riserHeight} cm above the tunnel floor.",
      "Cap the top edge of the light clay with 2 cm of refractory mix so the hot gas turning over the lip does not eat into it.",
      "Leave the basket in: it holds the shape and burns out on the first fires."
    ],
    "checks": [
      "The riser top lip is {stove.riserHeight} cm above the tunnel floor, measured inside.",
      "The plumb line hangs within 1 cm of the riser wall top and bottom, on two sides.",
      "The outside of the riser is about {stove.size} cm plus twice ({stove.refractory} + {stove.riserInsulation}) cm across, all the way up."
    ],
    "safety": [
      "Work from a log round or a stable stone to reach the top. Do not lean on the riser."
    ],
    "estimate": {
      "hours": 6,
      "waitDays": 3,
      "note": "Estimate: built in four or five layers over about three days."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
