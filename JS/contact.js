// HERO - Reduce title size on scroll
const hero = document.getElementById("hero-contact");
const heroTitle = hero.querySelector("h1");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let heroHeight = hero.offsetHeight;

    if (scrollY < heroHeight) {
        let scale = 1 - scrollY / (heroHeight * 1.5);
        scale = Math.max(scale, 0.6); // minimum scale limit
        heroTitle.style.transform = `scale(${scale})`;
        heroTitle.style.opacity = 1 - scrollY / heroHeight;
    }
});

// CONTACT FORM - Handle form submission and success message
const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission

    // Backend / email API integration would go here

    // Show success message
    successMessage.style.display = 'block';

    // Hide message after 4 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 4000);

    // Reset form fields
    form.reset();
});

