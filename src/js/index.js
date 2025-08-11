import 'lazysizes'
import 'virtual:svg-icons-register'
import {fixedHeader} from "../pug/blocks/header/header.js";
import {dropDownMenu} from "./components/drop-down-menu";
import {selectMenu} from "./components/select";
import {accordion} from "./components/accordion";
import {mobileMenu} from "./components/mobile-menu.js";
import {openModals} from "./components/modal.js";
import {formInit} from "./components/form.js";
import {partnersSwiperInit} from "./components/partners-swiper";
import {categoryFilterInit} from "./components/category-filter";
import {openTextInit} from "./components/open-text";
import {videoJsInit} from "./components/custоm-video";
import {heroSwiperInit} from "./components/hero-swiper";
import {backToTop} from "./components/back-to-top";
import {fullScreenVideoInit} from "./components/full-screen-video";

import '../styles/style.scss'

document.addEventListener('DOMContentLoaded', function () {
  commonFunction()
})

export const commonFunction = () => {
  fixedHeader();
  openModals();
  dropDownMenu();
  heroSwiperInit();
  partnersSwiperInit();
  selectMenu(".phone-select");
  selectMenu(".lang-select");
  selectMenu(".drop-down__filter");
  accordion();
  mobileMenu(".burger-button-768",".mobile-menu-768");
  backToTop();
  formInit();
  categoryFilterInit('.blog-category__filter');
  categoryFilterInit('.drop-down__filter');
  openTextInit();
  videoJsInit();
  fullScreenVideoInit()
}
