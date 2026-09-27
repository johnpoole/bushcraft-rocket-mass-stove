// Fit out the shelter
(function (root) {
  'use strict';
  const procedure = {
    "id": "shelter.fit-out",
    "kind": "task",
    "builds": ["fit-out"],
    "title": "Fit out the shelter",
    "purpose": "Make the shelter usable day to day: a door, a counter with a water basin, a step to the cooktop, pegs, a drying line and a boot stone.",
    "requires": {
      "tools": [
        "axe",
        "saw",
        "knife",
        "club",
        "digging-stick",
        "measuring-stick",
        "wedges",
        "water-basin"
      ],
      "materials": [
        {
          "id": "stakes",
          "qty": 9
        },
        {
          "id": "wall-logs",
          "qty": 3
        },
        {
          "id": "root-cordage",
          "qty": 14
        },
        {
          "id": "flat-stones",
          "qty": 2
        }
      ],
      "skills": [
        "skill.saw",
        "skill.set-posts",
        "skill.split-log",
        "skill.hewing",
        "skill.lashing"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The walls are up and chinked."
    ],
    "steps": [
      {
        "call": "make.door"
      },
      {
        "call": "make.wedges"
      },
      {
        "call": "make.water-basin"
      },
      {
        "call": "gather.stakes",
        "note": "6 counter legs and 3 crossbars"
      },
      {
        "call": "gather.wall-logs",
        "note": "3 m for the counter top; the rest to the woodpile"
      },
      {
        "call": "make.root-cordage",
        "times": 2,
        "note": "for about 14 m"
      },
      {
        "call": "gather.flat-stones",
        "note": "for the boot stone and the hearth stone; keep the rest for the stove"
      },
      "Counter: it is an L in the south-east corner, {shelter.counterDepth} cm deep, standing about 12 cm off the walls so it clears the inside stakes. One leg runs along the east wall from the front, stopping {shelter.counterClearance} cm short of the front of the feed tube. The other runs along the front wall to {shelter.counterFrontEnd} cm from the east wall, short of the door.",
      "Mark six stake spots on the floor: at the wall side and the room side of the north end of the east leg, of the west end of the front leg, and of the corner where the legs meet.",
      "Drive a stake at each spot, 40 cm deep.",
      "Hold a crossbar and a half log on top of each other against each stake and mark the stake where the top of the crossbar must be for the top of the half log to come to {shelter.counterHeight} cm above the floor. Saw the stake off at the mark.",
      "Lash a crossbar across the tops of each pair of stakes with square lashings. The one at the corner runs on the slant.",
      "Saw three 90 cm lengths of wall log and split each in half.",
      "Hew the split face of each half flat.",
      "Lay three halves side by side, split face up, along each leg, from the end crossbar to the corner crossbar. Cut their ends to meet along the corner crossbar. Lash each half to the crossbars.",
      "Set the water basin on the front leg of the counter, near the corner.",
      "Step: from a sound dry log at least 35 cm thick, saw a round {stove.stepHeight} cm long with both ends square, so it stands without rocking.",
      "Stand it on the floor in front of the stove, just west of the feed tube, clear of the hearth stone, as the step up to the cooktop.",
      "Hearth stone: lay a flat slab on the floor in front of the feed tube, to catch sparks and ash.",
      "Pegs: carve ten pegs from dry branch wood, 25 cm long and 3 cm thick, tapered flat at one end like a wedge.",
      "Drive eight of them with the club into the chinking between two logs, sloping slightly up, on the front wall west of the door about 1 m up, for the net, lines and snare wire.",
      "Drive the other two into the chinking outside, beside the door and under the roof overhang, for the ice ladle and gaff. The long ice pole leans against the wall there.",
      "Drying line: tie a 2 m length of root cordage tight under the rafters at the west end, running east to west over the foot of the bench, tied to a rafter at each end, well away from the cooktop.",
      "Boot stone: set a flat stone on the floor just inside the door, on the west side, clear of the swing of the door."
    ],
    "checks": [
      "Counter top {shelter.counterHeight} cm above the floor, measured with the stick, and it does not rock when you lean your weight on it.",
      "{shelter.counterClearance} cm of clear floor between the counter and the front of the feed tube.",
      "Basin full of water sits level on the counter.",
      "Top of the step round {stove.stepHeight} cm above the floor, and it does not rock.",
      "Each peg holds a 5 kg load without moving.",
      "Drying line at least 1 m from the cooktop in every direction.",
      "The door passes its own checks."
    ],
    "safety": [
      "Keep bedding, clothes and the woodpile off the cooktop and away from the feed tube, and hang nothing from the drying line within 1 m of the cooktop.",
      "Throw used water out well away from the lake, and not into the drain ditch."
    ],
    "estimate": {
      "hours": 8,
      "note": "About 8 hours of fitting; with the door, basin, wedges, stakes, log, stones and cordage, about 37 hours."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
