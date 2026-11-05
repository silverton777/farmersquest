# Farmers Quest: changes since hand-off

The owner uploaded version **1.1.4** on 1 Nov 2026 (commit `d1e4614`). Everything below was changed after that by Claude, in a separate chat, at the owner's request. Each version lists **what** changed and **why** (the request or problem behind it). The newest version is first.

The same log is kept in a comment at the top of `index.html`, so the game file carries its own history.

Publishing: copy `index.html` and `sw.js` into the GitHub repo `silverton777/farmersquest` (served by GitHub Pages). Bump `FQ_VERSION` in `index.html` and the `CACHE` name in `sw.js` on every release so phones pick up the new version.

---

## 1.5.20: the Hollow Creek library

**Why:** "what do you think of a library in the town that you can go in a read books on the different farming techniques that can unlock recipes, etc. Add reading books and stuff to the goal list as well." Also: "dont make them higher levels necessarily to accomodate existing players put them where they seem fit."

- A stone library stands at the west end of Main Street, past the Home signpost. Inside: tall shelves of books, a long reading table, and a red armchair with a green lamp. It's open the same hours as the shops.
- Ida, the town librarian, is a new townsperson behind the counter. She has her own conversations, gift likes, a birthday (April 23) and stories, and she'll take a kitten.
- 14 books, each about one real farming technique in four short pages: compost, no-dig gardening, worms, cover crops, rotational grazing, slowing water with swales and ponds, hens behind the herd, the backyard orchard, preserving, cheesemaking, beekeeping, maple sugaring, the three sisters and seed saving.
- Finishing a book teaches you something:
  - 15 new recipes in all, for example apple crisp, dilly beans, pickled beets, fruit leather, ricotta, aged cheddar, maple cream, honey-roasted nuts, shepherd's pie, garden quiche and three sisters stew.
  - Or a lasting knack: compost goes half as far again, mulch lasts six months, the worm farm works a quarter faster, and Mabel leaves you saved seed each spring.
  - You also get 10 Golden Acorns. Reading is restful: you get a little energy back.
- Read at the library (Ida likes the company, so it counts toward her friendship), or borrow one book at a time and read it by the stove at home. Bring it back and borrow the next.
- The kitchen shows which locked recipes are in which library book.
- New "Learning" goals: read a book (then 3, 6, 10, all 14), learn recipes from books, cook something you learned from a book, read every book on soil, and read the whole library. They sit at the levels that suit them.

## 1.5.19: a look under the soil

**Why:** the soil view from the owner's list ("how would you do the soil view?"): a cutaway of the soil itself.

- Dig a soil pit (free, about 15 minutes) from the shovel's Earthworks menu, or tap "Look under the soil" on any garden bed's card, or "Look at the soil where you're standing" in the journal's Land & soil tab.
- You see a slice of the ground about two feet deep, drawn from that spot's real numbers: how deep the dark topsoil goes (from its organic matter), roots reaching down (deeper under rested grass and trees), earthworms wriggling (more in damp, loose, well-fed, mulched soil), white fungus threads (under trees, mulch and undug ground), how wet it is, and a packed layer where hooves or wheels have squashed it hard. Grass, a crop, mulch or a tree shows on top.
- Under it, a card gives a soil health score out of 100 and says in plain words what each layer means and what would help, with a button to the soil tips.
- Fixed: the canvases inside panels (the pig race, apple bobbing and the fishing line) covered the whole screen instead of sitting in their panel. They now fit inside it, and are sized so the whole picture shows on a phone held sideways.

## 1.5.18: festivals you can play, soil tips, pond and worm farm fixes

**Why:** "Yes add festivals you can play - all those things."

