const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

menuToggle.addEventListener("click", function () {
    siteNav.classList.toggle("open");
});