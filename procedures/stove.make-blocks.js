// Make a batch of clay blocks
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.make-blocks",
    "kind": "gather",
    "title": "Make a batch of clay blocks",
    "purpose": "Mix one batch of block mix and mould, turn and stack 20 clay blocks to dry near heat, for the front face and top course of the bench. Start in the first days so they have two weeks to dry; the bench needs about 200, about ten batches.",
    "requires": {
      "tools": [
        "block-mould",
        "pot",
        "knife",
        "bark-tray"
      ],
      "materials": [
        {
          "id": "clay",
          "qty": 0.02
        },
        {
          "id": "sand",
          "qty": 0.04
        },
        {
          "id": "grass-fibre",
          "qty": 0.5
        },
        {
          "id": "water",
          "qty": 15
        }
      ],
      "skills": [
        "skill.tread-mix",
        "skill.judge-dryness"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "clay-blocks",
          "qty": 20
        }
      ]
    },
    "preconditions": [
      "The mould, the raw clay, sand and grass, and the drying bed are ready (stove.prepare-blocks)."
    ],
    "steps": [
      "On the mixing ledge, tread about 0.02 m³ of clay (about ten potfuls) with twice to three times as much sand, at the ratio from your fire test, and as little water as it takes to work.",
      "Tread in half an armload of chopped dry grass, a good handful for every potful of clay. The grass stops the blocks cracking as they dry; blocks go in the bench, away from the flame, so fibre is fine here.",
      "Keep the mix stiff. A ball dropped from waist height should flatten on the bottom but not splatter or crack apart. Every litre you leave out is a litre you do not have to dry.",
      "Dip the mould in the pot of water and dust the inside with sand from the bed, or dry ash, so the clay lets go.",
      "Set the mould on the drying bed. Throw a lump of mix hard into each cell, then press it into the corners with your fists until it is packed full. Scrape the top flat with the strike-off stick.",
      "Lift the mould straight up with a slight wiggle; the two blocks stay behind. Rinse the mould in the pot, dust it again, and set it down beside them for the next pair.",
      "Repeat until you have 20 blocks.",
      "Next day, once they hold their shape when touched, stand the blocks on edge so air reaches all sides. Scrape off rough edges with the knife.",
      "Stack them loosely with finger-width gaps between, near heat but out of direct flame, where wet clay can burst: on the drying bed, around the stove dome or on the stage-one duct. Cover the stacks with the bark sheets at night and in rain. Never let wet blocks freeze.",
      "After a week, break one open to check."
    ],
    "checks": [
      "20 blocks, each 20 × 10 × 8 cm, with square corners.",
      "A broken block is the same pale colour right through, feels warm rather than cool on the broken face, and two blocks ring when tapped together."
    ],
    "safety": [
      "Keep wet blocks out of direct flame: steam trapped in wet clay can burst it."
    ],
    "estimate": {
      "hours": 3.5,
      "waitDays": 7,
      "note": "Estimate: about an hour to mix, two hours to mould 20 blocks, and half an hour turning and stacking them the next day. Drying takes about a week beside a fire, two or more in the open."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
