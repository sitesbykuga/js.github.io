'use strict';

var countGift = 0,
    openModal = 0,
    countOpenModal = 0;

function popup(element, btnClassName) {
	var displayState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;

	var viewElement = require('../parts/viewElement.js');

	var popupWin = element;

	function showPopup() {
		if (countGift < count || count == -1) {
			popupWin.style.display = 'block';
			document.body.style.overflow = 'hidden';
			if (displayState == 'none') {
				var btn = document.getElementsByClassName(btnClassName);
				for (var i = 0; i < btn.length; i++) {
					btn[i].style.display = 'none';
				};
			};
			if (count != -1) {
				countGift++;
			};
			openModal++;
			countOpenModal++;
		};
	};

	function closePopup() {
		popupWin.style.display = 'none';
		document.body.style.overflow = '';

		var input = popupWin.getElementsByTagName('input'),
		    textarea = popupWin.getElementsByTagName('textarea');
		for (var i = 0; i < input.length; i++) {
			input[i].value = '';
		};
		for (var _i = 0; _i < textarea.length; _i++) {
			textarea[_i].value = '';
		};
		openModal--;
	};

	document.body.addEventListener('click', function (event) {
		if (event.target.classList.contains(btnClassName)) {
			popupWin = element;
			showPopup();
		};
	});

	popupWin.addEventListener('click', function (event) {
		if (event.target.classList.contains('popup-close') || this == event.target) {
			closePopup();
		}
	});

	window.addEventListener('scroll', function () {
		var footer = document.getElementById('footer');
		if (countOpenModal == 0 && viewElement(footer) && element == document.getElementsByClassName('popup-gift')[0]) {
			showPopup();
		}
	});

	setTimeout(function () {
		if (openModal == 0) {
			popupWin = document.getElementsByClassName('popup-consultation')[0];
			showPopup();
		}
	}, 60000);
};

module.exports = popup;