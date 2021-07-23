/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./audio.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./audio.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    box-sizing: border-box;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\n#container{\r\n    border: 3px solid black;\r\n    background-color: rgb(24, 22, 22);\r\n    display:flex;\r\n    justify-content: space-around;\r\n    height: 100vh;\r\n}\r\n#player{\r\n    margin-left: 50px;\r\n    padding: 20px ;\r\n    border: 2px solid red;\r\n    border-radius: 60px;\r\n    background-color: rgb(235, 180, 180);\r\n}\r\n#player>#image{\r\n    width:450px;\r\n    height: 350px;\r\n    margin: auto;\r\n    background-color: black;\r\n    border-radius: 50px;\r\n}\r\n#thumbnail{\r\n    display: block;\r\n    margin:20px auto;\r\n    width:300;\r\n    height:300px;\r\n    border-radius: 200px;\r\n    animation: rotation 9000ms linear infinite;\r\n    \r\n}\r\n@keyframes rotation {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n#list{\r\n    margin:60px 20px;\r\n    padding: 30px;\r\n    width:500px; \r\n    height: 80%;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border: 5px solid rgb(237, 241, 16) ;\r\n    background-color: black;\r\n    box-shadow: inset 0px 0px 100px 5px violet;\r\n    border-radius: 30px;\r\n}\r\n#playlist{\r\n    padding:10px;\r\n    border:2px solid red;\r\n    border-radius: 30px;\r\n    background-color: rgb(235, 180, 180);\r\n    box-shadow: inset 0px 0px 200px 30px black;\r\n\r\n}\r\n#image{\r\n    border: 5px solid yellow;\r\n}\r\n#control{\r\n    border: 5px solid rgb(243, 243, 8);\r\n    border-radius: 50px;\r\n    padding: 20px 40px ;\r\n    margin: auto;\r\n    margin-top:20px;\r\n    padding-right: 90px;\r\n    width:500px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: rgb(121, 108, 238);\r\n    box-shadow: inset 0px 0px 100px 3px green;\r\n}\r\n.list_song{\r\n    list-style-type: none;\r\n}\r\n\r\n.function{\r\n    width:0px;\r\n    \r\n    border-radius: 50px;\r\n    border:0px solid white;\r\n    margin:0px 5px;\r\n}\r\n.song_control{\r\n    height: 50px;\r\n    border-radius: 50px;\r\n}\r\naudio{\r\n    display: none;\r\n    margin: auto;\r\n}\r\n.queue{\r\n    display: block;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    padding:10px;\r\n    margin: 10px;\r\n    border:2px solid rgb(141, 4, 4);\r\n    border-radius: 300px;\r\n    background-color: rgb(177, 250, 8);\r\n    color: rgb(10, 10, 9);\r\n    font-weight: bolder;\r\n    font-size: 1.2rem;\r\n    box-shadow: inset 0px 0px 30px 3px ;\r\n}\r\n.queue:hover{\r\n    font-size: 1.5rem;\r\n}\r\n#bar{\r\n    border:2px solid black;\r\n    margin:20px auto;\r\n    padding:10px;\r\n    border-radius: 60px;\r\n    \r\n    width:70%;\r\n    background-color: rgb(21, 180, 243);\r\n}\r\n#runningBar{\r\n    border:2px solid green;\r\n    border-radius: 10px;\r\n    margin:5px auto;\r\n    width:80%;\r\n    height: 10px;\r\n\r\n}\r\n#runningBar>div{\r\n    height:6px;\r\n    width:0%;\r\n    background-color: black;\r\n}\r\n#vol-control{\r\n    display:none;\r\n    position: absolute;\r\n    top:90px;\r\n    left:80px;\r\n    transform: rotate(-90deg);\r\n}\r\n.timing{\r\n    margin:0px 20px;\r\n    font-weight: bolder;\r\n}\r\n#E_time{\r\nfloat:right;\r\n}\r\n#status{\r\n    margin:-10px 0px;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n}", "",{"version":3,"sources":["webpack://./audio.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,iCAAiC;IACjC,YAAY;IACZ,6BAA6B;IAC7B,aAAa;AACjB;AACA;IACI,iBAAiB;IACjB,cAAc;IACd,qBAAqB;IACrB,mBAAmB;IACnB,oCAAoC;AACxC;AACA;IACI,WAAW;IACX,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,gBAAgB;IAChB,SAAS;IACT,YAAY;IACZ,oBAAoB;IACpB,0CAA0C;;AAE9C;AACA;IACI;MACE,uBAAuB;IACzB;IACA;MACE,yBAAyB;IAC3B;EACF;;AAEF;IACI,gBAAgB;IAChB,aAAa;IACb,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,oCAAoC;IACpC,uBAAuB;IACvB,0CAA0C;IAC1C,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,oBAAoB;IACpB,mBAAmB;IACnB,oCAAoC;IACpC,0CAA0C;;AAE9C;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,kCAAkC;IAClC,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,oCAAoC;IACpC,yCAAyC;AAC7C;AACA;IACI,qBAAqB;AACzB;;AAEA;IACI,SAAS;;IAET,mBAAmB;IACnB,sBAAsB;IACtB,cAAc;AAClB;AACA;IACI,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,YAAY;AAChB;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,+BAA+B;IAC/B,oBAAoB;IACpB,kCAAkC;IAClC,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;IACjB,mCAAmC;AACvC;AACA;IACI,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;;IAEnB,SAAS;IACT,mCAAmC;AACvC;AACA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,SAAS;IACT,YAAY;;AAEhB;AACA;IACI,UAAU;IACV,QAAQ;IACR,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;AACA,WAAW;AACX;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB","sourcesContent":["*{\r\n    box-sizing: border-box;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\n#container{\r\n    border: 3px solid black;\r\n    background-color: rgb(24, 22, 22);\r\n    display:flex;\r\n    justify-content: space-around;\r\n    height: 100vh;\r\n}\r\n#player{\r\n    margin-left: 50px;\r\n    padding: 20px ;\r\n    border: 2px solid red;\r\n    border-radius: 60px;\r\n    background-color: rgb(235, 180, 180);\r\n}\r\n#player>#image{\r\n    width:450px;\r\n    height: 350px;\r\n    margin: auto;\r\n    background-color: black;\r\n    border-radius: 50px;\r\n}\r\n#thumbnail{\r\n    display: block;\r\n    margin:20px auto;\r\n    width:300;\r\n    height:300px;\r\n    border-radius: 200px;\r\n    animation: rotation 9000ms linear infinite;\r\n    \r\n}\r\n@keyframes rotation {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n#list{\r\n    margin:60px 20px;\r\n    padding: 30px;\r\n    width:500px; \r\n    height: 80%;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border: 5px solid rgb(237, 241, 16) ;\r\n    background-color: black;\r\n    box-shadow: inset 0px 0px 100px 5px violet;\r\n    border-radius: 30px;\r\n}\r\n#playlist{\r\n    padding:10px;\r\n    border:2px solid red;\r\n    border-radius: 30px;\r\n    background-color: rgb(235, 180, 180);\r\n    box-shadow: inset 0px 0px 200px 30px black;\r\n\r\n}\r\n#image{\r\n    border: 5px solid yellow;\r\n}\r\n#control{\r\n    border: 5px solid rgb(243, 243, 8);\r\n    border-radius: 50px;\r\n    padding: 20px 40px ;\r\n    margin: auto;\r\n    margin-top:20px;\r\n    padding-right: 90px;\r\n    width:500px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: rgb(121, 108, 238);\r\n    box-shadow: inset 0px 0px 100px 3px green;\r\n}\r\n.list_song{\r\n    list-style-type: none;\r\n}\r\n\r\n.function{\r\n    width:0px;\r\n    \r\n    border-radius: 50px;\r\n    border:0px solid white;\r\n    margin:0px 5px;\r\n}\r\n.song_control{\r\n    height: 50px;\r\n    border-radius: 50px;\r\n}\r\naudio{\r\n    display: none;\r\n    margin: auto;\r\n}\r\n.queue{\r\n    display: block;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    padding:10px;\r\n    margin: 10px;\r\n    border:2px solid rgb(141, 4, 4);\r\n    border-radius: 300px;\r\n    background-color: rgb(177, 250, 8);\r\n    color: rgb(10, 10, 9);\r\n    font-weight: bolder;\r\n    font-size: 1.2rem;\r\n    box-shadow: inset 0px 0px 30px 3px ;\r\n}\r\n.queue:hover{\r\n    font-size: 1.5rem;\r\n}\r\n#bar{\r\n    border:2px solid black;\r\n    margin:20px auto;\r\n    padding:10px;\r\n    border-radius: 60px;\r\n    \r\n    width:70%;\r\n    background-color: rgb(21, 180, 243);\r\n}\r\n#runningBar{\r\n    border:2px solid green;\r\n    border-radius: 10px;\r\n    margin:5px auto;\r\n    width:80%;\r\n    height: 10px;\r\n\r\n}\r\n#runningBar>div{\r\n    height:6px;\r\n    width:0%;\r\n    background-color: black;\r\n}\r\n#vol-control{\r\n    display:none;\r\n    position: absolute;\r\n    top:90px;\r\n    left:80px;\r\n    transform: rotate(-90deg);\r\n}\r\n.timing{\r\n    margin:0px 20px;\r\n    font-weight: bolder;\r\n}\r\n#E_time{\r\nfloat:right;\r\n}\r\n#status{\r\n    margin:-10px 0px;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./ts/images/song-i1.jpg":
/*!*******************************!*\
  !*** ./ts/images/song-i1.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/song-i1.jpg");

/***/ }),

