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
___CSS_LOADER_EXPORT___.push([module.id, "/* style 3 parallel horizont menu lines */\n.menu-icon {\n    cursor: pointer;\n}\n\n.menu-icon > .line {\n    background-color: #ffffff;\n    height: 3px;\n    display: block;\n    width: 30px;\n    box-shadow: 1px 1px 1px 1px #3e000066;\n}\n.menu-icon > .line + .line {\n    margin-top: 8px;\n}\n/* End style 3 parallel horizont menu lines */\n\n* {\n    box-sizing: border-box;\n} \n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    background: #991b1b;\n    color: #fff;\n    height: calc(50px + 1vw);\n}\n\n#logo {\n    flex-grow: 2;\n    text-align: center;\n    font-size: calc(15px + 1vw);\n    font-weight: 700;\n    font-family: 'Merienda One', cursive;\n}\n\n#main-container {\n    height: calc(100vh - 1vw - 50px);\n    display: flex;\n    gap: 2px;\n}\n\n#sidebar {\n    width: 280px;\n    background: #fafafa;\n    box-shadow: 1px 1px 1px 1px #c3c3c3;\n    padding: 25px;\n}\n\n#task-container {\n    flex-grow: 2;\n    display: flex;\n    justify-content: center;\n\n}\n\n.task-wrapper {\n    width: 80%;\n    padding: 6px;\n\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.sidebar-option {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    cursor: pointer;\n}\n\n#projects-heading {\n    font-size: 24px;\n    border-bottom: 1px solid #cacaca;\n    margin-bottom: 10px;\n    padding-bottom: 4px;\n}\n\n#project-list {\n    margin-left: 15px;\n}\n\n\n\n.task-options {\n    display: flex;\n    flex-direction: column;\n}\n\n.task-container-option {\n    background-color: #eee;\n    padding: 10px;\n    margin: 5px;\n    border-radius: 4px;\n    border: 1px solid #acacac;\n    cursor: pointer;\n    outline: none;\n}\n\n.select-input-container {\n    align-self: center;\n    display: flex;\n    gap: 20px;\n}\n\n\n.status-options {\n    display: flex;\n    gap: 6px;\n}\n\n#task-list-container {\n    margin-top: 40px;\n    height: 65%;\n    border: 1px solid #dedede;\n    box-shadow: 1px 1px 1px 1px #fafafa;\n    padding: 8px;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 6px;\n    padding-top: 6px;\n}\n\n.left-task-container, .right-task-container {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\n#add-task {\n    padding: 8px;\n    cursor: pointer;\n}\n\n.task-menu {\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.task-important {\n    height: 18px;\n    align-self: flex-start;\n    cursor: pointer;\n}\n\n/* custom checkbox styles */\n/* The container */\n.check-container {\n    display: block;\n    position: relative;\n    padding-left: 14px;\n    margin-bottom: 24px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    /* border: 1px solid #000; */\n  }\n  \n  /* Hide the browser's default checkbox */\n.check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n  \n  /* Create a custom checkbox */\n.checkmark {\n    position: absolute;\n    top: 1px;\n    left: 3px;\n    height: 21px;\n    width: 21px;\n    background-color: #eee;\n    border: 1px solid #cdcdcd;\n    transition-duration: 400ms;\n}\n  \n  /* On mouse-over, add a grey background color */\n.check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n}\n  \n  /* When the checkbox is checked, add a blue background */\n.check-container input:checked ~ .checkmark {\n    background-color: #84cc16;\n    border: 1px solid #64a118;\n}\n  \n  /* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n  \n  /* Show the checkmark when checked */\n.check-container input:checked ~ .checkmark:after {\n    display: block;\n}\n  \n  /* Style the checkmark/indicator */\n.check-container .checkmark:after {\n    left: 6px;\n    top: 1px;\n    width: 4px;\n    height: 11px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate( \n45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate( \n45deg);\n}\n\n  /* End custom checkbox styles */\n\n/*start custom scrollbar */\n/* Works on Firefox */\n#task-list-container {\n    scrollbar-width: thin;\n    scrollbar-color: white #f44336;\n    overflow-y: auto;\n}\n  \n/* Works on Chrome, Edge, and Safari */\n#task-list-container::-webkit-scrollbar {\n    width: 10px;\n}\n\n#task-list-container::-webkit-scrollbar-track {\n    background: #f44336;\n    border-left: 1px solid #9f1717;\n}\n\n#task-list-container::-webkit-scrollbar-thumb {\n    background-color: white;\n}\n\n\n/* Start styles for form popup */\n.popup-overlay {\n    z-index: 99;\n    background: #00000085;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.popup-container {\n    margin-top: 80px;\n    background-color: white;\n    width: min(50vw, 400px);\n    padding: 20px;\n    border-radius: 6px;\n    position: relative;\n}\n\n/* end popup */\n\n.input-box {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n.input-box input {\n    font-size: calc(10px + 0.4vw);\n    padding: 2px;\n}\n\n.add-task-form, form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.normal-button {\n    padding: 8px;\n    cursor: pointer;\n}\n\n.add-task-form .normal-button, .edit-task-form .normal-button  {\n    align-self: center;\n}\n\n.close-popup {\n    position: absolute;\n    top: 2px;\n    right: 8px;\n    font-size: 20px;\n    font-weight: 600;\n    font-family: monospace, sans-serif;\n    cursor: pointer;\n}\n\n.input-box-checkbox {\n    display: flex;\n    gap: 4%;\n    align-items: center;\n}\n\n.input-box-checkbox input[type=\"checkbox\"]{\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n}\n\n/* Dropdown menu start */\n\n/* Dropdown Button */\n.dropbtn {\n    background-color: #04AA6D;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n  }\n  \n  /* The container <div> - needed to position the dropdown content */\n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  /* Dropdown Content (Hidden by Default) */\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 60px;\n    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);\n    z-index: 1;\n    right: 0;\n  }\n\n  /* style for dropdown options */\n.dropdown-option {\n    padding: 4px;\n    border-bottom: 1px solid #cbcbcb;\n    cursor: pointer;\n}\n\n.dropdown-option:hover {\n    background: #ffeebe;\n}\n\n  /* Links inside the dropdown */\n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  \n  /* Change color of dropdown links on hover */\n  .dropdown-content a:hover {background-color: #ddd;}\n  \n  /* Show the dropdown menu on hover */\n  .dropdown:hover .dropdown-content {display: block;}\n  \n  /* Change the background color of the dropdown button when the dropdown content is shown */\n  .dropdown:hover .dropbtn {background-color: #3e8e41;}\n\n  /* End dropdown */\n\n@keyframes hide {\n    0%   {\n        opacity: 100%;\n    }\n    100% {\n        opacity: 0%;\n        display: none;\n    }\n}\n\n@keyframes show {\n    0%   {\n        opacity: 0%;\n    }\n    100% {\n        opacity: 100%;\n        display: flex;\n    }\n}\n\n.projects {\n    padding: 0;\n    margin-left: 24px;\n    font-size: 18px;\n}\n\n.project-active {\n    list-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.project-inactive {\n    list-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.project {\n    margin-top: 10px;\n    cursor: pointer;\n}\n\n.add-project {\n    cursor: pointer;\n}\n\n#tab-name {\n    align-self: center;\n    font-size: calc(12px + 1vw);\n    font-weight: 600;\n    color: #404040;\n    font-family: sans-serif;\n}\n\n.project-options {\n    display: flex;\n    gap: 10px;\n}\n\n.project-options img {\n    visibility: hidden;\n}\n\n.project-name {\n    flex-grow: 1;\n}", "",{"version":3,"sources":["webpack://./src/res/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Merienda+One&display=swap');\n\n\n/* style 3 parallel horizont menu lines */\n.menu-icon {\n    cursor: pointer;\n}\n\n.menu-icon > .line {\n    background-color: #ffffff;\n    height: 3px;\n    display: block;\n    width: 30px;\n    box-shadow: 1px 1px 1px 1px #3e000066;\n}\n.menu-icon > .line + .line {\n    margin-top: 8px;\n}\n/* End style 3 parallel horizont menu lines */\n\n* {\n    box-sizing: border-box;\n} \n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n}\n\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    background: #991b1b;\n    color: #fff;\n    height: calc(50px + 1vw);\n}\n\n#logo {\n    flex-grow: 2;\n    text-align: center;\n    font-size: calc(15px + 1vw);\n    font-weight: 700;\n    font-family: 'Merienda One', cursive;\n}\n\n#main-container {\n    height: calc(100vh - 1vw - 50px);\n    display: flex;\n    gap: 2px;\n}\n\n#sidebar {\n    width: 280px;\n    background: #fafafa;\n    box-shadow: 1px 1px 1px 1px #c3c3c3;\n    padding: 25px;\n}\n\n#task-container {\n    flex-grow: 2;\n    display: flex;\n    justify-content: center;\n\n}\n\n.task-wrapper {\n    width: 80%;\n    padding: 6px;\n\n}\n\n#sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.sidebar-option {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    cursor: pointer;\n}\n\n#projects-heading {\n    font-size: 24px;\n    border-bottom: 1px solid #cacaca;\n    margin-bottom: 10px;\n    padding-bottom: 4px;\n}\n\n#project-list {\n    margin-left: 15px;\n}\n\n\n\n.task-options {\n    display: flex;\n    flex-direction: column;\n}\n\n.task-container-option {\n    background-color: #eee;\n    padding: 10px;\n    margin: 5px;\n    border-radius: 4px;\n    border: 1px solid #acacac;\n    cursor: pointer;\n    outline: none;\n}\n\n.select-input-container {\n    align-self: center;\n    display: flex;\n    gap: 20px;\n}\n\n\n.status-options {\n    display: flex;\n    gap: 6px;\n}\n\n#task-list-container {\n    margin-top: 40px;\n    height: 65%;\n    border: 1px solid #dedede;\n    box-shadow: 1px 1px 1px 1px #fafafa;\n    padding: 8px;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 6px;\n    padding-top: 6px;\n}\n\n.left-task-container, .right-task-container {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n}\n\n#add-task {\n    padding: 8px;\n    cursor: pointer;\n}\n\n.task-menu {\n    font-weight: 600;\n    cursor: pointer;\n}\n\n.task-important {\n    height: 18px;\n    align-self: flex-start;\n    cursor: pointer;\n}\n\n/* custom checkbox styles */\n/* The container */\n.check-container {\n    display: block;\n    position: relative;\n    padding-left: 14px;\n    margin-bottom: 24px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    /* border: 1px solid #000; */\n  }\n  \n  /* Hide the browser's default checkbox */\n.check-container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n  \n  /* Create a custom checkbox */\n.checkmark {\n    position: absolute;\n    top: 1px;\n    left: 3px;\n    height: 21px;\n    width: 21px;\n    background-color: #eee;\n    border: 1px solid #cdcdcd;\n    transition-duration: 400ms;\n}\n  \n  /* On mouse-over, add a grey background color */\n.check-container:hover input ~ .checkmark {\n    background-color: #ccc;\n}\n  \n  /* When the checkbox is checked, add a blue background */\n.check-container input:checked ~ .checkmark {\n    background-color: #84cc16;\n    border: 1px solid #64a118;\n}\n  \n  /* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n  \n  /* Show the checkmark when checked */\n.check-container input:checked ~ .checkmark:after {\n    display: block;\n}\n  \n  /* Style the checkmark/indicator */\n.check-container .checkmark:after {\n    left: 6px;\n    top: 1px;\n    width: 4px;\n    height: 11px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate( \n45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate( \n45deg);\n}\n\n  /* End custom checkbox styles */\n\n/*start custom scrollbar */\n/* Works on Firefox */\n#task-list-container {\n    scrollbar-width: thin;\n    scrollbar-color: white #f44336;\n    overflow-y: auto;\n}\n  \n/* Works on Chrome, Edge, and Safari */\n#task-list-container::-webkit-scrollbar {\n    width: 10px;\n}\n\n#task-list-container::-webkit-scrollbar-track {\n    background: #f44336;\n    border-left: 1px solid #9f1717;\n}\n\n#task-list-container::-webkit-scrollbar-thumb {\n    background-color: white;\n}\n\n\n/* Start styles for form popup */\n.popup-overlay {\n    z-index: 99;\n    background: #00000085;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.popup-container {\n    margin-top: 80px;\n    background-color: white;\n    width: min(50vw, 400px);\n    padding: 20px;\n    border-radius: 6px;\n    position: relative;\n}\n\n/* end popup */\n\n.input-box {\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n}\n\n.input-box input {\n    font-size: calc(10px + 0.4vw);\n    padding: 2px;\n}\n\n.add-task-form, form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.normal-button {\n    padding: 8px;\n    cursor: pointer;\n}\n\n.add-task-form .normal-button, .edit-task-form .normal-button  {\n    align-self: center;\n}\n\n.close-popup {\n    position: absolute;\n    top: 2px;\n    right: 8px;\n    font-size: 20px;\n    font-weight: 600;\n    font-family: monospace, sans-serif;\n    cursor: pointer;\n}\n\n.input-box-checkbox {\n    display: flex;\n    gap: 4%;\n    align-items: center;\n}\n\n.input-box-checkbox input[type=\"checkbox\"]{\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n}\n\n/* Dropdown menu start */\n\n/* Dropdown Button */\n.dropbtn {\n    background-color: #04AA6D;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n  }\n  \n  /* The container <div> - needed to position the dropdown content */\n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  /* Dropdown Content (Hidden by Default) */\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 60px;\n    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);\n    z-index: 1;\n    right: 0;\n  }\n\n  /* style for dropdown options */\n.dropdown-option {\n    padding: 4px;\n    border-bottom: 1px solid #cbcbcb;\n    cursor: pointer;\n}\n\n.dropdown-option:hover {\n    background: #ffeebe;\n}\n\n  /* Links inside the dropdown */\n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  \n  /* Change color of dropdown links on hover */\n  .dropdown-content a:hover {background-color: #ddd;}\n  \n  /* Show the dropdown menu on hover */\n  .dropdown:hover .dropdown-content {display: block;}\n  \n  /* Change the background color of the dropdown button when the dropdown content is shown */\n  .dropdown:hover .dropbtn {background-color: #3e8e41;}\n\n  /* End dropdown */\n\n@keyframes hide {\n    0%   {\n        opacity: 100%;\n    }\n    100% {\n        opacity: 0%;\n        display: none;\n    }\n}\n\n@keyframes show {\n    0%   {\n        opacity: 0%;\n    }\n    100% {\n        opacity: 100%;\n        display: flex;\n    }\n}\n\n.projects {\n    padding: 0;\n    margin-left: 24px;\n    font-size: 18px;\n}\n\n.project-active {\n    list-style-image: url(\"./imgs/project-active.png\");\n}\n\n.project-inactive {\n    list-style-image: url(\"./imgs/project-inactive.png\");\n}\n\n.project {\n    margin-top: 10px;\n    cursor: pointer;\n}\n\n.add-project {\n    cursor: pointer;\n}\n\n#tab-name {\n    align-self: center;\n    font-size: calc(12px + 1vw);\n    font-weight: 600;\n    color: #404040;\n    font-family: sans-serif;\n}\n\n.project-options {\n    display: flex;\n    gap: 10px;\n}\n\n.project-options img {\n    visibility: hidden;\n}\n\n.project-name {\n    flex-grow: 1;\n}"],"sourceRoot":""}]);
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

    const projects = document.createElement("ul");
    projects.classList = "projects";

    addProject.appendChild(addProjectImg);
    addProject.appendChild(addProjectTitle);

    projectList.append(addProject, projects);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxZQUFZLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxNQUFNLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZ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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsK0RBQTJCOztBQUUzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFNkQ7Ozs7Ozs7Ozs7OztBQ25XN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0E0QztBQUNwQjs7QUFFeEIsMkRBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Jlcy9zdHlsZS5jc3M/ZTE5MSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvYWRQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZXMvaW1ncy8gc3luYyBeXFwuXFwvLipcXC5wbmckIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvcHJvamVjdC1hY3RpdmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWdzL3Byb2plY3QtaW5hY3RpdmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJpZW5kYStPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZSAzIHBhcmFsbGVsIGhvcml6b250IG1lbnUgbGluZXMgKi9cXG4ubWVudS1pY29uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1pY29uID4gLmxpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggIzNlMDAwMDY2O1xcbn1cXG4ubWVudS1pY29uID4gLmxpbmUgKyAubGluZSB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLyogRW5kIHN0eWxlIDMgcGFyYWxsZWwgaG9yaXpvbnQgbWVudSBsaW5lcyAqL1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn0gXFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjOTkxYjFiO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgaGVpZ2h0OiBjYWxjKDUwcHggKyAxdncpO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTVweCArIDF2dyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWVyaWVuZGEgT25lJywgY3Vyc2l2ZTtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMXZ3IC0gNTBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4ICNjM2MzYzM7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxufVxcblxcbiN0YXNrLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi50YXNrLXdyYXBwZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuXFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1vcHRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3RzLWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcblxcblxcblxcbi50YXNrLW9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay1jb250YWluZXItb3B0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FjYWNhYztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VsZWN0LWlucHV0LWNvbnRhaW5lciB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5cXG4uc3RhdHVzLW9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDZweDtcXG59XFxuXFxuI3Rhc2stbGlzdC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDY1JTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4ICNmYWZhZmE7XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xcbn1cXG5cXG4ubGVmdC10YXNrLWNvbnRhaW5lciwgLnJpZ2h0LXRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkLXRhc2sge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbWVudSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staW1wb3J0YW50IHtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGN1c3RvbSBjaGVja2JveCBzdHlsZXMgKi9cXG4vKiBUaGUgY29udGFpbmVyICovXFxuLmNoZWNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXFxuICB9XFxuICBcXG4gIC8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXFxuLmNoZWNrLWNvbnRhaW5lciBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG4gIFxcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXFxuLmNoZWNrbWFyayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxcHg7XFxuICAgIGxlZnQ6IDNweDtcXG4gICAgaGVpZ2h0OiAyMXB4O1xcbiAgICB3aWR0aDogMjFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxufVxcbiAgXFxuICAvKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cXG4uY2hlY2stY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcbiAgXFxuICAvKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cXG4uY2hlY2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0Y2MxNjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY0YTExODtcXG59XFxuICBcXG4gIC8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXFxuLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbiAgXFxuICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXFxuLmNoZWNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4gIFxcbiAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cXG4uY2hlY2stY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBsZWZ0OiA2cHg7XFxuICAgIHRvcDogMXB4O1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICBoZWlnaHQ6IDExcHg7XFxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoIFxcbjQ1ZGVnKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoIFxcbjQ1ZGVnKTtcXG59XFxuXFxuICAvKiBFbmQgY3VzdG9tIGNoZWNrYm94IHN0eWxlcyAqL1xcblxcbi8qc3RhcnQgY3VzdG9tIHNjcm9sbGJhciAqL1xcbi8qIFdvcmtzIG9uIEZpcmVmb3ggKi9cXG4jdGFzay1saXN0LWNvbnRhaW5lciB7XFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiB3aGl0ZSAjZjQ0MzM2O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4gIFxcbi8qIFdvcmtzIG9uIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSAqL1xcbiN0YXNrLWxpc3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4jdGFzay1saXN0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5ZjE3MTc7XFxufVxcblxcbiN0YXNrLWxpc3QtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4vKiBTdGFydCBzdHlsZXMgZm9yIGZvcm0gcG9wdXAgKi9cXG4ucG9wdXAtb3ZlcmxheSB7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwODU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogbWluKDUwdncsIDQwMHB4KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi8qIGVuZCBwb3B1cCAqL1xcblxcbi5pbnB1dC1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLmlucHV0LWJveCBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMC40dncpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5hZGQtdGFzay1mb3JtLCBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubm9ybWFsLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSAubm9ybWFsLWJ1dHRvbiwgLmVkaXQtdGFzay1mb3JtIC5ub3JtYWwtYnV0dG9uICB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDJweDtcXG4gICAgcmlnaHQ6IDhweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbnB1dC1ib3gtY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDQlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtYm94LWNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRHJvcGRvd24gbWVudSBzdGFydCAqL1xcblxcbi8qIERyb3Bkb3duIEJ1dHRvbiAqL1xcbi5kcm9wYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0QUE2RDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xcbiAgLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB9XFxuICBcXG4gIC8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIG1pbi13aWR0aDogNjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2IoMCAwIDAgLyAyMCUpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICByaWdodDogMDtcXG4gIH1cXG5cXG4gIC8qIHN0eWxlIGZvciBkcm9wZG93biBvcHRpb25zICovXFxuLmRyb3Bkb3duLW9wdGlvbiB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYmNiY2I7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRyb3Bkb3duLW9wdGlvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmVlYmU7XFxufVxcblxcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxcbiAgXFxuICAvKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXFxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cXG4gIFxcbiAgLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBkcm9wZG93biBidXR0b24gd2hlbiB0aGUgZHJvcGRvd24gY29udGVudCBpcyBzaG93biAqL1xcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO31cXG5cXG4gIC8qIEVuZCBkcm9wZG93biAqL1xcblxcbkBrZXlmcmFtZXMgaGlkZSB7XFxuICAgIDAlICAge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNob3cge1xcbiAgICAwJSAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDAlO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnByb2plY3QtYWN0aXZlIHtcXG4gICAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuLnByb2plY3QtaW5hY3RpdmUge1xcbiAgICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFiLW5hbWUge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMXZ3KTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICM0MDQwNDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ucHJvamVjdC1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1vcHRpb25zIGltZyB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0EseUNBQXlDO0FBQ3pDO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQSw2Q0FBNkM7O0FBRTdDO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2Is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bEQsb0NBQW9DO0VBQ3BDLG1DQUFtQyxjQUFjLENBQUM7O0VBRWxELDBGQUEwRjtFQUMxRiwwQkFBMEIseUJBQXlCLENBQUM7O0VBRXBELGlCQUFpQjs7QUFFbkI7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLHlEQUFvRDtBQUN4RDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJpZW5kYStPbmUmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuLyogc3R5bGUgMyBwYXJhbGxlbCBob3Jpem9udCBtZW51IGxpbmVzICovXFxuLm1lbnUtaWNvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtaWNvbiA+IC5saW5lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4ICMzZTAwMDA2NjtcXG59XFxuLm1lbnUtaWNvbiA+IC5saW5lICsgLmxpbmUge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi8qIEVuZCBzdHlsZSAzIHBhcmFsbGVsIGhvcml6b250IG1lbnUgbGluZXMgKi9cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59IFxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZDogIzk5MWIxYjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGhlaWdodDogY2FsYyg1MHB4ICsgMXZ3KTtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBmbGV4LWdyb3c6IDI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAxdncpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LWZhbWlseTogJ01lcmllbmRhIE9uZScsIGN1cnNpdmU7XFxufVxcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDF2dyAtIDUwcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjYzNjM2MzO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5cXG4jdGFzay1jb250YWluZXIge1xcbiAgICBmbGV4LWdyb3c6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbn1cXG5cXG4udGFzay13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogNnB4O1xcblxcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnNpZGViYXItb3B0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcm9qZWN0cy1oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NhY2FjYTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuI3Byb2plY3QtbGlzdCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG5cXG5cXG4udGFzay1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLW9wdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhY2FjYWM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnNlbGVjdC1pbnB1dC1jb250YWluZXIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuXFxuLnN0YXR1cy1vcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbiN0YXNrLWxpc3QtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgaGVpZ2h0OiA2NSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjZmFmYWZhO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcXG4gICAgcGFkZGluZy10b3A6IDZweDtcXG59XFxuXFxuLmxlZnQtdGFzay1jb250YWluZXIsIC5yaWdodC10YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FkZC10YXNrIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLW1lbnUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWltcG9ydGFudCB7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBjdXN0b20gY2hlY2tib3ggc3R5bGVzICovXFxuLyogVGhlIGNvbnRhaW5lciAqL1xcbi5jaGVjay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyAqL1xcbiAgfVxcbiAgXFxuICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xcbi5jaGVjay1jb250YWluZXIgaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG59XFxuICBcXG4gIC8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xcbi5jaGVja21hcmsge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMXB4O1xcbiAgICBsZWZ0OiAzcHg7XFxuICAgIGhlaWdodDogMjFweDtcXG4gICAgd2lkdGg6IDIxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZGNkY2Q7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xcbn1cXG4gIFxcbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXFxuLmNoZWNrLWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG4gIFxcbiAgLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXFxuLmNoZWNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NGNjMTY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NGExMTg7XFxufVxcbiAgXFxuICAvKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xcbi5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4gIFxcbiAgLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xcbi5jaGVjay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuICBcXG4gIC8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXFxuLmNoZWNrLWNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgbGVmdDogNnB4O1xcbiAgICB0b3A6IDFweDtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgaGVpZ2h0OiAxMXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCBcXG40NWRlZyk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKCBcXG40NWRlZyk7XFxufVxcblxcbiAgLyogRW5kIGN1c3RvbSBjaGVja2JveCBzdHlsZXMgKi9cXG5cXG4vKnN0YXJ0IGN1c3RvbSBzY3JvbGxiYXIgKi9cXG4vKiBXb3JrcyBvbiBGaXJlZm94ICovXFxuI3Rhc2stbGlzdC1jb250YWluZXIge1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICAgIHNjcm9sbGJhci1jb2xvcjogd2hpdGUgI2Y0NDMzNjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuICBcXG4vKiBXb3JrcyBvbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkgKi9cXG4jdGFzay1saXN0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuI3Rhc2stbGlzdC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZDogI2Y0NDMzNjtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOWYxNzE3O1xcbn1cXG5cXG4jdGFzay1saXN0LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuLyogU3RhcnQgc3R5bGVzIGZvciBmb3JtIHBvcHVwICovXFxuLnBvcHVwLW92ZXJsYXkge1xcbiAgICB6LWluZGV4OiA5OTtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDg1O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IG1pbig1MHZ3LCA0MDBweCk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBlbmQgcG9wdXAgKi9cXG5cXG4uaW5wdXQtYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbi5pbnB1dC1ib3ggaW5wdXQge1xcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDAuNHZ3KTtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uYWRkLXRhc2stZm9ybSwgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLm5vcm1hbC1idXR0b24ge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrLWZvcm0gLm5vcm1hbC1idXR0b24sIC5lZGl0LXRhc2stZm9ybSAubm9ybWFsLWJ1dHRvbiAge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZS1wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAycHg7XFxuICAgIHJpZ2h0OiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5wdXQtYm94LWNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA0JTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0LWJveC1jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJde1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIERyb3Bkb3duIG1lbnUgc3RhcnQgKi9cXG5cXG4vKiBEcm9wZG93biBCdXR0b24gKi9cXG4uZHJvcGJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cXG4gIC5kcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKiBEcm9wZG93biBDb250ZW50IChIaWRkZW4gYnkgRGVmYXVsdCkgKi9cXG4gIC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICBtaW4td2lkdGg6IDYwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiKDAgMCAwIC8gMjAlKTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcmlnaHQ6IDA7XFxuICB9XFxuXFxuICAvKiBzdHlsZSBmb3IgZHJvcGRvd24gb3B0aW9ucyAqL1xcbi5kcm9wZG93bi1vcHRpb24ge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2JjYmNiO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kcm9wZG93bi1vcHRpb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZlZWJlO1xcbn1cXG5cXG4gIC8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLyogQ2hhbmdlIGNvbG9yIG9mIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXFxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cXG4gIFxcbiAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtkaXNwbGF5OiBibG9jazt9XFxuICBcXG4gIC8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZHJvcGRvd24gYnV0dG9uIHdoZW4gdGhlIGRyb3Bkb3duIGNvbnRlbnQgaXMgc2hvd24gKi9cXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7YmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTt9XFxuXFxuICAvKiBFbmQgZHJvcGRvd24gKi9cXG5cXG5Aa2V5ZnJhbWVzIGhpZGUge1xcbiAgICAwJSAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwJTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaG93IHtcXG4gICAgMCUgICB7XFxuICAgICAgICBvcGFjaXR5OiAwJTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5wcm9qZWN0LWFjdGl2ZSB7XFxuICAgIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcXFwiLi9pbWdzL3Byb2plY3QtYWN0aXZlLnBuZ1xcXCIpO1xcbn1cXG5cXG4ucHJvamVjdC1pbmFjdGl2ZSB7XFxuICAgIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcXFwiLi9pbWdzL3Byb2plY3QtaW5hY3RpdmUucG5nXFxcIik7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0YWItbmFtZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAxdncpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogIzQwNDA0MDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0LW9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LW9wdGlvbnMgaW1nIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IG1lbnVJY29uID0gZ2VuZXJhdGVNZW51TGluZXMoKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUljb24pO1xuXG4gICAgY29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ29UZXh0LmlkID0gXCJsb2dvXCI7XG4gICAgbG9nb1RleHQudGV4dENvbnRlbnQgPSBcIk15VG9Eb1wiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU1lbnVMaW5lcygpe1xuICAgIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QgPSBcIm1lbnUtaWNvblwiO1xuXG4gICAgZm9yKGxldCBpPTA7IGkgPCAzOyBpKyspe1xuICAgICAgICBsZXQgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBsaW5lLmNsYXNzTGlzdCA9IFwibGluZVwiO1xuICAgICAgICBtZW51SWNvbi5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbnVJY29uO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVNpZGViYXJPcHRpb24odGl0bGUpIHsgLy9jdXJyZW50bHkgY3JlYXRpbmcgYSBzZXBlcmF0ZSBmdW5jdGlvbiBmb3IgdGhlIHNpZGViYXIgb3B0aW9uc1xuICAgIGNvbnN0IG9wdGlvbklkID0gdGl0bGUudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIik7XG4gICAgXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvcHRpb24uY2xhc3NMaXN0ID0gXCJzaWRlYmFyLW9wdGlvblwiO1xuICAgIG9wdGlvbi5pZCA9IG9wdGlvbklkO1xuICAgIGNvbnN0IG9wdGlvbkltZyA9IG5ldyBJbWFnZSgpO1xuICAgIG9wdGlvbkltZy5zcmMgPSByZXF1aXJlKGAuLi9yZXMvaW1ncy8ke29wdGlvbklkfS5wbmdgKTtcbiAgICBvcHRpb25JbWcuYWx0ID0gdGl0bGUrXCIgaWNvblwiO1xuICAgIFxuICAgIGNvbnN0IG9wdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgb3B0aW9uVGl0bGUuY2xhc3MgPSBcIm9wdGlvbi10aXRsZVwiO1xuICAgIG9wdGlvblRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBvcHRpb24uYXBwZW5kQ2hpbGQob3B0aW9uSW1nKTtcbiAgICBvcHRpb24uYXBwZW5kQ2hpbGQob3B0aW9uVGl0bGUpO1xuICAgIFxuICAgIHJldHVybiBvcHRpb247XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdENvbnRhaW5lcigpe1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIlxuICAgIHRpdGxlLmlkID0gXCJwcm9qZWN0cy1oZWFkaW5nXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdExpc3QuaWQgPSBcInByb2plY3QtbGlzdFwiO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkUHJvamVjdC5jbGFzc0xpc3QgPSBcImFkZC1wcm9qZWN0IHNpZGViYXItb3B0aW9uXCI7XG4gICAgY29uc3QgYWRkUHJvamVjdEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGFkZFByb2plY3RJbWcuc3JjID0gcmVxdWlyZShcIi4uL3Jlcy9pbWdzL2FkZC1wcm9qZWN0LnBuZ1wiKVxuICAgIGFkZFByb2plY3RJbWcuYWx0ID0gXCJhZGQgcHJvamVjdCBpY29uXCJcbiAgICBjb25zdCBhZGRQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBhZGRQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QgPSBcInByb2plY3RzXCI7XG5cbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RJbWcpO1xuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFRpdGxlKTtcblxuICAgIHByb2plY3RMaXN0LmFwcGVuZChhZGRQcm9qZWN0LCBwcm9qZWN0cyk7XG5cbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcblxuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLmlkID0gXCJzaWRlYmFyXCI7XG5cbiAgICBjb25zdCBzaG93QWxsT3B0aW9uID0gZ2VuZXJhdGVTaWRlYmFyT3B0aW9uKFwiU2hvdyBBbGxcIik7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaG93QWxsT3B0aW9uKVxuXG4gICAgY29uc3QgZmF2T3B0aW9uID0gZ2VuZXJhdGVTaWRlYmFyT3B0aW9uKFwiRmF2b3VyaXRlXCIpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZmF2T3B0aW9uKVxuXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGdlbmVyYXRlUHJvamVjdENvbnRhaW5lcigpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcilcblxuXG4gICAgcmV0dXJuIHNpZGViYXI7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlV2hlbk9wdGlvbkNvbnRhaW5lciguLi5vcHRpb25zKXtcbiAgICBjb25zdCB3aGVuT3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICB3aGVuT3B0aW9uQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwid2hlbi1vcHRpb25zIHRhc2stY29udGFpbmVyLW9wdGlvblwiO1xuXG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uRGl2LnZhbHVlID0gb3B0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIG9wdGlvbkRpdi50ZXh0Q29udGVudCA9IG9wdGlvbjtcbiAgICAgICAgd2hlbk9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25EaXYpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gd2hlbk9wdGlvbkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTdGF0dXNPcHRpb25Db250YWluZXIoLi4ub3B0aW9ucyl7XG4gICAgLypcbiAgICBjb25zdCBzdGF0dXNPcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzdGF0dXNPcHRpb25MYWJlbC5mb3IgPSBcInN0YXR1cy1vcHRpb25cIjtcbiAgICBzdGF0dXNPcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiU3RhdHVzOlwiXG4gICAgKi9cblxuICAgIGNvbnN0IHN0YXR1c09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc3RhdHVzT3B0aW9uLmNsYXNzTGlzdCA9IFwic3RhdHVzLW9wdGlvbiB0YXNrLWNvbnRhaW5lci1vcHRpb25cIjtcblxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbkRpdi52YWx1ZSA9IG9wdGlvbi50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBvcHRpb25EaXYudGV4dENvbnRlbnQgPSBvcHRpb247XG4gICAgICAgIHN0YXR1c09wdGlvbi5hcHBlbmRDaGlsZChvcHRpb25EaXYpO1xuICAgIH0pXG5cbiAgICAvL3N0YXR1c09wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0dXNPcHRpb25MYWJlbCk7XG5cbiAgICByZXR1cm4gc3RhdHVzT3B0aW9uO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFza09wdGlvbkNvbnRhaW5lcigpe1xuICAgIGNvbnN0IHRhc2tPcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tPcHRpb25Db250YWluZXIuY2xhc3NMaXN0ID0gXCJ0YXNrLW9wdGlvbnNcIjtcbiAgICBcbiAgICBjb25zdCBzZWxlY3RCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlbGVjdEJveENvbnRhaW5lci5jbGFzc05hbWUgPSBcInNlbGVjdC1pbnB1dC1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHdoZW5PcHRpb25Db250YWluZXIgPSBnZW5lcmF0ZVdoZW5PcHRpb25Db250YWluZXIoXCJVcGNvbWluZ1wiLCBcIlRvZGF5XCIsIFwiUGFzdFwiKTtcblxuICAgIGNvbnN0IHN0YXR1c09wdGlvbkNvbnRhaW5lciA9IGdlbmVyYXRlU3RhdHVzT3B0aW9uQ29udGFpbmVyKFwiVW5maW5pc2hlZFwiLCBcIkFsbFwiLCBcIkNvbXBsZXRlZFwiKTtcblxuICAgIHNlbGVjdEJveENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aGVuT3B0aW9uQ29udGFpbmVyKTtcbiAgICBzZWxlY3RCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdHVzT3B0aW9uQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdXR0b24uaWQgPSBcImFkZC10YXNrXCJcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIEFkZCBUYXNrXCI7XG5cbiAgICBjb25zdCBzZWNvbmRPcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY29uZE9wdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNlY29uZC1vcHRpb24tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB0YWJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJOYW1lLmlkID0gXCJ0YWItbmFtZVwiO1xuXG4gICAgdGFza09wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RCb3hDb250YWluZXIpO1xuICAgIHNlY29uZE9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcbiAgICB0YXNrT3B0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZE9wdGlvbkNvbnRhaW5lcik7XG4gICAgdGFza09wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJOYW1lKTtcbiAgICBcbiAgICByZXR1cm4gdGFza09wdGlvbkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYXNrTGlzdENvbnRhaW5lcigpe1xuICAgIGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTGlzdENvbnRhaW5lci5pZCA9IFwidGFzay1saXN0LWNvbnRhaW5lclwiO1xuICAgIFxuICAgIHJldHVybiB0YXNrTGlzdENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVEZW1vVGFza0Rpdih0aXRsZSwgZGF0ZSl7XG5cbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGl2LmNsYXNzTmFtZSA9IFwidGFza1wiO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrVGl0bGUuY2xhc3NOYW1lID0gXCJ0YXNrLXRpbGVcIjtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIC8vQ3VzdG9tIGNoZWNrYm94XG4gICAgY29uc3QgdGFza1N0YXR1c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tTdGF0dXNMYWJlbC5jbGFzc05hbWUgPSBcImNoZWNrLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgdGFza1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrU3RhdHVzLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgdGFza1N0YXR1cy5jbGFzc0xpc3QgPSBcInRhc2stc3RhdHVzIGNoZWNrYm94XCI7XG5cbiAgICBjb25zdCB0YXNrU3RhdHVzQ2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGFza1N0YXR1c0NoZWNrbWFyay5jbGFzc05hbWUgPSBcImNoZWNrbWFya1wiO1xuXG4gICAgdGFza1N0YXR1c0xhYmVsLmFwcGVuZENoaWxkKHRhc2tTdGF0dXMpO1xuICAgIHRhc2tTdGF0dXNMYWJlbC5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzQ2hlY2ttYXJrKTtcblxuICAgIC8vY3VzdG9tIGNoZWNrYm94IGVuZFxuXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEYXRlLmNsYXNzTmFtZSA9IFwidGFzay1kYXRlXCI7XG4gICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuXG4gICAgY29uc3QgdGFza0ltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdGFza0ltcG9ydGFudC5jbGFzc05hbWUgPSBcInRhc2staW1wb3J0YW50XCI7XG4gICAgdGFza0ltcG9ydGFudC5zcmMgPSByZXF1aXJlKFwiLi4vcmVzL2ltZ3Mvc3Rhci1pY29uLnBuZ1wiKTtcblxuICAgIGNvbnN0IHRhc2tPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrT3B0aW9ucy5jbGFzc05hbWUgPSBcInRhc2stbWVudVwiO1xuICAgIHRhc2tPcHRpb25zLnRleHRDb250ZW50ID0gXCLii65cIjtcblxuICAgIGNvbnN0IGxlZnRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0VGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImxlZnQtdGFzay1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHJpZ2h0VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmlnaHRUYXNrQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwicmlnaHQtdGFzay1jb250YWluZXJcIjtcblxuICAgIGxlZnRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tTdGF0dXNMYWJlbCk7XG4gICAgbGVmdFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICByaWdodFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgIHJpZ2h0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW1wb3J0YW50KTtcbiAgICByaWdodFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza09wdGlvbnMpO1xuXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChsZWZ0VGFza0NvbnRhaW5lcik7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChyaWdodFRhc2tDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIHRhc2tEaXY7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFza0NvbnRhaW5lcigpIHtcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuaWQgPSBcInRhc2stY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1dyYXBwZXIuY2xhc3NOYW1lID0gXCJ0YXNrLXdyYXBwZXJcIjtcblxuICAgIGNvbnN0IHRhc2tPcHRpb25Db250YWluZXIgPSBnZW5lcmF0ZVRhc2tPcHRpb25Db250YWluZXIoKTsgIFxuICAgIGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZ2VuZXJhdGVUYXNrTGlzdENvbnRhaW5lcigpO1xuXG4gICAgY29uc3QgdGFza0RlbW9EaXYgPSBnZW5lcmF0ZURlbW9UYXNrRGl2KFwiRG8gNCBwdXNoIHVwc1wiLCBcIjEyLzA2LzIwMjJcIik7XG4gICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RlbW9EaXYpO1xuXG4gICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza09wdGlvbkNvbnRhaW5lcik7XG4gICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0xpc3RDb250YWluZXIpO1xuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrV3JhcHBlcik7XG5cbiAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYXNrRm9ybUlucHV0KG5hbWUsIGxhYmVsLCB0eXBlLCByZXF1aXJlZD1mYWxzZSl7XG4gICAgXG4gICAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0RGl2LmNsYXNzTmFtZSA9IFwiaW5wdXQtYm94XCI7XG5cbiAgICBjb25zdCBpbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGlucHV0TGFiZWwuZm9yID0gbmFtZTtcbiAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gbGFiZWw7XG5cbiAgICBsZXQgbXlJbnB1dDtcblxuXG4gICAgaWYgKHR5cGUgPT09IFwidGV4dGFyZWFcIikgIHtcbiAgICAgICAgbXlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2hlY2tib3hcIikgIHtcbiAgICAgICAgbXlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXREaXYuY2xhc3NOYW1lID0gXCJpbnB1dC1ib3gtY2hlY2tib3hcIjtcbiAgICAgICAgbXlJbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG15SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIG15SW5wdXQudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIG15SW5wdXQubmFtZSA9IG5hbWU7XG4gICAgbXlJbnB1dC5pZCA9IG5hbWU7XG4gICAgaWYgKHJlcXVpcmVkKXtcbiAgICAgICAgbXlJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaW5wdXREaXYuYXBwZW5kKGlucHV0TGFiZWwsIG15SW5wdXQpO1xuICAgIHJldHVybiBpbnB1dERpdjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVBZGRUYXNrRm9ybSgpe1xuICAgIFxuICAgIGNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIG15Rm9ybS5jbGFzc05hbWUgPSBcImFkZC10YXNrLWZvcm1cIjtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGdlbmVyYXRlVGFza0Zvcm1JbnB1dChcInRhc2stdGl0bGVcIiwgXCJUaXRsZVwiLCBcInRleHRcIiwgdHJ1ZSk7XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBnZW5lcmF0ZVRhc2tGb3JtSW5wdXQoXCJ0YXNrLWR1ZS1kYXRlXCIsIFwiRHVlIERhdGVcIiwgXCJkYXRlXCIsIHRydWUpO1xuICAgIGNvbnN0IHRhc2tJbXBvcnRhbnQgPSBnZW5lcmF0ZVRhc2tGb3JtSW5wdXQoXCJ0YXNrLWltcG9ydGFudFwiLCBcIklzIEltcG9ydGFudD9cIiwgXCJjaGVja2JveFwiKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBnZW5lcmF0ZVRhc2tGb3JtSW5wdXQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIsIFwiRGVzY3JpcHRpb25cIiwgXCJ0ZXh0YXJlYVwiKTtcbiAgICBcbiAgICBjb25zdCBzdWJtaXRCdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ1dC5jbGFzc05hbWUgPSBcIm5vcm1hbC1idXR0b25cIjtcbiAgICBzdWJtaXRCdXQudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICBteUZvcm0uYXBwZW5kKHRhc2tUaXRsZSwgdGFza0R1ZURhdGUsIHRhc2tJbXBvcnRhbnQsIHRhc2tEZXNjcmlwdGlvbiwgc3VibWl0QnV0KTtcblxuICAgIHJldHVybiBteUZvcm07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRWRpdFRhc2tGb3JtKCl7XG4gICAgXG4gICAgY29uc3QgbXlGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgbXlGb3JtLmNsYXNzTmFtZSA9IFwiZWRpdC10YXNrLWZvcm1cIjtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGdlbmVyYXRlVGFza0Zvcm1JbnB1dChcInRhc2stdGl0bGVcIiwgXCJUaXRsZVwiLCBcInRleHRcIiwgdHJ1ZSk7XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBnZW5lcmF0ZVRhc2tGb3JtSW5wdXQoXCJ0YXNrLWR1ZS1kYXRlXCIsIFwiRHVlIERhdGVcIiwgXCJkYXRlXCIsIHRydWUpO1xuICAgIGNvbnN0IHRhc2tJbXBvcnRhbnQgPSBnZW5lcmF0ZVRhc2tGb3JtSW5wdXQoXCJ0YXNrLWltcG9ydGFudFwiLCBcIklzIEltcG9ydGFudD9cIiwgXCJjaGVja2JveFwiKTtcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBnZW5lcmF0ZVRhc2tGb3JtSW5wdXQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIsIFwiRGVzY3JpcHRpb25cIiwgXCJ0ZXh0YXJlYVwiKTtcbiAgICBcbiAgICBjb25zdCBzdWJtaXRCdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ1dC5jbGFzc05hbWUgPSBcIm5vcm1hbC1idXR0b25cIjtcbiAgICBzdWJtaXRCdXQudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICBteUZvcm0uYXBwZW5kKHRhc2tUaXRsZSwgdGFza0R1ZURhdGUsIHRhc2tJbXBvcnRhbnQsIHRhc2tEZXNjcmlwdGlvbiwgc3VibWl0QnV0KTtcblxuICAgIHJldHVybiBteUZvcm07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUG9wdXAoKXtcbiAgICBjb25zdCBwb3B1cE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcHVwT3ZlcmxheS5jbGFzc05hbWUgPSBcInBvcHVwLW92ZXJsYXlcIjtcbiAgICBwb3B1cE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwicG9wdXAtY29udGFpbmVyXCI7XG5cbiAgICBwb3B1cE92ZXJsYXkuYXBwZW5kQ2hpbGQocG9wdXBDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIHBvcHVwT3ZlcmxheTtcbn1cblxuY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgaGVhZGVyID0gZ2VuZXJhdGVIZWFkZXIoKTtcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Db250YWluZXIuaWQgPSBcIm1haW4tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZ2VuZXJhdGVTaWRlYmFyKCk7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGdlbmVyYXRlVGFza0NvbnRhaW5lcigpO1xuICAgIGNvbnN0IHBvcHVwID0gZ2VuZXJhdGVQb3B1cCgpO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHBvcHVwKVxuXG59XG5cbmV4cG9ydCB7IGxvYWRQYWdlLCBnZW5lcmF0ZUFkZFRhc2tGb3JtLCBnZW5lcmF0ZUVkaXRUYXNrRm9ybX1cblxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2FkZC1wcm9qZWN0LnBuZ1wiOiBcIi4vc3JjL3Jlcy9pbWdzL2FkZC1wcm9qZWN0LnBuZ1wiLFxuXHRcIi4vZGVsZXRlLXByb2plY3QucG5nXCI6IFwiLi9zcmMvcmVzL2ltZ3MvZGVsZXRlLXByb2plY3QucG5nXCIsXG5cdFwiLi9lZGl0LXByb2plY3QucG5nXCI6IFwiLi9zcmMvcmVzL2ltZ3MvZWRpdC1wcm9qZWN0LnBuZ1wiLFxuXHRcIi4vZmF2b3VyaXRlLnBuZ1wiOiBcIi4vc3JjL3Jlcy9pbWdzL2Zhdm91cml0ZS5wbmdcIixcblx0XCIuL3Byb2plY3QtYWN0aXZlLnBuZ1wiOiBcIi4vc3JjL3Jlcy9pbWdzL3Byb2plY3QtYWN0aXZlLnBuZ1wiLFxuXHRcIi4vcHJvamVjdC1pbmFjdGl2ZS5wbmdcIjogXCIuL3NyYy9yZXMvaW1ncy9wcm9qZWN0LWluYWN0aXZlLnBuZ1wiLFxuXHRcIi4vcHJvamVjdHMucG5nXCI6IFwiLi9zcmMvcmVzL2ltZ3MvcHJvamVjdHMucG5nXCIsXG5cdFwiLi9zaG93LWFsbC5wbmdcIjogXCIuL3NyYy9yZXMvaW1ncy9zaG93LWFsbC5wbmdcIixcblx0XCIuL3N0YXItaWNvbi5wbmdcIjogXCIuL3NyYy9yZXMvaW1ncy9zdGFyLWljb24ucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL3Jlcy9pbWdzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnBuZyRcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtsb2FkUGFnZX0gZnJvbSBcIi4vbW9kdWxlcy9sb2FkUGFnZVwiO1xuaW1wb3J0IFwiLi9yZXMvc3R5bGUuY3NzXCJcblxubG9hZFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==