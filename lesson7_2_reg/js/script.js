let div = document.getElementsByTagName('div')[0];

// Функция добавления '0'	
function addZero(v) {
	if (v.toString().length == 1) {
		return '0' + v;
	}
	return v;
};

function start() {
	let timerId = setTimeout(timer, 60);

	function timer(){
		let date = new Date();
		div.textContent = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' 
		+ addZero(date.getSeconds());
		timerId = setTimeout(timer, 60);
	}
}

start();