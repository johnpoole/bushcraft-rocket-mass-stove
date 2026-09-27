// Build the bench in thin lifts
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.bench-lifts",
    "kind": "task",
    "builds": ["bench"],
    "title": "Build the bench in thin lifts",
    "purpose": "Build the bench over the stage-one duct as a stone core laid in thin lifts with clay only as mortar, faced and topped with dry clay blocks, so there is little water to dry.",
    "requires": {
      "tools": [
        "measuring-stick",
        "knife",
        "pot",
        "bark-tray",
        "ferro-rod"
      ],
      "materials": [
        {
          "id": "clay-blocks",
          "qty": 200
        },
        {
          "id": "mortar",
          "qty": 0.25
        },
        {
          "id": "stones",
          "qty": 0.3
        },
        {
          "id": "flat-stones",
          "qty": 2
        },
        {
          "id": "light-clay",
          "qty": 0.16
        },
        {
          "id": "slip",
          "qty": 6
        },
        {
          "id": "dry-wood",
          "qty": 3
        },
        {
          "id": "birch-bark",
          "qty": 1
        }
      ],
      "skills": [
        "skill.lay-blocks",
        "skill.stone-in-cob",
        "skill.judge-dryness",
        "skill.plaster",
        "skill.tread-mix"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "About 200 dry clay blocks are stacked by the shelter.",
      "The stage-one duct is sealed and the stove draws well."
    ],
    "steps": [
      {
        "call": "gather.mortar",
        "times": 5,
        "note": "one batch at a time, as each day's lifts need it: cob mix without fibre, a little wetter than for blocks"
      },
      {
        "call": "gather.light-clay",
        "times": 2,
        "note": "for the gap against the walls"
      },
      {
        "call": "gather.slip",
        "times": 3,
        "note": "a potful before each round of lifts"
      },
      {
        "call": "gather.dry-wood",
        "note": "for the short drying fires"
      },
      {
        "call": "stove.make-blocks"
      },
      {
        "call": "gather.stones"
      },
      {
        "call": "gather.flat-stones"
      },
      {
        "call": "gather.birch-bark"
      },
      "The bench runs along the back wall from the dome to the west wall, {bench.width} cm deep, and turns as a seat along the west wall. It is {bench.height} cm high with {stove.benchCover} cm of mass over the channel.",
      "Split it into sections about 60 cm long; at least four, so you can lay a lift on one each day while the others dry. Build the section next to the dome last, or lay it with more stone and less mortar: the duct is hottest there and wet clay can crack.",
      "For each section, first lay a course of dry blocks along the front edge in mortar. The blocks hold the lift like a form and become the face of the bench.",
      "Spread a 1–2 cm bed of mortar over the section. Press dry-land stones into it one at a time, each fist- to loaf-sized, about 2 cm apart.",
      "Work mortar into the gaps with your fingers until every stone is bedded and there are no holes. Top off with just enough mortar to cover the stones. Keep the lift 5–8 cm thick.",
      "Between the lift and the back and west walls, pack light clay to the same height, keeping {bench.backGap} cm of it against the logs.",
      "Poke the surface all over with a stick, or scratch it criss-cross. Do not smooth it: a smooth skin slows drying and the next lift will not grip.",
      "Fire a short fire of about an hour. It warms the duct and drives the water up and out. Leave the lift uncovered while the stove is warm.",
      "Before the next lift on a section, press your thumb hard into it. When it leaves only a shallow mark, your thumb comes away dry and the colour has turned paler, brush on a thin coat of slip with a wad of grass and lay the next lift.",
      "Over each bend, build a small box of blocks around the lift-out stone as the lifts rise, so it can still be reached from the bench top.",
      "About three lifts bring the core to {stove.benchCover} cm less one block (8 cm) over the channel.",
      "Finish with a course of blocks laid flat in mortar, bringing the mass to {stove.benchCover} cm over the channel. Close each bend box with a flat stone plug at the bench surface, bedded on a thin bead of clay only."
    ],
    "checks": [
      "The bench is {bench.height} cm high at the front edge, measured every 50 cm along it.",
      "No joint in the front face runs straight up through two courses.",
      "Each bend plug lifts from the bench top, and the lift-out stone beneath it lifts too.",
      "There are {bench.backGap} cm of light clay between the bench and every log."
    ],
    "safety": [
      "Only dry-land stones in the core.",
      "Ventilate during and after every drying fire."
    ],
    "estimate": {
      "hours": 20,
      "waitDays": 12,
      "note": "About 0.4 m³ a day of stone set in mortar, plus the block courses."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
