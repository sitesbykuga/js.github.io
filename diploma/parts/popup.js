function popup (element, btnClassName, status=false) {
	let popupWin = element
		;

	function showPopup(){
		popupWin.style.display = 'block';
		if (status) {
			let btn = document.getElementsByClassName(btnClassName);
			for (let i = 0; i < btn.length; i++){
				btn[i].style.display = 'none';
			}
		}
	}

	function closePopup(){
		popupWin.style.display = 'none';	
		if (status) {
			let btn = document.getElementsByClassName(btnClassName);
			for (let i = 0; i < btn.length; i++){
				btn[i].style.display = 'inline';
			}
		}	
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
 