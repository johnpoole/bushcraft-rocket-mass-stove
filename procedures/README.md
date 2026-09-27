# Instructions as code

Every job in the camp is a procedure: a small module that says what it needs, what it
produces, and what it does, and that calls other procedures the way a function calls
functions. Nothing is assumed except the ten kit items. Everything else is made or
gathered by a procedure here, or taken from the site as it stands.

Open [index.html](index.html) (the **Instructions** page on the site) to read them.

## Files

The camp is one project for the engine in [`../engine`](../engine/README.md), which checks, runs and renders any project's procedures.

| File | What it is |
|---|---|
| `project.js` | The camp as a project: its name, page text, top plan (`plan.season`), daylight calendar at 62.5° N and schedule milestones |
| `catalog.js` | The kit and the shared tools and materials, with where each comes from |
| `catalog.stove.js`, `catalog.shelter.js`, `catalog.food.js` | Tools and materials used by one domain, merged into `catalog.js` |
| `params.js` | Design numbers, taken from `shelter/layout.js` and `simulator/model.js`, that procedures quote as `{name}` |
| `index.js` | The list of procedure files |
| `<id>.js` | One procedure each, named after its id |
| `index.html` | Loads the engine and the camp; the engine renders each procedure with its calls as links, and the season schedule at `#schedule` |

## A procedure

```js
{
  id: 'shelter.snow-bank',        // namespace.name; the file is shelter.snow-bank.js
  kind: 'task',                   // plan | task | make | gather | skill
  builds: ['walls'],              // optional: design parts from shelter/layout.js PARTS
  title: 'Bank snow against the walls and roof',
  purpose: 'One sentence: why you do it.',
  requires: {
    tools: ['snow-paddle', 'measuring-stick'],   // ids from catalog.TOOLS
    materials: [{ id: 'snow', qty: 8 }],         // ids from catalog.MATERIALS, in their unit
    skills: [],                                  // ids of skill procedures
  },
  produces: { tools: [], materials: [] },
  preconditions: ['What must already be true, in words.'],
  steps: [
    'A step in plain words.',
    { call: 'dig.soil', times: 2, note: 'for about 1 m³' },   // a call to another procedure
  ],
  checks: ['How you know it is done: something you can see or measure.'],
  safety: ['What can hurt you, and how to avoid it.'],
  estimate: { hours: 5, waitDays: 3, afterDark: false, note: 'Estimates, not promises.' },
  repeat: 'daily',                // only for daily routines
  window: { from: 14, to: 50 },   // only for plans: days from 15 September
}
```

### How a plan runs

Like a function call, with a memory of what already exists:

- A call to a **make** procedure is skipped when its tool already exists. Tools are made once.
- A call to a **gather** procedure runs until the stock covers what the caller needs; that amount is then held back from the caller's own sub-steps.
- Every procedure takes the materials it needs from the stock when it finishes.
- **Daily routines** are left out of the paper run; `engine/schedule.js` runs them every day of their plan's window.

`engine/schedule.js` then places each job on a day: routines first, then jobs in order, each starting only when what it needs exists and any `waitDays` have passed, within the daylight at 62.5° N set in `project.js`.

### Design numbers

Never type a design size into a procedure. Write `{stove.riserHeight}` and add the number to `params.js`, computed from the layout or the stove model. A test fails on any placeholder `params.js` cannot fill.

### Kinds

- **plan**: a top-level job that mostly calls others. The season is a plan.
- **task**: builds or does something in the camp.
- **make**: makes a tool. Its tool's catalog entry names it as the source.
- **gather**: collects or makes a material. Its material's catalog entry names it as the source.
- **skill**: a technique, such as using an axe safely. Other procedures list it in `requires.skills`; it is read, not run.

## Rules

These are enforced by `engine/check.js`, which `tests/procedures.test.js` runs on the camp.

1. **Nothing is assumed.** A tool is one of the ten kit items or is made by a `make` procedure. A material is on the site as it stands (`source: 'site'`) or comes from a procedure.
2. **Everything resolves.** Every call, skill, tool and material names something that exists.
3. **No cycles.** A procedure never calls itself, directly or through others.
4. **Things exist before they are used.** Run on paper from the season with a running stock, every tool is made and every material is in stock when a procedure needs it.
5. **Self-contained.** Every procedure calls the gathering for each material it uses, the way a function calls what it depends on; the running stock stops that from being counted twice.
6. **Everything is reachable.** Every procedure is called from some plan, and every skill is required by something.
7. **Every job says when it is done.** Each non-skill procedure has at least one check.

## Style

- Metric units. Sizes you must measure are measured with the measuring stick.
- One action per step, in the order you do it, in plain words.
- Checks are things you can see, feel or measure, not "until it's right".
- Estimates are labelled as estimates.

## Adding a procedure

1. Add any new tool or material to `catalog.js`, with its source.
2. Write `<id>.js` in the same shape as the others.
3. Add the id to `index.js`.
4. Call it from the procedure that needs it.
5. Run `node --test simulator/*.test.js shelter/*.test.js tests/*.test.js`.
6. Check the season still schedules: open the Instructions page at `#schedule`.
