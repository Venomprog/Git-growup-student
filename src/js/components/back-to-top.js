const backToTop = () => {
  const toTopArrow = document.querySelector(".footer__arrow-up");

  toTopArrow.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

export {backToTop};
