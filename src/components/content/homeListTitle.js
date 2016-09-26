import React from 'react';


export default class HomeListTitle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="home-list-title">
				<span className="iconfont dynamic-title">&#xe606;最新动态</span>
				
				<span className="iconfont content-setting">&#xe601;
					<a href="#">设置</a>
				</span>
				
			</section>
		)
	}

}