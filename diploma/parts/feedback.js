function feedback () {

	let prev = document.getElementsByClassName('main-prev-btn')[0]
		, next = document.getElementsByClassName('main-next-btn')[0]
		, sliderItems = document.getElementsByClassName('feedback-slider-item')
		, sliderIndex = 1		
		;

	for (let i = 0; i < sliderItems.length; i++){
			sliderItems[i].classList.add('animated');
			if (i != 0 ){
				sliderItems[i].style.display = 'none';
			}
		}
	
	let timeOutf = setTimeout(() => {sliderItems[0].classList.add('slideOutLeft');}, 4500);

	function showSlide(n){
		if ( n > sliderItems.length) {
			sliderIndex = 1;
		}

		if ( n < 1) {
			sliderIndex = sliderItems.length;
		}		
		let timeOutf = setTimeout(() => {sliderItems[sliderIndex-1].classList.add('slideOutLeft');}, 4500);
		for (let i = 0; i < sliderItems.length; i++){
			sliderItems[i].classList.remove('slideInRight');	
			sliderItems[i].classList.remove('slideOutLeft');	
			sliderItems[i].style.display = 'none';
		}

		sliderItems[sliderIndex-1].classList.add('slideInRight');
		sliderItems[sliderIndex-1].style.display = 'block';


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

	let timerIDf = setInterval(() => {plusSlide(1);}, 5000);

}; 

module.exports = feedback;