import dropDownMenu from "./modules/drop-down-menu"; 
import selectMenu from "./modules/select"; 
import mainSwiperInit from "./modules/main-swiper";

window.addEventListener('DOMContentLoaded', () => {
  dropDownMenu();
  selectMenu(".fone-select");
  selectMenu(".lang-select");
  mainSwiperInit();
});