import React from 'react';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';

var DropDown = React.createClass({
	getInitialState() {
    return {title: "Dropdown"};
  },

	componentDidMount(){
		if(typeof this.props.title !== "undefined")
			this.setState({title: this.props.title});
	},

	handleTitleAndSelect(item){
		this.setState({title: item.text});
		this.props.onSelect(item);
	},

	render(){
		return(
      <div className="dropdown">
  			<DropdownButton disabled={this.props.disabled}>{this.state.title}</DropdownButton>
  			<DropdownMenu items={this.props.items} onSelect={this.handleTitleAndSelect} />
			</div>
		)
	}
});



export default DropDown;
