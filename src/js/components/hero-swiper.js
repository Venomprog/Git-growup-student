import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const heroSwiperInit = () => {
  const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    speed: 1900,
    effect: 'fade',

    fadeEffect: {
      crossFade: true
    },

    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: ".hero__swiper-pagination",
      clickable: true,
    },

  });
};

export {heroSwiperInit};
