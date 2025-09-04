document.addEventListener("DOMContentLoaded", () => {
    const btnHamburger = document.getElementById("btn-hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = navMenu.querySelectorAll("a");

  // Open/close menu by clicking the button
    btnHamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        btnHamburger.classList.toggle("active");
    });

  // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
            btnHamburger.classList.remove("active");
        });
    });

  // Close menu if clicked outside
    document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !btnHamburger.contains(e.target)) {
            navMenu.classList.remove("show");
            btnHamburger.classList.remove("active");
        }
    });
});
