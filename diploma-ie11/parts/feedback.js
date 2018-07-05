'use strict';

function feedback() {

	var prev = document.getElementsByClassName('main-prev-btn')[0],
	    next = document.getElementsByClassName('main-next-btn')[0],
	    sliderItems = document.getElementsByClassName('feedback-slider-item'),
	    sliderIndex = 1,
	    nowSlide = sliderIndex;

	for (var i = 0; i < sliderItems.length; i++) {
		sliderItems[i].classList.add('animated');
		if (i != 0) {
			sliderItems[i].style.display = 'none';
		}
	}

	function showSlide(n, direction) {

		if (n > sliderItems.length) {
			sliderIndex = 1;
		}

		if (n < 1) {
			sliderIndex = sliderItems.length;
		}
		var classAnimate = ['slideInLeft', 'slideInRight'],
		    classDirection = 'slideInLeft';

		if (direction == 'left') {
			classDirection = 'slideInRight';
		}

		for (var _i = 0; _i < sliderItems.length; _i++) {
			sliderItems[_i].classList.remove(classAnimate[0]);
			sliderItems[_i].classList.remove(classAnimate[1]);
			sliderItems[_i].style.display = 'none';
		}
		sliderItems[sliderIndex - 1].classList.add(classDirection);
		sliderItems[sliderIndex - 1].style.display = 'block';
	};

	function plusSlide(n) {
		clearInterval(timerIDf);
		var direction = 'left';
		if (n < 0) {
			direction = 'right';
		}
		showSlide(sliderIndex += n, direction);
		timerIDf = setInterval(function () {
			showSlide(sliderIndex += 1, 'left');
		}, 5000);
	};

	prev.addEventListener('click', function () {
		plusSlide(-1);
	});

	next.addEventListener('click', function () {
		plusSlide(1);
	});

	var timerIDf = setInterval(function () {
		plusSlide(1);
	}, 5000);
};

module.exports = feedback;