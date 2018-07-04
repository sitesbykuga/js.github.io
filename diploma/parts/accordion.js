function accordion(){
	let accordion = document.getElementById('accordion')
		, span = accordion.getElementsByTagName('span')
		, heading = accordion.getElementsByClassName('accordion-heading')		
		, block = accordion.getElementsByClassName('accordion-block')
		, prevBlock = 0
		;

	for (let i = 0; i < block.length; i++){
		block[i].classList.add('animated');
		block[i].classList.add('ui-accordion-content-active');
		if (i != 0 ){			
			block[i].style.display = 'none';
		} else {
			heading[i].classList.add('ui-accordion-header-active');
		}
	}
	
		
	function clearBlock(){
		for (let i = 0; i < block.length; i++){
			heading[i].classList.remove('ui-accordion-header-active');
			block[i].style.display = 'none';
		}
	}

	accordion.addEventListener('click', (event) => {
		block[prevBlock].classList.add('fade-out');
		setTimeout(() => {
		for (let i = 0; i < span.length; i++){
			if (event.target == span[i]){
				clearBlock();
				block[i].classList.remove('fade-out');				
				heading[i].classList.add('ui-accordion-header-active');
				block[i].classList.add('fade');
				block[i].style.display = 'block';
				prevBlock = i;
			}
		}
		}, 400 )
	});
};

module.exports = accordion;
