// --- 1 часть ---
let str = 'урок-3-был слишком легким';

str = str.charAt(0).toUpperCase() + str.slice(1);;

let a = '';
for (let i=0; i<str.length; i++) {
	if ( str.charAt(i) == '-' ) {
		a = a + ' ';
	} else {
		a = a + str.charAt(i);
	}
}
str = a;
console.log(str);

let light = /легким/; 
str = str.match(light);
str = str[0].slice(0, -2) + 'о'; 
document.write('<p>' + str + '</p>');

// --- 2 часть ---
arr = [20, 33, 1, 'Человек', 2, 3];

let summ = 0;
for (let i = 0; i<arr.length; i++){
	if (!isNaN(+arr[i])){
		summ = summ + Math.pow(+arr[i], 3);
	}
}

console.log(Math.sqrt(summ));

// --- 3 часть ---

function checkString( str ) {
	if (!(typeof(str) === 'string') || !isNaN(+str)) {
		alert('Вы передали не строку!');
		return false;
	} else {
		str = str.trim();
		str.length > 50 ? str = str.substr(0, 50) + '...' : str = str;
		return str;
	}
}

let line = '';

do {
	line = 'dfg';// prompt('Введите строку', '');
}
while (!checkString(line));

console.log(checkString(line));
