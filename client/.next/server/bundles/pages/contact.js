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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
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

  var host = req.hostname;

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
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = Loader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_CircularProgress__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_CircularProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_CircularProgress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_colors__ = __webpack_require__(2);



function Loader(_ref) {
  var show = _ref.show;
  return show ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_CircularProgress___default.a, {
    color: __WEBPACK_IMPORTED_MODULE_2__styles_colors__["a" /* default */].white,
    size: 80,
    thickness: 5
  }) : null;
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("material-ui/CircularProgress");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_spacing__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_colors__ = __webpack_require__(2);





var Alert = function Alert(_ref) {
  var show = _ref.show,
      children = _ref.children,
      onDismiss = _ref.onDismiss,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'success' : _ref$type;
  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()('alert', {
    visible: show,
    warning: type === 'warning'
  });
  return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    key: "alert",
    className: classes
  }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
    key: "styles",
    jsx: ""
  }, "\n\t\t\t.alert {\n\t\t\t\tdisplay: none;\n\t\t\t\tmargin: ".concat(Object(__WEBPACK_IMPORTED_MODULE_2__styles_spacing__["c" /* spacingXlg */])(), " 0;\n\t\t\t\tpadding: ").concat(Object(__WEBPACK_IMPORTED_MODULE_2__styles_spacing__["a" /* spacingLg */])(), ";\n\n\t\t\t\tcolor: ").concat(__WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].white, ";\n\t\t\t\tbackground-color: ").concat(__WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].success, ";\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.visible {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t"))];
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = LoaderCurtain;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_colors__ = __webpack_require__(2);




function LoaderCurtain(_ref) {
  var children = _ref.children,
      show = _ref.show;

  // TODO: show after delay
  if (!show) {
    return null;
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2537079074", [__WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_dark]]]) + " " + "loader-curtain"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["2537079074", [__WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_dark]]]) + " " + "loader-content"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__loader__["default"], {
    show: true
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2537079074",
    css: [".loader-curtain.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;bottom:0;right:0;opacity:0.5;z-index:999;background-color:".concat(__WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_dark, ";}"), ".loader-content.__jsx-style-dynamic-selector{height:100vh;width:100px;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;opacity:1;}"],
    dynamic: [__WEBPACK_IMPORTED_MODULE_3__styles_colors__["a" /* default */].gray_dark]
  }));
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./utils/localize.js
var localize = __webpack_require__(1);
var localize_default = /*#__PURE__*/__webpack_require__.n(localize);

// EXTERNAL MODULE: ./styles/spacing.js
var spacing = __webpack_require__(5);

// EXTERNAL MODULE: external "material-ui/TextField"
var TextField_ = __webpack_require__(30);
var TextField__default = /*#__PURE__*/__webpack_require__.n(TextField_);

// CONCATENATED MODULE: ./utils/localizeError.js

function localizeError(error) {
  var translations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!error) {
    return null;
  }

  if (error.kind === 'required') {
    return localize_default()('error_required', translations);
  }

  if (error.kind === 'invalid-email') {
    return localize_default()('error_invalid_email', translations);
  }

  return error.message;
}
// CONCATENATED MODULE: ./pages/components/presentation/form/formInputField.js






var formInputField_FormInputField = function FormInputField(_ref) {
  var name = _ref.name,
      labelResourceId = _ref.labelResourceId,
      translations = _ref.translations,
      _onChange = _ref.onChange,
      value = _ref.value,
      error = _ref.error,
      _ref$multiLine = _ref.multiLine,
      multiLine = _ref$multiLine === void 0 ? false : _ref$multiLine,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? true : _ref$fullWidth,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required;
  return [external__react__default.a.createElement("div", {
    key: "field",
    className: "form-field"
  }, external__react__default.a.createElement(TextField__default.a, {
    name: name,
    hintText: localize_default()(labelResourceId, translations),
    floatingLabelText: localize_default()(labelResourceId, translations),
    floatingLabelFixed: false,
    multiLine: multiLine,
    rows: multiLine ? 5 : undefined,
    onChange: function onChange(e, value) {
      return _onChange(value);
    },
    value: value,
    errorText: localizeError(error, translations),
    fullWidth: fullWidth,
    hintStyle: {
      top: '36px'
    },
    type: type,
    required: required
  })), external__react__default.a.createElement("style", {
    key: "styles",
    jsx: ""
  }, "\n\t\t\t.form-field {\n\t\t\t\tmin-width: 300px;\n\t\t\t\tmargin: 0 0 ".concat(Object(spacing["b" /* spacingMd */])(), " 0;\n\t\t\t}\n\t\t"))];
};

/* harmony default export */ var formInputField = __webpack_exports__["default"] = (formInputField_FormInputField);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(9);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./pages/components/container/app.js + 1 modules
var app = __webpack_require__(12);

// EXTERNAL MODULE: ./utils/ajax.js
var ajax = __webpack_require__(16);

// EXTERNAL MODULE: ./utils/localize.js
var localize = __webpack_require__(1);
var localize_default = /*#__PURE__*/__webpack_require__.n(localize);

// EXTERNAL MODULE: ./styles/spacing.js
var spacing = __webpack_require__(5);

// EXTERNAL MODULE: ./pages/components/presentation/form/formInputField.js + 1 modules
var formInputField = __webpack_require__(29);

// EXTERNAL MODULE: ./pages/components/presentation/common/button.js
var common_button = __webpack_require__(26);

// EXTERNAL MODULE: ./pages/components/presentation/common/loaderCurtain.js
var loaderCurtain = __webpack_require__(28);

