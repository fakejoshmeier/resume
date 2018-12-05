import React, { Component } from 'react';

import './styles/ProjectList.css';

const ListItem = ({ project, selected, callback }) => (
	<div className={'listItem' + (selected ? 'S' : '')} onClick={() => callback()}>
		<h2>{ project.name }</h2>
	</div>
)

const ProjectList = ({ projects, selected, callback }) => (
	<aside>
		<div className='list'>
			{ projects.map((project, idx) =>
				<ListItem
					project={project}
					selected={idx === selected ? true : false}
					callback={() => callback(idx)}
				/>
			)}
		</div>
	</aside>
)

export default ProjectList;
