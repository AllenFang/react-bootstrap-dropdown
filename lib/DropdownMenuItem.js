"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var classSet = _interopRequire(require("classnames"));

var DropdownMenuItem = React.createClass({
  displayName: "DropdownMenuItem",

  propTypes: {
    isDivider: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    value: React.PropTypes.string
  },

  handleSelect: function handleSelect(e) {
    e.preventDefault();
    if (!this.props.disabled) {
      var selectedItem = {
        text: e.target.text,
        value: e.target.getAttribute("value")
      };
      this.props.onSelect(selectedItem);
    }
  },

  render: function render() {
    var isDivider = typeof this.props.isDivider !== "undefined" && this.props.isDivider;
    var classes = classSet({
      divider: isDivider,
      disabled: this.props.disabled
    });

    var content = this.renderItemContent(isDivider);

    return React.createElement(
      "li",
      { role: "presentation", className: classes },
      content
    );
  },

  renderItemContent: function renderItemContent(isDivider) {
    if (isDivider) {
      return null;
    } else {
      return React.createElement(
        "a",
        { role: "menuitem", tabindex: "-1", href: "#",
          value: this.props.value,
          onClick: this.handleSelect },
        this.props.children
      );
    }
  }
});

module.exports = DropdownMenuItem;