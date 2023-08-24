// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let tel = document.querySelectorAll('input[type="tel"]');
let maskOptions = {
	mask: "+7(999)999-99-99",
	
}
let im = new Inputmask(tel, maskOptions);
im.mask(tel, maskOptions);