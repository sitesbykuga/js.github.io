var countGift = 0
	, openModal = 0
	, countOpenModal = 0 
	;

function popup (element, btnClassName, displayState=null, count = -1) {
	var viewElement = require('../parts/viewElement.js')
		; 

	let popupWin = element
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
			openModal++;
			countOpenModal++;
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
		openModal--;
	};

	document.body.addEventListener('click', (event) => { 
		if (event.target.classList.contains(btnClassName)){
			popupWin = element;
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
		if (countOpenModal == 0 && viewElement(footer) && (element == document.getElementsByClassName('popup-gift')[0])) {
			showPopup();
		}
	})

	setTimeout(() => {
		if (openModal==0) {
			popupWin = document.getElementsByClassName('popup-consultation')[0];
			showPopup();
		}
	}, 60000);
};

module.exports = popup;
 