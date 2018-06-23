// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(2,2)

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

// Узнать, что нам вернет функция each в данных условиях. 
// Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату 
// (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var arr1 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr1, myFunc));

let assert = require('chai').assert;

describe('Sum должна возвратить тип данных boolean', () => {
	it('Передаем в функцию значения (2,2)', () => {
		assert.typeOf(sum(2,2), 'boolean');
	});
});

describe('Переменная num должна быть равна 5', () => {
	it('Проверяем на соответствие', () => {
		assert.equal(num, 5);
	});
});

describe('Узнаем, что нам вернет функция each в данных условиях', () => {
	it('Результат == Array', () => {
		assert.isArray(each(arr1, myFunc));
	});
	it('Eche возвращает Array', () => {
		assert.typeOf(each(arr1, myFunc), 'array');
	});
	it('Cоответствие ожидаемому результату', () => {
		for (let i = 0; i < each(arr1, myFunc).length; i++){
			assert.equal(each(arr1, myFunc)[i], Math.sqrt(arr1[i]), i);
		}
	});
	it('Длина результата', () => {
		assert.lengthOf(each(arr1, myFunc), arr1.length);
	});
});