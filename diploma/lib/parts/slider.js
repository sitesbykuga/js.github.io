'use strict';

function slider() {

	var mainSliderItem = document.getElementsByClassName('main-slider-item'),
	    sliderIndex = 1;

	for (var i = 0; i < mainSliderItem.length; i++) {
		mainSliderItem[i].classList.add('animated');
		if (i != 0) {
			mainSliderItem[i].style.display = 'none';
		}
	}

	var timeOut = setTimeout(function () {
		mainSliderItem[0].classList.add('fadeOutDown');
	}, 4500);

	function showSlide() {
		var timeOut = setTimeout(function () {
			mainSliderItem[sliderIndex - 1].classList.add('fadeOutDown');
		}, 4500);
		sliderIndex += 1;

		if (sliderIndex > mainSliderItem.length) {
			sliderIndex = 1;
		}

		for (var _i = 0; _i < mainSliderItem.length; _i++) {
			mainSliderItem[_i].classList.remove('fadeInDown');
			mainSliderItem[_i].classList.remove('fadeOutDown');
			mainSliderItem[_i].style.display = 'none';
		}

		mainSliderItem[sliderIndex - 1].classList.add('fadeInDown');
		mainSliderItem[sliderIndex - 1].style.display = 'block';
	};

	var timerId = setInterval(showSlide, 5000);
};

module.exports = slider;