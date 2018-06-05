// Функция проверки ввода строкового значения.
// На входе: строка, длина строки
function checkInputString(str, len) {
	if ((typeof str === 'string') && isNaN(+str) && !(typeof str === null) && (str != '') && (str.length < len)) {
		return true;	
	} else {
		return false;
	}
}

// Фуннкция получения величины бюджета от пользователя
function setFifnans() {
	let a = null;
	//Проверка правильности ввода величины бюджета 	
	do {
		if (a !== null){
			alert('Неверная величина бюджета! Введите снова');
		}
		a = +prompt("Ваш бюджет на месяц", 1000);
	}
	while (!(typeof a === 'number') || (typeof a === null) || (isNaN(a)) || (a == ''));
	return a;
}

// Фуннкция получения наименования магазина от пользователя
function setNameShop() {
	let a = null;
	//Проверка правильности ввода названия магазина
	do {
		if (a !== null){
			alert('Неверное название магазина! Введите снова');
		}
		a = prompt("Название Вашего магазина");
	}
	while (!checkInputString(a,50));
	return a; 
}

// Функция получения стоимости товара
function setPrice() {
	let a = null;
	//Проверка правильности ввода величины бюджета 	
	do {
		if (a !== null){
			alert('Неверная величина стоимости товара! Введите снова');
		}
		a = +prompt("Чему равна стоимость товара?", 100);
	}
	while (!(typeof a === 'number') || (typeof a === null) || (isNaN(a)) || (a == ''));
	return a;
}

// Функция найма сотрудников
function setEmployers(count) {
	let obj = {};
	
	for (i = 0; i < count; i++) {
		let a = null;
		//Проверка правильности ввода имени сотрудника
		do {
			if (a !== null){
				alert('Неверное имя сотрудника! Введите снова');
			}
			a = prompt("Имя сотрудника");
		}
		while (!checkInputString(a,50));
	obj[i] = (i+1) + ' - ' + a;
	}

	return obj; 
}

var time = 21,
	price = setPrice(),
	mainList = {
		finans: setFifnans(),
		shop: setNameShop().toUpperCase(),
		shopGoods: [],
		employers: setEmployers(4),
		open: false,
		discount: true
	};

//Функция получения от пользователя типов товаров
function setShopGoods(count, array) {	
	for(let i = 0; i < count; i++) {
		a = prompt("Какой тип товаров будем продавать?");
		if (checkInputString(a,50)) {
			array[i] = a;
		} else {
			alert('Неверный тип товаров! Введите снова');
			i--;
		}   
	}
}
setShopGoods(3, mainList.shopGoods);

//Функция рассчета дневного бюджета
function getFinansDay(fin) {
	alert('Ваш бюджет на день составит ' + (fin/30).toFixed(2) + ' у.е.');
}
getFinansDay(mainList.finans);

// Функция проверки рабочего времени
function checkTime(time, timeBegin, timeEnd) {
	if ((time >= timeBegin) && (time <= timeEnd)) {
		console.log('Время работать!');
	} else if ((time < 0) || (time > 24)) {
		console.log('В сутках 24 часа!');
	} else {
		console.log('Время отдыхать!');
	}
}
checkTime(time, 8, 22);

function recountPrice(price, discount, value) {
	if (discount) {
		price = (price - price*value/100).toFixed(2);
	}
	return price;
}
price = recountPrice(price, mainList.discount, 20);
console.log(price);

console.log(mainList);
//Реализация цикла while
/*let i = 0;
while (i < 5){
	a = prompt("Какой тип товаров будем продавать?");	
	if (testInputString(a,50)){
		mainList.shopGoods[i] = a;
		i++;
	} else {
		alert('Неверный тип товаров! Введите снова');
	}
}*/

//Реализация цикла do ... while
/*let i = 0;
do {
	a = prompt("Какой тип товаров будем продавать?");
	if (testInputString(a,50)){
		mainList.shopGoods[i] = a;
		i++;
	} else {
		alert('Неверный тип товаров! Введите снова');
	}
}
while (i < 5);*/

