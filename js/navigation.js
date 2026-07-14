/* =====================================================================
   NAVIGATION — darkens the floating navbar once you scroll, and
   highlights the nav link for whichever section is on screen.
===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const onScroll = () => {
        nav.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const links = [...document.querySelectorAll(".nav-item[data-section]")];
    if (!links.length) return;

    const sections = links
        .map(link => document.getElementById(link.dataset.section))
        .filter(Boolean);
    if (!sections.length) return;

    const setActive = id => {
        links.forEach(link => {
            link.classList.toggle("active", link.dataset.section === id);
        });
    };

    const onScrollSpy = () => {
        const pos = window.scrollY + 200;
        const current = sections.find(s =>
            pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight
        );
        if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScrollSpy, { passive: true });
    onScrollSpy();
});
