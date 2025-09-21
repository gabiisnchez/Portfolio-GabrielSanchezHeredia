// HERO - Reduce title size on scroll
const hero = document.getElementById("hero-certificates");
const heroTitle = hero.querySelector("h1");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let heroHeight = hero.offsetHeight;

    if (scrollY < heroHeight) {
        let scale = 1 - scrollY / (heroHeight * 1.5);
        scale = Math.max(scale, 0.6); // límite mínimo
        heroTitle.style.transform = `scale(${scale})`;
        heroTitle.style.opacity = 1 - scrollY / heroHeight;
    }
});

// GRID - Fade-in on scroll
const gridSection = document.getElementById("certificates-grid");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gridSection.classList.add("visible");
                observer.unobserve(gridSection);
            }
        });
    },
    { threshold: 0.2 }
);

observer.observe(gridSection);