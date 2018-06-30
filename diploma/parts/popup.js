function popup (element, btnClassName) {
	let popupWin = element
		;

	function showPopup(){
		popupWin.style.display = 'block';
	}

	function closePopup(){
		popupWin.style.display = 'none';		
	}

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
};

module.exports = popup;
 