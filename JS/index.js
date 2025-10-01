document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");

    // Header scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Smooth scrolling for nav
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = "0s";
                entry.target.style.animationPlayState = "running";
            }
        });
    }, observerOptions);

    document.querySelectorAll(".section").forEach(section => {
        observer.observe(section);
    });
});

// Function for smooth scrolling to the next section
function scrollToNext() {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
        aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// Pause carousel animation on hover
const carouselTrack = document.querySelector(".carousel-track");
if (carouselTrack) {
    carouselTrack.addEventListener("mouseenter", () => {
        carouselTrack.style.animationPlayState = "paused";
    });

    carouselTrack.addEventListener("mouseleave", () => {
        carouselTrack.style.animationPlayState = "running";
    });
}