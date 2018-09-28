webpackHotUpdate(5,{

/***/ "./pages/components/container/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("../node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_getMuiTheme__ = __webpack_require__("../node_modules/material-ui/styles/getMuiTheme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_getMuiTheme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles_getMuiTheme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_MuiThemeProvider__ = __webpack_require__("../node_modules/material-ui/styles/MuiThemeProvider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_global__ = __webpack_require__("./styles/global.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__ = __webpack_require__("./styles/screenSizes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__presentation_common_nav__ = __webpack_require__("./pages/components/presentation/common/nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head__ = __webpack_require__("../node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_localize__ = __webpack_require__("./utils/localize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_localize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__utils_localize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_colors__ = __webpack_require__("./styles/colors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__presentation_header_defaultHeader__ = __webpack_require__("./pages/components/presentation/header/defaultHeader.js");
var _jsxFileName = "/home/projects/github/my-bungalow/client/pages/components/container/app.js";












var App = function App(_ref) {
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
    header = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__presentation_header_defaultHeader__["a" /* default */], {
      lang: lang,
      translations: translations,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    });
  }

  var muiTheme = __WEBPACK_IMPORTED_MODULE_2_material_ui_styles_getMuiTheme___default()({
    fontFamily: 'Roboto Slab, serif',
    palette: {
      primary1Color: __WEBPACK_IMPORTED_MODULE_9__styles_colors__["a" /* default */].PALETTE_1,
      primary2Color: __WEBPACK_IMPORTED_MODULE_9__styles_colors__["a" /* default */].PALETTE_2,
      primary3Color: __WEBPACK_IMPORTED_MODULE_9__styles_colors__["a" /* default */].PALETTE_3,
      accent1Color: __WEBPACK_IMPORTED_MODULE_9__styles_colors__["a" /* default */].green,
      accent2Color: __WEBPACK_IMPORTED_MODULE_9__styles_colors__["a" /* default */].yellow,
      accent3Color: __WEBPACK_IMPORTED_MODULE_9__styles_colors__["a" /* default */].danger,
      textColor: __WEBPACK_IMPORTED_MODULE_9__styles_colors__["a" /* default */].dark,
      secondaryTextColor: __WEBPACK_IMPORTED_MODULE_9__styles_colors__["a" /* default */].gray_dark,
      alternateTextColor: __WEBPACK_IMPORTED_MODULE_9__styles_colors__["a" /* default */].white,
      canvasColor: __WEBPACK_IMPORTED_MODULE_9__styles_colors__["a" /* default */].white,
      borderColor: __WEBPACK_IMPORTED_MODULE_9__styles_colors__["a" /* default */].gray_light,
      disabledColor: __WEBPACK_IMPORTED_MODULE_9__styles_colors__["a" /* default */].gray_light
    }
  }, {
    avatar: {
      borderColor: null
    },
    userAgent: userAgent
  });
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles_MuiThemeProvider___default.a, {
    muiTheme: muiTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3928952071", [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(__WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__["a" /* default */].LG_MIN, ";")]]]) + " " + "app"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3928952071", [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(__WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__["a" /* default */].LG_MIN, ";")]]])
  }, __WEBPACK_IMPORTED_MODULE_8__utils_localize___default()('website_title', translations)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3928952071", [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(__WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__["a" /* default */].LG_MIN, ";")]]])
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
    src: "https://www.google.com/recaptcha/api.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3928952071", [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(__WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__["a" /* default */].LG_MIN, ";")]]])
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3928952071", [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(__WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__["a" /* default */].LG_MIN, ";")]]])
  }, header), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3928952071", [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(__WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__["a" /* default */].LG_MIN, ";")]]])
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__presentation_common_nav__["a" /* default */], {
    stickToBottom: stickMenuToBottom,
    lang: lang,
    translations: translations,
    maxWidth: !backgroundImage ? __WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__["a" /* default */].LG_MIN : undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["3928952071", [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(__WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__["a" /* default */].LG_MIN, ";")]]]) + " " + "page-content"
  }, children)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3928952071",
    css: "main.__jsx-style-dynamic-selector{display:block;".concat(stickMenuToBottom && "height: 100vh;", " ").concat(backgroundImage && "background-image: url(".concat(backgroundImage, ");"), " background-repeat:no-repeat;background-size:cover;background-position:center center;}.page-content.__jsx-style-dynamic-selector{height:100%;margin:0 auto;").concat(!backgroundImage && "max-width: ".concat(__WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__["a" /* default */].LG_MIN, ";"), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9wYWdlcy9jb21wb25lbnRzL2NvbnRhaW5lci9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0VtQixBQUdxQixBQVFGLFlBQ0UsRUFQMkMsWUFRN0IsNkJBQzdCLDZDQVJ1QixzQkFDWSxrQ0FDbkMiLCJmaWxlIjoiY2xpZW50L3BhZ2VzL2NvbXBvbmVudHMvY29udGFpbmVyL2FwcC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9wcm9qZWN0cy9naXRodWIvbXktYnVuZ2Fsb3ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSc7XG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgZ2xvYmFsU3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9nbG9iYWwnO1xuaW1wb3J0IHNjcmVlblNpemVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9zY3JlZW5TaXplcyc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL3ByZXNlbnRhdGlvbi9jb21tb24vbmF2JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSAnLi4vLi4vLi4vdXRpbHMvbG9jYWxpemUnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvY29sb3JzJztcbmltcG9ydCBEZWZhdWx0SGVhZGVyIGZyb20gJy4uL3ByZXNlbnRhdGlvbi9oZWFkZXIvZGVmYXVsdEhlYWRlcic7XG5cbmNvbnN0IEFwcCA9ICh7XG5cdGNvbmZpZzogeyBsYW5nLCB0cmFuc2xhdGlvbnMsIHNldHRpbmdzIH0sXG5cdGJhY2tncm91bmRJbWFnZSxcblx0Y2hpbGRyZW4sXG5cdHN0aWNrTWVudVRvQm90dG9tID0gZmFsc2UsXG5cdGhlYWRlcixcblx0dXNlckFnZW50LFxufSkgPT4ge1xuXHRpZiAoIWhlYWRlcikge1xuXHRcdGhlYWRlciA9IDxEZWZhdWx0SGVhZGVyIGxhbmc9e2xhbmd9IHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfSAvPjtcblx0fVxuXHRjb25zdCBtdWlUaGVtZSA9IGdldE11aVRoZW1lKFxuXHRcdHtcblx0XHRcdGZvbnRGYW1pbHk6ICdSb2JvdG8gU2xhYiwgc2VyaWYnLFxuXHRcdFx0cGFsZXR0ZToge1xuXHRcdFx0XHRwcmltYXJ5MUNvbG9yOiBjb2xvcnMuUEFMRVRURV8xLFxuXHRcdFx0XHRwcmltYXJ5MkNvbG9yOiBjb2xvcnMuUEFMRVRURV8yLFxuXHRcdFx0XHRwcmltYXJ5M0NvbG9yOiBjb2xvcnMuUEFMRVRURV8zLFxuXHRcdFx0XHRhY2NlbnQxQ29sb3I6IGNvbG9ycy5ncmVlbixcblx0XHRcdFx0YWNjZW50MkNvbG9yOiBjb2xvcnMueWVsbG93LFxuXHRcdFx0XHRhY2NlbnQzQ29sb3I6IGNvbG9ycy5kYW5nZXIsXG5cdFx0XHRcdHRleHRDb2xvcjogY29sb3JzLmRhcmssXG5cdFx0XHRcdHNlY29uZGFyeVRleHRDb2xvcjogY29sb3JzLmdyYXlfZGFyayxcblx0XHRcdFx0YWx0ZXJuYXRlVGV4dENvbG9yOiBjb2xvcnMud2hpdGUsXG5cdFx0XHRcdGNhbnZhc0NvbG9yOiBjb2xvcnMud2hpdGUsXG5cdFx0XHRcdGJvcmRlckNvbG9yOiBjb2xvcnMuZ3JheV9saWdodCxcblx0XHRcdFx0ZGlzYWJsZWRDb2xvcjogY29sb3JzLmdyYXlfbGlnaHQsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0YXZhdGFyOiB7XG5cdFx0XHRcdGJvcmRlckNvbG9yOiBudWxsLFxuXHRcdFx0fSxcblx0XHRcdHVzZXJBZ2VudCxcblx0XHR9XG5cdCk7XG5cdHJldHVybiAoXG5cdFx0PE11aVRoZW1lUHJvdmlkZXIgbXVpVGhlbWU9e211aVRoZW1lfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT57bG9jYWxpemUoJ3dlYnNpdGVfdGl0bGUnLCB0cmFuc2xhdGlvbnMpfTwvdGl0bGU+XG5cdFx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRcdG5hbWU9XCJ2aWV3cG9ydFwiXG5cdFx0XHRcdFx0XHRjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG5cdFx0XHRcdFx0XHRrZXk9XCJ2aWV3cG9ydFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7LyogVE9ETzogYWRkIG1vcmUgbWV0IHRhZ3MgZm9yIFNFTyAqL31cblx0XHRcdFx0XHQ8c2NyaXB0IHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qc1wiIC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGhlYWRlcj57aGVhZGVyfTwvaGVhZGVyPlxuXHRcdFx0XHQ8bWFpbj5cblx0XHRcdFx0XHQ8TmF2XG5cdFx0XHRcdFx0XHRzdGlja1RvQm90dG9tPXtzdGlja01lbnVUb0JvdHRvbX1cblx0XHRcdFx0XHRcdGxhbmc9e2xhbmd9XG5cdFx0XHRcdFx0XHR0cmFuc2xhdGlvbnM9e3RyYW5zbGF0aW9uc31cblx0XHRcdFx0XHRcdG1heFdpZHRoPXshYmFja2dyb3VuZEltYWdlID8gc2NyZWVuU2l6ZXMuTEdfTUlOIDogdW5kZWZpbmVkfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHRcdDwvbWFpbj5cblx0XHRcdFx0PHN0eWxlIGpzeD1cIlwiPntgXG5cdFx0XHRcdFx0bWFpbiB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRcdCR7c3RpY2tNZW51VG9Cb3R0b20gJiYgYGhlaWdodDogMTAwdmg7YH1cblx0XHRcdFx0XHRcdCR7YmFja2dyb3VuZEltYWdlXG5cdFx0XHRcdFx0XHRcdCYmIGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KTtgfSBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnBhZ2UtY29udGVudCB7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0XHRcdCR7IWJhY2tncm91bmRJbWFnZSAmJiBgbWF4LXdpZHRoOiAke3NjcmVlblNpemVzLkxHX01JTn07YH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdHtSZWFjdC5jcmVhdGVFbGVtZW50KGdsb2JhbFN0eWxlcyl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L011aVRoZW1lUHJvdmlkZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=client/pages/components/container/app.js */"),
    dynamic: [stickMenuToBottom && "height: 100vh;", backgroundImage && "background-image: url(".concat(backgroundImage, ");"), !backgroundImage && "max-width: ".concat(__WEBPACK_IMPORTED_MODULE_5__styles_screenSizes__["a" /* default */].LG_MIN, ";")]
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__styles_global__["a" /* default */])));
};

/* harmony default export */ __webpack_exports__["a"] = (App);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/container/app")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.0f4bcb44585d05dd277c.hot-update.js.map