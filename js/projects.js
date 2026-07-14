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
        big featured card, if this is the featured one). Swap it any
        time by pointing it at a different file in assets/.
      - `thumbnailPosition` is optional — use it when the cover photo
        gets cropped in a way you don't like (the card/featured image
        is a fixed-aspect box, so a tall or off-center photo can get
        cut off). Same syntax as CSS object-position:
          "center"        → default, centers the photo
          "top"           → keeps the top of the photo visible
          "bottom"        → keeps the bottom visible
          "30% 70%"       → precise horizontal% vertical%
        Just nudge the numbers and refresh until it looks right.

   ── TEMPLATE (copy from here) ──────────────────────────────────────

   {
       id: "myproject",
       title: "My Project",
       tagline: "One-line description shown on cards.",
       tags: ["Hardware", "Firmware"],
       thumbnail: "assets/myproject-photo1.jpg",
       thumbnailPosition: "center",
       featured: false,
       overview: [
           "First paragraph about the project.",
           "Second paragraph if you want one.",
       ],
       gallery: [
           "assets/myproject-photo1.jpg",
           { src: "assets/myproject-demo.mp4", caption: "Demo run" },
       ],
       features: [
           "Something it does",
           "Something else it does",
       ],
       development: [
           { title: "v1 — Prototype", text: "What happened here." },
           { title: "v2 — Rebuild",   text: "What changed and why." },
       ],
       technical: [
           { label: "MCU",      value: "STM32F405" },
           { label: "Firmware", value: "C++ / FreeRTOS" },
       ],
       future: [
           "Next thing you plan to add",
       ],
       links: [
           { label: "GitHub", url: "https://github.com/..." },
       ],
       related: ["some-other-project-id"],
   },

   ── (copy to here) ─────────────────────────────────────────────────

   NOTE: all text below is starter copy generated from your asset
   names — edit it to match reality.
===================================================================== */

