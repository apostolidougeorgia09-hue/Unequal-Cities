const panels = document.querySelectorAll(".panel");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });
panels.forEach(p => observer.observe(p));
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.style.background = "rgba(255,255,255,0.8)";
    nav.style.backdropFilter = "blur(10px)";
    nav.style.borderBottom = "1px solid rgba(0,0,0,0.1)";
    nav.style.padding = "12px 0";
  } else {
    nav.style.background = "transparent";
    nav.style.backdropFilter = "none";
    nav.style.borderBottom = "none";
    nav.style.padding = "20px 0";
  }
});
const sections = ["global", "london", "data", "map", "conclusion"];
const navLinks = document.querySelectorAll(".nav-links a");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
);
sections.forEach((id) => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});