/***/ "./ts/images/song-i2.jpg":
/*!*******************************!*\
  !*** ./ts/images/song-i2.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/song-i2.jpg");

/***/ }),

/***/ "./ts/images/song-i3.jpg":
/*!*******************************!*\
  !*** ./ts/images/song-i3.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/song-i3.jpg");

/***/ }),

/***/ "./ts/images/song-i4.jpg":
/*!*******************************!*\
  !*** ./ts/images/song-i4.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/song-i4.jpg");

/***/ }),

/***/ "./ts/images/song-i5.jpg":
/*!*******************************!*\
  !*** ./ts/images/song-i5.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/song-i5.jpg");

/***/ }),

/***/ "./ts/images/song-i6.jpg":
/*!*******************************!*\
  !*** ./ts/images/song-i6.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/song-i6.jpg");

/***/ }),

/***/ "./ts/images/song-i7.jpg":
/*!*******************************!*\
  !*** ./ts/images/song-i7.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/song-i7.jpg");

/***/ }),

/***/ "./ts/mp3/song1.mp3":
/*!**************************!*\
  !*** ./ts/mp3/song1.mp3 ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("mp3/song1.mp3");

/***/ }),

/***/ "./ts/mp3/song2.mp3":
/*!**************************!*\
  !*** ./ts/mp3/song2.mp3 ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("mp3/song2.mp3");

/***/ }),

/***/ "./ts/mp3/song3.mp3":
/*!**************************!*\
  !*** ./ts/mp3/song3.mp3 ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("mp3/song3.mp3");

/***/ }),

/***/ "./ts/mp3/song4.mp3":
/*!**************************!*\
  !*** ./ts/mp3/song4.mp3 ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("mp3/song4.mp3");

/***/ }),

/***/ "./ts/mp3/song5.mp3":
/*!**************************!*\
  !*** ./ts/mp3/song5.mp3 ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("mp3/song5.mp3");

/***/ }),

/***/ "./ts/mp3/song6.mp3":
/*!**************************!*\
  !*** ./ts/mp3/song6.mp3 ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("mp3/song6.mp3");

/***/ }),

/***/ "./ts/mp3/song7.mp3":
/*!**************************!*\
  !*** ./ts/mp3/song7.mp3 ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("mp3/song7.mp3");

/***/ }),

/***/ "./audio.css":
/*!*******************!*\
  !*** ./audio.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./audio.css */ "./node_modules/css-loader/dist/cjs.js!./audio.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_audio_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./ts/list.ts":
/*!********************!*\
  !*** ./ts/list.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playlist": () => (/* binding */ playlist)
