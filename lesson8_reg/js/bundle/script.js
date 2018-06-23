window.addEventListener('DOMContentLoaded', () => {
	var calc = require('../../parts/calc.js')
		, form = require('../../parts/form.js')
		, modal = require('../../parts/modal.js')
		, slider = require('../../parts/slider.js')
		, tabs = require('../../parts/tabs.js')
		, timer = require('../../parts/timer.js')
		;


	calc();
	form();
	modal();
	slider();
	tabs();
	timer();		
});


/*
		AMD					   vs 			CommonJS

1.	Асинхронная загрузка модулей| 	Синхронная загрузка
2. 	Нужен загрузщик модуля		| 	Нужен или загрузщик, или сборщик модуля
3. 	define 						|	exports + require

*/