- Each festival panel now opens with a game. The prize (money, Golden Acorns and the host's goodwill) is paid the first time you win each year. You can play again any time the festival is on, just for fun. In kid mode the prize is acorns only.
- Spring Seed Swap, "Guess the seed" with Mabel: she describes five seeds, three guesses each. 5/5 wins $80, 25 🌰 and three seed packets. 3 or 4 wins $30, 10 🌰 and a packet.
- Midsummer Potluck, the pie & dish contest: enter something you cooked. Dot, Marco and Rosa each score it and comment, against five neighbours' entries. Pies and bakes do best, and so do better dishes. Blue ribbon $150 + 30 🌰, red $75 + 15 🌰, white $40 + 8 🌰. Your entry stays on the judging table.
- County Fair, the pig race: pick one of four pigs, then tap Cheer when your pig looks back (👀) for a burst of speed. A win pays $100 + 20 🌰.
- Harvest Supper, apple bobbing: 20 seconds to tap Dunk when the marker is over a bobbing apple. 5 or more wins $60 + 15 🌰, 3 or 4 wins $20 + 6 🌰. You keep the apples you catch.
- Candle Night, the lantern walk: eight lanterns stand round the park. From 5 pm, walk up to each one and light it, and it glows. Light all eight for $100 + 25 🌰 and a thank-you from Sam.
- How to build better soil (owner: "also give tips on how to improve soil. most people dont always know"): twelve plain-language tips, each with what it means in the game (keep something growing, mulch, compost, worm castings, cover crops, dig less, move the animals and rest the grass, hens behind the herd, slow the water, trees, mix it up, be patient). Open it from any garden bed's card or the journal's Land & soil tab. Every few days one tip appears in the morning report.
- Filling in a pond (owner: "i filled in a pond and there is still a large hole and the game says water is in the way"): the hole is now always filled right up, even with a swale, another pond or a building nearby. Before, anything close by kept part of the hole dug and still counted as water. Farms that already have a hole left behind get it filled in when they load.
- Weeds no longer stop a swale or pond (owner: "weeds shouldnt be considered in the way"). They're pulled up as it's dug.
- Worm farm (owner: "there was no options to do anything to my worm farm"): walk up to it with any tool in hand (before, only the bare hand worked) and the action button says "Worm farm: feed the worms". It now wins over weeds and beds nearby. You can also just tap the bin, or the cider press, on screen from up to a dozen steps away and your farmer walks over and opens it.

## 1.5.17: night life: stargazing, fireflies, owls and full-moon walks

**Why:** the owner picked "night life" from the list of new ideas: "fireflies, stargazing from the porch, owls, and a full-moon walk in the woods to find rare night animals".

- The moon goes through its phases, a 29½-day cycle.
- Stargazing: at night, stand in front of the farmhouse (a few steps out from the door) and tap "Stargaze from the porch". You see the season's sky (the Big Dipper and Leo in spring, the Summer Triangle in summer, Pegasus and the Andromeda galaxy in autumn, Orion in winter), tonight's moon and a sky fact. On clear nights there's sometimes a shooting star to wish on (+15 energy), and nearly always during the Perseids (August 11–13) and the Geminids (December 13–15). Cloudy nights only show a star or two.
- Fireflies: on summer evenings, out in the open away from buildings, "Catch fireflies in a jar": you watch them glow for a while and let them go.
- Owls call from the trees at night when you're near them.
- Full moon: the farm and the woods are brighter at night, and the woods have twice the night animals about, the rare ones included.

## 1.5.16: maple sugaring on the farm, a cider press, and a worm farm

**Why:** the owner picked "tapping maple trees and pressing cider" from the list of new ideas, and asked "can we add worm farms in somehow and using that to feed soil?"

- Maple sugaring: in February and March, walk up to a big maple on your land (wild, or one you planted) and tap it. A sap bucket hangs on the trunk and fills on freeze-thaw days (frosty nights, days above freezing). Collect the sap, then boil it down right there by the tree, or at the woodshed: four gallons make a pint of maple syrup. The buckets come in for the year in April. (Tapping in the woods, for regions with sugar maples, works as before.)
- Sugar maple saplings at the nursery ($18), for farms with no maples of their own; they can be tapped once they're grown.
- Cider press ($450, in Build): walk up to it with apples or pears in your stores and it presses all you have, 6 lbs to a jug of fresh cider, in one go.
- Worm farm ($250, in Build): feed it spare vegetables and fruit (up to 20 lbs at a time, taken from whatever you have most of). The worms eat about 2½ lbs a day and every 10 lbs becomes a bag of worm castings. On a garden bed's card, "Spread a bag of worm castings" feeds the bed more than a load of compost does and builds the soil's organic matter.
- The farm stand can sell maple syrup and cider too, keeping one of each back for you unless you change it.

## 1.5.15: barn cat kittens

**Why:** the owner picked "barn cat kittens" from the list of new ideas: "your barn cat has a litter now and then, and you can find homes for the kittens with townsfolk".

- If you have the barn cat, she has a litter of 2 to 4 kittens some time in spring or early summer (once a year at most). The morning report tells you, and the kittens tumble about after her, darting off to pounce on things and scampering back, growing as the weeks go by.
- Walk up to them for their card: each kitten's name and age. From eight weeks old a kitten can go to a new home with someone you've met (14 townsfolk and neighbours would love one, each with their own thank-you): it's worth a whole heart of friendship. You can also keep up to two as barn cats of your own; they grow up and roam the yard like their mother.
- A kitten still with you at five months and not kept goes to Ruth Carter's sanctuary (she's glad of the mousers, and a little fonder of you for it).

