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
		a = prompt("Название Вашего магазина",'');
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

var time = 21,
	price = setPrice(),
	mainList = {
		finans: setFifnans(),
		shop: setNameShop().toUpperCase(),
		shopGoods: [],
		employers: {},
		open: false,
		discount: true,	
		shopItems: [],
		translate: {
			finans: 'Бюджет',
			shop: 'Название магазина',
			shopGoods: 'Типы товаров',
			employers: 'Сотрудники',
			open: 'Работаем или нет',
			discount: 'Наличие системы скидок',
			shopItems: 'Список товаров'
		}, 
		setEmployers: function setEmployers(count) {
		// Функция найма сотрудников
			for (i = 0; i < count; i++) {
				let a = null;
				//Проверка правильности ввода имени сотрудника
				do {
					if (a !== null){
						alert('Неверное имя сотрудника! Введите снова');
					}
					a = prompt("Имя сотрудника",'');
				}
				while (!checkInputString(a,50));
				employers[i] = (i+1) + ' - ' + a;
			}
		},	
		setShopGoods: function setShopGoods(count) {
		//Функция получения от пользователя типов товаров	
			for(let i = 0; i < count; i++) {
				let a = prompt("Какой тип товаров будем продавать?",'');
				if (checkInputString(a,50)) {
					shopGoods[i] = a;
				} else {
					alert('Неверный тип товаров! Введите снова');
					i--;
				}   
			}			
		}, 
		getFinansDay: function getFinansDay(fin) {
		//Функция рассчета дневного бюджета
			alert('Ваш бюджет на день составит ' + (mainList.finans/30).toFixed(2) + ' у.е.');
		},
		checkTime: function checkTime(time, timeBegin, timeEnd) {
		// Функция проверки рабочего времени
			mainList.open = false;
			if ((time >= timeBegin) && (time <= timeEnd)) {
				console.log('Время работать!');
				mainList.open = true;
			} else if ((time < 0) || (time > 24)) {
				console.log('В сутках 24 часа!');			
			} else {
				console.log('Время отдыхать!');
			}
		},
		recountPrice: function recountPrice(value) {
		// Функция рассчета стоимости товара с учетом скидки 
		// value - размер скидки в %
			if (mainList.discount) {
				price = (price*(100-value)/100).toFixed(2);
			}
		},
		setShopItems: function setShopItems() {
		//Функция получения от пользователя наименований товаров
			let a = null;
			do {
				if (a !== null){
					alert('Неверное наименование товаров! Введите снова');
				}
				a = prompt("Введите товары через запятую",'');
			}	
			while (!checkInputString(a,100));
			mainList.shopItems = a.split(',');
			a = prompt("Может быть что-то еще?",'');
			if (checkInputString(a,30)) {
				mainList.shopItems.push(a); 
			}
			// Делаем первую букву заглавной
			for (let i = 0; i<mainList.shopItems.length; i++) {
				mainList.shopItems[i] = mainList.shopItems[i].trim();
  				mainList.shopItems[i] = mainList.shopItems[i].charAt(0).toUpperCase() + mainList.shopItems[i].slice(1);
			}

			mainList.shopItems.sort();

			// Удаляем из массива пустые элементы
			let k = 0;
			for (let i = 0; i<mainList.shopItems.length; i++) {
				if (mainList.shopItems[i] == '') {
					k++;
				}
			}
			mainList.shopItems.splice(0, k);

			// Выводим список подуктов на экран
			let str = '<p> У нас вы можете купить: </p> <ul>';
			mainList.shopItems.forEach(function(element, key) {
  				str = str + '<li>'+ (key+1) + ': ' + element + '</li>';
			});
			str = str + '</ul>';
			document.getElementById("shopItems").innerHTML = str;			
		},
		getMainList: function getMainList() {
		// Функция выводит в консоль все свойства и их значения по объекту
			console.log("Наш магазин включает в себя:");
			for (let prop in mainList) {
				if ((typeof(mainList[prop]) !== 'function') && (prop != 'translate')){
					for (let propTr in mainList.translate) {
						if (prop == propTr) {
							console.log(mainList.translate[propTr] + ": " + mainList[prop]);  				
						}
					}
  				}
			}
		}
	}

mainList.setShopItems();
mainList.getMainList();

console.log(mainList);


