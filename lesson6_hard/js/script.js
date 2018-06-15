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

function checkRus(str){
	let a  = str.charAt(str.length-1);
	if (a != a.match(/[а-яА-ЯёЁ]/g)) {
		str = str.slice(0,-1);
	}
	return str; 
};

function checkD(str){
	let a  = str.charAt(str.length-1);
	if (a != a.match(/\d/g)) {
		str = str.slice(0,-1);
	}
	return str; 
};

let btnOpen = document.getElementById('open-btn'),
openSignboard = document.getElementById('open-signboard'),
nameValue = document.getElementsByClassName('name-value')[0],
editBtnMain = document.getElementById('edit-btn-main'),
budgetValue = document.getElementById('budget-value'),
timeValue = document.getElementsByClassName('time-value')[0],
timeEdit = document.getElementsByClassName('time-edit')[0],
sale = document.getElementsByClassName('sale')[0],
timeBegin = document.getElementById('time-begin'),
timeEnd = document.getElementById('time-end'),
discountCheck = document.getElementById('discount-check'),
saleValue = document.getElementsByClassName('sale-value')[0],
inputSaleValue = document.getElementById('input-sale-value'),
saveMain = document.getElementsByClassName('save-main')[0],
saveBtnMain = document.getElementById('save-btn-main'),
editBtnGoods = document.getElementById('edit-btn-goods'),
btnGoods = document.querySelectorAll('.btn-goods'),
deleteBtnGoods = document.getElementsByClassName('delete-btn-goods'),
goodsValuer = document.getElementsByClassName('goods-valuer'),
toogle = document.getElementsByClassName('toogle')[0],
btnSaveDiv = document.getElementsByClassName('btn-save-div')[0],
inputGoods = document.getElementById('input-goods'),
editGoods = document.querySelectorAll('.edit-goods'),
deleteBtn = document.querySelectorAll('.delete-btn'),
addBtnGoods = document.getElementById('add-btn-goods'),
saveBtnGoods = document.getElementById('save-btn-goods'),
editBtnItems = document.getElementById('edit-btn-items'),
itemsList = document.querySelectorAll('.items-list'),
itemsValue = document.querySelectorAll('.items-value'),
itemsGoodsName = document.querySelectorAll('.items-goods-name'),
itemsName = document.getElementsByClassName('items-name'),
itemsPrice = document.getElementsByClassName('items-price'),
itemsValueEdit = document.getElementsByClassName('items-value-edit')[0],
inputItemsName = document.querySelectorAll('.input-items-name'),
inputItemsPrice = document.querySelectorAll('.input-items-price'),
selectGoodsList = document.querySelectorAll('.select-goods-list'),
deleteBtnItems = document.getElementsByClassName('delete-btn-items'),
addBtnItems = document.getElementById('add-btn-items'),
saveBtnItems = document.getElementById('save-btn-items'),
editBtnEmployers = document.getElementById('edit-btn-employers'),
employersValue = document.querySelectorAll('.employers-value'),
employersValueEdit = document.getElementsByClassName('employers-value-edit')[0],
employersName = document.getElementsByClassName('employers-name'),
deleteBtnEmployers = document.querySelectorAll('.delete-btn-employers'),
saveBtnEmployers = document.getElementById('save-btn-employers'),
addBtnEmployers = document.getElementById('add-btn-employers'),
items = document.getElementsByClassName('items');


