class Option {
	constructor(height, width, bg, fontSize, textAlign){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv(content) {
		let div = document.createElement('div');
		div.textContent = content;
		div.style.cssText = `height: ${this.height}; 
    						 width: ${this.width}; 
    						 background-color: ${this.bg}; 
    						 font-size: ${this.fontSize}; 
							 text-align: ${this.textAlign};
  							`;
		document.body.appendChild(div);
	}
}

let div1 = new Option('100px','200px','red','40px','center');
div1.createDiv('1 див');

let div2 = new Option('30px','70px','#aeaeae','14px','right');
div2.createDiv('2 див');

