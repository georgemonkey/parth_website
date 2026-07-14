/* =====================================================================
   PROJECT PAGE RENDERER — fills project.html from PROJECTS data.
   URL format:  project.html?p=<id>     (e.g. project.html?p=printer)
   Empty/missing fields hide their section automatically.
===================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const id = new URLSearchParams(location.search).get("p");
    const project = getProject(id);

    if (!project) {
        renderNotFound();
        return;
    }

    document.title = `${project.title} — Parth Amradkar`;

    renderHero(project);
    renderOverview(project);
    renderGallery(project);
    renderList("features", "Key Features", project.features);
    renderDevelopment(project);
    renderTechnical(project);
    renderList("future", "Future Plans", project.future);
    renderRelated(project);

    if (typeof initLightbox === "function") initLightbox();
});

/* ---- helpers ---- */

function el(id) {
    return document.getElementById(id);
}

/* accepts a string or an array of paragraphs */
function paragraphs(text) {
    const arr = Array.isArray(text) ? text : [text];
    return arr.map(t => `<p>${t}</p>`).join("");
}

function renderNotFound() {
    document.querySelector("main").innerHTML = `
        <section class="project-not-found">
            <h1>Project not found</h1>
            <p>That link doesn't match any project.</p>
            <a class="primary-button" href="index.html">Back to home</a>
        </section>`;
}

/* ---- sections ---- */

function renderHero(p) {
    el("project-hero").innerHTML = `
        <div class="container">
            <div class="project-tags">
                ${(p.tags ?? []).map(t => `<span class="tag blue">${t}</span>`).join("")}
            </div>
            <h1>${p.title}</h1>
            ${p.tagline ? `<p class="project-tagline">${p.tagline}</p>` : ""}
            ${(p.links ?? []).length ? `
                <div class="project-links">
                    ${p.links.map(l => `
                        <a class="secondary-button"
                           href="${l.url}"
                           target="_blank"
                           rel="noopener">${l.label}</a>`).join("")}
                </div>` : ""}
        </div>`;
}

function renderOverview(p) {
    if (!p.overview) { el("overview").remove(); return; }
    el("overview").innerHTML = `
        <div class="container">
            <h2>Overview</h2>
            ${paragraphs(p.overview)}
        </div>`;
}

function renderGallery(p) {
    if (!(p.gallery ?? []).length) { el("gallery").remove(); return; }

    const items = p.gallery.map(mediaItem).map(m => `
        <figure class="gallery-item">
            ${isVideo(m.src)
                ? `<video src="${m.src}" controls preload="metadata" playsinline></video>`
                : `<img src="${m.src}"
                        alt="${m.caption || p.title}"
                        loading="lazy"
                        data-lightbox>`}
            ${m.caption ? `<figcaption>${m.caption}</figcaption>` : ""}
        </figure>`).join("");

    el("gallery").innerHTML = `
        <div class="container">
            <h2>Gallery</h2>
            <div class="gallery-grid">${items}</div>
        </div>`;
}

/* generic bullet-list section (features, future plans) */
function renderList(sectionId, heading, items) {
    if (!(items ?? []).length) { el(sectionId).remove(); return; }
    el(sectionId).innerHTML = `
        <div class="container">
            <h2>${heading}</h2>
            <ul class="feature-list">
                ${items.map(i => `<li>${i}</li>`).join("")}
            </ul>
        </div>`;
}

function renderDevelopment(p) {
    if (!(p.development ?? []).length && !p.development) {
        el("development").remove();
        return;
    }

    /* accepts a string, array of strings, or array of {title, text} */
    const entries = Array.isArray(p.development) ? p.development : [p.development];
    if (!entries.length) { el("development").remove(); return; }

    el("development").innerHTML = `
        <div class="container">
            <h2>Development</h2>
            <div class="dev-timeline">
                ${entries.map(e => typeof e === "string"
                    ? `<div class="dev-entry"><p>${e}</p></div>`
                    : `<div class="dev-entry">
                           <h3>${e.title}</h3>
                           <p>${e.text}</p>
                       </div>`).join("")}
            </div>
        </div>`;
}

function renderTechnical(p) {
    if (!(p.technical ?? []).length) { el("technical").remove(); return; }
    el("technical").innerHTML = `
        <div class="container">
            <h2>Technical Details</h2>
            <div class="spec-grid">
                ${p.technical.map(s => `
                    <div class="spec">
                        <span class="spec-label">${s.label}</span>
                        <span class="spec-value">${s.value}</span>
                    </div>`).join("")}
            </div>
        </div>`;
}

function renderRelated(p) {
    const related = (p.related ?? [])
        .map(getProject)
        .filter(Boolean);

    if (!related.length) { el("related-projects").remove(); return; }

    el("related-projects").innerHTML = `
        <div class="container">
            <h2>Related Projects</h2>
            <div class="related-grid">
                ${related.map(r => `
                    <a class="project-card" href="${projectUrl(r)}">
                        ${r.thumbnail
                            ? `<img class="card-thumb"
                                    src="${r.thumbnail}"
                                    alt="${r.title}"
                                    loading="lazy">`
                            : ""}
                        <h3>${r.title}</h3>
                        <p>${r.tagline ?? ""}</p>
                    </a>`).join("")}
            </div>
        </div>`;
}
