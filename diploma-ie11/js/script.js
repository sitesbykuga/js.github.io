'use strict';

window.addEventListener('DOMContentLoaded', function () {
	var slider = require('../parts/slider.js'),
	    popups = require('../parts/popups.js'),
	    forms = require('../parts/forms.js'),
	    stylesList = require('../parts/stylesList.js'),
	    calc = require('../parts/calc.js'),
	    filtr = require('../parts/filtr.js'),
	    hoverOnSize = require('../parts/hoverOnSize.js'),
	    feedback = require('../parts/feedback.js'),
	    accordion = require('../parts/accordion.js'),
	    burger = require('../parts/burger.js');

	slider();
	popups();
	forms();
	stylesList();
	calc();
	filtr();
	hoverOnSize();
	feedback();
	accordion();
	burger();
});