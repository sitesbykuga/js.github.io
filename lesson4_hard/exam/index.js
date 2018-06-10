function getFriendlyNumbers(start, end) {
    if (!((end ^ 0) === end) ||!((start ^ 0) === start) || (typeof(start) !== 'number') || (typeof(end) !== 'number') || (start > end) || (start <= 0) || (end <= 0)) {
		return false;
	}

	let arr = [];
	for (let i = start; i <= end; i++) {
		let sum1 = 0;
		for (let j = 1; j<i; j++) {
			if (i%j == 0) {
				sum1 += j;
			}
		}
		if ((sum1 != i) && (i < sum1)) {
			let sum2 = 0;
			for (let j = 1; j<sum1; j++) {
				if (sum1%j == 0) {
					sum2 += j;
				}
			} 
			if (sum2 == i) {
				arr.push([i, sum1]);				
			}
		}
	}
	return arr;
}

module.exports = {
    firstName: 'Evgeniya',
    secondName: 'Kugaevskaya',
    task: getFriendlyNumbers
}