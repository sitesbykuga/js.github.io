'use strict';

function forms() {
	var sendForm = require('../parts/sendForm.js'),
	    CheckInput = require('../parts/checkInput.js');
	// Обработка отправки формы
	document.body.addEventListener('submit', function (event) {
		event.preventDefault();

		if (event.target.tagName == 'FORM') {
			sendForm(event.target);
		};
	});

	document.body.addEventListener('input', function (event) {
		var target = event.target;
		if (event.target.tagName == 'INPUT') {
			var inputValue = new CheckInput(target.value);
			if (target.name == 'name') {
				target.value = inputValue.checkRus();
			};
			if (target.name == 'phone') {
				target.value = inputValue.checkPhone();
			};
			if (target.name == 'message') {
				target.value = inputValue.checkRusPlus();
			};
		};
		if (event.target.tagName == 'TEXTAREA') {
			var _inputValue = new CheckInput(target.value);
			target.value = _inputValue.checkRusPlus();
		}
	});
};

module.exports = forms;