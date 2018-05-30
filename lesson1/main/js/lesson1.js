var finansLimit = prompt("Ваш бюджет на месяц");
var nameShop = prompt("Название Вашего магазина");
var employer = {	
}

var mainList = {
	finans: finansLimit,
	shop: nameShop,
	shopGoods: [],
	employers: employer,
	open: false
}

mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

alert('Ваш бюджет на день составит ' + Math.round(parseFloat(mainList.finans/30) * 100) / 100 + ' у.е.');

console.log(mainList);