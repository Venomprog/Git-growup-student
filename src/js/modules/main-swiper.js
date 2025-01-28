import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const mainSwiperInit = () => {
  const mainSwiper = new Swiper('.hero-swiper', {
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    speed: 2500,
    arrows: false,
    effect: 'fade',

    fadeEffect: {  
      crossFade: true     
    }, 

    autoplay: {
      delay: 6000,
    },
    
    pagination: {
      el: ".hero__swiper-pagination",
      clickable: true,
    },
  
  });
}

export default mainSwiperInit;
