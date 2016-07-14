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
		document.addEventListener('click', this.handleDocumentClick.bind(this));
	}

	componentWillUnmount() {
	    document.removeEventListener('click', this.handleDocumentClick.bind(this));
	}

	handleTitleAndSelect(item){

		// update the title state and autoclose (use single state change)
		if (this.props.updateTitle) {
			var state = this.state;
			state.title =  item.text;
			state.open = false;
			this.setState(state);
		} else {
			// close the dropdown
			this.toogleOpen();

		}

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

		return <div className={classes} 
					onMouseDown={this.handleMouseDown.bind(this)}
					onMouseUp={this.handleMouseUp.bind(this)}>
  			<DropdownButton
  			 id={id}
  			 caretClass={this.props.caretClass}
  			disabled={this.props.disabled} 
  			toggleOpen={this.toogleOpen.bind(this)}>{this.state.title}
  			</DropdownButton>
  			<DropdownMenu items={this.props.items} onSelect={this.handleTitleAndSelect.bind(this)} id={id}/>
			</div>
		
	}

	// handle click outside of element

	handleDocumentClick(e) {
		
	    var wasDown = this.mouseDownOnModal;
	    var wasUp = this.mouseUpOnModal;
	    this.mouseDownOnModal = false;
	    this.mouseUpOnModal = false;
	
	    if (!wasDown && !wasUp && this.state.open) {
	    	this.toogleOpen();
	    }
	        
	}

	handleMouseDown() {
	    this.mouseDownOnModal = true;
	}

	handleMouseUp() {
	    this.mouseUpOnModal = true;
	}
}

DropDown.propTypes = {
	title: React.PropTypes.string,
	items: React.PropTypes.array,
	disabled: React.PropTypes.bool,
	updateTitle: React.PropTypes.bool,
	caretClass: React.PropTypes.string
};
DropDown.defaultProps = {
	title: "Dropdown",
	disabled: false,
	updateTitle: true,
	caretClass: "caret"
};



export default DropDown;
