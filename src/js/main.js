import dropDownMenu from "./modules/drop-down-menu"; 
import selectMenu from "./modules/select"; 

window.addEventListener('DOMContentLoaded', () => {
  dropDownMenu();
  selectMenu(".fone-select");
  selectMenu(".lang-select");
});