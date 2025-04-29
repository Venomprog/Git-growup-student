import videojs from 'video.js';
import 'video.js/dist/video-js.css'
const videoJsInit =() =>{
  const videos = document.querySelectorAll("video");
  if(videos.length != 0){
    let player = videojs(document.querySelector('.video'));

    player.on("ended", function () {
      this.currentTime(0);
    });

    player.on('ready', ()=>{
      videos.forEach(item => {
        item.addEventListener('play', function(event) {
          videos.forEach(elem => {
            if (elem != event.target) elem.pause();
          });
        });
      });
    });
  }
};

export default videoJsInit;
