window.addEventListener('DOMContentLoaded', () => {
	
	// Назначаем дедлайн
	let deadline = '2018-06-17 21:30:00';

	// Функция добавления '0'	
	function addZero(v) {
		if (v.toString().length == 1) {
			return '0' + v;
		}
		return v;
	};

	// Вычисляем разницу
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = addZero(Math.floor((t/1000) % 60)),
			minutes = addZero(Math.floor((t/1000/60)%60)),
			hours = addZero(Math.floor((t/1000/60/60)));
		
		if (Date.parse(endtime) <=  Date.parse(new Date())) {
			hours = minutes = seconds = '00';
			total = 0;
		} 
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	// Функция таймера
	function setClock(id, endtime){
		let timer = document.getElementById(id),
			hours = document.querySelector('.hours'),
			minutes = document.querySelector('.minutes'),
			seconds = document.querySelector('.seconds'),
			t = getTimeRemaining(endtime);
			
			function updateClock() {				
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;
				t = getTimeRemaining(endtime);
				timeInterval = setInterval(updateClock, 1000);
			};			
			
			if (t.total != 0) {
				let timeInterval = setInterval(updateClock, 1000);
			}
			updateClock();			
	};

	setClock('timer', deadline);

	let info = document.getElementsByClassName('info-header')[0],
		tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent');

	// Функция скрытия таба
	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		} 
	}

	hideTabContent(1);

	// Функция отображения таба
	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}		
	}

	// Обработчик клика по табу
	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab'){
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

	let more = document.querySelector('.more'),
	 	overlay = document.querySelector('.overlay'),
	 	popupClose = document.querySelector('.popup-close');

	// Обработчик вызова модального окна
	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	// Обработчик закрытия модального окна
	popupClose.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';	
	});
});