import React from 'react';


export default class PublicSideNav extends React.Component {

	constructor(props) {
		super(props)

	}


	render() {
		return (
			<ul className="public-side-nav">
				<li>
					<a href="#"><i className="iconfont">&#xe60c;</i> 话题广场</a>
				</li>
				<li>
					<a href="#"><i className="iconfont">&#xe60e;</i> 公共编辑动态</a>
				</li>
				<li>
					<a href="#"><i className="iconfont">&#xe600;</i> 社区服务中心</a>
				</li>
				<li>
					<a href="#">
						<i className="iconfont">&#xe60b;</i> 版权服务中心
					</a>
				</li>
			</ul>
		)
	}

}