const formInit =() =>{
  const formsList = document.querySelectorAll('form');
  const inputElems = document.querySelectorAll('input');
  if(!formsList) return;
  formsList.forEach(form =>{
    let formElems = form.querySelectorAll('input, textarea');
    let sentButton = form.querySelector(".button");
    form.addEventListener('submit', (event) => {
      formElems.forEach(formElem =>{
        let errorMessage = formElem.parentElement.nextElementSibling;
        if(formElem.value === "" || !formElem.validity.valid){
          if(formElem.value === ""){
            errorMessage.textContent = 'Заполни это поле';
          }else{
            if(formElem.classList.contains('plone-input')){
              errorMessage.textContent = 'Введи корректный номер телефона'
            }else if(formElem.classList.contains('email-input')){
              errorMessage.textContent = 'Введи корректный email';
            }else if(formElem.classList.contains('name-input')){
              errorMessage.textContent = 'Введи корректное имя';
            }
          }
          errorMessage.style.display = "block";
          formElem.classList.add("standart-input--invalid")
          event.preventDefault();
        }else{
          formElem.classList.add("standart-input--valid")
        }
        window.addEventListener('click', function (e) {
          if(e.target !== sentButton && formElem.value === "") {
            errorMessage.style.display = "none";
            if(formElem.classList.contains('standart-input--invalid')){
              formElem.classList.remove("standart-input--invalid")
            }else if(formElem.classList.contains('standart-input--valid')){
              formElem.classList.remove("standart-input--valid")
            }
          }
        });

        formElem.addEventListener('input', () => {
          if(formElem.value == ""){
            if(formElem.classList.contains('standart-input--invalid')){
              formElem.classList.remove("standart-input--invalid")
              errorMessage.style.display = "none";
            }else if(formElem.classList.contains('standart-input--valid')){
              formElem.classList.remove("standart-input--valid")
            }
          }
        });
      })
    })
  });

  inputElems.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      inputElement.addEventListener('input', () => {
        inputElement.setCustomValidity('');
      });
    });
  });

};

export {formInit};
