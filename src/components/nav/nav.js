import React from 'react';
import SearchForm from './searchForm';
import SubNav from './subnav';
import AskButton from './askQuestionButton';
import ProfileNav from './profileNav';


export default class TopNav extends React.Component {

	constructor(props) {
		super(props)

	}


	render() {
		return (
			<nav className="main-nav">
				<div className="main-wrapper">
					<a href="/" className="logo"><span >知乎</span></a>
					<SearchForm />
					<SubNav />
					<AskButton />
					<ProfileNav />
				</div>	
			</nav>

		)
	}

}