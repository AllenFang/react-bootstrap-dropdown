"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var classSet = _interopRequire(require("classnames"));

var DropDownButton = (function (_React$Component) {
	function DropDownButton() {
		_classCallCheck(this, DropDownButton);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(DropDownButton, _React$Component);

	_createClass(DropDownButton, {
		render: {
			value: function render() {
				var classes = classSet("btn", "btn-default", "dropdown-toggle", {
					disabled: this.props.disabled
				});

				return React.createElement(
					"button",
					{ className: classes, type: "button", id: "bsDropDown",
						"data-toggle": "dropdown", "aria-expanded": "true" },
					this.props.children,
					React.createElement("span", { className: "caret" })
				);
			}
		}
	});

	return DropDownButton;
})(React.Component);

;

module.exports = DropDownButton;