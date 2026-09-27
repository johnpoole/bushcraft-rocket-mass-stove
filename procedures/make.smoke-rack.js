// Build the smoke rack
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.smoke-rack",
    "kind": "make",
    "builds": ["smoke-rack"],
    "title": "Build the smoke rack",
    "purpose": "Build a frame of poles above the shore with two tiers for fish, a bark roof and a fire pit under it, since the stove makes no smoke.",
    "requires": {
      "tools": [
        "saw",
        "axe",
        "knife",
        "club",
        "measuring-stick",
        "digging-stick"
      ],
      "materials": [
        {
          "id": "stakes",
          "qty": 4
        },
        {
          "id": "poles",
          "qty": 5
        },
        {
          "id": "root-cordage",
          "qty": 10
        },
        {
          "id": "birch-bark",
          "qty": 3
        },
        {
          "id": "spruce-boughs",
          "qty": 3
        }
      ],
      "skills": [
        "skill.saw",
        "skill.axe",
        "skill.knife",
        "skill.lashing"
      ]
    },
    "produces": {
      "tools": [
        "smoke-rack"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      {
        "call": "gather.stakes",
        "note": "cut to 1.9 m, to stand {rack.height} m out of the ground"
      },
      {
        "call": "gather.poles"
      },
      {
        "call": "make.root-cordage"
      },
      {
        "call": "gather.birch-bark"
      },
      {
        "call": "gather.boughs"
      },
      "Choose a spot of soil about {rack.toShore} m above the shore, downwind of the shelter in the usual wind and at least 20 m from it, with no branches overhead.",
      "Mark a rectangle {rack.width} × {rack.depth} m with the measuring stick. Loosen the ground at each corner with the digging stick and drive a stake there with the club, until each stands {rack.height} m high.",
      "Saw poles to 1.7 m. Lash one across the two long sides at 1.0 m and one at 1.4 m, on the outside of the stakes, with square lashings. These carry the two tiers.",
      "Cut about 30 green willow or alder sticks, 2 cm thick and 1.2 m long. Lay them across each pair of tier bars every 10 cm and tie each end with a turn of cordage.",
      "Lash two poles across the tops of the stakes and lay bark sheets over them as a roof, white side up, overlapping like shingles. Tie them down.",
      "Tie boughs around three sides from the ground to the top tier, leaving the upwind side open to tend the fire. They hold the smoke around the fish.",
      "In the middle under the rack, dig a fire pit 50 cm across down to mineral soil. Clear everything that burns for 1 m around the rack."
    ],
    "checks": [
      "Four stakes standing {rack.height} m, the frame {rack.width} × {rack.depth} m, measured with the stick.",
      "The lower tier 1.0 m above the fire pit, the upper tier 1.4 m.",
      "Leaning your weight on a corner moves nothing.",
      "Rain on the roof runs off without dripping on the tiers."
    ],
    "safety": [
      "Keep the rack at least 20 m from the shelter and 1 m clear to mineral soil all round. Smoke rack fires are left burning for days; bank them, never leave open flames."
    ],
    "estimate": {
      "hours": 4
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
