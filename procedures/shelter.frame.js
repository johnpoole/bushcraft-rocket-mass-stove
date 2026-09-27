// Build the shelter frame
(function (root) {
  'use strict';
  const procedure = {
    "id": "shelter.frame",
    "kind": "task",
    "builds": ["ditch", "frame"],
    "title": "Build the shelter frame",
    "purpose": "Clear the site, turn the rain around it, and put up the posts, the beam, the plate and the rafters, then roof it with the tarp so you can sleep dry under it within the first days.",
    "requires": {
      "tools": [
        "axe",
        "saw",
        "knife",
        "digging-stick",
        "bark-tray",
        "club",
        "measuring-stick",
        "hook-pole",
        "tarp"
      ],
      "materials": [
        {
          "id": "frame-posts",
          "qty": 7
        },
        {
          "id": "beam-logs",
          "qty": 2
        },
        {
          "id": "rafters",
          "qty": 8
        },
        {
          "id": "root-cordage",
          "qty": 36
        }
      ],
      "skills": [
        "skill.axe",
        "skill.saw",
        "skill.set-posts",
        "skill.lashing"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The site is chosen and marked, with three trees {shelter.treeSpacingX} m and {shelter.treeSpacingZ} m apart and the fourth corner marked with a stick."
    ],
    "steps": [
      "On the first night, before anything else is up, lash a pole between the two west trees at chest height and tie the tarp over it as a plain lean-to, its low edge pegged down on the windward side. Sleep under that until the roof is on.",
      "Look up once more from each corner. Pull down any dead branch over the site with the hook pole, standing to one side of it, never underneath.",
      "Clear the floor and 1 m round it: saw off brush and small trees at the ground.",
      "Cut the moss and leaf litter into mats with the knife, roll them up and pile them to one side for the earth bank and chinking.",
      "Loosen the roots and humus with the digging stick and scrape them off down to mineral soil. Cut roots thinner than 3 cm with the saw. Leave every root of the three shelter trees that is thicker than that, and dig round it.",
      "Rake the floor level with a forked branch, filling low spots with soil from high ones, and check it with the pot of water on a pole.",
      "Drain ditch: 1 m uphill of the back wall line, dig a ditch 20 cm wide and 20 cm deep with the digging stick, from 1 m past the east end to 1 m past the west end. Turn each end downhill and run it 2 m further, past the front corners. Dig under any big root of the north-west tree, do not cut it.",
      "Carry the soil from the ditch away in the bark tray and spread it on low spots of the floor, tamped down.",
      {
        "call": "gather.frame-posts",
        "times": 2,
        "note": "for 7: the corner post, a post halfway along the back, two door posts, and three props beside the trees"
      },
      {
        "call": "gather.beam-logs"
      },
      {
        "call": "gather.rafters",
        "note": "for 8, with 2 spare"
      },
      {
        "call": "make.root-cordage",
        "times": 4,
        "note": "for about 36 m; keep it soaking until you tie it"
      },
      "Corner post: set a 2.6 m post at the fourth corner, 50 cm deep. Saw its top so the bottom of its saddle is {shelter.backHeight} m above the floor, measured with the stick.",
      "Set the second 2.6 m post halfway between the corner post and the north-west tree, on the line between them, and saw its top to the same height.",
      "Door posts: set the two 1.8 m posts on the line between the two south trees, one each side of the door. The door opening starts {shelter.doorFrom} cm west of where the inside face of the east wall will be, and the clear gap between the posts is {shelter.doorWidth} cm. Saw their tops so their saddles are {shelter.frontHeight} m above the floor.",
      "Props: cut the last three posts to length and set one on the wall line beside each tree, {shelter.trunkGap} cm clear of the bark: at the north-west tree with its saddle at {shelter.backHeight} m, and at each south tree with its saddle at {shelter.frontHeight} m. The props carry the weight; the trees only steady the frame, so they can sway without pulling it apart.",
      "Raise the beam one end at a time. Standing on a log round, lift the east end into the saddle of the corner post, 10 cm past it, and tie it there with a turn of cordage. Then lift the west end into the saddle of the prop by the north-west tree. It rests on the middle post as well.",
      "Lash the beam to the corner post and the middle post with square lashings.",
      "At the north-west tree, pad the bark with moss and a folded piece of birch bark and tie the end of the beam to the trunk with a loose lashing, loose enough to slip a hand under.",
      "Raise and lash the plate the same way: into the saddles of the two south props and the two door posts, square lashings on the posts, and loose padded lashings round the two south trunks.",
      "Measure from the floor to the underside of the beam at each support, and of the plate: {shelter.backHeight} m and {shelter.frontHeight} m, within 3 cm. Shim or re-cut a saddle where they are not.",
      "Rafters: lay the first rafter from beam to plate 5 cm in from the south-east trunk and the last 5 cm in from the two west trunks. Space the other six evenly between, no more than {shelter.rafterSpacing} cm apart centre to centre.",
      "Lay each with its thick end at the plate, hanging {shelter.overhangFront} cm past it at the front and 10 cm past the beam at the back.",
      "Where each rafter crosses the beam and the plate, chop a shallow saddle 2 cm deep in its underside so it cannot roll, then lash it with a square lashing.",
      "Stretch a cord across the tops of the rafters at the middle of the slope. Chop down any rafter that stands more than 3 cm proud of the others, or shim a low one at the beam.",
      {
        "call": "make.tarp-pieces",
        "note": "take down the night-one lean-to first"
      },
      {
        "call": "shelter.roof-cover"
      }
    ],
    "checks": [
      "Each post and prop does not move when you push its top hard with both hands.",
      "Beam underside at {shelter.backHeight} m and plate underside at {shelter.frontHeight} m above the floor, within 3 cm, measured with the stick at every support.",
      "Eight rafters, no more than {shelter.rafterSpacing} cm apart, each lashed at both ends, with their tops within 3 cm of a cord pulled across them.",
      "Every lashing round a living tree is padded, and a hand slips under it.",
      "After rain, water runs along the ditch and round the shelter, and none stands on the floor.",
      "The roof passes the checks in Cover the roof."
    ],
    "safety": [
      "Never stand under a log while it is being raised. Lift one end at a time and step clear before you let go.",
      "Work from the ground or a log round. Never climb the frame or stand on the rafters.",
      "Do not lash tight round a living tree. The tree sways and grows, and a tight lashing girdles it or tears the frame."
    ],
    "estimate": {
      "hours": 15,
      "note": "About 15 hours for the frame itself; with the posts, beam, plate, rafters and cordage, and covering the roof, about 43 hours, four long days. Sleep under the plain tarp lean-to until the roof is on, about day 4 or 5."
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
