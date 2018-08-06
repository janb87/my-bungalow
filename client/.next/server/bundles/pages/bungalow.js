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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (name) {
  var translations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var translation = translations.find(function (item) {
    return item.name === name;
  });
  return translation ? translation.value : "Unknown translation ".concat(name);
};

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(7)();

routes.add('default', '/', 'home').add('default-lang', '/:lang', 'home').add('home', '/:lang/home', 'home').add('contact', '/:lang/contact', 'contact').add('bungalow-nl', '/:lang/de-bungalow', 'bungalow').add('bungalow-en', '/:lang/the-bungalow', 'bungalow').add('park-nl', '/:lang/het-park', 'park').add('nearby-nl', '/:lang/in-de-omgeving', 'nearby').add('book-nl', '/:lang/reserveer', 'book');
module.exports = routes;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 8 */
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

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_localize__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_localize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_localize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_screenSizes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_spacing__ = __webpack_require__(5);







var DefaultHeader = function DefaultHeader(_ref) {
  var lang = _ref.lang,
      translations = _ref.translations;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2719252106", [__WEBPACK_IMPORTED_MODULE_4__styles_screenSizes__["a" /* default */].LG_MIN, Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["b" /* spacingMd */])(), Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_4__styles_screenSizes__["a" /* default */].SM_MIN, Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["c" /* spacingXlg */])()]]]) + " " + "default-header-nav"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes__["Link"], {
    route: "contact",
    params: {
      lang: lang
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2719252106", [__WEBPACK_IMPORTED_MODULE_4__styles_screenSizes__["a" /* default */].LG_MIN, Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["b" /* spacingMd */])(), Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_4__styles_screenSizes__["a" /* default */].SM_MIN, Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["c" /* spacingXlg */])()]]])
  }, __WEBPACK_IMPORTED_MODULE_2__utils_localize___default()('contact_title', translations))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes__["Link"], {
    route: "home",
    params: {
      lang: lang
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2719252106", [__WEBPACK_IMPORTED_MODULE_4__styles_screenSizes__["a" /* default */].LG_MIN, Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["b" /* spacingMd */])(), Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_4__styles_screenSizes__["a" /* default */].SM_MIN, Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["c" /* spacingXlg */])()]]])
  }, __WEBPACK_IMPORTED_MODULE_2__utils_localize___default()('home_title', translations))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2719252106",
    css: ["nav.default-header-nav.__jsx-style-dynamic-selector{max-width:".concat(__WEBPACK_IMPORTED_MODULE_4__styles_screenSizes__["a" /* default */].LG_MIN, ";margin:").concat(Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["b" /* spacingMd */])(), " auto;text-align:right;}"), "nav.default-header-nav.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector{font-size:1em;margin:0 ".concat(Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["a" /* spacingLg */])(), ";}"), "nav.default-header-nav.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector:not(:last-child){margin-right:0;}", "@media (min-width:".concat(__WEBPACK_IMPORTED_MODULE_4__styles_screenSizes__["a" /* default */].SM_MIN, "){nav.default-header-nav.__jsx-style-dynamic-selector{margin:").concat(Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["a" /* spacingLg */])(), " auto;}nav.default-header-nav.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector{font-size:1.2em;margin:0 ").concat(Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["c" /* spacingXlg */])(), ";}}")],
    dynamic: [__WEBPACK_IMPORTED_MODULE_4__styles_screenSizes__["a" /* default */].LG_MIN, Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["b" /* spacingMd */])(), Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["a" /* spacingLg */])(), __WEBPACK_IMPORTED_MODULE_4__styles_screenSizes__["a" /* default */].SM_MIN, Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["a" /* spacingLg */])(), Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["c" /* spacingXlg */])()]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultHeader);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(4);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "material-ui/styles/getMuiTheme"
var getMuiTheme_ = __webpack_require__(13);
var getMuiTheme__default = /*#__PURE__*/__webpack_require__.n(getMuiTheme_);

// EXTERNAL MODULE: external "material-ui/styles/MuiThemeProvider"
var MuiThemeProvider_ = __webpack_require__(14);
var MuiThemeProvider__default = /*#__PURE__*/__webpack_require__.n(MuiThemeProvider_);

// EXTERNAL MODULE: ./styles/colors.js
var colors = __webpack_require__(2);

// CONCATENATED MODULE: ./styles/global.js



