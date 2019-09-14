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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/js/components/dialog.js":
/*!*****************************************!*\
  !*** ./app/src/js/components/dialog.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var create_element_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-element-lib */ \"./node_modules/create-element-lib/src/index.js\");\n\n\nclass Dialog {\n  constructor(title, buttonText, callbacks = {}) {\n\n    if (!title || !buttonText) {\n      console.error('Cannot create Dialog');\n      return;\n    }\n\n    this.title = title;\n    this.buttonText = buttonText;\n    this.callbacks = callbacks;\n    this.template = null;\n    this.render();\n  }\n\n  createTemplate() {\n    this.template = Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {class: 'js--dialog'}, [\n      Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {class: 'shadow'}),\n      Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {class: 'inner'}, [\n        Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {class: 'close', click: () => {\n          this.destroy();\n        }}, [ Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('span', {class: 'icon icon-cancel'}) ]),\n        Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {class: 'form padded-more'}, [\n          Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {class: 'form-group'}, [\n            Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('input', {type: 'text', class: 'form-control', placeholder: this.title})\n          ]),\n          Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('div', {class: 'form-group'}, [\n            Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('button', {class: 'btn btn-positive', click: (el) => {\n              const value = el.parentElement.previousElementSibling.firstChild.value;\n              if (this.callbacks.onSubmit) {\n                this.callbacks.onSubmit(value);\n              }\n            }}, [this.buttonText]),\n            Object(create_element_lib__WEBPACK_IMPORTED_MODULE_0__[\"h\"])('button', {class: 'btn btn-negative', click: () => {\n              this.destroy();\n            }}, ['Cancel'])\n          ])\n        ])\n      ])\n    ]);\n\n    return this.template;\n  }\n\n  render() {\n    if (this.template) {\n      return;\n    }\n\n    const template = this.createTemplate();\n    document.querySelector('body').appendChild(template);\n  }\n\n  destroy() {\n    if (!this.template) {\n      return;\n    }\n\n    this.template.parentElement.removeChild(this.template);\n  }\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dialog);\n\n\n//# sourceURL=webpack:///./app/src/js/components/dialog.js?");

/***/ }),

/***/ "./app/src/js/index.js":
/*!*****************************!*\
  !*** ./app/src/js/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dialog */ \"./app/src/js/components/dialog.js\");\n\n\n// add event listener\ndocument.querySelector('.js--action-url')\n  .addEventListener('click', () => {\n    new _components_dialog__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Enter a URL', 'Submit URL', {\n      onSubmit(val) {\n        console.log(val);\n      }\n    });\n  });\n\n\n//# sourceURL=webpack:///./app/src/js/index.js?");

/***/ }),

/***/ "./node_modules/create-element-lib/src/h.js":
/*!**************************************************!*\
  !*** ./node_modules/create-element-lib/src/h.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-string */ \"./node_modules/create-element-lib/src/is-string.js\");\n\n\n/**\n * main function to create elements\n * @param {String} tag\n * @param {Object|Array} args\n */\nconst h = (tag, properties = {}, childs = []) => {\n  if (!Object(_is_string__WEBPACK_IMPORTED_MODULE_0__[\"isString\"])(tag)) {\n    throw new Error('No valid tag given'); // tag must be a string\n  }\n\n  // create the html node\n  const element = document.createElement(tag);\n\n  // get they object keys\n  const propKeys = Object.keys(properties);\n\n  propKeys.forEach((prop) => {\n    const value = properties[prop];\n\n    typeof value === 'function'\n      ? element.addEventListener('click', (e) => {\n          value(element, e); // call the given function with the element and event as parameters\n        })\n      : element.setAttribute(prop, value);\n  });\n\n  childs.forEach((child) => {\n    Object(_is_string__WEBPACK_IMPORTED_MODULE_0__[\"isString\"])(child)\n      ? element.appendChild(document.createTextNode(child))\n      : (child ? element.appendChild(child) : null);\n  });\n\n  // return the composed element\n  return element;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (h);\n\n\n//# sourceURL=webpack:///./node_modules/create-element-lib/src/h.js?");

/***/ }),

/***/ "./node_modules/create-element-lib/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/create-element-lib/src/index.js ***!
  \******************************************************/
/*! exports provided: h, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"version\", function() { return version; });\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"./node_modules/create-element-lib/src/h.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return _h__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n/**\n * version\n * @type {String}\n */\nconst version = '0.1.1';\n\n\n\n\n//# sourceURL=webpack:///./node_modules/create-element-lib/src/index.js?");

/***/ }),

/***/ "./node_modules/create-element-lib/src/is-string.js":
/*!**********************************************************!*\
  !*** ./node_modules/create-element-lib/src/is-string.js ***!
  \**********************************************************/
/*! exports provided: isString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/**\n * checks if a given arg is a string\n * @type {String} s\n * @return {Boolean}\n */\nconst isString = s => typeof s === 'string';\n\n\n//# sourceURL=webpack:///./node_modules/create-element-lib/src/is-string.js?");

/***/ })

/******/ });