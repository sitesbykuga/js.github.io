function sendForm(formElement) {

	var checkInput = require('../parts/popup.js')
		; 
	
	let statusMessage = document.createElement('div')
		, message = {		
			loading: 'Идет отправка сообщения...',
			success: 'Спасибо! Мы с Вами свяжемся!',
			failure: 'Ошибка! Что-то пошло не так...'
		}
		, requestContact = new XMLHttpRequest()
		, formData = new FormData(formElement)
		;
	
	// AJAX
	requestContact.open('POST', 'server.php');
	requestContact.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
	requestContact.send(formData);
	
	let parentElement = formElement.parentNode;
	parentElement.appendChild(statusMessage);

	requestContact.onreadystatechange = () => {
		if (requestContact.readyState < 4){
			statusMessage.innerHTML = `<p class=p-heading>${message.loading}</p>`;
		} else if (requestContact.readyState === 4) {
			if (requestContact.status == 200 && requestContact.status < 300){
				statusMessage.innerHTML = `<p class=p-heading>${message.success}</p>`;
			}
			else {
				statusMessage.innerHTML = `<p class=p-heading>${message.failure}</p>`;
			}			
		}
	}

	formElement.style.display = 'none';

	setTimeout(() => {
		parentElement.removeChild(statusMessage); 
		formElement.style.display = 'block';
		let input = formElement.getElementsByTagName('input')
			, textarea = formElement.getElementsByTagName('textarea')
			;
		for (let i = 0; i < input.length; i++){
			input[i].value = '';
		};
		for (let i = 0; i < textarea.length; i++){
			textarea[i].value = '';
		}

	}, 3000);		
};

module.exports = sendForm;
