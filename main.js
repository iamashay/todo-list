/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/res/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/res/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/project-active.png */ "./src/res/imgs/project-active.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/project-inactive.png */ "./src/res/imgs/project-inactive.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Merienda+One&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* style 3 parallel horizont menu lines */\n.menu-icon {\n    cursor: pointer;\n}\n\n.menu-icon > .line {\n    background-color: #ffffff;\n    height: 3px;\n    display: block;\n    width: 30px;\n    box-shadow: 1px 1px 1px 1px #3e000066;\n}\n.menu-icon > .line + .line {\n    margin-top: 8px;\n}\n/* End style 3 parallel horizont menu lines */\n\n* {\n    box-sizing: border-box;\n} \n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    background: #991b1b;\n    color: #fff;\n    height: calc(50px + 1vw);\n}\n\n#logo {\n    flex-grow: 2;\n    text-align: center;\n    font-size: calc(15px + 1vw);\n    font-weight: 700;\n    font-family: 'Merienda One', cursive;\n}\n\n#main-container {\n    height: calc(100vh - 1vw - 50px);\n    display: flex;\n    gap: 2px;\n}\n\n#sidebar {\n    width: 280px;\n    background: #fafafa;\n    box-shadow: 1px 1px 1px 1px #c3c3c3;\n    padding: 25px;\n}\n\n#task-container {\n    flex-grow: 2;\n    display: flex;\n    justify-content: center;\n\n}\n\n.task-wrapper {\n    width: 80%;\n    padding: 6px;\n\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.sidebar-option {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    cursor: pointer;\n}\n\n#projects-heading {\n    font-size: calc(12px + 1vw);\n    border-bottom: 1px solid #cacaca;\n    margin-bottom: 10px;\n    padding-bottom: 4px;\n}\n\n#project-list {\n    margin-left: 15px;\n}\n\n\n\n.task-options {\n    display: flex;\n    flex-direction: column;\n}\n\n.task-container-option {\n    background-color: #eee;\n    padding: 10px;\n    margin: 5px;\n    border-radius: 4px;\n    border: 1px solid #acacac;\n    cursor: pointer;\n    outline: none;\n}\n\n.select-input-container {\n    align-self: center;\n    display: flex;\n    gap: 20px;\n}\n\n\n.status-options {\n    display: flex;\n    gap: 6px;\n}\n\n#task-list-container {\n    margin-top: 40px;\n    height: 65%;\n    border: 1px solid #dedede;\n    box-shadow: 1px 1px 1px 1px #fafafa;\n    padding: 8px;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 6px;\n    padding-top: 6px;\n}\n\n.left-task-container, .right-task-container {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\n#add-task {\n    padding: 8px;\n    cursor: pointer;\n}\n\n.task-menu {\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.task-important {\n    height: 18px;\n    align-self: flex-start;\n    cursor: pointer;\n}\n\n/* custom checkbox styles */\n/* The container */\n.check-container {\n    display: block;\n    position: relative;\n    padding-left: 14px;\n    margin-bottom: 24px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    /* border: 1px solid #000; */\n  }\n  \n  /* Hide the browser's default checkbox */\n.check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n  \n  /* Create a custom checkbox */\n.checkmark {\n    position: absolute;\n    top: 1px;\n    left: 3px;\n    height: 21px;\n    width: 21px;\n    background-color: #eee;\n    border: 1px solid #cdcdcd;\n    transition-duration: 400ms;\n}\n  \n  /* On mouse-over, add a grey background color */\n.check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n}\n  \n  /* When the checkbox is checked, add a blue background */\n.check-container input:checked ~ .checkmark {\n    background-color: #84cc16;\n    border: 1px solid #64a118;\n}\n  \n  /* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n  \n  /* Show the checkmark when checked */\n.check-container input:checked ~ .checkmark:after {\n    display: block;\n}\n  \n  /* Style the checkmark/indicator */\n.check-container .checkmark:after {\n    left: 6px;\n    top: 1px;\n    width: 4px;\n    height: 11px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate( \n45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate( \n45deg);\n}\n\n  /* End custom checkbox styles */\n\n/*start custom scrollbar */\n/* Works on Firefox */\n#task-list-container {\n    scrollbar-width: thin;\n    scrollbar-color: white #f44336;\n    overflow-y: auto;\n}\n  \n/* Works on Chrome, Edge, and Safari */\n#task-list-container::-webkit-scrollbar {\n    width: 10px;\n}\n\n#task-list-container::-webkit-scrollbar-track {\n    background: #f44336;\n    border-left: 1px solid #9f1717;\n}\n\n#task-list-container::-webkit-scrollbar-thumb {\n    background-color: white;\n}\n\n\n/* Start styles for form popup */\n.popup-overlay {\n    z-index: 99;\n    background: #00000085;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.popup-container {\n    margin-top: 80px;\n    background-color: white;\n    width: min(50vw, 400px);\n    padding: 20px;\n    border-radius: 6px;\n    position: relative;\n}\n\n/* end popup */\n\n.input-box {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n.input-box input {\n    font-size: calc(10px + 0.4vw);\n    padding: 2px;\n}\n\n.add-task-form, form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.normal-button {\n    padding: 8px;\n    cursor: pointer;\n}\n\n.add-task-form .normal-button, .edit-task-form .normal-button  {\n    align-self: center;\n}\n\n.close-popup {\n    position: absolute;\n    top: 2px;\n    right: 8px;\n    font-size: 20px;\n    font-weight: 600;\n    font-family: monospace, sans-serif;\n    cursor: pointer;\n}\n\n.input-box-checkbox {\n    display: flex;\n    gap: 4%;\n    align-items: center;\n}\n\n.input-box-checkbox input[type=\"checkbox\"]{\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n}\n\n/* Dropdown menu start */\n\n/* Dropdown Button */\n.dropbtn {\n    background-color: #04AA6D;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n  }\n  \n  /* The container <div> - needed to position the dropdown content */\n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  /* Dropdown Content (Hidden by Default) */\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 60px;\n    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);\n    z-index: 1;\n    right: 0;\n  }\n\n  /* style for dropdown options */\n.dropdown-option {\n    padding: 4px;\n    border-bottom: 1px solid #cbcbcb;\n    cursor: pointer;\n}\n\n.dropdown-option:hover {\n    background: #ffeebe;\n}\n\n  /* Links inside the dropdown */\n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  \n  /* Change color of dropdown links on hover */\n  .dropdown-content a:hover {background-color: #ddd;}\n  \n  /* Show the dropdown menu on hover */\n  .dropdown:hover .dropdown-content {display: block;}\n  \n  /* Change the background color of the dropdown button when the dropdown content is shown */\n  .dropdown:hover .dropbtn {background-color: #3e8e41;}\n\n  /* End dropdown */\n\n@keyframes hide {\n    0%   {\n        opacity: 100%;\n    }\n    100% {\n        opacity: 0%;\n        display: none;\n    }\n}\n\n@keyframes show {\n    0%   {\n        opacity: 0%;\n    }\n    100% {\n        opacity: 100%;\n        display: flex;\n    }\n}\n\n.projects {\n    padding: 0;\n    margin-left: 24px;\n    font-size: 18px;\n}\n\n.project-active {\n    list-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.project-inactive {\n    list-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.project {\n    margin-top: 10px;\n    cursor: pointer;\n}\n\n.add-project {\n    cursor: pointer;\n}\n\n#tab-name {\n    align-self: center;\n    font-size: calc(12px + 1vw);\n    font-weight: 600;\n    color: #404040;\n    font-family: sans-serif;\n}\n\n.project-options {\n    display: flex;\n    gap: 10px;\n}\n\n.project-options img {\n    visibility: hidden;\n}\n\n.project-name {\n    flex-grow: 1;\n}\n\n.projects-wrapper {\n    overflow: auto;\n    max-height: 70vh;\n    margin-top: 15px;\n}\n\n@media only screen and (max-width: 700px) {\n    #sidebar {\n        width: 100%;\n        min-height: 324px;\n    }\n\n    #main-container {\n        flex-direction: column;\n    }\n\n    .projects-wrapper {\n        max-height: 140px;\n    }\n    #add-task, .task-container-option {\n        padding: 4px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/res/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merienda+One&display=swap');\n\n\n/* style 3 parallel horizont menu lines */\n.menu-icon {\n    cursor: pointer;\n}\n\n.menu-icon > .line {\n    background-color: #ffffff;\n    height: 3px;\n    display: block;\n    width: 30px;\n    box-shadow: 1px 1px 1px 1px #3e000066;\n}\n.menu-icon > .line + .line {\n    margin-top: 8px;\n}\n/* End style 3 parallel horizont menu lines */\n\n* {\n    box-sizing: border-box;\n} \n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    background: #991b1b;\n    color: #fff;\n    height: calc(50px + 1vw);\n}\n\n#logo {\n    flex-grow: 2;\n    text-align: center;\n    font-size: calc(15px + 1vw);\n    font-weight: 700;\n    font-family: 'Merienda One', cursive;\n}\n\n#main-container {\n    height: calc(100vh - 1vw - 50px);\n    display: flex;\n    gap: 2px;\n}\n\n#sidebar {\n    width: 280px;\n    background: #fafafa;\n    box-shadow: 1px 1px 1px 1px #c3c3c3;\n    padding: 25px;\n}\n\n#task-container {\n    flex-grow: 2;\n    display: flex;\n    justify-content: center;\n\n}\n\n.task-wrapper {\n    width: 80%;\n    padding: 6px;\n\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.sidebar-option {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    cursor: pointer;\n}\n\n#projects-heading {\n    font-size: calc(12px + 1vw);\n    border-bottom: 1px solid #cacaca;\n    margin-bottom: 10px;\n    padding-bottom: 4px;\n}\n\n#project-list {\n    margin-left: 15px;\n}\n\n\n\n.task-options {\n    display: flex;\n    flex-direction: column;\n}\n\n.task-container-option {\n    background-color: #eee;\n    padding: 10px;\n    margin: 5px;\n    border-radius: 4px;\n    border: 1px solid #acacac;\n    cursor: pointer;\n    outline: none;\n}\n\n.select-input-container {\n    align-self: center;\n    display: flex;\n    gap: 20px;\n}\n\n\n.status-options {\n    display: flex;\n    gap: 6px;\n}\n\n#task-list-container {\n    margin-top: 40px;\n    height: 65%;\n    border: 1px solid #dedede;\n    box-shadow: 1px 1px 1px 1px #fafafa;\n    padding: 8px;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 6px;\n    padding-top: 6px;\n}\n\n.left-task-container, .right-task-container {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\n#add-task {\n    padding: 8px;\n    cursor: pointer;\n}\n\n.task-menu {\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.task-important {\n    height: 18px;\n    align-self: flex-start;\n    cursor: pointer;\n}\n\n/* custom checkbox styles */\n/* The container */\n.check-container {\n    display: block;\n    position: relative;\n    padding-left: 14px;\n    margin-bottom: 24px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    /* border: 1px solid #000; */\n  }\n  \n  /* Hide the browser's default checkbox */\n.check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n  \n  /* Create a custom checkbox */\n.checkmark {\n    position: absolute;\n    top: 1px;\n    left: 3px;\n    height: 21px;\n    width: 21px;\n    background-color: #eee;\n    border: 1px solid #cdcdcd;\n    transition-duration: 400ms;\n}\n  \n  /* On mouse-over, add a grey background color */\n.check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n}\n  \n  /* When the checkbox is checked, add a blue background */\n.check-container input:checked ~ .checkmark {\n    background-color: #84cc16;\n    border: 1px solid #64a118;\n}\n  \n  /* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n  \n  /* Show the checkmark when checked */\n.check-container input:checked ~ .checkmark:after {\n    display: block;\n}\n  \n  /* Style the checkmark/indicator */\n.check-container .checkmark:after {\n    left: 6px;\n    top: 1px;\n    width: 4px;\n    height: 11px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate( \n45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate( \n45deg);\n}\n\n  /* End custom checkbox styles */\n\n/*start custom scrollbar */\n/* Works on Firefox */\n#task-list-container {\n    scrollbar-width: thin;\n    scrollbar-color: white #f44336;\n    overflow-y: auto;\n}\n  \n/* Works on Chrome, Edge, and Safari */\n#task-list-container::-webkit-scrollbar {\n    width: 10px;\n}\n\n#task-list-container::-webkit-scrollbar-track {\n    background: #f44336;\n    border-left: 1px solid #9f1717;\n}\n\n#task-list-container::-webkit-scrollbar-thumb {\n    background-color: white;\n}\n\n\n/* Start styles for form popup */\n.popup-overlay {\n    z-index: 99;\n    background: #00000085;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.popup-container {\n    margin-top: 80px;\n    background-color: white;\n    width: min(50vw, 400px);\n    padding: 20px;\n    border-radius: 6px;\n    position: relative;\n}\n\n/* end popup */\n\n.input-box {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n.input-box input {\n    font-size: calc(10px + 0.4vw);\n    padding: 2px;\n}\n\n.add-task-form, form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.normal-button {\n    padding: 8px;\n    cursor: pointer;\n}\n\n.add-task-form .normal-button, .edit-task-form .normal-button  {\n    align-self: center;\n}\n\n.close-popup {\n    position: absolute;\n    top: 2px;\n    right: 8px;\n    font-size: 20px;\n    font-weight: 600;\n    font-family: monospace, sans-serif;\n    cursor: pointer;\n}\n\n.input-box-checkbox {\n    display: flex;\n    gap: 4%;\n    align-items: center;\n}\n\n.input-box-checkbox input[type=\"checkbox\"]{\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n}\n\n/* Dropdown menu start */\n\n/* Dropdown Button */\n.dropbtn {\n    background-color: #04AA6D;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n  }\n  \n  /* The container <div> - needed to position the dropdown content */\n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  /* Dropdown Content (Hidden by Default) */\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 60px;\n    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);\n    z-index: 1;\n    right: 0;\n  }\n\n  /* style for dropdown options */\n.dropdown-option {\n    padding: 4px;\n    border-bottom: 1px solid #cbcbcb;\n    cursor: pointer;\n}\n\n.dropdown-option:hover {\n    background: #ffeebe;\n}\n\n  /* Links inside the dropdown */\n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  \n  /* Change color of dropdown links on hover */\n  .dropdown-content a:hover {background-color: #ddd;}\n  \n  /* Show the dropdown menu on hover */\n  .dropdown:hover .dropdown-content {display: block;}\n  \n  /* Change the background color of the dropdown button when the dropdown content is shown */\n  .dropdown:hover .dropbtn {background-color: #3e8e41;}\n\n  /* End dropdown */\n\n@keyframes hide {\n    0%   {\n        opacity: 100%;\n    }\n    100% {\n        opacity: 0%;\n        display: none;\n    }\n}\n\n@keyframes show {\n    0%   {\n        opacity: 0%;\n    }\n    100% {\n        opacity: 100%;\n        display: flex;\n    }\n}\n\n.projects {\n    padding: 0;\n    margin-left: 24px;\n    font-size: 18px;\n}\n\n.project-active {\n    list-style-image: url(\"./imgs/project-active.png\");\n}\n\n.project-inactive {\n    list-style-image: url(\"./imgs/project-inactive.png\");\n}\n\n.project {\n    margin-top: 10px;\n    cursor: pointer;\n}\n\n.add-project {\n    cursor: pointer;\n}\n\n#tab-name {\n    align-self: center;\n    font-size: calc(12px + 1vw);\n    font-weight: 600;\n    color: #404040;\n    font-family: sans-serif;\n}\n\n.project-options {\n    display: flex;\n    gap: 10px;\n}\n\n.project-options img {\n    visibility: hidden;\n}\n\n.project-name {\n    flex-grow: 1;\n}\n\n.projects-wrapper {\n    overflow: auto;\n    max-height: 70vh;\n    margin-top: 15px;\n}\n\n@media only screen and (max-width: 700px) {\n    #sidebar {\n        width: 100%;\n        min-height: 324px;\n    }\n\n    #main-container {\n        flex-direction: column;\n    }\n\n    .projects-wrapper {\n        max-height: 140px;\n    }\n    #add-task, .task-container-option {\n        padding: 4px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/res/style.css":
/*!***************************!*\
  !*** ./src/res/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/res/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/loadPage.js":
/*!*********************************!*\
  !*** ./src/modules/loadPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateAddTaskForm": () => (/* binding */ generateAddTaskForm),
