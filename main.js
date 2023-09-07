const navbarToggleBtn = document.querySelector(".navbar-toggle-btn");
const nav = document.querySelector("nav");
const navbarToggleBtnIcons = document.querySelectorAll(".navbar-toggle-btn i");

navbarToggleBtn.addEventListener("click", () => {
  nav.classList.toggle("d-flex");
  navbarToggleBtnIcons.forEach((icon) => {
    icon.classList.toggle("d-flex");
  });
});
