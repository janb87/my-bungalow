webpackHotUpdate(0,{

/***/ "../node_modules/core-js/library/fn/array/virtual/find.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../node_modules/core-js/library/modules/es6.array.find.js");
module.exports = __webpack_require__("../node_modules/core-js/library/modules/_entry-virtual.js")('Array').find;


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.array.find.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("../node_modules/core-js/library/modules/_export.js");
var $find = __webpack_require__("../node_modules/core-js/library/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("../node_modules/core-js/library/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./polyfills.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_string_virtual_includes__ = __webpack_require__("../node_modules/core-js/library/fn/string/virtual/includes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_string_virtual_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_string_virtual_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_string_virtual_repeat__ = __webpack_require__("../node_modules/core-js/library/fn/string/virtual/repeat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_string_virtual_repeat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_string_virtual_repeat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_virtual_find__ = __webpack_require__("../node_modules/core-js/library/fn/array/virtual/find.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_virtual_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_virtual_find__);
/* eslint no-extend-native: 0 */
// core-js comes with Next.js. So, you can import it like below


 // Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)

console.log('Load your polyfills');
String.prototype.includes = __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_string_virtual_includes___default.a;
String.prototype.repeat = __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_string_virtual_repeat___default.a;
Array.prototype.find = __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_virtual_find___default.a;

/***/ }),

/***/ 7:
false,

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
__webpack_require__("../node_modules/next/dist/client/webpack-hot-middleware-client.js");
__webpack_require__("../node_modules/next/dist/client/on-demand-entries-client.js");
module.exports = __webpack_require__("../node_modules/next/dist/client/next-dev.js");


/***/ })

})
//# sourceMappingURL=0.4afca637f7910afa3c8a.hot-update.js.map