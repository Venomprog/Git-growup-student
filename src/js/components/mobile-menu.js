const mobileMenu =(buttonSelector, menuSelector,) =>{
  const burger = document.querySelector(buttonSelector);
  const nav = document.querySelector(menuSelector);
  const navLinks = document.querySelectorAll(".mobile-menu__item");
  const modalWrapper = document.querySelector(".modal-wrapper");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    body.classList.toggle("hidden-scroll");
    modalWrapper.classList.toggle("modal-wrapper--active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ""; 
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });
  });
};

export {mobileMenu};
