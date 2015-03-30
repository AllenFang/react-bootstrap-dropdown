import React from 'react';
import classSet from 'classnames';

class DropDownButton extends React.Component{

	render(){
    var classes = classSet("btn", "btn-default", "dropdown-toggle", {
      'disabled': this.props.disabled
    });

		return(
			<button className={classes} type="button" id="bsDropDown"
							data-toggle="dropdown" aria-expanded="true">
		    {this.props.children}
		    <span className="caret"></span>
		  </button>
		)
	}
};

export default DropDownButton;
