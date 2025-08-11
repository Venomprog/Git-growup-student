import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const partnersSwiperInit = () => {
  const partnersSwiper = new Swiper(".partners-swiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    speed: 2500,
    arrows: false,

    pagination: {
      el: ".partners__swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 30
      },
    }
  });
}

export {partnersSwiperInit};
