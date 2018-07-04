function hoverOnSize(){
	let img = document.querySelectorAll('.sizes-block > img')
		, wrapper = document.getElementsByClassName('sizes-wrapper')[0]
		, block = document.querySelectorAll('.sizes-block')
	;

	function changeImg(target, postfix) {
		for (let i = 0; i < img.length; i++) {
			for (let j = 0; j < block[i].childNodes.length; j++){
				if (target == block[i].childNodes[j]) {
					img[i].src = `img/sizes-${i+1}${postfix}.png`;
				}
			}			
		}
	}

	wrapper.addEventListener('mouseover', (event) => {
		changeImg(event.target, '-1');
	});

	wrapper.addEventListener('mouseout', (event) => {
		changeImg(event.target, '');
	});

	wrapper.addEventListener('tap', (event) => {
		changeImg(event.target, '-1');
	});

};

module.exports = hoverOnSize;
