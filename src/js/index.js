import "../scss/style.scss";

const navListLinks = document.querySelectorAll(".nav__link");
const aboutMoreButton = document.querySelector(".about-us__more-button");
const textContainer = document.querySelector(".about-us__text-container");

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