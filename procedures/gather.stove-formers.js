// Make the tunnel and feed-tube formers
(function (root) {
  'use strict';
  const procedure = {
    "id": "gather.stove-formers",
    "kind": "gather",
    "title": "Make the tunnel and feed-tube formers",
    "purpose": "Make two formers of dry grass bound in bark to pack refractory mix around, which pull out once the walls have firmed. Green wood left inside wet clay chars slowly and leaves debris in the flue.",
    "requires": {
      "tools": [
        "knife",
        "size-gauge",
        "measuring-stick"
      ],
      "materials": [
        {
          "id": "grass-fibre",
          "qty": 2
        },
        {
          "id": "birch-bark",
          "qty": 2
        },
        {
          "id": "root-cordage",
          "qty": 3
        }
      ],
      "skills": [
        "skill.knife"
      ]
    },
    "produces": {
      "tools": [],
      "materials": [
        {
          "id": "stove-former",
          "qty": 2
        }
      ]
    },
    "preconditions": [],
    "steps": [
      "Gather long dry grass into a tight bundle a little thicker than the former gauge.",
      "Wrap a sheet of birch bark round it, white side out, and tie it with root cordage every 10 cm.",
      "Press each side flat against a flat stone until it is square, and check it with the former gauge both ways.",
      "Cut the first former {stove.tunnelLength} cm long, for the tunnel.",
      "Make the second the same way, {stove.feedHeight} cm less {stove.size} cm long, for the feed tube, which stands on the end of the tunnel former."
    ],
    "checks": [
      "Both are square, the former gauge fitting snug across them both ways at every 10 cm.",
      "The tunnel former is {stove.tunnelLength} cm long; the feed-tube former, stood on it, tops out {stove.feedHeight} cm above the base of the tunnel former."
    ],
    "safety": [],
    "estimate": {
      "hours": 1.5
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
