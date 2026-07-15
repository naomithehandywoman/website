// =======================================
// Naomi the Handywoman
// script.js
// =======================================


// Mobile menu

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        hamburger.innerHTML = "✕";
    } else {
        hamburger.innerHTML = "☰";
    }

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        hamburger.innerHTML = "☰";

    });

});


// Navbar shadow while scrolling

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


// Fade-in animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".card, .gallery-item, section").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".8s ease";

    observer.observe(el);

});


// Current year in footer

const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} Naomi the Handywoman`;
