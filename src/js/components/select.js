const selectMenu =(select) =>{
  let selectContainer = document.querySelector(select);
  if(!selectContainer) return
  let btn = selectContainer.querySelector(".drop-down__title");
  let items = selectContainer.querySelectorAll(".drop-down__link");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      btn.innerText = item.innerText;
    });
  });
}

export {selectMenu};
