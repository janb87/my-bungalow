webpackHotUpdate(7,{

/***/ "./pages/bungalow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("../node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_container_app__ = __webpack_require__("./pages/components/container/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_ajax__ = __webpack_require__("./utils/ajax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_localize__ = __webpack_require__("./utils/localize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_localize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils_localize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_spacing__ = __webpack_require__("./styles/spacing.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_screenSizes__ = __webpack_require__("./styles/screenSizes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_presentation_gallery_gallery__ = __webpack_require__("./pages/components/presentation/gallery/gallery.js");

var _jsxFileName = "/home/projects/github/my-bungalow/client/pages/bungalow.js";

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
  return [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_container_app__["a" /* default */], {
    key: "app",
    config: config,
    userAgent: userAgent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "the-bungalow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_4__utils_localize___default()('the_bungalow_title', config.translations)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_4__utils_localize___default()('the_bungalow_general', config.translations)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    dangerouslySetInnerHTML: {
      __html: bungalowPage.characteristics
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), bungalowPage.groundPlanImage && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_presentation_gallery_gallery__["a" /* default */], {
    photos: [{
      src: bungalowPage.groundPlanImage
    }],
    translations: config.translations,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_presentation_gallery_gallery__["a" /* default */], {
    photos: photos,
    translations: config.translations,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_4__utils_localize___default()('the_bungalow_house_rules', config.translations)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
    dangerouslySetInnerHTML: {
      __html: bungalowPage.rules
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("style", {
    key: "styles",
    jsx: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/bungalow")
  
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
//# sourceMappingURL=7.1f803fd566689c2fe1f5.hot-update.js.map