// EXTERNAL MODULE: ./styles/screenSizes.js
var screenSizes = __webpack_require__(3);

// CONCATENATED MODULE: ./utils/tryParseJson.js
function tryParseJson(value) {
  try {
    return JSON.parse(value);
  } catch (err) {
    return value;
  }
}
// EXTERNAL MODULE: ./pages/components/presentation/common/alert.js
var common_alert = __webpack_require__(24);

// CONCATENATED MODULE: ./pages/contact.js


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var INITIAL_STATE = {
  errors: undefined,
  name: '',
  email: '',
  message: '',
  isSubmitting: false,
  isSubmitted: false
};

var contact_Contact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact(props) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));
    _this.state = INITIAL_STATE;
    _this._onSubmit = _this._onSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          config = _props.config,
          userAgent = _props.userAgent;
      var _state = this.state,
          isSubmitting = _state.isSubmitting,
          isSubmitted = _state.isSubmitted,
          errors = _state.errors;
      return [external__react__default.a.createElement(app["default"], {
        key: "app",
        config: config,
        userAgent: userAgent
      }, external__react__default.a.createElement(loaderCurtain["default"], {
        show: isSubmitting
      }), external__react__default.a.createElement("div", {
        className: "contact"
      }, external__react__default.a.createElement("h1", null, localize_default()('contact_title', config.translations)), external__react__default.a.createElement("p", null, localize_default()('contact_description', config.translations)), external__react__default.a.createElement(common_alert["default"], {
        show: isSubmitted && !errors
      }, localize_default()('contact_success', config.translations)), !isSubmitted || errors ? this._renderForm() : null)), external__react__default.a.createElement("style", {
        key: "styles",
        jsx: ""
      }, "\n\t\t\t\t.contact {\n\t\t\t\t\tmargin: ".concat(Object(spacing["a" /* spacingLg */])(), ";\n\t\t\t\t}\n\t\t\t\t@media (min-width: ").concat(screenSizes["a" /* default */].SM_MIN, ") {\n\t\t\t\t\t.contact {\n\t\t\t\t\t\tmargin: ").concat(Object(spacing["c" /* spacingXlg */])(), ";\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"))];
    }
  }, {
    key: "_renderForm",
    value: function _renderForm() {
      var _this2 = this;

      var config = this.props.config;
      var _state2 = this.state,
          name = _state2.name,
          email = _state2.email,
          message = _state2.message,
          errors = _state2.errors;
      var errorsObj = _typeof(errors) === 'object' ? errors : {};
      return external__react__default.a.createElement("form", {
        onSubmit: this._onSubmit
      }, external__react__default.a.createElement(formInputField["default"], {
        name: "name",
        labelResourceId: "contact_name",
        translations: config.translations,
        onChange: function onChange(newValue) {
          return _this2._onFieldChange('name', newValue);
        },
        value: name,
        error: errorsObj.name
      }), external__react__default.a.createElement(formInputField["default"], {
        name: "email",
        labelResourceId: "contact_email",
        translations: config.translations,
        onChange: function onChange(newValue) {
          return _this2._onFieldChange('email', newValue);
        },
        value: email,
        error: errorsObj.email
      }), external__react__default.a.createElement(formInputField["default"], {
        name: "message",
        labelResourceId: "contact_message",
        multiLine: true,
        translations: config.translations,
        onChange: function onChange(newValue) {
          return _this2._onFieldChange('message', newValue);
        },
        value: message,
        error: errorsObj.message
      }), external__react__default.a.createElement(common_button["default"], {
        labelResourceId: "contact_submit",
        translations: config.translations,
        isSubmit: true
      }));
    }
  }, {
    key: "_onFieldChange",
    value: function _onFieldChange(fieldName, newValue) {
      this.setState(_defineProperty({}, fieldName, newValue));
    }
  }, {
    key: "_onSubmit",
    value: function _onSubmit(e) {
      e.preventDefault();

      this._submitForm();
    }
  }, {
    key: "_submitForm",
    value: function () {
      var _submitForm2 = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        var _this3 = this;

        var _state3, name, email, message;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _state3 = this.state, name = _state3.name, email = _state3.email, message = _state3.message;
                this.setState({
                  isSubmitting: true,
                  isSubmitted: false
                });
                Object(ajax["b" /* postJson */])('/api/contact', {
                  name: name,
                  email: email,
                  message: message
                }).then(function () {
                  _this3.setState(_objectSpread({}, INITIAL_STATE, {
                    isSubmitted: true
                  }));
                }).catch(function (error) {
                  _this3.setState({
                    isSubmitting: false,
                    isSubmitted: true,
                    errors: tryParseJson(error.message)
                  });
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function _submitForm() {
        return _submitForm2.apply(this, arguments);
      };
    }()
  }]);

  return Contact;
}(external__react__default.a.Component);

contact_Contact.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee2(_ref) {
    var req, lang, _ref3, translations, settings;

    return regenerator__default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            req = _ref.req, lang = _ref.query.lang;
            _context2.next = 3;
            return Object(ajax["a" /* getJson */])(req, "/api/".concat(encodeURIComponent(lang), "/config"));

          case 3:
            _ref3 = _context2.sent;
            translations = _ref3.translations;
            settings = _ref3.settings;
            return _context2.abrupt("return", {
              config: {
                lang: lang,
                translations: translations,
                settings: settings
              },
              userAgent: req && req.headers['user-agent']
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ var contact = __webpack_exports__["default"] = (contact_Contact);

/***/ })
/******/ ]);