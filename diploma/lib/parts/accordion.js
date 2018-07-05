'use strict';

function accordion() {
	var accordion = document.getElementById('accordion'),
	    span = accordion.getElementsByTagName('span'),
	    heading = accordion.getElementsByClassName('accordion-heading'),
	    block = accordion.getElementsByClassName('accordion-block'),
	    prevBlock = 0,
	    openBlock = 0;

	for (var i = 0; i < block.length; i++) {
		block[i].classList.add('animated');
		block[i].classList.add('ui-accordion-content-active');
		if (i != 0) {
			block[i].style.display = 'none';
		} else {
			heading[i].classList.add('ui-accordion-header-active');
		}
	}

	function clearBlock() {
		for (var _i = 0; _i < block.length; _i++) {
			heading[_i].classList.remove('ui-accordion-header-active');
			block[_i].style.display = 'none';
		}
	}

	accordion.addEventListener('click', function (event) {
		block[prevBlock].classList.add('fade-out');
		setTimeout(function () {
			for (var _i2 = 0; _i2 < span.length; _i2++) {
				if (event.target == span[_i2]) {
					if (heading[_i2].classList.contains('ui-accordion-header-active')) {
						clearBlock();
						break;
					}
					clearBlock();
					block[_i2].classList.remove('fade-out');
					heading[_i2].classList.add('ui-accordion-header-active');
					block[_i2].classList.add('fade');
					block[_i2].style.display = 'block';
				}
			}
		}, 400);
	});
};

module.exports = accordion;