/* harmony export */   "generateEditTaskForm": () => (/* binding */ generateEditTaskForm),
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });


function generateHeader(){
    const header = document.createElement("header");

    const menuIcon = generateMenuLines();
    header.appendChild(menuIcon);

    const logoText = document.createElement("div");
    logoText.id = "logo";
    logoText.textContent = "MyToDo";
    header.appendChild(logoText);

    return header;
}

function generateMenuLines(){
    const menuIcon = document.createElement("div");
    menuIcon.classList = "menu-icon";

    for(let i=0; i < 3; i++){
        let line = document.createElement("span");
        line.classList = "line";
        menuIcon.appendChild(line);
    }
    return menuIcon;
}

function generateSidebarOption(title) { //currently creating a seperate function for the sidebar options
    const optionId = title.toLowerCase().replaceAll(" ", "-");
    
    const option = document.createElement("div");
    option.classList = "sidebar-option";
    option.id = optionId;
    const optionImg = new Image();
    optionImg.src = __webpack_require__("./src/res/imgs sync recursive ^\\.\\/.*\\.png$")(`./${optionId}.png`);
    optionImg.alt = title+" icon";
    
    const optionTitle = document.createElement("span");
    optionTitle.class = "option-title";
    optionTitle.textContent = title;

    option.appendChild(optionImg);
    option.appendChild(optionTitle);
    
    return option;
}

