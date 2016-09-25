import React from 'react';
import MeSideNav from './meSideNav';
import PublicSideNav from './pubicSideNav';

export default class SideNav extends React.Component {

	constructor(props) {
		super(props)

	}


	render() {
		return (
			<nav className="side-nav">
				<MeSideNav />
				<PublicSideNav />
			</nav>

		)
	}

}