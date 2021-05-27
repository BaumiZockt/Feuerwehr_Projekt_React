webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default, CardItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardItem", function() { return CardItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Oliver\\Documents\\Feuerwehr\\website2\\app - Kopie\\pages\\index.tsx",
    _this = undefined;




/*class Home_2 extends Component{
  componentDidMount() {
    db.collection('posts').get().then((snapshot =>{
      const posts = snapshot.docs;
      console.log(posts[0])
    }))
  }
}
*/

function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "w-full h-screen flex justify-center items-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "FF Laimbach am Ostrong"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/Logo.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardItem, {
        text: "",
        imghref: "/Logo.png",
        alt: "",
        width: "",
        height: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardItem, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardItem, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardItem, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
_c = Home;
var CardItem = function CardItem(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "hover:scale-200 ",
      src: "{props.imghref}",
      alt: "{props.alt}",
      width: "{props.width}",
      height: "{props.height}"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative text-xs sm:text-base m-2 border-2 border-red-600 p-2 display: inline-block sm:m-8 sm:border-8 sm:p-8",
      children: [" ", props.text]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 3
  }, _this);
};
_c2 = CardItem;

var _c, _c2;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "CardItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJDYXJkSXRlbSIsInByb3BzIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsSUFBVCxHQUFlO0FBQzVCLHNCQUNFO0FBQUssYUFBUyxFQUFDLGtEQUFmO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBQSw4QkFDQSxxRUFBQyxRQUFEO0FBQVUsWUFBSSxFQUFDLEVBQWY7QUFDVSxlQUFPLEVBQUMsV0FEbEI7QUFFVSxXQUFHLEVBQUMsRUFGZDtBQUdVLGFBQUssRUFBQyxFQUhoQjtBQUlVLGNBQU0sRUFBQztBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFNQSxxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOQSxlQU9BLHFFQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBBLGVBUUEscUVBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7S0FwQnVCQSxJO0FBcUJqQixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxLQUFLO0FBQUEsc0JBQzNCO0FBQUEsNEJBRUUscUVBQUMsaURBQUQ7QUFBTyxlQUFTLEVBQUMsa0JBQWpCO0FBQ0UsU0FBRyxFQUFDLGlCQUROO0FBRUUsU0FBRyxFQUFDLGFBRk47QUFHRSxXQUFLLEVBQUMsZUFIUjtBQUlFLFlBQU0sRUFBQztBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVFFO0FBQUssZUFBUyxFQUFDLCtHQUFmO0FBQUEsc0JBQWlJQSxLQUFLLENBQUNDLElBQXZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUQyQjtBQUFBLENBQXRCO01BQU1GLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjBmODdmYTA1ZGJiZjFmOTJlMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vY29uZmlnL2ZpcmViYXNlJyBcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5cclxuLypjbGFzcyBIb21lXzIgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmdldCgpLnRoZW4oKHNuYXBzaG90ID0+e1xyXG4gICAgICBjb25zdCBwb3N0cyA9IHNuYXBzaG90LmRvY3M7XHJcbiAgICAgIGNvbnNvbGUubG9nKHBvc3RzWzBdKVxyXG4gICAgfSkpXHJcbiAgfVxyXG59XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKXtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkZGIExhaW1iYWNoIGFtIE9zdHJvbmc8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL0xvZ28ucG5nXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8dWw+XHJcbiAgICAgIDxDYXJkSXRlbSB0ZXh0PVwiXCJcclxuICAgICAgICAgICAgICAgIGltZ2hyZWY9XCIvTG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIlwiLz5cclxuICAgICAgPENhcmRJdGVtLz5cclxuICAgICAgPENhcmRJdGVtLz5cclxuICAgICAgPENhcmRJdGVtLz5cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgY29uc3QgQ2FyZEl0ZW0gPSBwcm9wcyA9PihcclxuICA8bGk+XHJcblxyXG4gICAgPEltYWdlIGNsYXNzTmFtZT1cImhvdmVyOnNjYWxlLTIwMCBcIlxyXG4gICAgICBzcmM9XCJ7cHJvcHMuaW1naHJlZn1cIlxyXG4gICAgICBhbHQ9XCJ7cHJvcHMuYWx0fVwiXHJcbiAgICAgIHdpZHRoPVwie3Byb3BzLndpZHRofVwiXHJcbiAgICAgIGhlaWdodD1cIntwcm9wcy5oZWlnaHR9XCIvPlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC14cyBzbTp0ZXh0LWJhc2UgbS0yIGJvcmRlci0yIGJvcmRlci1yZWQtNjAwIHAtMiBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgc206bS04IHNtOmJvcmRlci04IHNtOnAtOFwiPiB7cHJvcHMudGV4dH1cclxuXHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgPC9saT5cclxuICAgIFxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9