/* harmony export */ });
var playlist = [
    {
        title: "PAANI PAANI BY BADSHA",
        href: {
            song: "mp3/song1.mp3",
            image: "images/song-i1.jpg"
        }
    },
    {
        title: "HELLO",
        href: {
            song: "mp3/song2.mp3",
            image: "images/song-i2.jpg"
        }
    },
    {
        title: "SIP SIP 2.0",
        href: {
            song: "mp3/song3.mp3",
            image: "images/song-i3.jpg"
        }
    },
    {
        title: "MALANG MALANG",
        href: {
            song: "mp3/song4.mp3",
            image: "images/song-i4.jpg"
        }
    },
    {
        title: "NAINO WALEE NE",
        href: {
            song: "mp3/song5.mp3",
            image: "images/song-i5.jpg"
        }
    },
    {
        title: "TERI GALIYAN",
        href: {
            song: "mp3/song6.mp3",
            image: "images/song-i6.jpg"
        }
    },
    {
        title: "FILHAAL2",
        href: {
            song: "mp3/song7.mp3",
            image: "images/song-i7.jpg"
        }
    }
];


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./ts/list.ts");
/* harmony import */ var _audio_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audio.css */ "./audio.css");
/* harmony import */ var _images_song_i1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/song-i1.jpg */ "./ts/images/song-i1.jpg");
/* harmony import */ var _images_song_i2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/song-i2.jpg */ "./ts/images/song-i2.jpg");
/* harmony import */ var _images_song_i3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/song-i3.jpg */ "./ts/images/song-i3.jpg");
/* harmony import */ var _images_song_i4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/song-i4.jpg */ "./ts/images/song-i4.jpg");
/* harmony import */ var _images_song_i5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/song-i5.jpg */ "./ts/images/song-i5.jpg");
/* harmony import */ var _images_song_i6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/song-i6.jpg */ "./ts/images/song-i6.jpg");
/* harmony import */ var _images_song_i7_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/song-i7.jpg */ "./ts/images/song-i7.jpg");
/* harmony import */ var _mp3_song1_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mp3/song1.mp3 */ "./ts/mp3/song1.mp3");
/* harmony import */ var _mp3_song2_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mp3/song2.mp3 */ "./ts/mp3/song2.mp3");
/* harmony import */ var _mp3_song3_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mp3/song3.mp3 */ "./ts/mp3/song3.mp3");
/* harmony import */ var _mp3_song4_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mp3/song4.mp3 */ "./ts/mp3/song4.mp3");
/* harmony import */ var _mp3_song5_mp3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mp3/song5.mp3 */ "./ts/mp3/song5.mp3");
/* harmony import */ var _mp3_song6_mp3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mp3/song6.mp3 */ "./ts/mp3/song6.mp3");
/* harmony import */ var _mp3_song7_mp3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mp3/song7.mp3 */ "./ts/mp3/song7.mp3");
















