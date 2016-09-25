import React from 'react';

export default class ProfileNav extends React.Component {

	constructor(props) {
		super(props)

	}


	render() {
		return (
			<a className="profile-nav">
				<img src="https://pic4.zhimg.com/68427b7eeaf29a3a47205148f2286173_l.png" alt="avatar" ></img>
				<span className="name">loker</span>
			</a>
		)

	}

}