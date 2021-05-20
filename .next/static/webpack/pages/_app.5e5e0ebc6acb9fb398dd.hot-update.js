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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2IiwidmFsdWUiLCJ1c2VDb250ZXh0IiwiRmlyZUNvbnRleHQiLCJoYW5kbGVTaWduT3V0Iiwib3B0aW9ucyIsIk5hdkl0ZW0iLCJwcm9wcyIsImhyZWYiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBRWQsTUFBTUMsS0FBSyxHQUFHQyx3REFBVSxDQUFDQyxnRUFBRCxDQUF4QjtBQUZjLE1BR1BDLGFBSE8sR0FHVUgsS0FIVixDQUdQRyxhQUhPO0FBS2QsTUFBTUMsT0FBTyxHQUFHLENBQ1osS0FEWSxFQUNMLEtBREssRUFDRSxPQURGLENBQWhCO0FBTUEsc0JBRUk7QUFBQSwyQkFHZ0I7QUFBSyxlQUFTLEVBQUMscUNBQWY7QUFBQSw4QkFDSTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUEsK0JBQVk7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsa0NBQ0oscUVBQUMsaURBQUQ7QUFBTyxxQkFBUyxFQUFDLGdCQUFqQjtBQUFrQyxlQUFHLEVBQUMsV0FBdEM7QUFBa0Qsa0JBQU0sRUFBRSxFQUExRDtBQUE4RCxpQkFBSyxFQUFFLEVBQXJFO0FBQXlFLGVBQUcsRUFBQztBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURJLGVBRUo7QUFBTSxxQkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVFKO0FBQUEsK0JBQ0k7QUFBSSxtQkFBUyxFQUFDLGdCQUFkO0FBQUEsa0NBRUkscUVBQUMsT0FBRDtBQUFTLGdCQUFJLEVBQUMsUUFBZDtBQUF1QixnQkFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSSxxRUFBQyxPQUFEO0FBQVMsZ0JBQUksRUFBQyxVQUFkO0FBQXlCLGdCQUFJLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUtJLHFFQUFDLHFEQUFEO0FBQVUsbUJBQU8sRUFBRUEsT0FBbkI7QUFBNkIsaUJBQUssRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUkscUVBQUMsT0FBRDtBQUFTLGdCQUFJLEVBQUMsWUFBZDtBQUEyQixnQkFBSSxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkosZUFPSSxxRUFBQyxPQUFEO0FBQVMsZ0JBQUksRUFBQyxXQUFkO0FBQTBCLGdCQUFJLEVBQUU7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSixlQVNHO0FBQUcsZ0JBQUksRUFBQyxRQUFSO0FBQUEsbUNBQWlCO0FBQUssbUJBQUssRUFBQyw0QkFBWDtBQUF3Qyx1QkFBUyxFQUFDLDJEQUFsRDtBQUErRyxrQkFBSSxFQUFDLE1BQXBIO0FBQTJILHFCQUFPLEVBQUMsV0FBbkk7QUFBK0ksb0JBQU0sRUFBQyxjQUF0SjtBQUFBLHFDQUMxQztBQUFNLGtDQUFlLE9BQXJCO0FBQTZCLG1DQUFnQixPQUE3QztBQUFxRCxnQ0FBYSxHQUFsRTtBQUFzRSxpQkFBQyxFQUFDO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBa0NILENBN0NELEMsQ0E4Q0E7OztHQTlDTUwsRzs7S0FBQUEsRztBQStDU0Esa0VBQWY7QUFDTyxJQUFNTSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxLQUFLO0FBQUEsc0JBQ3hCO0FBQUEsMkJBQ0k7QUFBRyxVQUFJLEVBQUVBLEtBQUssQ0FBQ0MsSUFBZjtBQUNJLGVBQVMsRUFBQyxrR0FEZDtBQUFBLGdCQUVLRCxLQUFLLENBQUNFO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEd0I7QUFBQSxDQUFyQjtNQUFNSCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWU1ZTBlYmM2YWNiOWZiMzk4ZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmlyZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0ZpcmVDb250ZXh0J1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAncmVhY3QtZHJvcGRvd24nO1xyXG5cclxuIFxyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gdXNlQ29udGV4dChGaXJlQ29udGV4dClcclxuICAgIGNvbnN0IHtoYW5kbGVTaWduT3V0fSA9IHZhbHVlXHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgICAgICAnb25lJywgJ3R3bycsICd0aHJlZSdcclxuICAgICAgXTtcclxuXHJcbiAgICAgXHJcblxyXG4gICAgcmV0dXJuICggICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBwLTQgYmctcmVkLTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyXCIgc3JjPVwiL0xvZ28ucG5nXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSBhbHQ9XCJMb2dvIEZGLUxhaW1iYWNoIGFtIE9zdHJvbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj5GZXVlcndlaHIgTGFpbWJhY2g8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL25ldWVzXCIgdGV4dD1cIk5ld3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL25vdGZhbGxcIiB0ZXh0PVwiVmVyaGFsdGVuIGltIE5vdGZhbGxcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG9wdGlvbnM9e29wdGlvbnN9ICB2YWx1ZT1cIkZ1aHJwYXJrXCIgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL21pdG1hY2hlblwiIHRleHQ9XCJNaXRtYWNoZW5cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBocmVmPVwiL2Z1aHJwYXJrXCIgdGV4dCA9XCJGdWhycGFya1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbG9naW5cIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTYgdGV4dC13aGl0ZSBob3ZlcjpmaWxsLWN1cnJlbnQgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIiAgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMTcgMjBoNXYtMmEzIDMgMCAwMC01LjM1Ni0xLjg1N00xNyAyMEg3bTEwIDB2LTJjMC0uNjU2LS4xMjYtMS4yODMtLjM1Ni0xLjg1N003IDIwSDJ2LTJhMyAzIDAgMDE1LjM1Ni0xLjg1N003IDIwdi0yYzAtLjY1Ni4xMjYtMS4yODMuMzU2LTEuODU3bTAgMGE1LjAwMiA1LjAwMiAwIDAxOS4yODggME0xNSA3YTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHptNiAzYTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpNNyAxMGEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6XCIgLz5cclxuICA8L3N2Zz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuLy9kaWVzIGlzdCBlaW4gdGVzdCBrb21tZW50YXJcclxuZXhwb3J0IGRlZmF1bHQgTmF2XHJcbmV4cG9ydCBjb25zdCBOYXZJdGVtID0gcHJvcHMgPT4oXHJcbiAgICA8bGk+XHJcbiAgICAgICAgPGEgaHJlZj17cHJvcHMuaHJlZn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC0yIHB5LTEgaG92ZXI6dGV4dC1ncmF5LTMwMCByb3VuZGVkIHRyYW5zaXRpb24tY29sb3IgZHVyYXRpb24tMzAwXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgICAgIDwvYT5cclxuICAgIDwvbGk+XHJcbiAgICApO1xyXG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ==