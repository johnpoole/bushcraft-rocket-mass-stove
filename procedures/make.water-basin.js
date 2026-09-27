// Make the water basin
(function (root) {
  'use strict';
  const procedure = {
    "id": "make.water-basin",
    "kind": "make",
    "builds": ["water-basin"],
    "title": "Make the water basin",
    "purpose": "Make a basin for water by burning out a half log, since the pot is needed for cooking.",
    "requires": {
      "tools": [
        "saw",
        "axe",
        "club",
        "wedges",
        "knife",
        "measuring-stick",
        "pot"
      ],
      "materials": [
        {
          "id": "dry-wood",
          "qty": 2
        },
        {
          "id": "water",
          "qty": 5
        }
      ],
      "skills": [
        "skill.saw",
        "skill.split-log",
        "skill.burn-out"
      ]
    },
    "produces": {
      "tools": [
        "water-basin"
      ],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Find a sound dead log about 32 cm thick: a windfall or a dry drift log above the high-water line. Knock it with the axe back: it should ring, not thud.",
      "Saw off a length of {shelter.basinLength} cm, measured with the stick.",
      "Split it in half through the middle of the end grain.",
      "Lay one half flat side up. It is about {shelter.basinWidth} cm wide and {shelter.basinHeight} cm high. Chop the round underside flat enough that it does not rock.",
      {
        "call": "task.light-fire",
        "note": "for coals; keep it fed through the day"
      },
      "Burn and scrape the flat face out to a hollow 10 cm deep, leaving a rim 3 cm thick and a bottom 4 cm thick.",
      "Scrape the inside smooth, down to clean wood with no char left in it.",
      "Fill it with water and leave it overnight, so the wood swells and closes any cracks."
    ],
    "checks": [
      "A hollow about 10 cm deep inside a {shelter.basinLength} × {shelter.basinWidth} cm half log, measured with the stick.",
      "Filled to the rim, it loses less than 1 cm of water overnight after the first soaking."
    ],
    "safety": [
      "Burn it out on bare soil at least 3 m from the shelter, and never leave the coals in it unattended."
    ],
    "estimate": {
      "hours": 7,
      "note": "Mostly tending coals, which can be done beside other work at the fire."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
