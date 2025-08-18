/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/strawberry.jpg */ \"./src/assets/strawberry.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* GLOBAL STYLES */\n:root {\n  --overlay-color: #0f172b;\n  --bgcolor: #f1f8ff;\n  --wheat-color: wheat;\n  --white-color: #fff;\n  --primary-color: red;\n  --hover-color: #ff1919;\n  --gray-color: #606060;\n}\n\n* {\n  margin: 0;\n  font-family: cursive;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 10px;\n}\n\nbody {\n  overflow-x: hidden;\n  max-width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: var(--bgcolor);\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/cover fixed, var(--overlay-color);\n  background-blend-mode: soft-light;\n  padding-top: 80px;\n}\n\nnav {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  width: inherit;\n  background: var(--overlay-color);\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.tool {\n  border: none;\n  padding: 1rem;\n  text-transform: uppercase;\n  background: none;\n  color: var(--wheat-color);\n  font-weight: bold;\n  transition: all 0.4s ease-out;\n}\n\n.tool:hover {\n  transform: scale(1.3);\n  color: var(--primary-color);\n}\n\n.tool.active {\n  color: var(--primary-color);\n}\n\n#menu {\n  margin: 0 3rem 0 3rem;\n}\n\n.container {\n  max-width: 90%;\n  margin: auto;\n}\n\n.wrapper {\n  display: flex;\n  align-items: center;\n  margin-top: 6rem;\n  justify-content: space-between;\n}\n\n.wrapper .info {\n  color: var(--wheat-color);\n}\n\n.menu-info h1,\n.about-info h1 {\n  color: var(--wheat-color);\n  text-align: center;\n  height: 200px;\n  line-height: 200px;\n}\n\n.info h1,\n.menu-info h1,\n.about-info h1 {\n  font-size: 8rem;\n}\n\n.info p {\n  font-size: 2rem;\n}\n\n#booking-btn {\n  margin-top: 3rem;\n  width: 200px;\n  padding: 1.5rem;\n  font-size: 1.5rem;\n  border: none;\n  padding: 1.5rem;\n  width: 200px;\n  border-radius: 0.3rem;\n  background: var(--primary-color);\n  color: var(--wheat-color);\n  font-weight: bold;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n#booking-btn:hover {\n  background: var(--hover-color);\n  color: var(--wheat-color);\n}\n\n#booking-btn.active {\n  background: var(--hover-color);\n  color: var(--wheat-color);\n}\n\n.not-active {\n  background: transparent;\n  color: var(--wheat-color);\n}\n\n.wrapper img {\n  width: 450px;\n  height: auto;\n}\n\n.animate {\n  animation: animate 20s linear infinite;\n}\n\n@keyframes animate {\n  from {\n    transform: rotateZ(0deg);\n  }\n  to {\n    transform: rotateZ(360deg);\n  }\n}\n/* CONTENT SECTION */\n.popular-items {\n  font-size: 3rem;\n  margin-top: 10rem;\n  text-align: center;\n  color: var(--wheat-color);\n}\n\n.row {\n  margin-top: 8rem;\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 2rem;\n  justify-content: space-between;\n  width: 100%;\n}\n\n#content .col {\n  color: var(--wheat-color);\n  background: var(--overlay-color);\n}\n\n#content .col:hover {\n  background: var(--wheat-color);\n  color: var(--overlay-color);\n}\n\n.about .col {\n  margin-top: 3rem;\n}\n\n.about .col img {\n  width: 160px;\n  height: auto;\n  border-radius: 50%;\n  transition: all 0.5s ease-out;\n}\n\n.about .col img:hover {\n  transform: scale(1.1);\n}\n\n.about .col h3 {\n  margin-top: 1rem;\n}\n\n.about .col p {\n  margin-bottom: 1rem;\n}\n\n.col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem;\n  width: 250px;\n  height: 350px;\n  border-radius: 0.5rem;\n  box-shadow: 0.4rem 0.4rem 5rem rgba(0, 0, 0, 0.2);\n  background: var(--white-color);\n}\n\n.col h3 {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n\n.col img {\n  width: 250px;\n}\n\n.col p {\n  color: var(--gray-color);\n  font-size: 1.6rem;\n}\n\n/* FOOTER SECTION */\nfooter {\n  margin-top: 8rem;\n  width: 100%;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--overlay-color);\n  border-top: 1px solid rgb(72, 72, 72);\n}\n\nfooter p {\n  color: var(--wheat-color);\n  font-size: 1.4rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant_webpack_web/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant_webpack_web/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant_webpack_web/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant_webpack_web/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant_webpack_web/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant_webpack_web/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant_webpack_web/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant_webpack_web/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant_webpack_web/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/assets/hero.png":
/*!*****************************!*\
  !*** ./src/assets/hero.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"hero.png\";\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/assets/hero.png?\n}");

/***/ }),