/* harmony default export */ var global = (function () {
  return [external__react__default.a.createElement("link", {
    key: "global-font",
    href: "https://fonts.googleapis.com/css?family=Roboto+Slab",
    rel: "stylesheet"
  }), external__react__default.a.createElement("span", {
    key: "global-styles",
    className: style__default.a.dynamic([["1751229798", [colors["a" /* default */].black, colors["a" /* default */].green, colors["a" /* default */].teal]]])
  }, external__react__default.a.createElement(style__default.a, {
    styleId: "1751229798",
    css: ["body{padding:0;margin:0;font-family:'Roboto Slab',serif;font-size:16px;color:".concat(colors["a" /* default */].black, ";}"), "a{color:".concat(colors["a" /* default */].green, ";-webkit-text-decoration:none;text-decoration:none;}"), "a:hover{color:".concat(colors["a" /* default */].teal, ";-webkit-text-decoration:none;text-decoration:none;}")],
    dynamic: [colors["a" /* default */].black, colors["a" /* default */].green, colors["a" /* default */].teal]
  }))];
});
// EXTERNAL MODULE: ./styles/screenSizes.js
var screenSizes = __webpack_require__(3);

// EXTERNAL MODULE: ./pages/components/presentation/common/nav.js
var nav = __webpack_require__(10);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(15);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./utils/localize.js
var localize = __webpack_require__(1);
var localize_default = /*#__PURE__*/__webpack_require__.n(localize);

// EXTERNAL MODULE: ./pages/components/presentation/header/defaultHeader.js
var defaultHeader = __webpack_require__(11);

// CONCATENATED MODULE: ./pages/components/container/app.js












var app_App = function App(_ref) {
  var _ref$config = _ref.config,
      lang = _ref$config.lang,
      translations = _ref$config.translations,
      settings = _ref$config.settings,
      backgroundImage = _ref.backgroundImage,
      children = _ref.children,
      _ref$stickMenuToBotto = _ref.stickMenuToBottom,
      stickMenuToBottom = _ref$stickMenuToBotto === void 0 ? false : _ref$stickMenuToBotto,
      header = _ref.header,
      userAgent = _ref.userAgent;

  if (!header) {
    header = external__react__default.a.createElement(defaultHeader["default"], {
      lang: lang,
      translations: translations
    });
  }

  var muiTheme = getMuiTheme__default()({
    fontFamily: 'Roboto Slab, serif',
    palette: {
      primary1Color: colors["a" /* default */].PALETTE_1,
      primary2Color: colors["a" /* default */].PALETTE_2,
      primary3Color: colors["a" /* default */].PALETTE_3,
      accent1Color: colors["a" /* default */].green,
      accent2Color: colors["a" /* default */].yellow,
      accent3Color: colors["a" /* default */].danger,
      textColor: colors["a" /* default */].dark,
      secondaryTextColor: colors["a" /* default */].gray_dark,
      alternateTextColor: colors["a" /* default */].white,
      canvasColor: colors["a" /* default */].white,
      borderColor: colors["a" /* default */].gray_light,
      disabledColor: colors["a" /* default */].gray_light
    }
  }, {
    avatar: {
      borderColor: null
    },
    userAgent: userAgent
  });
  return external__react__default.a.createElement(MuiThemeProvider__default.a, {
    muiTheme: muiTheme
  }, external__react__default.a.createElement("div", {
    className: style__default.a.dynamic([["2709159866", [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(screenSizes["a" /* default */].LG_MIN, ";")]]]) + " " + "app"
  }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", {
    className: style__default.a.dynamic([["2709159866", [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(screenSizes["a" /* default */].LG_MIN, ";")]]])
  }, localize_default()('website_title', translations)), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: style__default.a.dynamic([["2709159866", [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(screenSizes["a" /* default */].LG_MIN, ";")]]])
  }), external__react__default.a.createElement("script", {
    src: "https://www.google.com/recaptcha/api.js",
    className: style__default.a.dynamic([["2709159866", [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(screenSizes["a" /* default */].LG_MIN, ";")]]])
  })), external__react__default.a.createElement("header", {
    className: style__default.a.dynamic([["2709159866", [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(screenSizes["a" /* default */].LG_MIN, ";")]]])
  }, header), external__react__default.a.createElement("main", {
    className: style__default.a.dynamic([["2709159866", [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(screenSizes["a" /* default */].LG_MIN, ";")]]])
  }, external__react__default.a.createElement(nav["default"], {
    stickToBottom: stickMenuToBottom,
    lang: lang,
    translations: translations,
    maxWidth: !backgroundImage ? screenSizes["a" /* default */].LG_MIN : undefined
  }), external__react__default.a.createElement("div", {
    className: style__default.a.dynamic([["2709159866", [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(screenSizes["a" /* default */].LG_MIN, ";")]]]) + " " + "page-content"
  }, children)), external__react__default.a.createElement(style__default.a, {
    styleId: "2709159866",
    css: ["main.__jsx-style-dynamic-selector{".concat(stickMenuToBottom && "height: 100vh;", " ").concat(backgroundImage && "background-image: url(".concat(backgroundImage, ");"), " background-repeat:no-repeat;background-size:cover;background-position:center center;}"), ".page-content.__jsx-style-dynamic-selector{height:100%;margin:0 auto;".concat(!backgroundImage && "max-width: ".concat(screenSizes["a" /* default */].LG_MIN, ";"), ";}")],
    dynamic: [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(screenSizes["a" /* default */].LG_MIN, ";")]
  }), external__react__default.a.createElement(global)));
};