## 1.5.14: easy horse riding: drag to ride, tap to go there

**Why:** "its too hard to ride the horse. simplify riding so maybe its just your finger dragging around the screen and the horse goes there", then "1 and 2 together with option 3 available after more acreage".

- Drag to ride: put a finger down anywhere and drag the way you want to go. The horse turns that way; drag further for a trot, further still for a gallop. Let go and it eases to a halt. No throttle, no gears, no left-and-right thumbs.
- Tap to go: tap a spot on the ground and the horse takes you there and stops (a ring marks the spot). Round the farmstead it plans a way round buildings and fences; further out it steers round things as it goes. If there's no way through (a fence with no gate on the way, or the edge of your land) it stops and says so. Dragging takes the reins back at any time.
- Ride to… on the map: once you own 100 acres or more, a 🗺️ Ride to… button in the riding bar opens the farm map; tap where you want to go.
- Tractors, trucks and other vehicles drive as before.

## 1.5.13: a pond tells you why it is or isn't filling; "Own all 25 homestead lots" at level 5

**Why:** "in my current game why is pond 2 not getting full" and "own a 25 homesteads needs to be level 5".

- Tap a pond: a new Water section shows how much of the land round it drains into it, any swales above it (they soak up runoff before it gets there), the last two weeks of water in (runoff, rain on the water) and out (evaporation and seepage), and, when it isn't rising, why.
- How ponds fill (unchanged): runoff from higher ground within about 75 m, plus rain falling on the water, minus evaporation and seepage, which grow in the heat. A pond with little ground above it, swales above it, or healthy, spongy soil round it (more rain soaks in, less runs off) fills slowly, and in dry or hot months it drops.
- "Own all 25 homestead lots" is a level 5 goal (it was level 3).

## 1.5.12: "Build 6 swales on contour" is a level 3 goal

**Why:** "make build 6 swales on contour level 3".

- The swale goal now starts at level 2: building 3 swales is a level 2 goal, 6 swales level 3, 12 swales level 4, and so on up. (Before, 3 swales was level 1 and 6 was level 2.) Building the first swales no longer holds back level 1.

## 1.5.11: Scout roams on his own until you whistle

**Why:** "scout the dog keeps following me everywhere just let him roam unless i call hime over".

- The pet dog (Scout, or whatever you've named him) no longer follows you everywhere. He roams the yard round the house on his own: trotting or ambling off to sniff somewhere, lazing about, and looking up at you when you stop nearby. If he ends up far from home he heads back.
- Whistle to call him: he hears it from anywhere on the farm, comes running and keeps you company for about a minute and a quarter, then goes back to his own business. The whistle button now shows whenever you have him, even with no other animals out.
- Farm dogs bought at the livestock barn keep their own jobs (follow, guard, herd and so on), as before.

## 1.5.10: choose what the farm stand sells

**Why:** "What goes to my farm stand? I never have eggs in my backpack. can i control what goes to the farm stand and stays with me?"

- Before: every night the stand sold up to 2 dozen of each kind of egg and 1 of honey, milk and every vegetable you had, with no say in it. A dozen hens lay less than 2 dozen a day, so it took every egg.
- Now walk up to the stand ("Farm stand: what it sells") for its own screen: each egg, honey, milk and every vegetable you have, with Selling / Keeping, and a − / ＋ for how much the stand always leaves you. "Keep everything" turns it all off.
- Out of the box (and on farms that already have a stand) it now leaves you a dozen of each kind of egg, a gallon of milk and a pound of honey; vegetables keep none back until you set it.
- The morning report says what the stand sold, not just the money.

## 1.5.9: paddocks always numbered 1, 2, 3... and keep their animals

**Why:** "when farmers rework fences the paddocks get messed up. there are now 2 paddock 5's, a paddock not named and no paddock 1, 2 or 3 ... if i take down the fence for paddock 1 then paddock 2 becomes paddock 1 and so on and if i build the new one that becomes the latest numbered paddock."

- Paddocks are numbered in the order they were put up, with no gaps and no repeats. Take Paddock 1 down and Paddock 2 becomes Paddock 1, Paddock 3 becomes Paddock 2 and so on; take Paddock 3 down and Paddock 4 becomes Paddock 3. A new paddock (drawn, or closed in by fence lines) takes the next number. Open fence lines are numbered the same way.
- Animals stay with their paddock through all of it: renumbering, reshaping a paddock, or turning a fence line into a paddock. (A paddock taken down still sends its animals to the barnyard, and one turned back into an open line does too, since a line can't hold them.)
- Farms whose numbers had got out of step (two Paddock 5s, one with no name, missing numbers) are tidied the next time they load.
- Before, a new paddock was named from how many there were, so taking one down and putting another up reused a number that was still in use.

## 1.5.8: a woman farmer, Rosa at her stalls, harvest without the animation, dogs that don't get stuck, windmills clear of roofs

**Why:** "remove the animation of harvesting animals from the game. you can harvest but its purely turning a cow into money", "glitching dogs ... they seem to hit a spot where they get stuck and vibrate back and forth", "windmils are going through house roofs. can we get the animations to stop intersecting each other", "cannot meet rosa still" and "you can also be a female character. male and female only".

- Harvest: the animal card's button now says Harvest. Confirming sends the animal to the meat processor in town and its meat goes straight into your stores (the card shows about how much, and what it's worth at the market). There is no rifle, shot, falling animal or any other animation any more, and it works anywhere, the barn included.
- Dogs: no more rocking back and forth in one spot. A dog keeps going round an obstacle the way it started instead of flipping left and right, fences never push it back (it jumps them and is carried right over), and a dog that makes no headway waits until you move on instead of shoving against the same spot. A dog left far behind for a while catches up with you.
- Windmills: a windmill can't be built or moved within reach of a house, barn, greenhouse, coop or other building (its sails, tail vane and tank reach about 2.7 units round the tower), and no building can go up that close to a windmill. A windmill already too close on an older farm is moved a little way into the clear the first time the farm loads (it says so).
- Rosa: her farmers market is open-air, with no room to walk into, so she was never anywhere you could talk to her. She now stands at her stalls in town whenever the market is open, buying or selling at the market counts as meeting her, and the market panel has a "Talk to Rosa" button.
- A woman farmer: "Who is farming?" asks Man or Woman (with pictures of each look), and Shop → Outfit lets an existing farm switch. The woman farmer has long hair or a bun (depending on the look), a slimmer build through the shoulders and lashes; outfits, hats and everything else work the same.

## 1.5.7: easier to talk to people, and about twenty times more to say

**Why:** "make it easier to talk to people in town. i have to be in the exact right spot" and "20x the conversations that go into the game between you and characters. theyre repetetive."

- Talking: people stop and turn to you from a few steps away (about twice as far as before), the "Talk to" button reaches that far and wins over a shelf or a door unless that is much closer, and tapping anyone you can see on screen walks you up to them and starts the conversation. Works in town, in the shops, on the neighbours' farms, in the woods, and with visitors and neighbours on your own farm. A person who was talking to you always walks on again when the panel is closed (before, closing it any way but "Bye!" left them frozen).
- Conversations: the 22 townsfolk and neighbours went from 3 or 4 lines each (76 in all) to about 68 each (1,495 in all): everyday lines in their own voice, lines for each season, warmer lines once you are friends, and news about the other people in the county. On top of that come 80 remarks about your own farm that are said only when true (your pond, swales, paddocks, each kind of animal, bees, garden, trees, dog, a big farm, the festival that month and so on), 53 short openers for the time of day and the weather, and 20 warm lines for friends.
- Nobody repeats themselves: each person remembers what they last said to you (kept in the save) and works through most of their lines before any comes round again.
- New questions for townsfolk ("What's new with you?" and "Got any advice?") and for neighbours ("What's new with you?"), which can be asked as often as you like.
- Proper chats: 151 topics instead of 12 (95 new shared ones plus two of each person's own), and a topic you have already talked through with someone isn't picked again for a good while. Reactions went from 9 to 36.
- Visitors at your farm: 58 questions instead of 12 (not repeated until most have been asked), 39 ways to say hello instead of 4, and more reactions. Hired hands on the neighbours' farms have 51 things to say instead of 4, and people met in town, in the shops, on farms and in the woods have 70 lines for the place instead of 13.
- Fixed: a neighbour visiting another neighbour's farm answered as if they were a hired hand there.

## 1.5.6: horse riding fixed, shopkeepers to talk to, dogs that go round things, fences round ponds and breaks in swales, all controls on the left thumb, bonus goals, $60,000 to start

**Why:** the owner's list: "in one account i bought up a bunch of [land] and anytime i try to open the map the game freezes", "glitches when trying to get on and ride horse", "it says you havent met workers at town shops but there isnt an opportunity to talk with them, fix that", "back to $60000 starting money", "fix dogs being able to run through buildings and fences and animals", "ponds and swales cannot be build on fences and vice versa. give an option to fence around the pond or put a break in the swale", "hard time feeding pigs when in paddock. option wouldnt show up unless in barnyard", "tips like unroll bale here get in the way of the view and make it so you cannot use the right area of the screen", "add in unlocked mode a setting that changes ALL movement and panning controls on the left thumb", "the soil organic matter being raised by 0.5% needs to be at least level 6", "the aesthetic changes/animation upgrades ... have not taken place in the neighbors farms" and "i want some bonus goals that are separate from the others".

- Horse riding: an error thrown on every frame while riding (or driving any vehicle) is fixed. Getting on, riding, steering and getting off are smooth again, and the horse and rider stay together.
- Map on big farms: the land, soil and water pictures are now kept and only redrawn when the ground or the day changes, and only the layer you're looking at is drawn. In testing the map opened in under half a second even at 1,000,000 acres, so the freeze could not be reproduced; if it still happens on that account, the owner should say what was on screen.
- Town shops: every shopkeeper (Mabel, Hank, Rosa, Mr. Abernathy, Mr. Lin, Dot) has a "Talk to …" spot beside the counter, and stepping up to the counter counts as meeting them for the friends list and the "Meet N people" goal.
- New farms start with $60,000 again (1.5.4 had raised it to $75,000).
- Dogs steer round buildings, trees and other animals instead of running through them, and jump a fence in a little arc rather than passing through it.
- Fences, ponds and swales: a fence drawn through a pond offers "⭕ Fence around the pond" (the fence bends round the outside, so the pond ends up inside the paddock); a fence across a swale offers "〰️ Put a break in the swale" (the swale is raked back where the fence crosses and dug again as pieces either side). A pond placed across a fence offers to take the fence round it, and a swale dug across a fence offers "Dig it with a break at the fence". Works both with your farmer and on the map.
- Pigs: "Feed the pigs" now shows inside any paddock that has pigs in it, not only in the barnyard (or says you're out of pig feed).
- Action labels like "Unroll a round bale here" are shorter and no longer catch taps; the tip card lets taps through except on its own buttons, so the right side of the screen stays free for looking around.
- Unlocked mode: Settings → Controls has an "All on left" choice. One stick on the left thumb walks and turns (driving and riding too), the right half of the screen no longer pans, and in first-person view the camera levels itself.
- Journal: "Raise soil organic matter by 0.5%" starts at level 6.
- Neighbours' farms: the soft grass carpet from home now covers their pastures, hay fields, orchards, lawns and farmstead, stopping at buildings, fences, drives, ponds and swales. Their animals already use the rebuilt models and animations.
- Bonus goals: a new Bonus tab in the journal, separate from the farm goals: share a photo from photo mode (+30 🌰), share the game with a friend (+30 🌰), rate and review it (+50 🌰, opens once the store link is set in `APP_STORE_REVIEW`) and post about your farm with #FarmersQuest (+20 🌰). Each pays once.

## 1.5.5: a wall calendar in the house

**Why:** "put a calendar in the house you can view and have important dates on there like your friends birthdays, the festival dates, etc".

- A calendar hangs on the right wall of the house, by the firewood. Tap it for a month grid (flip through the year) marking the birthdays of friends you have met, the four festivals and the County Fair, and a "Coming up" list of the next six dates.
- Not done yet from the same request: interactive festivals (townspeople, games, prizes). Games and prizes came in 1.5.18 (`FESTGAME`).

## 1.5.4: the map opens again; build with your farmer or on the map; Luna and Juneau for sale; journal goals reworked; $75,000 to start

**Why:** "when opening the map the game freezes and map never loads", "when building or digging anything give a pop up that says select location with character or with map", "Luna and Juneau should not come standard, they should have to be purchased like other dogs. If an existing account has them it should not be taken away", the owner's list of journal changes (new water goals, harder goals at higher levels, new building goals after the barn and coop) and "try starting the game with 75k instead of 60k".

- Map: it opens straight away on any size of farm. The contour lines, which were traced slowly enough to freeze the game on a big farm, are drawn in one quick pass just after the map opens, spaced wider on bigger farms (the scale says how far apart they are).
- Building, digging and fencing: picking a building, a decoration, a pond, a swale or a fence now asks "With your farmer" (walk to the spot, as before) or "On the map" (tap the spot on the farm map from anywhere on your land, turn it, then Build it). Ripping a keyline stays with the farmer.
- Luna and Juneau no longer come with a new farm. Once farm dogs unlock they're sometimes in at the livestock barn with the other dogs, at $1,200 and $1,300; farms that already have them keep them.
- Journal goals: each goal now has a starting level, and every goal counts toward the milestones, the one-off goals as well as the climbing ones. Slow or hard goals start higher, so they only hold back the later prizes: homegrown fruit, all four festivals and 10 hearts at level 4; soil organic matter, the bee tree, odd finds, all 25 homestead lots and the blue ribbon at level 3; every kind of wildlife at level 5. Filling a pond, the first festival and becoming a Local start at level 2. None of these are needed for the farm dogs any more.
- New water goals once the first pond is dug and filled and two swales are in: dig more ponds, keep several ponds full at once, plant trees along your swales, put up a rain tank.
- New building goals once the barn and coop are up: a hoop greenhouse, a farm stand, a coop upgrade, painting or remodelling a building, an eggmobile, and a climbing goal for the number of farm buildings.
- Every goal can be finished: "Raise N kinds of animals" tops out at the nine the barn sells, wild foods, fish and recipes top out at what your region actually has (a desert farm has no maple syrup recipes to cook), the bee tree goal only shows where the woods have one, and the land goals stop at the 1,000,000 acre cap. "Meet N people" counts the 22 townsfolk and neighbours who exist, and the friends list now says where to find anyone you haven't met.
- New farms start with $75,000 instead of $60,000.

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
- Dogs live in `DOGS` and `F.dogs`. Luna and Juneau are sold by `DOGS.forSale()` from `DOG_SPECIAL` (since 1.5.4); `homeDogs()` is no longer called for new farms.
- Goals: one-offs in `GOALS`, climbing goals in `LADDERS`. `lv` is the level a goal starts at and `after(F)` hides a goal until it returns true (`WATER_MORE`, `BUILD_MORE`). `MILESTONES.levels()` collects every visible goal's level; the lowest is the farm's level.
- Placement: `askPlace()` offers the farmer (`startPlace`) or the map (`MAP.open({ build | dig | draw })`). The map's `place` mode ends in `confirmPlace()`, the same as walking it into place.
- The map's contours are traced by `MAP.buildContours()`, deferred 40 ms after `MAP.open()`.
- Saves are JSON in `localStorage` (and native preferences in the app build). Old saves are upgraded in `migrateFarm()` and `farmFromSave()`. The ground is packed by `GameTerrain.pack()` with the `TERPACK` codec (`fmt: 2`); the old raw-float format is still read by `unpackRaw()`.
- Land: parcels 0 to 24 are the homestead lots; 25 to 108 are the rings, 12 per ring (`plotRect`, `plotOf`, `plotAdj`, `plotRingOf`). `F.owned` has an entry per parcel, `F.pUse` the use of each outlying parcel and `F.pAcres` a parcel trimmed at the cap.
- World size: `setWorld(tier)` sets `FARM_HALF`, `THALF`, `TN` (the ground grid) and `WORLD_R` (the countryside) from `F.tier`. `growWorld()` enlarges the grid when walking land is bought; `newLand()` furnishes the new ground. Ground tiles build at two levels of detail (`GameTerrain.build` with a want list, `FarmView.updateTiles`).
- Neighbour farms sit at `nbX(N)`, just past your land. The land office is `LANDUI`; buying is `buyParcel()`.
