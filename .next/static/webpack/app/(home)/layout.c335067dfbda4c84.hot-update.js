"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/layout",{

/***/ "(app-pages-browser)/./src/app/modules/home/ui/components/home-sidebar/main-section.tsx":
/*!**************************************************************************!*\
  !*** ./src/app/modules/home/ui/components/home-sidebar/main-section.tsx ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainSection: () => (/* binding */ MainSection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/sidebar */ \"(app-pages-browser)/./src/components/ui/sidebar.tsx\");\n/* harmony import */ var _barrel_optimize_names_FlameIcon_HomeIcon_PlaySquareIcon_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FlameIcon,HomeIcon,PlaySquareIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/house.js\");\n/* harmony import */ var _barrel_optimize_names_FlameIcon_HomeIcon_PlaySquareIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FlameIcon,HomeIcon,PlaySquareIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/square-play.js\");\n/* harmony import */ var _barrel_optimize_names_FlameIcon_HomeIcon_PlaySquareIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FlameIcon,HomeIcon,PlaySquareIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/flame.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/index.mjs\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/nextjs/dist/esm/client-boundary/PromisifiedAuthProvider.js\");\n/* __next_internal_client_entry_do_not_use__ MainSection auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst items = [\n    {\n        title: \"Home\",\n        url: \"/\",\n        icon: _barrel_optimize_names_FlameIcon_HomeIcon_PlaySquareIcon_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    {\n        title: \"Subscriptions\",\n        url: \"/feed/subscriptions\",\n        icon: _barrel_optimize_names_FlameIcon_HomeIcon_PlaySquareIcon_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        auth: true\n    },\n    {\n        title: \"Trending\",\n        url: \"/feed/trending\",\n        icon: _barrel_optimize_names_FlameIcon_HomeIcon_PlaySquareIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }\n];\nconst MainSection = ()=>{\n    _s();\n    const clerk = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.useClerk)();\n    const { isSignedIn } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.usePromisifiedAuth)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sidebar__WEBPACK_IMPORTED_MODULE_1__.SidebarGroup, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sidebar__WEBPACK_IMPORTED_MODULE_1__.SidebarGroupContent, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sidebar__WEBPACK_IMPORTED_MODULE_1__.SidebarMenu, {\n                children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sidebar__WEBPACK_IMPORTED_MODULE_1__.SidebarMenuItem, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sidebar__WEBPACK_IMPORTED_MODULE_1__.SidebarMenuButton, {\n                            tooltip: item.title,\n                            asChild: true,\n                            isActive: false,\n                            onClick: ()=>{\n                                if (!signedIn) {}\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: item.url,\n                                className: \"flex items-center gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {}, void 0, false, {\n                                        fileName: \"/home/hmoa/Desktop/youtube-clone/src/app/modules/home/ui/components/home-sidebar/main-section.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-sm\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/hmoa/Desktop/youtube-clone/src/app/modules/home/ui/components/home-sidebar/main-section.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/hmoa/Desktop/youtube-clone/src/app/modules/home/ui/components/home-sidebar/main-section.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/hmoa/Desktop/youtube-clone/src/app/modules/home/ui/components/home-sidebar/main-section.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 15\n                        }, undefined)\n                    }, item.title, false, {\n                        fileName: \"/home/hmoa/Desktop/youtube-clone/src/app/modules/home/ui/components/home-sidebar/main-section.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/hmoa/Desktop/youtube-clone/src/app/modules/home/ui/components/home-sidebar/main-section.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/hmoa/Desktop/youtube-clone/src/app/modules/home/ui/components/home-sidebar/main-section.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/hmoa/Desktop/youtube-clone/src/app/modules/home/ui/components/home-sidebar/main-section.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainSection, \"S7cwrhMhKUgKYY58OugMkoZbxsw=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.useClerk,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_7__.usePromisifiedAuth\n    ];\n});\n_c = MainSection;\nvar _c;\n$RefreshReg$(_c, \"MainSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9kdWxlcy9ob21lL3VpL2NvbXBvbmVudHMvaG9tZS1zaWRlYmFyL21haW4tc2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBT2lDO0FBQ2tDO0FBQ3RDO0FBQ3FCO0FBRWxELE1BQU1XLFFBQVE7SUFDWjtRQUNFQyxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsTUFBTVIsNkdBQVFBO0lBQ2hCO0lBQ0E7UUFDRU0sT0FBTztRQUNQQyxLQUFLO1FBQ0xDLE1BQU1QLDZHQUFjQTtRQUNwQlEsTUFBTTtJQUNSO0lBQ0E7UUFDRUgsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLE1BQU1ULDZHQUFTQTtJQUNqQjtDQUNEO0FBRU0sTUFBTVcsY0FBYzs7SUFDekIsTUFBTUMsUUFBUVIsdURBQVFBO0lBQ3RCLE1BQU0sRUFBRVMsVUFBVSxFQUFFLEdBQUdSLGlFQUFPQTtJQUU5QixxQkFDRSw4REFBQ1YsZ0VBQVlBO2tCQUNYLDRFQUFDQyx1RUFBbUJBO3NCQUNsQiw0RUFBQ0MsK0RBQVdBOzBCQUNUUyxNQUFNUSxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNoQixtRUFBZUE7a0NBQ2QsNEVBQUNELHFFQUFpQkE7NEJBQ2hCa0IsU0FBU0QsS0FBS1IsS0FBSzs0QkFDbkJVLE9BQU87NEJBQ1BDLFVBQVU7NEJBQ1ZDLFNBQVM7Z0NBQ1AsSUFBSSxDQUFDQyxVQUFVLENBQ2Y7NEJBQ0Y7c0NBRUEsNEVBQUNqQixrREFBSUE7Z0NBQUNrQixNQUFNTixLQUFLUCxHQUFHO2dDQUFFYyxXQUFVOztrREFDOUIsOERBQUNQLEtBQUtOLElBQUk7Ozs7O2tEQUNWLDhEQUFDYzt3Q0FBS0QsV0FBVTtrREFBV1AsS0FBS1IsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBWnJCUSxLQUFLUixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCNUMsRUFBRTtHQTlCV0k7O1FBQ0dQLG1EQUFRQTtRQUNDQyw2REFBT0E7OztLQUZuQk0iLCJzb3VyY2VzIjpbIi9ob21lL2htb2EvRGVza3RvcC95b3V0dWJlLWNsb25lL3NyYy9hcHAvbW9kdWxlcy9ob21lL3VpL2NvbXBvbmVudHMvaG9tZS1zaWRlYmFyL21haW4tc2VjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQge1xuICBTaWRlYmFyR3JvdXAsXG4gIFNpZGViYXJHcm91cENvbnRlbnQsXG4gIFNpZGViYXJNZW51LFxuICBTaWRlYmFyTWVudUJ1dHRvbixcbiAgU2lkZWJhck1lbnVJdGVtLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NpZGViYXJcIjtcbmltcG9ydCB7IEZsYW1lSWNvbiwgSG9tZUljb24sIFBsYXlTcXVhcmVJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlQ2xlcmssIHVzZUF1dGggfSBmcm9tIFwiQGNsZXJrL25leHRqc1wiO1xuXG5jb25zdCBpdGVtcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkhvbWVcIixcbiAgICB1cmw6IFwiL1wiLFxuICAgIGljb246IEhvbWVJY29uLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU3Vic2NyaXB0aW9uc1wiLFxuICAgIHVybDogXCIvZmVlZC9zdWJzY3JpcHRpb25zXCIsXG4gICAgaWNvbjogUGxheVNxdWFyZUljb24sXG4gICAgYXV0aDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlRyZW5kaW5nXCIsXG4gICAgdXJsOiBcIi9mZWVkL3RyZW5kaW5nXCIsXG4gICAgaWNvbjogRmxhbWVJY29uLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IE1haW5TZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjbGVyayA9IHVzZUNsZXJrKCk7XG4gIGNvbnN0IHsgaXNTaWduZWRJbiB9ID0gdXNlQXV0aCgpO1xuXG4gIHJldHVybiAoXG4gICAgPFNpZGViYXJHcm91cD5cbiAgICAgIDxTaWRlYmFyR3JvdXBDb250ZW50PlxuICAgICAgICA8U2lkZWJhck1lbnU+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPFNpZGViYXJNZW51SXRlbSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICA8U2lkZWJhck1lbnVCdXR0b25cbiAgICAgICAgICAgICAgICB0b29sdGlwPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIGFzQ2hpbGRcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZmFsc2V9IC8vIFRPRE86IENoYW5nZSB0byBsb29rIGF0IGN1cnJlbnQgcGF0aG5hbWVcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIXNpZ25lZEluKSB7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udXJsfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbVwiPntpdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvU2lkZWJhck1lbnVCdXR0b24+XG4gICAgICAgICAgICA8L1NpZGViYXJNZW51SXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TaWRlYmFyTWVudT5cbiAgICAgIDwvU2lkZWJhckdyb3VwQ29udGVudD5cbiAgICA8L1NpZGViYXJHcm91cD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiU2lkZWJhckdyb3VwIiwiU2lkZWJhckdyb3VwQ29udGVudCIsIlNpZGViYXJNZW51IiwiU2lkZWJhck1lbnVCdXR0b24iLCJTaWRlYmFyTWVudUl0ZW0iLCJGbGFtZUljb24iLCJIb21lSWNvbiIsIlBsYXlTcXVhcmVJY29uIiwiTGluayIsInVzZUNsZXJrIiwidXNlQXV0aCIsIml0ZW1zIiwidGl0bGUiLCJ1cmwiLCJpY29uIiwiYXV0aCIsIk1haW5TZWN0aW9uIiwiY2xlcmsiLCJpc1NpZ25lZEluIiwibWFwIiwiaXRlbSIsInRvb2x0aXAiLCJhc0NoaWxkIiwiaXNBY3RpdmUiLCJvbkNsaWNrIiwic2lnbmVkSW4iLCJocmVmIiwiY2xhc3NOYW1lIiwic3BhbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/modules/home/ui/components/home-sidebar/main-section.tsx\n"));

/***/ })

});