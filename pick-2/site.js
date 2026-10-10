// How the shelter and stove instructions change for pick 2 near Bragg Creek. The design stays the
// same; only what the site is like changes. The procedures were written for the east arm of Great
// Slave Lake: a south-facing lake shore on bare granite. Pick 2 is glacial till (gritty clay with
// stones) on a slope of about 8° that falls to the north-east, in young pine and spruce, 20 m
// from a small creek, inside a Public Land Use Zone.
//
// Each change is { id, find, to }: in procedure `id` ('*' for every procedure), the text `find`
// is replaced by `to`. `find` must still be there, or tests/pick2.test.js fails, so a change to
// the procedures can't silently leave a site change behind.
'use strict';

const MIXING_PLACE = 'a bare, flat rock ledge at least 1.5 m across within about 20 m of the stove, swept clean. The east arm is mostly bare granite.';
const MIXING_HERE = 'a firm, flat patch about 1.5 m across within about 20 m of the stove, scraped down to bare till, tamped hard and swept, or floored with flat stones. There is no bare rock at pick 2.';

const CHANGES = [
  // Choosing the site: a creek on a till slope, not a lake shore.
  { id: 'shelter.choose-site', find: 'near a creek with good clay, on ground deep enough to dig',
    to: 'at least 30 m from the creek, on ground deep enough to dig and with good clay in the till' },
  { id: 'shelter.choose-site', find: 'Walk the shore to the creeks that run into the lake. For each, walk up both banks for about 200 m.',
    to: 'Start at pick 2 and walk the slope within about 150 m of it, staying «west» of it: the zone edge is 100–200 m «east».' },
  { id: 'shelter.choose-site', find: 'Dig a test hole in the bank every 20 m or so, where the bank is low and firm: scrape off the moss and topsoil',
    to: 'Dig a test hole every 20 m or so on the likely ground: scrape off the moss, needles and topsoil' },
  { id: 'shelter.choose-site', find: 'Follow the best clay along the bank with more holes until you know how far it runs. You need a layer at least 20 cm thick running at least 3 m along the bank, which is enough for the stove.',
    to: 'The till under the topsoil is clay mixed with silt, sand and stones. Where it is stickiest, dig more holes until you know how far it runs. You need a patch you can dig at least 20 cm deep over about 3 m², which is enough for the stove. The creek cutbank may show finer layers, but dig your clay back from the creek.' },
  { id: 'shelter.choose-site', find: 'Check the shore near the creek mouth for coarse sand, and for dense stones and flat slabs on dry ground above the high-water line.',
    to: 'Check the creek bars for coarse sand, and the dry slope for dense stones and flat slabs. Slabs big enough for the cooktop and the duct covers are the scarcest thing here, so find them before you commit.' },
  { id: 'shelter.choose-site', find: 'Near that creek, look for three healthy trees standing roughly in a right angle, about 25 m back from the lake: two along a line facing the lake to the south, and one north of the western one.',
    to: 'Look for three healthy trees standing roughly in a right angle, at least 30 m from the creek. The front of the shelter faces downhill, which at pick 2 is about «north-east». Two trees stand along the front, and one stands behind the left-hand one.' },
  { id: 'shelter.choose-site', find: 'Pace from the corner to the water, with your pace first counted over 10 m measured with the stick. The site should be about 25 m back from the water and at least 2 m above it, above the line of old drift wood and ice-scoured rock.',
    to: 'Pace from the nearest corner to the creek, with your pace first counted over 10 m measured with the stick. The site must be at least 30 m from the creek, the PLUZ camping distance, and at least 2 m above it, out of any flood channel: bare gravel, washed-out roots or lines of drift sticks mean water runs there.' },
  { id: 'shelter.choose-site', find: 'and should not fall toward the back.',
    to: 'and should not fall toward the back. The slope around pick 2 is about 8°, three times that, so look for a flatter shelf.' },
  { id: 'shelter.choose-site', find: 'fill the test holes on the bank you will not dig,',
    to: 'fill the test holes you will not dig for clay,' },
  { id: 'shelter.choose-site', find: 'A clay layer at least 20 cm thick and 3 m long whose snake',
    to: 'Till you can dig 20 cm deep over about 3 m², whose snake' },

  // Clay, sand, grass and stones from till country.
  { id: 'stove.find-clay', find: 'The east arm is mostly bare granite, and the whole stove depends on it.',
    to: 'At pick 2 the ground is glacial till, clay mixed with grit and stones, so clay is underfoot almost everywhere. The job is finding the stickiest layer, and the whole stove depends on it.' },
  { id: 'stove.find-clay', find: 'In the first days, walk the creek banks and low, wet ground within about 200 m of the shelter.',
    to: 'In the first days, dig into the till around the site and look along the creek cutbank within about 200 m of the shelter.' },
  { id: 'gather.sand', find: 'Scoop coarse sand from the lake beach or a creek bar with your hands into the bark tray.',
    to: 'Scoop coarse sand from a creek bar with your hands into the bark tray. The till is already gritty, so your fire test may show you need little extra sand.' },
  { id: 'gather.grass-fibre', find: 'in meadows, along the lakeshore and in old burns. In September it is dry',
    to: 'in the open ground near pick 2 and along the creek. In October it is dry' },
  { id: 'gather.withies', find: 'Find willow or alder thickets on the creek banks and woodland edges.',
    to: 'Find willow thickets along the creek and on the wet edges of the open ground.' },
  { id: 'gather.stones', find: 'Collect stones only from dry ground above the high-water line and away from springs and seeps: scree, frost-heaved rock, dry banks. Stones from the lake, streams or wet ground',
    to: 'Collect stones only from dry ground at least 30 m from the creek, away from springs and seeps: cobbles weathering out of the till, in the root holes of fallen trees and on dry slopes. Stones from the creek or wet ground' },
  { id: 'gather.stones', find: 'Leave shale, layered or crumbly stone.',
    to: 'Leave shale, layered or crumbly stone, and limestone, which is pale grey and scratches with the knife: in the hot parts it turns to lime and crumbles. Quartzite and hard sandstone are common in the till here.' },
  { id: 'gather.flat-stones', find: 'Look for flat slabs of dense rock on dry ground, split off outcrops by frost.',
    to: 'Look for flat slabs of dense rock on dry ground: sandstone slabs in the till, at the foot of dry cutbanks and in the root holes of fallen trees.' },
  { id: 'plan.stove-stage-one', find: 'Stones from the lake, creeks or wet ground', to: 'Stones from the creek or wet ground' },

  // No rock ledges to mix on.
  { id: '*', find: MIXING_PLACE, to: MIXING_HERE },
  { id: 'gather.cob', find: 'together on the ledge,', to: 'together on the mixing place,' },
  { id: 'gather.light-clay', find: 'on the ledge.', to: 'on the mixing place.' },
  { id: 'stove.make-blocks', find: 'On the mixing ledge,', to: 'On the mixing place,' },
  { id: 'gather.moss', find: 'on bare, sunny rock,', to: 'on bark sheets or a rack of poles in a sunny opening,' },

  { id: 'stove.tunnel', find: 'straight out toward the room, south.', to: 'straight out toward the room, at the front.' },

  // A creek instead of a lake.
  { id: 'make.root-cordage', find: 'in the lake shallows', to: 'in the creek shallows' },
  { id: 'shelter.fit-out', find: 'well away from the lake,', to: 'well away from the creek,' },
  { id: 'make.water-basin', find: 'a windfall or a dry drift log above the high-water line.', to: 'a windfall lying off the ground.' },

  // Chinooks.
  { id: 'shelter.snow-bank', find: 'Snow has come to stay, usually in October.',
    to: 'Snow has come to stay. A chinook here can melt it in a day; after one, clear the slush away from the walls and the door before it freezes.' },
];

// The procedures give directions by the compass, for a shelter facing south. Here they become
// front, back, left and right, as you stand in front of the shelter looking at it, so they hold
// whichever way the ground falls. South is the front, north the back, west the left, east the right.
const COMPASS = { north: 'back', south: 'front', east: 'right', west: 'left' };
// Text between « and » is a real compass direction and is kept as it is.
function relative(text) {
  return text.split(/(«[^»]*»)/).map((part) => (part.startsWith('«') ? part.slice(1, -1) : turn(part))).join('');
}
function turn(text) {
  return text
    .replace(/\b(north|south)-(east|west)(ern)?\b/gi, (m, a, b) => match(m, `${COMPASS[a.toLowerCase()]}-${COMPASS[b.toLowerCase()]}`))
    .replace(/\b(north|south|east|west)(ern)?\b/gi, (m, a) => match(m, COMPASS[a.toLowerCase()]));
}
const match = (orig, word) => (orig[0] === orig[0].toUpperCase() ? word[0].toUpperCase() + word.slice(1) : word);

module.exports = { CHANGES, relative };
