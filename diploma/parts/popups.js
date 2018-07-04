function popups() {
	var popup = require('../parts/popup.js')		
		;  
	
	popup(document.getElementsByClassName('popup-design')[0], 'button-design');
	popup(document.getElementsByClassName('popup-consultation')[0], 'button-consultation');
	popup(document.getElementsByClassName('popup-gift')[0], 'fixed-gift', 'none', 1);

	

};

module.exports = popups;
