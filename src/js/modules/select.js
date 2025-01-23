const selectMenu =(select) =>{

  let selectContainer = document.querySelector(select);
  let btn = selectContainer.querySelector(".drop-down__title");
  let items = selectContainer.querySelectorAll(".drop-down__text");
  console.log(items);
  items.forEach((item) => {
    item.addEventListener("click", () => {
      btn.innerText = item.innerText;
    });
  });         
}
    
  export default selectMenu