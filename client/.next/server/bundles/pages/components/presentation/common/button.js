module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = function (name) {
  var translations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var translation = translations.find(function (item) {
    return item.name === name;
  });
  return translation ? translation.value : "Unknown translation ".concat(name);
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_RaisedButton__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_localize__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_localize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_localize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_spacing__ = __webpack_require__(5);





var Button = function Button(_ref) {
  var labelResourceId = _ref.labelResourceId,
      translations = _ref.translations,
      onClick = _ref.onClick,
      _ref$isSubmit = _ref.isSubmit,
      isSubmit = _ref$isSubmit === void 0 ? false : _ref$isSubmit;
  return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    key: "button",
    className: "button"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_RaisedButton___default.a, {
    label: __WEBPACK_IMPORTED_MODULE_2__utils_localize___default()(labelResourceId, translations),
    secondary: true,
    onClick: onClick,
    type: isSubmit ? 'submit' : 'button'
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
    key: "styles",
    jsx: ""
  }, "\n\t\t\t.button {\n\t\t\t\tmargin: ".concat(Object(__WEBPACK_IMPORTED_MODULE_3__styles_spacing__["b" /* spacingMd */])(), " 0;\n\t\t\t}\n\t\t"))];
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export spacing */
/* harmony export (immutable) */ __webpack_exports__["c"] = spacingXlg;
/* harmony export (immutable) */ __webpack_exports__["a"] = spacingLg;
/* harmony export (immutable) */ __webpack_exports__["b"] = spacingMd;
/* unused harmony export spacingSmall */
var LARGE = 24;
var EXTRA_LARGE = 48;
var MEDIUM = 16;
var SMALL = 8;
function spacing() {
  for (var _len = arguments.length, trbl = new Array(_len), _key = 0; _key < _len; _key++) {
    trbl[_key] = arguments[_key];
  }

  return trbl.concat().reduce(function (acc, current) {
    return "".concat(acc, " ").concat(current, "px").trim();
  }, '');
}
function spacingXlg() {
  return spacing(EXTRA_LARGE);
}
function spacingLg() {
  return spacing(LARGE);
}
function spacingMd() {
  return spacing(MEDIUM);
}
function spacingSmall() {
  return spacing(SMALL);
}

/***/ })

/******/ });