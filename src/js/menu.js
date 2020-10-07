const openButton = document.querySelector(".header__burger");
const closeButton = document.querySelector(".menu__close-button");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

const openMenu = () => {
    menu.classList.add("menu--open");
    overlay.classList.add("overlay--active");
  
    
    // document.body.style.height= "100%";
    // document.body.style.width = "100%";
    // document.body.style.position = "fixed";
    document.body.style.overflow = "hidden";
    openButton.removeEventListener("click", openMenuButtonClickHandler);
    overlay.addEventListener("click", overlayClickHandler);
    closeButton.addEventListener("click", closeMenuButtonClickHandler);
    document.addEventListener("keydown", escapeKeyDownHandler);
  };

const closeMenu = () => {
    overlay.classList.remove("overlay--active");
    menu.classList.remove("menu--open");
  
    document.body.style.overflow = "visible";
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

// нужно ли выносить в отдельный файл модалки? 
// я для них использую функцию closeMenu
// при отрытом меню слева сайта, пользователь может нажать на кнопки "Заказать зонок" и "Обратная связь", т. е.
// нужно воспользоваться функцией closeMenu и закрыть меню прежде чем открыть модалки 

// вариант оптимизации модалок
const contactButtons = document.querySelectorAll(".contact-list__link--message");
const callButtons = document.querySelectorAll(".contact-list__link--phone");
const closeFeedbackButton = document.querySelector(".modal__button-close--feedback");
const closeCallButton = document.querySelector(".modal__button-close--call");
const feedbackModal = document.querySelector(".modal--feedback");
const callModal = document.querySelector(".modal--call");

const call = {
  modal: callModal,
  buttonClose: closeCallButton,
  buttons: callButtons,
  handlerOpen: openCallButtonClickHandler,
}

const feedback = {
  modal: feedbackModal,
  buttonClose: closeFeedbackButton,
  buttons: contactButtons,
  handlerOpen: openFeedbackButtonClickHandler,
}


const openModal = (modalObj) => {
  if (menu.classList.contains("menu--open")) {
    closeMenu();
  }
  document.body.style.overflow = "hidden";
  modalObj.modal.classList.add("modal--open");
  modalObj.buttonClose.classList.add("modal__button-close--open");
  overlay.classList.add("overlay--active");
  

  modalObj.buttons.forEach((item) => {
    item.removeEventListener("click", modalObj.handlerOpen);
  });
    overlay.addEventListener("click", overlayClickModalHandler);
    modalObj.buttonClose.addEventListener("click", closeModalButtonClickHandler);
    document.addEventListener("keydown", escapeKeyDownModalHandler);
}

const closeModal = (modalObj) => {
  modalObj.modal.classList.remove("modal--open");
  modalObj.buttonClose.classList.remove("modal__button-close--open");
  overlay.classList.remove("overlay--active");

  document.body.style.overflow = "visible";
  modalObj.buttonClose.removeEventListener("click", closeModalButtonClickHandler);
  overlay.removeEventListener("click", overlayClickModalHandler);
  document.removeEventListener("keydown", escapeKeyDownModalHandler);
  modalObj.buttons.forEach((item) => {
    item.addEventListener("click", modalObj.handlerOpen);
  });
}


const openCallButtonClickHandler = () => {
  openModal(call);
};

const openFeedbackButtonClickHandler = () => {
  openModal(feedback);
};

const closeModalButtonClickHandler = () => {
  closeModal(feedback);
  closeModal(call);
}

const overlayClickModalHandler = () => {
  closeModal(feedback);
  closeModal(call);
};

const escapeKeyDownModalHandler = (evt) => {
 if (evt.key === "Escape") {
  closeModal(feedback);
  closeModal(call);
}
}

contactButtons.forEach((item) => {
  item.addEventListener("click", () => openFeedbackButtonClickHandler(feedback));
  });

callButtons.forEach((item) => {
  item.addEventListener("click", () => openCallButtonClickHandler(call));
  });


// без оптимизации
// const openModalFeedback = () => {
//     if (menu.classList.contains("menu--open")) {
//     closeMenu();
//   }

//   feedback.classList.add("modal--open");
//   closeFeedbackButton.classList.add("modal__button-close--open");
//   overlay.classList.add("overlay--active");
  

//   contactButtons.forEach((item) => {
//     item.removeEventListener("click", openFeedbackButtonClickHandler);
//   });
//     overlay.addEventListener("click", overlayClickFeedbackHandler);
//     closeFeedbackButton.addEventListener("click", closeFeedbackButtonClickHandler);
//     document.addEventListener("keydown", escapeKeyDownFeedbackHandler);
// }


// const closeModalFeedback = () => {
//   feedback.classList.remove("modal--open");
//   closeFeedbackButton.classList.remove("modal__button-close--open");
//   overlay.classList.remove("overlay--active");

//   closeFeedbackButton.removeEventListener("click", closeFeedbackButtonClickHandler);
//   overlay.removeEventListener("click", overlayClickFeedbackHandler);
//   document.removeEventListener("keydown", escapeKeyDownFeedbackHandler);
//   contactButtons.forEach((item) => {
//     item.addEventListener("click", openFeedbackButtonClickHandler);
//   });
// }

// const openFeedbackButtonClickHandler = () => {
//   openModalFeedback();
// };

// const closeFeedbackButtonClickHandler = () => {
//   closeModalFeedback();
// }

// const overlayClickFeedbackHandler = () => {
//   closeModalFeedback();
// };

// const escapeKeyDownFeedbackHandler = (evt) => {
//  if (evt.key === "Escape") {
//    closeModalFeedback();
//  }
// };

// contactButtons.forEach((item) => {
//   item.addEventListener("click", openFeedbackButtonClickHandler);
// });


// const openModalCall = () => {
//   if (menu.classList.contains("menu--open")) {
//   closeMenu();
// }

// call.classList.add("modal--open");
// closeCallButton.classList.add("modal__button-close--open");
// overlay.classList.add("overlay--active");


// callButtons.forEach((item) => {
//   item.removeEventListener("click", openCallButtonClickHandler);
// });
//   overlay.addEventListener("click", overlayClickCallHandler);
//   closeCallButton.addEventListener("click", closeCallButtonClickHandler);
//   document.addEventListener("keydown", escapeKeyDownCallHandler);
// }


// const closeModalCall = () => {
// call.classList.remove("modal--open");
// closeCallButton.classList.remove("modal__button-close--open");
// overlay.classList.remove("overlay--active");

// closeCallButton.removeEventListener("click", closeCallButtonClickHandler);
// overlay.removeEventListener("click", overlayClickCallHandler);
// document.removeEventListener("keydown", escapeKeyDownCallHandler);
// callButtons.forEach((item) => {
//   item.addEventListener("click", openCallButtonClickHandler);
// });
// }

// const openCallButtonClickHandler = () => {
// openModalCall();
// };

// const closeCallButtonClickHandler = () => {
// closeModalCall();
// }

// const overlayClickCallHandler = () => {
// closeModalCall();
// };

// const escapeKeyDownCallHandler = (evt) => {
// if (evt.key === "Escape") {
//  closeModalCall();
// }
// };

// callButtons.forEach((item) => {
// item.addEventListener("click", openCallButtonClickHandler);
// });


