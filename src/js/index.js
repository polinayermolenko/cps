import "../scss/style.scss";

const navListLinks = document.querySelectorAll(".nav__link");
const aboutMoreButton = document.querySelector(".about-us__more-button");
const textContainer = document.querySelector(".about-us__text-container");
const openButton = document.querySelector(".header__burger");
const closeButton = document.querySelector(".menu__close-button");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

const onOverlayClick = () => {
  overlay.classList.remove("overlay--active");
  if (menu.classList.contains("menu--open")) {
    menu.classList.remove("menu--open");
  }   
};

openButton.addEventListener("click", () => {
  menu.classList.add("menu--open");
  overlay.classList.add("overlay--active");

  overlay.addEventListener("click", (evt) => {
    onOverlayClick(evt);
  });
});

closeButton.addEventListener("click", () => {
  menu.classList.remove("menu--open");
  overlay.classList.remove("overlay--active");

  document.removeEventListener("click", onOverlayClick);
});

navListLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navListLinks.forEach((link) => {
        if (link.classList.contains("nav__link--active")) {
          link.classList.remove("nav__link--active");
        }
      });
  
      link.classList.add("nav__link--active");
    });
  });
  
aboutMoreButton.addEventListener("click", () => {
    if (aboutMoreButton.innerText === "Читать далее") {
      aboutMoreButton.innerText = "Скрыть";
      aboutMoreButton.classList.add("more-button--less");
      textContainer.classList.add("about-us__text-container--full");
    } else {
      aboutMoreButton.innerText = "Читать далее";
      aboutMoreButton.classList.remove("more-button--less");
      textContainer.classList.remove("about-us__text-container--full");
    }
  });