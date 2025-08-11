const categoryFilterInit = (filterWrapper) => {
  let filterlist = document.querySelector(filterWrapper);
  if(filterlist) {
    let filterElem = filterlist.querySelectorAll('.blog-category__item');
    let articleItem = document.querySelectorAll('.article-card');
    let filterLink = document.querySelectorAll('.blog-category__link');

    filterLink.forEach((link) =>{
      link.addEventListener("click", event => {
        event.preventDefault();
      });
    });

    function removeActiveClass(){
      filterElem.forEach((elem) =>{
        if(elem.classList.contains('link-active')){
          elem.classList.remove('link-active');
        }
      });
    }

    filterElem.forEach((item) =>{
      item.addEventListener('click', (event) => {
        removeActiveClass();
        item.classList.add('link-active');
        if(item.classList.contains('link-active')){
          const attributeName = item.getAttribute('data-tag')
          if(attributeName === "all"){
            articleItem.forEach((elem) =>{
              elem.style.display = 'block';
            });
          }else{
            let resultItem = document.querySelectorAll(`.${attributeName}`);
            articleItem.forEach((e)=>{
              e.style.display = 'none';
            });
            resultItem.forEach((elem)=>{
              elem.style.display = 'block';
            });
          }
        }
      });
    });
  }
};

export {categoryFilterInit};
