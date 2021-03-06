import React from 'react';
import Avatar from './avatar';
import FeedSource from './feedSource';
import QuestionLink from './questionLink';
import Author from './author';
import Answer from './answer';
import FeedFooter from './FeedFooter';

export default class FeedItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="feed-item">
				<div className="feed-aside">
					<Avatar></Avatar>
				</div>
				<div className="feed-main">
					<FeedSource />
					<QuestionLink />
					<Author />
					<Answer />
					<FeedFooter />
				</div>
				
			</div>
		)
	}

}