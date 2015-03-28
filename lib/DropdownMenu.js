import React from 'react';
import DropdownMenuItem from './DropdownMenuItem';

var DropdownMenu = React.createClass({
  render(){
    var self = this;
    var menuItems = this.props.items.map(function(item){
        return(
          <DropdownMenuItem
            value={item.value}
            onSelect={self.props.onSelect}
            disabled={item.disabled}
            isDivider={item.isDivider}>
              {item.text}
          </DropdownMenuItem>
        )
    });
    return(
      <ul className="dropdown-menu" role="menu" aria-labelledby="bsDropDown">
        {menuItems}
      </ul>
    )
  }
});

export default DropdownMenu;
