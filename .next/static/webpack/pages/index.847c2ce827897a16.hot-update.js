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

/***/ "./components/benefits.js":
/*!********************************!*\
  !*** ./components/benefits.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container */ \"./components/container.js\");\n\n\n\n\nconst Benefits = (props)=>{\n    const { data } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"benefits\",\n                    className: \"flex items-center justify-center w-full lg:w-1/2 \".concat(props.imgPos === \"right\" ? \"lg:order-1\" : \"\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: data.image,\n                            width: \"521\",\n                            height: \"auto\",\n                            alt: \"Benefits\",\n                            className: \"object-cover\",\n                            placeholder: \"blur\",\n                            blurDataURL: data.image.src\n                        }, void 0, false, {\n                            fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap items-center w-full lg:w-1/2 \".concat(data.imgPos === \"right\" ? \"lg:justify-end\" : \"\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col w-full mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white\",\n                                        children: data.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300\",\n                                        children: data.desc\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full mt-5\",\n                                children: data.bullets.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Benefit, {\n                                        title: item.title,\n                                        icon: item.icon,\n                                        children: item.desc\n                                    }, index, false, {\n                                        fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = Benefits;\nfunction Benefit(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-start mt-8 space-x-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 \",\n                    children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(props.icon, {\n                        className: \"w-7 h-7 text-indigo-50\"\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"text-xl font-medium text-gray-800 dark:text-gray-200\",\n                            children: props.title\n                        }, void 0, false, {\n                            fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-1 text-gray-500 dark:text-gray-400\",\n                            children: props.children\n                        }, void 0, false, {\n                            fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bvolz/Sites/kentuckyhorsemilk/components/benefits.js\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c1 = Benefit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Benefits);\nvar _c, _c1;\n$RefreshReg$(_c, \"Benefits\");\n$RefreshReg$(_c1, \"Benefit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JlbmVmaXRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQjtBQUNMO0FBQ1U7QUFFcEMsTUFBTUcsV0FBVyxDQUFDQztJQUNoQixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHRDtJQUNqQixxQkFDRTtrQkFDRSw0RUFBQ0Ysa0RBQVNBO1lBQUNJLFdBQVU7OzhCQUNuQiw4REFBQ0M7b0JBQ0NDLElBQUc7b0JBQ0hGLFdBQVcsb0RBRVYsT0FEQ0YsTUFBTUssTUFBTSxLQUFLLFVBQVUsZUFBZTs4QkFFNUMsNEVBQUNGO2tDQUNDLDRFQUFDUCxtREFBS0E7NEJBQ0pVLEtBQUtMLEtBQUtNLEtBQUs7NEJBQ2ZDLE9BQU07NEJBQ05DLFFBQU87NEJBQ1BDLEtBQUk7NEJBQ0pSLFdBQVc7NEJBQ1hTLGFBQVk7NEJBQ1pDLGFBQWFYLEtBQUtNLEtBQUssQ0FBQ0QsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLakMsOERBQUNIO29CQUNDRCxXQUFXLCtDQUVWLE9BRENELEtBQUtJLE1BQU0sS0FBSyxVQUFVLG1CQUFtQjs4QkFFL0MsNEVBQUNGOzswQ0FDQyw4REFBQ0E7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDVzt3Q0FBR1gsV0FBVTtrREFDWEQsS0FBS2EsS0FBSzs7Ozs7O2tEQUdiLDhEQUFDQzt3Q0FBRWIsV0FBVTtrREFDVkQsS0FBS2UsSUFBSTs7Ozs7Ozs7Ozs7OzBDQUlkLDhEQUFDYjtnQ0FBSUQsV0FBVTswQ0FDWkQsS0FBS2dCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN2Qiw4REFBQ0M7d0NBQW9CUCxPQUFPSyxLQUFLTCxLQUFLO3dDQUFFUSxNQUFNSCxLQUFLRyxJQUFJO2tEQUNwREgsS0FBS0gsSUFBSTt1Q0FERUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVOUI7S0FsRE1yQjtBQW9ETixTQUFTc0IsUUFBUXJCLEtBQUs7SUFDcEIscUJBQ0U7a0JBQ0UsNEVBQUNHO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDWkwsY0FBQUEseURBQWtCLENBQUNHLE1BQU1zQixJQUFJLEVBQUU7d0JBQzlCcEIsV0FBVztvQkFDYjs7Ozs7OzhCQUVGLDhEQUFDQzs7c0NBQ0MsOERBQUNxQjs0QkFBR3RCLFdBQVU7c0NBQ1hGLE1BQU1jLEtBQUs7Ozs7OztzQ0FFZCw4REFBQ0M7NEJBQUViLFdBQVU7c0NBQ1ZGLE1BQU15QixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNCO01BcEJTSjtBQXNCVCwrREFBZXRCLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iZW5lZml0cy5qcz81MDM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXJcIjtcblxuY29uc3QgQmVuZWZpdHMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBtYi0yMCBsZzpnYXAtMTAgbGc6ZmxleC1ub3dyYXAgXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cImJlbmVmaXRzXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbGc6dy0xLzIgJHtcbiAgICAgICAgICAgIHByb3BzLmltZ1BvcyA9PT0gXCJyaWdodFwiID8gXCJsZzpvcmRlci0xXCIgOiBcIlwiXG4gICAgICAgICAgfWB9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlfVxuICAgICAgICAgICAgICB3aWR0aD1cIjUyMVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cImF1dG9cIlxuICAgICAgICAgICAgICBhbHQ9XCJCZW5lZml0c1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJvYmplY3QtY292ZXJcIn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJibHVyXCJcbiAgICAgICAgICAgICAgYmx1ckRhdGFVUkw9e2RhdGEuaW1hZ2Uuc3JjfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciB3LWZ1bGwgbGc6dy0xLzIgJHtcbiAgICAgICAgICAgIGRhdGEuaW1nUG9zID09PSBcInJpZ2h0XCIgPyBcImxnOmp1c3RpZnktZW5kXCIgOiBcIlwiXG4gICAgICAgICAgfWB9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIG10LTRcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1heC13LTJ4bCBtdC0zIHRleHQtM3hsIGZvbnQtYm9sZCBsZWFkaW5nLXNudWcgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTgwMCBsZzpsZWFkaW5nLXRpZ2h0IGxnOnRleHQtNHhsIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxuICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1heC13LTJ4bCBweS00IHRleHQtbGcgbGVhZGluZy1ub3JtYWwgdGV4dC1ncmF5LTUwMCBsZzp0ZXh0LXhsIHhsOnRleHQteGwgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuZGVzY31cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG10LTVcIj5cbiAgICAgICAgICAgICAge2RhdGEuYnVsbGV0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPEJlbmVmaXQga2V5PXtpbmRleH0gdGl0bGU9e2l0ZW0udGl0bGV9IGljb249e2l0ZW0uaWNvbn0+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjfVxuICAgICAgICAgICAgICAgIDwvQmVuZWZpdD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIEJlbmVmaXQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IG10LTggc3BhY2UteC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMCBtdC0xIGJnLWluZGlnby01MDAgcm91bmRlZC1tZCB3LTExIGgtMTEgXCI+XG4gICAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChwcm9wcy5pY29uLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwidy03IGgtNyB0ZXh0LWluZGlnby01MFwiLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC1ncmF5LTIwMFwiPlxuICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmVuZWZpdHM7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIkNvbnRhaW5lciIsIkJlbmVmaXRzIiwicHJvcHMiLCJkYXRhIiwiY2xhc3NOYW1lIiwiZGl2IiwiaWQiLCJpbWdQb3MiLCJzcmMiLCJpbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicGxhY2Vob2xkZXIiLCJibHVyRGF0YVVSTCIsImgzIiwidGl0bGUiLCJwIiwiZGVzYyIsImJ1bGxldHMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJCZW5lZml0IiwiaWNvbiIsImNsb25lRWxlbWVudCIsImg0IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/benefits.js\n"));

/***/ })

});