var mainList = {
		finans: null,
		shop: null,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false,
		sale: 0,
		time: {
			timeBegin: '09:30',
			timeEnd: '22:00'
		},
		shopItems: {
			itemsShopGoods: null,
			name: null,
			price: 0,
		},
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

openPage();

// Обработка нажатия на кнопку "Открыть магазин"
btnOpen.addEventListener('click', () => {
	editMainSetting();
	clearInput();

	let obj = {},
		arr = [];
	mainList.shopGoods = arr;
	mainList.employers = obj;
	mainList.open = false;
	mainList.shopItems = arr;
	mainList.sale = null;

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
/*btnDayBudget.addEventListener('click', () => {
	if (isNaN(mainList.finans) || mainList.finans == null) { 
		countBudgetValue.value = 'Бюджет не задан. Откройте магазин';
	} else {
		countBudgetValue.value = (mainList.finans/30).toFixed(2);
	}
	countBudgetValue.disabled = false;
});*/

/*countBudgetValue.onkeypress = function(e) {
	return false;
};*/







function clearInput() {
	itemsName = document.getElementsByClassName('items-name');
	itemsPrice = document.getElementsByClassName('items-price');
	employerName = document.getElementsByClassName('items-list');
	btnGoods = document.getElementsByClassName('btn-goods');

	budgetValue.value = '';
	nameValue.value = '';
	timeValue.value = '';
	inputSaleValue.value = 0;
	
	for (let i = 0; i < itemsName.length; i++) {
			itemsName[i].value = '';
	}	
	for (let i = 0; i < itemsPrice.length; i++) {
			itemsPrice[i].value = '';
	}
	for (let i = 0; i < employerName.length; i++) {
			employerName[i].value = '';
	}
	for (let i = 0; i < btnGoods.length; i++) {
			btnGoods[i].value = '';
	}
	
	discountCheck.checked = false;


}

function setStyleInputDisabledTrue(element) {
	element.disabled = true;
	element.style.color = '#000000';
	element.style.background = 'none';
	element.style.border = 'none';	
	element.style.borderRadius = '8px'
	element.addEventListener('focus', () =>{
		element.style.outline = 'none';
	});
}

function setStyleInputDisabledFalse(element) {
	element.disabled = false;
	element.style.color = '#000000';
	element.style.backgroundColor = 'rbga(255,255,255,0.8)';
	element.style.border = 'rgb(127, 0, 159) 1px solid';
	element.style.background = 'none';
	element.addEventListener('focus', () =>{
		element.style.outline = 'none';
	});
}

function openPage(){
	timeEdit.style.display = 'none';
	sale.style.display = 'none';
	toogle.style.backgroundColor = '#ededed';
	toogle.style.color = '#444444';
	discountCheck.disabled = true;
	saveMain.style.display = 'none';
	addBtnGoods.style.display = 'none';
	btnSaveDiv.style.display = 'none';
	items[0].style.display = 'none';
	saveBtnEmployers.style.display = 'none';

	nameValue.disabled = true;
	nameValue.style.color = '#000000';

	for (let i = 0; i < employersName.length; i++){
		setStyleInputDisabledTrue(employersName[i]);
		let a = employersName[i].value;
		if (!checkInputString(a,50))
		{
			employersName[i].style.display = 'none';
		}
	}

	setStyleInputDisabledTrue(budgetValue);
	setStyleInputDisabledTrue(inputSaleValue);
	setStyleInputDisabledTrue(btnGoods[0]);
}

function editMainSetting(){
	nameValue.style.color = '#666666';
	nameValue.disabled = false;
	setStyleInputDisabledFalse(inputSaleValue);
	setStyleInputDisabledFalse(budgetValue);
	timeValue.style.display = 'none';
	timeEdit.style.display = 'block';
	saveMain.style.display = 'block';
	saveMain.style.textAlign = 'center';
	discountCheck.disabled = false;
}

discountCheck.addEventListener('click', () => {
	if (discountCheck.checked){
		toogle.style.backgroundColor = 'rgb(127, 0, 159)';
		toogle.style.color = '#ffffff';
		sale.style.display = 'block';
		setStyleInputDisabledFalse(inputSaleValue);
	} else {
		toogle.style.backgroundColor = '#ededed';
		toogle.style.color = '#444444';
		sale.style.display = 'none';
	}	
});

saveBtnMain.addEventListener('click', () => {
	mainList.shop = nameValue.value.toUpperCase();
	mainList.finans = budgetValue.value;
	mainList.time.timeBegin = timeBegin.value;
	mainList.time.timeEnd = timeEnd.value;
	mainList.discount = discountCheck.checked;
	mainList.sale = inputSaleValue.value;
	setStyleInputDisabledTrue(budgetValue);
	setStyleInputDisabledTrue(nameValue);
	setStyleInputDisabledTrue(inputSaleValue);
	discountCheck.disabled = true;
	timeValue.textContent = 'c ' + mainList.time.timeBegin + ' по ' + mainList.time.timeEnd;
	timeValue.style.display = 'block';
	timeEdit.style.display = 'none';
	saveMain.style.display = 'none';
});

editBtnMain.addEventListener('click', () => {
	if (mainList.shop != null){
		editMainSetting();
	}
});

function getGoods(){
	for (let i = 0; i < mainList.shopGoods.length; i++){
		let btn = goodsValuer.createElement('button');
		btn.classList.add('btn-goods');
	}
}

editBtnGoods.addEventListener('click', () => {	
	if (mainList.shop != null){
	items = document.getElementsByClassName('items');
	items[0].style.display = 'block';

	itemsName = document.getElementsByClassName('items-name');
	itemsPrice = document.getElementsByClassName('items-price');
	
	for (let i = 0; i < btnGoods.length; i++){
		setStyleInputDisabledFalse(btnGoods[i]);		
	}
	for (let i = 0; i < itemsName.length; i++){
		itemsName[i].style.display= 'inline-block';
		setStyleInputDisabledFalse(itemsName[i]);
	}
	for (let i = 0; i < itemsPrice.length; i++){
		itemsPrice[i].style.display= 'inline-block';
		setStyleInputDisabledFalse(itemsPrice[i]);
	}
	addBtnGoods.style.display = 'block';
	btnSaveDiv.style.display = 'block';
	btnSaveDiv.style.textAlign = 'center';
	for (let i = 0; i < itemsValue.length; i++){
		itemsValue[i].style.display= 'block';
	}	
} else {
	alert('Магазин еще не создан! Откройте магазин')
}
});

addBtnGoods.addEventListener('click', () => {
	itemsList = document.getElementsByClassName('items-list');
	goodsValuer = document.getElementsByClassName('goods-valuer');

	let divGoodsValuer = document.createElement('div');		
	divGoodsValuer.classList.add('goods-valuer');
	divGoodsValuer.innerHTML = "<input type='text' class='btn-goods' value='' placeholder='Категория'>";
	
	let divItemList = document.createElement('div');	
	divItemList.classList.add('items-list');	

	divItemList.appendChild(divGoodsValuer);	

	let divItemValue = document.createElement('div');	
	divItemValue.classList.add('items-value');	
	divItemValue.innerHTML = "<div class='items-value-list'><input class='items-name' value='' placeholder='Наименование'>" +
							"<input class='items-price' value='' placeholder='Цена'></div>" +
							"<div class='items-value-list'><input class='items-name' value='' placeholder='Наименование'>" +
							"<input class='items-price' value='' placeholder='Цена'>" +
							"<div class='items-value-list'><input class='items-name' value='' placeholder='Наименование'>" +
							"<input class='items-price' value='' placeholder='Цена'>";
	divItemList.appendChild(divItemValue);	
	items[items.length-1].appendChild(divItemList);
	btnGoods = document.querySelectorAll('.btn-goods');
	setStyleInputDisabledFalse(btnGoods[btnGoods.length-1]);

});

saveBtnGoods.addEventListener('click', () => {
	itemsName = document.getElementsByClassName('items-name');
	itemsPrice = document.getElementsByClassName('items-price');
	itemsList = document.getElementsByClassName('items-list');
	btnGoods = document.getElementsByClassName('btn-goods');
	console.log(btnGoods.length);
	shopGoods = [];
	mainList.shopItems = {};
	for(let i = 0; i < btnGoods.length; i++) {
		let a = btnGoods[i].value;
		if (checkInputString(a,50)) {
			shopGoods.push(a);
			for (let j = 0; j < 3; j++){				
				let n = itemsName[i*3 + j].value;
				if (checkInputString(n,50)) {
					mainList.shopItems.itemsShopGoods = a;
					mainList.shopItems.name = n;
					mainList.shopItems.price = itemsPrice[i*3 + j].value;
					setStyleInputDisabledTrue(itemsName[i*3 + j]);	
					setStyleInputDisabledTrue(itemsPrice[i*3 + j]);				
				} else {
					itemsName[i*3 + j].style.display = 'none';
					itemsPrice[i*3 + j].style.display = 'none';
				}				 							
			}			
		} 
		setStyleInputDisabledTrue(btnGoods[i]);				
	};
	
	for(let i = 0; i < btnGoods.length; i++) {
		let a = btnGoods[i].value;
		if (!checkInputString(a,50)) {
			itemsList[i].remove();
		}
	}
	mainList.shopGoods = shopGoods;
	btnSaveDiv.style.display = 'none';
	addBtnGoods.style.display = 'none';

});

editBtnEmployers.addEventListener('click', () => {
	if (mainList.shop != null){
	for (let i = 0; i < employersName.length; i++){
		employersName[i].style.display = 'inline-block';
		setStyleInputDisabledFalse(employersName[i]);
	}
	saveBtnEmployers.style.display = 'block';
} else {
	alert('Магазин еще не создан! Откройте магазин')
}

});

saveBtnEmployers.addEventListener('click', () => {
	mainList.employers = {};
	for (let i = 0; i < employersName.length; i++){
		setStyleInputDisabledTrue(employersName[i]);
		let a = employersName[i].value;
		if (!checkInputString(a,50))
		{
			employersName[i].style.display = 'none';
		} else {
			a = a.trim();
			if (a != '') {					
				a = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
				mainList.employers[i] = a;
			}	
			setStyleInputDisabledTrue(employersName[i]);
		}
	}
	saveBtnEmployers.style.display = 'none';
});


for (let i = 0; i < employersName.length; i++){
	employersName[i].addEventListener('input', () => {
		employersName[i].value = checkRus(employersName[i].value);
	})
}

for (let i = 0; i < itemsName.length; i++){
	itemsName[i].addEventListener('input', () => {
		itemsName[i].value = checkRus(itemsName[i].value);
	})
}

for (let i = 0; i < itemsPrice.length; i++){
	itemsPrice[i].addEventListener('input', () => {
		itemsPrice[i].value = checkD(itemsPrice[i].value);
	})
}

for (let i = 0; i < btnGoods.length; i++){
	btnGoods[i].addEventListener('input', () => {
		btnGoods[i].value = checkRus(btnGoods[i].value);
	})
}

budgetValue.addEventListener('input', () => {
		budgetValue.value = checkD(budgetValue.value);
});

inputSaleValue.addEventListener('input', () => {
		inputSaleValue.value = checkD(inputSaleValue.value);
});

nameValue.addEventListener('input', () => {
		nameValue.value = checkRus(nameValue.value);
});














