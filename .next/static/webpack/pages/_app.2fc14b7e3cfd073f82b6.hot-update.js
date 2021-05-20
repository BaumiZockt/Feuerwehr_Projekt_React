webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default, NavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_FireContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/FireContext */ "./context/FireContext.js");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropdown */ "./node_modules/react-dropdown/dist/index.js");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Oliver\\Documents\\Feuerwehr\\website2\\app\\components\\Nav.js",
    _this = undefined,
    _s = $RefreshSig$();






var Nav = function Nav() {
  _s();

  var value = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_FireContext__WEBPACK_IMPORTED_MODULE_3__["FireContext"]);
  var handleSignOut = value.handleSignOut;
  var options = ['one', 'two', 'three'];
  var defaultOption = options[0];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "flex justify-between p-4 bg-red-600",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex item-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
            className: "justify-center",
            src: "/Logo.png",
            height: 30,
            width: 30,
            alt: "Logo FF-Laimbach am Ostrong"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "ml-2",
            children: "Feuerwehr Laimbach"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 37
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 41
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "flex space-x-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
            href: "/neues",
            text: "News"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
            href: "/notfall",
            text: "Verhalten im Notfall"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_dropdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
            options: options,
            onChange: _this._onSelect,
            value: defaultOption,
            placeholder: "Select an option"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
            href: "/mitmachen",
            text: "Mitmachen"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
            href: "/fuhrpark",
            text: "Fuhrpark"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/login",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 text-white hover:fill-current transition duration-300",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 3
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 45
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 28
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, _this);
}; //dies ist ein test kommentar


_s(Nav, "ksutO2/Ix3UeCrGnhyM+QEP505Y=");

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);
var NavItem = function NavItem(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: props.href,
      className: "text-sm font-bold text-white px-2 py-1 hover:text-gray-300 rounded transition-color duration-300",
      children: props.text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, _this);
};
_c2 = NavItem;

var _c, _c2;

