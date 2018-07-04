window.addEventListener('DOMContentLoaded', () => {
	var slider = require('../parts/slider.js')
		, popups = require('../parts/popups.js')
		, forms = require('../parts/forms.js')
		, stylesList = require('../parts/stylesList.js')
		;  
	 
	slider();		
	popups();
	forms();
	stylesList();
});
