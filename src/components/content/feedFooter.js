import React from 'react';


export default class FeedFooter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="feed-footer">
				<a href="#"><span className="iconfont">&#xe607;</span>关注问题</a>	
				<a href="#"><span className="iconfont">&#xe60d;</span>62条评论</a>
			</div>
		)
	}

}