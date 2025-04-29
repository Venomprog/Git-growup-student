import 'lazysizes'
import 'virtual:svg-icons-register'
import dropDownMenu from "./components/drop-down-menu";
import selectMenu from "./components/select";
import accordion from "./components/accordion";
import mobileMenu from "./components/mobile-menu.js";
import openModals from "./components/modal.js";
import formInit from "./components/form.js";
import partnersSwiperInit from "./components/partners-swiper";
import categoryFilterInit from "./components/category-filter";
import openTextInit from "./components/open-text";
import videoJsInit from "./components/custum-video";
import heroSwiperInit from "./components/hero-swiper";
import backToTop from "./components/back-to-top";

import '../styles/style.scss'

document.addEventListener('DOMContentLoaded', function () {
  commonFunction()
})

export const commonFunction = () => {
  openModals()
  dropDownMenu();
  heroSwiperInit();
  partnersSwiperInit();
  selectMenu(".fone-select");
  selectMenu(".lang-select");
  selectMenu(".drop-down__filter");
  accordion();
  mobileMenu(".burger-button-768",".mobile-menu-768");
  mobileMenu(".burger-button-320",".mobile-menu-320");
  backToTop();
  formInit();
  categoryFilterInit('.blog-category__filter');
  categoryFilterInit('.drop-down__filter');
  openTextInit();
  videoJsInit();
}
