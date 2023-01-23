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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-size: 10px;\\n}\\n\\nbody {\\n  background-color: #64695d;\\n  color: #dec8b5;\\n  font-size: 2rem;\\n  line-height: 2rem;\\n  font-weight: 400;\\n  font-style: normal;\\n}\\n\\n.h1 {\\n  text-align: center;\\n  font-size: 2.5rem;\\n  line-height: 2.5rem;\\n  font-weight: 700;\\n  font-style: normal;\\n}\\n\\n.button {\\n  font-size: 1.8rem;\\n  line-height: 1.8rem;\\n  font-weight: 400;\\n  font-style: normal;\\n  background-color: #273e3e;\\n  color: #dec8b5;\\n  padding: 0.5rem;\\n  border: 1px solid #273e3e;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  min-width: 8rem;\\n  text-transform: capitalize;\\n  text-align: center;\\n}\\n.button_light {\\n  background-color: #dec8b5;\\n  color: #273e3e;\\n  border: 1px solid #dec8b5;\\n}\\n.button_main {\\n  width: 30%;\\n  text-align: center;\\n  background-color: #8c3738;\\n  border: 1px solid #8c3738;\\n  font-size: 2rem;\\n  line-height: 2rem;\\n  font-weight: 700;\\n  font-style: normal;\\n}\\n\\n.buttons__wrapper {\\n  display: flex;\\n  justify-content: center;\\n  gap: 1rem;\\n  margin: 1rem 0;\\n}\\n\\n.container {\\n  max-width: 90%;\\n  margin: 0 auto;\\n}\\n\\n.input {\\n  height: 2.5rem;\\n  padding: 0.5rem;\\n  border-radius: 5px;\\n}\\n.input_color {\\n  padding: 0;\\n}\\n\\n.car__wrapper {\\n  padding: 1rem;\\n  border-bottom: 1px dashed #dec8b5;\\n}\\n\\n.car__buttons {\\n  display: flex;\\n  gap: 1rem;\\n  padding-top: 1rem;\\n}\\n\\n.car__image {\\n  display: block;\\n  width: 15rem;\\n  height: 5rem;\\n  color: aquamarine;\\n}\\n\\n.car__move {\\n  display: flex;\\n  gap: 1rem;\\n  padding: 1rem 0;\\n}\\n\\n.move {\\n  background-color: #dec8b5;\\n  color: #273e3e;\\n}\\n\\n.car__name {\\n  padding: 1rem 0;\\n}\\n\\n.forms__wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 2rem;\\n}\\n\\n.wrapper__create, .wrapper__update {\\n  display: flex;\\n  gap: 1rem;\\n  padding: 1rem 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/sass/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/sass/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/app/app.ts":
/*!***********************************!*\
  !*** ./src/components/app/app.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _controller_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/loader */ \"./src/components/controller/loader.ts\");\n/* harmony import */ var _cars_carsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cars/carsList */ \"./src/components/cars/carsList.ts\");\n\n\nconst navigation = document.querySelector('.navigation');\nconst mainContent = document.querySelector('.content');\nconst contentWrapper = document.createElement('div');\nclass App {\n    constructor() {\n        this.baseUrl = 'http://127.0.0.1:3000';\n        this.loader = new _controller_loader__WEBPACK_IMPORTED_MODULE_0__.Loader(this.baseUrl);\n    }\n    start() {\n        this.generateButtonsLinks();\n        this.showGaragePage();\n    }\n    showGaragePage() {\n        mainContent.innerHTML = '';\n        mainContent.appendChild(this.generateHeader(4));\n        mainContent.appendChild(this.createForms());\n        this.updateGarageContent();\n    }\n    generateHeader(count) {\n        const header = document.createElement('h1');\n        header.classList.add('h1');\n        header.textContent = `Garage(${count})`;\n        return header;\n    }\n    generateButtonsLinks() {\n        const buttonsWrapper = document.createElement('div');\n        buttonsWrapper.classList.add('buttons__wrapper');\n        const buttonToGarage = document.createElement('div');\n        buttonToGarage.textContent = 'To garage';\n        buttonToGarage.classList.add('button');\n        buttonToGarage.classList.add('button_main');\n        buttonToGarage.addEventListener('click', () => {\n            this.showGaragePage();\n        });\n        const buttonToWinners = document.createElement('div');\n        buttonToWinners.textContent = 'To winners';\n        buttonToWinners.classList.add('button');\n        buttonToWinners.classList.add('button_main');\n        buttonToWinners.addEventListener('click', () => {\n            this.showWinersPage();\n        });\n        buttonsWrapper.appendChild(buttonToGarage);\n        buttonsWrapper.appendChild(buttonToWinners);\n        navigation.appendChild(buttonsWrapper);\n    }\n    showWinersPage() {\n        mainContent.innerHTML = 'Winners';\n    }\n    createForms() {\n        const wrapper = document.createElement('div');\n        wrapper.classList.add('forms__wrapper');\n        wrapper.appendChild(this.formCreateCar('create'));\n        wrapper.appendChild(this.formCreateCar('update'));\n        return wrapper;\n    }\n    formCreateCar(type) {\n        const inputName = document.createElement('input');\n        inputName.type = 'text';\n        inputName.classList.add('input');\n        inputName.classList.add('input_name');\n        inputName.classList.add(`input_name_${type}`);\n        const inputColor = document.createElement('input');\n        inputColor.type = 'color';\n        inputColor.classList.add('input');\n        inputColor.classList.add('input_color');\n        inputColor.classList.add(`input_color_${type}`);\n        const button = document.createElement('button');\n        button.classList.add('button');\n        button.classList.add(`button_${type}`);\n        button.textContent = type;\n        button.addEventListener('click', (event) => this.onButtonCreateUpdateClick(event));\n        const fieldsCreate = document.createElement('div');\n        fieldsCreate.classList.add(`wrapper__${type}`);\n        fieldsCreate.appendChild(inputName);\n        fieldsCreate.appendChild(inputColor);\n        fieldsCreate.appendChild(button);\n        return fieldsCreate;\n    }\n    onButtonCreateUpdateClick(event) {\n        const target = event.target;\n        if (target.classList.value.includes('button_create')) {\n            this.onCreateButtonClick();\n            return;\n        }\n        if (target.classList.value.includes('button_update')) {\n            this.onUpdateButtonClick();\n            return;\n        }\n    }\n    onCreateButtonClick() {\n        const inputName = document.querySelector('.input_name_create');\n        const inputColor = document.querySelector('.input_color_create');\n        const newCar = {\n            name: inputName.value,\n            color: inputColor.value,\n        };\n        inputName.value = '';\n        this.loader.createCar(newCar);\n        this.updateGarageContent();\n    }\n    onUpdateButtonClick() {\n        const inputName = document.querySelector('.input_name_update');\n        const inputColor = document.querySelector('.input_color_update');\n        const newCar = {\n            name: inputName.value,\n            color: inputColor.value,\n        };\n        inputName.value = '';\n        this.loader.updateCar(newCar, Number(inputName.dataset.idCar));\n        this.updateGarageContent();\n    }\n    onSelectButtonClick(car) {\n        const inputName = document.querySelector('.input_name_update');\n        const inputColor = document.querySelector('.input_color_update');\n        inputName.value = car.name;\n        inputColor.value = car.color;\n        inputName.dataset.idCar = String(car.id);\n    }\n    onRemoveButtonClick(id) {\n        this.loader.deleteCar(id);\n        this.updateGarageContent();\n    }\n    updateGarageContent() {\n        contentWrapper.innerHTML = '';\n        const carsList = new _cars_carsList__WEBPACK_IMPORTED_MODULE_1__.CarsList((id) => this.onRemoveButtonClick(id), (car) => this.onSelectButtonClick(car));\n        carsList.drawList(this.loader, contentWrapper);\n        mainContent.appendChild(contentWrapper);\n    }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/app/app.ts?");

