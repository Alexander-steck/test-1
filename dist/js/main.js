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

/***/ "./fonts/css/fontello.css":
/*!********************************!*\
  !*** ./fonts/css/fontello.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-1/./fonts/css/fontello.css?");

/***/ }),

/***/ "./style/css.css":
/*!***********************!*\
  !*** ./style/css.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-1/./style/css.css?");

/***/ }),

/***/ "./script/index.js":
/*!*************************!*\
  !*** ./script/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/css.css */ \"./style/css.css\");\n/* harmony import */ var _fonts_css_fontello_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fonts/css/fontello.css */ \"./fonts/css/fontello.css\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", TabFunctional);\r\n\r\nfunction TabFunctional() {\r\n    (()=>{\r\n        let blockTabs = document.querySelector(\".section1__block-tabs\");\r\n        let buttons = blockTabs.getElementsByTagName(\"button\");\r\n        for (let index = 0; index < buttons.length; index++) {\r\n            let atr = document.createAttribute(\"data-number\");\r\n            atr.value = [index];\r\n            buttons[index].setAttributeNode(atr);\r\n        };\r\n        blockTabs.addEventListener(\"click\",function(event) {\r\n            let contents = document.querySelectorAll(\".section1__block-text\");\r\n            for (let index = 0; index < buttons.length; index++) {\r\n                \r\n                if(event.target.getAttribute(\"data-number\")==index){\r\n                    buttons[index].classList.remove(\"section1__tab__inactive\");\r\n                    contents[index].classList.remove(\"section1__block-text__inactive\");\r\n                    buttons[index].classList.add(\"section1__tab__active\");\r\n                    contents[index].classList.add(\"section1__block-text__active\");\r\n                }else if(event.target.className == 'section1__block-tabs col3' &&  buttons[index].className == 'section1__tab section1__tab__active'){\r\n                    buttons[index].classList.add(\"section1__tab__active\");\r\n                    contents[index].classList.add(\"section1__block-text__active\");\r\n                }else{\r\n                    buttons[index].classList.remove(\"section1__tab__active\");\r\n                    contents[index].classList.remove(\"section1__block-text__active\");\r\n                    buttons[index].classList.add(\"section1__tab__inactive\");\r\n                    contents[index].classList.add(\"section1__block-text__inactive\");\r\n                }   \r\n            };\r\n            \r\n        });\r\n    })();     \r\n};\r\n\r\nconsole.log(blockTabs);\n\n//# sourceURL=webpack://test-1/./script/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script/index.js");
/******/ 	
/******/ })()
;