$RefreshReg$(_c, "Nav");
$RefreshReg$(_c2, "NavItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/react-dropdown/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-dropdown/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DEFAULT_PLACEHOLDER_STRING = 'Select...';

var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      selected: _this.parseValue(props.value, props.options) || {
        label: typeof props.placeholder === 'undefined' ? DEFAULT_PLACEHOLDER_STRING : props.placeholder,
        value: ''
      },
      isOpen: false
    };
    _this.dropdownRef = (0, _react.createRef)();
    _this.mounted = true;
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.fireChangeEvent = _this.fireChangeEvent.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.value !== prevProps.value) {
        if (this.props.value) {
          var selected = this.parseValue(this.props.value, this.props.options);

          if (selected !== this.state.selected) {
            this.setState({
              selected: selected
            });
          }
        } else {
          this.setState({
            selected: {
              label: typeof this.props.placeholder === 'undefined' ? DEFAULT_PLACEHOLDER_STRING : this.props.placeholder,
              value: ''
            }
          });
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleDocumentClick, false);
      document.addEventListener('touchend', this.handleDocumentClick, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
      document.removeEventListener('click', this.handleDocumentClick, false);
      document.removeEventListener('touchend', this.handleDocumentClick, false);
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      if (this.props.onFocus && typeof this.props.onFocus === 'function') {
        this.props.onFocus(this.state.isOpen);
      }

      if (event.type === 'mousedown' && event.button !== 0) return;
      event.stopPropagation();
      event.preventDefault();

      if (!this.props.disabled) {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    }
  }, {
    key: "parseValue",
    value: function parseValue(value, options) {
      var option;

      if (typeof value === 'string') {
        for (var i = 0, num = options.length; i < num; i++) {
          if (options[i].type === 'group') {
            var match = options[i].items.filter(function (item) {
              return item.value === value;
            });

            if (match.length) {
              option = match[0];
            }
          } else if (typeof options[i].value !== 'undefined' && options[i].value === value) {
            option = options[i];
          }
        }
      }

      return option || value;
    }
  }, {
    key: "setValue",
    value: function setValue(value, label) {
      var newState = {
        selected: {
          value: value,
          label: label
        },
        isOpen: false
      };
      this.fireChangeEvent(newState);
      this.setState(newState);
    }
  }, {
    key: "fireChangeEvent",
    value: function fireChangeEvent(newState) {
      if (newState.selected !== this.state.selected && this.props.onChange) {
        this.props.onChange(newState.selected);
      }
    }
  }, {
    key: "renderOption",
    value: function renderOption(option) {
      var _classes;

      var value = option.value;

      if (typeof value === 'undefined') {
        value = option.label || option;
      }

      var label = option.label || option.value || option;
      var isSelected = value === this.state.selected.value || value === this.state.selected;
      var classes = (_classes = {}, _defineProperty(_classes, "".concat(this.props.baseClassName, "-option"), true), _defineProperty(_classes, option.className, !!option.className), _defineProperty(_classes, 'is-selected', isSelected), _classes);
      var optionClass = (0, _classnames["default"])(classes);
      return _react["default"].createElement("div", {
        key: value,
        className: optionClass,
        onMouseDown: this.setValue.bind(this, value, label),
        onClick: this.setValue.bind(this, value, label),
        role: "option",
        "aria-selected": isSelected ? 'true' : 'false'
      }, label);
    }
  }, {
    key: "buildMenu",
    value: function buildMenu() {
      var _this2 = this;

      var _this$props = this.props,
          options = _this$props.options,
          baseClassName = _this$props.baseClassName;
      var ops = options.map(function (option) {
        if (option.type === 'group') {
          var groupTitle = _react["default"].createElement("div", {
            className: "".concat(baseClassName, "-title")
          }, option.name);

          var _options = option.items.map(function (item) {
            return _this2.renderOption(item);
          });

          return _react["default"].createElement("div", {
            className: "".concat(baseClassName, "-group"),
            key: option.name,
            role: "listbox",
            tabIndex: "-1"
          }, groupTitle, _options);
        } else {
          return _this2.renderOption(option);
        }
      });
      return ops.length ? ops : _react["default"].createElement("div", {
        className: "".concat(baseClassName, "-noresults")
      }, "No options found");
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(event) {
      if (this.mounted) {
        if (!this.dropdownRef.current.contains(event.target)) {
          if (this.state.isOpen) {
            this.setState({
              isOpen: false
            });
          }
        }
      }
    }
  }, {
    key: "isValueSelected",
    value: function isValueSelected() {
      return typeof this.state.selected === 'string' || this.state.selected.value !== '';
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _classNames2, _classNames3, _classNames4, _classNames5;

      var _this$props2 = this.props,
          baseClassName = _this$props2.baseClassName,
          controlClassName = _this$props2.controlClassName,
          placeholderClassName = _this$props2.placeholderClassName,
          menuClassName = _this$props2.menuClassName,
          arrowClassName = _this$props2.arrowClassName,
          arrowClosed = _this$props2.arrowClosed,
          arrowOpen = _this$props2.arrowOpen,
          className = _this$props2.className;
      var disabledClass = this.props.disabled ? 'Dropdown-disabled' : '';
      var placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label;
      var dropdownClass = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(baseClassName, "-root"), true), _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, 'is-open', this.state.isOpen), _classNames));
      var controlClass = (0, _classnames["default"])((_classNames2 = {}, _defineProperty(_classNames2, "".concat(baseClassName, "-control"), true), _defineProperty(_classNames2, controlClassName, !!controlClassName), _defineProperty(_classNames2, disabledClass, !!disabledClass), _classNames2));
      var placeholderClass = (0, _classnames["default"])((_classNames3 = {}, _defineProperty(_classNames3, "".concat(baseClassName, "-placeholder"), true), _defineProperty(_classNames3, placeholderClassName, !!placeholderClassName), _defineProperty(_classNames3, 'is-selected', this.isValueSelected()), _classNames3));
      var menuClass = (0, _classnames["default"])((_classNames4 = {}, _defineProperty(_classNames4, "".concat(baseClassName, "-menu"), true), _defineProperty(_classNames4, menuClassName, !!menuClassName), _classNames4));
      var arrowClass = (0, _classnames["default"])((_classNames5 = {}, _defineProperty(_classNames5, "".concat(baseClassName, "-arrow"), true), _defineProperty(_classNames5, arrowClassName, !!arrowClassName), _classNames5));

      var value = _react["default"].createElement("div", {
        className: placeholderClass
      }, placeHolderValue);

      var menu = this.state.isOpen ? _react["default"].createElement("div", {
        className: menuClass,
        "aria-expanded": "true"
      }, this.buildMenu()) : null;
      return _react["default"].createElement("div", {
        ref: this.dropdownRef,
        className: dropdownClass
      }, _react["default"].createElement("div", {
        className: controlClass,
        onMouseDown: this.handleMouseDown.bind(this),
        onTouchEnd: this.handleMouseDown.bind(this),
        "aria-haspopup": "listbox"
      }, value, _react["default"].createElement("div", {
        className: "".concat(baseClassName, "-arrow-wrapper")
      }, arrowOpen && arrowClosed ? this.state.isOpen ? arrowOpen : arrowClosed : _react["default"].createElement("span", {
        className: arrowClass
      }))), menu);
    }
  }]);

  return Dropdown;
}(_react.Component);

