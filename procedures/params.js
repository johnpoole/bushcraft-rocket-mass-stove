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
      'shelter.treeSpacingX': D.treeSpacing.x.toFixed(2),
      'shelter.treeSpacingZ': D.treeSpacing.z.toFixed(2),
      'shelter.treeDiagonal': Math.hypot(D.treeSpacing.x, D.treeSpacing.z).toFixed(1),
      'shelter.trunkGap': cm(S.log.trunkGap),
      'shelter.doorFrom': cm(S.door.x0),
      'shelter.inletWidth': cm(S.airInlet.x1 - S.airInlet.x0),
      'shelter.ventFrom': cm(S.vent.x0),
      'shelter.ventWidth': cm(S.vent.x1 - S.vent.x0),
      'shelter.overhangFront': cm(S.overhang.front),
      'shelter.overhangWest': cm(S.overhang.west),
      'shelter.counterHeight': cm(S.counter.height),
      'shelter.counterDepth': cm(S.counter.depth),
      'shelter.counterFrontEnd': cm(S.counter.frontEnd),
      'shelter.counterClearance': cm(S.counter.feedClearance),
      'shelter.basinLength': cm(S.basin.length),
      'shelter.basinWidth': cm(S.basin.width),
      'shelter.basinHeight': cm(S.basin.height),
      'chimney.z': S.chimney.z.toFixed(2),
      'channel.ductWidth': cm(S.stage1.ductWidth),
      'weir.pen': (2 * S.camp.weir.penRadius).toFixed(1),
      'net.length': S.camp.gillNet.length,
      'tarp.width': S.tarp.width,
      'tarp.length': S.tarp.length,
      'tarp.outerLength': S.tarp.outerLength,
      'tarp.innerLength': (S.tarp.length - S.tarp.outerLength).toFixed(1),
      'tarp.innerShort': cm(D.tarp.innerShort),
      'rack.height': S.camp.smokeRack.height,
      'rack.width': S.camp.smokeRack.width,
      'rack.depth': S.camp.smokeRack.depth,
      'rack.toShore': D.camp.smokeRackToShore,
      'cache.height': S.camp.cache.height,
      'cache.span': Math.hypot(S.camp.cache.treeB.x - S.camp.cache.treeA.x, S.camp.cache.treeB.z - S.camp.cache.treeA.z),
      'cache.toTrunk': D.camp.cacheToTrunk.toFixed(1),
      'cache.toShelter': Math.round(D.camp.cacheToShelter),
      'winterCache.toShelter': Math.round(D.camp.winterCacheToShelter),
      'cleaning.toShelter': Math.round(D.camp.cleaningToShelter),
      'snares.count': S.camp.snares,
      'snares.lineLength': Math.round(D.camp.snareLineLength),
    };
  }

  const api = { build };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { build, load: () => build(require('../shelter/layout.js'), require('../simulator/model.js')) };
  } else {
    root.ProcParams = api;
  }
})(this);
