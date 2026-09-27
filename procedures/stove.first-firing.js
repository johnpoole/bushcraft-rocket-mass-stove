// Dry and fire the stove for the first time
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.first-firing",
    "kind": "task",
    "title": "Dry and fire the stove for the first time",
    "purpose": "Drive the water out of the new stove slowly and burn out the woven riser former, without cracking it.",
    "requires": {
      "tools": [
        "ash-rake",
        "bark-tray",
        "ferro-rod",
        "knife"
      ],
      "materials": [
        {
          "id": "dry-wood",
          "qty": 4
        },
        {
          "id": "birch-bark",
          "qty": 1
        },
        {
          "id": "slip",
          "qty": 2
        }
      ],
      "skills": [
        "skill.read-draw",
        "skill.stove-safety",
        "skill.plaster",
        "skill.judge-dryness"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "Stage one is built and sealed."
    ],
    "steps": [
      {
        "call": "gather.dry-wood"
      },
      {
        "call": "gather.birch-bark",
        "note": "if you have no tinder left"
      },
      {
        "call": "gather.slip",
        "note": "for cracks"
      },
      "Air-dry the stove for as long as you can: several days, longer in wet weather. Keep the door and vent open by day.",
      "Light a few handfuls of twigs just inside the feed tube. Keep it small. Do it two or three times a day for one to two days. This slowly drives out water and burns out the woven riser former.",
      "When it is cold, rake the ash and any charred former out through the feed tube, the dome cleanout and the chimney foot cleanout, into the bark tray.",
      "Over the next several days, make each fire a little bigger and longer.",
      "Steam and hairline cracks are normal. Fill each crack with slip as it appears."
    ],
    "checks": [
      "The fire roars, leans sideways into the tunnel and is pulled down the feed tube.",
      "Little or no smoke from the chimney once the fire is going.",
      "No steam from the dome after an hour's firing."
    ],
    "safety": [
      "Ventilate: door and vent open during and after every firing.",
      "If you get a headache, dizziness or nausea, get outside at once."
    ],
    "estimate": {
      "hours": 8,
      "waitDays": 5,
      "note": "Estimate: short fires tended over about a week, including several days of air-drying first."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
