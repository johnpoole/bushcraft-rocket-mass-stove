// Kill, skin and cook a hare
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.skin-hare",
    "kind": "skill",
    "title": "Kill, skin and cook a hare",
    "purpose": "Deal with a snared hare quickly and use all of it: meat, organs and hide.",
    "requires": {
      "tools": [
        "knife",
        "club",
        "pot"
      ],
      "materials": [],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "If a hare is alive in the snare, kill it at once with one hard blow of the club behind the ears.",
      "Hang it by the hind legs from the skinning stump. Cut around each hind leg above the foot, through the skin only, and slit the skin along the inside of both legs to the tail.",
      "Peel the skin down over the body like a sock, working your fingers between skin and meat. Cut off the front feet and the head with the skin.",
      "Open the belly with a shallow cut from the tail to the ribs, without cutting the gut. Pull out the guts. Keep the heart, liver and kidneys.",
      "Look at the liver. If it has white spots, the hare has tularemia: bury the whole carcass, and scrub your hands and knife with ash and water.",
      "Turn the skin fur side in, stretch it over a bent willow frame, and hang it to dry in the shelter, away from the stove. Dry hides make mitten and hat liners.",
      "Cook the whole hare in the pot until the meat falls from the bones, and add fish fat or burbot liver to the pot. Hare has almost no fat, and lean meat alone starves you.",
      "Put the guts and bones in the lake from the cleaning rock, not near the shelter or the snare line."
    ],
    "checks": [],
    "safety": [],
    "estimate": {
      "hours": 0
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
