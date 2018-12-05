import React, { Component } from 'react';
import AboutMe from './AboutMe';
import ProjectList from './ProjectList';

import './styles/Main.css';

//const projects = require("json-loader!yaml-loader!../projects.yaml");
//A temporary thing.  I plan to make this something stored in a database when I
//know how to do such a thing.
const projects = [
	{
		name:'Sensei',
		description:'A Webapp built with a React frontend and a Flask backend, using a PostgreSQL database.'
	},
	{
		name:'ft_ssl',
		description:'A collection of functions written in C that mimics certain hash and cipher functionalities from OpenSSL.'
	}
]

const Header = ({ tab, callback }) => (
	<header className='tabBar'>
		<nav>
		<button className={  tab === 1 ? 'meTabS' : 'meTab' } onClick={ tab === -1 ? () => callback() : 0 }>Josh Meier</button>
		<button className={  tab === -1 ? 'projTabS' : 'projTab' } onClick={ tab === 1 ? () => callback() : 0 }>Projects</button>
		<span className='icons'>
			<a className='linkIcon' href="https://github.com/fakejoshmeier">G</a> | <a className='linkIcon' href="https://www.linkedin.com/in/joshua-meier2/">L</a>
		</span>
		</nav>
	</header>
)

class Main extends Component {
	constructor() {
		super();
		this.state = {
			tab: 1, //Which tab has been selected.  It's either About or Projects.  If I add more tabs, this will change to an index based system like selected
			selected: 0 //Which project has been selected
		};
	}

	changeTab = () => {
		this.setState({
			tab: this.state.tab * -1,
		});
	}

	changeSelected = (idx) => {
		this.setState({
			selected: parseInt(idx)
		});
	}

	render() {
		return (
			<div className='mainContainer'>
				<Header tab={ this.state.tab } callback={ () => this.changeTab() }/>
				{this.state.tab === 1 ? "" :
					<ProjectList
						projects={projects}
						selected={this.state.selected}
						callback={() => this.changeSelected()}
					/>}
				<main>
					{ this.state.tab === 1 ? <AboutMe/> : <p>{this.state.selected}</p> }
				</main>
			</div>
		)
	}
}

export default Main;
