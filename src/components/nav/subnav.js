import React from 'react';

export default class SubNav extends React.Component {

	constructor(props) {
		super(props)

	}


	render() {
		return (
			<ul className="sub-nav">
				<li><a href="#">首页</a></li>
				<li><a href="#">话题</a></li>
				<li><a href="#">发现</a></li>
				<li><a href="#">消息</a></li>
			</ul>

		)
	}

}