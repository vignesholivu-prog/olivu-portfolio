// ======================================
// Portfolio Script
// ======================================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 700);
});

// ======================================
// AOS
// ======================================

AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

// ======================================
// Typed JS
// ======================================

new Typed("#typing", {
    strings: [
        "Frontend Developer",
        "Technical Support Executive",
        "AI Python Full Stack Learner",
        "React Developer"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// ======================================
// Sticky Navbar
// ======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ======================================
// Active Navigation
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ======================================
// Counter
// ======================================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = Number(counter.dataset.count);

            let count = 0;

            const update = () => {

                count += Math.ceil(target / 80);

                if (count < target) {

                    counter.innerText = count;

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => observer.observe(counter));

// ======================================
// Scroll To Top
// ======================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ======================================
// Smooth Scroll
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ======================================
// Mobile Navbar Close
// ======================================

const navItems = document.querySelectorAll(".nav-link");
const navMenu = document.querySelector(".navbar-collapse");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        if (navMenu.classList.contains("show")) {

            new bootstrap.Collapse(navMenu).hide();

        }

    });

});

// ======================================
// Hero Image Animation
// ======================================

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 50;

    const y = (window.innerHeight / 2 - e.pageY) / 50;

    heroImage.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

// ======================================
// Contact Form
// ======================================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

// ======================================
// Floating Icons Animation
// ======================================

const icons = document.querySelectorAll(".icon");

icons.forEach((icon, index) => {

    icon.style.animationDelay = `${index * 0.4}s`;

});

// ======================================
// Project Hover
// ======================================

const projects = document.querySelectorAll(".project-card");

projects.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// ======================================
// Skill Card Hover
// ======================================

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ======================================
// Console Message
// ======================================

console.log(
"%cPortfolio Developed Successfully 🚀",
"color:#7b4dff;font-size:20px;font-weight:bold;"
);