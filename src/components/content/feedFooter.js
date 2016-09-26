import React from 'react';


export default class FeedFooter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="feed-footer">
				<ul>
					<li>
						<span className="iconfont">&#xe607;</span>
						<a href="#">关注问题</a>
					</li>
					<li>
						<span className="iconfont">&#xe60d;</span>
						<a href="#">62条评论</a>
					</li>
				</ul>
			</div>
		)
	}

}