// Set posts and drive stakes
(function (root) {
  'use strict';
  const procedure = {
    "id": "skill.set-posts",
    "kind": "skill",
    "title": "Set posts and drive stakes",
    "purpose": "Stand a post or a stake upright and firm in the ground without a shovel or a hammer, with the digging stick and the club.",
    "requires": {
      "tools": [
        "digging-stick",
        "club",
        "measuring-stick"
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
      "Post: loosen a hole 25–30 cm across with the digging stick and lift the soil out by hand, down to the depth the job gives, usually 50 cm. Keep the hole no wider than it must be: firm soil at its sides holds the post.",
      "Stand the post in the hole, thick end down. Hang a stone on a length of cordage as a plumb line and hold it beside the post, from two sides at right angles. Tilt the post until it runs parallel to the line both ways.",
      "Put the soil back 10 cm at a time. Ram each layer hard with the butt of the club or a thick pole all round the post before adding the next. Push fist-sized stones in against the post as you go; they lock it.",
      "Stake: loosen a pilot hole with the digging stick, 20–30 cm deep and a little narrower than the stake. Stand the stake in it, point down.",
      "Hold the stake low down with one hand, clear of the top, and strike its top square with the club. Light blows first until it stands on its own, then full blows.",
      "Check it with the plumb line every few blows and knock it straight while it is still shallow.",
      "If it stops dead on stone, pull it, move it 5 cm and try again. If there is stone everywhere, pack stones round the stake in a wider hole and ram them as for a post.",
      "Saw the top square again if the club has split or mushroomed it."
    ],
    "checks": [],
    "safety": [
      "Keep the hand holding the stake below the top by at least a hand-width. The club glances off a split top."
    ],
    "estimate": {
      "hours": 0
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
