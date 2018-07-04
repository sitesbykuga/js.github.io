function forms() {	
	var sendForm = require('../parts/sendForm.js')
		, CheckInput = require('../parts/checkInput.js')
		;  
	// Обработка отправки формы
	document.body.addEventListener('submit', (event) => { 
		event.preventDefault();

		if (event.target.tagName == 'FORM'){
			sendForm(event.target);
		};

	});

	document.body.addEventListener('input', (event) => { 
		let target = event.target; 
		if (event.target.tagName == 'INPUT'){
			let inputValue = new CheckInput(target.value);
			if (target.name == 'name'){
				target.value = inputValue.checkRus();
			};
			if (target.name == 'phone'){
				target.value = inputValue.checkPhone();
			};			
		};
		if (event.target.tagName == 'TEXTAREA'){
			let inputValue = new CheckInput(target.value);			
			target.value = inputValue.checkRus();
		}

	});


};

module.exports = forms;