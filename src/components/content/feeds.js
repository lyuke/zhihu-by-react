import React from 'react';
import HomeListTitle from './homeListTitle';
import FeedItem from './feedItem';

export default class Feeds extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="feeds">
				<HomeListTitle />
				<FeedItem />
			</div>

		)
	}

}