// Build the fish weir
(function (root) {
  'use strict';
  const procedure = {
    "id": "fish.build-weir",
    "kind": "task",
    "title": "Build the fish weir",
    "purpose": "Build a fence of stakes across the creek just above its mouth that leads fish into a pen, so it fishes day and night with nothing to do but empty the pen.",
    "requires": {
      "tools": [
        "club",
        "knife",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "stakes",
          "qty": 80
        },
        {
          "id": "weave-branches",
          "qty": 8
        },
        {
          "id": "creek-stones",
          "qty": 0.2
        }
      ],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "Build it in the first two weeks, before the stove. Lake whitefish and cisco move into the shallows and creek mouths to spawn from about September into November."
    ],
    "steps": [
      {
        "call": "gather.stakes",
        "times": 8,
        "note": "about 80 stakes, cut to 1.2 m"
      },
      {
        "call": "gather.weave-branches",
        "times": 2
      },
      {
        "call": "gather.creek-stones",
        "times": 2
      },
      "Choose a spot a few metres above the creek mouth where the water is knee-deep or less and the bed is gravel you can drive stakes into. Push a stake into the bed by hand at a few places: it should go in 20 cm.",
      "Mark the point of the V in the middle of the creek, and the place where each arm meets a bank, a little downstream of the point, so the two arms slant upstream toward the middle.",
      "From each bank, drive a line of stakes into the bed with the club, toward the point, each one no more than 3 cm from the last. Drive each at least 30 cm into the gravel.",
      "Leave a gap of 10 cm between the two lines at the point of the V, measured with the stick.",
      "Upstream of the gap, drive a ring of stakes {weir.pen} m across as the pen, with the gap as its only way in. Where the ring runs up onto the banks, carry it on until it meets the arms, so no fish can pass around it.",
      "Check the tops of the stakes: at least 30 cm above the water everywhere, so fish cannot jump over. Drive in any stake that stands too low beside a taller one, or add one.",
      "Weave branches between the stakes of both arms and the pen, in and out, starting at the bottom. Push each row down onto the one below with your foot.",
      "Pile creek stones along the bottom of the fence and the pen, on the upstream side, so fish cannot slip under.",
      "Watch the first fish come up the creek: they follow the fence to its point, pass through the gap, and circle inside the pen without finding the way out.",
      {
        "call": "fish.check-weir",
        "note": "that evening"
      }
    ],
    "checks": [
      "Both arms run bank to bank with the stakes at least 30 cm above the water.",
      "A gap of 10 cm at the point of the V, into a pen {weir.pen} m across.",
      "No gap anywhere in the fence or the pen wider than 3 cm, including along the bottom.",
      "Pushed hard sideways, no stake moves."
    ],
    "safety": [
      "Creek water in September numbs hands and feet in minutes. Work in the water no more than twenty minutes at a time, then warm up at the fire.",
      "Keep the fire going on the bank and dry clothes beside it."
    ],
    "estimate": {
      "hours": 12,
      "note": "Estimate for building, after the stakes, branches and stones are gathered."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
