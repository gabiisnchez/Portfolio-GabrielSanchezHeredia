// Selección de la sección "About"
const aboutSection = document.querySelector('.about-section');

// Mostrar la sección con efecto al hacer scroll
window.addEventListener('scroll', () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {
        aboutSection.classList.add('show');
    }
});

// Scroll suave al pulsar la flecha
const scrollDownBtn = document.querySelector('.scroll-down');
if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', () => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
}
