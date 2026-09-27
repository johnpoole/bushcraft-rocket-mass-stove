// Build the burn tunnel and feed tube
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.tunnel",
    "kind": "task",
    "builds": ["feed-tube"],
    "title": "Build the burn tunnel and feed tube",
    "purpose": "Build the J: a horizontal burn tunnel and an upright feed tube in refractory mix around grass-and-bark formers, with a fired-tile floor that stands the wear.",
    "requires": {
      "tools": [
        "size-gauge",
        "measuring-stick",
        "knife"
      ],
      "materials": [
        {
          "id": "refractory-mix",
          "qty": 0.03
        },
        {
          "id": "stove-former",
          "qty": 2
        },
        {
          "id": "flat-stones",
          "qty": 4
        },
        {
          "id": "fired-bricks",
          "qty": 4
        }
      ],
      "skills": [
        "skill.tread-mix"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The base is finished and the light clay has firmed for a day."
    ],
    "steps": [
      {
        "call": "gather.stove-formers"
      },
      {
        "call": "gather.flat-stones"
      },
      {
        "call": "gather.fired-bricks"
      },
      "On the light clay, mark the centre of the dome square: that is where the riser will stand. The tunnel runs from there straight out toward the room, south.",
      "Scrape a strip of light clay one slab thick along that line and bed the largest flat slab in it, so its top is level with the shelter floor.",
      "Lay the fired tiles on the slab in a thin bed of refractory mix, butted tight. The top of the tiles is the tunnel floor: measure every stove height from it.",
      {
        "call": "gather.refractory-mix"
      },
      "Lay the tunnel former on the tiles, with its north end at the far side of the riser position and its south end toward the room.",
      "Stand the feed-tube former upright on the south end of the tunnel former, flush with its end, so its top is {stove.feedHeight} cm above the tunnel floor.",
      "Pack refractory mix along both sides of the tunnel former, 5–8 cm thick, up to its top. Press it in hard with your fingers so there are no voids.",
      "Cap the tunnel with two flat slabs bedded in refractory mix, from the feed tube to the riser position. Leave the last {stove.size} cm at the north end open: that is the mouth of the riser.",
      "Pack refractory mix 5–8 cm thick around the feed-tube former, up to its top.",
      "Bed a flat hearth stone on the floor in front of the feed tube.",
      "Let it firm overnight.",
      "Next day, cut the formers' ties through the openings and pull the grass out a handful at a time, then slide out the bark. Do not leave any of it in.",
      "Run the size gauge along the whole tunnel and down the feed tube, both ways across. Scrape away any bulge the gauge catches on."
    ],
    "checks": [
      "The {stove.size} cm gauge passes the full length of the tunnel and the feed tube, both ways across, without catching.",
      "The feed tube top is {stove.feedHeight} cm above the tunnel floor.",
      "Measured along the inside floor from the far wall of the feed tube to the far end of the riser mouth, the tunnel is {stove.tunnelLength} cm.",
      "The walls are 5–8 cm thick at the sides."
    ],
    "safety": [],
    "estimate": {
      "hours": 5,
      "waitDays": 1,
      "note": "Estimate. The walls firm overnight before the formers come out."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
