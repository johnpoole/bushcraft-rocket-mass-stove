// Read the stove's draw
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.read-draw",
    "kind": "skill",
    "title": "Read the stove's draw",
    "purpose": "Tell from the flame, the sound and the smoke whether the stove is drawing well, and what to do when it is not.",
    "requires": {
      "tools": [],
      "materials": [],
      "skills": []
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [],
    "steps": [
      "A good draw: the fire roars, the flame leans sideways into the tunnel, and air is pulled down the feed tube. There is little or no smoke from the chimney, only a shimmer or a little white steam.",
      "Test it before lighting: hold a wisp of smouldering grass at the top of the feed tube. A good stove pulls the smoke in.",
      "Smoke rolling back out of the feed tube means the system is cold or blocked.",
      "Cold: warm the riser first with a small, hot fire of shavings at its foot, before you load the feed tube.",
      "Blocked: an ash heap in the tunnel, ash at the bottom of the dome or at the bends, or a pinch point where a wall slumped. Clean out before changing anything else.",
      "Too much fuel at once chokes it: feed fewer sticks, standing upright, and push them down as they burn.",
      "Damp wood smokes and burns cool. Dry it on the cooktop or beside the stove for the next day.",
      "Dark smoke from the chimney means the fire is starved or smothered: less fuel, more air."
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
