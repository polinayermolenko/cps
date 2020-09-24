import "../scss/style.scss";

const navListLinks = document.querySelectorAll(".nav__link");
const aboutMoreButton = document.querySelector(".about-us__more-button");
const textContainer = document.querySelector(".about-us__text-container");
const openButton = document.querySelector(".header__burger");
const closeButton = document.querySelector(".menu__close-button");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

const openMenu = () => {
  menu.classList.add("menu--open");
  overlay.classList.add("overlay--active");

  openButton.removeEventListener("click", openMenuButtonClickHandler);
  overlay.addEventListener("click", overlayClickHandler);
  closeButton.addEventListener("click", closeMenuButtonClickHandler);
  document.addEventListener("keydown", escapeKeyDownHandler);
};

const openMenuButtonClickHandler = () => {
  openMenu();
 };

openButton.addEventListener("click", openMenuButtonClickHandler);

const closeMenu = () => {
  overlay.classList.remove("overlay--active");
  menu.classList.remove("menu--open");

  closeButton.removeEventListener("click", closeMenuButtonClickHandler);
  overlay.removeEventListener("click", overlayClickHandler);
  document.removeEventListener("keydown", escapeKeyDownHandler);
  openButton.addEventListener("click", openMenuButtonClickHandler);
};

const closeMenuButtonClickHandler = () => {
  closeMenu();
};

const overlayClickHandler = () => {
   closeMenu();
};

const escapeKeyDownHandler = (evt) => {
  if (evt.key === "Escape") {
    closeMenu();
  }
};

navListLinks.forEach((link) => {
      link.addEventListener("click", () => {
          navListLinks.forEach((link) => {
          if (link.classList.contains("nav__link--active")) {
            link.classList.remove("nav__link--active");
          }
        });
    
        link.classList.toggle("nav__link--active");
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