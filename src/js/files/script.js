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

document.addEventListener("click", documentActions);
function documentActions(e) {
	const targetElement = e.target;
	
	if(targetElement.closest('.form__action-btn')) {
		const itemForm = targetElement.closest('.form__item')
		const input = itemForm.querySelector('.input')
		if (targetElement.closest('.form__action-btn')  && input.hasAttribute('disabled')){
			targetElement.innerText = 'Сохранить';
			input.removeAttribute('disabled');
			console.log(targetElement.innerText);
		} else {
			if (targetElement.closest('.form__action-btn') && !input.hasAttribute('disabled')){
			targetElement.innerText = 'Изменить'
			input.setAttribute('disabled', '')
			}
		}
	}

	if(targetElement.closest('.menu__top')){
		targetElement.classList.add('_open')
	} 
	if(!targetElement.closest('.menu__top')) {
		console.log(123);
		document.querySelector('._open') ? document.querySelector('._open').classList.remove('_open') : null
	}
}