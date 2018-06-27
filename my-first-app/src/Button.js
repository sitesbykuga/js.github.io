import React from 'react';
import './App.css';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.myClick = this.myClick.bind(this)
	}

	myClick() {
		const el = findDOMNode(document.getElementsByClassName('wrapper')[0]);
		$(el).toggleClass('change-color');
	}

	render() {
		return (
			<button onClick={this.myClick} classname="clicker">Изменить дизайн </button>
		)
	}
}

export default Button;