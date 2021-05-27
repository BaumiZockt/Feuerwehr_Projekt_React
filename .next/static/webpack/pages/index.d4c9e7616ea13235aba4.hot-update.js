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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardItem, {
        überschrift: "",
        text: "B2 Fahrzeugbrand auf der B36\\n\r Am 7.1.2021 wurden wir um 08:10 zu einem Fahrzeugbrand auf die B36 n\xE4he Fam. Spiesmayer gerufen.\r Aus bisher unbekannter Ursache entstand im Motorraum eines LKWs ein Brand. Aufgrund dieser Voraussetzungen wurde umgehen auf die Alarmstufe B2 alarmiert. Durch das schnelle Eintreffen unserer Einsatzkr\xE4fte konnte eine Ausbreitung verhindert werden. Alle Beteiligten konnten sich aus dem Fahrzeug selbst\xE4ndig retten."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }, this)
    }, void 0, false, {
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: props.überschrift
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "relative text-xs sm:text-base m-2 border-2 border-red-600 p-2 display: inline-block sm:m-8 sm:border-8 sm:p-8",
      children: [" ", props.text]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJDYXJkSXRlbSIsInByb3BzIiwiw7xiZXJzY2hyaWZ0IiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxJQUFULEdBQWU7QUFDNUIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0RBQWY7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFBLDZCQUNBLHFFQUFDLFFBQUQ7QUFBVSxtQkFBVyxFQUFDLEVBQXRCO0FBQ1UsWUFBSSxFQUFDO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDtLQWxCdUJBLEk7QUFtQmpCLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUs7QUFBQSxzQkFDM0I7QUFBQSw0QkFDRTtBQUFBLGdCQUFLQSxLQUFLLENBQUNDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUMsK0dBQWY7QUFBQSxzQkFBaUlELEtBQUssQ0FBQ0UsSUFBdkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRDJCO0FBQUEsQ0FBdEI7TUFBTUgsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNGM5ZTc2MTZlYTEzMjM1YWJhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9jb25maWcvZmlyZWJhc2UnIFxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcblxyXG4vKmNsYXNzIEhvbWVfMiBleHRlbmRzIENvbXBvbmVudHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJykuZ2V0KCkudGhlbigoc25hcHNob3QgPT57XHJcbiAgICAgIGNvbnN0IHBvc3RzID0gc25hcHNob3QuZG9jcztcclxuICAgICAgY29uc29sZS5sb2cocG9zdHNbMF0pXHJcbiAgICB9KSlcclxuICB9XHJcbn1cclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpe1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+RkYgTGFpbWJhY2ggYW0gT3N0cm9uZzwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTG9nby5wbmdcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDx1bD5cclxuICAgICAgPENhcmRJdGVtIMO8YmVyc2NocmlmdD1cIlwiXHJcbiAgICAgICAgICAgICAgICB0ZXh0PVwiQjIgRmFocnpldWdicmFuZCBhdWYgZGVyIEIzNlxcblxyXG5cclxuICAgICAgICAgICAgICAgIEFtIDcuMS4yMDIxIHd1cmRlbiB3aXIgdW0gMDg6MTAgenUgZWluZW0gRmFocnpldWdicmFuZCBhdWYgZGllIEIzNiBuw6RoZSBGYW0uIFNwaWVzbWF5ZXIgZ2VydWZlbi5cclxuICAgICAgICAgICAgICAgIEF1cyBiaXNoZXIgdW5iZWthbm50ZXIgVXJzYWNoZSBlbnRzdGFuZCBpbSBNb3RvcnJhdW0gZWluZXMgTEtXcyBlaW4gQnJhbmQuIEF1ZmdydW5kIGRpZXNlciBWb3JhdXNzZXR6dW5nZW4gd3VyZGUgdW1nZWhlbiBhdWYgZGllIEFsYXJtc3R1ZmUgQjIgYWxhcm1pZXJ0LiBEdXJjaCBkYXMgc2NobmVsbGUgRWludHJlZmZlbiB1bnNlcmVyIEVpbnNhdHprcsOkZnRlIGtvbm50ZSBlaW5lIEF1c2JyZWl0dW5nIHZlcmhpbmRlcnQgd2VyZGVuLiBBbGxlIEJldGVpbGlndGVuIGtvbm50ZW4gc2ljaCBhdXMgZGVtIEZhaHJ6ZXVnIHNlbGJzdMOkbmRpZyByZXR0ZW4uXCIvPlxyXG5cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgY29uc3QgQ2FyZEl0ZW0gPSBwcm9wcyA9PihcclxuICA8bGk+XHJcbiAgICA8aDE+e3Byb3BzLsO8YmVyc2NocmlmdH08L2gxPlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQteHMgc206dGV4dC1iYXNlIG0tMiBib3JkZXItMiBib3JkZXItcmVkLTYwMCBwLTIgZGlzcGxheTogaW5saW5lLWJsb2NrIHNtOm0tOCBzbTpib3JkZXItOCBzbTpwLThcIj4ge3Byb3BzLnRleHR9XHJcblxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gIDwvbGk+XHJcbiAgICBcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==