var all = document.querySelector('#list');
var image = document.querySelector('#image>img');
var audio = document.querySelector('#audio');
var play_pause = document.querySelector("#play");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var shuffle = document.querySelector('#shuffle');
var volume = document.querySelector('#vol-control');
var bar = document.querySelector('#loader');
var runningbar = document.querySelector('#runningBar');
var vol = document.querySelector('#volume');
var start_time = document.querySelector('#S_time');
var end_time = document.querySelector('#E_time');
start_time.innerText = 'start';
end_time.innerText = 'end';
onload = function () {
    createPlaylist();
};
function discStop() {
    image.style.animationPlayState = 'paused';
}
function discStart() {
    image.style.animationPlayState = 'running';
}
// adjust volume
setInterval(loadvolume, 1);
function loadvolume() {
    var x = Number(volume.value);
    var y = x / 100;
    audio.volume = y;
}
// moving bar of the song
setInterval(runningBar, 1);
function runningBar() {
    var current = audio.currentTime;
    var duration = audio.duration;
    var load = Math.floor(current / duration * 100);
    bar.style.width = load + "%";
}
// display current and total duration of the song
setInterval(xyz, 1);
function xyz() {
    var curMins = Math.floor(audio.currentTime / 60);
    var curSecs = Math.floor(audio.currentTime % 60);
    var durMins = Math.floor(audio.duration / 60);
    var durSecs = Math.floor(audio.duration % 60);
    if (curSecs < 10) {
        curSecs = "0" + curSecs;
    }
    if (durSecs < 10) {
        durSecs = "0" + durSecs;
    }
    if (curMins < 10) {
        curMins = "0" + curMins;
    }
    if (durMins < 10) {
        durMins = "0" + durMins;
    }
    if (!audio.paused) {
        start_time.innerHTML = curMins + ":" + curSecs;
        end_time.innerHTML = durMins + ":" + durSecs;
    }
}
function createPlaylist() {
    _list__WEBPACK_IMPORTED_MODULE_0__.playlist.forEach(function (detail) {
        var song = document.createElement('li');
        var link = document.createElement('a');
        var img = document.createElement('img');
        song.setAttribute('class', 'list_song');
        link.href = detail['href']['song'];
        link.name = detail['href']['image'];
        link.setAttribute('class', 'queue');
        link.innerText = detail['title'];
        link.addEventListener('click', loadandplay);
        song.append(link);
        all.append(song);
    });
}
var playing = '';
// playlist play
function loadandplay(e) {
    e.preventDefault();
    image.src = e.target.name;
    audio.src = e.target.href;
    playing = e.target.href;
    audio.load();
    audio.play();
    image.style.border = "5px solid magenta";
    image.style.boxShadow = "0px 0px 100px 20px white";
    discStart();
}
// play button option
play_pause.addEventListener('click', function () {
    if (audio.src == '') {
        audio.src = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[0].href.song;
        playing = "http://localhost:8080/" + _list__WEBPACK_IMPORTED_MODULE_0__.playlist[0].href.song;
        image.src = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[0].href.image;
        discStart();
        image.style.boxShadow = "0px 0px 100px 20px white";
        image.style.border = "5px solid magenta";
    }
    if (audio.paused) {
        audio.play();
        discStart();
    }
    else {
        audio.pause();
        discStop();
    }
});
// shuffling playlist
shuffle.addEventListener('click', function () {
    _list__WEBPACK_IMPORTED_MODULE_0__.playlist.sort(function () { return .5 - Math.random(); });
    all.innerHTML = '';
    createPlaylist();
    discStart();
    audio.pause();
    audio.src = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[0].href.song;
    image.src = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[0].href.image;
    image.style.boxShadow = "0px 0px 100px 20px white";
    image.style.border = "5px solid magenta";
    playing = "http://localhost:8080/" + _list__WEBPACK_IMPORTED_MODULE_0__.playlist[0].href.song;
    audio.play();
});
// adjust volume
vol.addEventListener('click', function (e) {
    volume.style.display = (volume.style.display === 'inline') ? 'none' : 'inline';
    volume.style.left = e.clientX - e.offsetX - 100 + "px";
    volume.style.top = e.clientY - e.offsetY - 100 + "px";
});
// next song
audio.addEventListener('ended', nextone);
next.addEventListener('click', nextone);
function nextone() {
    if (audio.paused) {
        discStart();
    }
    var len = _list__WEBPACK_IMPORTED_MODULE_0__.playlist.length;
    for (var i = 0; i < len; i++) {
        if ("http://localhost:8080/" + _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i]['href']['song'] === playing) {
            if (i == len - 1) {
                i = -1;
            }
            audio.src = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i + 1]['href']['song'];
            playing = "http://localhost:8080/" + _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i + 1]['href']['song'];
            image.src = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i + 1]['href']['image'];
            audio.play();
            return;
        }
    }
}
// previous song
prev.addEventListener('click', prevone);
function prevone() {
    if (audio.paused) {
        discStart();
    }
    var len = _list__WEBPACK_IMPORTED_MODULE_0__.playlist.length;
    for (var i = 0; i < len; i++) {
        if ("http://localhost:8080/" + _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i]['href']['song'] === playing) {
            if (i == 0) {
                i = len;
            }
            audio.src = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i - 1]['href']['song'];
            playing = "http://localhost:8080/" + _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i - 1]['href']['song'];
            image.src = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i - 1]['href']['image'];
            audio.play();
            return;
        }
    }
}
// adjusting song length
runningbar.addEventListener("mousedown", adjust);
function adjust(e) {
    audio.currentTime = ((e.offsetX / 255) * 100) / 100 * audio.duration;
}
setInterval(playpause, 1);
setInterval(curr, 1);
function playpause() {
    var ppimg = document.getElementById("play_pause_image");
    if (audio.paused) {
        ppimg['src'] = "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c4fa.png";
    }
    else {
        ppimg['src'] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ITx1KlhmxXH3CTDi5dVGAkeN1ztxYJjFrg&usqp=CAU";
    }
}
function curr() {
    var state = document.querySelector("#status");
    var len = _list__WEBPACK_IMPORTED_MODULE_0__.playlist.length;
    for (var i = 0; i < len; i++) {
        if (_list__WEBPACK_IMPORTED_MODULE_0__.playlist[i]['href']['song'] === playing) {
            state.innerText = "Track On :- " + _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i]['title'];
            return;
        }
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi9hdWRpby5jc3MiLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi90cy9pbWFnZXMvc29uZy1pMS5qcGciLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vdHMvaW1hZ2VzL3NvbmctaTIuanBnIiwid2VicGFjazovL2F1ZGlvX3BsYXllci8uL3RzL2ltYWdlcy9zb25nLWkzLmpwZyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi90cy9pbWFnZXMvc29uZy1pNC5qcGciLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vdHMvaW1hZ2VzL3NvbmctaTUuanBnIiwid2VicGFjazovL2F1ZGlvX3BsYXllci8uL3RzL2ltYWdlcy9zb25nLWk2LmpwZyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi90cy9pbWFnZXMvc29uZy1pNy5qcGciLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vdHMvbXAzL3NvbmcxLm1wMyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi90cy9tcDMvc29uZzIubXAzIiwid2VicGFjazovL2F1ZGlvX3BsYXllci8uL3RzL21wMy9zb25nMy5tcDMiLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vdHMvbXAzL3Nvbmc0Lm1wMyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi90cy9tcDMvc29uZzUubXAzIiwid2VicGFjazovL2F1ZGlvX3BsYXllci8uL3RzL21wMy9zb25nNi5tcDMiLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vdHMvbXAzL3Nvbmc3Lm1wMyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi9hdWRpby5jc3M/NjAwYiIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2F1ZGlvX3BsYXllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2F1ZGlvX3BsYXllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2F1ZGlvX3BsYXllci8uL3RzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F1ZGlvX3BsYXllci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2F1ZGlvX3BsYXllci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2F1ZGlvX3BsYXllci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFj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U0FBUztBQUM1Qix1Q0FBdUMsMkNBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJDQUFRO0FBQ2hDLGlEQUFpRCwyQ0FBUTtBQUN6RCx3QkFBd0IsMkNBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0RBQWU7QUFDN0IsbUJBQW1CLFNBQVM7QUFDNUIsdUNBQXVDLDJDQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQ0FBUTtBQUNoQyxpREFBaUQsMkNBQVE7QUFDekQsd0JBQXdCLDJDQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtEQUFlO0FBQzdCLG1CQUFtQixTQUFTO0FBQzVCLFlBQVksMkNBQVE7QUFDcEIsK0NBQStDLDJDQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im91dHB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXJ7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDIyLCAyMik7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbiNwbGF5ZXJ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAxODAsIDE4MCk7XFxyXFxufVxcclxcbiNwbGF5ZXI+I2ltYWdle1xcclxcbiAgICB3aWR0aDo0NTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG59XFxyXFxuI3RodW1ibmFpbHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjoyMHB4IGF1dG87XFxyXFxuICAgIHdpZHRoOjMwMDtcXHJcXG4gICAgaGVpZ2h0OjMwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcXHJcXG4gICAgYW5pbWF0aW9uOiByb3RhdGlvbiA5MDAwbXMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuQGtleWZyYW1lcyByb3RhdGlvbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuI2xpc3R7XFxyXFxuICAgIG1hcmdpbjo2MHB4IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIHdpZHRoOjUwMHB4OyBcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDIzNywgMjQxLCAxNikgO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMDBweCA1cHggdmlvbGV0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG4jcGxheWxpc3R7XFxyXFxuICAgIHBhZGRpbmc6MTBweDtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDE4MCwgMTgwKTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAyMDBweCAzMHB4IGJsYWNrO1xcclxcblxcclxcbn1cXHJcXG4jaW1hZ2V7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHllbGxvdztcXHJcXG59XFxyXFxuI2NvbnRyb2x7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigyNDMsIDI0MywgOCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggNDBweCA7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xcclxcbiAgICB3aWR0aDo1MDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIxLCAxMDgsIDIzOCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTAwcHggM3B4IGdyZWVuO1xcclxcbn1cXHJcXG4ubGlzdF9zb25ne1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mdW5jdGlvbntcXHJcXG4gICAgd2lkdGg6MHB4O1xcclxcbiAgICBcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgYm9yZGVyOjBweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luOjBweCA1cHg7XFxyXFxufVxcclxcbi5zb25nX2NvbnRyb2x7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG59XFxyXFxuYXVkaW97XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuLnF1ZXVle1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6MTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYigxNDEsIDQsIDQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMjUwLCA4KTtcXHJcXG4gICAgY29sb3I6IHJnYigxMCwgMTAsIDkpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAzMHB4IDNweCA7XFxyXFxufVxcclxcbi5xdWV1ZTpob3ZlcntcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcbiNiYXJ7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XFxyXFxuICAgIG1hcmdpbjoyMHB4IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6MTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcXHJcXG4gICAgXFxyXFxuICAgIHdpZHRoOjcwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxLCAxODAsIDI0Myk7XFxyXFxufVxcclxcbiNydW5uaW5nQmFye1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIGdyZWVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW46NXB4IGF1dG87XFxyXFxuICAgIHdpZHRoOjgwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcblxcclxcbn1cXHJcXG4jcnVubmluZ0Jhcj5kaXZ7XFxyXFxuICAgIGhlaWdodDo2cHg7XFxyXFxuICAgIHdpZHRoOjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuI3ZvbC1jb250cm9se1xcclxcbiAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOjkwcHg7XFxyXFxuICAgIGxlZnQ6ODBweDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXHJcXG59XFxyXFxuLnRpbWluZ3tcXHJcXG4gICAgbWFyZ2luOjBweCAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG4jRV90aW1le1xcclxcbmZsb2F0OnJpZ2h0O1xcclxcbn1cXHJcXG4jc3RhdHVze1xcclxcbiAgICBtYXJnaW46LTEwcHggMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2F1ZGlvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsMENBQTBDOztBQUU5QztBQUNBO0lBQ0k7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGOztBQUVGO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QiwwQ0FBMEM7SUFDMUMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsMENBQTBDOztBQUU5QztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQ0FBb0M7SUFDcEMseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxTQUFTOztJQUVULG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjs7SUFFbkIsU0FBUztJQUNULG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsU0FBUztJQUNULFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVye1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyMiwgMjIpO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG4jcGxheWVye1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweCA7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMTgwLCAxODApO1xcclxcbn1cXHJcXG4jcGxheWVyPiNpbWFnZXtcXHJcXG4gICAgd2lkdGg6NDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxufVxcclxcbiN0aHVtYm5haWx7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46MjBweCBhdXRvO1xcclxcbiAgICB3aWR0aDozMDA7XFxyXFxuICAgIGhlaWdodDozMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjAwcHg7XFxyXFxuICAgIGFuaW1hdGlvbjogcm90YXRpb24gOTAwMG1zIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gICAgXFxyXFxufVxcclxcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiNsaXN0e1xcclxcbiAgICBtYXJnaW46NjBweCAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICB3aWR0aDo1MDBweDsgXFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigyMzcsIDI0MSwgMTYpIDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTAwcHggNXB4IHZpb2xldDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG59XFxyXFxuI3BsYXlsaXN0e1xcclxcbiAgICBwYWRkaW5nOjEwcHg7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAxODAsIDE4MCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjAwcHggMzBweCBibGFjaztcXHJcXG5cXHJcXG59XFxyXFxuI2ltYWdle1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcbiNjb250cm9se1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjQzLCAyNDMsIDgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHggO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6MjBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogOTBweDtcXHJcXG4gICAgd2lkdGg6NTAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMSwgMTA4LCAyMzgpO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwMHB4IDNweCBncmVlbjtcXHJcXG59XFxyXFxuLmxpc3Rfc29uZ3tcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZnVuY3Rpb257XFxyXFxuICAgIHdpZHRoOjBweDtcXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIGJvcmRlcjowcHggc29saWQgd2hpdGU7XFxyXFxuICAgIG1hcmdpbjowcHggNXB4O1xcclxcbn1cXHJcXG4uc29uZ19jb250cm9se1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxufVxcclxcbmF1ZGlve1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcbi5xdWV1ZXtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBwYWRkaW5nOjEwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMTQxLCA0LCA0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDI1MCwgOCk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTAsIDEwLCA5KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMzBweCAzcHggO1xcclxcbn1cXHJcXG4ucXVldWU6aG92ZXJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG4jYmFye1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBtYXJnaW46MjBweCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOjEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XFxyXFxuICAgIFxcclxcbiAgICB3aWR0aDo3MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMTgwLCAyNDMpO1xcclxcbn1cXHJcXG4jcnVubmluZ0JhcntcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCBncmVlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luOjVweCBhdXRvO1xcclxcbiAgICB3aWR0aDo4MCU7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG5cXHJcXG59XFxyXFxuI3J1bm5pbmdCYXI+ZGl2e1xcclxcbiAgICBoZWlnaHQ6NnB4O1xcclxcbiAgICB3aWR0aDowJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbiN2b2wtY29udHJvbHtcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDo5MHB4O1xcclxcbiAgICBsZWZ0OjgwcHg7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxyXFxufVxcclxcbi50aW1pbmd7XFxyXFxuICAgIG1hcmdpbjowcHggMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuI0VfdGltZXtcXHJcXG5mbG9hdDpyaWdodDtcXHJcXG59XFxyXFxuI3N0YXR1c3tcXHJcXG4gICAgbWFyZ2luOi0xMHB4IDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NvbmctaTEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc29uZy1pMi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zb25nLWkzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NvbmctaTQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc29uZy1pNS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zb25nLWk2LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NvbmctaTcuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJtcDMvc29uZzEubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJtcDMvc29uZzIubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJtcDMvc29uZzMubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJtcDMvc29uZzQubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJtcDMvc29uZzUubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJtcDMvc29uZzYubXAzXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJtcDMvc29uZzcubXAzXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXVkaW8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F1ZGlvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHZhciBwbGF5bGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJQQUFOSSBQQUFOSSBCWSBCQURTSEFcIixcclxuICAgICAgICBocmVmOiB7XHJcbiAgICAgICAgICAgIHNvbmc6IFwibXAzL3NvbmcxLm1wM1wiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJpbWFnZXMvc29uZy1pMS5qcGdcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiSEVMTE9cIixcclxuICAgICAgICBocmVmOiB7XHJcbiAgICAgICAgICAgIHNvbmc6IFwibXAzL3NvbmcyLm1wM1wiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJpbWFnZXMvc29uZy1pMi5qcGdcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU0lQIFNJUCAyLjBcIixcclxuICAgICAgICBocmVmOiB7XHJcbiAgICAgICAgICAgIHNvbmc6IFwibXAzL3NvbmczLm1wM1wiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJpbWFnZXMvc29uZy1pMy5qcGdcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTUFMQU5HIE1BTEFOR1wiLFxyXG4gICAgICAgIGhyZWY6IHtcclxuICAgICAgICAgICAgc29uZzogXCJtcDMvc29uZzQubXAzXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImltYWdlcy9zb25nLWk0LmpwZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJOQUlOTyBXQUxFRSBORVwiLFxyXG4gICAgICAgIGhyZWY6IHtcclxuICAgICAgICAgICAgc29uZzogXCJtcDMvc29uZzUubXAzXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImltYWdlcy9zb25nLWk1LmpwZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJURVJJIEdBTElZQU5cIixcclxuICAgICAgICBocmVmOiB7XHJcbiAgICAgICAgICAgIHNvbmc6IFwibXAzL3Nvbmc2Lm1wM1wiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJpbWFnZXMvc29uZy1pNi5qcGdcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRklMSEFBTDJcIixcclxuICAgICAgICBocmVmOiB7XHJcbiAgICAgICAgICAgIHNvbmc6IFwibXAzL3Nvbmc3Lm1wM1wiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJpbWFnZXMvc29uZy1pNy5qcGdcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHBsYXlsaXN0IH0gZnJvbSAnLi9saXN0JztcclxuaW1wb3J0ICcuLi9hdWRpby5jc3MnO1xyXG5pbXBvcnQgJy4vaW1hZ2VzL3NvbmctaTEuanBnJztcclxuaW1wb3J0ICcuL2ltYWdlcy9zb25nLWkyLmpwZyc7XHJcbmltcG9ydCAnLi9pbWFnZXMvc29uZy1pMy5qcGcnO1xyXG5pbXBvcnQgJy4vaW1hZ2VzL3NvbmctaTQuanBnJztcclxuaW1wb3J0ICcuL2ltYWdlcy9zb25nLWk1LmpwZyc7XHJcbmltcG9ydCAnLi9pbWFnZXMvc29uZy1pNi5qcGcnO1xyXG5pbXBvcnQgJy4vaW1hZ2VzL3NvbmctaTcuanBnJztcclxuaW1wb3J0ICcuL21wMy9zb25nMS5tcDMnO1xyXG5pbXBvcnQgJy4vbXAzL3NvbmcyLm1wMyc7XHJcbmltcG9ydCAnLi9tcDMvc29uZzMubXAzJztcclxuaW1wb3J0ICcuL21wMy9zb25nNC5tcDMnO1xyXG5pbXBvcnQgJy4vbXAzL3Nvbmc1Lm1wMyc7XHJcbmltcG9ydCAnLi9tcDMvc29uZzYubXAzJztcclxuaW1wb3J0ICcuL21wMy9zb25nNy5tcDMnO1xyXG52YXIgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QnKTtcclxudmFyIGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlPmltZycpO1xyXG52YXIgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXVkaW8nKTtcclxudmFyIHBsYXlfcGF1c2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXlcIik7XHJcbnZhciBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2XCIpO1xyXG52YXIgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFwiKTtcclxudmFyIHNodWZmbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2h1ZmZsZScpO1xyXG52YXIgdm9sdW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZvbC1jb250cm9sJyk7XHJcbnZhciBiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZGVyJyk7XHJcbnZhciBydW5uaW5nYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3J1bm5pbmdCYXInKTtcclxudmFyIHZvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2b2x1bWUnKTtcclxudmFyIHN0YXJ0X3RpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjU190aW1lJyk7XHJcbnZhciBlbmRfdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNFX3RpbWUnKTtcclxuc3RhcnRfdGltZS5pbm5lclRleHQgPSAnc3RhcnQnO1xyXG5lbmRfdGltZS5pbm5lclRleHQgPSAnZW5kJztcclxub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY3JlYXRlUGxheWxpc3QoKTtcclxufTtcclxuZnVuY3Rpb24gZGlzY1N0b3AoKSB7XHJcbiAgICBpbWFnZS5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSAncGF1c2VkJztcclxufVxyXG5mdW5jdGlvbiBkaXNjU3RhcnQoKSB7XHJcbiAgICBpbWFnZS5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSAncnVubmluZyc7XHJcbn1cclxuLy8gYWRqdXN0IHZvbHVtZVxyXG5zZXRJbnRlcnZhbChsb2Fkdm9sdW1lLCAxKTtcclxuZnVuY3Rpb24gbG9hZHZvbHVtZSgpIHtcclxuICAgIHZhciB4ID0gTnVtYmVyKHZvbHVtZS52YWx1ZSk7XHJcbiAgICB2YXIgeSA9IHggLyAxMDA7XHJcbiAgICBhdWRpby52b2x1bWUgPSB5O1xyXG59XHJcbi8vIG1vdmluZyBiYXIgb2YgdGhlIHNvbmdcclxuc2V0SW50ZXJ2YWwocnVubmluZ0JhciwgMSk7XHJcbmZ1bmN0aW9uIHJ1bm5pbmdCYXIoKSB7XHJcbiAgICB2YXIgY3VycmVudCA9IGF1ZGlvLmN1cnJlbnRUaW1lO1xyXG4gICAgdmFyIGR1cmF0aW9uID0gYXVkaW8uZHVyYXRpb247XHJcbiAgICB2YXIgbG9hZCA9IE1hdGguZmxvb3IoY3VycmVudCAvIGR1cmF0aW9uICogMTAwKTtcclxuICAgIGJhci5zdHlsZS53aWR0aCA9IGxvYWQgKyBcIiVcIjtcclxufVxyXG4vLyBkaXNwbGF5IGN1cnJlbnQgYW5kIHRvdGFsIGR1cmF0aW9uIG9mIHRoZSBzb25nXHJcbnNldEludGVydmFsKHh5eiwgMSk7XHJcbmZ1bmN0aW9uIHh5eigpIHtcclxuICAgIHZhciBjdXJNaW5zID0gTWF0aC5mbG9vcihhdWRpby5jdXJyZW50VGltZSAvIDYwKTtcclxuICAgIHZhciBjdXJTZWNzID0gTWF0aC5mbG9vcihhdWRpby5jdXJyZW50VGltZSAlIDYwKTtcclxuICAgIHZhciBkdXJNaW5zID0gTWF0aC5mbG9vcihhdWRpby5kdXJhdGlvbiAvIDYwKTtcclxuICAgIHZhciBkdXJTZWNzID0gTWF0aC5mbG9vcihhdWRpby5kdXJhdGlvbiAlIDYwKTtcclxuICAgIGlmIChjdXJTZWNzIDwgMTApIHtcclxuICAgICAgICBjdXJTZWNzID0gXCIwXCIgKyBjdXJTZWNzO1xyXG4gICAgfVxyXG4gICAgaWYgKGR1clNlY3MgPCAxMCkge1xyXG4gICAgICAgIGR1clNlY3MgPSBcIjBcIiArIGR1clNlY3M7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VyTWlucyA8IDEwKSB7XHJcbiAgICAgICAgY3VyTWlucyA9IFwiMFwiICsgY3VyTWlucztcclxuICAgIH1cclxuICAgIGlmIChkdXJNaW5zIDwgMTApIHtcclxuICAgICAgICBkdXJNaW5zID0gXCIwXCIgKyBkdXJNaW5zO1xyXG4gICAgfVxyXG4gICAgaWYgKCFhdWRpby5wYXVzZWQpIHtcclxuICAgICAgICBzdGFydF90aW1lLmlubmVySFRNTCA9IGN1ck1pbnMgKyBcIjpcIiArIGN1clNlY3M7XHJcbiAgICAgICAgZW5kX3RpbWUuaW5uZXJIVE1MID0gZHVyTWlucyArIFwiOlwiICsgZHVyU2VjcztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjcmVhdGVQbGF5bGlzdCgpIHtcclxuICAgIHBsYXlsaXN0LmZvckVhY2goZnVuY3Rpb24gKGRldGFpbCkge1xyXG4gICAgICAgIHZhciBzb25nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgc29uZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3Rfc29uZycpO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IGRldGFpbFsnaHJlZiddWydzb25nJ107XHJcbiAgICAgICAgbGluay5uYW1lID0gZGV0YWlsWydocmVmJ11bJ2ltYWdlJ107XHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3F1ZXVlJyk7XHJcbiAgICAgICAgbGluay5pbm5lclRleHQgPSBkZXRhaWxbJ3RpdGxlJ107XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRhbmRwbGF5KTtcclxuICAgICAgICBzb25nLmFwcGVuZChsaW5rKTtcclxuICAgICAgICBhbGwuYXBwZW5kKHNvbmcpO1xyXG4gICAgfSk7XHJcbn1cclxudmFyIHBsYXlpbmcgPSAnJztcclxuLy8gcGxheWxpc3QgcGxheVxyXG5mdW5jdGlvbiBsb2FkYW5kcGxheShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpbWFnZS5zcmMgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgYXVkaW8uc3JjID0gZS50YXJnZXQuaHJlZjtcclxuICAgIHBsYXlpbmcgPSBlLnRhcmdldC5ocmVmO1xyXG4gICAgYXVkaW8ubG9hZCgpO1xyXG4gICAgYXVkaW8ucGxheSgpO1xyXG4gICAgaW1hZ2Uuc3R5bGUuYm9yZGVyID0gXCI1cHggc29saWQgbWFnZW50YVwiO1xyXG4gICAgaW1hZ2Uuc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4IDEwMHB4IDIwcHggd2hpdGVcIjtcclxuICAgIGRpc2NTdGFydCgpO1xyXG59XHJcbi8vIHBsYXkgYnV0dG9uIG9wdGlvblxyXG5wbGF5X3BhdXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGF1ZGlvLnNyYyA9PSAnJykge1xyXG4gICAgICAgIGF1ZGlvLnNyYyA9IHBsYXlsaXN0WzBdWydocmVmJ11bJ3NvbmcnXTtcclxuICAgICAgICBwbGF5aW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCIgKyBwbGF5bGlzdFswXVsnaHJlZiddWydzb25nJ107XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gcGxheWxpc3RbMF1bJ2hyZWYnXVsnaW1hZ2UnXTtcclxuICAgICAgICBkaXNjU3RhcnQoKTtcclxuICAgICAgICBpbWFnZS5zdHlsZS5ib3hTaGFkb3cgPSBcIjBweCAwcHggMTAwcHggMjBweCB3aGl0ZVwiO1xyXG4gICAgICAgIGltYWdlLnN0eWxlLmJvcmRlciA9IFwiNXB4IHNvbGlkIG1hZ2VudGFcIjtcclxuICAgIH1cclxuICAgIGlmIChhdWRpby5wYXVzZWQpIHtcclxuICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgZGlzY1N0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhdWRpby5wYXVzZSgpO1xyXG4gICAgICAgIGRpc2NTdG9wKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4vLyBzaHVmZmxpbmcgcGxheWxpc3Rcclxuc2h1ZmZsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXlsaXN0LnNvcnQoZnVuY3Rpb24gKCkgeyByZXR1cm4gLjUgLSBNYXRoLnJhbmRvbSgpOyB9KTtcclxuICAgIGFsbC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNyZWF0ZVBsYXlsaXN0KCk7XHJcbiAgICBkaXNjU3RhcnQoKTtcclxuICAgIGF1ZGlvLnBhdXNlKCk7XHJcbiAgICBhdWRpby5zcmMgPSBwbGF5bGlzdFswXVsnaHJlZiddWydzb25nJ107XHJcbiAgICBpbWFnZS5zcmMgPSBwbGF5bGlzdFswXVsnaHJlZiddWydpbWFnZSddO1xyXG4gICAgaW1hZ2Uuc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4IDEwMHB4IDIwcHggd2hpdGVcIjtcclxuICAgIGltYWdlLnN0eWxlLmJvcmRlciA9IFwiNXB4IHNvbGlkIG1hZ2VudGFcIjtcclxuICAgIHBsYXlpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIiArIHBsYXlsaXN0WzBdWydocmVmJ11bJ3NvbmcnXTtcclxuICAgIGF1ZGlvLnBsYXkoKTtcclxufSk7XHJcbi8vIGFkanVzdCB2b2x1bWVcclxudm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIHZvbHVtZS5zdHlsZS5kaXNwbGF5ID0gKHZvbHVtZS5zdHlsZS5kaXNwbGF5ID09PSAnaW5saW5lJykgPyAnbm9uZScgOiAnaW5saW5lJztcclxuICAgIHZvbHVtZS5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYIC0gZS5vZmZzZXRYIC0gMTAwICsgXCJweFwiO1xyXG4gICAgdm9sdW1lLnN0eWxlLnRvcCA9IGUuY2xpZW50WSAtIGUub2Zmc2V0WSAtIDEwMCArIFwicHhcIjtcclxufSk7XHJcbi8vIG5leHQgc29uZ1xyXG5hdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIG5leHRvbmUpO1xyXG5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dG9uZSk7XHJcbmZ1bmN0aW9uIG5leHRvbmUoKSB7XHJcbiAgICBpZiAoYXVkaW8ucGF1c2VkKSB7XHJcbiAgICAgICAgZGlzY1N0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICB2YXIgbGVuID0gcGxheWxpc3QubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGlmIChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIiArIHBsYXlsaXN0W2ldWydocmVmJ11bJ3NvbmcnXSA9PT0gcGxheWluZykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSBsZW4gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXVkaW8uc3JjID0gcGxheWxpc3RbaSArIDFdWydocmVmJ11bJ3NvbmcnXTtcclxuICAgICAgICAgICAgcGxheWluZyA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiICsgcGxheWxpc3RbaSArIDFdWydocmVmJ11bJ3NvbmcnXTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcGxheWxpc3RbaSArIDFdWydocmVmJ11bJ2ltYWdlJ107XHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBwcmV2aW91cyBzb25nXHJcbnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2b25lKTtcclxuZnVuY3Rpb24gcHJldm9uZSgpIHtcclxuICAgIGlmIChhdWRpby5wYXVzZWQpIHtcclxuICAgICAgICBkaXNjU3RhcnQoKTtcclxuICAgIH1cclxuICAgIHZhciBsZW4gPSBwbGF5bGlzdC5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiICsgcGxheWxpc3RbaV1bJ2hyZWYnXVsnc29uZyddID09PSBwbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgIGkgPSBsZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXVkaW8uc3JjID0gcGxheWxpc3RbaSAtIDFdWydocmVmJ11bJ3NvbmcnXTtcclxuICAgICAgICAgICAgcGxheWluZyA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiICsgcGxheWxpc3RbaSAtIDFdWydocmVmJ11bJ3NvbmcnXTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcGxheWxpc3RbaSAtIDFdWydocmVmJ11bJ2ltYWdlJ107XHJcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyBhZGp1c3Rpbmcgc29uZyBsZW5ndGhcclxucnVubmluZ2Jhci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGFkanVzdCk7XHJcbmZ1bmN0aW9uIGFkanVzdChlKSB7XHJcbiAgICBhdWRpby5jdXJyZW50VGltZSA9ICgoZS5vZmZzZXRYIC8gMjU1KSAqIDEwMCkgLyAxMDAgKiBhdWRpby5kdXJhdGlvbjtcclxufVxyXG5zZXRJbnRlcnZhbChwbGF5cGF1c2UsIDEpO1xyXG5zZXRJbnRlcnZhbChjdXJyLCAxKTtcclxuZnVuY3Rpb24gcGxheXBhdXNlKCkge1xyXG4gICAgdmFyIHBwaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5X3BhdXNlX2ltYWdlXCIpO1xyXG4gICAgaWYgKGF1ZGlvLnBhdXNlZCkge1xyXG4gICAgICAgIHBwaW1nWydzcmMnXSA9IFwiaHR0cHM6Ly9hc3NldHMuc3RpY2twbmcuY29tL3RodW1icy81ODBiNTdmY2Q5OTk2ZTI0YmM0M2M0ZmEucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBwcGltZ1snc3JjJ10gPSBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1M5SVR4MUtsaG14WEgzQ1REaTVkVkdBa2VOMXp0eFlKakZyZyZ1c3FwPUNBVVwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGN1cnIoKSB7XHJcbiAgICB2YXIgc3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXR1c1wiKTtcclxuICAgIHZhciBsZW4gPSBwbGF5bGlzdC5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHBsYXlsaXN0W2ldWydocmVmJ11bJ3NvbmcnXSA9PT0gcGxheWluZykge1xyXG4gICAgICAgICAgICBzdGF0ZS5pbm5lclRleHQgPSBcIlRyYWNrIE9uIDotIFwiICsgcGxheWxpc3RbaV1bJ3RpdGxlJ107XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==