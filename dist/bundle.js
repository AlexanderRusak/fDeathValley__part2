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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/script */ \"./src/scripts/script.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\n\r\n\n\n//# sourceURL=webpack://fdeath-dev-incubator/./src/app.js?");

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/***/ (function() {

eval("const getElementById = (id) => {\r\n    return document.getElementById(id);\r\n}\r\n\r\ngetElementById(\"new-task\").addEventListener(\"click\", () => {\r\n    addTask();\r\n});\r\n\r\n\r\nconst getMapTodoFromLocalStarage = () => {\r\n    const todos = [];\r\n    for (let key in localStorage) {\r\n        if (!localStorage.hasOwnProperty(key)) {\r\n            continue;\r\n        }\r\n        todos.push(JSON.parse(localStorage.getItem(`${key}`)));\r\n    }\r\n    return todos;\r\n}\r\nconst getTasksLITemplate = (title, text, status) => {\r\n    return (`\r\n    <div class=\"w-100 mr-2\">\r\n        <div class=\"d-flex w-100 justify-content-between\">\r\n            <h5 class=\"mb-1\">${title}</h5>\r\n        </div>\r\n        <p class=\"mb-1 w-100\">${text}</p>\r\n    </div>\r\n        ${!status ? getCurrentAdditionalTemplate() : \"\"}`);\r\n}\r\nconst getCurrentAdditionalTemplate = () => {\r\n    return (`\r\n    <div class=\"dropdown m-2 dropleft\">\r\n        <button class=\"btn btn-secondary h-100\" type=\"button\" id=\"dropdownMenuItem1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\r\n        </button>\r\n        <div   class=\"dropdown-menu p-2 flex-column\" aria-labelledby=\"dropdownMenuItem1\">\r\n          <button type=\"button\" class=\"btn btn-success w-100\">Complete</button>\r\n          <button type=\"button\" class=\"btn btn-info w-100 my-2\">Edit</button>\r\n          <button type=\"button\" class=\"btn btn-danger w-100\">Delete</button>\r\n        </div>\r\n    </div>`\r\n    );\r\n}\r\nconst removeToDoItem = (selectedNode) => {\r\n    const key = selectedNode.parentNode.parentNode.parentNode.id;\r\n    const deletingElement = getElementById(key);\r\n    deletingElement.parentNode.removeChild(deletingElement);\r\n    localStorage.removeItem(+key);\r\n    getCountTodos();\r\n}\r\n\r\nconst editTodoTask = (selectedNode) => {\r\n\r\n    $('#exampleModal').modal(\"show\");\r\n    getElementById(\"exampleModalLabel\").innerText = \"Edit task\";\r\n\r\n    const btn_editTask = getElementById(\"form-group-save-task\");\r\n    btn_editTask.innerText = \"Edit task\";\r\n\r\n    const node_id = +selectedNode.parentNode.parentNode.parentNode.id;\r\n    const { id, title, text, radio: priority, isCompleted } = JSON.parse(localStorage.getItem(node_id));\r\n\r\n    setModalValues(title, text, priority);\r\n\r\n    btn_editTask.addEventListener(\"click\", () => {\r\n        localStorage.removeItem(id);\r\n        addTodoToLocalStorage(id, id, ...getModalValues(), isCompleted);\r\n    })\r\n}\r\nconst completeTodoTask = (selectedNode) => {\r\n    const node_id = +selectedNode.parentNode.parentNode.parentNode.id;\r\n\r\n    const { id, title, text, radio: priority, isCompleted } = JSON.parse(localStorage.getItem(node_id));\r\n    localStorage.removeItem(+node_id);\r\n    addTodoToLocalStorage(node_id, id, title, text, priority, !isCompleted);\r\n    location.reload();\r\n\r\n}\r\n\r\nconst getModalValues = () => {\r\n    const input_titleValue = getElementById(\"inputTitle\").value;\r\n    const input_textValue = getElementById(\"inputText\").value;\r\n    const input_radioValue = document.querySelector('input[name=\"gridRadios\"]:checked').value;\r\n    return [input_titleValue, input_textValue, input_radioValue];\r\n}\r\nconst setModalValues = (title, text, priority) => {\r\n    getElementById(\"inputTitle\").value = title;\r\n    getElementById(\"inputText\").value = text;\r\n    getElementById(`${priority}`).setAttribute(\"checked\", \"checked\");\r\n}\r\n\r\nconst setClicksOnNode = (node, func) => {\r\n    for (let i = 0; i < node.length; i++) {\r\n        node[i].addEventListener(\"click\", () => {\r\n            func(node[i]);\r\n        })\r\n    }\r\n}\r\n\r\n\r\n\r\nconst addTodoToLocalStorage = (key, id, title, text, radio, isCompleted) => {\r\n    const todoObject = {\r\n        id,\r\n        title,\r\n        text,\r\n        radio,\r\n        isCompleted\r\n    }\r\n    localStorage.setItem(key, JSON.stringify(todoObject));\r\n}\r\n\r\nconst appendTodoElements = (completedStatus) => {\r\n\r\n    const currentTodos = getMapTodoFromLocalStarage().filter(todo => todo.isCompleted == completedStatus);\r\n    const currentNode = completedStatus ? getElementById(\"completedTasks\") : getElementById(\"currentTasks\");\r\n\r\n    currentTodos.map(({ id, title, text, radio: priority }) => {\r\n        const todoLINode = document.createElement(\"li\");\r\n        todoLINode.setAttribute(\"class\", `list-group-item d-flex w-100 mb-2 ${!completedStatus ? \"currentTodo\" : \"\"}`);\r\n        todoLINode.setAttribute(\"style\", `background-color:${!completedStatus ? setTaskBackgroundColor(priority) : setTaskBackgroundColor()}`);\r\n        todoLINode.setAttribute(\"id\", `${id} `);\r\n        currentNode.append(todoLINode);\r\n        todoLINode.innerHTML = getTasksLITemplate(title, text, completedStatus);\r\n\r\n    })\r\n    if (!completedStatus) {\r\n        const map_removeButton = document.querySelectorAll(\".btn-danger\");\r\n        setClicksOnNode(map_removeButton, removeToDoItem);\r\n\r\n        const map_editButton = document.querySelectorAll(\".btn-info\");\r\n        setClicksOnNode(map_editButton, editTodoTask);\r\n\r\n        const map_completeButton = document.querySelectorAll(\".btn-success\");\r\n        setClicksOnNode(map_completeButton, completeTodoTask);\r\n    }\r\n    getCountTodos();\r\n}\r\n\r\nconst addTask = () => {\r\n    const btn_saveTask = getElementById(\"form-group-save-task\");\r\n    $('#exampleModal').modal(\"show\");\r\n    btn_saveTask.addEventListener(\"click\", () => {\r\n        const id_dateValue = +new Date;\r\n        addTodoToLocalStorage(id_dateValue, id_dateValue, ...getModalValues(), false);\r\n    });\r\n}\r\n\r\n\r\n\r\n\r\nconst sortTodoList = (compare) => {\r\n    const currentContainer = getElementById(\"currentTasks\");\r\n    const compareCore = (compare == \"sort-from-new\") ? true : false;\r\n    [...currentContainer.children]\r\n        .sort((current, next) => {\r\n            if (current.id > next.id) {\r\n                return compareCore ? 1 : -1;\r\n            }\r\n            if (current.id < next.id) {\r\n                return !compareCore ? 1 : -1;\r\n            }\r\n            if (current.id == next.id) {\r\n                return 0;\r\n            }\r\n        }).forEach(node => currentContainer.appendChild(node));\r\n};\r\n\r\nconst setTaskBackgroundColor = (value = \"Completed\") => {\r\n    switch (value) {\r\n        case \"Low\":\r\n            return \"green\";\r\n        case \"Medium\":\r\n            return \"yellow\";\r\n        case \"High\":\r\n            return \"red\";\r\n        default:\r\n            return \"gray\";\r\n    }\r\n}\r\n\r\nconst getCountTodos = () => {\r\n    let countTodos = [];\r\n    let completedTasks = 0;\r\n    let currentTask = 0;\r\n    for (let i = 0; i < localStorage.length; i++) {\r\n        countTodos.push(localStorage.key(i));\r\n        JSON.parse(localStorage.getItem(countTodos[i])).isCompleted == true ? completedTasks++ : currentTask++;\r\n    }\r\n    getElementById(\"todosCount\").innerText = ` ${currentTask} / ${completedTasks}`;\r\n}\r\n\r\n\r\nappendTodoElements(true);\r\nappendTodoElements(false);\r\n\r\ngetElementById(\"customSwitch1\").addEventListener(\"change\", () => {\r\n    this.value = +!this.value;\r\n    const fontElement = document.querySelectorAll(\"h3\");\r\n    if (this.value) {\r\n        getElementById(\"body\").style.backgroundColor = \"#000\";\r\n        for (let i = 0; i < fontElement.length; i++) {\r\n            fontElement[i].style.color = \"#fff\";\r\n        }\r\n\r\n    } else {\r\n        getElementById(\"body\").style.backgroundColor = \"#fff\";\r\n        for (let i = 0; i < fontElement.length; i++) {\r\n            fontElement[i].style.color = \"#000\";\r\n        }\r\n    }\r\n\r\n});\r\n\r\ngetElementById(\"sort-from-new\").addEventListener(\"click\", () => sortTodoList(\"sort-from-new\"));\r\ngetElementById(\"sort-from-old\").addEventListener(\"click\", () => sortTodoList(\"sort-from-old\"));\r\n\n\n//# sourceURL=webpack://fdeath-dev-incubator/./src/scripts/script.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;