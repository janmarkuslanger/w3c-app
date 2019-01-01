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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/add-url.js":
/*!***************************!*\
  !*** ./js/src/add-url.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"./js/src/h.js\");\n/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog */ \"./js/src/dialog.js\");\n\n\n\n(function(){\n  /**\n   * icon\n   * @type {HTML Element}\n   */\n  const icon = document.querySelector('header .icon-window');\n\n  icon.addEventListener('click', () => {\n    const inputField = Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('input', {type: 'text'});\n    const content = [\n      inputField,\n      Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('button', {class: 'btn btn-positive', click: function(){\n        const value = inputField.value;\n\n        if (value === '') {\n          dialog.parentElement.removeChild(dialog);\n        }\n\n        const page = new Page(value);\n        const item = page.renderListItem();\n        listGroup.appendChild(item);\n      }}, ['Add URL']),\n      Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('button', {class: 'btn btn-negative'}, ['Cancel'])\n    ];\n\n    const urlDialog = new _dialog__WEBPACK_IMPORTED_MODULE_1__[\"Dialog\"](content);\n    urlDialog.render(document.body);\n  });\n\n}());\n\n\n//# sourceURL=webpack:///./js/src/add-url.js?");

/***/ }),

/***/ "./js/src/dialog.js":
/*!**************************!*\
  !*** ./js/src/dialog.js ***!
  \**************************/
/*! exports provided: Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dialog\", function() { return Dialog; });\n/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog */ \"./js/src/dialog.js\");\n\n\nfunction Dialog(content, cssClass) {\n  this.content = content;\n  this.cssClass = cssClass;\n  this.template = this.renderTemplate();\n};\n\nDialog.prototype.renderTemplate = function () {\n  const that = this;\n\n  this.port = Object(_dialog__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {class: `content ${this.cssClass}`});\n\n  return Object(_dialog__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {class: 'js--dialog'}, [\n    Object(_dialog__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {class: 'shadow'}),\n    Object(_dialog__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {class: 'inner'}, [\n      Object(_dialog__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {class: 'close', click: function(){\n        that.destroy();\n      }}, [Object(_dialog__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('span', {class: 'icon icon-cancel'})]),\n      this.port\n    ])\n  ]);\n};\n\nDialog.prototype.destroy = function () {\n  this.template.parentElement.removeChild(this.template);\n};\n\nDialog.prototype.render = function (root) {\n  if (typeof this.content === 'Array') {\n    this.content.forEach(function(item){\n      this.port.appendChild(item)\n    });\n  } else {\n    this.port.appendChild(this.content);\n  }\n\n  root.appendChild(this.template);\n};\n\n\n//# sourceURL=webpack:///./js/src/dialog.js?");

/***/ }),

/***/ "./js/src/h.js":
/*!*********************!*\
  !*** ./js/src/h.js ***!
  \*********************/
/*! exports provided: h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\n/**\n * Iterates an Objects properties executing a callback function on each item. This allows\n * for iterative breaking at anytime by returning false\n * @private\n * @param  {Object}   obj The Object to iterate over\n * @param  {Function} fn  The callback function to execute on each property\n *\n * iterate({ hello: 'world', name: 'kieran' }, (key, value, index) => console.log(key, value, index));\n *\n */\nconst iterate = (obj, fn) => {\n  let count = 0;\n\n  for (let key in obj) {\n    const result = fn.call(obj[key], key, obj[key], count++);\n\n    if (!result) {\n      break;\n    }\n  }\n};\n\n/**\n * creates an html element\n * @param {String} tag\n * @param {Object | null} props\n * @param {Array} childs\n */\nconst h = (tag = 'div', props = null, childs = []) => {\n\n  // create an element\n  const element = document.createElement(tag);\n\n  // set all props on that element\n  if (props) {\n    iterate(props, function(key, value) {\n      typeof value === 'function'\n      ? element.addEventListener(key, function(e){\n        value(element, e);\n      })\n      : element.setAttribute(key, value);\n    });\n  }\n\n  if (childs.length > 0) {\n\n    for (let i = 0; i < childs.length; i++) {\n\n      if (childs[i] === null) {\n        continue;\n      }\n\n      typeof childs[i] === 'string'\n        ? element.appendChild(document.createTextNode(childs[i]))\n        : element.appendChild(childs[i]);\n    }\n\n  }\n\n  return element;\n};\n\n\n//# sourceURL=webpack:///./js/src/h.js?");

/***/ }),

/***/ "./js/src/index.js":
/*!*************************!*\
  !*** ./js/src/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./online */ \"./js/src/online.js\");\n__webpack_require__(/*! ./add-url */ \"./js/src/add-url.js\");\n\n\n//# sourceURL=webpack:///./js/src/index.js?");

/***/ }),

/***/ "./js/src/online.js":
/*!**************************!*\
  !*** ./js/src/online.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(){\n  /**\n   * header html element\n   * @type {HTML element}\n   */\n  const header = document.querySelector('header');\n\n  /**\n   * online class\n   * @type {String}\n   */\n  const onlineClass = 'btn-positive';\n\n  /**\n   * online text\n   * @type {String}\n   */\n  const onlineText = 'Online';\n\n  /**\n   * offline class\n   * @type {String}\n   */\n  const offlineClass = 'btn-negative';\n\n  /**\n   * offline text\n   * @type {String}\n   */\n  const offlineText = 'Offline';\n\n\n  /**\n   * online button\n   * @type {HTML Element}\n   */\n  const button = header.querySelector('.js--online');\n\n  window.addEventListener('online', () => {\n    button.textContent = onlineText;\n    button.classList.add(onlineClass);\n    button.classList.remove(offlineClass);\n  });\n\n  window.addEventListener('offline', () => {\n    button.textContent = offlineText;\n    button.classList.add(offlineClass);\n    button.classList.remove(onlineClass);\n  });\n\n}());\n\n\n//# sourceURL=webpack:///./js/src/online.js?");

/***/ })

/******/ });