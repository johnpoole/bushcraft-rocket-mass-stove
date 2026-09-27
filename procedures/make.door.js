// Make the door
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.door",
    "kind": "make",
    "title": "Make the door",
    "purpose": "Make a door that can be built on site, since there is no blanket in the kit and no hide at build time: a lashed pole frame faced with spruce boughs, later lined with hare skins.",
    "requires": {
      "tools": [
        "saw",
        "knife",
        "axe",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "poles",
          "qty": 8
        },
        {
          "id": "spruce-boughs",
          "qty": 2
        },
        {
          "id": "root-cordage",
          "qty": 12
        }
      ],
      "skills": [
        "skill.saw",
        "skill.knife",
        "skill.lashing"
      ]
    },
    "produces": {
      "tools": [
        "door"
      ],
      "materials": []
    },
    "preconditions": [
      "The door posts are set, {shelter.doorWidth} cm apart, and the lintel log is on the front wall at {shelter.doorHeight} cm."
    ],
    "steps": [
      {
        "call": "gather.poles",
        "note": "2 for the frame and 6 for the face; keep the rest for racks"
      },
      {
        "call": "gather.boughs",
        "note": "2 armloads for the door; the rest are for the bed of boughs"
      },
      {
        "call": "make.root-cordage",
        "times": 2,
        "note": "for about 12 m"
      },
      "Measure the door opening with the stick. The door is 10 cm wider and 10 cm taller than the opening, so it laps 5 cm over the door posts and lintel on the inside.",
      "Saw two uprights and three crossbars from two poles to those sizes, and a brace long enough to run corner to corner.",
      "Lay the uprights on flat ground and lash the crossbars across them at the top, middle and bottom with square lashings. Lash the brace from the bottom corner on the hinge side to the top corner on the other.",
      "Saw the other six poles into rods as long as the door is tall. Lay them upright side by side across the frame, touching, and tie each one to every crossbar.",
      "Tie spruce boughs over the outside face in overlapping rows, starting at the bottom, butt ends up, like the roof.",
      "Stuff moss into the gaps between the rods from the inside.",
      "Hang it: tie two loops of root cordage round the east door post and the hinge-side upright, one near the top and one near the bottom, loose enough to swing. Hang it on the inside so it opens inward and snow cannot pin it shut.",
      "Carve a peg 3 cm thick and 20 cm long and lash it to the west door post as a toggle that turns across the door edge to hold it shut.",
      "Later, as hares are caught, lash their skins over the inside face, fur toward the room, through holes along their edges."
    ],
    "checks": [
      "The door laps at least 5 cm over the posts and lintel all round.",
      "Closed, no daylight shows round it from inside at midday.",
      "It swings open inward with one hand and the toggle holds it shut in the wind."
    ],
    "safety": [
      "Keep it able to open from the inside with one push. The door is your way out if the stove smokes."
    ],
    "estimate": {
      "hours": 3
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
