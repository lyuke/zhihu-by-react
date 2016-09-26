import React from 'react';


export default class Author extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="author">
				<a href="#" className="author-name">叶壮</a>
				<span className='bio'>心理学培训师</span>
			</div>
		)
	}

}