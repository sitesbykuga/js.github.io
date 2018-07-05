'use strict';

function calc() {
	var selectSize = document.getElementById('size'),
	    selectMaterial = document.getElementById('material'),
	    options = document.getElementById('options'),
	    checkOptions = options.getElementsByTagName('input'),
	    divPrice = document.getElementsByClassName('calc-price')[0],
	    promocodeInput = document.getElementsByClassName('promocode')[0],
	    sizeN = 0,
	    materialN = 0,
	    optionsChecked = [0, 0, 0],
	    promocodeValue = false,
	    total = 0;
	var prise = {
		size: [0, 2000, 3500, 4900, 7000],
		material: [0, 1, 1.5, 1.3],
		options: [0.2, 1, 200],
		promocode: 30
	},
	    promocode = 'IWANTPOPART';

	function getNumberSelected(select) {
		var n = 0;
		for (var i = 0; i < select.options.length; i++) {
			if (select.options[i].selected) {
				n = i;
				break;
			}
		}
		return n;
	}

	selectSize.addEventListener('change', function () {
		sizeN = getNumberSelected(this);
		countTotal();
	});

	selectMaterial.addEventListener('change', function () {
		materialN = getNumberSelected(this);
		countTotal();
	});

	promocodeInput.addEventListener('input', function () {
		if (this.value.trim() == promocode) {
			promocodeValue = true;
		} else {
			promocodeValue = false;
		}
		countTotal();
	});

	options.addEventListener('click', function (event) {
		if (event.target.tagName == 'INPUT') {
			for (var i = 0; i < checkOptions.length; i++) {
				if (checkOptions[i].checked) {
					optionsChecked[i] = 1;
				} else {
					optionsChecked[i] = 0;
				}
			}
			countTotal();
		}
	});

	function countTotal() {
		if (sizeN != 0 && materialN != 0) {
			var base = prise.size[sizeN] * prise.material[materialN];
			total = base;
			for (var i = 0; i < optionsChecked.length; i++) {
				if (i != 2) {
					total += base * prise.options[i] * optionsChecked[i];
				} else {
					total += prise.options[i] * optionsChecked[i];
				}
			}

			if (promocodeValue) {
				total *= 1 - prise.promocode / 100;
			}

			total = Math.round(total);

			var str = total.toString(),
			    s = '';
			for (var _i = 0; _i < str.length; _i++) {
				s += str.charAt(_i);
				if ((str.length - _i - 1) % 3 == 0) {
					s += ' ';
				}
			}

			divPrice.innerHTML = '<h3>' + s + '</h3>';
		} else if (sizeN == 0 && materialN != 0) {
			total = 0;
			divPrice.innerHTML = 'Для расчета нужно выбрать размер картины';
		} else if (sizeN != 0 && materialN == 0) {
			total = 0;
			divPrice.innerHTML = 'Для расчета нужно выбрать материал холста';
		} else {
			total = 0;
			divPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины';
		}
	}
};

module.exports = calc;