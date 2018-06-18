class Option {
	constructor(height = 150
				, width = 150
				, bg = '#298076'
				, fontSize = 30
				, textAlign = 'center'
				){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv(content) {
		let div = document.createElement('div');
		div.textContent = content;
		div.style.cssText = `height: ${this.height}px; 
    						 width: ${this.width}px; 
    						 background-color: ${this.bg}; 
    						 font-size: ${this.fontSize}px; 
							 text-align: ${this.textAlign};
  							`;
		document.body.appendChild(div);
	}
}

let div1 = new Option();
div1.createDiv('По умолчанию');

let div2 = new Option(300,100,'#aeaeae',14,'right');
div2.createDiv('С заданными параметрами');

