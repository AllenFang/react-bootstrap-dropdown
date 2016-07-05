"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var classSet = _interopRequire(require("classnames"));

var DropdownMenuItem = (function (_React$Component) {
  function DropdownMenuItem() {
    _classCallCheck(this, DropdownMenuItem);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(DropdownMenuItem, _React$Component);

  _createClass(DropdownMenuItem, {
    handleSelect: {
      value: function handleSelect(e) {
        e.preventDefault();
        if (!this.props.disabled) {
          var selectedItem = {
            text: e.target.text,
            value: e.target.getAttribute("value")
          };
          this.props.onSelect(selectedItem);
        }
      }
    },
    render: {
      value: function render() {
        var classes = classSet({
          divider: this.props.isDivider,
          disabled: this.props.disabled
        });

        var content = this.renderItemContent();

        return React.createElement(
          "li",
          { role: "presentation", className: classes },
          content
        );
      }
    },
    renderItemContent: {
      value: function renderItemContent() {
        if (this.props.isDivider) {
          return null;
        } else {
          return React.createElement(
            "a",
            { role: "menuitem", tabIndex: "-1", href: "#",
              value: this.props.value,
              onClick: this.handleSelect.bind(this) },
            this.props.children
          );
        }
      }
    }
  });

  return DropdownMenuItem;
})(React.Component);

DropdownMenuItem.propTypes = {
  isDivider: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  value: React.PropTypes.string
};
DropdownMenuItem.defaultProps = {
  isDivider: false,
  disabled: false
};

module.exports = DropdownMenuItem;