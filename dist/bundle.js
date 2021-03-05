/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fdeath-dev-incubator/./src/style.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/script */ \"./src/scripts/script.js\");\n/* harmony import */ var _scripts_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_script__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\n\r\n\n\n//# sourceURL=webpack://fdeath-dev-incubator/./src/app.js?");

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/***/ (() => {

eval("const btn_saveTask = document.getElementById(\"form-group-save-task\");\r\n\r\nlet map_removeButton;\r\n\r\nconst getMapTodoFromLocalStarage = () => {\r\n    const todos = [];\r\n    for (let key in localStorage) {\r\n        if (!localStorage.hasOwnProperty(key)) {\r\n            continue;\r\n        }\r\n        todos.push(JSON.parse(localStorage.getItem(`${key}`)));\r\n    }\r\n    return todos;\r\n}\r\nconst getCurrentTasksLITemplate = (id, title, text) => {\r\n    return (`\r\n    <div class=\"w-100 mr-2\">\r\n        <div class=\"d-flex w-100 justify-content-between\">\r\n            <h5 class=\"mb-1\">${title}</h5>\r\n        </div>\r\n        <p class=\"mb-1 w-100\">${text}</p>\r\n    </div>\r\n    <div class=\"dropdown m-2 dropleft\">\r\n        <button class=\"btn btn-secondary h-100\" type=\"button\" id=\"dropdownMenuItem1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\r\n        </button>\r\n        <div class=\"dropdown-menu p-2 flex-column\" aria-labelledby=\"dropdownMenuItem1\">\r\n          <button type=\"button\" class=\"btn btn-success w-100\">Complete</button>\r\n          <button type=\"button\" class=\"btn btn-info w-100 my-2\">Edit</button>\r\n          <button id=${id}   type=\"button\" class=\"btn btn-danger w-100\">Delete</button>\r\n        </div>\r\n    </div>`);\r\n}\r\n\r\nconst setClicksOnNode = (node) => {\r\n    for (let i = 0; i < node.length; i++) {\r\n        node[i].addEventListener(\"click\", () => {\r\n            removeToDoItem(node[i].id);\r\n        })\r\n    }\r\n}\r\nconst removeToDoItem = (id) => {\r\n    const deletingElement = document.getElementById(`${id}`);\r\n    deletingElement.parentNode.removeChild(deletingElement)\r\n    localStorage.removeItem(id);\r\n}\r\nconst getNodeTodoListItem = () => {\r\n    const todos = getMapTodoFromLocalStarage();\r\n    console.log(todos);\r\n    const getNodeULTodoItem = document.getElementById(\"currentTasks\");\r\n    todos.map(({ id, title, text }) => {\r\n        const todoLINode = document.createElement(\"li\");\r\n        todoLINode.setAttribute(\"class\", \"list-group-item d-flex w-100 mb-2\");\r\n        todoLINode.setAttribute(\"id\", `${id}`);\r\n        getNodeULTodoItem.append(todoLINode);\r\n        todoLINode.innerHTML = getCurrentTasksLITemplate(id, title, text);\r\n\r\n    })\r\n    map_removeButton = document.querySelectorAll(\".btn-danger\");\r\n    setClicksOnNode(map_removeButton);\r\n}\r\nconst addTodoToLocalStorage = (key, id, title, text, radio) => {\r\n    const todoObject = {\r\n        id,\r\n        title,\r\n        text,\r\n        radio\r\n    }\r\n    localStorage.setItem(key, JSON.stringify(todoObject));\r\n}\r\n\r\n\r\n\r\n\r\n\r\nbtn_saveTask.addEventListener(\"click\", () => {\r\n    const id_dateValue = +new Date;\r\n    const input_titleValue = document.getElementById(\"inputTitle\").value;\r\n    const input_textValue = document.getElementById(\"inputText\").value;\r\n    const input_radioValue = document.querySelector('input[name=\"gridRadios\"]:checked').value;\r\n    addTodoToLocalStorage(id_dateValue, id_dateValue, input_titleValue, input_textValue, input_radioValue);\r\n});\r\n\r\ngetNodeTodoListItem();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://fdeath-dev-incubator/./src/scripts/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;