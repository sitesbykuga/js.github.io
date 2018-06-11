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
let btnOpen = document.getElementById('open-btn'),
nameValue = document.getElementsByClassName('name-value')[0],
budgetValue = document.getElementsByClassName('budget-value')[0],
goodsValue = document.getElementsByClassName('goods-value')[0],
itemsValue = document.getElementsByClassName('items-value')[0],
employersValue = document.getElementsByClassName('employers-value')[0],
discountValue = document.getElementsByClassName('discount-value')[0],
isopenValue = document.getElementsByClassName('isopen-value')[0],

goodsItem = document.getElementsByClassName('goods-item'),
btnGoods = document.getElementsByTagName('button')[1],
btnDayBudget = document.getElementsByTagName('button')[2],
btnEmployers = document.getElementsByTagName('button')[3],	
chooseItem = document.querySelector('.choose-item'),
timeValue = document.querySelector('.time-value'),
countBudgetValue = document.querySelector('.count-budget-value'),
hireEmployersItem = document.querySelectorAll('.hire-employers-item');

var time = 21,
	//price = setPrice(),
	mainList = {
		finans: null,
		shop: null,
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
		recountPrice: function recountPrice(value) {
			// Функция рассчета стоимости товара с учетом скидки 
			// value - размер скидки в %
			if (mainList.discount) {
				price = (price*(100-value)/100).toFixed(2);
			}
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
};

setDisabledBtnGoods();
setDisabledBtnEmployers();
setDisabledIfShopClose();

// Обработка нажатия на кнопку "Открыть магазин"
btnOpen.addEventListener('click', () => {
	clearInput();

	mainList.finans = setFifnans();
	budgetValue.innerHTML = mainList.finans;

	mainList.shop = setNameShop().toUpperCase();
	nameValue.textContent = mainList.shop;

	let obj = {},
		arr = [];
	mainList.shopGoods = arr;
	mainList.employers = obj;
	mainList.open = false;
	mainList.shopItems = arr;

	

	// Дискотная система. 
	// Если бюджет больше 10к, то система работает, иначе - не работает 
	let color = 'red';	
	mainList.discount = false;
	if (mainList.finans >= 10000) {
		mainList.discount = true;
		color = 'green';
	};
	discountValue.style.backgroundColor = color;
	
	setDisabledIfShopClose();
});	

// обработка ввода категорий товаров
goodsItem[0].addEventListener('change', () => {
		setDisabledBtnGoods();
});
goodsItem[1].addEventListener('change', () => {
		setDisabledBtnGoods();
});
goodsItem[2].addEventListener('change', () => {
		setDisabledBtnGoods();
});
goodsItem[3].addEventListener('change', () => {
		setDisabledBtnGoods();
});


// Обработка нажатия на кнопку "Утвердить" категории товаров
btnGoods.addEventListener('click', () => {	
	shopGoods = [];
	for(let i = 0; i < goodsItem.length; i++) {
		let a = goodsItem[i].value;
		if (checkInputString(a,50)) {
			shopGoods.push(a);
		}  
	};
	goodsValue.textContent = shopGoods.join(', ');	
});

// Обработка ввода продуктов
chooseItem.addEventListener('change', () => {
	let a = chooseItem.value;
	if (checkInputString(a,100)){
		let array = a.split(',');
		// Делаем первую букву заглавной, остальные - строчными
		// Определяем массив mainList.shopItems
		for (let i = 0; i<array.length; i++) {
			array[i] = array[i].trim();
			if (array[i] != '') {					
				array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
				mainList.shopItems.push(array[i]);
			}
		}
		mainList.shopItems.sort();
		itemsValue.textContent = mainList.shopItems.join(', ');			
	}	
});

// Обработка ввода времени
timeValue.addEventListener('change', () => {
	let time = +(timeValue.value);
	if ((time >= 8) && (time <= 22)) {
		mainList.open = true;
	} else if ((time < 0) || (time > 24)) {
		alert('В сутках 24 часа!');	
		mainList.open = false;		
	} else {
		mainList.open = false;
	}

	let color = 'red';
	if (mainList.open) {
		color = 'green';
	}
	isopenValue.style.backgroundColor = color;	
});

// Рассчет дневного бюджета
btnDayBudget.addEventListener('click', () => {
	if (isNaN(mainList.finans) || mainList.finans == null) { 
		countBudgetValue.value = 'Бюджет не задан. Откройте магазин';
	} else {
		countBudgetValue.value = (mainList.finans/30).toFixed(2);
	}
});

// Обработка ввода имен сотрудников
hireEmployersItem[0].addEventListener('input', () =>{
	let a  = hireEmployersItem[0].value.charAt(hireEmployersItem[0].value.length-1);
	if (a != a.match(/[а-яА-ЯёЁ]/g)) {
		hireEmployersItem[0].value = hireEmployersItem[0].value.slice(0,-1);
	}
	setDisabledBtnEmployers();
});
hireEmployersItem[1].addEventListener('input', () =>{
	let a  = hireEmployersItem[1].value.charAt(hireEmployersItem[1].value.length-1);
	if (a != a.match(/[а-яА-ЯёЁ]/g)) {
		hireEmployersItem[1].value = hireEmployersItem[1].value.slice(0,-1);
	}
	setDisabledBtnEmployers();
});
hireEmployersItem[2].addEventListener('input', () =>{
	let a  = hireEmployersItem[2].value.charAt(hireEmployersItem[2].value.length-1);
	if (a != a.match(/[а-яА-ЯёЁ]/g)) {
		hireEmployersItem[2].value = hireEmployersItem[2].value.slice(0,-1);
	}
	setDisabledBtnEmployers();
});

// Обработка нажатии кнопки "Нанять"
btnEmployers.addEventListener('click', () => {
	mainList.employers = {};
	let str = '';
	for (let i = 0; i < hireEmployersItem.length; i++) {
		let a = hireEmployersItem[i].value;
		if (checkInputString(a,50)) {
			a = a.trim();
			if (a != '') {					
				a = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
				mainList.employers[i] = a;
			}			
		}
	}
	for (key in mainList.employers) {
		str += mainList.employers[key] + ', ';
	}
	employersValue.textContent = str.slice(0, -2);	
});

function setDisabledIfShopClose() {
	for (let i = 0; i < goodsItem.length; i++) {
			goodsItem[i].disabled = (mainList.finans == null);
		}	
	chooseItem.disabled = (mainList.finans == null);
	timeValue.disabled = (mainList.finans == null);
	
	for (let i = 0; i < hireEmployersItem.length; i++) {
			hireEmployersItem[i].disabled = (mainList.finans == null);
	}	
	countBudgetValue.disabled = true;
	btnDayBudget.disabled = (mainList.finans == null);
}

function setDisabledBtnGoods() {
	let bool = false;
	for (let i = 0; i < goodsItem.length; i++) {
		if(goodsItem[i].value != '') {
			bool = true;
		}
	}
	btnGoods.disabled = !bool;
	if (!bool) {
		arr = [];
		mainList.shopGoods = arr;
		goodsValue.textContent = '';
	}
}

function setDisabledBtnEmployers() {
	let bool = false;
	for (let i = 0; i < hireEmployersItem.length; i++) {
		if(hireEmployersItem[i].value != '') {
			bool = true;
		}
	}
	btnEmployers.disabled = !bool;
	if (!bool) {
		obj = {};
		mainList.employers = obj;
		employersValue.textContent = '';
	}
}

function clearInput() {
	for (let i = 0; i < goodsItem.length; i++) {
			goodsItem[i].value = '';
		}	
	chooseItem.value = '';
	timeValue.value = '';
	countBudgetValue.value = '';
	
	for (let i = 0; i < hireEmployersItem.length; i++) {
			hireEmployersItem[i].value = '';
	}	
	countBudgetValue.textContent = '';
	goodsValue.textContent = '';
	itemsValue.textContent = '';
	employersValue.textContent = '';
	isopenValue.style.backgroundColor = 'red';

}

mainList.getMainList();





