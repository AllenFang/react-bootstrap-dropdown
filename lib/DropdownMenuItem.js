import React from 'react';

var DropdownMenuItem = React.createClass({
  handleSelect(e){
    e.preventDefault();
    // React.findDOMNode(e.target);
    let selectedItem = {
      text: e.target.text,
      value: e.target.getAttribute("value")
    };
    this.props.onSelect(selectedItem);
  },

  render(){
    return(
        <li role="presentation">
          <a role="menuitem" tabindex="-1" href="#" value={this.props.value} onClick={this.handleSelect}>{this.props.children}</a>
        </li>
    )
  }
});

export default DropdownMenuItem;
