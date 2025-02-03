import dropDownMenu from "./modules/drop-down-menu"; 
import selectMenu from "./modules/select"; 
import mainSwiperInit from "./modules/main-swiper";
import partnersSwiperInit from "./modules/partners-swiper";
import accordion from "./modules/accordion";
import videoJsInit from "./modules/custum-video.js";

window.addEventListener('DOMContentLoaded', () => {
  dropDownMenu();
  selectMenu(".fone-select");
  selectMenu(".lang-select");
  mainSwiperInit();
  partnersSwiperInit();
  videoJsInit()
  accordion();
});