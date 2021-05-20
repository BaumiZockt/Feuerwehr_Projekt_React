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
  var options = [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
    href: "/HLF",
    text: "HLF 3"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
    href: "/LFA",
    text: "LFA"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 46
  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
    href: "/TLFA",
    text: "TLFA 2000"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 81
  }, _this)];
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
            className: "ml-2 text-sm font-bold text-white px-2 py-1 hover:text-gray-300 rounded transition-color duration-300",
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
            className: "text-sm font-bold text-white px-2 py-1 hover:text-gray-300 rounded transition-color duration-300",
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
      lineNumber: 56,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2IiwidmFsdWUiLCJ1c2VDb250ZXh0IiwiRmlyZUNvbnRleHQiLCJoYW5kbGVTaWduT3V0Iiwib3B0aW9ucyIsIk5hdkl0ZW0iLCJwcm9wcyIsImhyZWYiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBRWQsTUFBTUMsS0FBSyxHQUFHQyx3REFBVSxDQUFDQyxnRUFBRCxDQUF4QjtBQUZjLE1BR1BDLGFBSE8sR0FHVUgsS0FIVixDQUdQRyxhQUhPO0FBS2QsTUFBTUMsT0FBTyxHQUFHLGNBQ1oscUVBQUMsT0FBRDtBQUFTLFFBQUksRUFBQyxNQUFkO0FBQXFCLFFBQUksRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFksZUFDeUIscUVBQUMsT0FBRDtBQUFTLFFBQUksRUFBQyxNQUFkO0FBQXFCLFFBQUksRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHpCLGVBQzRELHFFQUFDLE9BQUQ7QUFBUyxRQUFJLEVBQUMsT0FBZDtBQUFzQixRQUFJLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUQ1RCxDQUFoQjtBQU1BLHNCQUVJO0FBQUEsMkJBR2dCO0FBQUssZUFBUyxFQUFDLHFDQUFmO0FBQUEsOEJBQ0k7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBLCtCQUFZO0FBQUssbUJBQVMsRUFBQyxrQkFBZjtBQUFBLGtDQUNKLHFFQUFDLGlEQUFEO0FBQU8scUJBQVMsRUFBQyxnQkFBakI7QUFBa0MsZUFBRyxFQUFDLFdBQXRDO0FBQWtELGtCQUFNLEVBQUUsRUFBMUQ7QUFBOEQsaUJBQUssRUFBRSxFQUFyRTtBQUF5RSxlQUFHLEVBQUM7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESSxlQUVKO0FBQU0scUJBQVMsRUFBQyx1R0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBUUo7QUFBQSwrQkFDSTtBQUFJLG1CQUFTLEVBQUMsZ0JBQWQ7QUFBQSxrQ0FFSSxxRUFBQyxPQUFEO0FBQVMsZ0JBQUksRUFBQyxRQUFkO0FBQXVCLGdCQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJLHFFQUFDLE9BQUQ7QUFBUyxnQkFBSSxFQUFDLFVBQWQ7QUFBeUIsZ0JBQUksRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBS0kscUVBQUMscURBQUQ7QUFBVSxxQkFBUyxFQUFDLGtHQUFwQjtBQUF1SCxtQkFBTyxFQUFFQSxPQUFoSTtBQUEwSSxpQkFBSyxFQUFDO0FBQWhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEosZUFNSSxxRUFBQyxPQUFEO0FBQVMsZ0JBQUksRUFBQyxZQUFkO0FBQTJCLGdCQUFJLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixlQU9JLHFFQUFDLE9BQUQ7QUFBUyxnQkFBSSxFQUFDLFdBQWQ7QUFBMEIsZ0JBQUksRUFBRTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBaUNILENBNUNEOztHQUFNTCxHOztLQUFBQSxHO0FBNkNTQSxrRUFBZjtBQUNPLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFDLEtBQUs7QUFBQSxzQkFDeEI7QUFBQSwyQkFDSTtBQUFHLFVBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUFmO0FBQ0ksZUFBUyxFQUFDLGtHQURkO0FBQUEsZ0JBRUtELEtBQUssQ0FBQ0U7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUR3QjtBQUFBLENBQXJCO01BQU1ILE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xMDVlNDlhZWVlOTRmY2IwZjczZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGaXJlQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvRmlyZUNvbnRleHQnXHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1kcm9wZG93bic7XHJcblxyXG4gXHJcblxyXG5jb25zdCBOYXYgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSB1c2VDb250ZXh0KEZpcmVDb250ZXh0KVxyXG4gICAgY29uc3Qge2hhbmRsZVNpZ25PdXR9ID0gdmFsdWVcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgICAgIDxOYXZJdGVtIGhyZWY9XCIvSExGXCIgdGV4dD1cIkhMRiAzXCIvPiwgPE5hdkl0ZW0gaHJlZj1cIi9MRkFcIiB0ZXh0PVwiTEZBXCIvPiwgPE5hdkl0ZW0gaHJlZj1cIi9UTEZBXCIgdGV4dD1cIlRMRkEgMjAwMFwiLz5cclxuICAgICAgXTtcclxuXHJcbiAgICAgXHJcblxyXG4gICAgcmV0dXJuICggICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBwLTQgYmctcmVkLTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyXCIgc3JjPVwiL0xvZ28ucG5nXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfSBhbHQ9XCJMb2dvIEZGLUxhaW1iYWNoIGFtIE9zdHJvbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC0yIHB5LTEgaG92ZXI6dGV4dC1ncmF5LTMwMCByb3VuZGVkIHRyYW5zaXRpb24tY29sb3IgZHVyYXRpb24tMzAwXCI+RmV1ZXJ3ZWhyIExhaW1iYWNoPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIi9uZXVlc1wiIHRleHQ9XCJOZXdzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIi9ub3RmYWxsXCIgdGV4dD1cIlZlcmhhbHRlbiBpbSBOb3RmYWxsXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTIgcHktMSBob3Zlcjp0ZXh0LWdyYXktMzAwIHJvdW5kZWQgdHJhbnNpdGlvbi1jb2xvciBkdXJhdGlvbi0zMDBcIiBvcHRpb25zPXtvcHRpb25zfSAgdmFsdWU9XCJGdWhycGFya1wiICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIi9taXRtYWNoZW5cIiB0ZXh0PVwiTWl0bWFjaGVuXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gaHJlZj1cIi9mdWhycGFya1wiIHRleHQgPVwiRnVocnBhcmtcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YSBocmVmPVwiL2xvZ2luXCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC02IHRleHQtd2hpdGUgaG92ZXI6ZmlsbC1jdXJyZW50IHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCIgIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMTcgMjBoNXYtMmEzIDMgMCAwMC01LjM1Ni0xLjg1N00xNyAyMEg3bTEwIDB2LTJjMC0uNjU2LS4xMjYtMS4yODMtLjM1Ni0xLjg1N003IDIwSDJ2LTJhMyAzIDAgMDE1LjM1Ni0xLjg1N003IDIwdi0yYzAtLjY1Ni4xMjYtMS4yODMuMzU2LTEuODU3bTAgMGE1LjAwMiA1LjAwMiAwIDAxOS4yODggME0xNSA3YTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHptNiAzYTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpNNyAxMGEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPjwvYT4qL31cclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG5leHBvcnQgY29uc3QgTmF2SXRlbSA9IHByb3BzID0+KFxyXG4gICAgPGxpPlxyXG4gICAgICAgIDxhIGhyZWY9e3Byb3BzLmhyZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtMiBweS0xIGhvdmVyOnRleHQtZ3JheS0zMDAgcm91bmRlZCB0cmFuc2l0aW9uLWNvbG9yIGR1cmF0aW9uLTMwMFwiPlxyXG4gICAgICAgICAgICB7cHJvcHMudGV4dH1cclxuICAgICAgICA8L2E+XHJcbiAgICA8L2xpPlxyXG4gICAgKTtcclxuICAgICJdLCJzb3VyY2VSb290IjoiIn0=