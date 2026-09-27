// Design numbers that procedures quote, taken from the design itself so the text can
// never drift from it. A procedure writes {stove.riserHeight} and it is filled in here.
(function (root) {
  'use strict';

  function build(Layout, Model) {
    const { S, derived: D, stoveChanges } = Layout;
    const st = S.stove;
    const res = Model.simulate({ ...Model.DEFAULTS, ...stoveChanges });
    const cm = (m) => Math.round(m * 100);
    return {
      'stove.size': Model.DEFAULTS.feedSize,
      'stove.feedHeight': st.feedHeight,
      'stove.tunnelLength': st.tunnelLength,
      'stove.riserHeight': st.riserHeight,
      'stove.riserInsulation': st.riserInsulation,
      'stove.refractory': 3,
      'stove.topGap': st.topGap,
      'stove.sideGap': st.sideGap,
      'stove.domeWall': cm(S.domeWall),
      'stove.benchCover': st.benchCover,
      'stove.cooktopHeight': (D.cooktopTop).toFixed(1),
      'stove.stepHeight': cm(D.stepHeight),
      'stove.warmHours': Math.round(res.bench.warmHours),
      'stove.fireKW': (res.firePower / 1000).toFixed(1),
      'channel.length': D.channelLength.toFixed(1),
      'channel.bends': stoveChanges.bends,
      'channel.rise': cm(D.channelRise),
      'chimney.top': S.chimney.top,
      'chimney.outer': cm(S.chimney.outer),
      'chimney.aboveRiser': stoveChanges.chimneyAboveRiser,
      'base.stone': cm(S.coreBase.stone),
      'base.lightClay': cm(S.coreBase.lightClay),
      'base.drainDepth': cm(S.drainDepth),
      'bench.height': cm(S.bench.height),
      'bench.width': cm(S.bench.width),
      'bench.backGap': cm(S.backGap),
      'volume.stage1': D.volumes.stage1.toFixed(1),
      'volume.stage2': D.volumes.stage2.toFixed(1),
      'shelter.insideX': S.inside.x.toFixed(1),
      'shelter.insideZ': S.inside.z.toFixed(1),
      'shelter.backHeight': S.backHeight.toFixed(1),
      'shelter.frontHeight': S.frontHeight.toFixed(1),
      'shelter.log': cm(S.log.diameter),
      'shelter.rafterSpacing': 40,
      'shelter.plinth': cm(S.plinth),
      'shelter.logLength': Math.round(D.logLength / 5) * 5,
      'shelter.doorWidth': cm(S.door.width),
      'shelter.doorHeight': cm(S.door.height),
      'weir.pen': (2 * S.camp.weir.penRadius).toFixed(1),
      'net.length': S.camp.gillNet.length,
    };
  }

  const api = { build };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { build, load: () => build(require('../shelter/layout.js'), require('../simulator/model.js')) };
  } else {
    root.ProcParams = api;
  }
})(this);