function generateProjectContainer(){
    const projectContainer = document.createElement("div");
    const title = document.createElement("div");
    title.textContent = "Projects"
    title.id = "projects-heading";

    const projectList = document.createElement("div");
    projectList.id = "project-list";

    const addProject = document.createElement("div");
    addProject.classList = "add-project sidebar-option";
    const addProjectImg = new Image();
    addProjectImg.src = __webpack_require__(/*! ../res/imgs/add-project.png */ "./src/res/imgs/add-project.png")
    addProjectImg.alt = "add project icon"
    const addProjectTitle = document.createElement("span");
    addProjectTitle.textContent = "Add Project";

    const projectsWrapper = document.createElement("div");
    projectsWrapper.classList = "projects-wrapper";

    const projects = document.createElement("ul");
    projects.classList = "projects";

    addProject.appendChild(addProjectImg);
    addProject.appendChild(addProjectTitle);

    projectsWrapper.append(projects)
    projectList.append(addProject, projectsWrapper);

    projectContainer.appendChild(title);
    projectContainer.appendChild(projectList);

    return projectContainer;
}


function generateSidebar() {
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";

    const showAllOption = generateSidebarOption("Show All");
    sidebar.appendChild(showAllOption)

    const favOption = generateSidebarOption("Favourite");
    sidebar.appendChild(favOption)

    const projectContainer = generateProjectContainer();
    sidebar.appendChild(projectContainer)


    return sidebar;
}

function generateWhenOptionContainer(...options){
    const whenOptionContainer = document.createElement("select");
    whenOptionContainer.classList = "when-options task-container-option";

    options.forEach((option) => {
        const optionDiv = document.createElement("option");
        optionDiv.value = option.toLowerCase();
        optionDiv.textContent = option;
        whenOptionContainer.appendChild(optionDiv);
    })

    return whenOptionContainer;
}

function generateStatusOptionContainer(...options){
    /*
    const statusOptionLabel = document.createElement("label");
    statusOptionLabel.for = "status-option";
    statusOptionLabel.textContent = "Status:"
    */

    const statusOption = document.createElement("select");
    statusOption.classList = "status-option task-container-option";

    options.forEach((option) => {
        const optionDiv = document.createElement("option");
        optionDiv.value = option.toLowerCase();
        optionDiv.textContent = option;
        statusOption.appendChild(optionDiv);
    })

    //statusOptionContainer.appendChild(statusOptionLabel);

    return statusOption;
}


function generateTaskOptionContainer(){
    const taskOptionContainer = document.createElement("div");
    taskOptionContainer.classList = "task-options";
    
    const selectBoxContainer = document.createElement("div");
    selectBoxContainer.className = "select-input-container";

    const whenOptionContainer = generateWhenOptionContainer("Upcoming", "Today", "Past");

    const statusOptionContainer = generateStatusOptionContainer("Unfinished", "All", "Completed");

    selectBoxContainer.appendChild(whenOptionContainer);
    selectBoxContainer.appendChild(statusOptionContainer);

    const addTaskButton = document.createElement("button");
    addTaskButton.id = "add-task"
    addTaskButton.textContent = "+ Add Task";

    const secondOptionContainer = document.createElement("div");
    secondOptionContainer.className = "second-option-container";

    const tabName = document.createElement("div");
    tabName.id = "tab-name";

    taskOptionContainer.appendChild(selectBoxContainer);
    secondOptionContainer.appendChild(addTaskButton);
    taskOptionContainer.appendChild(secondOptionContainer);
    taskOptionContainer.appendChild(tabName);
    
    return taskOptionContainer;
}

function generateTaskListContainer(){
    const taskListContainer = document.createElement("div");
    taskListContainer.id = "task-list-container";
    
    return taskListContainer;
}

function generateDemoTaskDiv(title, date){

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const taskTitle = document.createElement("div");
    taskTitle.className = "task-tile";
    taskTitle.textContent = title;

    //Custom checkbox
    const taskStatusLabel = document.createElement("label");
    taskStatusLabel.className = "check-container";

    const taskStatus = document.createElement("input");
    taskStatus.type = "checkbox";
    taskStatus.classList = "task-status checkbox";

    const taskStatusCheckmark = document.createElement("span");
    taskStatusCheckmark.className = "checkmark";

    taskStatusLabel.appendChild(taskStatus);
    taskStatusLabel.appendChild(taskStatusCheckmark);

    //custom checkbox end

    const taskDate = document.createElement("div");
    taskDate.className = "task-date";
    taskDate.textContent = date;

    const taskImportant = document.createElement("img");
    taskImportant.className = "task-important";
    taskImportant.src = __webpack_require__(/*! ../res/imgs/star-icon.png */ "./src/res/imgs/star-icon.png");

    const taskOptions = document.createElement("div");
    taskOptions.className = "task-menu";
    taskOptions.textContent = "⋮";

    const leftTaskContainer = document.createElement("div");
    leftTaskContainer.className = "left-task-container";

    const rightTaskContainer = document.createElement("div");
    rightTaskContainer.className = "right-task-container";

    leftTaskContainer.appendChild(taskStatusLabel);
    leftTaskContainer.appendChild(taskTitle);
    rightTaskContainer.appendChild(taskDate);
    rightTaskContainer.appendChild(taskImportant);
    rightTaskContainer.appendChild(taskOptions);

    taskDiv.appendChild(leftTaskContainer);
    taskDiv.appendChild(rightTaskContainer);

    return taskDiv;
}

function generateTaskContainer() {

    const taskContainer = document.createElement("div");
    taskContainer.id = "task-container";

    const taskWrapper = document.createElement("div");
    taskWrapper.className = "task-wrapper";

    const taskOptionContainer = generateTaskOptionContainer();  
    const taskListContainer = generateTaskListContainer();

    const taskDemoDiv = generateDemoTaskDiv("Do 4 push ups", "12/06/2022");
    taskListContainer.appendChild(taskDemoDiv);

    taskWrapper.appendChild(taskOptionContainer);
    taskWrapper.appendChild(taskListContainer);

    taskContainer.appendChild(taskWrapper);

    return taskContainer;
}

