// Hang the food cache
(function (root) {
  'use strict';
  const procedure = {
    "id": "food.hang-cache",
    "kind": "task",
    "title": "Hang the food cache",
    "purpose": "Hang the smoked fish high between two trees, well away from the shelter, out of reach of bears, wolverines and foxes.",
    "requires": {
      "tools": [
        "cache-pole",
        "stub-ladder",
        "knife",
        "saw",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "root-cordage",
          "qty": 18
        },
        {
          "id": "birch-bark",
          "qty": 3
        }
      ],
      "skills": [
        "skill.lashing",
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      {
        "call": "make.cache-pole"
      },
      {
        "call": "make.stub-ladder"
      },
      {
        "call": "make.root-cordage",
        "times": 2
      },
      {
        "call": "gather.birch-bark"
      },
      "Choose two sound trees {cache.span} m apart, about {cache.toShelter} m from the shelter, away from the paths to the shore and the snare line.",
      "Saw off every branch on both trunks below 3 m, and any branch within 1 m of where the pole will run.",
      "Lean the stub ladder against the first tree and brace its foot with stones.",
      "Tie a length of root cordage to one end of the cache pole. Climb to about 1 m above {cache.height} m, measured by marking the ladder with the stick beforehand, pull the end of the pole up, and lash it to the trunk on top of a branch stub. Pad the bark with moss under the lashing.",
      "Move the ladder to the second tree and lash the other end at the same height, so the pole is level.",
      "Tie a stone to one end of a 12 m root-cordage hoist line and throw it over the middle of the pole. Untie the stone.",
      "Tie a ring of root cordage to the end that hangs from the middle. Hang the bark bundles of fish from the ring.",
      "Pull the other end of the line until the bottom of the lowest bundle is {cache.height} m up. Climb the ladder and tie the line off round the trunk 3 m up with a round turn and two half hitches.",
      "Lay the ladder flat on the ground well away from both trees when you leave. A bear can climb a leaning ladder."
    ],
    "checks": [
      "The bottom of the lowest bundle is at least {cache.height} m above the ground, checked with a pole marked from the measuring stick.",
      "The bundles hang at least {cache.toTrunk} m from each trunk.",
      "The hoist line is tied off 3 m up, out of reach from the ground.",
      "With all the bundles hung, the pole sags no more than 10 cm at the middle."
    ],
    "safety": [
      "Climb only with three points on the ladder or tree at all times. Never climb in wind or on icy stubs.",
      "Lower and raise the bundles by the line; never climb with a load.",
      "Wolverines and foxes raid caches all winter. Look for claw marks on the trunks each time you visit."
    ],
    "estimate": {
      "hours": 4
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
