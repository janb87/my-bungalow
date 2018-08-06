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

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_localize__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_localize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_localize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_colors__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_nav_link__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_spacing__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_screenSizes__ = __webpack_require__(3);









var Nav = function Nav(_ref) {
  var lang = _ref.lang,
      translations = _ref.translations,
      stickToBottom = _ref.stickToBottom,
      maxWidth = _ref.maxWidth;
  // TODO: localize urls
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3590044644", [stickToBottom ? __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_light : __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].green, stickToBottom && "\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 53px;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t", maxWidth && "max-width: ".concat(maxWidth, ";"), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_7__styles_screenSizes__["a" /* default */].SM_MIN, stickToBottom && "\n\t\t\t\t\t\t\ttop: inherit;\n\t\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\t\t", __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].white]]]) + " " + "main-nav"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3590044644", [stickToBottom ? __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_light : __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].green, stickToBottom && "\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 53px;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t", maxWidth && "max-width: ".concat(maxWidth, ";"), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_7__styles_screenSizes__["a" /* default */].SM_MIN, stickToBottom && "\n\t\t\t\t\t\t\ttop: inherit;\n\t\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\t\t", __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].white]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3590044644", [stickToBottom ? __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_light : __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].green, stickToBottom && "\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 53px;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t", maxWidth && "max-width: ".concat(maxWidth, ";"), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_7__styles_screenSizes__["a" /* default */].SM_MIN, stickToBottom && "\n\t\t\t\t\t\t\ttop: inherit;\n\t\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\t\t", __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].white]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__routes__["Link"], {
    route: "/".concat(lang, "/de-bungalow")
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3590044644", [stickToBottom ? __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_light : __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].green, stickToBottom && "\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 53px;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t", maxWidth && "max-width: ".concat(maxWidth, ";"), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_7__styles_screenSizes__["a" /* default */].SM_MIN, stickToBottom && "\n\t\t\t\t\t\t\ttop: inherit;\n\t\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\t\t", __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].white]]])
  }, __WEBPACK_IMPORTED_MODULE_2__utils_localize___default()('menu_bungalow', translations)))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3590044644", [stickToBottom ? __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_light : __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].green, stickToBottom && "\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 53px;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t", maxWidth && "max-width: ".concat(maxWidth, ";"), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_7__styles_screenSizes__["a" /* default */].SM_MIN, stickToBottom && "\n\t\t\t\t\t\t\ttop: inherit;\n\t\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\t\t", __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].white]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__routes__["Link"], {
    route: "/".concat(lang, "/het-park")
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3590044644", [stickToBottom ? __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_light : __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].green, stickToBottom && "\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 53px;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t", maxWidth && "max-width: ".concat(maxWidth, ";"), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_7__styles_screenSizes__["a" /* default */].SM_MIN, stickToBottom && "\n\t\t\t\t\t\t\ttop: inherit;\n\t\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\t\t", __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].white]]])
  }, __WEBPACK_IMPORTED_MODULE_2__utils_localize___default()('menu_park', translations)))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3590044644", [stickToBottom ? __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_light : __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].green, stickToBottom && "\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 53px;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t", maxWidth && "max-width: ".concat(maxWidth, ";"), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_7__styles_screenSizes__["a" /* default */].SM_MIN, stickToBottom && "\n\t\t\t\t\t\t\ttop: inherit;\n\t\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\t\t", __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].white]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__routes__["Link"], {
    route: "/".concat(lang, "/in-de-omgeving")
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3590044644", [stickToBottom ? __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_light : __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].green, stickToBottom && "\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 53px;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t", maxWidth && "max-width: ".concat(maxWidth, ";"), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_7__styles_screenSizes__["a" /* default */].SM_MIN, stickToBottom && "\n\t\t\t\t\t\t\ttop: inherit;\n\t\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\t\t", __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].white]]])
  }, __WEBPACK_IMPORTED_MODULE_2__utils_localize___default()('menu_nearby', translations)))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3590044644", [stickToBottom ? __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_light : __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].green, stickToBottom && "\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 53px;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t", maxWidth && "max-width: ".concat(maxWidth, ";"), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_7__styles_screenSizes__["a" /* default */].SM_MIN, stickToBottom && "\n\t\t\t\t\t\t\ttop: inherit;\n\t\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\t\t", __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].white]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__routes__["Link"], {
    route: "/".concat(lang, "/reserveer")
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3590044644", [stickToBottom ? __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_light : __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].green, stickToBottom && "\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 53px;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t", maxWidth && "max-width: ".concat(maxWidth, ";"), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_7__styles_screenSizes__["a" /* default */].SM_MIN, stickToBottom && "\n\t\t\t\t\t\t\ttop: inherit;\n\t\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\t\t", __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].white]]])
  }, __WEBPACK_IMPORTED_MODULE_2__utils_localize___default()('menu_book', translations))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3590044644",
    css: [".main-nav.__jsx-style-dynamic-selector{background:".concat(stickToBottom ? __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_light : __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].green, ";").concat(stickToBottom && "\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 53px;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t", ";}"), ".main-nav.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;width:100%;margin:0 auto;padding:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;list-style-type:none;".concat(maxWidth && "max-width: ".concat(maxWidth, ";"), ";}"), ".main-nav.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector>li.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:".concat(Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), " 0 0;font-size:1em;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"), ".main-nav.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector>li.__jsx-style-dynamic-selector:last-child{margin-bottom:".concat(Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), ";}"), "@media (min-width:".concat(__WEBPACK_IMPORTED_MODULE_7__styles_screenSizes__["a" /* default */].SM_MIN, "){.main-nav.__jsx-style-dynamic-selector{height:101px;").concat(stickToBottom && "\n\t\t\t\t\t\t\ttop: inherit;\n\t\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\t\t", ";}.main-nav.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.main-nav.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector>li.__jsx-style-dynamic-selector{margin:0;font-size:1.4em;border-right:1px solid ").concat(__WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].white, ";}.main-nav.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector>li.__jsx-style-dynamic-selector:last-child{border-right:none;margin-bottom:0;}}")],
    dynamic: [stickToBottom ? __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_light : __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].green, stickToBottom && "\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\ttop: 53px;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t", maxWidth && "max-width: ".concat(maxWidth, ";"), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_6__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_7__styles_screenSizes__["a" /* default */].SM_MIN, stickToBottom && "\n\t\t\t\t\t\t\ttop: inherit;\n\t\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\t\t", __WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].white]
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__styles_nav_link__["a" /* default */], {
    selector: '.main-nav'
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Based on https://blackrockdigital.github.io/startbootstrap-freelancer/
var colors = {
  black: '#1a252f',
  blue: '#007bff',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',
  gray: '#6c757d',
  gray_dark: '#343a40',
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  light: '#f8f9fa',
  dark: '#343a40',
  white: '#fff',
  gray_light: 'rgba(0, 0, 0, 0.5)'
};
var colorPalete = {
  PALETTE_1: '#2c3e50',
  PALETTE_2: '#18bc9c',
  PALETTE_3: colors.cyan
};
/* harmony default export */ __webpack_exports__["a"] = (_objectSpread({}, colors, colorPalete));

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var sizes = {
  XS_MIN: '480px',
  SM_MIN: '768px',
  MD_MIN: '992px',
  LG_MIN: '1200px',
  XL_MIN: '1400px'
};
/* harmony default export */ __webpack_exports__["a"] = (sizes);

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(7)();

routes.add('default', '/', 'home').add('default-lang', '/:lang', 'home').add('home', '/:lang/home', 'home').add('contact', '/:lang/contact', 'contact').add('bungalow-nl', '/:lang/de-bungalow', 'bungalow').add('bungalow-en', '/:lang/the-bungalow', 'bungalow').add('park-nl', '/:lang/het-park', 'park').add('nearby-nl', '/:lang/in-de-omgeving', 'nearby').add('book-nl', '/:lang/reserveer', 'book');
module.exports = routes;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colors__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var selector = _ref.selector;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
    jsx: ""
  }, "\n\t\t".concat(selector, " a {\n\t\t\tcolor: ").concat(__WEBPACK_IMPORTED_MODULE_1__colors__["a" /* default */].white, ";\n\t\t\ttext-decoration: none;\n\t\t}\n\n\t\t").concat(selector, " a:hover {\n\t\t\ttext-decoration: none;\n\t\t\topacity: 0.6;\n\t\t}\n\t"));
});

/***/ })

/******/ });