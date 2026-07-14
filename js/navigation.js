/* =====================================================================
   NAVIGATION — darkens the floating navbar once you scroll.
===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const onScroll = () => {
        nav.classList.toggle("scrolled", window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
});
