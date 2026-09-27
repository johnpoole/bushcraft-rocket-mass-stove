// Keep safe with the stove
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.stove-safety",
    "kind": "skill",
    "title": "Keep safe with the stove",
    "purpose": "Avoid carbon monoxide, burns, bursting stones and fire in a closed shelter.",
    "requires": {
      "tools": [
        "pot"
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
      "Carbon monoxide: a cracked or badly drawing stove in a closed shelter can kill. Keep the vent and air inlet open and seal every crack. If you get a headache, dizziness or nausea, get outside now.",
      "Bursting stones: use only stones from dry ground near the heat. Stones from the lake, creeks or wet ground can hold water and explode.",
      "Fire spread: keep a clear zone of about 1 m round the feed tube, bare to mineral soil, and keep a full pot of water or a tray of earth beside the stove.",
      "Keep {bench.backGap} cm of light clay between the stove and bench and any log wall, and smear clay over the logs near the stove.",
      "Keep the tarp and boughs well away from the chimney: a spark melts through the tarp.",
      "Never leave it burning unattended, and never put a lid on the feed tube while it is burning.",
      "Follow local fire rules, and leave no trace when you break camp."
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
