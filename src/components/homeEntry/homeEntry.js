import React from 'react';

export default class HomeEntry extends React.Component {

	constructor(props) {
		super(props)

	}


	render() {
		return (
			<div className="home-entry">
				<img className="home-entry-avatar" src="https://pic4.zhimg.com/68427b7eeaf29a3a47205148f2286173_l.png" alt="avatar" />
				<div className="home-entry-main">
					<div className="home-entry-arrow"></div>
						<ul>
							<li><a href="#"><span className="iconfont">&#xe609;</span>提问</a></li>
							<li><a href="#"><span className="iconfont">&#xe60d;</span>回答</a></li>
							<li><a href="#"><span className="iconfont">&#xe608;</span>写文章</a></li>
						</ul>
						
						
						
					<div className="home-entry-draft">
						<a href="#">草稿</a>
					</div>
				</div>
				
			</div>

		)
	}

}