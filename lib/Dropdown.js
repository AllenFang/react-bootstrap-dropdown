"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var DropdownButton = _interopRequire(require("./DropdownButton"));

var DropdownMenu = _interopRequire(require("./DropdownMenu"));

var DropDown = React.createClass({
	displayName: "DropDown",

	getInitialState: function getInitialState() {
		return { title: "Dropdown" };
	},

	componentDidMount: function componentDidMount() {
		if (typeof this.props.title !== "undefined") this.setState({ title: this.props.title });
	},

	handleTitleAndSelect: function handleTitleAndSelect(item) {
		this.setState({ title: item.text });
		this.props.onSelect(item);
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: "dropdown" },
			React.createElement(
				DropdownButton,
				{ disabled: this.props.disabled },
				this.state.title
			),
			React.createElement(DropdownMenu, { items: this.props.items, onSelect: this.handleTitleAndSelect })
		);
	}
});

module.exports = DropDown;