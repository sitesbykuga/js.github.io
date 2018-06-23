function tabs() {
	let info = document.getElementsByClassName('info')[0],
		tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		} 
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}		
	}
	
	info.addEventListener('click', (event) => { // >>>>>>>> ES6 <<<<<<<<<<<
		let target = event.target;
		// Обработчик отображения таба
		if (target.className == 'info-header-tab'){
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});
};

module.exports = tabs;
