// ================================
// HAMBURGER MENU
// ================================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Change hamburger icon
    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});


// ================================
// CONTACT FORM VALIDATION
// ================================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (subject === "") {
        alert("Please enter the subject.");
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    alert("Message sent successfully!");

    form.reset();

});


// ================================
// DARK MODE
// ================================

// Create toggle button
const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";
darkBtn.id = "darkModeBtn";

document.body.appendChild(darkBtn);

// Style the button
Object.assign(darkBtn.style, {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    background: "#2563eb",
    color: "#fff",
    fontSize: "22px",
    boxShadow: "0 5px 15px rgba(0,0,0,.3)",
    zIndex: "999"
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    darkBtn.innerHTML = "☀️";

}

// Toggle theme
darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

        darkBtn.innerHTML = "☀️";

    } else {

        localStorage.setItem("theme", "light");

        darkBtn.innerHTML = "🌙";

    }

});


// ================================
// ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});


// ================================
// SCROLL ANIMATION
// ================================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .about-content"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s ease";

    observer.observe(card);

});