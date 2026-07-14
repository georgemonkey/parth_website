/* =====================================================================
   HOME PAGE RENDERER — builds the featured card + project grid
   from PROJECTS (js/projects.js). You never edit this to add projects.
===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    renderFeatured();
    renderGrid();
    initReveal();
    initHeroParallax();
    initCopyEmail();
});

window.addEventListener("load", runLoader);

function runLoader() {
    const loader = document.getElementById("loader");
    if (!loader || loader.dataset.done) return;
    loader.dataset.done = "1";

    const pieces = loader.querySelectorAll(".piece");
    pieces.forEach((piece, i) => {
        setTimeout(() => piece.classList.add("in"), i * 40);
    });

    setTimeout(() => {
        loader.classList.add("loader-hidden");
        setTimeout(() => loader.remove(), 600);
    }, pieces.length * 40 + 300);
}

/* fallback: never let the loader hang more than 2.5s */
setTimeout(runLoader, 2500);

/* tags accept a plain string (default grey pill) or
   {label, variant} for a colored one, e.g. {label:"in progress", variant:"yellow"} */
function tagChips(tags = []) {
    return `<div class="project-tags">${
        tags.map(t => {
            const label   = typeof t === "string" ? t : t.label;
            const variant = typeof t === "string" ? "" : (t.variant ?? "");
            return `<span class="tag ${variant}">${label}</span>`;
        }).join("")
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
            ${cardThumb(p)}
            <h3>${p.title}</h3>
            <p>${p.tagline ?? ""}</p>
            ${tagChips(p.tags)}
        </a>`).join("");
}

/* cover image for a card — or a plain placeholder if there are no pics yet */
function cardThumb(p) {
    if (!p.thumbnail) {
        return `<div class="card-thumb card-thumb-empty">pics coming soon</div>`;
    }
    return `<img class="card-thumb"
                 src="${p.thumbnail}"
                 alt="${p.title}"
                 loading="lazy"
                 style="object-position:${p.thumbnailPosition || "center"}">`;
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

/* hero drifts up and fades slightly as you scroll past it, like the old site */
function initHeroParallax() {
    const hero = document.getElementById("hero");
    if (!hero) return;

    let ticking = false;
    window.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const y = window.scrollY;
            hero.style.transform = `translateY(${y * 0.3}px)`;
            hero.style.opacity = Math.max(0, 1 - y / 800);
            ticking = false;
        });
    }, { passive: true });
}

/* click the contact email to copy it instead of opening a mail client */
function initCopyEmail() {
    const link = document.getElementById("copy-email");
    if (!link) return;

    const original = link.textContent;
    link.addEventListener("click", e => {
        e.preventDefault();
        navigator.clipboard.writeText(link.dataset.email || original).then(() => {
            link.textContent = "copied";
            setTimeout(() => { link.textContent = original; }, 2000);
        });
    });
}
