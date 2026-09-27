# Rocket mass stove from bushcraft materials

A rocket mass stove built from clay, sand, stone and sticks gathered on site.

- [build-guide.html](build-guide.html): materials, mixes, sizing, build steps, first firing, running it, safety
- [rocket-mass-stove-section.html](rocket-mass-stove-section.html): dimensioned section drawing
- [simulator/index.html](simulator/index.html): step through the build, change the stove and see what goes wrong
- [shelter/index.html](shelter/index.html): a one-person shelter built around the stove between three trees and a post, in 3D
- [survival-plan.html](survival-plan.html): a plan for a season on Great Slave Lake living on fish, snares and foraging

## Running the simulator

The page loads `model.js` from beside it, so serve the repo rather than opening the file directly:

```
python -m http.server 8000
```

Then open http://localhost:8000/simulator/.

Tests for the stove model (Node 18 or later):

```
node --test simulator/ shelter/
```