/***/ }),

/***/ "./src/components/cars/car.ts":
/*!************************************!*\
  !*** ./src/components/cars/car.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Car\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n    constructor(parentElement, carData, onClickStart, onClickStop, onRemoveButtonClick, onSelectButtonClick) {\n        this.parentElement = parentElement;\n        this.carData = carData;\n        this.onClickStart = onClickStart;\n        this.onClickStop = onClickStop;\n        this.onRemoveButtonClick = onRemoveButtonClick;\n        this.onSelectButtonClick = onSelectButtonClick;\n    }\n    drawCar() {\n        const wrapperCar = document.createElement('div');\n        wrapperCar.classList.add('car__wrapper');\n        const buttonsCar = document.createElement('div');\n        buttonsCar.classList.add('car__buttons');\n        const buttonSelect = document.createElement('div');\n        buttonSelect.textContent = 'Select';\n        buttonSelect.classList.add('button');\n        buttonSelect.classList.add('button_select');\n        buttonSelect.addEventListener('click', () => {\n            this.onSelectButtonClick(this.carData);\n            console.log('click select');\n        });\n        const buttonRemove = document.createElement('div');\n        buttonRemove.textContent = 'Remove';\n        buttonRemove.classList.add('button');\n        buttonRemove.classList.add('button_remove');\n        buttonRemove.addEventListener('click', () => {\n            this.onRemoveButtonClick(this.carData.id);\n            console.log('click remove');\n        });\n        buttonsCar.appendChild(buttonSelect);\n        buttonsCar.appendChild(buttonRemove);\n        const name = document.createElement('div');\n        name.classList.add('car__name');\n        name.textContent = this.carData.name;\n        const imgCar = document.createElement('img');\n        imgCar.setAttribute('src', './assets/img/car.svg');\n        imgCar.classList.add('car__image');\n        imgCar.style.fill = '#ff74b3';\n        const startMove = document.createElement('div');\n        startMove.classList.add('start');\n        startMove.classList.add('button');\n        startMove.classList.add('button_light');\n        startMove.textContent = 'Start';\n        startMove.addEventListener('click', () => {\n            this.onClickStart(imgCar);\n        });\n        const stopMove = document.createElement('div');\n        stopMove.classList.add('stop');\n        stopMove.classList.add('button');\n        stopMove.classList.add('button_light');\n        stopMove.textContent = 'Stop';\n        stopMove.addEventListener('click', () => {\n            this.onClickStop(imgCar);\n        });\n        const wrapperMove = document.createElement('div');\n        wrapperMove.classList.add('car__move');\n        wrapperMove.appendChild(startMove);\n        wrapperMove.appendChild(stopMove);\n        wrapperCar.appendChild(buttonsCar);\n        wrapperCar.appendChild(wrapperMove);\n        wrapperCar.appendChild(name);\n        wrapperCar.appendChild(imgCar);\n        this.parentElement.appendChild(wrapperCar);\n    }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/cars/car.ts?");

/***/ }),

