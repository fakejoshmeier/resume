import React, { Component } from 'react';

import './styles/AboutMe.css';
import profile from '../assets/jmeier.jpg'

class AboutMe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contact: false,
			sent: false,
			error: false,
		};
	}

	render() {
		return (
			<main>
				<div className='aboutMe'>
					<img src={ profile } alt="It's Me!" className="profilePic"/>
					<p className='profileText'>I'm a computer science student, currently located in the Bay Area.</p>
				</div>
			</main>
		)
	}
}

export default AboutMe;
