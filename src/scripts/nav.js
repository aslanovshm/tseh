const navToggle = document.querySelector(".site-nav__toggle");
const navMenu = document.querySelector(".site-nav__list")

navToggle.addEventListener("click", (e) => {
  navMenu.classList.toggle("show");
})