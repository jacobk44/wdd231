const menuButton = document.getElementById("menu");
const navList = document.querySelector(".navigation");

menuButton.addEventListener("pointerdown", () =>{
    navList.classList.toggle("show");
    menuButton.classList.toggle("show");
});