import React from 'react';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';

class DropDown extends React.Component{

	constructor(props) {
		super(props);
		this.state = {title: null};
	}

	componentDidMount(){
		this.setState({title: this.props.title});
	}

	handleTitleAndSelect(item){
		this.setState({title: item.text});
		this.props.onSelect(item);
	}

	render(){
		return(
      <div className="dropdown">
  			<DropdownButton disabled={this.props.disabled}>{this.state.title}</DropdownButton>
  			<DropdownMenu items={this.props.items} onSelect={this.handleTitleAndSelect.bind(this)} />
			</div>
		)
	}
}
DropDown.propTypes = {
	title: React.PropTypes.string,
	items: React.PropTypes.array,
	disabled: React.PropTypes.bool
};
DropDown.defaultProps = {
	title: "Dropdown",
	disabled: false
};



export default DropDown;
