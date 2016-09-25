import React from 'react';

export default class SearchForm extends React.Component {

	constructor(props) {
		super(props)

	}


	render() {


		return (
			<form className="search-form">
				<input className="search-input" type="text" placeholder="搜索你感兴趣的内容..."/>
				<button className="search-button">GO!</button>
			</form>

		)
	}

}