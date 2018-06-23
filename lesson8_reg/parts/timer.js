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