const PROJECTS = [

    {
        id: "swift",
        title: "Swift Flight Controller",
        tagline: "Custom flight controller PCB and the drone built around it.",
        tags: ["PCB Design", "Embedded", "Drones"],
        thumbnail: "assets/swift-fcpcb.png",
        featured: true,
        overview: [
            "Swift is a custom flight controller board designed from scratch, plus the quadcopter platforms built to fly it.",
            "The project covers the full stack: schematic and PCB layout, firmware bring-up, ground station tooling, and flight testing.",
        ],
        gallery: [
            { src: "assets/swift-fcpcb.png",          caption: "Flight controller PCB" },
            { src: "assets/swift-finishedbuild.jpeg", caption: "Finished build" },
            { src: "assets/swift-minibuild.jpeg",     caption: "Mini build" },
            { src: "assets/swift-olddashboard.png",   caption: "Early ground station dashboard" },
            { src: "assets/swift-oldplanner.png",     caption: "Early mission planner" },
            { src: "assets/swift-trifold.jpg",        caption: "Project trifold" },
        ],
        features: [
            "Custom-designed flight controller PCB",
            "Ground station dashboard and mission planner",
            "Multiple airframe builds (full-size and mini)",
        ],
        technical: [
            { label: "Board",    value: "Custom FC PCB" },
            { label: "Tooling",  value: "Ground station dashboard + planner" },
        ],
        related: ["launchquad", "testquad"],
    },

    {
        id: "printer",
        title: "Custom Klipper 3D Printer",
        tagline: "Scratch-built 3D printer running Klipper, tuned with input shaping.",
        tags: ["3D Printing", "Klipper", "Mechatronics"],
        thumbnail: "assets/printer-close.jpg",
        overview: [
            "A 3D printer built and rebuilt from the ground up, running Klipper firmware with a web dashboard.",
            "The current build is the second major revision — the first version taught me what to fix in the frame, wiring, and motion system.",
        ],
        gallery: [
            { src: "assets/printer-close.jpg",             caption: "Current build — close up" },
            { src: "assets/printer-far.jpg",               caption: "Current build" },
            { src: "assets/printer-cablechain.jpg",        caption: "Cable chain routing" },
            { src: "assets/printer-dashboard.jpg",         caption: "Klipper web dashboard" },
            { src: "assets/printer-inputshaper.jpg",       caption: "Input shaper measurement rig" },
            { src: "assets/printer-xresonance.png",        caption: "X-axis resonance sweep" },
            { src: "assets/printer-yresonance.png",        caption: "Y-axis resonance sweep" },
            { src: "assets/printer-oldbuildassembly.jpeg", caption: "v1 — assembly" },
            { src: "assets/printer-oldbuildfinished.jpeg", caption: "v1 — finished" },
            { src: "assets/printer-oldbuildmainboard.jpeg",caption: "v1 — mainboard wiring" },
        ],
        features: [
            "Klipper firmware with web dashboard control",
            "Accelerometer-based input shaper tuning (X/Y resonance sweeps)",
            "Managed cable chain wiring",
        ],
        development: [
            { title: "v1 — First build",  text: "Initial frame, wiring, and mainboard setup. Worked, but exposed weaknesses in the motion system and cable management." },
            { title: "v2 — Rebuild",      text: "Rebuilt with cleaner wiring, cable chains, and full Klipper resonance tuning." },
        ],
        technical: [
            { label: "Firmware", value: "Klipper" },
            { label: "Tuning",   value: "ADXL-based input shaping" },
        ],
        related: ["chackathon"],
    },

    {
        id: "ampdetect",
        title: "AmpDetect",
        tagline: "Signal analysis and detection tool with live demo and result plots.",
        tags: ["Software", "Signal Processing"],
        thumbnail: "assets/ampdetect-graph1.png",
        overview: [
            "AmpDetect analyzes signals to detect events of interest, with plotted results and a recorded live demo.",
        ],
        gallery: [
            { src: "assets/ampdetect-demo.mp4",   caption: "Live demo" },
            { src: "assets/ampdetect-graph1.png", caption: "Detection results" },
            { src: "assets/ampdetect-graph2.png", caption: "Detection results" },
            { src: "assets/ampdetect-graph3.png", caption: "Detection results" },
            { src: "assets/ampdetect-graph4.png", caption: "Detection results" },
        ],
        related: ["ardms"],
    },

    {
        id: "ardms",
        title: "ARDMS",
        tagline: "Avionics test rig with MOSFET switching and flight computer testing.",
        tags: ["Embedded", "Hardware", "Rocketry"],
        thumbnail: "assets/ardms-testrig.jpeg",
        overview: [
            "A test rig for validating flight computer behavior and high-current MOSFET switching before committing hardware to a real flight.",
        ],
        gallery: [
            { src: "assets/ardms-testrig.jpeg", caption: "Test rig" },
            { src: "assets/ardms-mosfet.jpeg",  caption: "MOSFET switching stage" },
            { src: "assets/ardms-fctest.mov",   caption: "Flight computer test" },
        ],
        related: ["rocketsys", "ampdetect"],
    },

    {
        id: "chackathon",
        title: "Hackathon Build",
        tagline: "Prototype-to-finished hardware build with a live dashboard, built under time pressure.",
        tags: ["Hardware", "Software", "Hackathon"],
        thumbnail: "assets/chackathon-finished1.jpeg",
        overview: [
            "A hackathon project taken from CAD to working prototype to finished build, with a live monitoring dashboard.",
        ],
        gallery: [
            { src: "assets/chackathon-iso.png",         caption: "CAD — isometric view" },
            { src: "assets/chackathon-proto1.jpeg",     caption: "First prototype" },
            { src: "assets/chackathon-finished1.jpeg",  caption: "Finished build" },
            { src: "assets/chackathon-finished2.jpeg",  caption: "Finished build" },
            { src: "assets/chackathon-dashboard.png",   caption: "Live dashboard" },
            { src: "assets/chackathon-slide1.jpg",      caption: "Presentation" },
            { src: "assets/chackathon-slide2.jpg",      caption: "Presentation" },
        ],
        related: ["printer"],
    },

    {
        id: "launchquad",
        title: "LaunchQuad",
        tagline: "Quadcopter platform designed and assembled from the frame up.",
        tags: ["Drones", "CAD", "Hardware"],
        thumbnail: "assets/launchquad-built.jpg",
        overview: [
            "A quadcopter designed in CAD and built from the frame up.",
        ],
        gallery: [
            { src: "assets/launchquad-assembly.jpg",  caption: "Assembly" },
            { src: "assets/launchquad-built.jpg",     caption: "Completed build" },
            { src: "assets/launchquad-underside.jpg", caption: "Underside — wiring and mounting" },
        ],
        related: ["swift", "testquad"],
    },

    {
        id: "testquad",
        title: "TestQuad",
        tagline: "Carbon-frame test quadcopter for validating hardware and firmware.",
        tags: ["Drones", "Hardware"],
        thumbnail: "assets/testquad-carbonframe.jpg",
        overview: [
            "A carbon-frame quadcopter used as a testbed for hardware and firmware experiments.",
        ],
        gallery: [
            { src: "assets/testquad-carbonframe.jpg", caption: "Carbon frame" },
            { src: "assets/testquad-assembly.jpg",    caption: "Assembly" },
        ],
        related: ["swift", "launchquad"],
    },

    {
        id: "rocketsys",
        title: "Rocket Release System",
        tagline: "Latching release mechanism with a custom control board.",
        tags: ["Rocketry", "Mechanisms", "PCB Design"],
        thumbnail: "assets/rocketsys-latched.jpg",
        overview: [
            "A mechanical latch-and-release system for rocketry, driven by a custom control board.",
        ],
        gallery: [
            { src: "assets/rocketsys-latched.jpg",      caption: "Latched" },
            { src: "assets/rocketsys-unlatched.jpg",    caption: "Unlatched" },
            { src: "assets/rocketsys-release.jpg",      caption: "Release action" },
            { src: "assets/rocketsys-controlboard.jpg", caption: "Control board" },
        ],
        related: ["ardms"],
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
