import React from 'react';
import classSet from 'classnames';

class DropdownMenuItem extends React.Component{

  handleSelect(e){
    e.preventDefault();
    if(!this.props.disabled){
      let selectedItem = {
        text: e.target.text,
        value: e.target.getAttribute("value")
      };
      this.props.onSelect(selectedItem);
    }
  }

  render(){
    var classes = classSet({
      'divider': this.props.isDivider,
      'disabled': this.props.disabled
    });

    var content = this.renderItemContent();

    return(
        <li role="presentation" className={classes}>
          {content}
        </li>
    )
  }

  renderItemContent(){
    if(this.props.isDivider) return null
    else return (
      <a role="menuitem" tabindex="-1" href="#"
        value={this.props.value}
        onClick={this.handleSelect.bind(this)}>
          {this.props.children}
      </a>
    )
  }
}
DropdownMenuItem.propTypes = {
  isDivider: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.string
};
DropdownMenuItem.defaultProps = {
  isDivider: false,
  disabled: false
};

export default DropdownMenuItem;
