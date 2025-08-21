const categoryFilterInit = (filterWrapper) => {
  let filterlist = document.querySelector(filterWrapper);
  if(!filterlist) return;
  let filterElem = filterlist.querySelectorAll('.blog-category__item');
  let articleItem = document.querySelectorAll('.article-card');
  let filterLink = document.querySelectorAll('.blog-category__link');

  filterLink.forEach((link) =>{
    link.addEventListener("click", event => {
      event.preventDefault();
    });
  });

  filterElem.forEach((item) =>{
    item.addEventListener('click', (event) => {
      filterElem.forEach((elem) =>{
        if(elem.classList.contains('link-active')){
          elem.classList.remove('link-active');
        }
      });
      item.classList.add('link-active');
      articleItem.forEach((elem, i)=>{
        if(!elem.classList.contains('article-card--hidden')){
          elem.classList.add("article-card--hidden");
        }
      });
      const attributeName = item.getAttribute('data-tag')
      if(attributeName === "all"){
        articleItem.forEach((elem) =>{
          requestAnimationFrame(()=>{
            elem.classList.remove("article-card--hidden")
          })
        });
      }else{
        let resultItem = document.querySelectorAll(`.${attributeName}`);
        resultItem.forEach((elem)=>{
          requestAnimationFrame(()=>{
            elem.classList.remove("article-card--hidden");
          })
        });
      }
    });
  });
};

export {categoryFilterInit};
