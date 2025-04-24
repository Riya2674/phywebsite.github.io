document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});


