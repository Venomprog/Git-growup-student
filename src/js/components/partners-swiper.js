import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const partnersSwiperInit = () => {
  const partnersSwiper = new Swiper(".partners-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 2500,
    arrows: false,

    pagination: {
      el: ".partners__swiper-pagination",
      clickable: true,
    },
  });
}

export default partnersSwiperInit;
