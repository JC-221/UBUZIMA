// Toggle mobile menu
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

// Smooth scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}