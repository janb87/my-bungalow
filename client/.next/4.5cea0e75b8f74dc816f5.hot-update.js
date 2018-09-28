webpackHotUpdate(4,{

/***/ "./pages/home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_colors__ = __webpack_require__("./styles/colors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_container_app__ = __webpack_require__("./pages/components/container/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_presentation_header_homePageHeader__ = __webpack_require__("./pages/components/presentation/header/homePageHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ajax__ = __webpack_require__("./utils/ajax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_screenSizes__ = __webpack_require__("./styles/screenSizes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_spacing__ = __webpack_require__("./styles/spacing.js");

var _jsxFileName = "/home/projects/github/my-bungalow/client/pages/home.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var HomePage = function HomePage(_ref) {
  var message = _ref.message,
      backgroundImage = _ref.backgroundImage,
      config = _ref.config,
      userAgent = _ref.userAgent;
  return [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_container_app__["a" /* default */], {
    key: "app",
    config: config,
    backgroundImage: backgroundImage,
    stickMenuToBottom: true,
    header: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_presentation_header_homePageHeader__["a" /* default */], _extends({}, config, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    })),
    userAgent: userAgent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, message))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
    key: "styles",
    jsx: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "\n\t\t.message {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tjustify-content: center;\n\t\t\theight: 100%;\n\t\t\tmargin: 0 ".concat(Object(__WEBPACK_IMPORTED_MODULE_7__styles_spacing__["a" /* spacingLg */])(), ";\n\t\t\twidth: calc(100% - 100px);\n\n\t\t\tfont-size: 2em;\n\t\t\tcolor: ").concat(__WEBPACK_IMPORTED_MODULE_2__styles_colors__["a" /* default */].white, ";\n\t\t}\n\n\t\t@media (min-width: ").concat(__WEBPACK_IMPORTED_MODULE_6__styles_screenSizes__["a" /* default */].SM_MIN, ") {\n\t\t\t.message {\n\t\t\t\theight: calc(100% - 100px);\n\t\t\t\tmargin: 0 ").concat(Object(__WEBPACK_IMPORTED_MODULE_7__styles_spacing__["c" /* spacingXlg */])(), ";\n\n\t\t\t\tfont-size: 2.5em;\n\t\t\t}\n\t\t}\n\t"))];
};

HomePage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
    var req, lang, _ref4, translations, settings, _ref5, message, backgroundImage;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req, lang = _ref2.query.lang;
            _context.next = 3;
            return Object(__WEBPACK_IMPORTED_MODULE_5__utils_ajax__["a" /* getJson */])(req, "/api/".concat(lang ? encodeURIComponent(lang) + '/' : '', "config"));

          case 3:
            _ref4 = _context.sent;
            translations = _ref4.translations;
            settings = _ref4.settings;
            _context.next = 8;
            return Object(__WEBPACK_IMPORTED_MODULE_5__utils_ajax__["a" /* getJson */])(req, "/api/".concat(encodeURIComponent(lang || settings.defaultLanguage), "/home-page"));

          case 8:
            _ref5 = _context.sent;
            message = _ref5.message;
            backgroundImage = _ref5.backgroundImage;
            return _context.abrupt("return", {
              message: message,
              backgroundImage: backgroundImage || '/img/home-banner.jpg',
              config: {
                translations: translations,
                settings: settings,
                lang: lang || settings.defaultLanguage
              },
              userAgent: req && req.headers['user-agent']
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (HomePage);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/home")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/ajax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getJson;
/* harmony export (immutable) */ __webpack_exports__["b"] = postJson;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__("../node_modules/isomorphic-unfetch/browser.js");
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

/***/ })

})
//# sourceMappingURL=4.5cea0e75b8f74dc816f5.hot-update.js.map