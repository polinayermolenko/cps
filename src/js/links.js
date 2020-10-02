const navListLinks = document.querySelectorAll(".nav__link");
const aboutMoreButton = document.querySelector(".about-us__more-button");
const textContainer = document.querySelector(".about-us__text-container");
const brandMoreButton = document.querySelector(".segment__more-button--brand");
const brandContainer = document.querySelector(".brand-list");
const deviceMoreButton = document.querySelector(".segment__more-button--device");
const deviceContainer = document.querySelector(".device-list");

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

  brandMoreButton.addEventListener("click", () => {
    if (brandMoreButton.innerText === "Показать все") {
      brandMoreButton.innerText = "Скрыть";
      brandMoreButton.classList.add("more-button--less");
      brandContainer.classList.add("brand-list--full");
    } else {
      brandMoreButton.innerText = "Показать все";
      brandMoreButton.classList.remove("more-button--less");
      brandContainer.classList.remove("brand-list--full");
    }
  });

  deviceMoreButton.addEventListener("click", () => {
    if (deviceMoreButton.innerText === "Показать все") {
      deviceMoreButton.innerText = "Скрыть";
      deviceMoreButton.classList.add("more-button--less");
      deviceContainer.classList.add("device-list--full");
    } else {
      deviceMoreButton.innerText = "Показать все";
      deviceMoreButton.classList.remove("more-button--less");
      deviceContainer.classList.remove("device-list--full");
    }
  });