// Seal the stove
(function (root) {
  'use strict';
  const procedure = {
    "id": "stove.seal",
    "kind": "task",
    "title": "Seal the stove",
    "purpose": "Plaster the dome, the duct joints and the chimney base, and fill cracks with slip, so no smoke or carbon monoxide leaks into the shelter.",
    "requires": {
      "tools": [
        "knife"
      ],
      "materials": [
        {
          "id": "plaster",
          "qty": 0.05
        },
        {
          "id": "slip",
          "qty": 2
        }
      ],
      "skills": [
        "skill.plaster"
      ]
    },
    "produces": {
      "tools": [],
      "materials": []
    },
    "preconditions": [
      "The dome, duct and chimney are built and firm."
    ],
    "steps": [
      {
        "call": "gather.plaster"
      },
      {
        "call": "gather.slip"
      },
      "Plaster the whole dome, 1–2 cm thick.",
      "Plaster over every joint between the duct cover slabs, but leave the edges of the two bend stones and the cleanout plugs with a thin bead only, so they can still be lifted.",
      "Plaster the chimney base where the duct meets it, inside the wall opening and out.",
      "Fill every crack you can see with slip.",
      "Smear plaster over the wall logs within 1 m of the stove, as a fire skin."
    ],
    "checks": [
      "No crack wider than a hairline anywhere on the dome, duct or chimney base.",
      "A handful of smouldering grass held in the feed tube sends smoke up the chimney and none out of any seam."
    ],
    "safety": [
      "Gas leaks mean smoke and carbon monoxide inside the shelter. Seal every one you find."
    ],
    "estimate": {
      "hours": 4,
      "waitDays": 1
    }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = procedure;
  else (root.PROCEDURES = root.PROCEDURES || []).push(procedure);
})(this);
