import React from 'react';
import classSet from 'classnames';

var DropDown = React.createClass({

	render(){

		var isDisabled = typeof this.props.disabled !== "undefined" && this.props.disabled;
    var classes = classSet("btn", "btn-default", "dropdown-toggle", {
      'disabled': isDisabled
    });

		return(
			<button className={classes} type="button" id="bsDropDown"
							data-toggle="dropdown" aria-expanded="true">
		    {this.props.children}
		    <span className="caret"></span>
		  </button>
		)
	}
});



export default DropDown;
