function modal() {
	function showPopup(){
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	let more = document.querySelector('.more')
		, overlay = document.querySelector('.overlay')
		, info = document.getElementsByClassName('info')[0]
		, popupClose = document.querySelector('.popup-close');
	// Обработчик вызова модального окна c кнопки
	more.addEventListener('click', function() {
		this.classList.add('more-splash'); // >>>>>>>> ES6 <<<<<<<<<<<
		setTimeout(showPopup, 200);		
	});
	
	info.addEventListener('click', (event) => { // >>>>>>>> ES6 <<<<<<<<<<<
		let target = event.target;
		// Обработчик вызова модального окна из таба
		if (target.className == 'description-btn'){
			setTimeout(showPopup, 200);
		}
	});

	// Обработчик закрытия модального окна
	popupClose.addEventListener('click', () => { // >>>>>>>> ES6 <<<<<<<<<<<
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
		if (form.statusMessage) {
			form.removeChild(statusMessage);
		}
	});
};

module.exports = modal;
