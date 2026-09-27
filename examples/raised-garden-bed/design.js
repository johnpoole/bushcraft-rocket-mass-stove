// The raised bed's design, and every quantity worked out from it: cut list, screws, mesh and soil.
// Procedures read their quantities from here, and quote these numbers in their text as {placeholders}.
(function (root) {
  'use strict';

  const D = {
    length: 2.4,          // m, outside
    width: 1.2,           // m, outside
    courses: 2,           // boards stacked on each side
    board: { thick: 0.038, height: 0.235, length: 2.4 },   // 2×10 cedar, 8 ft
    post: { side: 0.089, length: 2.4 },                     // 4×4 cedar, 8 ft
    screwsPerJoint: 3,
    screwsPerBox: 100,
    meshWidth: 1.2,       // m, hardware cloth roll
    settle: 1.1,          // buy 10% more soil than the bed holds; it settles
    topsoilShare: 0.6,    // the rest is compost
    seedPackets: 4,
  };

  const innerLength = D.length - 2 * D.board.thick;
  const innerWidth = D.width - 2 * D.board.thick;
  const height = D.courses * D.board.height;
  const volume = innerLength * innerWidth * height;
  const fill = volume * D.settle;
  const topsoil = Math.ceil(fill * D.topsoilShare * 20) / 20;       // to the nearest 0.05 m³
  const compost = Math.ceil(fill * (1 - D.topsoilShare) * 20) / 20;

  // Long sides run the full length; end boards fit between them, two to a board.
  const longPieces = 2 * D.courses;
  const endPieces = 2 * D.courses;
  const endsPerBoard = Math.floor(D.board.length / innerWidth);
  const boards = longPieces + Math.ceil(endPieces / endsPerBoard);
  const postsPerStick = Math.floor(D.post.length / height);
  const postSticks = Math.ceil(4 / postsPerStick);
  const screws = (longPieces + endPieces) * 2 * D.screwsPerJoint;
  const screwBoxes = Math.ceil(screws / D.screwsPerBox);
  const meshLength = Math.ceil((innerLength + 0.1) * 10) / 10;
  const firstWater = Math.round(fill * 150);   // litres, about 15 cm of rain's worth through the whole depth

  const cm = (m) => Math.round(m * 100);
  const design = {
    ...D, innerLength, innerWidth, height, volume, fill, topsoil, compost,
    longPieces, endPieces, pieces: longPieces + endPieces, boards, postSticks, screws, screwBoxes, meshLength, firstWater,
    // Numbers quoted in the procedures' text.
    params: {
      'bed.length': D.length.toFixed(1),
      'bed.width': D.width.toFixed(1),
      'bed.height': cm(height),
      'bed.innerLength': cm(innerLength),
      'bed.innerWidth': cm(innerWidth),
      'bed.diagonal': cm(Math.hypot(D.length, D.width)),
      'bed.volume': volume.toFixed(2),
      'bed.fill': fill.toFixed(2),
      'board.size': `${cm(D.board.thick * 10) / 10} × ${cm(D.board.height * 10) / 10} cm`,
      'board.length': D.board.length.toFixed(1),
      'cut.endLength': cm(innerWidth),
      'cut.postLength': cm(height),
      'cut.pieces': longPieces + endPieces,
      'cut.longPieces': longPieces,
      'cut.endPieces': endPieces,
      'cut.boards': boards,
      'post.side': cm(D.post.side * 10) / 10,
      'screws.perJoint': D.screwsPerJoint,
      'screws.count': screws,
      'mesh.length': meshLength.toFixed(1),
      'soil.topsoil': topsoil.toFixed(2),
      'soil.compost': compost.toFixed(2),
      'soil.firstWater': firstWater,
      'seeds.packets': D.seedPackets,
    },
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = design;
  else root.GardenDesign = design;
})(this);
