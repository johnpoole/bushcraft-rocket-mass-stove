// Fish with hook and line
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.hook-and-line",
    "kind": "skill",
    "title": "Fish with hook and line",
    "purpose": "Tie hooks, bait them and set lines that fish on their own, from shore and through the ice.",
    "requires": {
      "tools": [
        "fishing-kit",
        "knife",
        "snare-wire"
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
      "Tie the hook with a clinch knot: pass 15 cm of line through the eye, twist the end five times around the line, pass it back through the small loop next to the eye, wet the knot with your mouth and pull it tight. Trim the end to 3 mm.",
      "For pike, whose teeth cut line, tie a leader of snare wire 20 cm long between the line and the hook: twist the wire through the hook eye and back on itself six times, and make a small loop at the other end for the line.",
      "Bait with what the fish eat: a strip of fish belly 5 cm long with the skin on, a fish eye, or a piece of liver. Hook the bait once through the skin so it hangs and moves.",
      "Tie on a sinker: a pebble the size of a walnut, wrapped in a scrap of birch bark and tied, 30 cm above the hook.",
      "A set line fishes while you are away: cut a springy green willow or birch 2 m long, wedge its thick end in rocks or push it into soft ground at the water, leaning out, and tie the line to its tip. When a fish takes the bait, the pole bends and keeps the line tight so the hook sets.",
      "Set lines for lake trout off rocky points, where the bottom drops away, with the bait just off the bottom. In autumn the trout come in over rocky shoals to spawn. Set lines for pike along the edge of the weeds in shallow bays, with the bait 50 cm below the surface.",
      "To jig through the ice: wind line on a stick 30 cm long, drop a baited hook to the bottom, lift it 20 cm, and lift and drop it slowly every few seconds. Lake trout and burbot come to movement. Burbot feed at night and near the bottom.",
      "Never leave a hook in the water with no one checking it for more than a day; a fish that dies on the hook spoils."
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
