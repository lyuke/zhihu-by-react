import React from 'react';


export default class FeedSource extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="feed-source">
				<a href="#" className="feed-source-link">loker</a>
				<span>赞同了该回答</span>
			</div>

		)
	}

}