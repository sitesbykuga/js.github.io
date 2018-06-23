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
