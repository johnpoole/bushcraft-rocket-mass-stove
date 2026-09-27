// Build the stone duct
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.duct",
    "kind": "task",
    "title": "Build the stone duct",
    "purpose": "Build the stone-lined channel that carries the exhaust from the dome outlet along the bench route to the chimney, covered with flat stones and sealed.",
    "requires": {
      "tools": [
        "size-gauge",
        "measuring-stick",
        "bark-tray"
      ],
      "materials": [
        {
          "id": "stones",
          "qty": 0.1
        },
        {
          "id": "flat-stones",
          "qty": 10
        },
        {
          "id": "cob",
          "qty": 0.05
        }
      ],
      "skills": [
        "skill.stone-in-cob"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The dome is built and the stone layer is down along the bench route."
    ],
    "steps": [
      {
        "call": "gather.cob"
      },
      "Mark the route on the stone layer: west along the middle of the bench strip beside the back wall, a first bend about 30 cm short of the west wall, south along the middle of the seat, a second bend opposite where the chimney will stand, and west out through the opening in the west wall. It is about {channel.length} m with {channel.bends} bends.",
      "From the dome outlet, build a ramp of stones and cob so the channel floor climbs {channel.rise} cm onto the stone layer over the first 30 cm.",
      "Build the two side walls of stones bedded in cob, {stove.size} cm apart and {stove.size} cm high, checking with the size gauge every 30 cm.",
      "At each bend keep the full width through the corner, and round the inside corner with cob so the gas turns smoothly.",
      "Keep the floor level or rising slightly toward the chimney; never let it dip.",
      "Where the duct passes through the west wall, pack cob round it so no log is closer than {bench.backGap} cm.",
      "Cover the channel with flat slabs bedded on cob along the wall tops. Seal every joint between slabs with cob.",
      "Over each of the two bends, lay a slab on a thin bead of clay only, so it can be lifted to rake out the ash."
    ],
    "checks": [
      "Before covering, the size gauge passed every 30 cm along the whole run, both ways.",
      "The floor rises {channel.rise} cm from the dome outlet and never dips after that.",
      "Both bend stones lift out by hand."
    ],
    "safety": [],
    "estimate": {
      "hours": 8,
      "waitDays": 1,
      "note": "Estimate for about {channel.length} m of duct."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
