var openIcon = document.querySelector("#menu-open-icon");
var closeIcon = document.querySelector("#menu-close-icon");
var nav = document.querySelector("#nav-flex-container");

openIcon.addEventListener("click", () => {
    openIcon.classList.toggle("open");
    closeIcon.classList.toggle("open");
    nav.classList.toggle("nav-open");
});

closeIcon.addEventListener("click", () => {
    openIcon.classList.toggle("open");
    closeIcon.classList.toggle("open");
    nav.classList.toggle("nav-open");
});


