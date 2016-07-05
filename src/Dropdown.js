import React from 'react';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';
import classSet from 'classnames';

class DropDown extends React.Component{

	constructor(props) {
		super(props);
		this.state = {title: null, open: false};
	}

	componentDidMount(){
		this.setState({title: this.props.title, open: false});
	}

	handleTitleAndSelect(item){

		if (this.props.updateTitle) {
			this.setState({title: item.text});
		}

		// close the dropdown
		this.toogleOpen();

		this.props.onSelect(item);
	}

	/**
	 * Toggles the visibility of the dropdown
	 * @return {[type]} [description]
	 */
	toogleOpen() {
		let state = this.state;
		state.open = !state.open;
		this.setState(state);
	}

	render(){
		let id = this._reactInternalInstance._rootNodeID;
		
		var classes = classSet("dropdown", {
	      'open': this.state.open
	    });

		return <div className={classes}>
  			<DropdownButton
  			 id={id}
  			disabled={this.props.disabled} 
  			toggleOpen={this.toogleOpen.bind(this)}>{this.state.title}
  			</DropdownButton>
  			<DropdownMenu items={this.props.items} onSelect={this.handleTitleAndSelect.bind(this)} id={id}/>
			</div>
		
	}
}
DropDown.propTypes = {
	title: React.PropTypes.string,
	items: React.PropTypes.array,
	disabled: React.PropTypes.bool,
	updateTitle: React.PropTypes.bool
};
DropDown.defaultProps = {
	title: "Dropdown",
	disabled: false,
	updateTitle: true
};



export default DropDown;
