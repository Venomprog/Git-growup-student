const accordion = () => {
  let allTitles = document.querySelectorAll('.accordion__head');
  let allElems = document.querySelectorAll('.accordion__body');

  allElems.forEach((bodyElem)=>{
    bodyElem.classList.add('accordion__body--hidden')
  });

  allTitles.forEach((elem)=>{
    elem.addEventListener('click', function(){
      let parentElem = this.parentNode;
      let contentBlock = parentElem.querySelector('.accordion__body');

      if(contentBlock.classList.contains("accordion__body--hidden")) {
        elem.classList.add("accordion__head--active");
        contentBlock.classList.remove('accordion__body--hidden');
      }
      else {
        elem.classList.remove("accordion__head--active");
        contentBlock.classList.add('accordion__body--hidden');
      }
    });
  });
};

export {accordion};
