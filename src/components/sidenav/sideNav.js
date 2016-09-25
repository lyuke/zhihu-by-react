import React from 'react';


export default class SideNav extends React.Component {

	constructor(props) {
		super(props)

	}


	render() {
		return (
			<nav className="side-nav">
				<ul>
					<li>
						<a href="#">我的收藏</a>
					</li>
					<li>
						<a href="#">我关注的问题</a>
					</li>
					<li>
						<a href="#">邀请我回答的问题</a>
					</li>
				</ul>
			</nav>

		)
	}

}