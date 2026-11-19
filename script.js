// Mobile navigation menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("open");
    });

    // Close menu after clicking a link

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
        });

    });
}


// Automatically update copyright year

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// Console message

console.log("Welcome to Chethan V's Portfolio!");