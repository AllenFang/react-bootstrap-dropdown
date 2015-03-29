import React from 'react';
import classSet from 'classnames';

var DropdownMenuItem = React.createClass({
  propTypes: {
    isDivider: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    value: React.PropTypes.string
  },

  handleSelect(e){
    e.preventDefault();
    if(!this.props.disabled){
      let selectedItem = {
        text: e.target.text,
        value: e.target.getAttribute("value")
      };
      this.props.onSelect(selectedItem);
    }
  },

  render(){
    var isDivider = typeof this.props.isDivider !== "undefined" && this.props.isDivider;
    var isDisabled = typeof this.props.disabled !== "undefined" && this.props.disabled;
    var classes = classSet({
      'divider': isDivider,
      'disabled': isDisabled
    });

    var content = this.renderItemContent(isDivider);

    return(
        <li role="presentation" className={classes}>
          {content}
        </li>
    )
  },

  renderItemContent(isDivider){
    if(isDivider) return null
    else return (
      <a role="menuitem" tabindex="-1" href="#"
        value={this.props.value}
        onClick={this.handleSelect}>
          {this.props.children}
      </a>
    )
  }
});

export default DropdownMenuItem;
