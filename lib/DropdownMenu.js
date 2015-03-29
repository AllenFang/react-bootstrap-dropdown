"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var DropdownMenuItem = _interopRequire(require("./DropdownMenuItem"));

var DropdownMenu = React.createClass({
  displayName: "DropdownMenu",

  render: function render() {
    var self = this;
    var menuItems = this.props.items.map(function (item) {
      return React.createElement(
        DropdownMenuItem,
        {
          value: item.value,
          onSelect: self.props.onSelect,
          disabled: item.disabled,
          isDivider: item.isDivider },
        item.text
      );
    });
    return React.createElement(
      "ul",
      { className: "dropdown-menu", role: "menu", "aria-labelledby": "bsDropDown" },
      menuItems
    );
  }
});

module.exports = DropdownMenu;