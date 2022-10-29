var openIcon = document.querySelector("#menu-open-icon");
var closeIcon = document.querySelector("#menu-close-icon");
openIcon.addEventListener("click", () => {
    openIcon.classList.toggle("open");
    closeIcon.classList.toggle("open");
});

closeIcon.addEventListener("click", () => {
    openIcon.classList.toggle("open");
    closeIcon.classList.toggle("open");
});


