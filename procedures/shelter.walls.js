// Build the log walls
(function (root) {
  'use strict';
  const procedure = {
    "id": "shelter.walls",
    "kind": "task",
    "builds": ["walls"],
    "title": "Build the log walls",
    "purpose": "Close in the shelter with walls of hewn logs, stacked between pairs of stakes on a course of stones, chinked with moss, with the air inlet, the vent and the flue passage built in.",
    "requires": {
      "tools": [
        "axe",
        "saw",
        "knife",
        "digging-stick",
        "club",
        "bark-tray",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "stones",
          "qty": 0.35
        },
        {
          "id": "flat-stones",
          "qty": 10
        },
        {
          "id": "birch-bark",
          "qty": 4
        },
        {
          "id": "wall-stakes",
          "qty": 22
        },
        {
          "id": "hewn-logs",
          "qty": 85
        },
        {
          "id": "chinking-moss",
          "qty": 1
        },
        {
          "id": "root-cordage",
          "qty": 18
        },
        {
          "id": "clay",
          "qty": 0.1
        },
        {
          "id": "sand",
          "qty": 0.06
        },
        {
          "id": "water",
          "qty": 20
        }
      ],
      "skills": [
        "skill.axe",
        "skill.saw",
        "skill.set-posts",
        "skill.lashing",
        "skill.clay-test"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The frame is up and the roof is covered."
    ],
    "steps": [
      {
        "call": "gather.stones",
        "times": 2,
        "note": "for about 0.35 m³ for the plinth"
      },
      {
        "call": "gather.flat-stones",
        "note": "for levelling the plinth and the slab over the flue passage"
      },
      {
        "call": "gather.birch-bark",
        "note": "cut into strips to lay under the bottom logs"
      },
      {
        "call": "gather.wall-stakes",
        "times": 2,
        "note": "for 22, a pair at each wall end, each door post and the middle back post"
      },
      {
        "call": "gather.hewn-logs",
        "times": 18,
        "note": "for about {shelter.logLength} m of {shelter.log} cm log, from about 18 trees"
      },
      {
        "call": "gather.chinking-moss",
        "times": 4,
        "note": "for about 1 m³"
      },
      {
        "call": "make.root-cordage",
        "times": 2,
        "note": "for about 18 m"
      },
      {
        "call": "dig.clay",
        "note": "for the smear near the stove and the flue passage"
      },
      {
        "call": "gather.sand"
      },
      "Plinth: stretch a cord along each wall line between its corner supports. Scrape a strip 25 cm wide along it down to firm mineral soil.",
      "Lay one course of dense stones along each strip, flat faces up, touching each other, {shelter.plinth} cm high. Shim them with flat stones until the top is level along the wall to within 1 cm a metre, checked with the pot of water on a pole.",
      "Flue passage: in the west wall, {chimney.z} m from the inside face of the back wall, leave a gap in the plinth {channel.ductWidth} cm wide. Set a stone on edge each side of it in clay mortar, and lay the biggest flat slab across them, at least 20 cm longer than the gap, bedded in clay. The logs above rest on the slab.",
      "If the stove duct is not laid yet, stuff the passage with a bundle of moss wrapped in bark to stop the draught. The duct is set into it in stone and clay with the stove.",
      "Stakes: at each end of each wall, drive a pair of wall stakes 50 cm deep, one just inside the plinth and one just outside it, {shelter.log} cm apart so a log fits between them. At the three trees the pair stands either side of the prop. Set pairs the same way against the middle back post and against each door post.",
      "Saw the stakes for the front wall to 1.8 m before driving them.",
      "Lay birch bark strips along the top of the plinth, white side up, under where the bottom logs will sit.",
      "Sort the hewn logs by thickness. Use the thickest at the bottom, and lay the butt end and the top end of each course at opposite ends from the course below, so the wall stays level.",
      "For each course, measure the gap between the stake pairs with the stick, saw a log to fit, and lower it between the stakes with the flats down and up. The back wall runs in two lengths, each butting against the middle post. At the trees the logs butt against the props.",
      "Front wall: the six courses below {shelter.doorHeight} cm stop at the door posts. The top course runs across the door as the lintel.",
      "Air inlet: in the second course of the front wall, at its east end, start the log {shelter.inletWidth} cm west of the stakes by the south-east prop, so an opening {shelter.inletWidth} cm wide and one log high is left at the east end of the wall, low down.",
      "Vent: in the top course of the back wall, leave a gap {shelter.ventWidth} cm wide, beginning {shelter.ventFrom} cm from the inside face of the east wall.",
      "End walls: each course stops where the roof comes down to it. Saw the end of the top logs to the slope, and fill the gap between them and the roof with moss.",
      "Lift logs above chest height up two poles leaned against the wall as skids, rolling them up with a loop of cordage round each end.",
      "Lash each pair of stakes together at the top with root cordage, tight against the top log. Saw off the tops 5 cm above the top log, below the roof.",
      "Chink: push moss into every gap between the logs, from inside and outside, with a flat stick carved like a spatula, until no daylight shows. Pack the gaps between the log ends and the props loosely, so the trees can sway.",
      "Mix clay and sand to the ratio from the clay test, with water, into a stiff paste that holds its shape.",
      "Press 2 cm of it over the moss and logs on the inside of the back and east walls, wherever a log is within 50 cm of the stove, from the floor to 50 cm above the cooktop.",
      "Press 2 cm of it over the logs on the outside of the west wall within 50 cm of the chimney, and over the bottom log above the flue passage."
    ],
    "checks": [
      "Plinth {shelter.plinth} cm high and level to within 1 cm a metre.",
      "Walls up to the beam, the plate and the roof slope, with no log out of line by more than 2 cm a metre against a plumb line.",
      "Inside at midday with the door shut, no daylight through the walls.",
      "Air inlet {shelter.inletWidth} cm and vent {shelter.ventWidth} cm wide, each a full log high and clear through, measured with the stick.",
      "Clay 2 cm thick over every log within 50 cm of the stove and chimney, and no bare wood where the flue passes.",
      "Log ends at the three trees are not touching the trunk or the prop, and the gap is packed loosely with moss."
    ],
    "safety": [
      "Keep every piece of wood out of the flue. Nothing but stone and clay where it passes under the wall.",
      "Never stand below a log being rolled up the skids.",
      "Leave the air inlet and vent open. They are what keeps carbon monoxide out of the shelter when the stove burns."
    ],
    "estimate": {
      "hours": 30,
      "note": "About 30 hours for the walls themselves: plinth, stakes, stacking about 70 pieces, chinking and clay. With the logs (about 40 hours), stones, stakes, moss and cordage it is about 95 hours, nearly ten long days."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
