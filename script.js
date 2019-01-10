const ico = document.querySelector(".burger ");
const nav = document.querySelector(".naw");
ico.addEventListener("click", function () {
    ico.classList.toggle("active");
    nav.classList.toggle("show");
})