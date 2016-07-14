"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var DropdownButton = _interopRequire(require("./DropdownButton"));

var DropdownMenu = _interopRequire(require("./DropdownMenu"));

var classSet = _interopRequire(require("classnames"));

var DropDown = (function (_React$Component) {
	function DropDown(props) {
		_classCallCheck(this, DropDown);

		_get(Object.getPrototypeOf(DropDown.prototype), "constructor", this).call(this, props);
		this.state = { title: null, open: false };
	}

	_inherits(DropDown, _React$Component);

	_createClass(DropDown, {
		componentDidMount: {
			value: function componentDidMount() {
				this.setState({ title: this.props.title, open: false });
				document.addEventListener("click", this.handleDocumentClick.bind(this));
			}
		},
		componentWillUnmount: {
			value: function componentWillUnmount() {
				document.removeEventListener("click", this.handleDocumentClick.bind(this));
			}
		},
		handleTitleAndSelect: {
			value: function handleTitleAndSelect(item) {

				// update the title state and autoclose (use single state change)
				if (this.props.updateTitle) {
					var state = this.state;
					state.title = item.text;
					state.open = false;
					this.setState(state);
				} else {
					// close the dropdown
					this.toogleOpen();
				}

				this.props.onSelect(item);
			}
		},
		toogleOpen: {

			/**
    * Toggles the visibility of the dropdown
    * @return {[type]} [description]
    */

			value: function toogleOpen() {
				var state = this.state;
				state.open = !state.open;
				this.setState(state);
			}
		},
		render: {
			value: function render() {
				var id = this._reactInternalInstance._rootNodeID;

				var classes = classSet("dropdown", {
					open: this.state.open
				});

				return React.createElement(
					"div",
					{ className: classes,
						onMouseDown: this.handleMouseDown.bind(this),
						onMouseUp: this.handleMouseUp.bind(this) },
					React.createElement(
						DropdownButton,
						{
							id: id,
							caretClass: this.props.caretClass,
							disabled: this.props.disabled,
							toggleOpen: this.toogleOpen.bind(this) },
						this.state.title
					),
					React.createElement(DropdownMenu, { items: this.props.items, onSelect: this.handleTitleAndSelect.bind(this), id: id })
				);
			}
		},
		handleDocumentClick: {

			// handle click outside of element

			value: function handleDocumentClick(e) {

				var wasDown = this.mouseDownOnModal;
				var wasUp = this.mouseUpOnModal;
				this.mouseDownOnModal = false;
				this.mouseUpOnModal = false;

				if (!wasDown && !wasUp && this.state.open) {
					this.toogleOpen();
				}
			}
		},
		handleMouseDown: {
			value: function handleMouseDown() {
				this.mouseDownOnModal = true;
			}
		},
		handleMouseUp: {
			value: function handleMouseUp() {
				this.mouseUpOnModal = true;
			}
		}
	});

	return DropDown;
})(React.Component);

DropDown.propTypes = {
	title: React.PropTypes.string,
	items: React.PropTypes.array,
	disabled: React.PropTypes.bool,
	updateTitle: React.PropTypes.bool,
	caretClass: React.PropTypes.string
};
DropDown.defaultProps = {
	title: "Dropdown",
	disabled: false,
	updateTitle: true,
	caretClass: "caret"
};

module.exports = DropDown;