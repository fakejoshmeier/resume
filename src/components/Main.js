import React, { Component } from 'react';

//CSS import needed here
import './styles/Main.css';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			selected: 0,
		};
	}
	render() {
		return (
			<div className='mainContainer'>
				<p>Josh Meier</p>
			</div>
		)
	}
}

export default Main;
