var finansLimit = +prompt("Ваш бюджет на месяц")
	nameShop = prompt("Название Вашего магазина"),
	mainList = {
		finans: finansLimit,
		shop: nameShop,
		shopGoods: [],
		employers: {},
		open: false
	}

for(let i = 0; i < 3; i++) {
    mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
}

isNaN(mainList.finans) ? alert('Вы ввели некорректный бюджет') : alert('Ваш бюджет на день составит ' + (mainList.finans/30).toFixed(2) + ' у.е.');

console.log(mainList);