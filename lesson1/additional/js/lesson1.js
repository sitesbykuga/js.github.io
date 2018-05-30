var num = 33721;

var p = (Math.floor(num%10*1)/1) * (Math.floor(num/10%10*1)/1) * (Math.floor(num/100%10*1)/1) * (Math.floor(num/1000%10*1)/1) * (Math.floor(num/10000%10*1)/1);

console.log('Произведение всех цифр числа ' + num + ': ' + p);

function countDigits(n) {
   for(var i = 0; n > 1; i++) {
      n /= 10;
   }
   return i;
}

alert('Первые две цифры числа ' + p + ' в третьей степени: ' + Math.floor((p ** 3)/(10 ** (countDigits(p ** 3)-2))*1)/1);
