const burger = document.querySelector(".fa-bars");
const nav = document.querySelector(".header__nav_list");

burger.addEventListener("click", () => {
  nav.classList.toggle("show");
})