# Farmers Quest: changes since hand-off

The owner uploaded version **1.1.4** on 1 Nov 2026 (commit `d1e4614`). Everything below was changed after that by Claude, in a separate chat, at the owner's request. Each version lists **what** changed and **why** (the request or problem behind it). The newest version is first.

The same log is kept in a comment at the top of `index.html`, so the game file carries its own history.

Publishing: copy `index.html` and `sw.js` into the GitHub repo `silverton777/farmersquest` (served by GitHub Pages). Bump `FQ_VERSION` in `index.html` and the `CACHE` name in `sw.js` on every release so phones pick up the new version.

---

## 1.5.3: neighbour chats answer where you can see them; round bales stop hogging the tap

**Why:** "when you click to chat with neighbors nothing happens when you click on the questions" and "the roll out hay bale is too sensitive. it's not letting me click on my mailbox or garden beds".

- Talking to a neighbour: the questions now sit right under what they say (above the things they sell and buy). Tapping one shows your question as your own speech bubble with their answer under it, and the panel scrolls to it. Before, the answer replaced the greeting at the top of a long panel, out of sight, so tapping seemed to do nothing.
- "Unroll a round bale" is now an open-ground action: the mailbox, a garden bed, a hive, a tree, a gate or anything else you're standing at wins the tap first. The paddock's own card works the same way. The area round the barnyard where free-roaming animals can be fed by unrolling a bale is a little smaller.

## 1.5.2: free land in kid mode

**Why:** "be able to buy land in kid mode - won't let you. just make it free like everything else."

- In kid mode every parcel at the land office is free (it says "free" on the map and in the list, and the button reads Take), the way building, paint and tools already were. Kid farms pay no property tax.

## 1.5.1: pigs, sheep and goats rebuilt

**Why:** the owner asked for the dogs to be made anatomically accurate and "then rework the other animals"; cows and horses were done in 1.4.4, this finishes the farm animals.

- Pigs: a long, deep, straight-sided body with round hams, a gently arched back and a short thick neck into the jowl, on short strong jointed legs with two claws (the Mulefoot keeps its solid hoof). The familiar heads stay.
- Sheep: a level back, round barrel and the neck rising forward to the head. Fleeced breeds are bigger, blockier and lumpy with wool, with wool on the upper legs; hair sheep are sleek. Slim legs with flat knees and neat cloven hooves.
- Goats: lean and angular, with hip bones and spine showing, a deep narrow chest, a full round belly, a slim upright neck and long fine legs with knobbly knees and hocks. Dairy goats (Nubian) have an udder; the Boer's red runs down its neck.

## 1.5.0: a farm that grows outward to 1,000,000 acres

**Why:** the owner asked for plots that keep appearing just outside each one you buy, getting bigger each time, up to 1,000,000 acres, with at least 1,000 acres of farmable land joined to the house.

- Land is now rings round the homestead. Ring 1 has twelve parcels of about 16 acres, ring 2 twelve of about 62, then 250, 1,000, 4,000, 16,000 and 64,000 acres. Each ring doubles the width of the farm.
- Any parcel touching your land is for sale, so each one you buy opens up the land just past it. Land across the county road can now be bought too.
- The homestead and rings 1 and 2 are real ground you walk, build and farm on: 1,000 acres round the house. When you first buy into a ring the ground grows to take it in. The old land keeps everything on it; the new land gets hedgerows along the parcel lines, woodlots, old trees, rocks and brush. The old wooded edge thins to a hedgerow, and the neighbours move out past your land.
- Rings 3 to 7 are outlying land. Each parcel is put to a use (crop lease, hay, timber or wildlife), pays monthly the way the old tracts did, and shows in the countryside from the farm. Everything you own is capped at exactly 1,000,000 acres; the last parcel is trimmed to fit.
- The land office has a zoomable map of the rings and a list of everything for sale. The old seasonal tract listings are gone; tracts already bought are kept and count toward the million.
- Property tax: $350 a homestead lot, $20 an acre of walking land in the rings, $4 an acre of outlying land. Goals: "Own all 25 homestead lots", and the parcel and acre ladders run up to 109 parcels and 1,000,000 acres.
- Keeping a big farm fast: ground near you is built at full detail and far ground more coarsely, swapping as you move; on a big farm the farm's own trees are drawn out to 150 units and bushes to 70. The ground is always drawn far enough out that no hole shows at a distance.
- Much smaller saves: the ground is now saved compactly (heights to the centimetre, soil to a thousandth with random rounding so slow changes are never lost). A homestead farm's save shrank from about 520 kB to about 80 kB; a full 1,000-acre farm is about 830 kB instead of 6 MB. Older saves still load.

## 1.4.4: rebuilt cows and horses, flat eyes

**Why:** "cow heads are much worse now than they used to be" and "eyes shouldn't be so buggy, make them flat".

- Cows keep their familiar old head, now on a new smooth body and jointed legs. Cattle hair is slightly coarser and longer.
- Horses rebuilt: smooth body, arched neck with a mane crest, nose-down head, feathered legs on draft breeds.
- Eyes on cows, horses, pigs, sheep and goats are painted flat onto the face (they follow the curve of the head) instead of bulging balls. Goats keep amber eyes with a level pupil.
- Faces carry shorter hair than bodies, so eyes and blazes read clearly.