function generateTaskFormInput(name, label, type, required=false){
    
    const inputDiv = document.createElement("div");
    inputDiv.className = "input-box";

    const inputLabel = document.createElement("label");
    inputLabel.for = name;
    inputLabel.textContent = label;

    let myInput;


    if (type === "textarea")  {
        myInput = document.createElement("textarea");
    } else if (type === "checkbox")  {
        myInput = document.createElement("input");
        inputDiv.className = "input-box-checkbox";
        myInput.type = type;
    }
    else {
        myInput = document.createElement("input");
        myInput.type = type;
    }
    myInput.name = name;
    myInput.id = name;
    if (required){
        myInput.required = true;
    }

    inputDiv.append(inputLabel, myInput);
    return inputDiv;
}

function generateAddTaskForm(){
    
    const myForm = document.createElement("form");
    myForm.className = "add-task-form";

    const taskTitle = generateTaskFormInput("task-title", "Title", "text", true);
    const taskDueDate = generateTaskFormInput("task-due-date", "Due Date", "date", true);
    const taskImportant = generateTaskFormInput("task-important", "Is Important?", "checkbox");
    const taskDescription = generateTaskFormInput("task-description", "Description", "textarea");
    
    const submitBut = document.createElement("button");
    submitBut.className = "normal-button";
    submitBut.textContent = "Add Task";

    myForm.append(taskTitle, taskDueDate, taskImportant, taskDescription, submitBut);

    return myForm;
}

function generateEditTaskForm(){
    
    const myForm = document.createElement("form");
    myForm.className = "edit-task-form";

    const taskTitle = generateTaskFormInput("task-title", "Title", "text", true);
    const taskDueDate = generateTaskFormInput("task-due-date", "Due Date", "date", true);
    const taskImportant = generateTaskFormInput("task-important", "Is Important?", "checkbox");
    const taskDescription = generateTaskFormInput("task-description", "Description", "textarea");
    
    const submitBut = document.createElement("button");
    submitBut.className = "normal-button";
    submitBut.textContent = "Add Task";

    myForm.append(taskTitle, taskDueDate, taskImportant, taskDescription, submitBut);

    return myForm;
}

function generatePopup(){
    const popupOverlay = document.createElement("div");
    popupOverlay.className = "popup-overlay";
    popupOverlay.style.display = "none";

    const popupContainer = document.createElement("div");
    popupContainer.className = "popup-container";

    popupOverlay.appendChild(popupContainer);

    return popupOverlay;
}

const loadPage = () => {
    const body = document.body;
    const header = generateHeader();

    const mainContainer = document.createElement("div");
    mainContainer.id = "main-container";

    const sidebar = generateSidebar();
    const taskContainer = generateTaskContainer();
    const popup = generatePopup();

    mainContainer.appendChild(sidebar);
    mainContainer.appendChild(taskContainer);

    body.appendChild(header);
    body.appendChild(mainContainer);

    body.appendChild(popup)

}





/***/ }),

/***/ "./src/res/imgs sync recursive ^\\.\\/.*\\.png$":
/*!******************************************!*\
  !*** ./src/res/imgs/ sync ^\.\/.*\.png$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./add-project.png": "./src/res/imgs/add-project.png",
	"./delete-project.png": "./src/res/imgs/delete-project.png",
	"./edit-project.png": "./src/res/imgs/edit-project.png",
	"./favourite.png": "./src/res/imgs/favourite.png",
	"./project-active.png": "./src/res/imgs/project-active.png",
	"./project-inactive.png": "./src/res/imgs/project-inactive.png",
	"./projects.png": "./src/res/imgs/projects.png",
	"./show-all.png": "./src/res/imgs/show-all.png",
	"./star-icon.png": "./src/res/imgs/star-icon.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/res/imgs sync recursive ^\\.\\/.*\\.png$";

/***/ }),

/***/ "./src/res/imgs/add-project.png":
/*!**************************************!*\
  !*** ./src/res/imgs/add-project.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6b485d6c88aa1e01bbd6.png";

/***/ }),

/***/ "./src/res/imgs/delete-project.png":
/*!*****************************************!*\
  !*** ./src/res/imgs/delete-project.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "40f8b957ebe8e127d583.png";

/***/ }),

/***/ "./src/res/imgs/edit-project.png":
/*!***************************************!*\
  !*** ./src/res/imgs/edit-project.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8a9b6b4ac78841af0d1e.png";

/***/ }),

/***/ "./src/res/imgs/favourite.png":
/*!************************************!*\
  !*** ./src/res/imgs/favourite.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "708cb78c389f31e96dc4.png";

/***/ }),

/***/ "./src/res/imgs/project-active.png":
/*!*****************************************!*\
  !*** ./src/res/imgs/project-active.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eb330ef301f22e7289b6.png";

/***/ }),

/***/ "./src/res/imgs/project-inactive.png":
/*!*******************************************!*\
  !*** ./src/res/imgs/project-inactive.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fc8c5e54588385b33465.png";

/***/ }),

/***/ "./src/res/imgs/projects.png":
/*!***********************************!*\
  !*** ./src/res/imgs/projects.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d5338c4231bcaccb1a94.png";

/***/ }),

/***/ "./src/res/imgs/show-all.png":
/*!***********************************!*\
  !*** ./src/res/imgs/show-all.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f91be5463c6b7461bcba.png";

/***/ }),

/***/ "./src/res/imgs/star-icon.png":
/*!************************************!*\
  !*** ./src/res/imgs/star-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "708cb78c389f31e96dc4.png";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadPage */ "./src/modules/loadPage.js");
/* harmony import */ var _res_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./res/style.css */ "./src/res/style.css");



