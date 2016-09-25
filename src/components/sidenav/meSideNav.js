import React from 'react';


export default class MeSideNav extends React.Component {

	constructor(props) {
		super(props)

	}


	render() {
		return (
			<ul className='me-side-nav'>
				<li>
					<a href="#"><i className="iconfont">&#xe60f;</i> 我的收藏</a>
				</li>
				<li>
					<a href="#"><i className="iconfont">&#xe607;</i> 我关注的问题</a>
				</li>
				<li>
					<a href="#"><i className="iconfont">&#xe605;</i> 邀请我回答的问题</a>
				</li>
			</ul>
		)
	}

}