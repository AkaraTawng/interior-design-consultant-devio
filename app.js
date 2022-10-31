var openIcon = document.querySelector("#menu-open-icon");
var closeIcon = document.querySelector("#menu-close-icon");
var nav = document.querySelector("#nav-flex-container");
var navUl = document.querySelector("#nav-ul");
var navLi = document.querySelectorAll(".nav-li")




openIcon.addEventListener("click", () => {
    openIcon.classList.toggle("open");
    closeIcon.classList.toggle("open");
    nav.classList.toggle("nav-open");
    navUl.classList.toggle("nav-ul-open");
    navLi.forEach(item => {
        item.classList.toggle("nav-li-open");
    })
});

closeIcon.addEventListener("click", () => {
    openIcon.classList.toggle("open");
    closeIcon.classList.toggle("open");
    nav.classList.toggle("nav-open");
    navUl.classList.toggle("nav-ul-open");
    navLi.forEach(item => {
        item.classList.toggle("nav-li-open");
    })
});