Dropdown.defaultProps = {
  baseClassName: 'Dropdown'
};
var _default = Dropdown;
exports["default"] = _default;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZHJvcGRvd24vZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOYXYiLCJ2YWx1ZSIsInVzZUNvbnRleHQiLCJGaXJlQ29udGV4dCIsImhhbmRsZVNpZ25PdXQiLCJvcHRpb25zIiwiZGVmYXVsdE9wdGlvbiIsIl9vblNlbGVjdCIsIk5hdkl0ZW0iLCJwcm9wcyIsImhyZWYiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBRWQsTUFBTUMsS0FBSyxHQUFHQyx3REFBVSxDQUFDQyxnRUFBRCxDQUF4QjtBQUZjLE1BR1BDLGFBSE8sR0FHVUgsS0FIVixDQUdQRyxhQUhPO0FBS2QsTUFBTUMsT0FBTyxHQUFHLENBQ1osS0FEWSxFQUNMLEtBREssRUFDRSxPQURGLENBQWhCO0FBR0UsTUFBTUMsYUFBYSxHQUFHRCxPQUFPLENBQUMsQ0FBRCxDQUE3QjtBQUdGLHNCQUVJO0FBQUEsMkJBR2dCO0FBQUssZUFBUyxFQUFDLHFDQUFmO0FBQUEsOEJBQ0k7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBLCtCQUFZO0FBQUssbUJBQVMsRUFBQyxrQkFBZjtBQUFBLGtDQUNKLHFFQUFDLGlEQUFEO0FBQU8scUJBQVMsRUFBQyxnQkFBakI7QUFBa0MsZUFBRyxFQUFDLFdBQXRDO0FBQWtELGtCQUFNLEVBQUUsRUFBMUQ7QUFBOEQsaUJBQUssRUFBRSxFQUFyRTtBQUF5RSxlQUFHLEVBQUM7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESSxlQUVKO0FBQU0scUJBQVMsRUFBQyxNQUFoQjtBQUFB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QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RSx1RUFBdUU7QUFDdkUsMkVBQTJFO0FBQzNFLG9FQUFvRTtBQUNwRSxxRUFBcUU7O0FBRXJFO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMmZjMTRiN2UzY2ZkMDczZjgyYjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmlyZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0ZpcmVDb250ZXh0J1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAncmVhY3QtZHJvcGRvd24nO1xyXG5cclxuIFxyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gdXNlQ29udGV4dChGaXJlQ29udGV4dClcclxuICAgIGNvbnN0IHtoYW5kbGVTaWduT3V0fSA9IHZhbHVlXHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgICAgICAnb25lJywgJ3R3bycsICd0aHJlZSdcclxuICAgICAgXTtcclxuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbiA9IG9wdGlvbnNbMF07XHJcbiAgICAgXHJcblxyXG4gICAgcmV0dXJuICggICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBwLTQgYmctcmVkLTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyXCIgc3JjPVwiL0xvZ28ucG5nXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSBhbHQ9XCJMb2dvIEZGLUxhaW1iYWNoIGFtIE9zdHJvbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj5GZXVlcndlaHIgTGFpbWJhY2g8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL25ldWVzXCIgdGV4dD1cIk5ld3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL25vdGZhbGxcIiB0ZXh0PVwiVmVyaGFsdGVuIGltIE5vdGZhbGxcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG9wdGlvbnM9e29wdGlvbnN9IG9uQ2hhbmdlPXt0aGlzLl9vblNlbGVjdH0gdmFsdWU9e2RlZmF1bHRPcHRpb259IHBsYWNlaG9sZGVyPVwiU2VsZWN0IGFuIG9wdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL21pdG1hY2hlblwiIHRleHQ9XCJNaXRtYWNoZW5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL2Z1aHJwYXJrXCIgdGV4dCA9XCJGdWhycGFya1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9naW5cIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTYgdGV4dC13aGl0ZSBob3ZlcjpmaWxsLWN1cnJlbnQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIiAgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMTcgMjBoNXYtMmEzIDMgMCAwMC01LjM1Ni0xLjg1N00xNyAyMEg3bTEwIDB2LTJjMC0uNjU2LS4xMjYtMS4yODMtLjM1Ni0xLjg1N003IDIwSDJ2LTJhMyAzIDAgMDE1LjM1Ni0xLjg1N003IDIwdi0yYzAtLjY1Ni4xMjYtMS4yODMuMzU2LTEuODU3bTAgMGE1LjAwMiA1LjAwMiAwIDAxOS4yODggME0xNSA3YTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHptNiAzYTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpNNyAxMGEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6XCIgLz5cclxuICA8L3N2Zz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuLy9kaWVzIGlzdCBlaW4gdGVzdCBrb21tZW50YXJcclxuZXhwb3J0IGRlZmF1bHQgTmF2XHJcbmV4cG9ydCBjb25zdCBOYXZJdGVtID0gcHJvcHMgPT4oXHJcbiAgICA8bGk+XHJcbiAgICAgICAgPGEgaHJlZj17cHJvcHMuaHJlZn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC0yIHB5LTEgaG92ZXI6dGV4dC1ncmF5LTMwMCByb3VuZGVkIHRyYW5zaXRpb24tY29sb3IgZHVyYXRpb24tMzAwXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgICAgIDwvYT5cclxuICAgIDwvbGk+XHJcbiAgICApO1xyXG4gICAgIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbnZhciBERUZBVUxUX1BMQUNFSE9MREVSX1NUUklORyA9ICdTZWxlY3QuLi4nO1xuXG52YXIgRHJvcGRvd24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERyb3Bkb3duLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wZG93bihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wZG93bik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihEcm9wZG93bikuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWQ6IF90aGlzLnBhcnNlVmFsdWUocHJvcHMudmFsdWUsIHByb3BzLm9wdGlvbnMpIHx8IHtcbiAgICAgICAgbGFiZWw6IHR5cGVvZiBwcm9wcy5wbGFjZWhvbGRlciA9PT0gJ3VuZGVmaW5lZCcgPyBERUZBVUxUX1BMQUNFSE9MREVSX1NUUklORyA6IHByb3BzLnBsYWNlaG9sZGVyLFxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG4gICAgICBpc09wZW46IGZhbHNlXG4gICAgfTtcbiAgICBfdGhpcy5kcm9wZG93blJlZiA9ICgwLCBfcmVhY3QuY3JlYXRlUmVmKSgpO1xuICAgIF90aGlzLm1vdW50ZWQgPSB0cnVlO1xuICAgIF90aGlzLmhhbmRsZURvY3VtZW50Q2xpY2sgPSBfdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmZpcmVDaGFuZ2VFdmVudCA9IF90aGlzLmZpcmVDaGFuZ2VFdmVudC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJvcGRvd24sIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gcHJldlByb3BzLnZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgdmFyIHNlbGVjdGVkID0gdGhpcy5wYXJzZVZhbHVlKHRoaXMucHJvcHMudmFsdWUsIHRoaXMucHJvcHMub3B0aW9ucyk7XG5cbiAgICAgICAgICBpZiAoc2VsZWN0ZWQgIT09IHRoaXMuc3RhdGUuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiB7XG4gICAgICAgICAgICAgIGxhYmVsOiB0eXBlb2YgdGhpcy5wcm9wcy5wbGFjZWhvbGRlciA9PT0gJ3VuZGVmaW5lZCcgPyBERUZBVUxUX1BMQUNFSE9MREVSX1NUUklORyA6IHRoaXMucHJvcHMucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2ssIGZhbHNlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5oYW5kbGVEb2N1bWVudENsaWNrLCBmYWxzZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRG9jdW1lbnRDbGljaywgZmFsc2UpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmhhbmRsZURvY3VtZW50Q2xpY2ssIGZhbHNlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFuZGxlTW91c2VEb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cyAmJiB0eXBlb2YgdGhpcy5wcm9wcy5vbkZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyh0aGlzLnN0YXRlLmlzT3Blbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gIT09IDApIHJldHVybjtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwYXJzZVZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhcnNlVmFsdWUodmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBvcHRpb247XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBudW0gPSBvcHRpb25zLmxlbmd0aDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnNbaV0udHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgICAgdmFyIG1hdGNoID0gb3B0aW9uc1tpXS5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWUgPT09IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgb3B0aW9uID0gbWF0Y2hbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9uc1tpXS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9uc1tpXS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbiA9IG9wdGlvbnNbaV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvcHRpb24gfHwgdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKHZhbHVlLCBsYWJlbCkge1xuICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICBzZWxlY3RlZDoge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgaXNPcGVuOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KG5ld1N0YXRlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaXJlQ2hhbmdlRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlyZUNoYW5nZUV2ZW50KG5ld1N0YXRlKSB7XG4gICAgICBpZiAobmV3U3RhdGUuc2VsZWN0ZWQgIT09IHRoaXMuc3RhdGUuc2VsZWN0ZWQgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1N0YXRlLnNlbGVjdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyT3B0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck9wdGlvbihvcHRpb24pIHtcbiAgICAgIHZhciBfY2xhc3NlcztcblxuICAgICAgdmFyIHZhbHVlID0gb3B0aW9uLnZhbHVlO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YWx1ZSA9IG9wdGlvbi5sYWJlbCB8fCBvcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBsYWJlbCA9IG9wdGlvbi5sYWJlbCB8fCBvcHRpb24udmFsdWUgfHwgb3B0aW9uO1xuICAgICAgdmFyIGlzU2VsZWN0ZWQgPSB2YWx1ZSA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZC52YWx1ZSB8fCB2YWx1ZSA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZDtcbiAgICAgIHZhciBjbGFzc2VzID0gKF9jbGFzc2VzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgXCJcIi5jb25jYXQodGhpcy5wcm9wcy5iYXNlQ2xhc3NOYW1lLCBcIi1vcHRpb25cIiksIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsIG9wdGlvbi5jbGFzc05hbWUsICEhb3B0aW9uLmNsYXNzTmFtZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgJ2lzLXNlbGVjdGVkJywgaXNTZWxlY3RlZCksIF9jbGFzc2VzKTtcbiAgICAgIHZhciBvcHRpb25DbGFzcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNsYXNzZXMpO1xuICAgICAgcmV0dXJuIF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGtleTogdmFsdWUsXG4gICAgICAgIGNsYXNzTmFtZTogb3B0aW9uQ2xhc3MsXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLnNldFZhbHVlLmJpbmQodGhpcywgdmFsdWUsIGxhYmVsKSxcbiAgICAgICAgb25DbGljazogdGhpcy5zZXRWYWx1ZS5iaW5kKHRoaXMsIHZhbHVlLCBsYWJlbCksXG4gICAgICAgIHJvbGU6IFwib3B0aW9uXCIsXG4gICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBpc1NlbGVjdGVkID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICAgICAgfSwgbGFiZWwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJidWlsZE1lbnVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGRNZW51KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgb3B0aW9ucyA9IF90aGlzJHByb3BzLm9wdGlvbnMsXG4gICAgICAgICAgYmFzZUNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmJhc2VDbGFzc05hbWU7XG4gICAgICB2YXIgb3BzID0gb3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uLnR5cGUgPT09ICdncm91cCcpIHtcbiAgICAgICAgICB2YXIgZ3JvdXBUaXRsZSA9IF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLXRpdGxlXCIpXG4gICAgICAgICAgfSwgb3B0aW9uLm5hbWUpO1xuXG4gICAgICAgICAgdmFyIF9vcHRpb25zID0gb3B0aW9uLml0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5yZW5kZXJPcHRpb24oaXRlbSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItZ3JvdXBcIiksXG4gICAgICAgICAgICBrZXk6IG9wdGlvbi5uYW1lLFxuICAgICAgICAgICAgcm9sZTogXCJsaXN0Ym94XCIsXG4gICAgICAgICAgICB0YWJJbmRleDogXCItMVwiXG4gICAgICAgICAgfSwgZ3JvdXBUaXRsZSwgX29wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfdGhpczIucmVuZGVyT3B0aW9uKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG9wcy5sZW5ndGggPyBvcHMgOiBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLW5vcmVzdWx0c1wiKVxuICAgICAgfSwgXCJObyBvcHRpb25zIGZvdW5kXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYW5kbGVEb2N1bWVudENsaWNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZURvY3VtZW50Q2xpY2soZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1ZhbHVlU2VsZWN0ZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNWYWx1ZVNlbGVjdGVkKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLnN0YXRlLnNlbGVjdGVkID09PSAnc3RyaW5nJyB8fCB0aGlzLnN0YXRlLnNlbGVjdGVkLnZhbHVlICE9PSAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcywgX2NsYXNzTmFtZXMyLCBfY2xhc3NOYW1lczMsIF9jbGFzc05hbWVzNCwgX2NsYXNzTmFtZXM1O1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBiYXNlQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLmJhc2VDbGFzc05hbWUsXG4gICAgICAgICAgY29udHJvbENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5jb250cm9sQ2xhc3NOYW1lLFxuICAgICAgICAgIHBsYWNlaG9sZGVyQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLnBsYWNlaG9sZGVyQ2xhc3NOYW1lLFxuICAgICAgICAgIG1lbnVDbGFzc05hbWUgPSBfdGhpcyRwcm9wczIubWVudUNsYXNzTmFtZSxcbiAgICAgICAgICBhcnJvd0NsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5hcnJvd0NsYXNzTmFtZSxcbiAgICAgICAgICBhcnJvd0Nsb3NlZCA9IF90aGlzJHByb3BzMi5hcnJvd0Nsb3NlZCxcbiAgICAgICAgICBhcnJvd09wZW4gPSBfdGhpcyRwcm9wczIuYXJyb3dPcGVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5jbGFzc05hbWU7XG4gICAgICB2YXIgZGlzYWJsZWRDbGFzcyA9IHRoaXMucHJvcHMuZGlzYWJsZWQgPyAnRHJvcGRvd24tZGlzYWJsZWQnIDogJyc7XG4gICAgICB2YXIgcGxhY2VIb2xkZXJWYWx1ZSA9IHR5cGVvZiB0aGlzLnN0YXRlLnNlbGVjdGVkID09PSAnc3RyaW5nJyA/IHRoaXMuc3RhdGUuc2VsZWN0ZWQgOiB0aGlzLnN0YXRlLnNlbGVjdGVkLmxhYmVsO1xuICAgICAgdmFyIGRyb3Bkb3duQ2xhc3MgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1yb290XCIpLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBjbGFzc05hbWUsICEhY2xhc3NOYW1lKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCAnaXMtb3BlbicsIHRoaXMuc3RhdGUuaXNPcGVuKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgIHZhciBjb250cm9sQ2xhc3MgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXMyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWNvbnRyb2xcIiksIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBjb250cm9sQ2xhc3NOYW1lLCAhIWNvbnRyb2xDbGFzc05hbWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBkaXNhYmxlZENsYXNzLCAhIWRpc2FibGVkQ2xhc3MpLCBfY2xhc3NOYW1lczIpKTtcbiAgICAgIHZhciBwbGFjZWhvbGRlckNsYXNzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoKF9jbGFzc05hbWVzMyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMzLCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1wbGFjZWhvbGRlclwiKSwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczMsIHBsYWNlaG9sZGVyQ2xhc3NOYW1lLCAhIXBsYWNlaG9sZGVyQ2xhc3NOYW1lKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMywgJ2lzLXNlbGVjdGVkJywgdGhpcy5pc1ZhbHVlU2VsZWN0ZWQoKSksIF9jbGFzc05hbWVzMykpO1xuICAgICAgdmFyIG1lbnVDbGFzcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKChfY2xhc3NOYW1lczQgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzNCwgXCJcIi5jb25jYXQoYmFzZUNsYXNzTmFtZSwgXCItbWVudVwiKSwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczQsIG1lbnVDbGFzc05hbWUsICEhbWVudUNsYXNzTmFtZSksIF9jbGFzc05hbWVzNCkpO1xuICAgICAgdmFyIGFycm93Q2xhc3MgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXM1ID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczUsIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWFycm93XCIpLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzNSwgYXJyb3dDbGFzc05hbWUsICEhYXJyb3dDbGFzc05hbWUpLCBfY2xhc3NOYW1lczUpKTtcblxuICAgICAgdmFyIHZhbHVlID0gX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBwbGFjZWhvbGRlckNsYXNzXG4gICAgICB9LCBwbGFjZUhvbGRlclZhbHVlKTtcblxuICAgICAgdmFyIG1lbnUgPSB0aGlzLnN0YXRlLmlzT3BlbiA/IF9yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbWVudUNsYXNzLFxuICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJ0cnVlXCJcbiAgICAgIH0sIHRoaXMuYnVpbGRNZW51KCkpIDogbnVsbDtcbiAgICAgIHJldHVybiBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICByZWY6IHRoaXMuZHJvcGRvd25SZWYsXG4gICAgICAgIGNsYXNzTmFtZTogZHJvcGRvd25DbGFzc1xuICAgICAgfSwgX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjb250cm9sQ2xhc3MsXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpLFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpLFxuICAgICAgICBcImFyaWEtaGFzcG9wdXBcIjogXCJsaXN0Ym94XCJcbiAgICAgIH0sIHZhbHVlLCBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLWFycm93LXdyYXBwZXJcIilcbiAgICAgIH0sIGFycm93T3BlbiAmJiBhcnJvd0Nsb3NlZCA/IHRoaXMuc3RhdGUuaXNPcGVuID8gYXJyb3dPcGVuIDogYXJyb3dDbG9zZWQgOiBfcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBhcnJvd0NsYXNzXG4gICAgICB9KSkpLCBtZW51KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhc2VDbGFzc05hbWU6ICdEcm9wZG93bidcbn07XG52YXIgX2RlZmF1bHQgPSBEcm9wZG93bjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9