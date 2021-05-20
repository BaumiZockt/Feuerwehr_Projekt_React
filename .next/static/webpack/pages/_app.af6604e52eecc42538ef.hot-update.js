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
            value: "Fuhrpark"
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
};

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
      lineNumber: 57,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2IiwidmFsdWUiLCJ1c2VDb250ZXh0IiwiRmlyZUNvbnRleHQiLCJoYW5kbGVTaWduT3V0Iiwib3B0aW9ucyIsIk5hdkl0ZW0iLCJwcm9wcyIsImhyZWYiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBRWQsTUFBTUMsS0FBSyxHQUFHQyx3REFBVSxDQUFDQyxnRUFBRCxDQUF4QjtBQUZjLE1BR1BDLGFBSE8sR0FHVUgsS0FIVixDQUdQRyxhQUhPO0FBS2QsTUFBTUMsT0FBTyxHQUFHLENBQ1osS0FEWSxFQUNMLEtBREssRUFDRSxPQURGLENBQWhCO0FBTUEsc0JBRUk7QUFBQSwyQkFHZ0I7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBQSw4QkFDSTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUEsK0JBQVk7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsa0NBQ0oscUVBQUMsaURBQUQ7QUFBTyxxQkFBUyxFQUFDLGdCQUFqQjtBQUFrQyxlQUFHLEVBQUMsV0FBdEM7QUFBa0Qsa0JBQU0sRUFBRSxFQUExRDtBQUE4RCxpQkFBSyxFQUFFLEVBQXJFO0FBQXlFLGVBQUcsRUFBQztBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURJLGVBRUo7QUFBTSxxQkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVFKO0FBQUEsK0JBQ0k7QUFBSSxtQkFBUyxFQUFDLGdCQUFkO0FBQUEsa0NBRUkscUVBQUMsT0FBRDtBQUFTLGdCQUFJLEVBQUMsUUFBZDtBQUF1QixnQkFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSSxxRUFBQyxPQUFEO0FBQVMsZ0JBQUksRUFBQyxVQUFkO0FBQXlCLGdCQUFJLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUtJLHFFQUFDLHFEQUFEO0FBQVUsbUJBQU8sRUFBRUEsT0FBbkI7QUFBNkIsaUJBQUssRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUkscUVBQUMsT0FBRDtBQUFTLGdCQUFJLEVBQUMsWUFBZDtBQUEyQixnQkFBSSxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosZUFPSSxxRUFBQyxPQUFEO0FBQVMsZ0JBQUksRUFBQyxXQUFkO0FBQTBCLGdCQUFJLEVBQUU7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSixlQVNHO0FBQUcsZ0JBQUksRUFBQyxRQUFSO0FBQUEsbUNBQWlCO0FBQUssbUJBQUssRUFBQyw0QkFBWDtBQUF3Qyx1QkFBUyxFQUFDLDJEQUFsRDtBQUErRyxrQkFBSSxFQUFDLE1BQXBIO0FBQTJILHFCQUFPLEVBQUMsV0FBbkk7QUFBK0ksb0JBQU0sRUFBQyxjQUF0SjtBQUFBLHFDQUMxQztBQUFNLGtDQUFlLE9BQXJCO0FBQTZCLG1DQUFnQixPQUE3QztBQUFxRCxnQ0FBYSxHQUFsRTtBQUFzRSxpQkFBQyxFQUFDO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBa0NILENBN0NEOztHQUFNTCxHOztLQUFBQSxHO0FBOENTQSxrRUFBZjtBQUNPLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLEtBQUs7QUFBQSxzQkFDeEI7QUFBQSwyQkFDSTtBQUFHLFVBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUFmO0FBQ0ksZUFBUyxFQUFDLGtHQURkO0FBQUEsZ0JBRUtELEtBQUssQ0FBQ0U7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUR3QjtBQUFBLENBQXJCO01BQU1ILE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hZjY2MDRlNTJlZWNjNDI1MzhlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGaXJlQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvRmlyZUNvbnRleHQnXHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1kcm9wZG93bic7XHJcblxyXG4gXHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSB1c2VDb250ZXh0KEZpcmVDb250ZXh0KVxyXG4gICAgY29uc3Qge2hhbmRsZVNpZ25PdXR9ID0gdmFsdWVcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgICAgICdvbmUnLCAndHdvJywgJ3RocmVlJ1xyXG4gICAgICBdO1xyXG5cclxuICAgICBcclxuXHJcbiAgICByZXR1cm4gKCAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHAtNCBiZy1yZWQtNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXJcIiBzcmM9XCIvTG9nby5wbmdcIiBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9IGFsdD1cIkxvZ28gRkYtTGFpbWJhY2ggYW0gT3N0cm9uZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPkZldWVyd2VociBMYWltYmFjaDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGhyZWY9XCIvbmV1ZXNcIiB0ZXh0PVwiTmV3c1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGhyZWY9XCIvbm90ZmFsbFwiIHRleHQ9XCJWZXJoYWx0ZW4gaW0gTm90ZmFsbFwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb3B0aW9ucz17b3B0aW9uc30gIHZhbHVlPVwiRnVocnBhcmtcIiAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGhyZWY9XCIvbWl0bWFjaGVuXCIgdGV4dD1cIk1pdG1hY2hlblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGhyZWY9XCIvZnVocnBhcmtcIiB0ZXh0ID1cIkZ1aHJwYXJrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sb2dpblwiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNiB0ZXh0LXdoaXRlIGhvdmVyOmZpbGwtY3VycmVudCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiICBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk0xNyAyMGg1di0yYTMgMyAwIDAwLTUuMzU2LTEuODU3TTE3IDIwSDdtMTAgMHYtMmMwLS42NTYtLjEyNi0xLjI4My0uMzU2LTEuODU3TTcgMjBIMnYtMmEzIDMgMCAwMTUuMzU2LTEuODU3TTcgMjB2LTJjMC0uNjU2LjEyNi0xLjI4My4zNTYtMS44NTdtMCAwYTUuMDAyIDUuMDAyIDAgMDE5LjI4OCAwTTE1IDdhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwem02IDNhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwek03IDEwYTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpcIiAvPlxyXG4gIDwvc3ZnPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXZcclxuZXhwb3J0IGNvbnN0IE5hdkl0ZW0gPSBwcm9wcyA9PihcclxuICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPXtwcm9wcy5ocmVmfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTIgcHktMSBob3Zlcjp0ZXh0LWdyYXktMzAwIHJvdW5kZWQgdHJhbnNpdGlvbi1jb2xvciBkdXJhdGlvbi0zMDBcIj5cclxuICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgPC9saT5cclxuICAgICk7XHJcbiAgICAiXSwic291cmNlUm9vdCI6IiJ9