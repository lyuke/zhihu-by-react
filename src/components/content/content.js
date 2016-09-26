import React from 'react';
import ContentTitle from './contentTitle';

export default class Content extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<section className="content">
				<ContentTitle />
			</section>
		)
	}

}