const fixedHeader = () => {
  const header = document.querySelector(".header");
  window.addEventListener('scroll', function() {
    if(pageYOffset >= 10){
      header.classList.add("header--bg-color");
    }else{
      header.classList.remove("header--bg-color");
    }
  });
}

export {fixedHeader};
