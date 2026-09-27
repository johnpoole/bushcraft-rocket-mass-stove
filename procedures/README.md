# Instructions as code

Every job in the camp is a procedure: a small module that says what it needs, what it
produces, and what it does, and that calls other procedures the way a function calls
functions. Nothing is assumed except the ten kit items. Everything else is made or
gathered by a procedure here, or taken from the site as it stands.

Open [index.html](index.html) (the **Instructions** page on the site) to read them.

## Files

| File | What it is |
|---|---|
| `catalog.js` | The kit, and every tool and material a procedure can name, with where each comes from |
| `lib.js` | Checks procedures, runs them on paper, and works out everything a procedure needs |
| `index.js` | The list of procedure files |
| `<id>.js` | One procedure each, named after its id |
| `index.html` | Renders the procedures, with each call as a link |

## A procedure

```js
{
  id: 'shelter.snow-bank',        // namespace.name; the file is shelter.snow-bank.js
  kind: 'task',                   // plan | task | make | gather | skill
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
  estimate: { hours: 5, note: 'Estimates, not promises.' },
}
```

### Kinds

- **plan**: a top-level job that mostly calls others. The season is a plan.
- **task**: builds or does something in the camp.
- **make**: makes a tool. Its tool's catalog entry names it as the source.
- **gather**: collects or makes a material. Its material's catalog entry names it as the source.
- **skill**: a technique, such as using an axe safely. Other procedures list it in `requires.skills`; it is read, not run.

## Rules

These are enforced by `tests/procedures.test.js`.

1. **Nothing is assumed.** A tool is one of the ten kit items or is made by a `make` procedure. A material is on the site as it stands (`source: 'site'`) or comes from a procedure.
2. **Everything resolves.** Every call, skill, tool and material names something that exists.
3. **No cycles.** A procedure never calls itself, directly or through others.
4. **Things exist before they are used.** Run on paper from any top-level plan, each made tool and produced material is finished before the procedure that needs it finishes.
5. **Materials balance.** Over a top-level plan, each material is produced at least as much as it is used.
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
