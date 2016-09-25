require('normalize.css/normalize.css');
require('styles/App.scss');


import React from 'react';
import TopNav from './nav/nav';


class AppComponent extends React.Component {
	render() {
		return (
			<TopNav></TopNav>
		);
	}
}

AppComponent.defaultProps = {};

export default AppComponent;