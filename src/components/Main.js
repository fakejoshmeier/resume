import React, { Component } from 'react';
import AboutMe from './AboutMe';

import './styles/Main.css';

//const projects = require("json-loader!yaml-loader!../projects.yaml");

const Header = ({ tab, callback }) => (
	<header>
		<nav>
		<span onClick={ tab !== 0 ? () => callback() : 0 } className={ tab === 0 ? 'meTabS' : 'meTab' }>Josh Meier</span>
		<span onClick={ tab !== 1 ? () => callback() : 0 } className={ tab === 1 ? 'projTabS' : 'projTab' }>Projects</span>
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
			tab: 0, //Which tab has been selected.  It's either About or Projects
		};
	}

	changeTab = () => {
		this.setState({
			tab: !this.state.tab
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
			<Header tab={ this.state.tab } callback={ () => this.changeTab }/>
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
