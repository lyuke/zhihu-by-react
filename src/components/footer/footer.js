import React from 'react';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="footer">
				<a href="#" className="footer-link">刘看山</a>
				<a href="#" className="footer-link">知乎指南</a>
				<a href="#" className="footer-link">建议反馈</a>
				<a href="#" className="footer-link">移动应用</a>
				<a href="#" className="footer-link">加入知乎</a>
				<a href="#" className="footer-link">知乎协议</a>
				<a href="#" className="footer-link">联系我们</a>
				<span>&copy;2016 Loker</span>
			</div>
		)
	}

}
