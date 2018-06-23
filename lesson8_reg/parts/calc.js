function calc() {
	let inputPeople = document.getElementsByClassName('counter-block-input')[0]
		, inputDay = document.getElementsByClassName('counter-block-input')[1]
		, selectBase = document.getElementById('select')
		, spanTotal = document.getElementById('total')
		, countPeople = 0
		, countDay = 0
		, base = 1
		, total = 0
		;
	const rate = 4999;

	spanTotal.innerHTML = total;

	inputPeople.addEventListener('change', function() {
		countPeople = this.value;
		countTotal();
	});

	inputDay.addEventListener('change', function() {
		countDay = this.value;
		countTotal();
	});

	// Запрет ввода букв и символов 'eE', '+', '-', '.', ',' 
	inputPeople.onkeypress = function(event) {
	    if (event.ctrlKey || event.altKey || event.metaKey) return;
	    let chr = getChar(event);
	    if (chr == null) return;
      	if (chr < '0' || chr > '9') {
        	return false;
    	}
    }

    inputDay.onkeypress = function(event) {
	    if (event.ctrlKey || event.altKey || event.metaKey) return;
	    let chr = getChar(event);
	    if (chr == null) return;
      	if (chr < '0' || chr > '9') {
        	return false;
    	}
    }

    function getChar(event) {
    	if (event.which == null) {
        	if (event.keyCode < 32) return null;
        	return String.fromCharCode(event.keyCode) // IE
      	}
      	if (event.which != 0 && event.charCode != 0) {
        	if (event.which < 32) return null;
        	return String.fromCharCode(event.which) // остальные
      	}
      	return null; // специальная клавиша    
    }

    /* Реализация ввода только цифр, с той "особенностью", 
    	про которую написала в комментах на платформе
    	
    function checkD(str){
		let a  = str.charAt(str.length-1);
		if (a != a.match(/\d/g)) {
			str = str.slice(0,-1);
		}
		return str; 
	};

	inputPeople.addEventListener('input', function() {
		this.value = checkD(this.value);
	});
	inputDay.addEventListener('input', function() {
		this.value = checkD(this.value);
	});
	*/

	selectBase.addEventListener('change', function() {
		for (let i = 0; i < this.options.length; i ++) {
			if (this.options[i].selected){	
				base = this.options[i].value;
				break;
			}
		}
		countTotal();
	});

	function countTotal() {
		if (inputPeople.value !='' && inputDay.value !='') {
			total = Math.round(countPeople * countDay * rate * base);
			let str = total.toString(),
				s = '';
			for (let i = 0; i < str.length; i++){
				s += str.charAt(i);
				if ((str.length - i - 1)%3 == 0){
					s += ' ';	
				}
			}
			spanTotal.innerHTML = s;
		} else {
			total = 0;
			spanTotal.innerHTML = total;
		}
	}
};

module.exports = calc;
