// Set the gill net from shore
(function (root) {
  'use strict';
  const procedure = {
    "id": "fish.set-gill-net",
    "kind": "task",
    "title": "Set the gill net from shore",
    "purpose": "Set the {net.length} m gill net straight out from the creek mouth without a boat, on a running loop so it can be checked from shore.",
    "requires": {
      "tools": [
        "gill-net",
        "net-poles",
        "knife",
        "axe",
        "saw",
        "measuring-stick",
        "fishing-kit"
      ],
      "materials": [
        {
          "id": "root-cordage",
          "qty": 37
        },
        {
          "id": "poles",
          "qty": 7
        },
        {
          "id": "creek-stones",
          "qty": 0.02
        }
      ],
      "skills": [
        "skill.gill-net",
        "skill.lashing",
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The shelter site is chosen near where a creek runs into the lake. This is one of the jobs of the first three days.",
      "A fire is burning on the shore before you go into the water."
    ],
    "steps": [
      {
        "call": "make.net-poles"
      },
      {
        "call": "fish.rig-net"
      },
      {
        "call": "make.root-cordage",
        "times": 4,
        "note": "for the running loop, about 32 m, and the anchor and float lashings"
      },
      {
        "call": "gather.creek-stones"
      },
      {
        "call": "gather.poles"
      },
      "Make the running line: join the root cordage end to end with sheet bends, trimmed short so they slide. You need a line 32 m long. Soak it.",
      "Make the ring: twist a green willow shoot 1 cm thick and 1 m long into a ring 8 cm across, wrapping the end around and around itself, and tie it with a turn of root cordage. A smooth ring lets the line run.",
      "Make the anchor (a killick): cut two sticks 60 cm long from a pole and lash them together in a cross. Lash a creek stone of about 10 kg, about the size of a large loaf, in the middle of the cross, with the cordage passing both ways over the stone. Tie the ring to the anchor with 1 m of root cordage.",
      "Make a float to carry the anchor out: lash four poles side by side with two cross-sticks. It carries a 10 kg stone with room to spare.",
      "Drive a peeled pole cut to 1.5 m into the gravel at the creek mouth as the shore post, or tie it upright to a boulder or a tree at the water.",
      "Pass the running line through the ring and bring both ends together, so the line is a loop with the ring at its far end. Tie a knot in both sides 14 m from the ring, measured with the stick, as a mark.",
      "Lay the side of the loop that will carry the net along the shore. Tie the loops at the inner end of the net, top and bottom, to it 1 m from the 14 m knot toward the ring, and the loops at the outer end {net.length} m further toward the ring, 1 m short of the ring. Tie the outer end also to the ring itself with 1 m of root cordage, so the anchor holds the net out.",
      "Set the anchor on the float. Tie it on with a slipped half hitch whose free end, the trip line, is a length of fishing line long enough to reach back to the shore, about 20 m.",
      "Wait for a wind blowing off the shore, or use the creek current at the mouth. Push the float out with a pole cut to 3.5 m, and let it drift, paying out both sides of the loop and the trip line.",
      "If no offshore wind comes within two days, wade out along the gravel of the creek mouth no deeper than mid-thigh and push the float ahead of you with the pole as far as it goes, then let the current take it.",
      "When the 14 m knots reach the shore post, jerk the trip line. The slip knot lets go and the anchor drops.",
      "Pull the float back to shore by the trip line.",
      "Pull the net side of the loop until the inner end of the net reaches the shore post. The net now runs straight out from the mouth, held at its outer end by the anchor.",
      "Tie both sides of the loop to the shore post.",
      {
        "call": "fish.check-net",
        "times": 2,
        "note": "at dusk and the next dawn, to see that it fishes"
      }
    ],
    "checks": [
      "A straight row of floats running out {net.length} m from the creek mouth.",
      "Pulling one side of the loop brings the whole net ashore in under ten minutes; pulling the other side sends it back out.",
      "The anchor does not drag when the net is pulled ashore."
    ],
    "safety": [
      "The lake is cold enough in September to numb your legs in minutes. Wade only in daylight, no deeper than mid-thigh, for no more than ten minutes, with a fire burning on the shore and dry clothes beside it.",
      "Take off trousers and boots before wading, and put them back on dry.",
      "Never go out on the float yourself."
    ],
    "estimate": {
      "hours": 5,
      "note": "Estimate, plus up to two days waiting for an offshore wind."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
