// What to search for to see a picture of each material. The pages show a small "photos" link
// beside a material, opening an image search for these words; no images are stored here.
// Words name the real thing (species, rock or mix) so the results show what to look for.
(function (root) {
  'use strict';

  const QUERIES = {
    'dry-wood': 'dry dead standing spruce pine branches firewood',
    'birch-bark': 'paper birch bark sheet peeled Betula papyrifera',
    'root-cordage': 'split spruce root cordage',
    poles: 'straight lodgepole pine poles 5 cm',
    'spruce-boughs': 'white spruce boughs branches',
    'dry-moss': 'feather moss Pleurozium schreberi Hylocomium splendens',
    soil: 'mineral soil horizon under forest floor',
    snow: 'settled snow bank against log cabin wall',
    water: 'small mountain creek Alberta foothills',
    stakes: 'sharpened wooden stakes axe point',
    stones: 'quartzite sandstone cobbles glacial till',
    'flat-stones': 'flat sandstone slabs rock',
    clay: 'glacial till clay soil Alberta',
    sand: 'coarse sand gravel bar creek',
    'grass-fibre': 'dry grass sedge bundle',
    withies: 'willow withies shoots for weaving',
    cob: 'cob mix clay sand straw',
    'refractory-mix': 'clay sand refractory mortar mix',
    mortar: 'clay mortar stone wall',
    'light-clay': 'light straw clay insulation',
    slip: 'clay slip',
    plaster: 'earthen clay plaster wall',
    'stove-former': 'straw bundle former rocket stove cob',
    'riser-basket': 'woven willow basket tube',
    'fired-bricks': 'pit fired clay tiles',
    'clay-blocks': 'adobe mud bricks drying',
    'frame-posts': 'forked log post saddle notch',
    'beam-logs': 'log beam lean-to shelter frame',
    rafters: 'pole rafters bushcraft shelter roof',
    'wall-stakes': 'stake log wall bushcraft shelter',
    'wall-logs': 'peeled lodgepole pine logs',
    'hewn-logs': 'hewn log flat axe',
    'chinking-moss': 'moss chinking log cabin',
    'fresh-fish': 'lake trout whitefish caught',
    'smoked-fish': 'dried smoked fish on rack',
    'green-wood': 'green alder branches',
    'net-floats': 'wooden gill net floats',
    'net-sinkers': 'stone net sinkers',
    'creek-stones': 'rounded creek stones river cobbles',
    'weave-branches': 'willow branches fish weir weaving',
    hares: 'snowshoe hare',
    berries: 'lowbush cranberry blueberry crowberry',
    'rose-hips': 'prickly rose hips Rosa acicularis',
    grubs: 'beetle larvae in dead wood',
    'cattail-roots': 'cattail rhizome peeled',
  };

  const url = (id) => (QUERIES[id] ? `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(QUERIES[id])}` : null);

  const api = { QUERIES, url };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.MaterialPhotos = api;
})(this);
