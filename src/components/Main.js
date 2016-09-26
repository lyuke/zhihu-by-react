require('normalize.css/normalize.css');
require('styles/App.scss');


import React from 'react';
import TopNav from './nav/nav';
import HomeEntry from './homeEntry/homeEntry';
import SideNav from './sideNav/sideNav';
import Feeds from './content/feeds';


class AppComponent extends React.Component {
	render() {
		return (
			<div>
				<TopNav></TopNav>
				<div className="content-wrapper">
					<div className="main">
						<HomeEntry></HomeEntry>
						<Feeds />
					</div>
					<div className="aside">
						<SideNav />
					</div>
				</div>
				
			</div>

		)
	}
}

AppComponent.defaultProps = {};

export default AppComponent;