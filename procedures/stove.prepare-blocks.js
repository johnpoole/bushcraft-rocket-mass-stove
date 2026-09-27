// Prepare for making clay blocks
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.prepare-blocks",
    "kind": "task",
    "title": "Prepare for making clay blocks",
    "purpose": "Once, before the first batch: make the block mould, gather all the clay, sand and grass for the 200 bench blocks, and lay out a covered drying bed, so each batch after that is only mixing and moulding.",
    "requires": {
      "tools": [
        "measuring-stick",
        "bark-tray"
      ],
      "materials": [
        {
          "id": "sand",
          "qty": 0.05
        },
        {
          "id": "birch-bark",
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
      "Clay has been found and tested (stove.find-clay)."
    ],
    "steps": [
      {
        "call": "make.block-mould"
      },
      {
        "call": "gather.sand",
        "times": 6,
        "note": "about 0.5 m³ for ten batches of mix, and 0.05 m³ for the drying bed and dusting"
      },
      {
        "call": "gather.birch-bark",
        "times": 2,
        "note": "eight sheets to cover the stacks"
      },
      "Pile the clay and sand beside the mixing ledge and cover them with bark so they neither dry out nor wash away. Keep the chopped grass under cover, off the ground.",
      "Level a drying bed of sand about 2 × 1 m near a fire and sheltered from rain: beside the stove dome, on the stage-one duct, or beside another camp fire. Spread the sand 2 cm deep.",
      "Stack the bark sheets by the bed, ready to cover the blocks at night and in rain."
    ],
    "checks": [
      "The block mould passes its own checks.",
      "About 0.2 m³ of clay and 0.5 m³ of sand covered by the mixing ledge, and five armloads of chopped grass under cover.",
      "A level sand drying bed about 2 × 1 m, with eight bark sheets beside it."
    ],
    "safety": [],
    "estimate": {
      "hours": 1,
      "note": "Estimate: an hour to lay out the bed; the mould and the gathering it calls take about 20 hours more."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
