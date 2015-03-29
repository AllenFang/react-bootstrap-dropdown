"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var DropdownMenu = _interopRequire(require("./DropdownMenu"));

var DropDown = React.createClass({
	displayName: "DropDown",

	render: function render() {
		return React.createElement(
			"button",
			{ className: "btn btn-default dropdown-toggle", type: "button", id: "bsDropDown",
				"data-toggle": "dropdown", "aria-expanded": "true" },
			this.props.children,
			React.createElement("span", { className: "caret" })
		);
	}
});

module.exports = DropDown;