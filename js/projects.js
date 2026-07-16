/* =====================================================================
   PROJECT DATA — this is the ONLY file you touch to add a project
   =====================================================================

   HOW TO ADD A NEW PROJECT (2 steps):

   1. Drop your images/videos into /assets, named like:
        assets/myproject-photo1.jpg
        assets/myproject-demo.mp4

   2. Copy the TEMPLATE below, paste it at the TOP of the PROJECTS
      list (top = shows first in the grid), and fill in what you have.

   That's it. The site automatically:
      - adds a card to the home page grid
      - creates its page at        project.html?p=<id>
      - builds the gallery/lightbox, features, specs, etc.
      - cross-links it anywhere its id appears in "related"

   RULES:
      - Only `id` and `title` are required. Delete any field you
        don't need — empty sections hide themselves.
      - `id` must be unique, lowercase, no spaces (it's the URL).
      - Gallery items can be a plain string OR {src, caption}.
        Videos (.mp4/.mov/.webm) are detected automatically.
      - To reference another project, just use its id in `related`.
      - Set `featured: true` on exactly ONE project for the big
        homepage card.
      - `thumbnail` is the cover photo shown on the home card (and the
        big featured card, if this is the featured one). Leave it off
        and the card shows a plain "in progress" placeholder instead —
        good for projects with no pics yet.
      - `thumbnailPosition` is optional — use it when the cover photo
        gets cropped in a way you don't like (the card/featured image
        is a fixed-aspect box, so a tall or off-center photo can get
        cut off). Same syntax as CSS object-position:
          "center"        → default, centers the photo
          "top"           → keeps the top of the photo visible
          "bottom"        → keeps the bottom visible
          "30% 70%"       → precise horizontal% vertical%
        Just nudge the numbers and refresh until it looks right.
      - Tags are plain grey pills by default. To make one stand out
        (like an "in progress" flag), use an object instead of a
        string: { label: "in progress", variant: "yellow" }.
        Variants: "yellow" (WIP), "green", "blue".

   ── TEMPLATE (copy from here) ──────────────────────────────────────

   {
       id: "myproject",
       title: "my project",
       tagline: "one-line description shown on cards.",
       tags: ["hardware", "firmware"],
       thumbnail: "assets/myproject-photo1.jpg",
       thumbnailPosition: "center",
       featured: false,
       overview: [
           "first paragraph about the project.",
           "second paragraph if you want one.",
       ],
       gallery: [
           "assets/myproject-photo1.jpg",
           { src: "assets/myproject-demo.mp4", caption: "demo run" },
       ],
       features: [
           "something it does",
           "something else it does",
       ],
       development: [
           { title: "v1 — prototype", text: "what happened here." },
           { title: "v2 — rebuild",   text: "what changed and why." },
       ],
       technical: [
           { label: "mcu",      value: "stm32f405" },
           { label: "firmware", value: "c++" },
       ],
       future: [
           "next thing you plan to add",
       ],
       links: [
           { label: "github", url: "https://github.com/..." },
       ],
       related: ["some-other-project-id"],
   },

   ── (copy to here) ─────────────────────────────────────────────────
===================================================================== */

const PROJECTS = [

    {
        id: "bobo",
        title: "bobo",
        tagline: "smaller size model rocket with electronic avionics",
        tags: ["rocketry", "3d printing"],
        thumbnail: "assets/bobo-nose-h.jpg",
        featured: true,
        overview: [
            "bobo is my first rocket that actually had some kind of life in it. it's a bt50 sized. nose cone, fins and avionics bay are all 3d printed. ",
            "the av bay slides out of the nose cone so i can access the electronics. the whole thing is small enough use a ejection charge from the motor itself without using black powder which i was struggling to get my hands on. but it was the start of me learning how rockets work, what sections they need and flight parameters to dial in for teddy (my bigger rocket).",
        ],
        gallery: [
            { src: "assets/bobo-firstflight.mp4",     caption: "first flight" },
            { src: "assets/bobo-nose-h.jpg",          caption: "printed nose + body" },
            { src: "assets/bobo-fins-front-h.jpg",    caption: "printed fin + motor case" },
            { src: "assets/bobo-avbay-front-h.jpg",   caption: "av bay - pico version" },
            { src: "assets/bobo-avbay-back-v.jpg",    caption: "av bay on its own" },
        ],
        features: [
            "fully 3d-printed airframe — nose, body, fin can, av bay",
            "removable avionics bay that slots into the body",
            "small bt50, launches off a normal pad",
        ],
        development: [
            { title: "v1 — first flight (pico)", text: "flew on a raspberry pi pico. the flight itself was fine, but power was the weak spot. the pico kept browning out, and i ended up heatshrinking the positive lead right there on the launchpad to turn it on. worked, but it was def janky." },
            { title: "relaunch — esp32-c3 (in progress)", text: "moving the av bay onto a seeed studio xiao esp32-c3. i added an actual power button so i can arm it right before launch instead of messing w a loose wire, and a little led on the av-bay battery so i can just look and tell if it's on." },
        ],
        technical: [
            { label: "class",              value: "bt50" },
            { label: "airframe",           value: "3d printed" },
            { label: "avionics (v1)",      value: "rpi pico" },
            { label: "avionics (v2)",value: "seeed xiao esp32-c3" },
        ],
        future: [
            "actually fly the esp32-c3 version",
            "onboard logging thats clean w rolling avg",
            "eventually air-launch it off the launch quad",
        ],
        related: ["teddy", "launchquad", "rocketsys"],
    },

    {
        id: "teddy",
        title: "teddy",
        tagline: "bobos big brother",
        tags: ["rocketry", { label: "in progress", variant: "yellow" },"3d printing"],
        overview: [
            "teddys bobos big brother, its still being built right now. im deciding on the control system. i can decide between tvc and roll control fins.",
            "right now it's running an esp32-c3 on an expansion board with an mpu6050 (the version with the temp sensor), powered off a 2s pack through a mini 360 buck converter.",
        ],
        features: [
            "bt80 airframe size",
            "esp32-c3 + mpu6050 (imu + temp)",
            "2s battery through a buck converter",
            "tvc or roll control fins",
        ],
        development: [
            { title: "whats going on right now", text: "still working on it. the av bay is mostly done and printed i just need to decide on tvc or fins. then i can start on the fin can and motor mount" },
        ],
        technical: [
            { label: "class",   value: "bt80" },
            { label: "compute", value: "esp32-c3 + expansion board" },
            { label: "sensing", value: "mpu6050 (imu + temp)" },
            { label: "power",   value: "2s → buck converter" },
            { label: "control", value: "tbd — tvc or roll fins" },
        ],
        future: [
            "decide tvc vs roll fins and build it",
            "first launch",
            "air-launch like bobo",
            "model different compounds of rocket propellant, potentially subsections"
        ],
        related: ["bobo", "launchquad", "rocketsys"],
    },

    {
        id: "launchquad",
        title: "launch quad",
        tagline: "bobo and teddys final test rig",
        tags: ["drones", "3d printing", "carbon fiber"],
        thumbnail: "assets/launchquad-final-h.jpg",
        overview: [
            "this was my first major accident, i had cut my right pinky while working on the arming states during testing on the V1 frame. i took a long break from drones because i was scared of getting near props again. while i was healing i got into rockets.",
            "once i was back i finished it off on a proper carbon frame. by then i was way more into the rocket side, so the launch quad kind of found a new job, it's meant to carry bobo and teddy up and air-launch them instead of launching everything off the ground.",
        ],
        gallery: [
          
            { src: "assets/launchquad-final-v.jpg",  caption: "finished carbon build" },
            { src: "assets/launchquad-built.jpg",    caption: "the earlier 3d-printed frame" },
            { src: "assets/launchquad-assembly.jpg", caption: "assembly" },
            { src: "assets/launchquad-underside.jpg",caption: "underside" },
        ],
        features: [
            "3d-printed prototype frame to final carbon build",
            "meant to lift and air-launch small to large size rockets",
            "carbon frame on the finished version so it's lighter + stiffer",
        ],
        development: [
            { title: "prototype — printed frame", text: "first version was a 3d-printed frame. it flew, but it was heavy and a bit flexy. this caused vibrations sent to the flight controller which ultimately caused my injury as the arming state were getting toggled." },
            { title: "the break", text: "researched heavily on what had actually happened and how i could prevent it fropm happening again. " },
            { title: "final — carbon", text: "once i felt comfortable again i had worked on rockets and had an idea to create a method of launching them higher in the atmosphere to reduce overall launch fuel required and higher altiude with minimized fuel weight." },
        ],
        technical: [
            { label: "frame (final)", value: "carbon fiber" },
            { label: "frame (proto)", value: "3d printed" },
            { label: "purpose",       value: "air-launch platform" },
        ],
        future: [
            "actually air-launch bobo off it",
            "mount the release system (rl-sys) underneath",
        ],
        related: ["bobo", "teddy", "rocketsys"],
    },

    {
        id: "rocketsys",
        title: "rl-sys",
        tagline: "the release mechanism that drops a rocket off the quad.",
        tags: ["rocketry", "mechanisms", { label: "in progress", variant: "yellow" }],
        thumbnail: "assets/rocketsys-latched.jpg",
        overview: [
            "rl-sys is the part that lets the launch quad carry a rocket and let it go. it's a latch with its own little control board — it holds bobo or teddy underneath, then releases on command mid-air so the rocket lights and flies off the quad instead of off a pad.",
            "this is still early. i'm mostly learning how all of it should work by flying bobo and teddy off the ground first, and rl-sys will come together as i actually get there. leaving room here for more photos and the control code once it's further along.",
        ],
        gallery: [
            { src: "assets/rocketsys-latched.jpg",      caption: "latched" },
            { src: "assets/rocketsys-unlatched.jpg",    caption: "unlatched" },
            { src: "assets/rocketsys-release.jpg",      caption: "release" },
            { src: "assets/rocketsys-controlboard.jpg", caption: "control board" },
        ],
        features: [
            "latching hold-and-release for a rocket",
            "custom control board",
            "meant to mount under the launch quad",
        ],
        development: [
            { title: "where it's at", text: "the mechanism and the board work on the bench. i haven't done a real air launch with it yet — that's the whole point, i'm just building up to it with ground launches first." },
        ],
        technical: [
            { label: "type",    value: "latch + release" },
            { label: "control", value: "custom board" },
        ],
        future: [
            "more photos + the release code as it comes together",
            "first real air launch off the launch quad",
        ],
        related: ["launchquad", "bobo", "teddy"],
    },

    {
        id: "swift",
        title: "swift",
        tagline: "low-cost search-and-rescue drone swarm.",
        tags: ["drones", "swarms", "python", "ml"],
        thumbnail: "assets/swift-finishedbuild.jpeg",
        overview: [
            "swift is a search-and-rescue drone project i did with two friends. the idea is a swarm of cheap drones — under about $200 each — that cover a search area together instead of relying on one expensive one. one drone acts as the leader and does the path planning, and the rest just hold formation off it.",
            "we took it to wssef (the washington state science and engineering fair) and it ended up placing first in engineering, which was cool. it's open source.",
        ],
        gallery: [
            { src: "assets/swift-finishedbuild.jpeg", caption: "leader node" },
            { src: "assets/swift-minibuild.jpeg",     caption: "smaller follower" },
            { src: "assets/swift-fcpcb.png",          caption: "custom flight controller" },
            { src: "assets/swift-oldplanner.png",     caption: "mission planner" },
            { src: "assets/swift-olddashboard.png",   caption: "ground dashboard" },
            { src: "assets/swift-trifold.jpg",        caption: "the fair board" },
        ],
        features: [
            "leader-follower setup — one drone plans, the rest follow",
            "artificial potential fields for spacing + obstacle avoidance so they don't hit each other",
            "four search patterns tested (expanding square came out best)",
            "ir sensing to pick up heat signatures from the air",
            "kept under 249g so it stays clear of faa part 107",
            "desktop app to draw the search area and watch each drone",
        ],
        development: [
            { title: "search patterns", text: "tried expanding square, random walk, lawnmower, and spiral against coverage, time and battery. expanding square won on balance — around 80% coverage without eating too much time or battery. spiral was good for weird-shaped areas and kind of bad at everything else." },
        ],
        technical: [
            { label: "coordination", value: "leader–follower + apf" },
            { label: "language",     value: "python" },
            { label: "sensing",      value: "ir heat detection" },
            { label: "weight",       value: "<249g (faa part 107)" },
            { label: "cost",         value: "~$200 / drone" },
        ],
        future: [
            "ir tells you something's warm but not what it is — want to add vision + lidar so it can tell a person from a car",
            "right now it leans hard on the leader; would like the drones thinking more on their own",
            "only tested with one follower so far, needs a real multi-drone run",
        ],
        links: [
            { label: "github", url: "https://github.com/georgemonkey/SWIFT" },
        ],
        related: ["ardms", "launchquad"],
    },

    {
        id: "ardms",
        title: "ardms",
        tagline: "autonomous flight firmware for my drones.",
        tags: ["drones", "firmware", "python", "embedded"],
        thumbnail: "assets/ardms-testrig.jpeg",
        overview: [
            "ardms is firmware i wrote so my drones can fly autonomous routes without needing the big flight stacks like ardupilot or inav. i actually started it because am32 firmware got hard to get in the us for a while and i still wanted to keep flying. it's meant to be simple — it talks to betaflight and its forks, does mosfet-based esc control, and calibrates its own pid loops.",
            "the pid calibration is the part i like. you strap the drone down and it runs each axis, measures the power curves, and works out p/i/d from that instead of me guessing. gps waypoints are just simple line-following between points.",
            "i first tested it on a 5-inch quad — that's what's in most of these pics. i moved off that one for the launch quad build, but the launch quad wasn't really nimble enough to test firmware on, so i built the test quad specifically to beat on ardms.",
        ],
        gallery: [
            { src: "assets/ardms-testrig.jpeg", caption: "test rig" },
            { src: "assets/ardms-mosfet.jpeg",  caption: "mosfet switching" },
            { src: "assets/ardms-fctest.mp4",   caption: "flight controller test" },
        ],
        features: [
            "autonomous routes off a gps module",
            "auto pid calibration by measuring power curves on a strapped-down drone",
            "talks to betaflight + its forks",
            "mosfet-based esc control",
            "full-duplex serial so there's bandwidth for dshot",
        ],
        technical: [
            { label: "language",    value: "python" },
            { label: "esc control", value: "mosfet + dshot" },
            { label: "boards",      value: "am32 / f405" },
            { label: "comms",       value: "betaflight-compatible" },
        ],
        related: ["testquad", "launchquad"],
    },

    {
        id: "testquad",
        title: "test quad",
        tagline: "carbon quad i built just to beat on ardms.",
        tags: ["drones", "carbon fiber", "testing"],
        thumbnail: "assets/testquad-carbonframe.jpg",
        overview: [
            "the test quad exists for one reason — testing ardms without risking anything nicer. the original ardms drone was a 5-inch quad i moved away from, and the launch quad was too big and not nimble enough to actually test firmware on. so this is a plain carbon-frame quad i can crash and not really care.",
        ],
        gallery: [
            { src: "assets/testquad-carbonframe.jpg", caption: "bare carbon frame" },
            { src: "assets/testquad-assembly.jpg",    caption: "assembly" },
        ],
        features: [
            "carbon frame, nothing precious on it",
            "dedicated ardms testbed",
            "cheap to fix when the firmware does something dumb",
        ],
        technical: [
            { label: "frame",   value: "carbon fiber" },
            { label: "purpose", value: "ardms firmware testing" },
        ],
        related: ["ardms", "launchquad"],
    },

    {
        id: "printer",
        title: "3d printer",
        tagline: "printer i keep rebuilding. runs klipper now.",
        tags: ["3d printing", "klipper", "mechatronics"],
        thumbnail: "assets/printer-v2-close.jpg",
        overview: [
            "this is my printer, which i've basically rebuilt from the ground up more than once. the current version runs klipper with a web dashboard and it's actually tuned properly — input shaping off an accelerometer, cable chains, the whole thing.",
            "the first build mostly taught me what not to do. the wiring was a mess and the motion system wasn't great. v2 fixed most of that.",
        ],
        gallery: [
            { src: "assets/printer-v2-close.jpg",       caption: "current build" },
            { src: "assets/printer-v2-far.jpg",         caption: "current build" },
            { src: "assets/printer-v2-monitor.jpg",     caption: "klipper dashboard on the monitor" },
            { src: "assets/printer-v2-cablechain.jpg",  caption: "cable chains" },
            { src: "assets/printer-v2-dashboard.jpg",   caption: "web dashboard" },
            { src: "assets/printer-v2-inputshaper.jpg", caption: "accelerometer for input shaping" },
            { src: "assets/printer-v2-xresonance.png",  caption: "x resonance sweep" },
            { src: "assets/printer-v2-yresonance.png",  caption: "y resonance sweep" },
            { src: "assets/printer-v1-assembly.jpeg",   caption: "v1 — assembly" },
            { src: "assets/printer-v1-finished.jpeg",   caption: "v1 — finished" },
            { src: "assets/printer-v1-mainboard.jpeg",  caption: "v1 — wiring" },
        ],
        features: [
            "klipper + web dashboard",
            "input shaping tuned off an accelerometer (x/y resonance sweeps)",
            "cable chains so the wiring stops flexing around",
        ],
        development: [
            { title: "v1 — first build", text: "got it working but the wiring was rough and the motion system flexed. mostly a learning build." },
            { title: "v2 — rebuild", text: "cleaner wiring, cable chains, and actual klipper resonance tuning. runs way better." },
        ],
        technical: [
            { label: "firmware", value: "klipper" },
            { label: "tuning",   value: "accelerometer input shaping" },
        ],
    },

    {
        id: "ampdetect",
        title: "ampdetect",
        tagline: "current-based stall detection so our vex motors stop cooking.",
        tags: ["vex", "c++", "data"],
        thumbnail: "assets/ampdetect-graph1.png",
        thumbnailPosition: "top",
        overview: [
            "this season our vex robot's intake would overheat every time it filled up with blocks — the motors would stall, pull a bunch of current, and just sit there cooking. we didn't have time to rebuild the intake, so i fixed it in code instead.",
            "ampdetect watches each motor's rpm, current draw and temperature and works out when it's actually stalled versus just working hard. when it catches a stall it backs the motor off, but the driver can still override during scoring. i tested a bunch of threshold sets — those graphs are that — and the 12th one was the keeper.",
        ],
        gallery: [
            { src: "assets/ampdetect-demo.mp4",   caption: "in a match" },
            { src: "assets/ampdetect-graph1.png", caption: "rpm / current / stall state per motor" },
            { src: "assets/ampdetect-graph2.png", caption: "another threshold set" },
            { src: "assets/ampdetect-graph3.png", caption: "threshold tuning" },
            { src: "assets/ampdetect-graph4.png", caption: "threshold tuning" },
        ],
        features: [
            "watches rpm + current + temperature together, not just one",
            "backs off power on a real stall, ignores normal load",
            "driver override for scoring",
            "killed the overheating for the rest of the season",
        ],
        development: [
            { title: "tuning", text: "tested around 25 threshold configs, 12 made it to actual data analysis. plotted current, rpm and temp for each and picked the one that caught stalls without nagging during normal intaking." },
        ],
        technical: [
            { label: "language", value: "c++" },
            { label: "signals",  value: "rpm + current + temp" },
            { label: "plots",    value: "matplotlib" },
        ],
    },

    {
        id: "chackathon",
        title: "mosquito guard",
        tagline: "hackathon build — sensor box that flags mosquito breeding risk.",
        tags: ["esp32", "iot", "hardware"],
        thumbnail: "assets/chackathon-finished1.jpeg",
        overview: [
            "mosquito guard is a little battery-powered sensor box that tracks temperature and humidity and works out how good the conditions are for mosquitoes to breed. me and my team built it in a day for the 2025 chameleon hackathon out of an esp32, a dht11 and an oled, all in a 3d-printed case. it ended up placing first, which was a nice surprise for a ~$30 build.",
            "it runs its own wifi access point so you connect straight to it — no internet needed — and it serves a little dashboard with graphs. the risk score is weighted 60% temperature, 40% humidity, based on what actually matters for breeding.",
        ],
        gallery: [
            { src: "assets/chackathon-finished1.jpeg", caption: "finished build" },
            { src: "assets/chackathon-finished2.jpeg", caption: "finished build" },
            { src: "assets/chackathon-iso.png",        caption: "case cad" },
            { src: "assets/chackathon-proto1.jpeg",    caption: "breadboard prototype" },
            { src: "assets/chackathon-dashboard.png",  caption: "the dashboard it serves itself" },
            { src: "assets/chackathon-slide1.png",     caption: "presentation" },
            { src: "assets/chackathon-slide2.png",     caption: "presentation" },
        ],
        features: [
            "temp + humidity → live breeding-risk score",
            "runs its own wifi hotspot, no internet needed",
            "web dashboard with graphs it serves itself",
            "oled shows the connection info",
            "3d-printed case, ~$30 in parts",
        ],
        development: [
            { title: "built in a day", text: "breadboarded the esp32 + dht11, wrote the risk function, threw together a single-page dashboard it serves itself, and printed a case during the event. presented it and somehow won." },
        ],
        technical: [
            { label: "board",   value: "esp32 (ap mode)" },
            { label: "sensor",  value: "dht11" },
            { label: "display", value: "ssd1306 oled" },
            { label: "cost",    value: "~$30" },
        ],
        links: [
            { label: "github", url: "https://github.com/georgemonkey/chameleon-hackathon" },
        ],
    },
    

];

/* ---- helpers used by the renderers (don't edit) ---- */

function getProject(id) {
    return PROJECTS.find(p => p.id === id);
}

function projectUrl(p) {
    return `project.html?p=${encodeURIComponent(p.id)}`;
}

function isVideo(src) {
    return /\.(mp4|mov|webm)$/i.test(src);
}

/* normalize a gallery item to {src, caption} */
function mediaItem(item) {
    return typeof item === "string" ? { src: item, caption: "" } : item;
}
