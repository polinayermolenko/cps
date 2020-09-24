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

const closeMenu = () => {
    overlay.classList.remove("overlay--active");
    menu.classList.remove("menu--open");
  
    closeButton.removeEventListener("click", closeMenuButtonClickHandler);
    overlay.removeEventListener("click", overlayClickHandler);
    document.removeEventListener("keydown", escapeKeyDownHandler);
    openButton.addEventListener("click", openMenuButtonClickHandler);
  }; 
  
  
const openMenuButtonClickHandler = () => {
    openMenu();
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

openButton.addEventListener("click", openMenuButtonClickHandler);
  
  
  
  