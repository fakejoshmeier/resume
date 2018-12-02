import React, { Component } from 'react';
import AboutMe from './AboutMe';

import './styles/Main.css';

//const projects = require("json-loader!yaml-loader!../projects.yaml");

const Header = ({ tab, callback }) => (
	<header>
		<nav>
		{tab === 1 ? <button className='meTabS'>Josh Meier</button> : <button onClick={() => callback()} className='meTab'>Josh Meier</button>}
		{tab === -1 ? <button className='projTabS'>Projects</button> : <button onClick={() => callback()} className='projTab'>Projects</button>}
		<span className='icons'>
			<a href="https://github.com/fakejoshmeier">G</a> | <a href="https://www.linkedin.com/in/joshua-meier2/">L</a>
		</span>
		</nav>
	</header>
)

class Main extends Component {
	constructor() {
		super();
		this.state = {
			selected: 0, //Which project has been selected
			tab: 1, //Which tab has been selected.  It's either About or Projects.  If I add more tabs, this will change to an index based system like selected
		};
	}

	changeTab = () => {
		this.setState({
			tab: this.state.tab * -1,
		});
	}

	changeSelection = ( idx ) => {
		this.setState({
			selected: parseInt(idx)
		});
	}

	render() {
		return (
			<div className='mainContainer'>
			<Header tab={ this.state.tab } callback={ () => this.changeTab() }/>
						<AboutMe/>
			</div>
//				{ this.state.tab === 0 ?
//					:
//					<main className='infoContainer'>
//						<ProjectList projects={projects} selected={this.state.selected} />
//						<ProjectBody project={projects[this.state.selected]} />
//					</main>
//				}
		)
	}
}

export default Main;
