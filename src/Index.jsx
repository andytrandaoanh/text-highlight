import React from 'react';


const toRender = `
	<div id="edit-me">This is the starting text.</div>
`;

export cxclass Index extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			isChanged: false
		};
		
		this.updated = this.updated.bind(this);
	}
	
	render () {
		return (
			<div>
				<div>{this.state.isChanged ? `CHANGED` : `INITIAL`}</div>
				<Dynamic html={toRender} updated={this.updated} />
			</div>
		);
	}
	
	updated () {
		this.setState({ isChanged: true });
	}
}

class Dynamic extends React.Component {
	markup (val) {
		return { __html: val }
	}
	
	render () {
		return <div dangerouslySetInnerHTML={this.markup(this.props.html)} />;
	}
	
	componentDidMount () {
		const node = document.querySelectorAll('#edit-me')[0];
		setTimeout(() => {
			node.innerHTML = `<span style="color:red;">This has been changed</span>`;
			this.props.updated();
		}, 2000);
	}
}

