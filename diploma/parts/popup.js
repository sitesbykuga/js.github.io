function popup (element, btnClassName, status=null, parent=null) {
	let popupWin = element
		;

	function showPopup(){
		popupWin.style.display = 'block';
		if (status == 'none') {
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
		let input = popupWin.getElementsByTagName('input')
			, textarea = popupWin.getElementsByTagName('textarea')
			;
		for (let i = 0; i < input.length; i++){
			input[i].value = '';
		};
		for (let i = 0; i < textarea.length; i++){
			textarea[i].value = '';
		}	
	}

	document.body.addEventListener('click', (event) => { 
		if (event.target.classList.contains(btnClassName)){
			showPopup();
			if (parent != null) {
				if (event.target.parentNode.classList.contains(parent)) {
					event.target.style.zIndex = 4;
				}
			}
		};
	});

	popupWin.addEventListener('click', function(event){ 		
		if (event.target.classList.contains('popup-close') || this == event.target){
			closePopup(); 
		}
	});
};

module.exports = popup;
 