// A day in open water
(function (root) {
  'use strict';
  const procedure = {
    "id": "routine.open-water-day",
    "kind": "task",
    "title": "A day in open water",
    "purpose": "The daily round from mid-September until freeze-up: catch more than you eat, and store the rest.",
    "requires": {
      "tools": [],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The gill net is set, the weir built, the lines ready, the snare line set and the smoke rack built.",
      "The smoke-rack fire is kept in, banked at night."
    ],
    "steps": [
      {
        "call": "fish.check-net",
        "note": "at dawn"
      },
      {
        "call": "fish.check-lines",
        "note": "set the evening before"
      },
      {
        "call": "fish.check-weir",
        "note": "in the morning"
      },
      {
        "call": "food.pick-berries",
        "note": "on the way between the net, the lines and the weir"
      },
      {
        "call": "snare.check-line"
      },
      {
        "call": "gather.dry-wood"
      },
      {
        "call": "gather.green-wood",
        "note": "for the smoke-rack fire"
      },
      "Rake open the banked smoke-rack fire and feed it green wood. Turn the fish on the rack.",
      {
        "call": "food.cook-fish",
        "note": "at midday, on the smoke-rack fire"
      },
      "Spend the middle of the day on the shelter and the stove.",
      {
        "call": "food.dig-cattail",
        "note": "in the weedy bay, on the way back from the pike lines"
      },
      {
        "call": "fish.check-weir",
        "note": "in the evening"
      },
      {
        "call": "fish.check-net",
        "note": "at dusk"
      },
      {
        "call": "fish.set-lines",
        "note": "at dusk, with bait from the day's cleaning"
      },
      "Put the day's fish beyond what you eat into the next batch for the smoke rack.",
      {
        "call": "food.cook-fish",
        "note": "in the evening"
      },
      "Bank the smoke-rack fire for the night. Until the bears den, take the fish off the rack into the cache."
    ],
    "checks": [
      "Net, lines, weir pen and snares each checked, and every fish cleaned at the water.",
      "More fish kept for the rack than was eaten: about 6 kg, a planning figure."
    ],
    "safety": [
      "Cook every fish right through.",
      "Nothing from the fish comes within 20 m of the shelter."
    ],
    "estimate": {
      "hours": 0.5,
      "note": "Per day, beyond the jobs it calls. About 9 hours in all, leaving little daylight for building: if the days run short, keep the fish first."
    },
    "repeat": "daily"
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
