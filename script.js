let menuToogle = document.querySelector(".menu-btn");
let navMEnu = document.querySelector(".nav_menu");

menuToogle.addEventListener("click", () => {
  navMEnu.classList.toggle("active");
  menuToogle.classList.toggle("open");
  // menuToogle.classList.toggle("open");
});
