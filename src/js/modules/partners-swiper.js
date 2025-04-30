import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const partnersSwiperInit = () => {
  const partnersSwiper = new Swiper('.partners-swiper', {
    //loop: true,
    slidesPerView: 4,
    //autoHeight: true,
    speed: 2500,
    arrows: false, 

    // autoplay: {
    //   delay: 6000,
    // },
    
    pagination: {
      el: ".partners__swiper-pagination",
      clickable: true, 
    },
  
  });
}

export default partnersSwiperInit;