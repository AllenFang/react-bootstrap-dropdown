import React from 'react';
import DropdownMenuItem from './DropdownMenuItem';

class DropdownMenu extends React.Component{
  render(){
    var self = this;
    var menuItems = this.props.items.map(function(item, key){
        return(
          <DropdownMenuItem
          	key={key}
            value={item.value}
            onSelect={self.props.onSelect}
            disabled={item.disabled}
            isDivider={item.isDivider}>
              {item.text}
          </DropdownMenuItem>
        )
    });
    return(
      <ul className="dropdown-menu" role="menu" aria-labelledby={this.props.id}>
        {menuItems}
      </ul>
    )
  }
}

export default DropdownMenu;
