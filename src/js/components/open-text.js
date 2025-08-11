const openTextInit = () => {
  const button = document.querySelector(".blog-description__button");
  const buttonText = document.querySelector(".blog-description__link");
  const wrapper = document.querySelector(".blog-description__container");
  const overflow = document.querySelector(".blog-description__overflow");
  if(!button) return
  button.addEventListener('click', () => {
    wrapper.classList.toggle("text-active");
    overflow.style.display = 'block';
    buttonText.textContent = "pазвернуть";
    button.classList.toggle("dropdown-open");
    if(wrapper.classList.contains("text-active")){
      overflow.style.display = 'none';
      buttonText.textContent = "cвернуть";
    }
  });
}

export {openTextInit};
