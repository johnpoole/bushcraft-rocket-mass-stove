// A day at freeze-up
(function (root) {
  'use strict';
  const procedure = {
    "id": "routine.freeze-up-day",
    "kind": "task",
    "title": "A day at freeze-up",
    "purpose": "The daily round while the ice is too thin to walk on and too thick for open water: live on the store and your own fat.",
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
      "The smoked fish is hanging in the cache."
    ],
    "steps": [
      {
        "call": "snare.check-line",
        "note": "in the morning"
      },
      {
        "call": "gather.dry-wood",
        "note": "about four armloads of dead wood for the stove, split fine"
      },
      {
        "call": "food.forage-grubs",
        "note": "as you split"
      },
      {
        "call": "food.pick-rose-hips",
        "note": "on the way back from the snare line"
      },
      {
        "call": "food.eat-store",
        "note": "half at midday, half in the evening"
      },
      "Look at the ice in the small bay each day from the shore. Do not walk on it. Once it looks black and clear, test it from the edge with the axe; start ice fishing when it holds 10 cm of clear ice.",
      "Rest. Every hour of hard work costs food you do not have."
    ],
    "checks": [
      "Snares checked, the day's wood split and stacked, and one day's share eaten from the store.",
      "The tally stick shows days eaten against days of store left."
    ],
    "safety": [
      "Stay off the ice until it holds 10 cm of clear ice.",
      "Tap out at once for dizziness, confusion, fainting, a racing or stumbling heartbeat at rest, or swelling in the legs."
    ],
    "estimate": {
      "hours": 0.25,
      "note": "Per day, beyond the jobs it calls. About 4 hours in all."
    },
    "repeat": "daily"
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
