import videojs from 'video.js';
import 'video.js/dist/video-js.css'
const videoJsInit =() =>{
  let player = videojs(document.querySelector('.about-video__item'));   
}

export default videoJsInit;