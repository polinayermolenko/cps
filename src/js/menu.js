const openButton = document.querySelector(".header__burger");
const closeButton = document.querySelector(".menu__close-button");
const menu = document.querySelector(".menu");
const overlayMenu = document.querySelector(".overlay-menu");
const overlayMod = document.querySelector(".overlay-modal");

const openMenu = () => {
    menu.classList.add("menu--open");
    overlayMenu.classList.add("overlay-menu--active");
    document.body.style.overflow = "hidden";
    openButton.removeEventListener("click", openMenuButtonClickHandler);
    overlayMenu.addEventListener("click", overlayClickHandler);
    closeButton.addEventListener("click", closeMenuButtonClickHandler);
    document.addEventListener("keydown", escapeKeyDownHandler);
  };

const closeMenu = () => {
    overlayMenu.classList.remove("overlay-menu--active");
    menu.classList.remove("menu--open");
  
    document.body.style.overflow = "visible";
    closeButton.removeEventListener("click", closeMenuButtonClickHandler);
    overlayMenu.removeEventListener("click", overlayClickHandler);
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
    if (evt.key === "Escape" && overlayMod.classList.contains("overlay-modal--active")) {
      menu.style.backdrop = "static";
      menu.style.keybord = "false";
    }
    if (evt.key === "Escape" && !overlayMod.classList.contains("overlay-modal--active")) {
      closeMenu();
    }
};

openButton.addEventListener("click", openMenuButtonClickHandler);