/***/ "./src/components/cars/carsList.ts":
/*!*****************************************!*\
  !*** ./src/components/cars/carsList.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CarsList\": () => (/* binding */ CarsList)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/components/cars/car.ts\");\n\nclass CarsList {\n    constructor(onRemoveButtonClick, onSelectButtonClick) {\n        this.onRemoveButtonClick = onRemoveButtonClick;\n        this.onSelectButtonClick = onSelectButtonClick;\n    }\n    drawList(loader, parentElement) {\n        loader.getData('/garage')\n            .then((carsData) => {\n            carsData.forEach((carData) => {\n                const car = new _car__WEBPACK_IMPORTED_MODULE_0__.Car(parentElement, carData, (carImage) => this.moveCarStart(carImage), (carImage) => this.moveCarStop(carImage), (id) => this.onRemoveButtonClick(id), (car) => this.onSelectButtonClick(car));\n                car.drawCar();\n            });\n        });\n    }\n    moveCarStart(carImage) {\n        carImage.style.left = '500px';\n        console.log('click start');\n    }\n    moveCarStop(carImage) {\n        carImage.style.left = '0';\n        console.log('click stop');\n    }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/cars/carsList.ts?");

/***/ }),

/***/ "./src/components/controller/loader.ts":
/*!*********************************************!*\
  !*** ./src/components/controller/loader.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Loader\": () => (/* binding */ Loader)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nclass Loader {\n    constructor(baseLink) {\n        this.baseLink = baseLink;\n    }\n    getData(options) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return fetch(`${this.baseLink}${options}`)\n                .then((response) => {\n                if (!response.ok) {\n                    throw new Error(response.statusText);\n                }\n                return response.json();\n            });\n        });\n    }\n    createCar(car) {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield fetch(`${this.baseLink}/garage`, {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(car),\n            });\n        });\n    }\n    updateCar(car, id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield fetch(`${this.baseLink}/garage/${id}`, {\n                method: 'PUT',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(car),\n            });\n        });\n    }\n    deleteCar(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield fetch(`${this.baseLink}/garage/${id}`, {\n                method: 'DELETE',\n            });\n        });\n    }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/components/controller/loader.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _components_app_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app/app */ \"./src/components/app/app.ts\");\n\n\nconst app = new _components_app_app__WEBPACK_IMPORTED_MODULE_1__.App();\napp.start();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;