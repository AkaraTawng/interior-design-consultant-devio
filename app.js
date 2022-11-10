var openIcon = document.querySelector("#menu-open-icon");
var closeIcon = document.querySelector("#menu-close-icon");
var nav = document.querySelector("#nav-flex-container");
var navUl = document.querySelector("#nav-ul");
var navLi = document.querySelectorAll(".nav-li");
var navLiLink = document.querySelectorAll(".nav-li-link");


/* open hamburger menu when open icon clicked */
    openIcon.addEventListener("click", () => {
        openIcon.classList.toggle("open");
        closeIcon.classList.toggle("open");
        nav.classList.toggle("nav-open");
        navUl.classList.toggle("nav-ul-open");
        navLi.forEach(item => {
            item.classList.toggle("nav-li-open");
        });
    });

    /* close hamburger menu when close icon clicked */
    closeIcon.addEventListener("click", () => {
        openIcon.classList.toggle("open");
        closeIcon.classList.toggle("open");
        nav.classList.toggle("nav-open");
        navUl.classList.toggle("nav-ul-open");
        navLi.forEach(item => item.classList.toggle("nav-li-open"));
    });


    /* close menu when nav li clicked */
    navLi.forEach(item => {
        item.addEventListener("click", () => {
            openIcon.classList.toggle("open");
            closeIcon.classList.toggle("open");
            navUl.classList.toggle("nav-ul-open");
            nav.classList.toggle("nav-open");
            navLi.forEach(li => li.classList.toggle("nav-li-open"));
        });
    });

