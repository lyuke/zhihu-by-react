import React from 'react';
import HomeListTitle from './homeListTitle';
import FeedItem from './feedItem';

export default class Feeds extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let feeds = [];
		for (var i = 0; i < 10; i++) {
			feeds.push(<FeedItem />);
		}
		return (
			<div className="feeds">
				<HomeListTitle />
				{feeds}
			</div>

		)
	}

}