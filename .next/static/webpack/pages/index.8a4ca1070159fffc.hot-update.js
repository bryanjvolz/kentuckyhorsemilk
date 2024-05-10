"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/sectionTitle.js":
/*!************************************!*\
  !*** ./components/sectionTitle.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container */ \"./components/container.js\");\n\n\n\nconst SectionTitle = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        id: props.sectionId,\n        className: \"flex w-full flex-col mt-4 \".concat(props.align === \"left\" ? \"\" : \"items-center justify-center text-center\"),\n        children: [\n            props.pretitle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-sm font-bold tracking-wider text-indigo-600 uppercase\",\n                children: props.pretitle\n            }, void 0, false, {\n                fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/sectionTitle.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined),\n            props.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white\",\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/sectionTitle.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined),\n            props.children && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300\",\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/sectionTitle.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/sectionTitle.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SectionTitle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionTitle);\nvar _c;\n$RefreshReg$(_c, \"SectionTitle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb25UaXRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ1U7QUFFcEMsTUFBTUUsZUFBZSxDQUFDQztJQUNwQixxQkFDRSw4REFBQ0Ysa0RBQVNBO1FBQ1JHLElBQUlELE1BQU1FLFNBQVM7UUFDbkJDLFdBQVcsNkJBRVYsT0FEQ0gsTUFBTUksS0FBSyxLQUFLLFNBQVMsS0FBSzs7WUFFL0JKLE1BQU1LLFFBQVEsa0JBQ2IsOERBQUNDO2dCQUFJSCxXQUFVOzBCQUNaSCxNQUFNSyxRQUFROzs7Ozs7WUFJbEJMLE1BQU1PLEtBQUssa0JBQ1YsOERBQUNDO2dCQUFHTCxXQUFVOzBCQUNYSCxNQUFNTyxLQUFLOzs7Ozs7WUFJZlAsTUFBTVMsUUFBUSxrQkFDYiw4REFBQ0M7Z0JBQUVQLFdBQVU7MEJBQ1ZILE1BQU1TLFFBQVE7Ozs7Ozs7Ozs7OztBQUt6QjtLQTFCTVY7QUE0Qk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uVGl0bGUuanM/MTA0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL2NvbnRhaW5lclwiO1xuXG5jb25zdCBTZWN0aW9uVGl0bGUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBpZD17cHJvcHMuc2VjdGlvbklkfVxuICAgICAgY2xhc3NOYW1lPXtgZmxleCB3LWZ1bGwgZmxleC1jb2wgbXQtNCAke1xuICAgICAgICBwcm9wcy5hbGlnbiA9PT0gXCJsZWZ0XCIgPyBcIlwiIDogXCJpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXJcIlxuICAgICAgfWB9PlxuICAgICAge3Byb3BzLnByZXRpdGxlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0cmFja2luZy13aWRlciB0ZXh0LWluZGlnby02MDAgdXBwZXJjYXNlXCI+XG4gICAgICAgICAge3Byb3BzLnByZXRpdGxlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtwcm9wcy50aXRsZSAmJiAoXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgbXQtMyB0ZXh0LTN4bCBmb250LWJvbGQgbGVhZGluZy1zbnVnIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS04MDAgbGc6bGVhZGluZy10aWdodCBsZzp0ZXh0LTR4bCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgIDwvaDI+XG4gICAgICApfVxuXG4gICAgICB7cHJvcHMuY2hpbGRyZW4gJiYgKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy0yeGwgcHktNCB0ZXh0LWxnIGxlYWRpbmctbm9ybWFsIHRleHQtZ3JheS01MDAgbGc6dGV4dC14bCB4bDp0ZXh0LXhsIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9wPlxuICAgICAgKX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblRpdGxlOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIlNlY3Rpb25UaXRsZSIsInByb3BzIiwiaWQiLCJzZWN0aW9uSWQiLCJjbGFzc05hbWUiLCJhbGlnbiIsInByZXRpdGxlIiwiZGl2IiwidGl0bGUiLCJoMiIsImNoaWxkcmVuIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sectionTitle.js\n"));

/***/ })

});