"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var DropdownButton = _interopRequire(require("./DropdownButton"));

var DropdownMenu = _interopRequire(require("./DropdownMenu"));

var DropDown = (function (_React$Component) {
	function DropDown(props) {
		_classCallCheck(this, DropDown);

		_get(Object.getPrototypeOf(DropDown.prototype), "constructor", this).call(this, props);
		this.state = { title: null };
	}

	_inherits(DropDown, _React$Component);

	_createClass(DropDown, {
		componentDidMount: {
			value: function componentDidMount() {
				this.setState({ title: this.props.title });
			}
		},
		handleTitleAndSelect: {
			value: function handleTitleAndSelect(item) {
				this.setState({ title: item.text });
				this.props.onSelect(item);
			}
		},
		render: {
			value: function render() {
				return React.createElement(
					"div",
					{ className: "dropdown" },
					React.createElement(
						DropdownButton,
						{ disabled: this.props.disabled },
						this.state.title
					),
					React.createElement(DropdownMenu, { items: this.props.items, onSelect: this.handleTitleAndSelect.bind(this) })
				);
			}
		}
	});

	return DropDown;
})(React.Component);

DropDown.propTypes = {
	title: React.PropTypes.string,
	items: React.PropTypes.array,
	disabled: React.PropTypes.bool
};
DropDown.defaultProps = {
	title: "Dropdown",
	disabled: false
};

module.exports = DropDown;