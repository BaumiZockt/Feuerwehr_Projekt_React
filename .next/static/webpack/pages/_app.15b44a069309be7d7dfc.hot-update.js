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


var _jsxFileName = "C:\\Users\\Oliver\\Documents\\Feuerwehr\\website2\\app\\components\\Nav.js",
    _this = undefined,
    _s = $RefreshSig$();





var Nav = function Nav() {
  _s();

  var value = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_FireContext__WEBPACK_IMPORTED_MODULE_3__["FireContext"]);
  var handleSignOut = value.handleSignOut;
  var options = ['one', 'two', 'three'];
  var defaultOption = options[0];

  /*#__PURE__*/
  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Dropdown, {
    options: options,
    onChange: _this._onSelect,
    value: defaultOption,
    placeholder: "Select an option"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }, _this);

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
            lineNumber: 27,
            columnNumber: 37
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "ml-2",
            children: "Feuerwehr Laimbach"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 37
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 41
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 29
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "flex space-x-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
            href: "/neues",
            text: "News"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
            href: "/notfall",
            text: "Verhalten im Notfall"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
            href: "/mitmachen",
            text: "Mitmachen"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
            href: "/fuhrpark",
            text: "Fuhrpark"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
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
                lineNumber: 53,
                columnNumber: 3
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 45
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 28
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
      lineNumber: 68,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2IiwidmFsdWUiLCJ1c2VDb250ZXh0IiwiRmlyZUNvbnRleHQiLCJoYW5kbGVTaWduT3V0Iiwib3B0aW9ucyIsImRlZmF1bHRPcHRpb24iLCJfb25TZWxlY3QiLCJOYXZJdGVtIiwicHJvcHMiLCJocmVmIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTs7QUFJQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBRWQsTUFBTUMsS0FBSyxHQUFHQyx3REFBVSxDQUFDQyxnRUFBRCxDQUF4QjtBQUZjLE1BR1BDLGFBSE8sR0FHVUgsS0FIVixDQUdQRyxhQUhPO0FBS2QsTUFBTUMsT0FBTyxHQUFHLENBQ1osS0FEWSxFQUNMLEtBREssRUFDRSxPQURGLENBQWhCO0FBR0UsTUFBTUMsYUFBYSxHQUFHRCxPQUFPLENBQUMsQ0FBRCxDQUE3Qjs7QUFDQTtBQUFBLHVFQUFDLFFBQUQ7QUFBVSxXQUFPLEVBQUVBLE9BQW5CO0FBQTRCLFlBQVEsRUFBRSxLQUFJLENBQUNFLFNBQTNDO0FBQXNELFNBQUssRUFBRUQsYUFBN0Q7QUFBNEUsZUFBVyxFQUFDO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUYsc0JBRUk7QUFBQSwyQkFHZ0I7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBQSw4QkFDSTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUEsK0JBQVk7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsa0NBQ0oscUVBQUMsaURBQUQ7QUFBTyxxQkFBUyxFQUFDLGdCQUFqQjtBQUFrQyxlQUFHLEVBQUMsV0FBdEM7QUFBa0Qsa0JBQU0sRUFBRSxFQUExRDtBQUE4RCxpQkFBSyxFQUFFLEVBQXJFO0FBQXlFLGVBQUcsRUFBQztBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURJLGVBRUo7QUFBTSxxQkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVFKO0FBQUEsK0JBQ0k7QUFBSSxtQkFBUyxFQUFDLGdCQUFkO0FBQUEsa0NBRUkscUVBQUMsT0FBRDtBQUFTLGdCQUFJLEVBQUMsUUFBZDtBQUF1QixnQkFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSSxxRUFBQyxPQUFEO0FBQVMsZ0JBQUksRUFBQyxVQUFkO0FBQXlCLGdCQUFJLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQWVJLHFFQUFDLE9BQUQ7QUFBUyxnQkFBSSxFQUFDLFlBQWQ7QUFBMkIsZ0JBQUksRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZKLGVBZ0JJLHFFQUFDLE9BQUQ7QUFBUyxnQkFBSSxFQUFDLFdBQWQ7QUFBMEIsZ0JBQUksRUFBRTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCSixlQWtCRztBQUFHLGdCQUFJLEVBQUMsUUFBUjtBQUFBLG1DQUFpQjtBQUFLLG1CQUFLLEVBQUMsNEJBQVg7QUFBd0MsdUJBQVMsRUFBQywyREFBbEQ7QUFBK0csa0JBQUksRUFBQyxNQUFwSDtBQUEySCxxQkFBTyxFQUFDLFdBQW5JO0FBQStJLG9CQUFNLEVBQUMsY0FBdEo7QUFBQSxxQ0FDMUM7QUFBTSxrQ0FBZSxPQUFyQjtBQUE2QixtQ0FBZ0IsT0FBN0M7QUFBcUQsZ0NBQWEsR0FBbEU7QUFBc0UsaUJBQUMsRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFsQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUEyQ0gsQ0F0REQsQyxDQXVEQTs7O0dBdkRNTixHOztLQUFBQSxHO0FBd0RTQSxrRUFBZjtBQUNPLElBQU1RLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLEtBQUs7QUFBQSxzQkFDeEI7QUFBQSwyQkFDSTtBQUFHLFVBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUFmO0FBQ0ksZUFBUyxFQUFDLGtHQURkO0FBQUEsZ0JBRUtELEtBQUssQ0FBQ0U7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUR3QjtBQUFBLENBQXJCO01BQU1ILE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xNWI0NGEwNjkzMDliZTdkN2RmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IEZpcmVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9GaXJlQ29udGV4dCdcclxuXHJcbiBcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IHVzZUNvbnRleHQoRmlyZUNvbnRleHQpXHJcbiAgICBjb25zdCB7aGFuZGxlU2lnbk91dH0gPSB2YWx1ZVxyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICAgICAgJ29uZScsICd0d28nLCAndGhyZWUnXHJcbiAgICAgIF07XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb24gPSBvcHRpb25zWzBdO1xyXG4gICAgICA8RHJvcGRvd24gb3B0aW9ucz17b3B0aW9uc30gb25DaGFuZ2U9e3RoaXMuX29uU2VsZWN0fSB2YWx1ZT17ZGVmYXVsdE9wdGlvbn0gcGxhY2Vob2xkZXI9XCJTZWxlY3QgYW4gb3B0aW9uXCIgLz47XHJcblxyXG4gICAgcmV0dXJuICggICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBwLTQgYmctcmVkLTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyXCIgc3JjPVwiL0xvZ28ucG5nXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSBhbHQ9XCJMb2dvIEZGLUxhaW1iYWNoIGFtIE9zdHJvbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj5GZXVlcndlaHIgTGFpbWJhY2g8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL25ldWVzXCIgdGV4dD1cIk5ld3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL25vdGZhbGxcIiB0ZXh0PVwiVmVyaGFsdGVuIGltIE5vdGZhbGxcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGFzZGYgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25CdXR0b24gaWQ9XCJkcm9wZG93bi1iYXNpYy1idXR0b25cIiB0aXRsZT1cIlNvbWV0aGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYXVzYmlsZHVuZ1wiPkF1c2JpbGR1bmc8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9tYW5uc2NoYWZ0XCI+TWFubnNjaGFmdDwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2dlc2NoaWNodGVcIj5HZXNjaGljaHRlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGhyZWY9XCIvbWl0bWFjaGVuXCIgdGV4dD1cIk1pdG1hY2hlblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGhyZWY9XCIvZnVocnBhcmtcIiB0ZXh0ID1cIkZ1aHJwYXJrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sb2dpblwiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNiB0ZXh0LXdoaXRlIGhvdmVyOmZpbGwtY3VycmVudCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiICBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk0xNyAyMGg1di0yYTMgMyAwIDAwLTUuMzU2LTEuODU3TTE3IDIwSDdtMTAgMHYtMmMwLS42NTYtLjEyNi0xLjI4My0uMzU2LTEuODU3TTcgMjBIMnYtMmEzIDMgMCAwMTUuMzU2LTEuODU3TTcgMjB2LTJjMC0uNjU2LjEyNi0xLjI4My4zNTYtMS44NTdtMCAwYTUuMDAyIDUuMDAyIDAgMDE5LjI4OCAwTTE1IDdhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwem02IDNhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwek03IDEwYTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpcIiAvPlxyXG4gIDwvc3ZnPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4vL2RpZXMgaXN0IGVpbiB0ZXN0IGtvbW1lbnRhclxyXG5leHBvcnQgZGVmYXVsdCBOYXZcclxuZXhwb3J0IGNvbnN0IE5hdkl0ZW0gPSBwcm9wcyA9PihcclxuICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPXtwcm9wcy5ocmVmfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTIgcHktMSBob3Zlcjp0ZXh0LWdyYXktMzAwIHJvdW5kZWQgdHJhbnNpdGlvbi1jb2xvciBkdXJhdGlvbi0zMDBcIj5cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgPC9saT5cclxuICAgICk7XHJcbiAgICAiXSwic291cmNlUm9vdCI6IiJ9