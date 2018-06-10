let sysdate = document.getElementById('sysdate'),
	input1 = document.getElementById('input1'),
	input2 = document.getElementById('input2'),
	input3 = document.getElementById('input3'),
	btn = document.getElementById('btn'),
	date = new Date();

// Функция добавления '0'	
function addZero(v) {
	if (v.toString().length == 1) {
		return '0' + v;
	}
	return v;
};

sysdate.textContent += addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' 
					+ addZero(date.getSeconds()) + ' ' + addZero(date.getDate()) + '.' 
					+ addZero(date.getMonth()+1) + '.' + date.getFullYear();


// Функция получения дня недели на русском языке
function getDayName(date) {
	let dayName = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	return dayName[date.getDay()];
};					

sysdate.textContent += ', ' + getDayName(date).toLowerCase();

// Функция получения количества дней между датами
function countDay(date1, date2) {
	let vDate1 = new Date(date1),
		vDate2 = new Date(date2);
	if ((typeof(vDate1) === 'Invalid Date') || (typeof(vDate2) === 'Invalid Date')) {
		return 'Некорректные даты';
	}
	if (vDate1 > vDate2) {
		return ((vDate1 - vDate2) / 86400000);
	} else {
		return ((vDate2 - vDate1) / 86400000);
	}
}

btn.addEventListener('click', () => {
	input3.value = countDay(input1.value, input2.value);
});



