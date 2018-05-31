/*Функция проверки ввода строкового значения.
	На входе: строка, длина строки
*/
function testInputString(str, len) {
	if ((typeof str === 'string') && !(typeof str === null) && (str != '') && (a.length < len)) {
		return true;	
	} else {
		return false;
	}
}

var a = null;

//Проверка правильности ввода величины бюджета 	
do {
	if (a !== null){
		alert('Неверная величина бюджета! Введите снова');
	}
	a = +prompt("Ваш бюджет на месяц", 1000);
}
while (!(typeof a === 'number') || (typeof a === null) || (isNaN(a)) || (a == ''));
var finansLimit = a;

//Проверка правильности ввода названия магазина
a = null;
do {
	if (a !== null){
		alert('Неверное название магазина! Введите снова');
	}
	a = prompt("Название Вашего магазина");
}
while (!testInputString(a,50));
var nameShop = a,
	mainList = {
		finans: finansLimit,
		shop: nameShop,
		shopGoods: [],
		employers: {},
		open: false
	}

	
for(let i = 0; i < 5; i++) {
	a = prompt("Какой тип товаров будем продавать?");
	if (testInputString(a,50)) {
		mainList.shopGoods[i] = a;
	} else {
		alert('Неверный тип товаров! Введите снова');
		i--;
	}   
}

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

isNaN(mainList.finans) ? alert('Вы ввели некорректный бюджет') : alert('Ваш бюджет на день составит ' + (mainList.finans/30).toFixed(2) + ' у.е.');

console.log(mainList);