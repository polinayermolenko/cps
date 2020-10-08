const contactButtons = document.querySelectorAll(".contact-list__link--message");
const callButtons = document.querySelectorAll(".contact-list__link--phone");
const closeFeedbackButton = document.querySelector(".modal__button-close--feedback");
const closeCallButton = document.querySelector(".modal__button-close--call");
const feedbackModal = document.querySelector(".modal--feedback");
const callModal = document.querySelector(".modal--call");
const overlayModal = document.querySelector(".overlay-modal");
const overflow = document.querySelector(".overflow");

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
  overflow.classList.add("overflow--hidden");
  modalObj.modal.classList.add("modal--open");
  modalObj.buttonClose.classList.add("modal__button-close--open");
  overlayModal.classList.add("overlay-modal--active");

  modalObj.buttons.forEach((item) => {
    item.removeEventListener("click", modalObj.handlerOpen);
  });
    overlayModal.addEventListener("click", overlayClickModalHandler);
    modalObj.buttonClose.addEventListener("click", closeModalButtonClickHandler);
    document.addEventListener("keydown", escapeKeyDownModalHandler);
}

const closeModal = (modalObj) => {
  modalObj.modal.classList.remove("modal--open");
  modalObj.buttonClose.classList.remove("modal__button-close--open");
  overlayModal.classList.remove("overlay-modal--active");

  overflow.classList.remove("overflow--hidden");
  modalObj.buttonClose.removeEventListener("click", closeModalButtonClickHandler);
  overlayModal.removeEventListener("click", overlayClickModalHandler);
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