/***/ "./src/assets/kagyana.jpg":
/*!********************************!*\
  !*** ./src/assets/kagyana.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"kagyana.jpg\";\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/assets/kagyana.jpg?\n}");

/***/ }),

/***/ "./src/assets/lasagna.jpg":
/*!********************************!*\
  !*** ./src/assets/lasagna.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"lasagna.jpg\";\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/assets/lasagna.jpg?\n}");

/***/ }),

/***/ "./src/assets/pie.jpg":
/*!****************************!*\
  !*** ./src/assets/pie.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"pie.jpg\";\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/assets/pie.jpg?\n}");

/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"pizza.jpg\";\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/assets/pizza.jpg?\n}");

/***/ }),

/***/ "./src/assets/potatoe.jpg":
/*!********************************!*\
  !*** ./src/assets/potatoe.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"potatoe.jpg\";\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/assets/potatoe.jpg?\n}");

/***/ }),

/***/ "./src/assets/sanwich.jpg":
/*!********************************!*\
  !*** ./src/assets/sanwich.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"sanwich.jpg\";\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/assets/sanwich.jpg?\n}");

/***/ }),

/***/ "./src/assets/strawberry.jpg":
/*!***********************************!*\
  !*** ./src/assets/strawberry.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"strawberry.jpg\";\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/assets/strawberry.jpg?\n}");

/***/ }),

/***/ "./src/assets/team-1.jpg":
/*!*******************************!*\
  !*** ./src/assets/team-1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"team-1.jpg\";\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/assets/team-1.jpg?\n}");

/***/ }),

/***/ "./src/assets/team-2.jpg":
/*!*******************************!*\
  !*** ./src/assets/team-2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"team-2.jpg\";\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/assets/team-2.jpg?\n}");

/***/ }),

/***/ "./src/assets/team-3.jpg":
/*!*******************************!*\
  !*** ./src/assets/team-3.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"team-3.jpg\";\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/assets/team-3.jpg?\n}");

/***/ }),

/***/ "./src/assets/team-4.jpg":
/*!*******************************!*\
  !*** ./src/assets/team-4.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"team-4.jpg\";\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/assets/team-4.jpg?\n}");

/***/ }),

