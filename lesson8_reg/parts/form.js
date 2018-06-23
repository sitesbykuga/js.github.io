function form() {
	function sendForm(event, formName){
		event.preventDefault();
		let statusMessage = document.createElement('div');
		statusMessage.classList.add('status');
		if (formName.lastChild.tagName != 'DIV') {
			formName.appendChild(statusMessage);
		};

		let lastChild = formName.lastChild,
			message = new Object(),
			input = formName.getElementsByTagName('input');	

		message.loading = 'Загрузка...';
		message.success = 'Спасибо! Мы с Вами свяжемся!';
		message.failure = 'Упс! Что-то пошло не так...';
		
		// AJAX
		let requestContact = new XMLHttpRequest();
		requestContact.open('POST', 'server.php');
		requestContact.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');

		let formData = new FormData(formName);

		requestContact.send(formData);

		requestContact.onreadystatechange = () => {
			if (requestContact.readyState < 4){
				statusMessage.innerHTML = message.loading;
			} else if (requestContact.readyState === 4) {
				if (requestContact.status == 200 && requestContact.status < 300){
					statusMessage.innerHTML = message.success;
				}
				else {
					statusMessage.innerHTML = message.failure;
				}			
			}
		}

		for (let i = 0; i < input.length; i++){
			input[i].value = '';
		}

		setTimeout(() => {
			if (formName.lastChild.tagName === 'DIV') {
				formName.removeChild(formName.lastChild);
			}
		}, 3000);	
	};

	let form = document.getElementsByClassName('main-form')[0],
		formContact = document.getElementById('form');	
	
	// Обработка отправки формы с модального окна
	form.addEventListener('submit', (event) => {
		sendForm(event, form);		
	});

	// Обработка отправки формы с контактной формы
	formContact.addEventListener('submit', (event) => {
		sendForm(event, formContact);
	});
};

module.exports = form;
