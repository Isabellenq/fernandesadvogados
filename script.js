// Menu mobile
const btn = document.querySelector(".nav-toggle");
const menu = document.querySelector(".main-nav");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}

// Scroll Reveal
function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight - 120) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
