const formInit =() =>{
  const formList = document.querySelectorAll('form');
  const inputElems = document.querySelectorAll('input');
  if(formList){
    let activateButton = () =>{
      formList.forEach(form =>{
        let formElems = form.querySelectorAll('input, textarea');
        formElems.forEach(formElem =>{
          formElem.addEventListener('input', () => {
            let IsValid = true
            let sentButton = form.querySelector(".button");
            sentButton.disabled = true;
            formElems.forEach(item => {
              if(!item.validity.valid || item.value == ""){
                IsValid = false;
              }
            });
            if(IsValid){
              sentButton.disabled = false;
            }
          });
        });
      });
    };

    activateButton()

    inputElems.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        let error = inputElement.parentElement.nextElementSibling;
        if(!inputElement.validity.valid){
          if(inputElement.classList.contains('plone-input')){
            error.textContent = 'Введи корректный номер телефона'
          }else if(inputElement.classList.contains('email-input')){
            error.textContent = 'Введи корректный email';
          }else if(inputElement.classList.contains('name-input')){
            error.textContent = 'Введи корректное имя';
          }
          error.style.display = "block";
        }

        if(inputElement.value === ""){
          error.style.display = "none";
        }

        if(inputElement.validity.valid){
          error.style.display = "none";
        }

        inputElement.addEventListener('input', () => {
          inputElement.setCustomValidity('');
        });
      });
    });
  }
};

export {formInit};
