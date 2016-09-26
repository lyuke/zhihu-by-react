import React from 'react';


export default class ContentTitle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="content-title">
				<span className="iconfont dynamic-title">&#xe606;最新动态</span>
				
				<span className="iconfont content-setting">&#xe601;
					<a href="#">设置</a>
				</span>
				
			</section>
		)
	}

}