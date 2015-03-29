import React from 'react';
import DropdownMenu from './DropdownMenu';

var DropDown = React.createClass({

	render(){
		return(
			<button className="btn btn-default dropdown-toggle" type="button" id="bsDropDown"
							data-toggle="dropdown" aria-expanded="true">
		    {this.props.children}
		    <span className="caret"></span>
		  </button>
		)
	}
});



export default DropDown;
