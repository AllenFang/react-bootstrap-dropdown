"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var classSet = _interopRequire(require("classnames"));

var DropDown = React.createClass({
	displayName: "DropDown",

	render: function render() {

		var isDisabled = typeof this.props.disabled !== "undefined" && this.props.disabled;
		var classes = classSet("btn", "btn-default", "dropdown-toggle", {
			disabled: isDisabled
		});

		return React.createElement(
			"button",
			{ className: classes, type: "button", id: "bsDropDown",
				"data-toggle": "dropdown", "aria-expanded": "true" },
			this.props.children,
			React.createElement("span", { className: "caret" })
		);
	}
});

module.exports = DropDown;