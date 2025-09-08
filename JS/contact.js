// HERO - Reduce title size on scroll
const hero = document.getElementById("hero-contact");
const heroTitle = hero.querySelector("h1");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let heroHeight = hero.offsetHeight;

    if (scrollY < heroHeight) {
        let scale = 1 - scrollY / (heroHeight * 1.5);
        scale = Math.max(scale, 0.6);
        heroTitle.style.transform = `scale(${scale})`;
        heroTitle.style.opacity = 1 - scrollY / heroHeight;
    }
});

// CONTACT FORM - Handle form submission and success message
const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

// Initialize EmailJS with your Public Key
(function() {
    emailjs.init("bbLmmsXQKYqsLA704");
})();

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validation of required fields
    if (!form.name.value.trim() || !form.email.value.trim() || !form.message.value.trim()) {
        alert("Please fill in all required fields.");
        return;
    }

    // Send form using EmailJS
    emailjs.sendForm("service_ld75pqo", "template_hqv01x4", this)
        .then(() => {
            // Show success message with animation
            successMessage.classList.add('show');

            // Hide message after 4 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 4000);

            // Reset form fields
            form.reset();
        })
        .catch((error) => {
            // Show alert if there is an error sending the email
            alert("❌ Error al enviar: " + JSON.stringify(error));
        });
});
