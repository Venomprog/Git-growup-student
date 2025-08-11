const openModals =() =>{
  const openButtons = document.querySelectorAll(".modal-open");
  const body = document.querySelector("body");
  if(!openButtons) return
  openButtons.forEach(openButton => {
    openButton.addEventListener("click", () => {
      let wrapperSelector = openButton.getAttribute('data-modal-btn');
      const modalWrapper = document.querySelector(`[data-modal="${wrapperSelector}"]`);
      console.log(openButton);
      const modal = modalWrapper.querySelector(".modal");
      const closeButton = modalWrapper.querySelector(".modal__close");
      modal.classList.add("is-open");
      body.classList.add("hidden-scroll");
      modalWrapper.classList.add("modal-wrapper--active");

      closeButton.addEventListener("click", () => {
        modal.classList.remove("is-open");
        body.classList.remove("hidden-scroll");
        modalWrapper.classList.remove("modal-wrapper--active");
        modalWrapper.classList.remove("modal-wrapper--active");
      });
    });
  });
};

export {openModals};
