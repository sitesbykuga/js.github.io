var week = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
	day = new Date(); //Текущий день

for (let i = 0; i < week.length; i++) {
    // before - тег для вывода ДО дня недели
    // after - тег для вывода ПОСЛЕ дня недели
	let before = '<p>',
		after = '</p>';

	if (i > 4) {
		before = before + '<b>';
		after = '</b>' + after;
	}

	if ((i+1) == day.getDay()) {
		before = before + '<i>';
		after = '</i>' + after;
	}

	document.write(before + week[i] + after);	
}

// Функция для вычисления целых рандомных чисел в интервале от min до (max-1)
function customRandom(min, max) {
	let r = Math.floor(Math.random() * (max - min) + min);
	return r; 
}

// iThree - порядковый номер элемента в массиве arr, который будет начинаться с 3
// iSeven - порядковый номер элемента в массиве arr, который будет начинаться с 7 

var iThree = customRandom(0,7),
	iSeven = customRandom(0,7),
	arr = [];

// iThree не должен быть равен iSeven
while (iThree == iSeven) {
	iSeven = customRandom(0,7);
}

// Для проверки выводим в консоль
console.log('iThree = ' + iThree + '. iSeven = ' + iSeven);

// Задаем значения элементам массива arr
for (let i = 0; i < 7; i++) {
	
	// Минимальное значение - 10, т.к. это минимальное многозначное число. 
	// Максимальное значение - (10 в степени от 1 до 10)-1
	let n = customRandom(10,Math.pow(10,customRandom(1,11)));

	if (i == iThree) {
		n = '3' + n + '';
		console.log(i + ': число ' + n); //Для проверки 
	}

	if (i == iSeven) {
		n = '7' + n + '';
		console.log(i + ': число ' + n); //Для проверки 
	}
	
	arr[i] = n + '';
}

// Для проверки выводим массив в консоль
console.log('Массив: ' + arr);

// Выводим элементы массива, начинающиеся на 3 или 7
for (let i = 0; i < 7; i++) {
	if ((arr[i].charAt(0) == '3') || (arr[i].charAt(0) == '7')) {
		console.log(arr[i]);
	}
}
