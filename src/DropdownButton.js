import React from 'react';
import classSet from 'classnames';

class DropDownButton extends React.Component {
	constructor() {
		super()

		this.state = {
			opened: false
		};
	}

	toggleOpen() {
		// cant use ref in parent, need to use new version of react?
		this.props.toggleOpen();
		let state = this.state;
		state.opened = !state.opened
		this.setState(state);
	}

	render(){
    var classes = classSet("btn", "btn-default", "dropdown-toggle", {
      'disabled': this.props.disabled
    });

		return(
			<button className={classes} type="button" id={this.props.id}
					onClick={this.toggleOpen.bind(this)}
							aria-expanded={this.state.opened}>
		    {this.props.children}
		    <span className={this.props.caretClass}></span>
		  </button>
		)
	}
};

DropDownButton.propTypes = {
	caretClass: React.PropTypes.string.isRequired
};


export default DropDownButton;
