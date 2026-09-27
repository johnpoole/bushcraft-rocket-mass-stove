// Build and fire a test burner
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.test-burner",
    "kind": "task",
    "title": "Build and fire a test burner",
    "purpose": "Build a small, rough burner first, with just a feed tube, burn tunnel and a short insulated riser, outside and away from the shelter, to see whether your clay and your proportions draw before you spend a week on stage one.",
    "requires": {
      "tools": [
        "size-gauge",
        "measuring-stick",
        "knife",
        "ferro-rod"
      ],
      "materials": [
        {
          "id": "cob",
          "qty": 0.1
        },
        {
          "id": "grass-fibre",
          "qty": 1
        },
        {
          "id": "flat-stones",
          "qty": 2
        },
        {
          "id": "dry-wood",
          "qty": 1
        },
        {
          "id": "birch-bark",
          "qty": 1
        }
      ],
      "skills": [
        "skill.tread-mix",
        "skill.read-draw",
        "skill.stove-safety"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "Clay has been found, and some has been dug with sand and fibre gathered."
    ],
    "steps": [
      {
        "call": "gather.cob",
        "times": 2
      },
      {
        "call": "gather.dry-wood",
        "note": "if you have none left"
      },
      "Choose a spot of bare rock or mineral soil at least 5 m from the shelter and from any tree.",
      "Lay one flat stone as the tunnel floor.",
      "Tie two quick formers from long dry grass with grass twists, a little over {stove.size} cm square: one {stove.tunnelLength} cm long for the tunnel and one {stove.feedHeight} cm long for the feed tube.",
      "Lay the tunnel former on the floor stone and stand the feed-tube former on one end of it.",
      "Pack cob 5–8 cm thick around both formers. Lay the second flat stone across the tunnel as its roof, leaving the last {stove.size} cm at the far end open for the riser.",
      "Over that open end build a riser of cob 5 cm thick, half of {stove.riserHeight} cm tall, around a rolled bundle of grass as its former.",
      "Pack a thick jacket of cob mixed with extra chopped grass around the riser as rough insulation.",
      "Let it stand overnight. Wet cob is fine for a test; it only has to hold together for one evening.",
      "Pull the grass out of the tunnel and feed tube a handful at a time. Burn the riser former out with a handful of burning bark dropped down from the top.",
      "Light a small fire of shavings and thin sticks at the foot of the riser through the feed tube, then stand finger-thick sticks upright in the feed tube.",
      "Watch the flame and the smoke for half an hour.",
      "Break it down when you have seen enough. Soak the cob and tread it back into the next batch; put the stones back on the pile."
    ],
    "checks": [
      "Within 10 minutes of lighting, the flame leans sideways into the tunnel and is pulled down the feed tube.",
      "No smoke comes back out of the feed tube once it is going.",
      "If it smokes back, you have found a pinch point or a mix that slumped: find it with the size gauge before building the real stove."
    ],
    "safety": [
      "Build it well away from the shelter and the trees, and put it out with water before you leave it."
    ],
    "estimate": {
      "hours": 4,
      "note": "Estimate: about 3 hours to build, 1 hour to fire and watch the next day."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
