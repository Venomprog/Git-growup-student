const videoJsInit =() =>{
  const videoWrappers = document.querySelectorAll(".video-poster-wrapper");
  if(!videoWrappers) return;
  videoWrappers.forEach(item => {
    item.addEventListener('click', function (event) {
      let video = document.createElement('div');
      let videoSrc = event.target.getAttribute('data-video');
      video.innerHTML = `<video class="main-video__item" preload="none" controls autoplay="1" > <source src="${videoSrc}" type="video/mp4"><p>Ваш браузер не поддерживает встроеннoе видео.</p>`;
      item.parentNode.replaceChild(video, event.target);
      console.log(event.target);
    })
  })
}

export {videoJsInit};
