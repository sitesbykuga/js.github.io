function filtr(){
	let menu = document.getElementsByClassName('portfolio-menu')[0]
		, childsMenu = menu.getElementsByTagName('li')
		, wrapper = document.getElementsByClassName('portfolio-wrapper')[0]
		, blocks = wrapper.querySelectorAll('.portfolio-block')
		, no = document.getElementsByClassName('portfolio-no')[0]
		;

	menu.addEventListener('click', (event) => {
		let target = event.target;
		if (target.tagName == 'LI'){
			deleteActive();
			showPortfolio(event.target.classList[0]);
			target.classList.add('active');			
		}
	})

	function deleteActive(){
		for (let i = 0; i < childsMenu.length; i++){
			childsMenu[i].classList.remove('active');
		}
	}

	function displayNoneBlock(){
		no.style.display = 'none';
		wrapper.style.display = 'flex';
		for (let i = 0; i < blocks.length; i++){
			blocks[i].style.display = 'none';
		}
	}

	function showPortfolio(className){
		displayNoneBlock();		

		let k = 0;
		
		for (let i = 0; i < blocks.length; i++){
			if (blocks[i].classList.contains(className)){
				blocks[i].style.display = 'block';
				k++;
			}
		}

		if (k == 0){
			no.style.display = 'block';
			wrapper.style.display = 'none';			
		}
	}
};

module.exports = filtr;