(0,_modules_loadPage__WEBPACK_IMPORTED_MODULE_0__.loadPage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLFlBQVksYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLE1BQU0sYUFBYSxhQUFhLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLGFBQWEsYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sWUFBWSwwQkFBMEIsYUFBYSx3QkFBd0IsYUFBYSwwQkFBMEIsY0FBYyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUss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LG1CQUFPLENBQUMsbUVBQTZCO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsK0RBQTJCOztBQUUzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFNkQ7Ozs7Ozs7Ozs7OztBQ3ZXN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0E0QztBQUNwQjs7QUFFeEIsMkRBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Jlcy9zdHlsZS5jc3M/ZTE5MSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvYWRQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZXMvaW1ncy8gc3luYyBeXFwuXFwvLipcXC5wbmckIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvcHJvamVjdC1hY3RpdmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWdzL3Byb2plY3QtaW5hY3RpdmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJpZW5kYStPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZSAzIHBhcmFsbGVsIGhvcml6b250IG1lbnUgbGluZXMgKi9cXG4ubWVudS1pY29uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1pY29uID4gLmxpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggIzNlMDAwMDY2O1xcbn1cXG4ubWVudS1pY29uID4gLmxpbmUgKyAubGluZSB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLyogRW5kIHN0eWxlIDMgcGFyYWxsZWwgaG9yaXpvbnQgbWVudSBsaW5lcyAqL1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn0gXFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjOTkxYjFiO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgaGVpZ2h0OiBjYWxjKDUwcHggKyAxdncpO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWVyaWVuZGEgT25lJywgY3Vyc2l2ZTtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMXZ3IC0gNTBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4ICNjM2MzYzM7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbiN0YXNrLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi50YXNrLXdyYXBwZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuXFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1vcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3RzLWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDF2dyk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcblxcblxcblxcbi50YXNrLW9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay1jb250YWluZXItb3B0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FjYWNhYztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0LWlucHV0LWNvbnRhaW5lciB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5cXG4uc3RhdHVzLW9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDZweDtcXG59XFxuXFxuI3Rhc2stbGlzdC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDY1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4ICNmYWZhZmE7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xcbn1cXG5cXG4ubGVmdC10YXNrLWNvbnRhaW5lciwgLnJpZ2h0LXRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkLXRhc2sge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbWVudSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staW1wb3J0YW50IHtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGN1c3RvbSBjaGVja2JveCBzdHlsZXMgKi9cXG4vKiBUaGUgY29udGFpbmVyICovXFxuLmNoZWNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXFxuICB9XFxuICBcXG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxuLmNoZWNrLWNvbnRhaW5lciBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG4gIFxcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuLmNoZWNrbWFyayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcHg7XFxuICAgIGxlZnQ6IDNweDtcXG4gICAgaGVpZ2h0OiAyMXB4O1xcbiAgICB3aWR0aDogMjFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxufVxcbiAgXFxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cXG4uY2hlY2stY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcbiAgXFxuICAvKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cXG4uY2hlY2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0Y2MxNjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY0YTExODtcXG59XFxuICBcXG4gIC8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXFxuLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbiAgXFxuICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXFxuLmNoZWNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4gIFxcbiAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cXG4uY2hlY2stY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBsZWZ0OiA2cHg7XFxuICAgIHRvcDogMXB4O1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICBoZWlnaHQ6IDExcHg7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoIFxcbjQ1ZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoIFxcbjQ1ZGVnKTtcXG59XFxuXFxuICAvKiBFbmQgY3VzdG9tIGNoZWNrYm94IHN0eWxlcyAqL1xcblxcbi8qc3RhcnQgY3VzdG9tIHNjcm9sbGJhciAqL1xcbi8qIFdvcmtzIG9uIEZpcmVmb3ggKi9cXG4jdGFzay1saXN0LWNvbnRhaW5lciB7XFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB3aGl0ZSAjZjQ0MzM2O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4gIFxcbi8qIFdvcmtzIG9uIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSAqL1xcbiN0YXNrLWxpc3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4jdGFzay1saXN0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5ZjE3MTc7XFxufVxcblxcbiN0YXNrLWxpc3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4vKiBTdGFydCBzdHlsZXMgZm9yIGZvcm0gcG9wdXAgKi9cXG4ucG9wdXAtb3ZlcmxheSB7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwODU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogbWluKDUwdncsIDQwMHB4KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIGVuZCBwb3B1cCAqL1xcblxcbi5pbnB1dC1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLmlucHV0LWJveCBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMC40dncpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtLCBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubm9ybWFsLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSAubm9ybWFsLWJ1dHRvbiwgLmVkaXQtdGFzay1mb3JtIC5ub3JtYWwtYnV0dG9uICB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDJweDtcXG4gICAgcmlnaHQ6IDhweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbnB1dC1ib3gtY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDQlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtYm94LWNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRHJvcGRvd24gbWVudSBzdGFydCAqL1xcblxcbi8qIERyb3Bkb3duIEJ1dHRvbiAqL1xcbi5kcm9wYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xcbiAgLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIG1pbi13aWR0aDogNjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2IoMCAwIDAgLyAyMCUpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICByaWdodDogMDtcXG4gIH1cXG5cXG4gIC8qIHN0eWxlIGZvciBkcm9wZG93biBvcHRpb25zICovXFxuLmRyb3Bkb3duLW9wdGlvbiB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYmNiY2I7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRyb3Bkb3duLW9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmVlYmU7XFxufVxcblxcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxcbiAgXFxuICAvKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXFxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cXG4gIFxcbiAgLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBkcm9wZG93biBidXR0b24gd2hlbiB0aGUgZHJvcGRvd24gY29udGVudCBpcyBzaG93biAqL1xcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO31cXG5cXG4gIC8qIEVuZCBkcm9wZG93biAqL1xcblxcbkBrZXlmcmFtZXMgaGlkZSB7XFxuICAgIDAlICAge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNob3cge1xcbiAgICAwJSAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnByb2plY3QtYWN0aXZlIHtcXG4gICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuLnByb2plY3QtaW5hY3RpdmUge1xcbiAgICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFiLW5hbWUge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICM0MDQwNDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucHJvamVjdC1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1vcHRpb25zIGltZyB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnByb2plY3RzLXdyYXBwZXIge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNzB2aDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICAjc2lkZWJhciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMyNHB4O1xcbiAgICB9XFxuXFxuICAgICNtYWluLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cy13cmFwcGVyIHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE0MHB4O1xcbiAgICB9XFxuICAgICNhZGQtdGFzaywgLnRhc2stY29udGFpbmVyLW9wdGlvbiB7XFxuICAgICAgICBwYWRkaW5nOiA0cHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0EseUNBQXlDO0FBQ3pDO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQSw2Q0FBNkM7O0FBRTdDO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJ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RXBELGlCQUFpQjs7QUFFbkI7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLHlEQUFvRDtBQUN4RDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVyaWVuZGErT25lJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbi8qIHN0eWxlIDMgcGFyYWxsZWwgaG9yaXpvbnQgbWVudSBsaW5lcyAqL1xcbi5tZW51LWljb24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWljb24gPiAubGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjM2UwMDAwNjY7XFxufVxcbi5tZW51LWljb24gPiAubGluZSArIC5saW5lIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG4vKiBFbmQgc3R5bGUgMyBwYXJhbGxlbCBob3Jpem9udCBtZW51IGxpbmVzICovXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufSBcXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICM5OTFiMWI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBoZWlnaHQ6IGNhbGMoNTBweCArIDF2dyk7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMXZ3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNZXJpZW5kYSBPbmUnLCBjdXJzaXZlO1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxdncgLSA1MHB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggI2MzYzNjMztcXG4gICAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuI3Rhc2stY29udGFpbmVyIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnRhc2std3JhcHBlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDZweDtcXG5cXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5zaWRlYmFyLW9wdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdHMtaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYWNhY2E7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbiNwcm9qZWN0LWxpc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuXFxuXFxuLnRhc2stb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1vcHRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWNhY2FjO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWxlY3QtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcblxcbi5zdGF0dXMtb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNnB4O1xcbn1cXG5cXG4jdGFzay1saXN0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggI2ZhZmFmYTtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XFxuICAgIHBhZGRpbmctdG9wOiA2cHg7XFxufVxcblxcbi5sZWZ0LXRhc2stY29udGFpbmVyLCAucmlnaHQtdGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhZGQtdGFzayB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1tZW51IHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1pbXBvcnRhbnQge1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogY3VzdG9tIGNoZWNrYm94IHN0eWxlcyAqL1xcbi8qIFRoZSBjb250YWluZXIgKi9cXG4uY2hlY2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgIzAwMDsgKi9cXG4gIH1cXG4gIFxcbiAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4uY2hlY2stY29udGFpbmVyIGlucHV0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxufVxcbiAgXFxuICAvKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cXG4uY2hlY2ttYXJrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDFweDtcXG4gICAgbGVmdDogM3B4O1xcbiAgICBoZWlnaHQ6IDIxcHg7XFxuICAgIHdpZHRoOiAyMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2RjZGNkO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG59XFxuICBcXG4gIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xcbi5jaGVjay1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuICBcXG4gIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xcbi5jaGVjay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRjYzE2O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjRhMTE4O1xcbn1cXG4gIFxcbiAgLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cXG4uY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuICBcXG4gIC8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cXG4uY2hlY2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiAgXFxuICAvKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xcbi5jaGVjay1jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGxlZnQ6IDZweDtcXG4gICAgdG9wOiAxcHg7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIGhlaWdodDogMTFweDtcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSggXFxuNDVkZWcpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSggXFxuNDVkZWcpO1xcbn1cXG5cXG4gIC8qIEVuZCBjdXN0b20gY2hlY2tib3ggc3R5bGVzICovXFxuXFxuLypzdGFydCBjdXN0b20gc2Nyb2xsYmFyICovXFxuLyogV29ya3Mgb24gRmlyZWZveCAqL1xcbiN0YXNrLWxpc3QtY29udGFpbmVyIHtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgICBzY3JvbGxiYXItY29sb3I6IHdoaXRlICNmNDQzMzY7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbiAgXFxuLyogV29ya3Mgb24gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpICovXFxuI3Rhc2stbGlzdC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbiN0YXNrLWxpc3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICNmNDQzMzY7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzlmMTcxNztcXG59XFxuXFxuI3Rhc2stbGlzdC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcblxcbi8qIFN0YXJ0IHN0eWxlcyBmb3IgZm9ybSBwb3B1cCAqL1xcbi5wb3B1cC1vdmVybGF5IHtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA4NTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiBtaW4oNTB2dywgNDAwcHgpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogZW5kIHBvcHVwICovXFxuXFxuLmlucHV0LWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4uaW5wdXQtYm94IGlucHV0IHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAwLjR2dyk7XFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmFkZC10YXNrLWZvcm0sIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5ub3JtYWwtYnV0dG9uIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtIC5ub3JtYWwtYnV0dG9uLCAuZWRpdC10YXNrLWZvcm0gLm5vcm1hbC1idXR0b24gIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMnB4O1xcbiAgICByaWdodDogOHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlucHV0LWJveC1jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dC1ib3gtY2hlY2tib3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBEcm9wZG93biBtZW51IHN0YXJ0ICovXFxuXFxuLyogRHJvcGRvd24gQnV0dG9uICovXFxuLmRyb3BidG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRBQTZEO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXFxuICAuZHJvcGRvd24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG4gIFxcbiAgLyogRHJvcGRvd24gQ29udGVudCAoSGlkZGVuIGJ5IERlZmF1bHQpICovXFxuICAuZHJvcGRvd24tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgbWluLXdpZHRoOiA2MHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYigwIDAgMCAvIDIwJSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHJpZ2h0OiAwO1xcbiAgfVxcblxcbiAgLyogc3R5bGUgZm9yIGRyb3Bkb3duIG9wdGlvbnMgKi9cXG4uZHJvcGRvd24tb3B0aW9uIHtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NiY2JjYjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZHJvcGRvd24tb3B0aW9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZWViZTtcXG59XFxuXFxuICAvKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXFxuICAuZHJvcGRvd24tY29udGVudCBhIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XFxuICBcXG4gIC8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxcbiAgXFxuICAvKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGVuIHRoZSBkcm9wZG93biBjb250ZW50IGlzIHNob3duICovXFxuICAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2JhY2tncm91bmQtY29sb3I6ICMzZThlNDE7fVxcblxcbiAgLyogRW5kIGRyb3Bkb3duICovXFxuXFxuQGtleWZyYW1lcyBoaWRlIHtcXG4gICAgMCUgICB7XFxuICAgICAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMCU7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hvdyB7XFxuICAgIDAlICAge1xcbiAgICAgICAgb3BhY2l0eTogMCU7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ucHJvamVjdC1hY3RpdmUge1xcbiAgICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXFxcIi4vaW1ncy9wcm9qZWN0LWFjdGl2ZS5wbmdcXFwiKTtcXG59XFxuXFxuLnByb2plY3QtaW5hY3RpdmUge1xcbiAgICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXFxcIi4vaW1ncy9wcm9qZWN0LWluYWN0aXZlLnBuZ1xcXCIpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFiLW5hbWUge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICM0MDQwNDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucHJvamVjdC1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1vcHRpb25zIGltZyB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnByb2plY3RzLXdyYXBwZXIge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNzB2aDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICAjc2lkZWJhciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMyNHB4O1xcbiAgICB9XFxuXFxuICAgICNtYWluLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cy13cmFwcGVyIHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE0MHB4O1xcbiAgICB9XFxuICAgICNhZGQtdGFzaywgLnRhc2stY29udGFpbmVyLW9wdGlvbiB7XFxuICAgICAgICBwYWRkaW5nOiA0cHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCBtZW51SWNvbiA9IGdlbmVyYXRlTWVudUxpbmVzKCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnVJY29uKTtcblxuICAgIGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dvVGV4dC5pZCA9IFwibG9nb1wiO1xuICAgIGxvZ29UZXh0LnRleHRDb250ZW50ID0gXCJNeVRvRG9cIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVNZW51TGluZXMoKXtcbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUljb24uY2xhc3NMaXN0ID0gXCJtZW51LWljb25cIjtcblxuICAgIGZvcihsZXQgaT0wOyBpIDwgMzsgaSsrKXtcbiAgICAgICAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbGluZS5jbGFzc0xpc3QgPSBcImxpbmVcIjtcbiAgICAgICAgbWVudUljb24uYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgfVxuICAgIHJldHVybiBtZW51SWNvbjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTaWRlYmFyT3B0aW9uKHRpdGxlKSB7IC8vY3VycmVudGx5IGNyZWF0aW5nIGEgc2VwZXJhdGUgZnVuY3Rpb24gZm9yIHRoZSBzaWRlYmFyIG9wdGlvbnNcbiAgICBjb25zdCBvcHRpb25JZCA9IHRpdGxlLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpO1xuICAgIFxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3B0aW9uLmNsYXNzTGlzdCA9IFwic2lkZWJhci1vcHRpb25cIjtcbiAgICBvcHRpb24uaWQgPSBvcHRpb25JZDtcbiAgICBjb25zdCBvcHRpb25JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBvcHRpb25JbWcuc3JjID0gcmVxdWlyZShgLi4vcmVzL2ltZ3MvJHtvcHRpb25JZH0ucG5nYCk7XG4gICAgb3B0aW9uSW1nLmFsdCA9IHRpdGxlK1wiIGljb25cIjtcbiAgICBcbiAgICBjb25zdCBvcHRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG9wdGlvblRpdGxlLmNsYXNzID0gXCJvcHRpb24tdGl0bGVcIjtcbiAgICBvcHRpb25UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgb3B0aW9uLmFwcGVuZENoaWxkKG9wdGlvbkltZyk7XG4gICAgb3B0aW9uLmFwcGVuZENoaWxkKG9wdGlvblRpdGxlKTtcbiAgICBcbiAgICByZXR1cm4gb3B0aW9uO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RDb250YWluZXIoKXtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCJcbiAgICB0aXRsZS5pZCA9IFwicHJvamVjdHMtaGVhZGluZ1wiO1xuXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RMaXN0LmlkID0gXCJwcm9qZWN0LWxpc3RcIjtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFByb2plY3QuY2xhc3NMaXN0ID0gXCJhZGQtcHJvamVjdCBzaWRlYmFyLW9wdGlvblwiO1xuICAgIGNvbnN0IGFkZFByb2plY3RJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBhZGRQcm9qZWN0SW1nLnNyYyA9IHJlcXVpcmUoXCIuLi9yZXMvaW1ncy9hZGQtcHJvamVjdC5wbmdcIilcbiAgICBhZGRQcm9qZWN0SW1nLmFsdCA9IFwiYWRkIHByb2plY3QgaWNvblwiXG4gICAgY29uc3QgYWRkUHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgYWRkUHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuXG4gICAgY29uc3QgcHJvamVjdHNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c1dyYXBwZXIuY2xhc3NMaXN0ID0gXCJwcm9qZWN0cy13cmFwcGVyXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QgPSBcInByb2plY3RzXCI7XG5cbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RJbWcpO1xuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFRpdGxlKTtcblxuICAgIHByb2plY3RzV3JhcHBlci5hcHBlbmQocHJvamVjdHMpXG4gICAgcHJvamVjdExpc3QuYXBwZW5kKGFkZFByb2plY3QsIHByb2plY3RzV3JhcHBlcik7XG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcblxuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLmlkID0gXCJzaWRlYmFyXCI7XG5cbiAgICBjb25zdCBzaG93QWxsT3B0aW9uID0gZ2VuZXJhdGVTaWRlYmFyT3B0aW9uKFwiU2hvdyBBbGxcIik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaG93QWxsT3B0aW9uKVxuXG4gICAgY29uc3QgZmF2T3B0aW9uID0gZ2VuZXJhdGVTaWRlYmFyT3B0aW9uKFwiRmF2b3VyaXRlXCIpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZmF2T3B0aW9uKVxuXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGdlbmVyYXRlUHJvamVjdENvbnRhaW5lcigpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcilcblxuXG4gICAgcmV0dXJuIHNpZGViYXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlV2hlbk9wdGlvbkNvbnRhaW5lciguLi5vcHRpb25zKXtcbiAgICBjb25zdCB3aGVuT3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICB3aGVuT3B0aW9uQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwid2hlbi1vcHRpb25zIHRhc2stY29udGFpbmVyLW9wdGlvblwiO1xuXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uRGl2LnZhbHVlID0gb3B0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIG9wdGlvbkRpdi50ZXh0Q29udGVudCA9IG9wdGlvbjtcbiAgICAgICAgd2hlbk9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25EaXYpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gd2hlbk9wdGlvbkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTdGF0dXNPcHRpb25Db250YWluZXIoLi4ub3B0aW9ucyl7XG4gICAgLypcbiAgICBjb25zdCBzdGF0dXNPcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzdGF0dXNPcHRpb25MYWJlbC5mb3IgPSBcInN0YXR1cy1vcHRpb25cIjtcbiAgICBzdGF0dXNPcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiU3RhdHVzOlwiXG4gICAgKi9cblxuICAgIGNvbnN0IHN0YXR1c09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc3RhdHVzT3B0aW9uLmNsYXNzTGlzdCA9IFwic3RhdHVzLW9wdGlvbiB0YXNrLWNvbnRhaW5lci1vcHRpb25cIjtcblxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbkRpdi52YWx1ZSA9IG9wdGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBvcHRpb25EaXYudGV4dENvbnRlbnQgPSBvcHRpb247XG4gICAgICAgIHN0YXR1c09wdGlvbi5hcHBlbmRDaGlsZChvcHRpb25EaXYpO1xuICAgIH0pXG5cbiAgICAvL3N0YXR1c09wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0dXNPcHRpb25MYWJlbCk7XG5cbiAgICByZXR1cm4gc3RhdHVzT3B0aW9uO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFza09wdGlvbkNvbnRhaW5lcigpe1xuICAgIGNvbnN0IHRhc2tPcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tPcHRpb25Db250YWluZXIuY2xhc3NMaXN0ID0gXCJ0YXNrLW9wdGlvbnNcIjtcbiAgICBcbiAgICBjb25zdCBzZWxlY3RCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlbGVjdEJveENvbnRhaW5lci5jbGFzc05hbWUgPSBcInNlbGVjdC1pbnB1dC1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHdoZW5PcHRpb25Db250YWluZXIgPSBnZW5lcmF0ZVdoZW5PcHRpb25Db250YWluZXIoXCJVcGNvbWluZ1wiLCBcIlRvZGF5XCIsIFwiUGFzdFwiKTtcblxuICAgIGNvbnN0IHN0YXR1c09wdGlvbkNvbnRhaW5lciA9IGdlbmVyYXRlU3RhdHVzT3B0aW9uQ29udGFpbmVyKFwiVW5maW5pc2hlZFwiLCBcIkFsbFwiLCBcIkNvbXBsZXRlZFwiKTtcblxuICAgIHNlbGVjdEJveENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aGVuT3B0aW9uQ29udGFpbmVyKTtcbiAgICBzZWxlY3RCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdHVzT3B0aW9uQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdXR0b24uaWQgPSBcImFkZC10YXNrXCJcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCBUYXNrXCI7XG5cbiAgICBjb25zdCBzZWNvbmRPcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY29uZE9wdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNlY29uZC1vcHRpb24tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB0YWJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJOYW1lLmlkID0gXCJ0YWItbmFtZVwiO1xuXG4gICAgdGFza09wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RCb3hDb250YWluZXIpO1xuICAgIHNlY29uZE9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICB0YXNrT3B0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZE9wdGlvbkNvbnRhaW5lcik7XG4gICAgdGFza09wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJOYW1lKTtcbiAgICBcbiAgICByZXR1cm4gdGFza09wdGlvbkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYXNrTGlzdENvbnRhaW5lcigpe1xuICAgIGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTGlzdENvbnRhaW5lci5pZCA9IFwidGFzay1saXN0LWNvbnRhaW5lclwiO1xuICAgIFxuICAgIHJldHVybiB0YXNrTGlzdENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVEZW1vVGFza0Rpdih0aXRsZSwgZGF0ZSl7XG5cbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGl2LmNsYXNzTmFtZSA9IFwidGFza1wiO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrVGl0bGUuY2xhc3NOYW1lID0gXCJ0YXNrLXRpbGVcIjtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIC8vQ3VzdG9tIGNoZWNrYm94XG4gICAgY29uc3QgdGFza1N0YXR1c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tTdGF0dXNMYWJlbC5jbGFzc05hbWUgPSBcImNoZWNrLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgdGFza1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrU3RhdHVzLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgdGFza1N0YXR1cy5jbGFzc0xpc3QgPSBcInRhc2stc3RhdHVzIGNoZWNrYm94XCI7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzQ2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGFza1N0YXR1c0NoZWNrbWFyay5jbGFzc05hbWUgPSBcImNoZWNrbWFya1wiO1xuXG4gICAgdGFza1N0YXR1c0xhYmVsLmFwcGVuZENoaWxkKHRhc2tTdGF0dXMpO1xuICAgIHRhc2tTdGF0dXNMYWJlbC5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzQ2hlY2ttYXJrKTtcblxuICAgIC8vY3VzdG9tIGNoZWNrYm94IGVuZFxuXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEYXRlLmNsYXNzTmFtZSA9IFwidGFzay1kYXRlXCI7XG4gICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuXG4gICAgY29uc3QgdGFza0ltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdGFza0ltcG9ydGFudC5jbGFzc05hbWUgPSBcInRhc2staW1wb3J0YW50XCI7XG4gICAgdGFza0ltcG9ydGFudC5zcmMgPSByZXF1aXJlKFwiLi4vcmVzL2ltZ3Mvc3Rhci1pY29uLnBuZ1wiKTtcblxuICAgIGNvbnN0IHRhc2tPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrT3B0aW9ucy5jbGFzc05hbWUgPSBcInRhc2stbWVudVwiO1xuICAgIHRhc2tPcHRpb25zLnRleHRDb250ZW50ID0gXCLii65cIjtcblxuICAgIGNvbnN0IGxlZnRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0VGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImxlZnQtdGFzay1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHJpZ2h0VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmlnaHRUYXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwicmlnaHQtdGFzay1jb250YWluZXJcIjtcblxuICAgIGxlZnRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tTdGF0dXNMYWJlbCk7XG4gICAgbGVmdFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICByaWdodFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgIHJpZ2h0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW1wb3J0YW50KTtcbiAgICByaWdodFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza09wdGlvbnMpO1xuXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChsZWZ0VGFza0NvbnRhaW5lcik7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChyaWdodFRhc2tDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIHRhc2tEaXY7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFza0NvbnRhaW5lcigpIHtcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuaWQgPSBcInRhc2stY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1dyYXBwZXIuY2xhc3NOYW1lID0gXCJ0YXNrLXdyYXBwZXJcIjtcblxuICAgIGNvbnN0IHRhc2tPcHRpb25Db250YWluZXIgPSBnZW5lcmF0ZVRhc2tPcHRpb25Db250YWluZXIoKTsgIFxuICAgIGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZ2VuZXJhdGVUYXNrTGlzdENvbnRhaW5lcigpO1xuXG4gICAgY29uc3QgdGFza0RlbW9EaXYgPSBnZW5lcmF0ZURlbW9UYXNrRGl2KFwiRG8gNCBwdXNoIHVwc1wiLCBcIjEyLzA2LzIwMjJcIik7XG4gICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RlbW9EaXYpO1xuXG4gICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza09wdGlvbkNvbnRhaW5lcik7XG4gICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0xpc3RDb250YWluZXIpO1xuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrV3JhcHBlcik7XG5cbiAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYXNrRm9ybUlucHV0KG5hbWUsIGxhYmVsLCB0eXBlLCByZXF1aXJlZD1mYWxzZSl7XG4gICAgXG4gICAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0RGl2LmNsYXNzTmFtZSA9IFwiaW5wdXQtYm94XCI7XG5cbiAgICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGlucHV0TGFiZWwuZm9yID0gbmFtZTtcbiAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gbGFiZWw7XG5cbiAgICBsZXQgbXlJbnB1dDtcblxuXG4gICAgaWYgKHR5cGUgPT09IFwidGV4dGFyZWFcIikgIHtcbiAgICAgICAgbXlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2hlY2tib3hcIikgIHtcbiAgICAgICAgbXlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXREaXYuY2xhc3NOYW1lID0gXCJpbnB1dC1ib3gtY2hlY2tib3hcIjtcbiAgICAgICAgbXlJbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG15SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIG15SW5wdXQudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIG15SW5wdXQubmFtZSA9IG5hbWU7XG4gICAgbXlJbnB1dC5pZCA9IG5hbWU7XG4gICAgaWYgKHJlcXVpcmVkKXtcbiAgICAgICAgbXlJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaW5wdXREaXYuYXBwZW5kKGlucHV0TGFiZWwsIG15SW5wdXQpO1xuICAgIHJldHVybiBpbnB1dERpdjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVBZGRUYXNrRm9ybSgpe1xuICAgIFxuICAgIGNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIG15Rm9ybS5jbGFzc05hbWUgPSBcImFkZC10YXNrLWZvcm1cIjtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGdlbmVyYXRlVGFza0Zvcm1JbnB1dChcInRhc2stdGl0bGVcIiwgXCJUaXRsZVwiLCBcInRleHRcIiwgdHJ1ZSk7XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBnZW5lcmF0ZVRhc2tGb3JtSW5wdXQoXCJ0YXNrLWR1ZS1kYXRlXCIsIFwiRHVlIERhdGVcIiwgXCJkYXRlXCIsIHRydWUpO1xuICAgIGNvbnN0IHRhc2tJbXBvcnRhbnQgPSBnZW5lcmF0ZVRhc2tGb3JtSW5wdXQoXCJ0YXNrLWltcG9ydGFudFwiLCBcIklzIEltcG9ydGFudD9cIiwgXCJjaGVja2JveFwiKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBnZW5lcmF0ZVRhc2tGb3JtSW5wdXQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIsIFwiRGVzY3JpcHRpb25cIiwgXCJ0ZXh0YXJlYVwiKTtcbiAgICBcbiAgICBjb25zdCBzdWJtaXRCdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ1dC5jbGFzc05hbWUgPSBcIm5vcm1hbC1idXR0b25cIjtcbiAgICBzdWJtaXRCdXQudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICBteUZvcm0uYXBwZW5kKHRhc2tUaXRsZSwgdGFza0R1ZURhdGUsIHRhc2tJbXBvcnRhbnQsIHRhc2tEZXNjcmlwdGlvbiwgc3VibWl0QnV0KTtcblxuICAgIHJldHVybiBteUZvcm07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRWRpdFRhc2tGb3JtKCl7XG4gICAgXG4gICAgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgbXlGb3JtLmNsYXNzTmFtZSA9IFwiZWRpdC10YXNrLWZvcm1cIjtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGdlbmVyYXRlVGFza0Zvcm1JbnB1dChcInRhc2stdGl0bGVcIiwgXCJUaXRsZVwiLCBcInRleHRcIiwgdHJ1ZSk7XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBnZW5lcmF0ZVRhc2tGb3JtSW5wdXQoXCJ0YXNrLWR1ZS1kYXRlXCIsIFwiRHVlIERhdGVcIiwgXCJkYXRlXCIsIHRydWUpO1xuICAgIGNvbnN0IHRhc2tJbXBvcnRhbnQgPSBnZW5lcmF0ZVRhc2tGb3JtSW5wdXQoXCJ0YXNrLWltcG9ydGFudFwiLCBcIklzIEltcG9ydGFudD9cIiwgXCJjaGVja2JveFwiKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBnZW5lcmF0ZVRhc2tGb3JtSW5wdXQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIsIFwiRGVzY3JpcHRpb25cIiwgXCJ0ZXh0YXJlYVwiKTtcbiAgICBcbiAgICBjb25zdCBzdWJtaXRCdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ1dC5jbGFzc05hbWUgPSBcIm5vcm1hbC1idXR0b25cIjtcbiAgICBzdWJtaXRCdXQudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICBteUZvcm0uYXBwZW5kKHRhc2tUaXRsZSwgdGFza0R1ZURhdGUsIHRhc2tJbXBvcnRhbnQsIHRhc2tEZXNjcmlwdGlvbiwgc3VibWl0QnV0KTtcblxuICAgIHJldHVybiBteUZvcm07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUG9wdXAoKXtcbiAgICBjb25zdCBwb3B1cE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcHVwT3ZlcmxheS5jbGFzc05hbWUgPSBcInBvcHVwLW92ZXJsYXlcIjtcbiAgICBwb3B1cE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwicG9wdXAtY29udGFpbmVyXCI7XG5cbiAgICBwb3B1cE92ZXJsYXkuYXBwZW5kQ2hpbGQocG9wdXBDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIHBvcHVwT3ZlcmxheTtcbn1cblxuY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgaGVhZGVyID0gZ2VuZXJhdGVIZWFkZXIoKTtcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Db250YWluZXIuaWQgPSBcIm1haW4tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZ2VuZXJhdGVTaWRlYmFyKCk7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGdlbmVyYXRlVGFza0NvbnRhaW5lcigpO1xuICAgIGNvbnN0IHBvcHVwID0gZ2VuZXJhdGVQb3B1cCgpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHBvcHVwKVxuXG59XG5cbmV4cG9ydCB7IGxvYWRQYWdlLCBnZW5lcmF0ZUFkZFRhc2tGb3JtLCBnZW5lcmF0ZUVkaXRUYXNrRm9ybX1cblxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FkZC1wcm9qZWN0LnBuZ1wiOiBcIi4vc3JjL3Jlcy9pbWdzL2FkZC1wcm9qZWN0LnBuZ1wiLFxuXHRcIi4vZGVsZXRlLXByb2plY3QucG5nXCI6IFwiLi9zcmMvcmVzL2ltZ3MvZGVsZXRlLXByb2plY3QucG5nXCIsXG5cdFwiLi9lZGl0LXByb2plY3QucG5nXCI6IFwiLi9zcmMvcmVzL2ltZ3MvZWRpdC1wcm9qZWN0LnBuZ1wiLFxuXHRcIi4vZmF2b3VyaXRlLnBuZ1wiOiBcIi4vc3JjL3Jlcy9pbWdzL2Zhdm91cml0ZS5wbmdcIixcblx0XCIuL3Byb2plY3QtYWN0aXZlLnBuZ1wiOiBcIi4vc3JjL3Jlcy9pbWdzL3Byb2plY3QtYWN0aXZlLnBuZ1wiLFxuXHRcIi4vcHJvamVjdC1pbmFjdGl2ZS5wbmdcIjogXCIuL3NyYy9yZXMvaW1ncy9wcm9qZWN0LWluYWN0aXZlLnBuZ1wiLFxuXHRcIi4vcHJvamVjdHMucG5nXCI6IFwiLi9zcmMvcmVzL2ltZ3MvcHJvamVjdHMucG5nXCIsXG5cdFwiLi9zaG93LWFsbC5wbmdcIjogXCIuL3NyYy9yZXMvaW1ncy9zaG93LWFsbC5wbmdcIixcblx0XCIuL3N0YXItaWNvbi5wbmdcIjogXCIuL3NyYy9yZXMvaW1ncy9zdGFyLWljb24ucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL3Jlcy9pbWdzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnBuZyRcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtsb2FkUGFnZX0gZnJvbSBcIi4vbW9kdWxlcy9sb2FkUGFnZVwiO1xuaW1wb3J0IFwiLi9yZXMvc3R5bGUuY3NzXCJcblxubG9hZFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==