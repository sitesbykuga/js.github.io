'use strict';

function burger() {
	var btnBurger = document.getElementsByClassName('burger')[0],
	    menuBurger = document.getElementById('burger-menu-main'),
	    menuHeader = document.getElementsByClassName('header-menu')[0],
	    imgBurger = document.querySelectorAll('.burger > img')[0],
	    spanBurger = document.querySelectorAll('.burger > span')[0];
	window.addEventListener('resize', function () {
		if (this.innerWidth < 769) {
			menuHeader.style.display = 'none';
		} else {
			menuHeader.style.display = 'block';
		}
	});
	btnBurger.style.display = 'block';
	menuHeader.style.display = 'block';
	menuBurger.style.display = 'none';

	function showMenuBurger(event) {
		console.log(event.target);
		console.log(btnBurger);
		console.log(imgBurger);
		console.log(spanBurger);
		if (event.target == btnBurger || event.target == imgBurger || event.target == spanBurger) {
			if (menuBurger.style.display == 'none') {
				menuBurger.style.display = 'block';
			} else if (menuBurger.style.display == 'block') {
				menuBurger.style.display = 'none';
			}
		} else {
			menuBurger.style.display = 'none';
		}
	};

	document.body.addEventListener('click', function (event) {
		showMenuBurger(event);
	});
	document.body.addEventListener('tap', function (event) {
		showMenuBurger(event);
	});
};

module.exports = burger;