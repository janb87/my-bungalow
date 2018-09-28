webpackHotUpdate(0,{

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

String.prototype.includes = String.prototype.includes || __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_string_virtual_includes___default.a;
String.prototype.repeat = String.prototype.repeat || __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_string_virtual_repeat___default.a;
Array.prototype.find = Array.prototype.find || __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_virtual_find___default.a;

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      // .length of function is 2
      'use strict';

      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
}

/***/ }),

/***/ 17:
false,

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
__webpack_require__("./polyfills.js");
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
//# sourceMappingURL=0.f922b1032a493d080e88.hot-update.js.map