/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectItem: () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\r\n\r\nclass ProjectItem {\r\n  hasActiveTooltip = false;\r\n\r\n  constructor(id, updateProjectListsFunction, type) {\r\n    this.id = id;\r\n    this.updateProjectListsHandler = updateProjectListsFunction;\r\n    this.connectMoreInfoButton();\r\n    this.connectSwitchButton(type);\r\n    this.connectDrag();\r\n  }\r\n\r\n  showMoreInfoHandler() {\r\n    if (this.hasActiveTooltip) {\r\n      return;\r\n    }\r\n    const projectElement = document.getElementById(this.id);\r\n    const tooltipText = projectElement.dataset.extraInfo;\r\n    __webpack_require__.e(/*! import() */ \"src_App_Tooltip_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Tooltip.js */ \"./src/App/Tooltip.js\")).then((module) => {\r\n      const tooltip = new module.Tooltip(\r\n        () => {\r\n          this.hasActiveTooltip = false;\r\n        },\r\n        tooltipText,\r\n        this.id\r\n      );\r\n      tooltip.attach();\r\n      this.hasActiveTooltip = true;\r\n    });\r\n  }\r\n\r\n  connectDrag() {\r\n    const item = document.getElementById(this.id);\r\n    item.addEventListener(\"dragstart\", (event) => {\r\n      event.dataTransfer.setData(\"text/plain\", this.id);\r\n      event.dataTransfer.effectAllowed = \"move\";\r\n    });\r\n    item.addEventListener(\"dragend\", (event) => {\r\n      //console.log(event);\r\n      if (event.dataTransfer.dropEffect === \"none\") {\r\n        console.log(\"you can't drop there...!!!\");\r\n      } else {\r\n        console.log(\"Dropped successfully\");\r\n      }\r\n    });\r\n  }\r\n\r\n  connectMoreInfoButton() {\r\n    const projectItemElement = document.getElementById(this.id);\r\n    const moreInfoBtn = projectItemElement.querySelector(\"button:first-of-type\");\r\n    moreInfoBtn.addEventListener(\"click\", this.showMoreInfoHandler.bind(this));\r\n  }\r\n\r\n  connectSwitchButton(type) {\r\n    const projectItemElement = document.getElementById(this.id);\r\n    let switchBtn = projectItemElement.querySelector(\"button:last-of-type\");\r\n    switchBtn = _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__.DOMHelper.clearEventListeners(switchBtn);\r\n    switchBtn.textContent = type === \"active\" ? \"Finish\" : \"Activate\";\r\n    switchBtn.addEventListener(\r\n      \"click\",\r\n      this.updateProjectListsHandler.bind(null, this.id)\r\n    );\r\n  }\r\n\r\n  update(updateProjectListsFn, type) {\r\n    this.updateProjectListsHandler = updateProjectListsFn;\r\n    this.connectSwitchButton(type);\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RJdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b29saW5nLy4vc3JjL0FwcC9Qcm9qZWN0SXRlbS5qcz8yZTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPTUhlbHBlciB9IGZyb20gXCIuLi9VdGlsaXR5L0RPTUhlbHBlci5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RJdGVtIHtcclxuICBoYXNBY3RpdmVUb29sdGlwID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGlkLCB1cGRhdGVQcm9qZWN0TGlzdHNGdW5jdGlvbiwgdHlwZSkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyID0gdXBkYXRlUHJvamVjdExpc3RzRnVuY3Rpb247XHJcbiAgICB0aGlzLmNvbm5lY3RNb3JlSW5mb0J1dHRvbigpO1xyXG4gICAgdGhpcy5jb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpO1xyXG4gICAgdGhpcy5jb25uZWN0RHJhZygpO1xyXG4gIH1cclxuXHJcbiAgc2hvd01vcmVJbmZvSGFuZGxlcigpIHtcclxuICAgIGlmICh0aGlzLmhhc0FjdGl2ZVRvb2x0aXApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgIGNvbnN0IHRvb2x0aXBUZXh0ID0gcHJvamVjdEVsZW1lbnQuZGF0YXNldC5leHRyYUluZm87XHJcbiAgICBpbXBvcnQoXCIuL1Rvb2x0aXAuanNcIikudGhlbigobW9kdWxlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSBuZXcgbW9kdWxlLlRvb2x0aXAoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYXNBY3RpdmVUb29sdGlwID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sdGlwVGV4dCxcclxuICAgICAgICB0aGlzLmlkXHJcbiAgICAgICk7XHJcbiAgICAgIHRvb2x0aXAuYXR0YWNoKCk7XHJcbiAgICAgIHRoaXMuaGFzQWN0aXZlVG9vbHRpcCA9IHRydWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3REcmFnKCkge1xyXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgdGhpcy5pZCk7XHJcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XHJcbiAgICB9KTtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b3UgY2FuJ3QgZHJvcCB0aGVyZS4uLiEhIVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3BwZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RNb3JlSW5mb0J1dHRvbigpIHtcclxuICAgIGNvbnN0IHByb2plY3RJdGVtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgY29uc3QgbW9yZUluZm9CdG4gPSBwcm9qZWN0SXRlbUVsZW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbjpmaXJzdC1vZi10eXBlXCIpO1xyXG4gICAgbW9yZUluZm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2hvd01vcmVJbmZvSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RTd2l0Y2hCdXR0b24odHlwZSkge1xyXG4gICAgY29uc3QgcHJvamVjdEl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICBsZXQgc3dpdGNoQnRuID0gcHJvamVjdEl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b246bGFzdC1vZi10eXBlXCIpO1xyXG4gICAgc3dpdGNoQnRuID0gRE9NSGVscGVyLmNsZWFyRXZlbnRMaXN0ZW5lcnMoc3dpdGNoQnRuKTtcclxuICAgIHN3aXRjaEJ0bi50ZXh0Q29udGVudCA9IHR5cGUgPT09IFwiYWN0aXZlXCIgPyBcIkZpbmlzaFwiIDogXCJBY3RpdmF0ZVwiO1xyXG4gICAgc3dpdGNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiY2xpY2tcIixcclxuICAgICAgdGhpcy51cGRhdGVQcm9qZWN0TGlzdHNIYW5kbGVyLmJpbmQobnVsbCwgdGhpcy5pZClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodXBkYXRlUHJvamVjdExpc3RzRm4sIHR5cGUpIHtcclxuICAgIHRoaXMudXBkYXRlUHJvamVjdExpc3RzSGFuZGxlciA9IHVwZGF0ZVByb2plY3RMaXN0c0ZuO1xyXG4gICAgdGhpcy5jb25uZWN0U3dpdGNoQnV0dG9uKHR5cGUpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/App/ProjectItem.js\n");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectList: () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\r\n\r\n\r\nclass ProjectList {\r\n  projects = [];\r\n\r\n  constructor(type) {\r\n    this.type = type;\r\n    const prjItems = document.querySelectorAll(`#${type}-projects li`);\r\n    for (const prjItem of prjItems) {\r\n      this.projects.push(\r\n        new _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__.ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)\r\n      );\r\n    }\r\n    console.log(this.projects);\r\n    this.connectDrop();\r\n  }\r\n\r\n  connectDrop() {\r\n    const list = document.querySelector(`#${this.type}-projects ul`);\r\n\r\n    list.addEventListener(\"dragenter\", (event) => {\r\n      if (event.dataTransfer.types[0] === \"text/plain\") {\r\n        list.parentElement.classList.add(\"droppable\");\r\n        event.preventDefault();\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"dragover\", (event) => {\r\n      if (event.dataTransfer.types[0] === \"text/plain\") {\r\n        event.preventDefault();\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"dragleave\", (event) => {\r\n      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\r\n        list.parentElement.classList.remove(\"droppable\");\r\n      }\r\n    });\r\n\r\n    list.addEventListener(\"drop\", (event) => {\r\n      const projId = event.dataTransfer.getData(\"text/plain\");\r\n      if (this.projects.find((p) => p.id === projId)) {\r\n        return;\r\n      }\r\n      document.getElementById(projId).querySelector(\"button:last-of-type\").click();\r\n      list.parentElement.classList.remove(\"droppable\");\r\n    });\r\n  }\r\n\r\n  setSwitchHandlerFunction(switchHandlerFunction) {\r\n    this.switchHandler = switchHandlerFunction;\r\n  }\r\n\r\n  addProject(project) {\r\n    this.projects.push(project);\r\n    _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__.DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);\r\n    project.update(this.switchProject.bind(this), this.type);\r\n  }\r\n\r\n  switchProject(projectId) {\r\n    // const projectIndex = this.projects.findIndex(p => p.id === projectId);\r\n    // this.projects.splice(projectIndex, 1);\r\n    this.switchHandler(this.projects.find((p) => p.id === projectId));\r\n    this.projects = this.projects.filter((p) => p.id !== projectId);\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwL1Byb2plY3RMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9vbGluZy8uL3NyYy9BcHAvUHJvamVjdExpc3QuanM/MGRjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0SXRlbSB9IGZyb20gXCIuL1Byb2plY3RJdGVtLmpzXCI7XHJcbmltcG9ydCB7IERPTUhlbHBlciB9IGZyb20gXCIuLi9VdGlsaXR5L0RPTUhlbHBlci5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0IHtcclxuICBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgY29uc3QgcHJqSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHt0eXBlfS1wcm9qZWN0cyBsaWApO1xyXG4gICAgZm9yIChjb25zdCBwcmpJdGVtIG9mIHByakl0ZW1zKSB7XHJcbiAgICAgIHRoaXMucHJvamVjdHMucHVzaChcclxuICAgICAgICBuZXcgUHJvamVjdEl0ZW0ocHJqSXRlbS5pZCwgdGhpcy5zd2l0Y2hQcm9qZWN0LmJpbmQodGhpcyksIHRoaXMudHlwZSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdHMpO1xyXG4gICAgdGhpcy5jb25uZWN0RHJvcCgpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdERyb3AoKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy50eXBlfS1wcm9qZWN0cyB1bGApO1xyXG5cclxuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gXCJ0ZXh0L3BsYWluXCIpIHtcclxuICAgICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRyb3BwYWJsZVwiKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gXCJ0ZXh0L3BsYWluXCIpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5yZWxhdGVkVGFyZ2V0LmNsb3Nlc3QoYCMke3RoaXMudHlwZX0tcHJvamVjdHMgdWxgKSAhPT0gbGlzdCkge1xyXG4gICAgICAgIGxpc3QucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcHBhYmxlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qSWQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XHJcbiAgICAgIGlmICh0aGlzLnByb2plY3RzLmZpbmQoKHApID0+IHAuaWQgPT09IHByb2pJZCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvaklkKS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uOmxhc3Qtb2YtdHlwZVwiKS5jbGljaygpO1xyXG4gICAgICBsaXN0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyb3BwYWJsZVwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0U3dpdGNoSGFuZGxlckZ1bmN0aW9uKHN3aXRjaEhhbmRsZXJGdW5jdGlvbikge1xyXG4gICAgdGhpcy5zd2l0Y2hIYW5kbGVyID0gc3dpdGNoSGFuZGxlckZ1bmN0aW9uO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICBET01IZWxwZXIubW92ZUVsZW1lbnQocHJvamVjdC5pZCwgYCMke3RoaXMudHlwZX0tcHJvamVjdHMgdWxgKTtcclxuICAgIHByb2plY3QudXBkYXRlKHRoaXMuc3dpdGNoUHJvamVjdC5iaW5kKHRoaXMpLCB0aGlzLnR5cGUpO1xyXG4gIH1cclxuXHJcbiAgc3dpdGNoUHJvamVjdChwcm9qZWN0SWQpIHtcclxuICAgIC8vIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMucHJvamVjdHMuZmluZEluZGV4KHAgPT4gcC5pZCA9PT0gcHJvamVjdElkKTtcclxuICAgIC8vIHRoaXMucHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XHJcbiAgICB0aGlzLnN3aXRjaEhhbmRsZXIodGhpcy5wcm9qZWN0cy5maW5kKChwKSA9PiBwLmlkID09PSBwcm9qZWN0SWQpKTtcclxuICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gcHJvamVjdElkKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App/ProjectList.js\n");

/***/ }),

/***/ "./src/Utility/DOMHelper.js":
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMHelper: () => (/* binding */ DOMHelper)\n/* harmony export */ });\nclass DOMHelper {\r\n  static clearEventListeners(element) {\r\n    const clonedElement = element.cloneNode(true);\r\n    element.replaceWith(clonedElement);\r\n    return clonedElement;\r\n  }\r\n\r\n  static moveElement(elementId, newDestinationSelector) {\r\n    const element = document.getElementById(elementId);\r\n    const destinationElement = document.querySelector(newDestinationSelector);\r\n    destinationElement.append(element);\r\n    element.scrollIntoView({ behavior: \"smooth\" });\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9ET01IZWxwZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b29saW5nLy4vc3JjL1V0aWxpdHkvRE9NSGVscGVyLmpzPzU5MjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERPTUhlbHBlciB7XHJcbiAgc3RhdGljIGNsZWFyRXZlbnRMaXN0ZW5lcnMoZWxlbWVudCkge1xyXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgZWxlbWVudC5yZXBsYWNlV2l0aChjbG9uZWRFbGVtZW50KTtcclxuICAgIHJldHVybiBjbG9uZWRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1vdmVFbGVtZW50KGVsZW1lbnRJZCwgbmV3RGVzdGluYXRpb25TZWxlY3Rvcikge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XHJcbiAgICBjb25zdCBkZXN0aW5hdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5ld0Rlc3RpbmF0aW9uU2VsZWN0b3IpO1xyXG4gICAgZGVzdGluYXRpb25FbGVtZW50LmFwcGVuZChlbGVtZW50KTtcclxuICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Utility/DOMHelper.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList.js */ \"./src/App/ProjectList.js\");\n\r\n\r\nclass App {\r\n  static init() {\r\n    const activeProject = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"active\");\r\n    const finishedProject = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"finished\");\r\n    activeProject.setSwitchHandlerFunction(\r\n      finishedProject.addProject.bind(finishedProject)\r\n    );\r\n    finishedProject.setSwitchHandlerFunction(\r\n      activeProject.addProject.bind(activeProject)\r\n    );\r\n  }\r\n}\r\n\r\nApp.init();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b29saW5nLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3RMaXN0IH0gZnJvbSBcIi4vQXBwL1Byb2plY3RMaXN0LmpzXCI7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gIHN0YXRpYyBpbml0KCkge1xyXG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IG5ldyBQcm9qZWN0TGlzdChcImFjdGl2ZVwiKTtcclxuICAgIGNvbnN0IGZpbmlzaGVkUHJvamVjdCA9IG5ldyBQcm9qZWN0TGlzdChcImZpbmlzaGVkXCIpO1xyXG4gICAgYWN0aXZlUHJvamVjdC5zZXRTd2l0Y2hIYW5kbGVyRnVuY3Rpb24oXHJcbiAgICAgIGZpbmlzaGVkUHJvamVjdC5hZGRQcm9qZWN0LmJpbmQoZmluaXNoZWRQcm9qZWN0KVxyXG4gICAgKTtcclxuICAgIGZpbmlzaGVkUHJvamVjdC5zZXRTd2l0Y2hIYW5kbGVyRnVuY3Rpb24oXHJcbiAgICAgIGFjdGl2ZVByb2plY3QuYWRkUHJvamVjdC5iaW5kKGFjdGl2ZVByb2plY3QpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQXBwLmluaXQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".app.js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "tooling:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 			if (document.currentScript)
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
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktooling"] = self["webpackChunktooling"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;