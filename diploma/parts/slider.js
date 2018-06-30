function slider () {

	let mainSliderItem = document.getElementsByClassName('main-slider-item')
		, sliderIndex = 1
		;
	
	for (let i = 0; i < mainSliderItem.length; i++){
				mainSliderItem[i].classList.add('animated');
				if (i != 0 ){
					mainSliderItem[i].style.display = 'none';
				}
			}

	let timeOut = setTimeout(() => {mainSliderItem[0].classList.add('fadeOutDown');}, 4500);

	function showSlide(){
		let timeOut = setTimeout(() => {mainSliderItem[sliderIndex-1].classList.add('fadeOutDown');}, 4500);
		sliderIndex += 1;

		if ( sliderIndex > mainSliderItem.length) {
			sliderIndex = 1;
		}		

		for (let i = 0; i < mainSliderItem.length; i++){
			mainSliderItem[i].classList.remove('fadeInDown');	
			mainSliderItem[i].classList.remove('fadeOutDown');					
			mainSliderItem[i].style.display = 'none';
		}

		mainSliderItem[sliderIndex-1].classList.add('fadeInDown');		
		mainSliderItem[sliderIndex-1].style.display = 'block';		
	};

	let timerId = setInterval(showSlide, 5000);

}; 

module.exports = slider;