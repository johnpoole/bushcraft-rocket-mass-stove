// Use a knife safely
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.knife",
    "kind": "skill",
    "title": "Use a knife safely",
    "purpose": "Carve, cut cordage and split small wood with the knife from the kit without cutting yourself.",
    "requires": {
      "tools": [
        "knife"
      ],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "Sit down to carve, elbows on your knees, with the work outside your knees. Keep the blade away from the inside of your thighs, where a slip reaches the big blood vessels.",
      "Carve away from your body. For a controlled cut toward you, hold the work against your chest and pull the blade with both arms by squeezing your shoulder blades together, so it cannot travel.",
      "For fine cuts, push the back of the blade with the thumb of the hand holding the work, moving the blade a few millimetres at a time.",
      "To split a stick thinner than the blade is long, stand it on a log, set the blade across the top, and strike the back of the blade with a club of green wood (baton). Never baton wood thicker than the blade is long.",
      "Sharpen on a fine-grained flat stone from dry ground, holding the bevel flat on the stone, in small circles, equally on both sides.",
      "Keep it in its sheath when you are not cutting."
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
