import React from 'react';

var DropDownButton = React.createClass({

	onclick(){
		console.log(this.props.callback);
		this.props.callback("gogo1god!!!  successs!!!!");
	},

	render(){
		return(
			<button onClick={this.onclick}>click</button>
		)
	}
});



export default DropDownButton;
