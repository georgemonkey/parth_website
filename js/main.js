/* =====================================================================
   HOME PAGE RENDERER — builds the featured card + project grid
   from PROJECTS (js/projects.js). You never edit this to add projects.
===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    renderFeatured();
    renderGrid();
    initReveal();
});

window.addEventListener("load", hideLoader);

/* fallback: never let the loader hang more than 2.5s */
setTimeout(hideLoader, 2500);

function hideLoader() {
    const loader = document.getElementById("loader");
    if (!loader || loader.classList.contains("loader-hidden")) return;
    loader.classList.add("loader-hidden");
    setTimeout(() => loader.remove(), 600);
}

function tagChips(tags = []) {
    return `<div class="project-tags">${
        tags.map(t => `<span class="tag blue">${t}</span>`).join("")
    }</div>`;
}

function renderFeatured() {
    const section = document.getElementById("featured");
    if (!section) return;

    const p = PROJECTS.find(p => p.featured);
    if (!p) { section.remove(); return; }

    section.innerHTML = `
        <a class="featured-card reveal" href="${projectUrl(p)}">
            <img class="featured-image"
                 src="${p.thumbnail}"
                 alt="${p.title}"
                 loading="lazy"
                 style="object-position:${p.thumbnailPosition || "center"}">
            <div class="featured-content">
                <span class="featured-label">Featured Project</span>
                <h3>${p.title}</h3>
                <p>${p.tagline ?? ""}</p>
                ${tagChips(p.tags)}
            </div>
        </a>`;
}

function renderGrid() {
    const grid = document.getElementById("project-grid");
    if (!grid) return;

    grid.innerHTML = PROJECTS.map(p => `
        <a class="project-card reveal" href="${projectUrl(p)}">
            ${p.thumbnail
                ? `<img class="card-thumb"
                        src="${p.thumbnail}"
                        alt="${p.title}"
                        loading="lazy"
                        style="object-position:${p.thumbnailPosition || "center"}">`
                : ""}
            <h3>${p.title}</h3>
            <p>${p.tagline ?? ""}</p>
            ${tagChips(p.tags)}
        </a>`).join("");
}

/* scroll-reveal: elements with .reveal fade up when they enter view */
function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        els.forEach(el => el.classList.add("visible"));
        return;
    }
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add("visible");
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
}
