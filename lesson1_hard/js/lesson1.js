var num = 33721,
 	arrayNum = num.toString().split(''),
	p = 1;

for (let i = 0; i < arrayNum.length; i++) {
	p = p * arrayNum[i];
}
console.log('Произведение всех цифр числа ' + num + ': ' + p);

alert('Первые две цифры числа ' + p + ' в третьей степени: ' + (p ** 3).toString().split('', 2).join(''));
