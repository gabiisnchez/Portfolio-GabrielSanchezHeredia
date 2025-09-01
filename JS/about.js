// Selecting the "About" section
const aboutSection = document.querySelector('.about-section');

// Show section with scroll effect
window.addEventListener('scroll', () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint) {
        aboutSection.classList.add('show');
    }
});

// Smooth scrolling when pressing the arrow
const scrollDownBtn = document.querySelector('.scroll-down');
if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', () => {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
}