## 1.4.3: broader dog heads

**Why:** "their heads are too narrow."

- Wider skulls, fuller cheeks, broader muzzles; larger almond eyes set lower and looking forward.

## 1.4.2: dogs rebuilt to real proportions, fine hair

**Why:** "the dogs have balloon-like necks", "front legs are too far back, sticking the chest out", plus 13 photos of Luna and Juneau as reference.

- Each dog is one smooth lofted body from rump to skull, built to breed-standard proportions: deep ribcage, tucked waist, thick neck flowing into the head, front legs under the withers.
- New heads (stop, drop ears, nose and mouth line), jointed legs with the hock set back, lofted tails.
- New fine-hair shading for dogs, cats, cattle, horses and goats (asked for "more fine than the cow tufts" and to "revamp the cow hair").

## 1.4.1: Luna and Juneau

**Why:** the owner asked for their two real dogs in the game.

- Luna: a large white Great Pyrenees with a faint dark ring round one eye. Juneau: the same size, a golden Pyrenees x Bernese with a white blaze, socks and chest, a curled plume tail and a pink collar. Both come home with every farm and follow you.
- Petting sometimes ends in a roll-over belly rub; new Shake (a paw); dogs pant, and you hear it, when you walk up, after a run and while petting.

## 1.4.0: farm dogs, milestones, HD surfaces, fill-in earthworks

**Why:** a batch of requests from the owner.

- Farm dogs: 20 working breeds at the livestock barn once every goal reaches level 2. On sale 7 spread-out days a month (always on the unlock day and the next); "Sorry, no dogs for sale today!" otherwise.
- Milestones for every goal level; every third one is a cash prize worth 30% of that level's rewards.
- High-definition surfaces on by default (off with Low detail), now on garden crops too.
- Fill in ponds and swales with the shovel. Grown trees on a swale are cut for firewood; young saplings go back in the bag.
- Grass grows on swales like the turf round them.
- First-person view draws the farm in every direction and far into the distance.
- Smaller placement bar with a close button; country-style pop-ups.

## 1.3.0: climbing goals, hay, soil care, auto paddocks, fishing, fog, lights

**Why:** owner's requests and fixes found while testing.

- Goals climb: finish one and the next level appears with a bigger target and reward.
- Square bales you carry out, round bales you unroll; animals walk to the hay.
- Compost and mulch raise bed fertility and harvests (bed care menu).
- Any area closed in by fences becomes a paddock; fence posts can be dragged while drawing.
- Coop upgrades up to 50 hens; new rod-and-line fishing; seasonal fog; lantern, flashlight and spotlight.
- Fixes: house keeps its look on older saves, log cabin door, porch and woodshed roofs, woodshed clear of the house, first-person look thumb, see-through trough, rain splashes, room ceilings.

## 1.2.1: updates reach phones; paint and remodel; weeds

**Why:** phones kept showing old versions; owner's requests for building choices.

- The service worker fetches the game page fresh whenever online, so new uploads show up on the next open.
- Paint and Remodel: colours and styles for house (farmhouse, two-story, log cabin, stone cottage, modern), barn (gambrel, gable, steel, bank) and coop (A-frame, hen palace), and small/standard/large sizes.
- Weeds come up on bare or overgrazed ground; goats, sheep, pigs and poultry eat the ones they like.
- Town: cobbled main street, boardwalk, gas lamps on the park side, painted sign lettering, shopkeepers greet you.

---

## Notes for the next developer

- Single file: all game code is in `index.html` (about 22,000 lines). `sw.js` caches it for offline play.
- Animal bodies use `loftTube()` (smooth tubes through rings). Dogs: `buildFarmDog()`, cows: `buildCow()`, horses: `buildHorse()`. Eyes use `flatEye()`, which drops each vertex onto the head with `surfaceX()`.
- Hair is drawn as shell layers: grass is kind 0, wool/fur kind 1, fine hair kind 2 (`FURS`, `DOG_FUR`, `furFor()`). Faces get shorter hair through `furHead`.
- Dogs live in `DOGS` and `F.dogs`; Luna and Juneau are added by `homeDogs()` with `own: true`.
- Saves are JSON in `localStorage` (and native preferences in the app build). Old saves are upgraded in `migrateFarm()` and `farmFromSave()`. The ground is packed by `GameTerrain.pack()` with the `TERPACK` codec (`fmt: 2`); the old raw-float format is still read by `unpackRaw()`.
- Land: parcels 0 to 24 are the homestead lots; 25 to 108 are the rings, 12 per ring (`plotRect`, `plotOf`, `plotAdj`, `plotRingOf`). `F.owned` has an entry per parcel, `F.pUse` the use of each outlying parcel and `F.pAcres` a parcel trimmed at the cap.
- World size: `setWorld(tier)` sets `FARM_HALF`, `THALF`, `TN` (the ground grid) and `WORLD_R` (the countryside) from `F.tier`. `growWorld()` enlarges the grid when walking land is bought; `newLand()` furnishes the new ground. Ground tiles build at two levels of detail (`GameTerrain.build` with a want list, `FarmView.updateTiles`).
- Neighbour farms sit at `nbX(N)`, just past your land. The land office is `LANDUI`; buying is `buyParcel()`.
