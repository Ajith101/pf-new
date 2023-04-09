let menuToogle = document.querySelector(".menu-btn");
let navMEnu = document.querySelector(".nav_menu");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav ul li a");
let navlinksOne = document.querySelector(".nav_links");

menuToogle.addEventListener("click", () => {
  navMEnu.classList.toggle("active");
  menuToogle.classList.toggle("open");
  // menuToogle.classList.toggle("open");
});

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMEnu.classList.remove("active");
    menuToogle.classList.remove("open");
  });
});

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let hieght = sec.offsetHeight;
    let id = sec.getAttribute(`id`);
    if (top >= offset && top < offset + hieght) {
      navlinks.forEach((links) => {
        links.classList.remove(`active`);
        document
          .querySelector(`header a[href*=` + id + `]`)
          .classList.add("active");
      });
    }
  });
};
