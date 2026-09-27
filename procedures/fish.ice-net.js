// Set the gill net under the ice
(function (root) {
  'use strict';
  const procedure = {
    "id": "fish.ice-net",
    "kind": "task",
    "title": "Set the gill net under the ice",
    "purpose": "Set the gill net between two holes under the ice, drawn through with the long pole, so it fishes all winter.",
    "requires": {
      "tools": [
        "gill-net",
        "ice-pole",
        "axe",
        "slush-ladle",
        "gaff",
        "measuring-stick",
        "knife"
      ],
      "materials": [
        {
          "id": "spruce-boughs",
          "qty": 3
        },
        {
          "id": "snow",
          "qty": 0.3
        }
      ],
      "skills": [
        "skill.read-ice",
        "skill.gill-net",
        "skill.axe"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "At least 10 cm of clear ice over water deeper than the net is tall. Set it early in the ice season while the ice is thin: cutting the holes in thick ice costs more than they bring back."
    ],
    "steps": [
      {
        "call": "fish.lift-net",
        "note": "at freeze-up, weeks earlier, when shore ice first forms"
      },
      {
        "call": "gather.boughs"
      },
      "Choose a straight line over deeper water, away from the creek mouth, testing the ice all the way along with the axe.",
      "Cut the first net hole, 40 × 60 cm, as for the ice holes.",
      "Measure {net.length} m plus 2 m from its edge with the measuring stick and cut the second net hole the same size.",
      "The pole is 5 m long and cannot reach the whole way. Cut small push holes 20 cm across every 3.5 m along the line between the two net holes.",
      "Cut the running line from the open-water set into two lines: a tow line and a tail line, each about 16 m.",
      "Tie the tow line to the notch at the thin end of the ice pole. Push the pole under the ice from the first net hole toward the first push hole, feeding the tow line after it.",
      "At the push hole, hook the pole with the gaff, pull it along, and push it on to the next hole. Repeat until it comes up at the second net hole. Pull it out; the tow line now runs under the ice from hole to hole.",
      "At the first hole, tie the far end of the net to the tow line and the tail line to the near end of the net.",
      "From the second hole, pull the tow line to draw the net under the ice, floats up, feeding it from the first hole so it does not tangle, until the net's far end reaches the second hole.",
      "Tie the tow line to a stick 1 m long laid across the second hole, and the tail line to a stick across the first hole.",
      "Let the push holes freeze. Cover the two net holes with boughs and snow.",
      {
        "call": "fish.check-ice-net",
        "note": "the next morning"
      }
    ],
    "checks": [
      "The net lies under the ice between two holes {net.length} m plus 2 m apart, with a line tied off at each.",
      "Pulling at the second hole brings the whole net out; pulling the tail line at the first hole takes it back under."
    ],
    "safety": [
      "Test the ice at every step along the line. Carry the pole across your body when you are not pushing it.",
      "Keep away from the creek mouth."
    ],
    "estimate": {
      "hours": 5,
      "note": "Estimate for 15–20 cm of ice."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
