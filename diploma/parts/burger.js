function burger() {
	let btnBurger = document.getElementsByClassName('burger')[0]
		, menuBurger = document.getElementsByClassName('burger-menu')[0]
		, menuHeader = document.getElementsByClassName('header-menu')[0]		 
		, imgBurger = document.querySelectorAll('.burger > imag')[0]		 
		, spanBurger = document.querySelectorAll('.burger > span')[0]		 
		;
	window.addEventListener('resize', function() {
		console.log(this.innerWidth);
		if (this.innerWidth < 769) {
			menuHeader.style.display = 'none';
			btnBurger.style.display = 'block';
		} else {
			menuHeader.style.display = 'block';
			btnBurger.style.display = 'none';
		}
	});

	function showMenuBurger(event){
		if (event.target == btnBurger || event.target == imgBurger || event.target == spanBurger){
			if (menuBurger.style.display == 'none'){
				menuBurger.style.display = 'block';
			} else if (menuBurger.style.display == 'block') {
				menuBurger.style.display = 'none';				
			}
		} else {
			menuBurger.style.display = 'none';
		}
	};

	document.body.addEventListener('click', (event) => {
		showMenuBurger(event)
	});
	document.body.addEventListener('tap', (event) => {
		showMenuBurger(event)
	});
};

module.exports = burger;
