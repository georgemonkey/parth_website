/* =====================================================================
   LIGHTBOX — click any gallery image ([data-lightbox]) to expand.
   Arrow keys / on-screen arrows to navigate, Esc or click to close.
===================================================================== */

function initLightbox() {

    const images = [...document.querySelectorAll("[data-lightbox]")];
    if (!images.length) return;

    let current = 0;

    const overlay = document.createElement("div");
    overlay.className = "lightbox hidden";
    overlay.innerHTML = `
        <button class="lightbox-close" aria-label="Close">&times;</button>
        <button class="lightbox-prev"  aria-label="Previous">&#8249;</button>
        <img class="lightbox-image" alt="">
        <button class="lightbox-next"  aria-label="Next">&#8250;</button>
        <p class="lightbox-caption"></p>`;
    document.body.appendChild(overlay);

    const imgEl     = overlay.querySelector(".lightbox-image");
    const captionEl = overlay.querySelector(".lightbox-caption");

    function show(index) {
        current = (index + images.length) % images.length;
        const src = images[current].src;
        imgEl.src = src;
        const fig = images[current].closest("figure");
        const cap = fig?.querySelector("figcaption");
        captionEl.textContent = cap ? cap.textContent : "";
        overlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }

    function close() {
        overlay.classList.add("hidden");
        document.body.style.overflow = "";
    }

    images.forEach((img, i) => {
        img.addEventListener("click", () => show(i));
    });

    overlay.querySelector(".lightbox-close").addEventListener("click", close);
    overlay.querySelector(".lightbox-prev").addEventListener("click", e => {
        e.stopPropagation();
        show(current - 1);
    });
    overlay.querySelector(".lightbox-next").addEventListener("click", e => {
        e.stopPropagation();
        show(current + 1);
    });

    /* click outside the image closes */
    overlay.addEventListener("click", e => {
        if (e.target === overlay) close();
    });

    document.addEventListener("keydown", e => {
        if (overlay.classList.contains("hidden")) return;
        if (e.key === "Escape")     close();
        if (e.key === "ArrowLeft")  show(current - 1);
        if (e.key === "ArrowRight") show(current + 1);
    });
}
