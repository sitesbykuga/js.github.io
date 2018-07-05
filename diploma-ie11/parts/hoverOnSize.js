'use strict';

function hoverOnSize() {
	var img = document.querySelectorAll('.sizes-block > img'),
	    wrapper = document.getElementsByClassName('sizes-wrapper')[0],
	    block = document.querySelectorAll('.sizes-block'),
	    pSize = document.querySelectorAll('.sizes-block > .size'),
	    pStartingPrice = document.querySelectorAll('.sizes-block > .starting-price'),
	    pFinalPrice = document.querySelectorAll('.sizes-block > .final-price');

	function changeImg(target, postfix, state) {
		for (var i = 0; i < img.length; i++) {
			for (var j = 0; j < block[i].childNodes.length; j++) {
				if (target == block[i].childNodes[j]) {
					img[i].src = 'img/sizes-' + (i + 1) + postfix + '.png';
					pSize[i].style.display = state;
					pStartingPrice[i].style.display = state;
					pFinalPrice[i].style.display = state;
				}
			}
		}
	}

	wrapper.addEventListener('mouseover', function (event) {
		changeImg(event.target, '-1', 'none');
	});

	wrapper.addEventListener('mouseout', function (event) {
		changeImg(event.target, '', 'block');
	});

	wrapper.addEventListener('tap', function (event) {
		changeImg(event.target, '-1', 'none');
	});
};

module.exports = hoverOnSize;