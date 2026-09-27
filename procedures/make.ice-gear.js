// Make the ice gear
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.ice-gear",
    "kind": "make",
    "title": "Make the ice gear",
    "purpose": "Carve a long pole to carry across the ice and thread the net under it, a slotted ladle for slush, and a gaff hook, and keep them by the door.",
    "requires": {
      "tools": [
        "saw",
        "axe",
        "knife",
        "measuring-stick"
      ],
      "materials": [],
      "skills": [
        "skill.saw",
        "skill.axe",
        "skill.knife",
        "skill.felling"
      ]
    },
    "produces": {
      "tools": [
        "ice-pole",
        "slush-ladle",
        "gaff"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Ice pole: fell a straight, dry, dead spruce about 6 cm thick at the butt. Cut it to 5 m and trim every branch flush, so it slides under the ice without catching.",
      "Cut a notch 2 cm deep around the pole 5 cm from the thin end, to tie a line to.",
      "Slush ladle: saw a 1.2 m length of birch about 8 cm thick. Split it in half down the middle with the axe.",
      "On one half, carve the last 20 cm into a shallow bowl 12 cm across and 3 cm deep, and carve the rest down to a round handle 3 cm thick.",
      "Saw four cuts across the bottom of the bowl, 2 cm apart, right through the wood, so water drains and slush stays.",
      "Gaff: find a birch or willow sapling about 4 cm thick with a side branch leaving at a sharp angle. Cut the sapling off 1.5 m below the branch and just above it.",
      "Cut the side branch to 8 cm and carve it to a point, so it makes a hook with the handle.",
      {
        "call": "task.light-fire"
      },
      "Harden the gaff point: hold it just above the coals and turn it until it darkens to brown, as for the digging stick. Pull it back if it blackens.",
      "Dry the ladle by the fire, not close enough to crack it."
    ],
    "checks": [
      "The ice pole is 5 m long, straight and smooth, measured with the stick.",
      "The ladle lifts a full bowl of slush and drains the water through its slots.",
      "The gaff hook holds a 3 kg stone lifted by it without bending."
    ],
    "safety": [],
    "estimate": {
      "hours": 4
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
