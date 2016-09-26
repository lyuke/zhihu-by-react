import React from 'react';
import ContentTitle from './contentTitle';
import Question from './question';


export default class Content extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let questions = []
		for (var i = 0; i < 10; i++) {
			questions.push(<Question key={i} name="lk"/>);
		}
		return (
			<section className="content">
				<ContentTitle />
				{questions}
			</section>
		)
	}

}