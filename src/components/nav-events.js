const hamburger = document.querySelector(".NavHamburger");
const navLinks = document.querySelector(".NavContent");
const links = document.querySelectorAll("NavContent li");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
});