/***/ "./src/assets/vegetable.jpg":
/*!**********************************!*\
  !*** ./src/assets/vegetable.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"vegetable.jpg\";\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/assets/vegetable.jpg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about */ \"./src/pages/about.js\");\n\r\n\r\n\r\n\r\n\r\n// DOM\r\nconst mainContent = document.querySelector(\"#content\");\r\nconst homeBtn = document.querySelector(\"#home-btn\");\r\nconst menuBtn = document.querySelector(\"#menu-btn\");\r\nconst aboutBtn = document.querySelector(\"#about-btn\");\r\nconst buttons = document.querySelectorAll(\".tool\");\r\n\r\nbuttons.forEach((button) => {\r\n    button.addEventListener(\"click\", () => {\r\n        buttons.forEach((btn) => {\r\n            btn.classList.remove(\"active\");\r\n        });\r\n        button.classList.add(\"active\");\r\n    });\r\n});\r\n\r\n// Function to Render Page\r\nconst renderPage = (component) => {\r\n    // Clear Content first before rendering page\r\n    emptyContent();\r\n    // Append\r\n    mainContent.appendChild(component());\r\n};\r\n\r\n// Function the clear Initial content\r\nconst emptyContent = () => {\r\n    mainContent.innerHTML = \"\";\r\n};\r\n\r\n// Navigate to different pages\r\nhomeBtn.addEventListener(\"click\", () => {\r\n    renderPage(_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n});\r\nmenuBtn.addEventListener(\"click\", () => renderPage(_pages_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\r\naboutBtn.addEventListener(\"click\", () => renderPage(_pages_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    // Render Page on load\r\n    renderPage(_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n});\r\n\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/index.js?\n}");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_team_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/team-1.jpg */ \"./src/assets/team-1.jpg\");\n/* harmony import */ var _assets_team_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/team-2.jpg */ \"./src/assets/team-2.jpg\");\n/* harmony import */ var _assets_team_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/team-3.jpg */ \"./src/assets/team-3.jpg\");\n/* harmony import */ var _assets_team_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/team-4.jpg */ \"./src/assets/team-4.jpg\");\n\r\n\r\n\r\n\r\n\r\n// Function to Handle about Page\r\nconst createAboutPage = () => {\r\n    // Handle about Header\r\n    const aboutHeaderContainer = document.createElement(\"div\");\r\n    aboutHeaderContainer.innerHTML = `\r\n            <div class=\"about-info\">\r\n                <h1>About Us</h1>\r\n            </div>\r\n    `;\r\n    // Hamdle Main about Content\r\n    const aboutMainContainer = document.createElement(\"div\");\r\n    aboutMainContainer.innerHTML = `\r\n        <h3 class=\"popular-items\">Our Master Chefs</h3>\r\n            <div class=\"row container\">\r\n                <div class=\"col\">\r\n                    <img src=\"${_assets_team_1_jpg__WEBPACK_IMPORTED_MODULE_0__}\" />\r\n                    <h3>Full Name</h3>\r\n                    <p>Designa</p>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <img src=\"${_assets_team_2_jpg__WEBPACK_IMPORTED_MODULE_1__}\" />\r\n                    <h3>Full Name</h3>\r\n                    <p>Designa</p>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <img src=\"${_assets_team_3_jpg__WEBPACK_IMPORTED_MODULE_2__}\" />\r\n                    <h3>Full Name</h3>\r\n                    <p>Designa</p>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <img src=\"${_assets_team_4_jpg__WEBPACK_IMPORTED_MODULE_3__}\" />\r\n                    <h3>Full Name</h3>\r\n                    <p>Designa</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    `;\r\n    // Append Main content to Header\r\n    aboutHeaderContainer.appendChild(aboutMainContainer);\r\n\r\n    return aboutHeaderContainer;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAboutPage);\r\n\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/pages/about.js?\n}");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_hero_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/hero.png */ \"./src/assets/hero.png\");\n\r\n\r\n// Function to Handle Home Page\r\nconst createHomePage = () => {\r\n    // Function to Handle Page Header\r\n    const homeHeaderContainer = document.createElement(\"div\");\r\n    homeHeaderContainer.innerHTML = `\r\n            <div class=\"wrapper container\">\r\n                <div class=\"info\">\r\n                    <h1>Enjoy Our Delicious Meal</h1>\r\n                    <p>\r\n                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum\r\n                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et\r\n                        lorem et sit, sed stet lorem sit clita duo justo magna\r\n                        dolore erat amet\r\n                    </p>\r\n                    <button id=\"booking-btn\">Book A Table</button>\r\n                </div>\r\n                <img class=\"animate\" src=\"${_assets_hero_png__WEBPACK_IMPORTED_MODULE_0__}\" />\r\n            </div>\r\n    `;\r\n\r\n    \r\n\r\n    // Function to Handle Page Main Content\r\n    const homeMainContainer = document.createElement(\"div\");\r\n    homeMainContainer.innerHTML = `\r\n        <div class=\"row container\">\r\n                <div class=\"col\">\r\n                    <h3>Master Chefs</h3>\r\n                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <h3>Quality Food</h3>\r\n                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <h3>Online Order</h3>\r\n                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <h3>24/7 Service</h3>\r\n                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    `;\r\n    // Append Header to Main content\r\n    homeHeaderContainer.appendChild(homeMainContainer);\r\n\r\n    return homeHeaderContainer;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\r\n\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/pages/home.js?\n}");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_lasagna_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/lasagna.jpg */ \"./src/assets/lasagna.jpg\");\n/* harmony import */ var _assets_pie_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/pie.jpg */ \"./src/assets/pie.jpg\");\n/* harmony import */ var _assets_potatoe_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/potatoe.jpg */ \"./src/assets/potatoe.jpg\");\n/* harmony import */ var _assets_sanwich_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sanwich.jpg */ \"./src/assets/sanwich.jpg\");\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/pizza.jpg */ \"./src/assets/pizza.jpg\");\n/* harmony import */ var _assets_kagyana_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/kagyana.jpg */ \"./src/assets/kagyana.jpg\");\n/* harmony import */ var _assets_vegetable_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/vegetable.jpg */ \"./src/assets/vegetable.jpg\");\n/* harmony import */ var _assets_strawberry_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/strawberry.jpg */ \"./src/assets/strawberry.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Function to Handle Menu Page\r\nconst createMenuPage = () => {\r\n    // Handle Menu Header\r\n    const menuHeaderContainer = document.createElement(\"div\");\r\n    menuHeaderContainer.innerHTML = `\r\n            <div class=\"menu-info\">\r\n                <h1>Food Menu</h1>\r\n            </div>\r\n    `;\r\n    // Hamdle Main Menu Content\r\n    const menuMainContainer = document.createElement(\"div\");\r\n    menuMainContainer.innerHTML = `\r\n        <h3 class=\"popular-items\">Table Menu</h3>\r\n            <div class=\"row container\">\r\n                <div class=\"col\">\r\n                    <h3>Master Chefs</h3>\r\n                    <img src=\"${_assets_lasagna_jpg__WEBPACK_IMPORTED_MODULE_0__}\" />\r\n                </div>\r\n                <div class=\"col\">\r\n                    <h3>Quality Food</h3>\r\n                    <img src=\"${_assets_pie_jpg__WEBPACK_IMPORTED_MODULE_1__}\" />\r\n                </div>\r\n                <div class=\"col\">\r\n                    <h3>Online Order</h3>\r\n                    <img src=\"${_assets_potatoe_jpg__WEBPACK_IMPORTED_MODULE_2__}\" />\r\n                </div>\r\n                <div class=\"col\">\r\n                    <h3>24/7 Service</h3>\r\n                    <img src=\"${_assets_sanwich_jpg__WEBPACK_IMPORTED_MODULE_3__}\" />\r\n                </div>\r\n                <div class=\"col\">\r\n                    <h3>Master Chefs</h3>\r\n                    <img src=\"${_assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_4__}\" />\r\n                </div>\r\n                <div class=\"col\">\r\n                    <h3>Quality Food</h3>\r\n                    <img src=\"${_assets_kagyana_jpg__WEBPACK_IMPORTED_MODULE_5__}\" />\r\n                </div>\r\n                <div class=\"col\">\r\n                    <h3>24/7 Service</h3>\r\n                    <img src=\"${_assets_vegetable_jpg__WEBPACK_IMPORTED_MODULE_6__}\" />\r\n                </div>\r\n                <div class=\"col\">\r\n                    <h3>24/7 Service</h3>\r\n                    <img src=\"${_assets_strawberry_jpg__WEBPACK_IMPORTED_MODULE_7__}\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    `;\r\n    // Append Main content to Header\r\n    menuHeaderContainer.appendChild(menuMainContainer);\r\n\r\n    return menuHeaderContainer;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);\r\n\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/pages/menu.js?\n}");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant_webpack_web/./src/styles/styles.scss?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;