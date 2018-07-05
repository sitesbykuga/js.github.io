function feedback () {

	let prev = document.getElementsByClassName('main-prev-btn')[0]
		, next = document.getElementsByClassName('main-next-btn')[0]
		, sliderItems = document.getElementsByClassName('feedback-slider-item')
		, sliderIndex = 1	
		, nowSlide = sliderIndex	
		;

	for (let i = 0; i < sliderItems.length; i++){
			sliderItems[i].classList.add('animated');
			if (i != 0 ){
				sliderItems[i].style.display = 'none';
			}
		}
	

	function showSlide(n, direction){

		if ( n > sliderItems.length) {
			sliderIndex = 1;
		}

		if ( n < 1) {
			sliderIndex = sliderItems.length;
		}
		let classAnimate = ['slideInLeft', 'slideInRight']
			, classDirection = 'slideInLeft'
			;

		if (direction == 'left'){
			classDirection = 'slideInRight';
		}

		for (let i = 0; i < sliderItems.length; i++){
			sliderItems[i].classList.remove(classAnimate[0]);	
			sliderItems[i].classList.remove(classAnimate[1]);	
			sliderItems[i].style.display = 'none';
		}
		sliderItems[sliderIndex-1].classList.add(classDirection);
		sliderItems[sliderIndex-1].style.display = 'block';
	};

	function plusSlide(n){
		clearInterval(timerIDf);		
		let direction = 'left';
		if (n < 0) {
			direction = 'right'
		}
		showSlide(sliderIndex += n, direction);
		timerIDf = setInterval(() => {showSlide(sliderIndex += 1, 'left');}, 5000);	
	};

	prev.addEventListener('click', () => {
		plusSlide(-1);
	});

	next.addEventListener('click', () => {
		plusSlide(1);

	});

	let timerIDf = setInterval(() => {plusSlide(1);}, 5000);

}; 

module.exports = feedback;