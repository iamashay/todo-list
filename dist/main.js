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
___CSS_LOADER_EXPORT___.push([module.id, "/* style 3 parallel horizont menu lines */\n.menu-icon {\n    cursor: pointer;\n}\n\n.menu-icon > .line {\n    background-color: #ffffff;\n    height: 3px;\n    display: block;\n    width: 30px;\n    box-shadow: 1px 1px 1px 1px #3e000066;\n}\n.menu-icon > .line + .line {\n    margin-top: 8px;\n}\n/* End style 3 parallel horizont menu lines */\n\n* {\n    box-sizing: border-box;\n} \n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    background: #991b1b;\n    color: #fff;\n    height: calc(50px + 1vw);\n}\n\n#logo {\n    flex-grow: 2;\n    text-align: center;\n    font-size: calc(15px + 1vw);\n    font-weight: 700;\n    font-family: 'Merienda One', cursive;\n}\n\n#main-container {\n    height: calc(100vh - 1vw - 50px);\n    display: flex;\n    gap: 2px;\n}\n\n#sidebar {\n    width: 280px;\n    background: #fafafa;\n    box-shadow: 1px 1px 1px 1px #c3c3c3;\n    padding: 25px;\n}\n\n#task-container {\n    flex-grow: 2;\n    display: flex;\n    justify-content: center;\n\n}\n\n.task-wrapper {\n    width: 80%;\n    padding: 6px;\n\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.sidebar-option {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    cursor: pointer;\n}\n\n#projects-heading {\n    font-size: calc(12px + 1vw);\n    border-bottom: 1px solid #cacaca;\n    margin-bottom: 10px;\n    padding-bottom: 4px;\n}\n\n#project-list {\n    margin-left: 15px;\n}\n\n\n\n.task-options {\n    display: flex;\n    flex-direction: column;\n}\n\n.task-container-option {\n    background-color: #eee;\n    padding: 10px;\n    margin: 5px;\n    border-radius: 4px;\n    border: 1px solid #acacac;\n    cursor: pointer;\n    outline: none;\n}\n\n.select-input-container {\n    align-self: center;\n    display: flex;\n    gap: 20px;\n}\n\n\n.status-options {\n    display: flex;\n    gap: 6px;\n}\n\n#task-list-container {\n    margin-top: 40px;\n    height: 65%;\n    border: 1px solid #dedede;\n    box-shadow: 1px 1px 1px 1px #fafafa;\n    padding: 8px;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 6px;\n    padding-top: 6px;\n}\n\n.left-task-container, .right-task-container {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\n.left-task-container {\n    flex-grow: 1;\n}\n\n#add-task {\n    padding: 8px;\n    cursor: pointer;\n}\n\n.task-menu {\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.task-important {\n    height: 18px;\n    align-self: flex-start;\n    cursor: pointer;\n}\n\n/* custom checkbox styles */\n/* The container */\n.check-container {\n    display: block;\n    position: relative;\n    padding-left: 14px;\n    margin-bottom: 24px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    /* border: 1px solid #000; */\n  }\n  \n  /* Hide the browser's default checkbox */\n.check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n  \n  /* Create a custom checkbox */\n.checkmark {\n    position: absolute;\n    top: 1px;\n    left: 3px;\n    height: 21px;\n    width: 21px;\n    background-color: #eee;\n    border: 1px solid #cdcdcd;\n    transition-duration: 400ms;\n}\n  \n  /* On mouse-over, add a grey background color */\n.check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n}\n  \n  /* When the checkbox is checked, add a blue background */\n.check-container input:checked ~ .checkmark {\n    background-color: #84cc16;\n    border: 1px solid #64a118;\n}\n  \n  /* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n  \n  /* Show the checkmark when checked */\n.check-container input:checked ~ .checkmark:after {\n    display: block;\n}\n  \n  /* Style the checkmark/indicator */\n.check-container .checkmark:after {\n    left: 6px;\n    top: 1px;\n    width: 4px;\n    height: 11px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate( \n45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate( \n45deg);\n}\n\n  /* End custom checkbox styles */\n\n/*start custom scrollbar */\n/* Works on Firefox */\n#task-list-container {\n    scrollbar-width: thin;\n    scrollbar-color: white #f44336;\n    overflow-y: auto;\n}\n  \n/* Works on Chrome, Edge, and Safari */\n#task-list-container::-webkit-scrollbar {\n    width: 10px;\n}\n\n#task-list-container::-webkit-scrollbar-track {\n    background: #f44336;\n    border-left: 1px solid #9f1717;\n}\n\n#task-list-container::-webkit-scrollbar-thumb {\n    background-color: white;\n}\n\n\n/* Start styles for form popup */\n.popup-overlay {\n    z-index: 99;\n    background: #00000085;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.popup-container {\n    margin-top: 80px;\n    background-color: white;\n    width: min(50vw, 400px);\n    padding: 20px;\n    border-radius: 6px;\n    position: relative;\n}\n\n/* end popup */\n\n.input-box {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n.input-box input {\n    font-size: calc(10px + 0.4vw);\n    padding: 2px;\n}\n\n.add-task-form, form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.normal-button {\n    padding: 8px;\n    cursor: pointer;\n}\n\n.add-task-form .normal-button, .edit-task-form .normal-button  {\n    align-self: center;\n}\n\n.close-popup {\n    position: absolute;\n    top: 2px;\n    right: 8px;\n    font-size: 20px;\n    font-weight: 600;\n    font-family: monospace, sans-serif;\n    cursor: pointer;\n}\n\n.input-box-checkbox {\n    display: flex;\n    gap: 4%;\n    align-items: center;\n}\n\n.input-box-checkbox input[type=\"checkbox\"]{\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n}\n\n/* Dropdown menu start */\n\n/* Dropdown Button */\n.dropbtn {\n    background-color: #04AA6D;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n  }\n  \n  /* The container <div> - needed to position the dropdown content */\n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  /* Dropdown Content (Hidden by Default) */\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 60px;\n    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);\n    z-index: 1;\n    right: 0;\n  }\n\n  /* style for dropdown options */\n.dropdown-option {\n    padding: 4px;\n    border-bottom: 1px solid #cbcbcb;\n    cursor: pointer;\n}\n\n.dropdown-option:hover {\n    background: #ffeebe;\n}\n\n  /* Links inside the dropdown */\n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  \n  /* Change color of dropdown links on hover */\n  .dropdown-content a:hover {background-color: #ddd;}\n  \n  /* Show the dropdown menu on hover */\n  .dropdown:hover .dropdown-content {display: block;}\n  \n  /* Change the background color of the dropdown button when the dropdown content is shown */\n  .dropdown:hover .dropbtn {background-color: #3e8e41;}\n\n  /* End dropdown */\n\n@keyframes hide {\n    0%   {\n        opacity: 100%;\n    }\n    100% {\n        opacity: 0%;\n        display: none;\n    }\n}\n\n@keyframes show {\n    0%   {\n        opacity: 0%;\n    }\n    100% {\n        opacity: 100%;\n        display: flex;\n    }\n}\n\n.projects {\n    padding: 0;\n    margin-left: 24px;\n    font-size: 18px;\n}\n\n.project-active {\n    list-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.project-inactive {\n    list-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.project {\n    margin-top: 10px;\n    cursor: pointer;\n}\n\n.add-project {\n    cursor: pointer;\n}\n\n#tab-name {\n    align-self: center;\n    font-size: calc(12px + 1vw);\n    font-weight: 600;\n    color: #404040;\n    font-family: sans-serif;\n}\n\n.project-options {\n    display: flex;\n    gap: 10px;\n}\n\n.project-options img {\n    visibility: hidden;\n}\n\n.project-name {\n    flex-grow: 1;\n}\n\n.projects-wrapper {\n    overflow: auto;\n    max-height: 70vh;\n    margin-top: 15px;\n}\n\n@media only screen and (max-width: 700px) {\n    #sidebar {\n        width: 100%;\n        min-height: 324px;\n    }\n\n    #main-container {\n        flex-direction: column;\n    }\n\n    .projects-wrapper {\n        max-height: 140px;\n    }\n    #add-task, .task-container-option {\n        padding: 4px;\n    }\n    .task-wrapper{\n        width: 100%;\n    }\n\n    .task-date {\n        font-size: 12px;\n    }\n    #task-list-container {\n        margin-top: 18px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/res/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merienda+One&display=swap');\n\n\n/* style 3 parallel horizont menu lines */\n.menu-icon {\n    cursor: pointer;\n}\n\n.menu-icon > .line {\n    background-color: #ffffff;\n    height: 3px;\n    display: block;\n    width: 30px;\n    box-shadow: 1px 1px 1px 1px #3e000066;\n}\n.menu-icon > .line + .line {\n    margin-top: 8px;\n}\n/* End style 3 parallel horizont menu lines */\n\n* {\n    box-sizing: border-box;\n} \n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    background: #991b1b;\n    color: #fff;\n    height: calc(50px + 1vw);\n}\n\n#logo {\n    flex-grow: 2;\n    text-align: center;\n    font-size: calc(15px + 1vw);\n    font-weight: 700;\n    font-family: 'Merienda One', cursive;\n}\n\n#main-container {\n    height: calc(100vh - 1vw - 50px);\n    display: flex;\n    gap: 2px;\n}\n\n#sidebar {\n    width: 280px;\n    background: #fafafa;\n    box-shadow: 1px 1px 1px 1px #c3c3c3;\n    padding: 25px;\n}\n\n#task-container {\n    flex-grow: 2;\n    display: flex;\n    justify-content: center;\n\n}\n\n.task-wrapper {\n    width: 80%;\n    padding: 6px;\n\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.sidebar-option {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    cursor: pointer;\n}\n\n#projects-heading {\n    font-size: calc(12px + 1vw);\n    border-bottom: 1px solid #cacaca;\n    margin-bottom: 10px;\n    padding-bottom: 4px;\n}\n\n#project-list {\n    margin-left: 15px;\n}\n\n\n\n.task-options {\n    display: flex;\n    flex-direction: column;\n}\n\n.task-container-option {\n    background-color: #eee;\n    padding: 10px;\n    margin: 5px;\n    border-radius: 4px;\n    border: 1px solid #acacac;\n    cursor: pointer;\n    outline: none;\n}\n\n.select-input-container {\n    align-self: center;\n    display: flex;\n    gap: 20px;\n}\n\n\n.status-options {\n    display: flex;\n    gap: 6px;\n}\n\n#task-list-container {\n    margin-top: 40px;\n    height: 65%;\n    border: 1px solid #dedede;\n    box-shadow: 1px 1px 1px 1px #fafafa;\n    padding: 8px;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 6px;\n    padding-top: 6px;\n}\n\n.left-task-container, .right-task-container {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\n.left-task-container {\n    flex-grow: 1;\n}\n\n#add-task {\n    padding: 8px;\n    cursor: pointer;\n}\n\n.task-menu {\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.task-important {\n    height: 18px;\n    align-self: flex-start;\n    cursor: pointer;\n}\n\n/* custom checkbox styles */\n/* The container */\n.check-container {\n    display: block;\n    position: relative;\n    padding-left: 14px;\n    margin-bottom: 24px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    /* border: 1px solid #000; */\n  }\n  \n  /* Hide the browser's default checkbox */\n.check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n  \n  /* Create a custom checkbox */\n.checkmark {\n    position: absolute;\n    top: 1px;\n    left: 3px;\n    height: 21px;\n    width: 21px;\n    background-color: #eee;\n    border: 1px solid #cdcdcd;\n    transition-duration: 400ms;\n}\n  \n  /* On mouse-over, add a grey background color */\n.check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n}\n  \n  /* When the checkbox is checked, add a blue background */\n.check-container input:checked ~ .checkmark {\n    background-color: #84cc16;\n    border: 1px solid #64a118;\n}\n  \n  /* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n  \n  /* Show the checkmark when checked */\n.check-container input:checked ~ .checkmark:after {\n    display: block;\n}\n  \n  /* Style the checkmark/indicator */\n.check-container .checkmark:after {\n    left: 6px;\n    top: 1px;\n    width: 4px;\n    height: 11px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate( \n45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate( \n45deg);\n}\n\n  /* End custom checkbox styles */\n\n/*start custom scrollbar */\n/* Works on Firefox */\n#task-list-container {\n    scrollbar-width: thin;\n    scrollbar-color: white #f44336;\n    overflow-y: auto;\n}\n  \n/* Works on Chrome, Edge, and Safari */\n#task-list-container::-webkit-scrollbar {\n    width: 10px;\n}\n\n#task-list-container::-webkit-scrollbar-track {\n    background: #f44336;\n    border-left: 1px solid #9f1717;\n}\n\n#task-list-container::-webkit-scrollbar-thumb {\n    background-color: white;\n}\n\n\n/* Start styles for form popup */\n.popup-overlay {\n    z-index: 99;\n    background: #00000085;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.popup-container {\n    margin-top: 80px;\n    background-color: white;\n    width: min(50vw, 400px);\n    padding: 20px;\n    border-radius: 6px;\n    position: relative;\n}\n\n/* end popup */\n\n.input-box {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n.input-box input {\n    font-size: calc(10px + 0.4vw);\n    padding: 2px;\n}\n\n.add-task-form, form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.normal-button {\n    padding: 8px;\n    cursor: pointer;\n}\n\n.add-task-form .normal-button, .edit-task-form .normal-button  {\n    align-self: center;\n}\n\n.close-popup {\n    position: absolute;\n    top: 2px;\n    right: 8px;\n    font-size: 20px;\n    font-weight: 600;\n    font-family: monospace, sans-serif;\n    cursor: pointer;\n}\n\n.input-box-checkbox {\n    display: flex;\n    gap: 4%;\n    align-items: center;\n}\n\n.input-box-checkbox input[type=\"checkbox\"]{\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n}\n\n/* Dropdown menu start */\n\n/* Dropdown Button */\n.dropbtn {\n    background-color: #04AA6D;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n  }\n  \n  /* The container <div> - needed to position the dropdown content */\n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  /* Dropdown Content (Hidden by Default) */\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 60px;\n    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);\n    z-index: 1;\n    right: 0;\n  }\n\n  /* style for dropdown options */\n.dropdown-option {\n    padding: 4px;\n    border-bottom: 1px solid #cbcbcb;\n    cursor: pointer;\n}\n\n.dropdown-option:hover {\n    background: #ffeebe;\n}\n\n  /* Links inside the dropdown */\n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  \n  /* Change color of dropdown links on hover */\n  .dropdown-content a:hover {background-color: #ddd;}\n  \n  /* Show the dropdown menu on hover */\n  .dropdown:hover .dropdown-content {display: block;}\n  \n  /* Change the background color of the dropdown button when the dropdown content is shown */\n  .dropdown:hover .dropbtn {background-color: #3e8e41;}\n\n  /* End dropdown */\n\n@keyframes hide {\n    0%   {\n        opacity: 100%;\n    }\n    100% {\n        opacity: 0%;\n        display: none;\n    }\n}\n\n@keyframes show {\n    0%   {\n        opacity: 0%;\n    }\n    100% {\n        opacity: 100%;\n        display: flex;\n    }\n}\n\n.projects {\n    padding: 0;\n    margin-left: 24px;\n    font-size: 18px;\n}\n\n.project-active {\n    list-style-image: url(\"./imgs/project-active.png\");\n}\n\n.project-inactive {\n    list-style-image: url(\"./imgs/project-inactive.png\");\n}\n\n.project {\n    margin-top: 10px;\n    cursor: pointer;\n}\n\n.add-project {\n    cursor: pointer;\n}\n\n#tab-name {\n    align-self: center;\n    font-size: calc(12px + 1vw);\n    font-weight: 600;\n    color: #404040;\n    font-family: sans-serif;\n}\n\n.project-options {\n    display: flex;\n    gap: 10px;\n}\n\n.project-options img {\n    visibility: hidden;\n}\n\n.project-name {\n    flex-grow: 1;\n}\n\n.projects-wrapper {\n    overflow: auto;\n    max-height: 70vh;\n    margin-top: 15px;\n}\n\n@media only screen and (max-width: 700px) {\n    #sidebar {\n        width: 100%;\n        min-height: 324px;\n    }\n\n    #main-container {\n        flex-direction: column;\n    }\n\n    .projects-wrapper {\n        max-height: 140px;\n    }\n    #add-task, .task-container-option {\n        padding: 4px;\n    }\n    .task-wrapper{\n        width: 100%;\n    }\n\n    .task-date {\n        font-size: 12px;\n    }\n    #task-list-container {\n        margin-top: 18px;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkIsT0FBTyxHQUFHLE9BQU8sMkZBQTJGLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxZQUFZLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxNQUFNLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxhQUFhLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksMEJBQTBCLGFBQWEsd0JBQXdCLGFBQWEsMEJBQTBCLGNBQWMsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFP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QUNBO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzRUFBUSxHQUFhLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQU8sQ0FBQyxtRUFBNkI7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQU8sQ0FBQywrREFBMkI7O0FBRTNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUU2RDs7Ozs7Ozs7Ozs7O0FDdlc3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTRDO0FBQ3BCOztBQUV4QiwyREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVzL3N0eWxlLmNzcz9lMTkxIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Jlcy9pbWdzLyBzeW5jIF5cXC5cXC8uKlxcLnBuZyQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1ncy9wcm9qZWN0LWFjdGl2ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvcHJvamVjdC1pbmFjdGl2ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1lcmllbmRhK09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlIDMgcGFyYWxsZWwgaG9yaXpvbnQgbWVudSBsaW5lcyAqL1xcbi5tZW51LWljb24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWljb24gPiAubGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjM2UwMDAwNjY7XFxufVxcbi5tZW51LWljb24gPiAubGluZSArIC5saW5lIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG4vKiBFbmQgc3R5bGUgMyBwYXJhbGxlbCBob3Jpem9udCBtZW51IGxpbmVzICovXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufSBcXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICM5OTFiMWI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBoZWlnaHQ6IGNhbGMoNTBweCArIDF2dyk7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMXZ3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNZXJpZW5kYSBPbmUnLCBjdXJzaXZlO1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxdncgLSA1MHB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggI2MzYzNjMztcXG4gICAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuI3Rhc2stY29udGFpbmVyIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnRhc2std3JhcHBlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDZweDtcXG5cXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5zaWRlYmFyLW9wdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdHMtaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYWNhY2E7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbiNwcm9qZWN0LWxpc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuXFxuXFxuLnRhc2stb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1vcHRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWNhY2FjO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWxlY3QtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcblxcbi5zdGF0dXMtb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNnB4O1xcbn1cXG5cXG4jdGFzay1saXN0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggI2ZhZmFmYTtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XFxuICAgIHBhZGRpbmctdG9wOiA2cHg7XFxufVxcblxcbi5sZWZ0LXRhc2stY29udGFpbmVyLCAucmlnaHQtdGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0LXRhc2stY29udGFpbmVyIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jYWRkLXRhc2sge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbWVudSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staW1wb3J0YW50IHtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGN1c3RvbSBjaGVja2JveCBzdHlsZXMgKi9cXG4vKiBUaGUgY29udGFpbmVyICovXFxuLmNoZWNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXFxuICB9XFxuICBcXG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxuLmNoZWNrLWNvbnRhaW5lciBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG4gIFxcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuLmNoZWNrbWFyayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcHg7XFxuICAgIGxlZnQ6IDNweDtcXG4gICAgaGVpZ2h0OiAyMXB4O1xcbiAgICB3aWR0aDogMjFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxufVxcbiAgXFxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cXG4uY2hlY2stY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcbiAgXFxuICAvKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cXG4uY2hlY2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0Y2MxNjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY0YTExODtcXG59XFxuICBcXG4gIC8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXFxuLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbiAgXFxuICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXFxuLmNoZWNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4gIFxcbiAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cXG4uY2hlY2stY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBsZWZ0OiA2cHg7XFxuICAgIHRvcDogMXB4O1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICBoZWlnaHQ6IDExcHg7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoIFxcbjQ1ZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoIFxcbjQ1ZGVnKTtcXG59XFxuXFxuICAvKiBFbmQgY3VzdG9tIGNoZWNrYm94IHN0eWxlcyAqL1xcblxcbi8qc3RhcnQgY3VzdG9tIHNjcm9sbGJhciAqL1xcbi8qIFdvcmtzIG9uIEZpcmVmb3ggKi9cXG4jdGFzay1saXN0LWNvbnRhaW5lciB7XFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB3aGl0ZSAjZjQ0MzM2O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4gIFxcbi8qIFdvcmtzIG9uIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSAqL1xcbiN0YXNrLWxpc3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4jdGFzay1saXN0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5ZjE3MTc7XFxufVxcblxcbiN0YXNrLWxpc3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4vKiBTdGFydCBzdHlsZXMgZm9yIGZvcm0gcG9wdXAgKi9cXG4ucG9wdXAtb3ZlcmxheSB7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwODU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogbWluKDUwdncsIDQwMHB4KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIGVuZCBwb3B1cCAqL1xcblxcbi5pbnB1dC1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLmlucHV0LWJveCBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMC40dncpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtLCBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubm9ybWFsLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSAubm9ybWFsLWJ1dHRvbiwgLmVkaXQtdGFzay1mb3JtIC5ub3JtYWwtYnV0dG9uICB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDJweDtcXG4gICAgcmlnaHQ6IDhweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbnB1dC1ib3gtY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDQlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtYm94LWNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRHJvcGRvd24gbWVudSBzdGFydCAqL1xcblxcbi8qIERyb3Bkb3duIEJ1dHRvbiAqL1xcbi5kcm9wYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xcbiAgLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIG1pbi13aWR0aDogNjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2IoMCAwIDAgLyAyMCUpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICByaWdodDogMDtcXG4gIH1cXG5cXG4gIC8qIHN0eWxlIGZvciBkcm9wZG93biBvcHRpb25zICovXFxuLmRyb3Bkb3duLW9wdGlvbiB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYmNiY2I7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRyb3Bkb3duLW9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmVlYmU7XFxufVxcblxcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxcbiAgXFxuICAvKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXFxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cXG4gIFxcbiAgLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBkcm9wZG93biBidXR0b24gd2hlbiB0aGUgZHJvcGRvd24gY29udGVudCBpcyBzaG93biAqL1xcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO31cXG5cXG4gIC8qIEVuZCBkcm9wZG93biAqL1xcblxcbkBrZXlmcmFtZXMgaGlkZSB7XFxuICAgIDAlICAge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNob3cge1xcbiAgICAwJSAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnByb2plY3QtYWN0aXZlIHtcXG4gICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuLnByb2plY3QtaW5hY3RpdmUge1xcbiAgICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFiLW5hbWUge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICM0MDQwNDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucHJvamVjdC1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1vcHRpb25zIGltZyB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnByb2plY3RzLXdyYXBwZXIge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgbWF4LWhlaWdodDogNzB2aDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICAjc2lkZWJhciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMyNHB4O1xcbiAgICB9XFxuXFxuICAgICNtYWluLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cy13cmFwcGVyIHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE0MHB4O1xcbiAgICB9XFxuICAgICNhZGQtdGFzaywgLnRhc2stY29udGFpbmVyLW9wdGlvbiB7XFxuICAgICAgICBwYWRkaW5nOiA0cHg7XFxuICAgIH1cXG4gICAgLnRhc2std3JhcHBlcntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWRhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuICAgICN0YXNrLWxpc3QtY29udGFpbmVyIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0EseUNBQXlDO0FBQ3pDO0lBQ0ksZUFBZTtB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RUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVyaWVuZGErT25lJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbi8qIHN0eWxlIDMgcGFyYWxsZWwgaG9yaXpvbnQgbWVudSBsaW5lcyAqL1xcbi5tZW51LWljb24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWljb24gPiAubGluZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjM2UwMDAwNjY7XFxufVxcbi5tZW51LWljb24gPiAubGluZSArIC5saW5lIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG4vKiBFbmQgc3R5bGUgMyBwYXJhbGxlbCBob3Jpem9udCBtZW51IGxpbmVzICovXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufSBcXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICM5OTFiMWI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBoZWlnaHQ6IGNhbGMoNTBweCArIDF2dyk7XFxufVxcblxcbiNsb2dvIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgMXZ3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdNZXJpZW5kYSBPbmUnLCBjdXJzaXZlO1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxdncgLSA1MHB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggI2MzYzNjMztcXG4gICAgcGFkZGluZzogMjVweDtcXG59XFxuXFxuI3Rhc2stY29udGFpbmVyIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLnRhc2std3JhcHBlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDZweDtcXG5cXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5zaWRlYmFyLW9wdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdHMtaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYWNhY2E7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbiNwcm9qZWN0LWxpc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuXFxuXFxuLnRhc2stb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci1vcHRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWNhY2FjO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zZWxlY3QtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcblxcbi5zdGF0dXMtb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNnB4O1xcbn1cXG5cXG4jdGFzay1saXN0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggI2ZhZmFmYTtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XFxuICAgIHBhZGRpbmctdG9wOiA2cHg7XFxufVxcblxcbi5sZWZ0LXRhc2stY29udGFpbmVyLCAucmlnaHQtdGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0LXRhc2stY29udGFpbmVyIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jYWRkLXRhc2sge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbWVudSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staW1wb3J0YW50IHtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGN1c3RvbSBjaGVja2JveCBzdHlsZXMgKi9cXG4vKiBUaGUgY29udGFpbmVyICovXFxuLmNoZWNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXFxuICB9XFxuICBcXG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxuLmNoZWNrLWNvbnRhaW5lciBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG4gIFxcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuLmNoZWNrbWFyayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcHg7XFxuICAgIGxlZnQ6IDNweDtcXG4gICAgaGVpZ2h0OiAyMXB4O1xcbiAgICB3aWR0aDogMjFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxufVxcbiAgXFxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cXG4uY2hlY2stY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcbiAgXFxuICAvKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cXG4uY2hlY2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0Y2MxNjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY0YTExODtcXG59XFxuICBcXG4gIC8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXFxuLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbiAgXFxuICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXFxuLmNoZWNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4gIFxcbiAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cXG4uY2hlY2stY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBsZWZ0OiA2cHg7XFxuICAgIHRvcDogMXB4O1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICBoZWlnaHQ6IDExcHg7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoIFxcbjQ1ZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoIFxcbjQ1ZGVnKTtcXG59XFxuXFxuICAvKiBFbmQgY3VzdG9tIGNoZWNrYm94IHN0eWxlcyAqL1xcblxcbi8qc3RhcnQgY3VzdG9tIHNjcm9sbGJhciAqL1xcbi8qIFdvcmtzIG9uIEZpcmVmb3ggKi9cXG4jdGFzay1saXN0LWNvbnRhaW5lciB7XFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB3aGl0ZSAjZjQ0MzM2O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4gIFxcbi8qIFdvcmtzIG9uIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSAqL1xcbiN0YXNrLWxpc3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4jdGFzay1saXN0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5ZjE3MTc7XFxufVxcblxcbiN0YXNrLWxpc3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4vKiBTdGFydCBzdHlsZXMgZm9yIGZvcm0gcG9wdXAgKi9cXG4ucG9wdXAtb3ZlcmxheSB7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwODU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogbWluKDUwdncsIDQwMHB4KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIGVuZCBwb3B1cCAqL1xcblxcbi5pbnB1dC1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLmlucHV0LWJveCBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMC40dncpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtLCBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubm9ybWFsLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSAubm9ybWFsLWJ1dHRvbiwgLmVkaXQtdGFzay1mb3JtIC5ub3JtYWwtYnV0dG9uICB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDJweDtcXG4gICAgcmlnaHQ6IDhweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbnB1dC1ib3gtY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDQlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtYm94LWNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRHJvcGRvd24gbWVudSBzdGFydCAqL1xcblxcbi8qIERyb3Bkb3duIEJ1dHRvbiAqL1xcbi5kcm9wYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xcbiAgLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIG1pbi13aWR0aDogNjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2IoMCAwIDAgLyAyMCUpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICByaWdodDogMDtcXG4gIH1cXG5cXG4gIC8qIHN0eWxlIGZvciBkcm9wZG93biBvcHRpb25zICovXFxuLmRyb3Bkb3duLW9wdGlvbiB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYmNiY2I7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRyb3Bkb3duLW9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmVlYmU7XFxufVxcblxcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxcbiAgXFxuICAvKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXFxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cXG4gIFxcbiAgLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBkcm9wZG93biBidXR0b24gd2hlbiB0aGUgZHJvcGRvd24gY29udGVudCBpcyBzaG93biAqL1xcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO31cXG5cXG4gIC8qIEVuZCBkcm9wZG93biAqL1xcblxcbkBrZXlmcmFtZXMgaGlkZSB7XFxuICAgIDAlICAge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNob3cge1xcbiAgICAwJSAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnByb2plY3QtYWN0aXZlIHtcXG4gICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFxcXCIuL2ltZ3MvcHJvamVjdC1hY3RpdmUucG5nXFxcIik7XFxufVxcblxcbi5wcm9qZWN0LWluYWN0aXZlIHtcXG4gICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFxcXCIuL2ltZ3MvcHJvamVjdC1pbmFjdGl2ZS5wbmdcXFwiKTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RhYi1uYW1lIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDF2dyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjNDA0MDQwO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLnByb2plY3Qtb3B0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3Qtb3B0aW9ucyBpbWcge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5wcm9qZWN0cy13cmFwcGVyIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gICAgI3NpZGViYXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzMjRweDtcXG4gICAgfVxcblxcbiAgICAjbWFpbi1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdHMtd3JhcHBlciB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxNDBweDtcXG4gICAgfVxcbiAgICAjYWRkLXRhc2ssIC50YXNrLWNvbnRhaW5lci1vcHRpb24ge1xcbiAgICAgICAgcGFkZGluZzogNHB4O1xcbiAgICB9XFxuICAgIC50YXNrLXdyYXBwZXJ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAudGFzay1kYXRlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcbiAgICAjdGFzay1saXN0LWNvbnRhaW5lciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgbWVudUljb24gPSBnZW5lcmF0ZU1lbnVMaW5lcygpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51SWNvbik7XG5cbiAgICBjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nb1RleHQuaWQgPSBcImxvZ29cIjtcbiAgICBsb2dvVGV4dC50ZXh0Q29udGVudCA9IFwiTXlUb0RvXCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29UZXh0KTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTWVudUxpbmVzKCl7XG4gICAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJY29uLmNsYXNzTGlzdCA9IFwibWVudS1pY29uXCI7XG5cbiAgICBmb3IobGV0IGk9MDsgaSA8IDM7IGkrKyl7XG4gICAgICAgIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGxpbmUuY2xhc3NMaXN0ID0gXCJsaW5lXCI7XG4gICAgICAgIG1lbnVJY29uLmFwcGVuZENoaWxkKGxpbmUpO1xuICAgIH1cbiAgICByZXR1cm4gbWVudUljb247XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU2lkZWJhck9wdGlvbih0aXRsZSkgeyAvL2N1cnJlbnRseSBjcmVhdGluZyBhIHNlcGVyYXRlIGZ1bmN0aW9uIGZvciB0aGUgc2lkZWJhciBvcHRpb25zXG4gICAgY29uc3Qgb3B0aW9uSWQgPSB0aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoXCIgXCIsIFwiLVwiKTtcbiAgICBcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG9wdGlvbi5jbGFzc0xpc3QgPSBcInNpZGViYXItb3B0aW9uXCI7XG4gICAgb3B0aW9uLmlkID0gb3B0aW9uSWQ7XG4gICAgY29uc3Qgb3B0aW9uSW1nID0gbmV3IEltYWdlKCk7XG4gICAgb3B0aW9uSW1nLnNyYyA9IHJlcXVpcmUoYC4uL3Jlcy9pbWdzLyR7b3B0aW9uSWR9LnBuZ2ApO1xuICAgIG9wdGlvbkltZy5hbHQgPSB0aXRsZStcIiBpY29uXCI7XG4gICAgXG4gICAgY29uc3Qgb3B0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBvcHRpb25UaXRsZS5jbGFzcyA9IFwib3B0aW9uLXRpdGxlXCI7XG4gICAgb3B0aW9uVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIG9wdGlvbi5hcHBlbmRDaGlsZChvcHRpb25JbWcpO1xuICAgIG9wdGlvbi5hcHBlbmRDaGlsZChvcHRpb25UaXRsZSk7XG4gICAgXG4gICAgcmV0dXJuIG9wdGlvbjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0Q29udGFpbmVyKCl7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiXG4gICAgdGl0bGUuaWQgPSBcInByb2plY3RzLWhlYWRpbmdcIjtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0TGlzdC5pZCA9IFwicHJvamVjdC1saXN0XCI7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdCA9IFwiYWRkLXByb2plY3Qgc2lkZWJhci1vcHRpb25cIjtcbiAgICBjb25zdCBhZGRQcm9qZWN0SW1nID0gbmV3IEltYWdlKCk7XG4gICAgYWRkUHJvamVjdEltZy5zcmMgPSByZXF1aXJlKFwiLi4vcmVzL2ltZ3MvYWRkLXByb2plY3QucG5nXCIpXG4gICAgYWRkUHJvamVjdEltZy5hbHQgPSBcImFkZCBwcm9qZWN0IGljb25cIlxuICAgIGNvbnN0IGFkZFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGFkZFByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcblxuICAgIGNvbnN0IHByb2plY3RzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNXcmFwcGVyLmNsYXNzTGlzdCA9IFwicHJvamVjdHMtd3JhcHBlclwiO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgcHJvamVjdHMuY2xhc3NMaXN0ID0gXCJwcm9qZWN0c1wiO1xuXG4gICAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0SW1nKTtcbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RUaXRsZSk7XG5cbiAgICBwcm9qZWN0c1dyYXBwZXIuYXBwZW5kKHByb2plY3RzKVxuICAgIHByb2plY3RMaXN0LmFwcGVuZChhZGRQcm9qZWN0LCBwcm9qZWN0c1dyYXBwZXIpO1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG5cbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xuXG4gICAgY29uc3Qgc2hvd0FsbE9wdGlvbiA9IGdlbmVyYXRlU2lkZWJhck9wdGlvbihcIlNob3cgQWxsXCIpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2hvd0FsbE9wdGlvbilcblxuICAgIGNvbnN0IGZhdk9wdGlvbiA9IGdlbmVyYXRlU2lkZWJhck9wdGlvbihcIkZhdm91cml0ZVwiKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGZhdk9wdGlvbilcblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBnZW5lcmF0ZVByb2plY3RDb250YWluZXIoKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpXG5cblxuICAgIHJldHVybiBzaWRlYmFyO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVdoZW5PcHRpb25Db250YWluZXIoLi4ub3B0aW9ucyl7XG4gICAgY29uc3Qgd2hlbk9wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgd2hlbk9wdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QgPSBcIndoZW4tb3B0aW9ucyB0YXNrLWNvbnRhaW5lci1vcHRpb25cIjtcblxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbkRpdi52YWx1ZSA9IG9wdGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBvcHRpb25EaXYudGV4dENvbnRlbnQgPSBvcHRpb247XG4gICAgICAgIHdoZW5PcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uRGl2KTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIHdoZW5PcHRpb25Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU3RhdHVzT3B0aW9uQ29udGFpbmVyKC4uLm9wdGlvbnMpe1xuICAgIC8qXG4gICAgY29uc3Qgc3RhdHVzT3B0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgc3RhdHVzT3B0aW9uTGFiZWwuZm9yID0gXCJzdGF0dXMtb3B0aW9uXCI7XG4gICAgc3RhdHVzT3B0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIlN0YXR1czpcIlxuICAgICovXG5cbiAgICBjb25zdCBzdGF0dXNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHN0YXR1c09wdGlvbi5jbGFzc0xpc3QgPSBcInN0YXR1cy1vcHRpb24gdGFzay1jb250YWluZXItb3B0aW9uXCI7XG5cbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb25EaXYudmFsdWUgPSBvcHRpb24udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgb3B0aW9uRGl2LnRleHRDb250ZW50ID0gb3B0aW9uO1xuICAgICAgICBzdGF0dXNPcHRpb24uYXBwZW5kQ2hpbGQob3B0aW9uRGl2KTtcbiAgICB9KVxuXG4gICAgLy9zdGF0dXNPcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdHVzT3B0aW9uTGFiZWwpO1xuXG4gICAgcmV0dXJuIHN0YXR1c09wdGlvbjtcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhc2tPcHRpb25Db250YWluZXIoKXtcbiAgICBjb25zdCB0YXNrT3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrT3B0aW9uQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwidGFzay1vcHRpb25zXCI7XG4gICAgXG4gICAgY29uc3Qgc2VsZWN0Qm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWxlY3RCb3hDb250YWluZXIuY2xhc3NOYW1lID0gXCJzZWxlY3QtaW5wdXQtY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB3aGVuT3B0aW9uQ29udGFpbmVyID0gZ2VuZXJhdGVXaGVuT3B0aW9uQ29udGFpbmVyKFwiVXBjb21pbmdcIiwgXCJUb2RheVwiLCBcIlBhc3RcIik7XG5cbiAgICBjb25zdCBzdGF0dXNPcHRpb25Db250YWluZXIgPSBnZW5lcmF0ZVN0YXR1c09wdGlvbkNvbnRhaW5lcihcIlVuZmluaXNoZWRcIiwgXCJBbGxcIiwgXCJDb21wbGV0ZWRcIik7XG5cbiAgICBzZWxlY3RCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQod2hlbk9wdGlvbkNvbnRhaW5lcik7XG4gICAgc2VsZWN0Qm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXR1c09wdGlvbkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnV0dG9uLmlkID0gXCJhZGQtdGFza1wiXG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiKyBBZGQgVGFza1wiO1xuXG4gICAgY29uc3Qgc2Vjb25kT3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWNvbmRPcHRpb25Db250YWluZXIuY2xhc3NOYW1lID0gXCJzZWNvbmQtb3B0aW9uLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgdGFiTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFiTmFtZS5pZCA9IFwidGFiLW5hbWVcIjtcblxuICAgIHRhc2tPcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0Qm94Q29udGFpbmVyKTtcbiAgICBzZWNvbmRPcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG4gICAgdGFza09wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRPcHRpb25Db250YWluZXIpO1xuICAgIHRhc2tPcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGFiTmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIHRhc2tPcHRpb25Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFza0xpc3RDb250YWluZXIoKXtcbiAgICBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0xpc3RDb250YWluZXIuaWQgPSBcInRhc2stbGlzdC1jb250YWluZXJcIjtcbiAgICBcbiAgICByZXR1cm4gdGFza0xpc3RDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGVtb1Rhc2tEaXYodGl0bGUsIGRhdGUpe1xuXG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rpdi5jbGFzc05hbWUgPSBcInRhc2tcIjtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1RpdGxlLmNsYXNzTmFtZSA9IFwidGFzay10aWxlXCI7XG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICAvL0N1c3RvbSBjaGVja2JveFxuICAgIGNvbnN0IHRhc2tTdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrU3RhdHVzTGFiZWwuY2xhc3NOYW1lID0gXCJjaGVjay1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza1N0YXR1cy50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHRhc2tTdGF0dXMuY2xhc3NMaXN0ID0gXCJ0YXNrLXN0YXR1cyBjaGVja2JveFwiO1xuXG4gICAgY29uc3QgdGFza1N0YXR1c0NoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRhc2tTdGF0dXNDaGVja21hcmsuY2xhc3NOYW1lID0gXCJjaGVja21hcmtcIjtcblxuICAgIHRhc2tTdGF0dXNMYWJlbC5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKTtcbiAgICB0YXNrU3RhdHVzTGFiZWwuYXBwZW5kQ2hpbGQodGFza1N0YXR1c0NoZWNrbWFyayk7XG5cbiAgICAvL2N1c3RvbSBjaGVja2JveCBlbmRcblxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGF0ZS5jbGFzc05hbWUgPSBcInRhc2stZGF0ZVwiO1xuICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcblxuICAgIGNvbnN0IHRhc2tJbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHRhc2tJbXBvcnRhbnQuY2xhc3NOYW1lID0gXCJ0YXNrLWltcG9ydGFudFwiO1xuICAgIHRhc2tJbXBvcnRhbnQuc3JjID0gcmVxdWlyZShcIi4uL3Jlcy9pbWdzL3N0YXItaWNvbi5wbmdcIik7XG5cbiAgICBjb25zdCB0YXNrT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza09wdGlvbnMuY2xhc3NOYW1lID0gXCJ0YXNrLW1lbnVcIjtcbiAgICB0YXNrT3B0aW9ucy50ZXh0Q29udGVudCA9IFwi4ouuXCI7XG5cbiAgICBjb25zdCBsZWZ0VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVmdFRhc2tDb250YWluZXIuY2xhc3NOYW1lID0gXCJsZWZ0LXRhc2stY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCByaWdodFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJpZ2h0VGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInJpZ2h0LXRhc2stY29udGFpbmVyXCI7XG5cbiAgICBsZWZ0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzTGFiZWwpO1xuICAgIGxlZnRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgcmlnaHRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICByaWdodFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0ltcG9ydGFudCk7XG4gICAgcmlnaHRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tPcHRpb25zKTtcblxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQobGVmdFRhc2tDb250YWluZXIpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQocmlnaHRUYXNrQ29udGFpbmVyKTtcblxuICAgIHJldHVybiB0YXNrRGl2O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhc2tDb250YWluZXIoKSB7XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmlkID0gXCJ0YXNrLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tXcmFwcGVyLmNsYXNzTmFtZSA9IFwidGFzay13cmFwcGVyXCI7XG5cbiAgICBjb25zdCB0YXNrT3B0aW9uQ29udGFpbmVyID0gZ2VuZXJhdGVUYXNrT3B0aW9uQ29udGFpbmVyKCk7ICBcbiAgICBjb25zdCB0YXNrTGlzdENvbnRhaW5lciA9IGdlbmVyYXRlVGFza0xpc3RDb250YWluZXIoKTtcblxuICAgIGNvbnN0IHRhc2tEZW1vRGl2ID0gZ2VuZXJhdGVEZW1vVGFza0RpdihcIkRvIDQgcHVzaCB1cHNcIiwgXCIxMi8wNi8yMDIyXCIpO1xuICAgIHRhc2tMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZW1vRGl2KTtcblxuICAgIHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tPcHRpb25Db250YWluZXIpO1xuICAgIHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tMaXN0Q29udGFpbmVyKTtcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpO1xuXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFza0Zvcm1JbnB1dChuYW1lLCBsYWJlbCwgdHlwZSwgcmVxdWlyZWQ9ZmFsc2Upe1xuICAgIFxuICAgIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnB1dERpdi5jbGFzc05hbWUgPSBcImlucHV0LWJveFwiO1xuXG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBpbnB1dExhYmVsLmZvciA9IG5hbWU7XG4gICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xuXG4gICAgbGV0IG15SW5wdXQ7XG5cblxuICAgIGlmICh0eXBlID09PSBcInRleHRhcmVhXCIpICB7XG4gICAgICAgIG15SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImNoZWNrYm94XCIpICB7XG4gICAgICAgIG15SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0RGl2LmNsYXNzTmFtZSA9IFwiaW5wdXQtYm94LWNoZWNrYm94XCI7XG4gICAgICAgIG15SW5wdXQudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBteUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBteUlucHV0LnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBteUlucHV0Lm5hbWUgPSBuYW1lO1xuICAgIG15SW5wdXQuaWQgPSBuYW1lO1xuICAgIGlmIChyZXF1aXJlZCl7XG4gICAgICAgIG15SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlucHV0RGl2LmFwcGVuZChpbnB1dExhYmVsLCBteUlucHV0KTtcbiAgICByZXR1cm4gaW5wdXREaXY7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQWRkVGFza0Zvcm0oKXtcbiAgICBcbiAgICBjb25zdCBteUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBteUZvcm0uY2xhc3NOYW1lID0gXCJhZGQtdGFzay1mb3JtXCI7XG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSBnZW5lcmF0ZVRhc2tGb3JtSW5wdXQoXCJ0YXNrLXRpdGxlXCIsIFwiVGl0bGVcIiwgXCJ0ZXh0XCIsIHRydWUpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZ2VuZXJhdGVUYXNrRm9ybUlucHV0KFwidGFzay1kdWUtZGF0ZVwiLCBcIkR1ZSBEYXRlXCIsIFwiZGF0ZVwiLCB0cnVlKTtcbiAgICBjb25zdCB0YXNrSW1wb3J0YW50ID0gZ2VuZXJhdGVUYXNrRm9ybUlucHV0KFwidGFzay1pbXBvcnRhbnRcIiwgXCJJcyBJbXBvcnRhbnQ/XCIsIFwiY2hlY2tib3hcIik7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZ2VuZXJhdGVUYXNrRm9ybUlucHV0KFwidGFzay1kZXNjcmlwdGlvblwiLCBcIkRlc2NyaXB0aW9uXCIsIFwidGV4dGFyZWFcIik7XG4gICAgXG4gICAgY29uc3Qgc3VibWl0QnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdXQuY2xhc3NOYW1lID0gXCJub3JtYWwtYnV0dG9uXCI7XG4gICAgc3VibWl0QnV0LnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuXG4gICAgbXlGb3JtLmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tEdWVEYXRlLCB0YXNrSW1wb3J0YW50LCB0YXNrRGVzY3JpcHRpb24sIHN1Ym1pdEJ1dCk7XG5cbiAgICByZXR1cm4gbXlGb3JtO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUVkaXRUYXNrRm9ybSgpe1xuICAgIFxuICAgIGNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIG15Rm9ybS5jbGFzc05hbWUgPSBcImVkaXQtdGFzay1mb3JtXCI7XG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSBnZW5lcmF0ZVRhc2tGb3JtSW5wdXQoXCJ0YXNrLXRpdGxlXCIsIFwiVGl0bGVcIiwgXCJ0ZXh0XCIsIHRydWUpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZ2VuZXJhdGVUYXNrRm9ybUlucHV0KFwidGFzay1kdWUtZGF0ZVwiLCBcIkR1ZSBEYXRlXCIsIFwiZGF0ZVwiLCB0cnVlKTtcbiAgICBjb25zdCB0YXNrSW1wb3J0YW50ID0gZ2VuZXJhdGVUYXNrRm9ybUlucHV0KFwidGFzay1pbXBvcnRhbnRcIiwgXCJJcyBJbXBvcnRhbnQ/XCIsIFwiY2hlY2tib3hcIik7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZ2VuZXJhdGVUYXNrRm9ybUlucHV0KFwidGFzay1kZXNjcmlwdGlvblwiLCBcIkRlc2NyaXB0aW9uXCIsIFwidGV4dGFyZWFcIik7XG4gICAgXG4gICAgY29uc3Qgc3VibWl0QnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdXQuY2xhc3NOYW1lID0gXCJub3JtYWwtYnV0dG9uXCI7XG4gICAgc3VibWl0QnV0LnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuXG4gICAgbXlGb3JtLmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tEdWVEYXRlLCB0YXNrSW1wb3J0YW50LCB0YXNrRGVzY3JpcHRpb24sIHN1Ym1pdEJ1dCk7XG5cbiAgICByZXR1cm4gbXlGb3JtO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVBvcHVwKCl7XG4gICAgY29uc3QgcG9wdXBPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwb3B1cE92ZXJsYXkuY2xhc3NOYW1lID0gXCJwb3B1cC1vdmVybGF5XCI7XG4gICAgcG9wdXBPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwb3B1cENvbnRhaW5lci5jbGFzc05hbWUgPSBcInBvcHVwLWNvbnRhaW5lclwiO1xuXG4gICAgcG9wdXBPdmVybGF5LmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBwb3B1cE92ZXJsYXk7XG59XG5cbmNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IGhlYWRlciA9IGdlbmVyYXRlSGVhZGVyKCk7XG5cbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQ29udGFpbmVyLmlkID0gXCJtYWluLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3Qgc2lkZWJhciA9IGdlbmVyYXRlU2lkZWJhcigpO1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBnZW5lcmF0ZVRhc2tDb250YWluZXIoKTtcbiAgICBjb25zdCBwb3B1cCA9IGdlbmVyYXRlUG9wdXAoKTtcblxuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChwb3B1cClcblxufVxuXG5leHBvcnQgeyBsb2FkUGFnZSwgZ2VuZXJhdGVBZGRUYXNrRm9ybSwgZ2VuZXJhdGVFZGl0VGFza0Zvcm19XG5cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZGQtcHJvamVjdC5wbmdcIjogXCIuL3NyYy9yZXMvaW1ncy9hZGQtcHJvamVjdC5wbmdcIixcblx0XCIuL2RlbGV0ZS1wcm9qZWN0LnBuZ1wiOiBcIi4vc3JjL3Jlcy9pbWdzL2RlbGV0ZS1wcm9qZWN0LnBuZ1wiLFxuXHRcIi4vZWRpdC1wcm9qZWN0LnBuZ1wiOiBcIi4vc3JjL3Jlcy9pbWdzL2VkaXQtcHJvamVjdC5wbmdcIixcblx0XCIuL2Zhdm91cml0ZS5wbmdcIjogXCIuL3NyYy9yZXMvaW1ncy9mYXZvdXJpdGUucG5nXCIsXG5cdFwiLi9wcm9qZWN0LWFjdGl2ZS5wbmdcIjogXCIuL3NyYy9yZXMvaW1ncy9wcm9qZWN0LWFjdGl2ZS5wbmdcIixcblx0XCIuL3Byb2plY3QtaW5hY3RpdmUucG5nXCI6IFwiLi9zcmMvcmVzL2ltZ3MvcHJvamVjdC1pbmFjdGl2ZS5wbmdcIixcblx0XCIuL3Byb2plY3RzLnBuZ1wiOiBcIi4vc3JjL3Jlcy9pbWdzL3Byb2plY3RzLnBuZ1wiLFxuXHRcIi4vc2hvdy1hbGwucG5nXCI6IFwiLi9zcmMvcmVzL2ltZ3Mvc2hvdy1hbGwucG5nXCIsXG5cdFwiLi9zdGFyLWljb24ucG5nXCI6IFwiLi9zcmMvcmVzL2ltZ3Mvc3Rhci1pY29uLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9yZXMvaW1ncyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5wbmckXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7bG9hZFBhZ2V9IGZyb20gXCIuL21vZHVsZXMvbG9hZFBhZ2VcIjtcbmltcG9ydCBcIi4vcmVzL3N0eWxlLmNzc1wiXG5cbmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=