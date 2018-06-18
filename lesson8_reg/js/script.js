window.addEventListener('DOMContentLoaded', () => {
	
// >>>>>>>> 8 урок <<<<<<<<<<<
	let deadline = '2018-06-18 21:47:00';

	// Функция добавления '0'	
	function addZero(v) {
		if (v.toString().length == 1) {
			return `0 + ${v}`; // >>>>>>>> ES6 <<<<<<<<<<<
		}
		return v;
	};

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = addZero(Math.floor((t/1000) % 60)),
			minutes = addZero(Math.floor((t/1000/60)%60)),
			hours = addZero(Math.floor((t/1000/60/60)));
		
		if (Date.parse(endtime) <=  Date.parse(new Date())) {
			hours = minutes = seconds = '00';
			t = 0;
		} 
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(className, endtime){
		let timer = document.querySelectorAll(`#${className} > span`); // >>>>>>>> ES6 <<<<<<<<<<<
			function updateClock() {			
				let t = getTimeRemaining(endtime);	
				timer[0].innerHTML = t.hours;
				timer[2].innerHTML = t.minutes;
				timer[4].innerHTML = t.seconds;	

				if (t.total == 0){
					clearInterval(timeInterval);
				}												
			};
		let timeInterval = setInterval(updateClock, 1000);			
	};
	setClock('timer', deadline);


	let info = document.getElementsByClassName('info')[0],
		tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		more = document.querySelector('.more'),
	 	overlay = document.querySelector('.overlay'),
	 	popupClose = document.querySelector('.popup-close');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		} 
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}		
	}

	function showPopup(){
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	info.addEventListener('click', (event) => { // >>>>>>>> ES6 <<<<<<<<<<<
		let target = event.target;

		// Обработчик отображения таба
		if (target.className == 'info-header-tab'){
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
// >>>>>>>> 9 урок <<<<<<<<<<<
		// Обработчик вызова модального окна из таба
		if (target.className == 'description-btn'){
			target.classList.add('more-splash');
			setTimeout(showPopup, 200);
		}
	});

	// Обработчик вызова модального окна
	more.addEventListener('click', function() {
		this.classList.add('more-splash'); // >>>>>>>> ES6 <<<<<<<<<<<
		setTimeout(showPopup, 200);		
	});

	// Обработчик закрытия модального окна
	popupClose.addEventListener('click', () => { // >>>>>>>> ES6 <<<<<<<<<<<
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';	
	});
});