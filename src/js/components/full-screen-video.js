const fullScreenVideoInit =() =>{
  const videoWrappers = document.querySelectorAll(".video-block-poster");
  const wrapper = document.querySelector(".wrapper-overlay");
  const closeButton = document.querySelector(".video-close");
  const body = document.querySelector("body");
  let video;

  if(!videoWrappers) return;
  videoWrappers.forEach(item => {
    item.addEventListener('click', function (event) {
      body.classList.add("hidden-scroll");
      wrapper.classList.add("wrapper-overlay--active")
      video = document.createElement('div');
      video.classList.add("video-item");
      let videoSrc = event.target.getAttribute('data-video');
      video.innerHTML = `<video class="main-video__item full-screen-video" preload="none" controls autoplay="1" > <source src="${videoSrc}" type="video/mp4"><p>Ваш браузер не поддерживает встроеннoе видео.</p>`;
      item.parentNode.appendChild(video, event.target);
      closeButton.classList.add("video-close--active");
      console.log("создать");
      closeButton.addEventListener("click", () => {
        body.classList.remove("hidden-scroll");
        wrapper.classList.remove("wrapper-overlay--active")
        video.remove()
        closeButton.classList.remove("video-close--active");
      });
    })
  })

  window.addEventListener('click', function (e) {
    if(!document.querySelector(".video-item")) return
    console.log(e.target);
    if(!e.target.closest('.main-video__item') && e.target !== video.previousElementSibling) {
      body.classList.remove("hidden-scroll");
      wrapper.classList.remove("wrapper-overlay--active")
      video.remove()
      closeButton.classList.remove("video-close--active");
    }
  });
};

export {fullScreenVideoInit};
