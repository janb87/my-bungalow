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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
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

/***/ 29:
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

/***/ 30:
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


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