/* harmony default export */ var app = __webpack_exports__["default"] = (app_App);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getJson;
/* harmony export (immutable) */ __webpack_exports__["b"] = postJson;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



function getBaseUrl(req) {
  if (!req) {
    return '';
  }

  var host = req.host;

  if (host !== 'localhost') {
    return 'https://my-bungalow.herokuapp.com';
  }

  return req ? "".concat(req.protocol, "://").concat(host, ":3000") : '';
}

function getFullUrl(baseUrl, url) {
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var fullUrl = baseUrl + url;
  Object.keys(query).forEach(function (key, index) {
    var startChar = '&';

    if (index === 0) {
      startChar = '?';
    }

    fullUrl += "".concat(startChar).concat(encodeURIComponent(key), "=").concat(encodeURIComponent(query[key]));
  });
  return fullUrl;
}

function getJson(_x, _x2) {
  return _getJson.apply(this, arguments);
}

function _getJson() {
  _getJson = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(req, url) {
    var query,
        baseUrl,
        fullUrl,
        res,
        _args = arguments;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            baseUrl = getBaseUrl(req);
            fullUrl = getFullUrl(baseUrl, url, query);
            _context.next = 5;
            return fetch(fullUrl);

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            return _context.abrupt("return", _context.sent);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getJson.apply(this, arguments);
}

function postJson(url) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);

    xhr.onreadystatechange = function () {
      if (xhr.readyState > 3) {
        xhr.status === 200 ? resolve(xhr.responseText) : reject(new Error(xhr.responseText));
      }
    };

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(body));
  });
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_localize__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_localize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils_localize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_photo_gallery__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_photo_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_photo_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_images__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_images___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_images__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_measure__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_measure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_measure__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__ = __webpack_require__(3);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Gallery =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Gallery, _PureComponent);

  function Gallery(props) {
    var _this;

    _classCallCheck(this, Gallery);

    _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));
    _this.state = {
      currentImage: 0,
      width: -1
    };
    _this.closeLightbox = _this.closeLightbox.bind(_assertThisInitialized(_this));
    _this.openLightbox = _this.openLightbox.bind(_assertThisInitialized(_this));
    _this.gotoNext = _this.gotoNext.bind(_assertThisInitialized(_this));
    _this.gotoPrevious = _this.gotoPrevious.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Gallery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          photos = _props.photos,
          translations = _props.translations;
      var width = this.state.width;

      if (!Array.isArray(photos) || photos.length === 0) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_1__utils_localize___default()('gallery_no_images', translations));
      }

      return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_measure___default.a, {
        key: "gallery",
        bounds: true,
        onResize: function onResize(contentRect) {
          return _this2.setState({
            width: contentRect.bounds.width
          });
        }
      }, function (_ref) {
        var measureRef = _ref.measureRef;
        var columns = 1;

        if (width >= parseInt(__WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__["a" /* default */].XS_MIN, 10)) {
          columns = 2;
        }

        if (width >= parseInt(__WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__["a" /* default */].SM_MIN, 10)) {
          columns = 3;
        }

        if (width >= parseInt(__WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__["a" /* default */].LG_MIN, 10)) {
          columns = 4;
        }

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          ref: measureRef,
          style: {
            visibility: width < 1 ? 'hidden' : 'visible'
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_photo_gallery___default.a, {
          columns: columns,
          photos: photos,
          onClick: _this2.openLightbox
        }));
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_images___default.a, {
        key: "lightbox",
        images: photos,
        onClose: this.closeLightbox,
        onClickPrev: this.gotoPrevious,
        onClickNext: this.gotoNext,
        currentImage: this.state.currentImage,
        isOpen: this.state.lightboxIsOpen
      })];
    }
  }, {
    key: "openLightbox",
    value: function openLightbox(event, obj) {
      this.setState({
        currentImage: obj.index,
        lightboxIsOpen: true
      });
    }
  }, {
    key: "closeLightbox",
    value: function closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false
      });
    }
  }, {
    key: "gotoPrevious",
    value: function gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1
      });
    }
  }, {
    key: "gotoNext",
    value: function gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    }
  }]);

  return Gallery;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-photo-gallery");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-images");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-measure");

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_container_app__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_ajax__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_localize__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_localize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils_localize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_spacing__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_screenSizes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_presentation_gallery_gallery__ = __webpack_require__(18);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }









var Bungalow = function Bungalow(_ref) {
  var config = _ref.config,
      userAgent = _ref.userAgent,
      bungalowPage = _ref.bungalowPage;
  var photos = bungalowPage.images.map(function (_ref2) {
    var url = _ref2.url,
        width = _ref2.width,
        height = _ref2.height;
    return {
      src: url,
      width: width,
      height: height
    };
  });
  return [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_container_app__["default"], {
    key: "app",
    config: config,
    userAgent: userAgent
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "the-bungalow"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", null, __WEBPACK_IMPORTED_MODULE_4__utils_localize___default()('the_bungalow_title', config.translations)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", null, __WEBPACK_IMPORTED_MODULE_4__utils_localize___default()('the_bungalow_general', config.translations)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    dangerouslySetInnerHTML: {
      __html: bungalowPage.characteristics
    }
  }), bungalowPage.groundPlanImage && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_presentation_gallery_gallery__["default"], {
    photos: [{
      src: bungalowPage.groundPlanImage
    }],
    translations: config.translations
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_presentation_gallery_gallery__["default"], {
    photos: photos,
    translations: config.translations
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", null, __WEBPACK_IMPORTED_MODULE_4__utils_localize___default()('the_bungalow_house_rules', config.translations)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    dangerouslySetInnerHTML: {
      __html: bungalowPage.rules
    }
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
    key: "styles",
    jsx: ""
  }, "\n\t\t\t.the-bungalow {\n\t\t\t\tmargin: ".concat(Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["a" /* spacingLg */])(), ";\n\t\t\t}\n\t\t\t.the-bungalow section {\n\t\t\t\tmargin: ").concat(Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["c" /* spacingXlg */])(), " 0;\n\t\t\t}\n\t\t\t.the-bungalow h2 + section {\n\t\t\t\tmargin-top: 0;\n\t\t\t}\n\t\t\t@media (min-width: ").concat(__WEBPACK_IMPORTED_MODULE_6__styles_screenSizes__["a" /* default */].SM_MIN, ") {\n\t\t\t\t.the-bungalow {\n\t\t\t\t\tmargin: ").concat(Object(__WEBPACK_IMPORTED_MODULE_5__styles_spacing__["c" /* spacingXlg */])(), ";\n\t\t\t\t}\n\t\t\t}\n\t\t"))];
};

Bungalow.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref3) {
    var req, lang, _ref5, translations, settings, bungalowPage;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref3.req, lang = _ref3.query.lang;
            _context.next = 3;
            return Object(__WEBPACK_IMPORTED_MODULE_3__utils_ajax__["a" /* getJson */])(req, "/api/".concat(lang ? encodeURIComponent(lang) + '/' : '', "config"));

          case 3:
            _ref5 = _context.sent;
            translations = _ref5.translations;
            settings = _ref5.settings;
            _context.next = 8;
            return Object(__WEBPACK_IMPORTED_MODULE_3__utils_ajax__["a" /* getJson */])(req, "/api/".concat(encodeURIComponent(lang || settings.defaultLanguage), "/bungalow-page"));

          case 8:
            bungalowPage = _context.sent;
            return _context.abrupt("return", {
              config: {
                translations: translations,
                settings: settings,
                lang: lang || settings.defaultLanguage
              },
              userAgent: req && req.headers['user-agent'],
              bungalowPage: bungalowPage
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Bungalow);

/***/ })
/******/ ]);