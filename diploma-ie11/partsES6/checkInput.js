class CheckInput{ 

	constructor(str){
		this.inputValue = str;
	}

	checkD(){
		let a  = this.inputValue.charAt(this.inputValue.length-1);
		if (a != a.match(/\d/g)) {
			this.inputValue = this.inputValue.slice(0,-1);
		}
		return this.inputValue;
	};

	checkRus(){
		let a  = this.inputValue.charAt(this.inputValue.length-1);
		if (a != a.match(/[а-яА-ЯёЁ\s]/g)) {
			this.inputValue = this.inputValue.slice(0,-1);
		}
		return this.inputValue;
	};

	checkRusPlus(){
		let a  = this.inputValue.charAt(this.inputValue.length-1);
		if (a != a.match(/[^a-zA-Z]/g)) {
			this.inputValue = this.inputValue.slice(0,-1);
		}
		return this.inputValue;
	};

 	checkPhone(){
 		let maskArr = ['8', '-', 'd', 'd', 'd', '-', 'd', 'd', 'd', '-', 'd', 'd', '-', 'd', 'd']
 			, maskReg = /8(\-\d{3}){2}(\-\d{2}){2}/
 			, phone = this.inputValue.split('')
 			;

 		if (maskArr.length == phone.length){	
 			if (this.inputValue == this.inputValue.match(maskReg)[0]){
 				return this.inputValue;
 			} 
 		} else if (maskArr.length < phone.length){
 			this.inputValue = this.inputValue.slice(0,15);
 			return this.inputValue;
 		} else {
 			for (let i = 0; i < phone.length; i++){
 				if (maskArr[i] == 'd') {
 					let a = phone[i];
 					if (phone[i] != a.match(/\d/g)) {
 						phone[i] = '';
 					}				
 				} else {
 					phone[i] = maskArr[i];
 				}

 			}

 			let k = 0;
 			for (let i = 0; i < phone.length; i++){
 				if (phone[i] == '') k++;
 			}

 			if ((k == 0) && (maskArr[phone.length] != 'd')){
 				phone.push(maskArr[phone.length]);
 			}

 			this.inputValue = phone.join('');
 		}
 		return this.inputValue;
	};
}

module.exports = CheckInput;