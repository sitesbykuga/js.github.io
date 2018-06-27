(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"../../parts/calc.js":2,"../../parts/form.js":3,"../../parts/modal.js":4,"../../parts/slider.js":5,"../../parts/tabs.js":6,"../../parts/timer.js":7}],2:[function(require,module,exports){
function calc() {
	let inputPeople = document.getElementsByClassName('counter-block-input')[0]
		, inputDay = document.getElementsByClassName('counter-block-input')[1]
		, selectBase = document.getElementById('select')
		, spanTotal = document.getElementById('total')
		, countPeople = 0
		, countDay = 0
		, base = 1
		, total = 0
		;
	const rate = 4999;

	spanTotal.innerHTML = total;

	inputPeople.addEventListener('change', function() {
		countPeople = this.value;
		countTotal();
	});

	inputDay.addEventListener('change', function() {
		countDay = this.value;
		countTotal();
	});

	// Запрет ввода букв и символов 'eE', '+', '-', '.', ',' 
	/*inputPeople.onkeypress = function(event) {
	    if (event.ctrlKey || event.altKey || event.metaKey) return;
	    let chr = getChar(event);
	    if (chr == null) return;
      	if (chr < '0' || chr > '9') {
        	return false;
    	}
    }*/

   /* inputDay.onkeypress = function(event) {
	    if (event.ctrlKey || event.altKey || event.metaKey) return;
	    let chr = getChar(event);
	    if (chr == null) return;
      	if (chr < '0' || chr > '9') {
        	return false;
    	}
    }

    function getChar(event) {
    	if (event.which == null) {
        	if (event.keyCode < 32) return null;
        	return String.fromCharCode(event.keyCode) // IE
      	}
      	if (event.which != 0 && event.charCode != 0) {
        	if (event.which < 32) return null;
        	return String.fromCharCode(event.which) // остальные
      	}
      	return null; // специальная клавиша    
    }*/

    /* Реализация ввода только цифр, с той "особенностью", 
    	про которую написала в комментах на платформе*/
    	
function checkD(str){
  let a  = str.charAt(str.length-1);
    if (a != a.match(/\d/g)) {
      str = str.slice(0,-1);
    }
    return str; 
  };

	inputPeople.addEventListener('input', function() {
		this.value = checkD(this.value);
		console.log(1)
	});
	inputDay.addEventListener('input', function() {
		this.value = checkD(this.value);
	});
	selectBase.addEventListener('change', function() {
		for (let i = 0; i < this.options.length; i ++) {
			if (this.options[i].selected){	
				base = this.options[i].value;
				break;
			}
		}
		countTotal();
	});

	function countTotal() {
		if (inputPeople.value !='' && inputDay.value !='') {
			total = Math.round(countPeople * countDay * rate * base);
			let str = total.toString(),
				s = '';
			for (let i = 0; i < str.length; i++){
				s += str.charAt(i);
				if ((str.length - i - 1)%3 == 0){
					s += ' ';	
				}
			}
			spanTotal.innerHTML = s;
		} else {
			total = 0;
			spanTotal.innerHTML = total;
		}
	}
};

module.exports = calc;

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
function slider() {
	let prev = document.getElementsByClassName('prev')[0],
		next = document.getElementsByClassName('next')[0],
		sliderItems = document.getElementsByClassName('slider-item'),
		dots = document.getElementsByClassName('dot'),
		dotsWrap = document.getElementsByClassName('slider-dots')[0],
		sliderIndex = 1;

	showSlide(sliderIndex);

	function showSlide(n){
		if ( n > sliderItems.length) {
			sliderIndex = 1;
		}

		if ( n < 1) {
			sliderIndex = sliderItems.length;
		}

		for (let i = 0; i < sliderItems.length; i++){
			sliderItems[i].style.display = 'none';
		}

		for (let i = 0; i < dots.length; i++){
			dots[i].classList.remove('dot-active');
		}

		sliderItems[sliderIndex-1].style.display = 'block';
		dots[sliderIndex-1].classList.add('dot-active');
	};

	function plusSlide(n){
		showSlide(sliderIndex += n);
	};

	prev.addEventListener('click', () => {
		plusSlide(-1);
	});

	next.addEventListener('click', () => {
		plusSlide(1);
	});

	function currentSlide(n){
		showSlide(sliderIndex = n);
	};

	dotsWrap.addEventListener('click', (event) => {
		for (let i = 0; i < dots.length+1; i++){
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});
};

module.exports = slider;

},{}],6:[function(require,module,exports){
function tabs() {
	let info = document.getElementsByClassName('info')[0],
		tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent');

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
	});
};

module.exports = tabs;

},{}],7:[function(require,module,exports){
function timer () {
	let deadline = '2018-06-18 21:47:00';

	// Функция добавления '0'	
	function addZero(v) {
		if (v.toString().length == 1) {
			return `0${v}`; // >>>>>>>> ES6 <<<<<<<<<<<
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
};

module.exports = timer;
},{}]},{},[1]);
