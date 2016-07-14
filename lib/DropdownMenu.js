"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var DropdownMenuItem = _interopRequire(require("./DropdownMenuItem"));

var DropdownMenu = (function (_React$Component) {
  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(DropdownMenu, _React$Component);

  _createClass(DropdownMenu, {
    render: {
      value: function render() {
        var self = this;
        var menuItems = this.props.items.map(function (item, key) {
          return React.createElement(
            DropdownMenuItem,
            {
              key: key,
              value: item.value,
              onSelect: self.props.onSelect,
              disabled: item.disabled,
              isDivider: item.isDivider },
            item.text
          );
        });
        return React.createElement(
          "ul",
          { className: "dropdown-menu", role: "menu", "aria-labelledby": this.props.id },
          menuItems
        );
      }
    }
  });

  return DropdownMenu;
})(React.Component);

module.exports = DropdownMenu;