'use strict';

function stylesList() {
	var stylesRow = document.getElementById('styles-list'),
	    btn = document.getElementById('btn-styles-list'),
	    hiddenChild = stylesRow.querySelectorAll('.hidden-lg');

	function showStyles() {
		for (var i = 0; i < hiddenChild.length; i++) {
			hiddenChild[i].classList.remove('hidden-lg');
			hiddenChild[i].classList.remove('hidden-md');
			hiddenChild[i].classList.remove('hidden-sm');
			hiddenChild[i].classList.remove('hidden-xs');
			hiddenChild[i].classList.remove('styles-2');
			hiddenChild[i].classList.add('col-sm-3');
			hiddenChild[i].classList.add('col-sm-offset-0');
			hiddenChild[i].classList.add('col-xs-10');
			hiddenChild[i].classList.add('col-xs-offset-1');
			hiddenChild[i].classList.add('fade');
			hiddenChild[i].style.display = 'block';
		}
	}

	btn.addEventListener('click', function () {
		showStyles();
		btn.style.display = 'none';
	});
};

module.exports = stylesList;