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
            onChange: onselect,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2IiwidmFsdWUiLCJ1c2VDb250ZXh0IiwiRmlyZUNvbnRleHQiLCJoYW5kbGVTaWduT3V0Iiwib3B0aW9ucyIsImRlZmF1bHRPcHRpb24iLCJvbnNlbGVjdCIsIk5hdkl0ZW0iLCJwcm9wcyIsImhyZWYiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBRWQsTUFBTUMsS0FBSyxHQUFHQyx3REFBVSxDQUFDQyxnRUFBRCxDQUF4QjtBQUZjLE1BR1BDLGFBSE8sR0FHVUgsS0FIVixDQUdQRyxhQUhPO0FBS2QsTUFBTUMsT0FBTyxHQUFHLENBQ1osS0FEWSxFQUNMLEtBREssRUFDRSxPQURGLENBQWhCO0FBR0UsTUFBTUMsYUFBYSxHQUFHRCxPQUFPLENBQUMsQ0FBRCxDQUE3QjtBQUdGLHNCQUVJO0FBQUEsMkJBR2dCO0FBQUssZUFBUyxFQUFDLHFDQUFmO0FBQUEsOEJBQ0k7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBLCtCQUFZO0FBQUssbUJBQVMsRUFBQyxrQkFBZjtBQUFBLGtDQUNKLHFFQUFDLGlEQUFEO0FBQU8scUJBQVMsRUFBQyxnQkFBakI7QUFBa0MsZUFBRyxFQUFDLFdBQXRDO0FBQWtELGtCQUFNLEVBQUUsRUFBMUQ7QUFBOEQsaUJBQUssRUFBRSxFQUFyRTtBQUF5RSxlQUFHLEVBQUM7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESSxlQUVKO0FBQU0scUJBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFRSjtBQUFBLCtCQUNJO0FBQUksbUJBQVMsRUFBQyxnQkFBZDtBQUFBLGtDQUVJLHFFQUFDLE9BQUQ7QUFBUyxnQkFBSSxFQUFDLFFBQWQ7QUFBdUIsZ0JBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0kscUVBQUMsT0FBRDtBQUFTLGdCQUFJLEVBQUMsVUFBZDtBQUF5QixnQkFBSSxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosZUFLSSxxRUFBQyxxREFBRDtBQUFVLG1CQUFPLEVBQUVBLE9BQW5CO0FBQTRCLG9CQUFRLEVBQUVFLFFBQXRDO0FBQWdELGlCQUFLLEVBQUVELGFBQXZEO0FBQXNFLHVCQUFXLEVBQUM7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQU1JLHFFQUFDLE9BQUQ7QUFBUyxnQkFBSSxFQUFDLFlBQWQ7QUFBMkIsZ0JBQUksRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLGVBT0kscUVBQUMsT0FBRDtBQUFTLGdCQUFJLEVBQUMsV0FBZDtBQUEwQixnQkFBSSxFQUFFO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEosZUFTRztBQUFHLGdCQUFJLEVBQUMsUUFBUjtBQUFBLG1DQUFpQjtBQUFLLG1CQUFLLEVBQUMsNEJBQVg7QUFBd0MsdUJBQVMsRUFBQywyREFBbEQ7QUFBK0csa0JBQUksRUFBQyxNQUFwSDtBQUEySCxxQkFBTyxFQUFDLFdBQW5JO0FBQStJLG9CQUFNLEVBQUMsY0FBdEo7QUFBQSxxQ0FDMUM7QUFBTSxrQ0FBZSxPQUFyQjtBQUE2QixtQ0FBZ0IsT0FBN0M7QUFBcUQsZ0NBQWEsR0FBbEU7QUFBc0UsaUJBQUMsRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQWtDSCxDQTdDRCxDLENBOENBOzs7R0E5Q01OLEc7O0tBQUFBLEc7QUErQ1NBLGtFQUFmO0FBQ08sSUFBTVEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQUMsS0FBSztBQUFBLHNCQUN4QjtBQUFBLDJCQUNJO0FBQUcsVUFBSSxFQUFFQSxLQUFLLENBQUNDLElBQWY7QUFDSSxlQUFTLEVBQUMsa0dBRGQ7QUFBQSxnQkFFS0QsS0FBSyxDQUFDRTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHdCO0FBQUEsQ0FBckI7TUFBTUgsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjU1YjQwODlkNjkzZDg5YWIyMjE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZpcmVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9GaXJlQ29udGV4dCdcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0LWRyb3Bkb3duJztcclxuXHJcbiBcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IHVzZUNvbnRleHQoRmlyZUNvbnRleHQpXHJcbiAgICBjb25zdCB7aGFuZGxlU2lnbk91dH0gPSB2YWx1ZVxyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICAgICAgJ29uZScsICd0d28nLCAndGhyZWUnXHJcbiAgICAgIF07XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb24gPSBvcHRpb25zWzBdO1xyXG4gICAgIFxyXG5cclxuICAgIHJldHVybiAoICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcC00IGJnLXJlZC02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW0tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlclwiIHNyYz1cIi9Mb2dvLnBuZ1wiIGhlaWdodD17MzB9IHdpZHRoPXszMH0gYWx0PVwiTG9nbyBGRi1MYWltYmFjaCBhbSBPc3Ryb25nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+RmV1ZXJ3ZWhyIExhaW1iYWNoPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIi9uZXVlc1wiIHRleHQ9XCJOZXdzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIi9ub3RmYWxsXCIgdGV4dD1cIlZlcmhhbHRlbiBpbSBOb3RmYWxsXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBvcHRpb25zPXtvcHRpb25zfSBvbkNoYW5nZT17b25zZWxlY3R9IHZhbHVlPXtkZWZhdWx0T3B0aW9ufSBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhbiBvcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIi9taXRtYWNoZW5cIiB0ZXh0PVwiTWl0bWFjaGVuXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIi9mdWhycGFya1wiIHRleHQgPVwiRnVocnBhcmtcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xvZ2luXCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC02IHRleHQtd2hpdGUgaG92ZXI6ZmlsbC1jdXJyZW50IHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCIgIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTE3IDIwaDV2LTJhMyAzIDAgMDAtNS4zNTYtMS44NTdNMTcgMjBIN20xMCAwdi0yYzAtLjY1Ni0uMTI2LTEuMjgzLS4zNTYtMS44NTdNNyAyMEgydi0yYTMgMyAwIDAxNS4zNTYtMS44NTdNNyAyMHYtMmMwLS42NTYuMTI2LTEuMjgzLjM1Ni0xLjg1N20wIDBhNS4wMDIgNS4wMDIgMCAwMTkuMjg4IDBNMTUgN2EzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6bTYgM2EyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6TTcgMTBhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwelwiIC8+XHJcbiAgPC9zdmc+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbi8vZGllcyBpc3QgZWluIHRlc3Qga29tbWVudGFyXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG5leHBvcnQgY29uc3QgTmF2SXRlbSA9IHByb3BzID0+KFxyXG4gICAgPGxpPlxyXG4gICAgICAgIDxhIGhyZWY9e3Byb3BzLmhyZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtMiBweS0xIGhvdmVyOnRleHQtZ3JheS0zMDAgcm91bmRlZCB0cmFuc2l0aW9uLWNvbG9yIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAgICB7cHJvcHMudGV4dH1cclxuICAgICAgICA8L2E+XHJcbiAgICA8L2xpPlxyXG4gICAgKTtcclxuICAgICJdLCJzb3VyY2VSb290IjoiIn0=