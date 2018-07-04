function popup (element, btnClassName, displayState=null, count = -1) {
	var viewElement = require('../parts/viewElement.js')
		; 

	let popupWin = element
		, countGift = 0 
		;

	function showPopup(){
		if (countGift < count || count == -1) {
			popupWin.style.display = 'block';
			document.body.style.overflow = 'hidden';
			if (displayState == 'none') {
				let btn = document.getElementsByClassName(btnClassName);
				for (let i = 0; i < btn.length; i++){
					btn[i].style.display = 'none';
				};
			};
			if (count != -1) {
				countGift++;
			};
		};		
	};

	function closePopup(){
		popupWin.style.display = 'none';	
		document.body.style.overflow = '';

		let input = popupWin.getElementsByTagName('input')
			, textarea = popupWin.getElementsByTagName('textarea')
			;
		for (let i = 0; i < input.length; i++){
			input[i].value = '';
		};
		for (let i = 0; i < textarea.length; i++){
			textarea[i].value = '';
		};	
	};

	document.body.addEventListener('click', (event) => { 
		if (event.target.classList.contains(btnClassName)){
			showPopup();
		};
	});

	popupWin.addEventListener('click', function(event){ 		
		if (event.target.classList.contains('popup-close') || this == event.target){
			closePopup(); 
		}
	});

	window.addEventListener('scroll', () => {
		let footer = document.getElementById('footer');
		if (displayState == 'none' && viewElement(footer) && (element == document.getElementsByClassName('popup-gift')[0])) {
			showPopup();
		}
	})
};

module.exports = popup;
 