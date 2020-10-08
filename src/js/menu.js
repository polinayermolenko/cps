const openButton = document.querySelector(".header__burger");
const closeButton = document.querySelector(".menu__close-button");
const menu = document.querySelector(".menu");
const overlayMenu = document.querySelector(".overlay-menu");
const overlayMod = document.querySelector(".overlay-modal");
const overflow = document.querySelector(".overflow");
const feedbackModal = document.querySelector(".modal--feedback");
const callModal = document.querySelector(".modal--call");

const openMenu = () => {
    menu.classList.add("menu--open");
    overlayMenu.classList.add("overlay-menu--active");
    overflow.classList.add("overflow--hidden");
    openButton.removeEventListener("click", openMenuButtonClickHandler);
    overlayMenu.addEventListener("click", overlayClickHandler);
    closeButton.addEventListener("click", closeMenuButtonClickHandler);
    document.addEventListener("keydown", escapeKeyDownHandler);
  };

const closeMenu = () => {
    overlayMenu.classList.remove("overlay-menu--active");
    menu.classList.remove("menu--open");
    overflow.classList.remove("overflow--hidden");
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
  if ( (evt.key === "Escape" && callModal.classList.contains("modal--open")) || (evt.key === "Escape" && feedbackModal.classList.contains("modal--open")) ) {
    return;
  }
  if ( (evt.key === "Escape" && !callModal.classList.contains("modal--open")) || (evt.key === "Escape" && !feedbackModal.classList.contains("modal--open")) ) {
    closeMenu();
  }
}

openButton.addEventListener("click", openMenuButtonClickHandler);
