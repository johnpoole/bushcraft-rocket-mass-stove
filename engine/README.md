# Procedures engine

Instructions for any hands-on job written as procedures: each says what it needs, what it
produces and what it does, and calls other procedures the way a function calls functions.
The engine knows nothing about any one project.

| File | What it does |
|---|---|
| `lib.js` | Checks each procedure, runs a plan on paper with a running stock, and works out everything a procedure needs, what must be bought and what it costs |
| `check.js` | The rules every project keeps, as one call a project's tests make |
| `catalog.js` | Builds a project's catalog from a base list and optional parts |
| `schedule.js` | Runs a plan day by day on the project's calendar |
| `viewer.js`, `viewer.css` | The Instructions page for any project |

## Where things come from

Each tool and material in a project's catalog names its `source`:

- `'kit'` — on hand at the start. The project's `KIT` lists them.
- `'site'` — free for the taking, as much as needed (lake water, snow, sticks from the yard).
- `'bought'` — bought before it is needed, at `cost` each, or per unit for a material.
- a procedure id — made or gathered by that procedure.

## Calendars

`schedule.run(root, reg, catalog, lib, calendar)` with `calendar.hours` one of:

- `{ type: 'fixed', hours }` — the same hours every day
- `{ type: 'weekly', hours: [Sun, Mon, … Sat] }` — hours by day of the week
- `{ type: 'daylight', latitude, overheadHours, maxWorkHours, minWorkHours }` — sunrise to sunset

A job waits for another only through something the other makes: a tool, a material, or a state
such as a settled bed. A job with `estimate.waitDays` holds back the jobs that use what it makes.

## Design parts

A procedure may list the parts of the design it builds: `builds: ['walls']`. When the project gives
its parts as `{ id: name }`, the checker makes sure every part is built by something the plan runs
and that nothing builds a part the design lacks. `schedule.partDays(result, reg)` gives, for each
part, the day building it started and the day it was finished, or null if it was not finished by
the end. The camp's 3D view uses it to show the camp on any day of its schedule.

## A project

A folder with:

- `project.js` — `{ root, pageTitle, heading, intro, labels, calendar, params(), parts(), schedule }`
- `catalog.js` — `{ KIT, TOOLS, MATERIALS }`, built with `engine/catalog.js`
- `index.js` — the list of procedure ids
- `<id>.js` — one procedure each
- `index.html` — loads the engine and the project files, then `engine/viewer.js`

Two projects use it: the camp in [`../procedures`](../procedures/README.md) and the
[raised garden bed](../examples/raised-garden-bed/).
