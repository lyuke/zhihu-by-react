import React from 'react';


export default class QuestionAvatar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			name
		} = this.props;
		return (
			<div>
				<img src="https://pic4.zhimg.com/68427b7eeaf29a3a47205148f2286173_l.png" alt={name}/>
			</div>
		)
	}

}