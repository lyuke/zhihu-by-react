import React from 'react';
import QuestionAvatar from './questionAvatar';

export default class Question extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="question">
				<QuestionAvatar name={this.props.name}/>
			</div>
		)
	}

}