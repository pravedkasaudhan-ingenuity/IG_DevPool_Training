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
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    box-sizing: border-box;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\n#container{\r\n    border: 3px solid black;\r\n    background-color: rgb(24, 22, 22);\r\n    display:flex;\r\n    justify-content: space-around;\r\n    height: 100vh;\r\n    /* background: url(./ts/images/bg1.jpg) no-repeat center center/cover; */\r\n}\r\n#player{\r\n    /* margin:20px; */\r\n    margin-left: 50px;\r\n    padding: 20px ;\r\n    border: 2px solid red;\r\n    border-radius: 60px;\r\n    background-color: rgb(235, 180, 180);\r\n}\r\n#player>#image{\r\n    width:450px;\r\n    height: 350px;\r\n    margin: auto;\r\n    background-color: black;\r\n    border-radius: 50px;\r\n}\r\n#thumbnail{\r\n    display: block;\r\n    margin:20px auto;\r\n    width:300;\r\n    height:300px;\r\n    /* border:10px solid black; */\r\n    border-radius: 200px;\r\n    animation: rotation 9000ms linear infinite;\r\n    /* box-shadow:  0px 0px 10px 10px red ; */\r\n    \r\n}\r\n@keyframes rotation {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n#list{\r\n    margin:60px 20px;\r\n    padding: 30px;\r\n    width:500px; \r\n    height: 80%;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border: 5px solid rgb(237, 241, 16) ;\r\n    background-color: black;\r\n    box-shadow: inset 0px 0px 100px 5px violet;\r\n    border-radius: 30px;\r\n}\r\n#playlist{\r\n    /* margin:20px; */\r\n    padding:10px;\r\n    border:2px solid red;\r\n    border-radius: 30px;\r\n    background-color: rgb(235, 180, 180);\r\n    box-shadow: inset 0px 0px 200px 30px black;\r\n\r\n}\r\n#image{\r\n    border: 5px solid yellow;\r\n}\r\n#control{\r\n    border: 5px solid rgb(243, 243, 8);\r\n    border-radius: 50px;\r\n    padding: 20px 40px ;\r\n    margin: auto;\r\n    margin-top:20px;\r\n    padding-right: 90px;\r\n    width:500px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: rgb(121, 108, 238);\r\n    box-shadow: inset 0px 0px 100px 3px green;\r\n}\r\n.list_song{\r\n    list-style-type: none;\r\n}\r\n\r\n.function{\r\n    width:0px;\r\n    \r\n    border-radius: 50px;\r\n    border:0px solid white;\r\n    /* background-color: yellow; */\r\n    margin:0px 5px;\r\n}\r\n.song_control{\r\n    /* width:40px; */\r\n    height: 50px;\r\n    border-radius: 50px;\r\n}\r\naudio{\r\n    /* visibility: hidden; */\r\n    display: none;\r\n    /* display: block; */\r\n    margin: auto;\r\n}\r\n.queue{\r\n    display: block;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    padding:10px;\r\n    margin: 10px;\r\n    border:2px solid rgb(141, 4, 4);\r\n    border-radius: 300px;\r\n    background-color: rgb(177, 250, 8);\r\n    color: rgb(10, 10, 9);\r\n    font-weight: bolder;\r\n    font-size: 1.2rem;\r\n    box-shadow: inset 0px 0px 30px 3px ;\r\n}\r\n.queue:hover{\r\n    font-size: 1.5rem;\r\n}\r\n#bar{\r\n    border:2px solid black;\r\n    margin:20px auto;\r\n    padding:10px;\r\n    border-radius: 60px;\r\n    \r\n    width:70%;\r\n    background-color: rgb(21, 180, 243);\r\n}\r\n#runningBar{\r\n    /* padding:2px ; */\r\n    border:2px solid green;\r\n    border-radius: 10px;\r\n    margin:5px auto;\r\n    width:80%;\r\n    height: 10px;\r\n\r\n}\r\n#runningBar>div{\r\n    height:6px;\r\n    width:0%;\r\n    background-color: black;\r\n}\r\n#vol-control{\r\n    display:none;\r\n    position: absolute;\r\n    top:90px;\r\n    left:80px;\r\n    transform: rotate(-90deg);\r\n}\r\n.timing{\r\n    margin:0px 20px;\r\n    font-weight: bolder;\r\n}\r\n#E_time{\r\nfloat:right;\r\n}\r\n#status{\r\n    margin:-10px 0px;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n}", "",{"version":3,"sources":["webpack://./audio.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,iCAAiC;IACjC,YAAY;IACZ,6BAA6B;IAC7B,aAAa;IACb,wEAAwE;AAC5E;AACA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;IACd,qBAAqB;IACrB,mBAAmB;IACnB,oCAAoC;AACxC;AACA;IACI,WAAW;IACX,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,gBAAgB;IAChB,SAAS;IACT,YAAY;IACZ,6BAA6B;IAC7B,oBAAoB;IACpB,0CAA0C;IAC1C,yCAAyC;;AAE7C;AACA;IACI;MACE,uBAAuB;IACzB;IACA;MACE,yBAAyB;IAC3B;EACF;;AAEF;IACI,gBAAgB;IAChB,aAAa;IACb,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,oCAAoC;IACpC,uBAAuB;IACvB,0CAA0C;IAC1C,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,YAAY;IACZ,oBAAoB;IACpB,mBAAmB;IACnB,oCAAoC;IACpC,0CAA0C;;AAE9C;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,kCAAkC;IAClC,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,oCAAoC;IACpC,yCAAyC;AAC7C;AACA;IACI,qBAAqB;AACzB;;AAEA;IACI,SAAS;;IAET,mBAAmB;IACnB,sBAAsB;IACtB,8BAA8B;IAC9B,cAAc;AAClB;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,oBAAoB;IACpB,YAAY;AAChB;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,YAAY;IACZ,+BAA+B;IAC/B,oBAAoB;IACpB,kCAAkC;IAClC,qBAAqB;IACrB,mBAAmB;IACnB,iBAAiB;IACjB,mCAAmC;AACvC;AACA;IACI,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;;IAEnB,SAAS;IACT,mCAAmC;AACvC;AACA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;IACf,SAAS;IACT,YAAY;;AAEhB;AACA;IACI,UAAU;IACV,QAAQ;IACR,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;AACA,WAAW;AACX;AACA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB","sourcesContent":["*{\r\n    box-sizing: border-box;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\n#container{\r\n    border: 3px solid black;\r\n    background-color: rgb(24, 22, 22);\r\n    display:flex;\r\n    justify-content: space-around;\r\n    height: 100vh;\r\n    /* background: url(./ts/images/bg1.jpg) no-repeat center center/cover; */\r\n}\r\n#player{\r\n    /* margin:20px; */\r\n    margin-left: 50px;\r\n    padding: 20px ;\r\n    border: 2px solid red;\r\n    border-radius: 60px;\r\n    background-color: rgb(235, 180, 180);\r\n}\r\n#player>#image{\r\n    width:450px;\r\n    height: 350px;\r\n    margin: auto;\r\n    background-color: black;\r\n    border-radius: 50px;\r\n}\r\n#thumbnail{\r\n    display: block;\r\n    margin:20px auto;\r\n    width:300;\r\n    height:300px;\r\n    /* border:10px solid black; */\r\n    border-radius: 200px;\r\n    animation: rotation 9000ms linear infinite;\r\n    /* box-shadow:  0px 0px 10px 10px red ; */\r\n    \r\n}\r\n@keyframes rotation {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n#list{\r\n    margin:60px 20px;\r\n    padding: 30px;\r\n    width:500px; \r\n    height: 80%;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    border: 5px solid rgb(237, 241, 16) ;\r\n    background-color: black;\r\n    box-shadow: inset 0px 0px 100px 5px violet;\r\n    border-radius: 30px;\r\n}\r\n#playlist{\r\n    /* margin:20px; */\r\n    padding:10px;\r\n    border:2px solid red;\r\n    border-radius: 30px;\r\n    background-color: rgb(235, 180, 180);\r\n    box-shadow: inset 0px 0px 200px 30px black;\r\n\r\n}\r\n#image{\r\n    border: 5px solid yellow;\r\n}\r\n#control{\r\n    border: 5px solid rgb(243, 243, 8);\r\n    border-radius: 50px;\r\n    padding: 20px 40px ;\r\n    margin: auto;\r\n    margin-top:20px;\r\n    padding-right: 90px;\r\n    width:500px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: rgb(121, 108, 238);\r\n    box-shadow: inset 0px 0px 100px 3px green;\r\n}\r\n.list_song{\r\n    list-style-type: none;\r\n}\r\n\r\n.function{\r\n    width:0px;\r\n    \r\n    border-radius: 50px;\r\n    border:0px solid white;\r\n    /* background-color: yellow; */\r\n    margin:0px 5px;\r\n}\r\n.song_control{\r\n    /* width:40px; */\r\n    height: 50px;\r\n    border-radius: 50px;\r\n}\r\naudio{\r\n    /* visibility: hidden; */\r\n    display: none;\r\n    /* display: block; */\r\n    margin: auto;\r\n}\r\n.queue{\r\n    display: block;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    padding:10px;\r\n    margin: 10px;\r\n    border:2px solid rgb(141, 4, 4);\r\n    border-radius: 300px;\r\n    background-color: rgb(177, 250, 8);\r\n    color: rgb(10, 10, 9);\r\n    font-weight: bolder;\r\n    font-size: 1.2rem;\r\n    box-shadow: inset 0px 0px 30px 3px ;\r\n}\r\n.queue:hover{\r\n    font-size: 1.5rem;\r\n}\r\n#bar{\r\n    border:2px solid black;\r\n    margin:20px auto;\r\n    padding:10px;\r\n    border-radius: 60px;\r\n    \r\n    width:70%;\r\n    background-color: rgb(21, 180, 243);\r\n}\r\n#runningBar{\r\n    /* padding:2px ; */\r\n    border:2px solid green;\r\n    border-radius: 10px;\r\n    margin:5px auto;\r\n    width:80%;\r\n    height: 10px;\r\n\r\n}\r\n#runningBar>div{\r\n    height:6px;\r\n    width:0%;\r\n    background-color: black;\r\n}\r\n#vol-control{\r\n    display:none;\r\n    position: absolute;\r\n    top:90px;\r\n    left:80px;\r\n    transform: rotate(-90deg);\r\n}\r\n.timing{\r\n    margin:0px 20px;\r\n    font-weight: bolder;\r\n}\r\n#E_time{\r\nfloat:right;\r\n}\r\n#status{\r\n    margin:-10px 0px;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n}"],"sourceRoot":""}]);
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
            song: "./mp3/song1.mp3",
            image: "images/song-i1.jpg"
        }
    },
    {
        title: "HELLO",
        href: {
            song: "./mp3/song2.mp3",
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
        title: "TITLI SONG",
        href: {
            song: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/tainu-jaandi-na-jaani-ve-eh-duniya-54388.mp3",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9vOXWulCMhX6iqTaCZme0SIV8CmhUiBs-Q&usqp=CAU"
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
// export=playlist;


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
















// let playlist=require('./list.ts');
// var exports={};
// var playlist=[{
//     title:"PAANI PAANI BY BADSHA",
//     href:{
//         song:"./files/mp3/song1.mp3",
//         image:"./files/images/audio-i1.jpg"
//     }
// }];
console.log("hello");
var counter = 0;
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
// console.log(bar);
// let con=document.getElementById('container');
// con.style.background=' url(./ts/images/bg1.jpg) no-repeat center center/cover';
onload = function () {
    createPlaylist();
    //    image.style.border='10px solid black';
};
// function discRotate(){
//     image.animate([
//         // keyframes
//         { transform: 'rotate(0deg)' },
//         { transform: 'rotate(360deg)' }
//     ], {
//         // timing options
//         duration: 5000,
//         iterations: Infinity,
//     });
//     image.style.animationPlayState='running';
// }
function discStop() {
    console.log('disc stop');
    image.style.animationPlayState = 'paused';
}
function discStart() {
    console.log('disc start');
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
    // bar.style.backgroundColor='black';
    var load = Math.floor(current / duration * 100);
    bar.style.width = load + "%";
    // console.log(load);
}
// display current and total duration of the song
setInterval(xyz, 1);
function xyz() {
    // console.log(audio.paused);
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
    // let current=String(Math.trunc(audio.currentTime/60))+":"+Math.trunc(audio.currentTime%60);
    // let duration=String(Math.trunc(audio.duration/60))+":"+Math.trunc(audio.duration%60);
    // if(!audio.paused){
    // start_time.innerText=`${current}`;
    // end_time.innerText=`${duration}`;
}
function createPlaylist() {
    console.log('creating playlist');
    _list__WEBPACK_IMPORTED_MODULE_0__.playlist.forEach(function (detail) {
        var song = document.createElement('li');
        var link = document.createElement('a');
        var img = document.createElement('img');
        // img.src=detail['image'];
        // song.class="goingon";
        song.setAttribute('class', 'list_song');
        link.href = detail['href']['song'];
        link.name = detail['href']['image'];
        link.setAttribute('class', 'queue');
        link.innerText = detail['title'];
        link.addEventListener('click', loadandplay);
        song.append(link);
        //    console.log(song);
        all.append(song);
        // console.log(all);
    });
}
var playing = '';
// audio.crossOrigin = 'anonymous';
// playlist play
function loadandplay(e) {
    e.preventDefault();
    image.src = e.target.name;
    audio.src = e.target.href;
    playing = e.target.href;
    audio.load();
    console.log("loaded");
    audio.play();
    image.style.border = "5px solid magenta";
    image.style.boxShadow = "0px 0px 100px 20px white";
    discStart();
}
// play button option
play_pause.addEventListener('click', function () {
    console.log("play button clicked");
    if (audio.src == '') {
        audio.src = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[0].href.song;
        playing = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[0].href.song;
        image.src = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[0].href.image;
        discStart();
    }
    // image.style.animation="rotation 5s infinite";
    image.style.boxShadow = "0px 0px 100px 20px white";
    image.style.border = "5px solid magenta";
    if (audio.paused) {
        audio.play();
        discStart();
    }
    else {
        audio.pause();
        discStop();
    }
    // console.log(audio.currentTime);
    // console.log(audio.duration);
});
// shuffling playlist
shuffle.addEventListener('click', function () {
    _list__WEBPACK_IMPORTED_MODULE_0__.playlist.sort(function () { return .5 - Math.random(); });
    all.innerHTML = '';
    createPlaylist();
    audio.pause();
    audio.src = '';
    image.src = '';
    image.style.border = '';
    bar.style.width = '0%';
    discStop();
});
// adjust volume
vol.addEventListener('click', function (e) {
    volume.style.display = (volume.style.display === 'inline') ? 'none' : 'inline';
    // console.log(e.clientX,e.clientY);
    volume.style.left = e.clientX - e.offsetX - 100 + "px";
    volume.style.top = e.clientY - e.offsetY - 100 + "px";
});
// next song
audio.addEventListener('ended', nextone);
next.addEventListener('click', nextone);
function nextone() {
    // console.log("next clicked");
    if (audio.paused) {
        discStart();
    }
    var len = _list__WEBPACK_IMPORTED_MODULE_0__.playlist.length;
    // console.log(len);
    // console.log(playing);
    for (var i = 0; i < len; i++) {
        if (_list__WEBPACK_IMPORTED_MODULE_0__.playlist[i]['href']['song'] === playing) {
            if (i == len - 1) {
                i = -1;
            }
            audio.src = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i + 1]['href']['song'];
            playing = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i + 1]['href']['song'];
            image.src = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i + 1]['href']['image'];
            audio.play();
            return;
        }
    }
}
// previous song
prev.addEventListener('click', prevone);
function prevone() {
    // console.log("prev clicked");
    if (audio.paused) {
        discStart();
    }
    var len = _list__WEBPACK_IMPORTED_MODULE_0__.playlist.length;
    // console.log(len);
    // console.log(playing);
    for (var i = 0; i < len; i++) {
        if (_list__WEBPACK_IMPORTED_MODULE_0__.playlist[i]['href']['song'] === playing) {
            if (i == 0) {
                i = len;
            }
            audio.src = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i - 1]['href']['song'];
            playing = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i - 1]['href']['song'];
            image.src = _list__WEBPACK_IMPORTED_MODULE_0__.playlist[i - 1]['href']['image'];
            audio.play();
            return;
        }
    }
}
// adjusting song length
runningbar.addEventListener("mousedown", adjust);
// runningbar.addEventListener("mousemove",adjust);
function adjust(e) {
    console.log("adjust called", e.offsetX);
    // bar.style.width=`${e.offsetX}%`;
    audio.currentTime = ((e.offsetX / 255) * 100) / 100 * audio.duration;
}
setInterval(playpause, 1);
setInterval(curr, 1);
function playpause() {
    var ppimg = document.getElementById("play_pause_image");
    if (audio.paused) {
        console.log(audio.paused);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi9hdWRpby5jc3MiLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi90cy9pbWFnZXMvc29uZy1pMS5qcGciLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vdHMvaW1hZ2VzL3NvbmctaTIuanBnIiwid2VicGFjazovL2F1ZGlvX3BsYXllci8uL3RzL2ltYWdlcy9zb25nLWkzLmpwZyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi90cy9pbWFnZXMvc29uZy1pNC5qcGciLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vdHMvaW1hZ2VzL3NvbmctaTUuanBnIiwid2VicGFjazovL2F1ZGlvX3BsYXllci8uL3RzL2ltYWdlcy9zb25nLWk2LmpwZyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi90cy9pbWFnZXMvc29uZy1pNy5qcGciLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vdHMvbXAzL3NvbmcxLm1wMyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi90cy9tcDMvc29uZzIubXAzIiwid2VicGFjazovL2F1ZGlvX3BsYXllci8uL3RzL21wMy9zb25nMy5tcDMiLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vdHMvbXAzL3Nvbmc0Lm1wMyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi90cy9tcDMvc29uZzUubXAzIiwid2VicGFjazovL2F1ZGlvX3BsYXllci8uL3RzL21wMy9zb25nNi5tcDMiLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vdHMvbXAzL3Nvbmc3Lm1wMyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi9hdWRpby5jc3M/NjAwYiIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2F1ZGlvX3BsYXllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2F1ZGlvX3BsYXllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2F1ZGlvX3BsYXllci8uL3RzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vYXVkaW9fcGxheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F1ZGlvX3BsYXllci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hdWRpb19wbGF5ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2F1ZGlvX3BsYXllci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2F1ZGlvX3BsYXllci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFj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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0RBQWU7QUFDN0IsbUJBQW1CLFNBQVM7QUFDNUIsWUFBWSwyQ0FBUTtBQUNwQiwrQ0FBK0MsMkNBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoib3V0cHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lcntcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjIsIDIyKTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKC4vdHMvaW1hZ2VzL2JnMS5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyOyAqL1xcclxcbn1cXHJcXG4jcGxheWVye1xcclxcbiAgICAvKiBtYXJnaW46MjBweDsgKi9cXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDE4MCwgMTgwKTtcXHJcXG59XFxyXFxuI3BsYXllcj4jaW1hZ2V7XFxyXFxuICAgIHdpZHRoOjQ1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG4jdGh1bWJuYWlse1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOjIwcHggYXV0bztcXHJcXG4gICAgd2lkdGg6MzAwO1xcclxcbiAgICBoZWlnaHQ6MzAwcHg7XFxyXFxuICAgIC8qIGJvcmRlcjoxMHB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcXHJcXG4gICAgYW5pbWF0aW9uOiByb3RhdGlvbiA5MDAwbXMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICAvKiBib3gtc2hhZG93OiAgMHB4IDBweCAxMHB4IDEwcHggcmVkIDsgKi9cXHJcXG4gICAgXFxyXFxufVxcclxcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiNsaXN0e1xcclxcbiAgICBtYXJnaW46NjBweCAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICB3aWR0aDo1MDBweDsgXFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigyMzcsIDI0MSwgMTYpIDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTAwcHggNXB4IHZpb2xldDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG59XFxyXFxuI3BsYXlsaXN0e1xcclxcbiAgICAvKiBtYXJnaW46MjBweDsgKi9cXHJcXG4gICAgcGFkZGluZzoxMHB4O1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJlZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMTgwLCAxODApO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIwMHB4IDMwcHggYmxhY2s7XFxyXFxuXFxyXFxufVxcclxcbiNpbWFnZXtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgeWVsbG93O1xcclxcbn1cXHJcXG4jY29udHJvbHtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDI0MywgMjQzLCA4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweCA0MHB4IDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOjIwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDkwcHg7XFxyXFxuICAgIHdpZHRoOjUwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjEsIDEwOCwgMjM4KTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMDBweCAzcHggZ3JlZW47XFxyXFxufVxcclxcbi5saXN0X3Nvbmd7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZ1bmN0aW9ue1xcclxcbiAgICB3aWR0aDowcHg7XFxyXFxuICAgIFxcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBib3JkZXI6MHB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7ICovXFxyXFxuICAgIG1hcmdpbjowcHggNXB4O1xcclxcbn1cXHJcXG4uc29uZ19jb250cm9se1xcclxcbiAgICAvKiB3aWR0aDo0MHB4OyAqL1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxufVxcclxcbmF1ZGlve1xcclxcbiAgICAvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICovXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcbi5xdWV1ZXtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBwYWRkaW5nOjEwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMTQxLCA0LCA0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDI1MCwgOCk7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTAsIDEwLCA5KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMzBweCAzcHggO1xcclxcbn1cXHJcXG4ucXVldWU6aG92ZXJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG4jYmFye1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBtYXJnaW46MjBweCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOjEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XFxyXFxuICAgIFxcclxcbiAgICB3aWR0aDo3MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMTgwLCAyNDMpO1xcclxcbn1cXHJcXG4jcnVubmluZ0JhcntcXHJcXG4gICAgLyogcGFkZGluZzoycHggOyAqL1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIGdyZWVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW46NXB4IGF1dG87XFxyXFxuICAgIHdpZHRoOjgwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcblxcclxcbn1cXHJcXG4jcnVubmluZ0Jhcj5kaXZ7XFxyXFxuICAgIGhlaWdodDo2cHg7XFxyXFxuICAgIHdpZHRoOjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuI3ZvbC1jb250cm9se1xcclxcbiAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOjkwcHg7XFxyXFxuICAgIGxlZnQ6ODBweDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXHJcXG59XFxyXFxuLnRpbWluZ3tcXHJcXG4gICAgbWFyZ2luOjBweCAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG4jRV90aW1le1xcclxcbmZsb2F0OnJpZ2h0O1xcclxcbn1cXHJcXG4jc3RhdHVze1xcclxcbiAgICBtYXJnaW46LTEwcHggMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2F1ZGlvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGFBQWE7SUFDYix3RUFBd0U7QUFDNUU7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQiwwQ0FBMEM7SUFDMUMseUNBQXlDOztBQUU3QztBQUNBO0lBQ0k7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGOztBQUVGO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QiwwQ0FBMEM7SUFDMUMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLDBDQUEwQzs7QUFFOUM7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLHlDQUF5QztBQUM3QztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksU0FBUzs7SUFFVCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQyxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1COztJQUVuQixTQUFTO0lBQ1QsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsU0FBUztJQUNULFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVye1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyMiwgMjIpO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoLi90cy9pbWFnZXMvYmcxLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7ICovXFxyXFxufVxcclxcbiNwbGF5ZXJ7XFxyXFxuICAgIC8qIG1hcmdpbjoyMHB4OyAqL1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweCA7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMTgwLCAxODApO1xcclxcbn1cXHJcXG4jcGxheWVyPiNpbWFnZXtcXHJcXG4gICAgd2lkdGg6NDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxufVxcclxcbiN0aHVtYm5haWx7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46MjBweCBhdXRvO1xcclxcbiAgICB3aWR0aDozMDA7XFxyXFxuICAgIGhlaWdodDozMDBweDtcXHJcXG4gICAgLyogYm9yZGVyOjEwcHggc29saWQgYmxhY2s7ICovXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xcclxcbiAgICBhbmltYXRpb246IHJvdGF0aW9uIDkwMDBtcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICAgIC8qIGJveC1zaGFkb3c6ICAwcHggMHB4IDEwcHggMTBweCByZWQgOyAqL1xcclxcbiAgICBcXHJcXG59XFxyXFxuQGtleWZyYW1lcyByb3RhdGlvbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuI2xpc3R7XFxyXFxuICAgIG1hcmdpbjo2MHB4IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIHdpZHRoOjUwMHB4OyBcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDIzNywgMjQxLCAxNikgO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMDBweCA1cHggdmlvbGV0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbn1cXHJcXG4jcGxheWxpc3R7XFxyXFxuICAgIC8qIG1hcmdpbjoyMHB4OyAqL1xcclxcbiAgICBwYWRkaW5nOjEwcHg7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAxODAsIDE4MCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMjAwcHggMzBweCBibGFjaztcXHJcXG5cXHJcXG59XFxyXFxuI2ltYWdle1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCB5ZWxsb3c7XFxyXFxufVxcclxcbiNjb250cm9se1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjQzLCAyNDMsIDgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHggO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6MjBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogOTBweDtcXHJcXG4gICAgd2lkdGg6NTAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMSwgMTA4LCAyMzgpO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwMHB4IDNweCBncmVlbjtcXHJcXG59XFxyXFxuLmxpc3Rfc29uZ3tcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZnVuY3Rpb257XFxyXFxuICAgIHdpZHRoOjBweDtcXHJcXG4gICAgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgIGJvcmRlcjowcHggc29saWQgd2hpdGU7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgKi9cXHJcXG4gICAgbWFyZ2luOjBweCA1cHg7XFxyXFxufVxcclxcbi5zb25nX2NvbnRyb2x7XFxyXFxuICAgIC8qIHdpZHRoOjQwcHg7ICovXFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG59XFxyXFxuYXVkaW97XFxyXFxuICAgIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuLnF1ZXVle1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6MTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYigxNDEsIDQsIDQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMjUwLCA4KTtcXHJcXG4gICAgY29sb3I6IHJnYigxMCwgMTAsIDkpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAzMHB4IDNweCA7XFxyXFxufVxcclxcbi5xdWV1ZTpob3ZlcntcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcbiNiYXJ7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XFxyXFxuICAgIG1hcmdpbjoyMHB4IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6MTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcXHJcXG4gICAgXFxyXFxuICAgIHdpZHRoOjcwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxLCAxODAsIDI0Myk7XFxyXFxufVxcclxcbiNydW5uaW5nQmFye1xcclxcbiAgICAvKiBwYWRkaW5nOjJweCA7ICovXFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgZ3JlZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjo1cHggYXV0bztcXHJcXG4gICAgd2lkdGg6ODAlO1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuXFxyXFxufVxcclxcbiNydW5uaW5nQmFyPmRpdntcXHJcXG4gICAgaGVpZ2h0OjZweDtcXHJcXG4gICAgd2lkdGg6MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4jdm9sLWNvbnRyb2x7XFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6OTBweDtcXHJcXG4gICAgbGVmdDo4MHB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcclxcbn1cXHJcXG4udGltaW5ne1xcclxcbiAgICBtYXJnaW46MHB4IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxufVxcclxcbiNFX3RpbWV7XFxyXFxuZmxvYXQ6cmlnaHQ7XFxyXFxufVxcclxcbiNzdGF0dXN7XFxyXFxuICAgIG1hcmdpbjotMTBweCAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zb25nLWkxLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NvbmctaTIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc29uZy1pMy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zb25nLWk0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NvbmctaTUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc29uZy1pNi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zb25nLWk3LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwibXAzL3NvbmcxLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwibXAzL3NvbmcyLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwibXAzL3NvbmczLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwibXAzL3Nvbmc0Lm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwibXAzL3Nvbmc1Lm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwibXAzL3Nvbmc2Lm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwibXAzL3Nvbmc3Lm1wM1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F1ZGlvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hdWRpby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB2YXIgcGxheWxpc3QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiUEFBTkkgUEFBTkkgQlkgQkFEU0hBXCIsXHJcbiAgICAgICAgaHJlZjoge1xyXG4gICAgICAgICAgICBzb25nOiBcIi4vbXAzL3NvbmcxLm1wM1wiLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJpbWFnZXMvc29uZy1pMS5qcGdcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiSEVMTE9cIixcclxuICAgICAgICBocmVmOiB7XHJcbiAgICAgICAgICAgIHNvbmc6IFwiLi9tcDMvc29uZzIubXAzXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImltYWdlcy9zb25nLWkyLmpwZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJTSVAgU0lQIDIuMFwiLFxyXG4gICAgICAgIGhyZWY6IHtcclxuICAgICAgICAgICAgc29uZzogXCJtcDMvc29uZzMubXAzXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImltYWdlcy9zb25nLWkzLmpwZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJNQUxBTkcgTUFMQU5HXCIsXHJcbiAgICAgICAgaHJlZjoge1xyXG4gICAgICAgICAgICBzb25nOiBcIm1wMy9zb25nNC5tcDNcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwiaW1hZ2VzL3NvbmctaTQuanBnXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlRJVExJIFNPTkdcIixcclxuICAgICAgICBocmVmOiB7XHJcbiAgICAgICAgICAgIHNvbmc6IFwiaHR0cHM6Ly9xdXoxeXAtYS5ha2FtYWloZC5uZXQvZG93bmxvYWRzL3Jpbmd0b25lcy9maWxlcy9tcDMvdGFpbnUtamFhbmRpLW5hLWphYW5pLXZlLWVoLWR1bml5YS01NDM4OC5tcDNcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjVGI5dk9YV3VsQ01oWDZpcVRhQ1ptZTBTSVY4Q21oVWlCcy1RJnVzcXA9Q0FVXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk5BSU5PIFdBTEVFIE5FXCIsXHJcbiAgICAgICAgaHJlZjoge1xyXG4gICAgICAgICAgICBzb25nOiBcIm1wMy9zb25nNS5tcDNcIixcclxuICAgICAgICAgICAgaW1hZ2U6IFwiaW1hZ2VzL3NvbmctaTUuanBnXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlRFUkkgR0FMSVlBTlwiLFxyXG4gICAgICAgIGhyZWY6IHtcclxuICAgICAgICAgICAgc29uZzogXCJtcDMvc29uZzYubXAzXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImltYWdlcy9zb25nLWk2LmpwZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJGSUxIQUFMMlwiLFxyXG4gICAgICAgIGhyZWY6IHtcclxuICAgICAgICAgICAgc29uZzogXCJtcDMvc29uZzcubXAzXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImltYWdlcy9zb25nLWk3LmpwZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5dO1xyXG4vLyBleHBvcnQ9cGxheWxpc3Q7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwbGF5bGlzdCB9IGZyb20gJy4vbGlzdCc7XHJcbmltcG9ydCAnLi4vYXVkaW8uY3NzJztcclxuaW1wb3J0ICcuL2ltYWdlcy9zb25nLWkxLmpwZyc7XHJcbmltcG9ydCAnLi9pbWFnZXMvc29uZy1pMi5qcGcnO1xyXG5pbXBvcnQgJy4vaW1hZ2VzL3NvbmctaTMuanBnJztcclxuaW1wb3J0ICcuL2ltYWdlcy9zb25nLWk0LmpwZyc7XHJcbmltcG9ydCAnLi9pbWFnZXMvc29uZy1pNS5qcGcnO1xyXG5pbXBvcnQgJy4vaW1hZ2VzL3NvbmctaTYuanBnJztcclxuaW1wb3J0ICcuL2ltYWdlcy9zb25nLWk3LmpwZyc7XHJcbmltcG9ydCAnLi9tcDMvc29uZzEubXAzJztcclxuaW1wb3J0ICcuL21wMy9zb25nMi5tcDMnO1xyXG5pbXBvcnQgJy4vbXAzL3NvbmczLm1wMyc7XHJcbmltcG9ydCAnLi9tcDMvc29uZzQubXAzJztcclxuaW1wb3J0ICcuL21wMy9zb25nNS5tcDMnO1xyXG5pbXBvcnQgJy4vbXAzL3Nvbmc2Lm1wMyc7XHJcbmltcG9ydCAnLi9tcDMvc29uZzcubXAzJztcclxuLy8gbGV0IHBsYXlsaXN0PXJlcXVpcmUoJy4vbGlzdC50cycpO1xyXG4vLyB2YXIgZXhwb3J0cz17fTtcclxuLy8gdmFyIHBsYXlsaXN0PVt7XHJcbi8vICAgICB0aXRsZTpcIlBBQU5JIFBBQU5JIEJZIEJBRFNIQVwiLFxyXG4vLyAgICAgaHJlZjp7XHJcbi8vICAgICAgICAgc29uZzpcIi4vZmlsZXMvbXAzL3NvbmcxLm1wM1wiLFxyXG4vLyAgICAgICAgIGltYWdlOlwiLi9maWxlcy9pbWFnZXMvYXVkaW8taTEuanBnXCJcclxuLy8gICAgIH1cclxuLy8gfV07XHJcbmNvbnNvbGUubG9nKFwiaGVsbG9cIik7XHJcbnZhciBjb3VudGVyID0gMDtcclxudmFyIGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Jyk7XHJcbnZhciBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZT5pbWcnKTtcclxudmFyIGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F1ZGlvJyk7XHJcbnZhciBwbGF5X3BhdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5XCIpO1xyXG52YXIgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldlwiKTtcclxudmFyIG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHRcIik7XHJcbnZhciBzaHVmZmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NodWZmbGUnKTtcclxudmFyIHZvbHVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2b2wtY29udHJvbCcpO1xyXG52YXIgYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvYWRlcicpO1xyXG52YXIgcnVubmluZ2JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNydW5uaW5nQmFyJyk7XHJcbnZhciB2b2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdm9sdW1lJyk7XHJcbnZhciBzdGFydF90aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1NfdGltZScpO1xyXG52YXIgZW5kX3RpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjRV90aW1lJyk7XHJcbnN0YXJ0X3RpbWUuaW5uZXJUZXh0ID0gJ3N0YXJ0JztcclxuZW5kX3RpbWUuaW5uZXJUZXh0ID0gJ2VuZCc7XHJcbi8vIGNvbnNvbGUubG9nKGJhcik7XHJcbi8vIGxldCBjb249ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xyXG4vLyBjb24uc3R5bGUuYmFja2dyb3VuZD0nIHVybCguL3RzL2ltYWdlcy9iZzEuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3Zlcic7XHJcbm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNyZWF0ZVBsYXlsaXN0KCk7XHJcbiAgICAvLyAgICBpbWFnZS5zdHlsZS5ib3JkZXI9JzEwcHggc29saWQgYmxhY2snO1xyXG59O1xyXG4vLyBmdW5jdGlvbiBkaXNjUm90YXRlKCl7XHJcbi8vICAgICBpbWFnZS5hbmltYXRlKFtcclxuLy8gICAgICAgICAvLyBrZXlmcmFtZXNcclxuLy8gICAgICAgICB7IHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScgfSxcclxuLy8gICAgICAgICB7IHRyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpJyB9XHJcbi8vICAgICBdLCB7XHJcbi8vICAgICAgICAgLy8gdGltaW5nIG9wdGlvbnNcclxuLy8gICAgICAgICBkdXJhdGlvbjogNTAwMCxcclxuLy8gICAgICAgICBpdGVyYXRpb25zOiBJbmZpbml0eSxcclxuLy8gICAgIH0pO1xyXG4vLyAgICAgaW1hZ2Uuc3R5bGUuYW5pbWF0aW9uUGxheVN0YXRlPSdydW5uaW5nJztcclxuLy8gfVxyXG5mdW5jdGlvbiBkaXNjU3RvcCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdkaXNjIHN0b3AnKTtcclxuICAgIGltYWdlLnN0eWxlLmFuaW1hdGlvblBsYXlTdGF0ZSA9ICdwYXVzZWQnO1xyXG59XHJcbmZ1bmN0aW9uIGRpc2NTdGFydCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdkaXNjIHN0YXJ0Jyk7XHJcbiAgICBpbWFnZS5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSAncnVubmluZyc7XHJcbn1cclxuLy8gYWRqdXN0IHZvbHVtZVxyXG5zZXRJbnRlcnZhbChsb2Fkdm9sdW1lLCAxKTtcclxuZnVuY3Rpb24gbG9hZHZvbHVtZSgpIHtcclxuICAgIHZhciB4ID0gTnVtYmVyKHZvbHVtZS52YWx1ZSk7XHJcbiAgICB2YXIgeSA9IHggLyAxMDA7XHJcbiAgICBhdWRpby52b2x1bWUgPSB5O1xyXG59XHJcbi8vIG1vdmluZyBiYXIgb2YgdGhlIHNvbmdcclxuc2V0SW50ZXJ2YWwocnVubmluZ0JhciwgMSk7XHJcbmZ1bmN0aW9uIHJ1bm5pbmdCYXIoKSB7XHJcbiAgICB2YXIgY3VycmVudCA9IGF1ZGlvLmN1cnJlbnRUaW1lO1xyXG4gICAgdmFyIGR1cmF0aW9uID0gYXVkaW8uZHVyYXRpb247XHJcbiAgICAvLyBiYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yPSdibGFjayc7XHJcbiAgICB2YXIgbG9hZCA9IE1hdGguZmxvb3IoY3VycmVudCAvIGR1cmF0aW9uICogMTAwKTtcclxuICAgIGJhci5zdHlsZS53aWR0aCA9IGxvYWQgKyBcIiVcIjtcclxuICAgIC8vIGNvbnNvbGUubG9nKGxvYWQpO1xyXG59XHJcbi8vIGRpc3BsYXkgY3VycmVudCBhbmQgdG90YWwgZHVyYXRpb24gb2YgdGhlIHNvbmdcclxuc2V0SW50ZXJ2YWwoeHl6LCAxKTtcclxuZnVuY3Rpb24geHl6KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coYXVkaW8ucGF1c2VkKTtcclxuICAgIHZhciBjdXJNaW5zID0gTWF0aC5mbG9vcihhdWRpby5jdXJyZW50VGltZSAvIDYwKTtcclxuICAgIHZhciBjdXJTZWNzID0gTWF0aC5mbG9vcihhdWRpby5jdXJyZW50VGltZSAlIDYwKTtcclxuICAgIHZhciBkdXJNaW5zID0gTWF0aC5mbG9vcihhdWRpby5kdXJhdGlvbiAvIDYwKTtcclxuICAgIHZhciBkdXJTZWNzID0gTWF0aC5mbG9vcihhdWRpby5kdXJhdGlvbiAlIDYwKTtcclxuICAgIGlmIChjdXJTZWNzIDwgMTApIHtcclxuICAgICAgICBjdXJTZWNzID0gXCIwXCIgKyBjdXJTZWNzO1xyXG4gICAgfVxyXG4gICAgaWYgKGR1clNlY3MgPCAxMCkge1xyXG4gICAgICAgIGR1clNlY3MgPSBcIjBcIiArIGR1clNlY3M7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VyTWlucyA8IDEwKSB7XHJcbiAgICAgICAgY3VyTWlucyA9IFwiMFwiICsgY3VyTWlucztcclxuICAgIH1cclxuICAgIGlmIChkdXJNaW5zIDwgMTApIHtcclxuICAgICAgICBkdXJNaW5zID0gXCIwXCIgKyBkdXJNaW5zO1xyXG4gICAgfVxyXG4gICAgaWYgKCFhdWRpby5wYXVzZWQpIHtcclxuICAgICAgICBzdGFydF90aW1lLmlubmVySFRNTCA9IGN1ck1pbnMgKyBcIjpcIiArIGN1clNlY3M7XHJcbiAgICAgICAgZW5kX3RpbWUuaW5uZXJIVE1MID0gZHVyTWlucyArIFwiOlwiICsgZHVyU2VjcztcclxuICAgIH1cclxuICAgIC8vIGxldCBjdXJyZW50PVN0cmluZyhNYXRoLnRydW5jKGF1ZGlvLmN1cnJlbnRUaW1lLzYwKSkrXCI6XCIrTWF0aC50cnVuYyhhdWRpby5jdXJyZW50VGltZSU2MCk7XHJcbiAgICAvLyBsZXQgZHVyYXRpb249U3RyaW5nKE1hdGgudHJ1bmMoYXVkaW8uZHVyYXRpb24vNjApKStcIjpcIitNYXRoLnRydW5jKGF1ZGlvLmR1cmF0aW9uJTYwKTtcclxuICAgIC8vIGlmKCFhdWRpby5wYXVzZWQpe1xyXG4gICAgLy8gc3RhcnRfdGltZS5pbm5lclRleHQ9YCR7Y3VycmVudH1gO1xyXG4gICAgLy8gZW5kX3RpbWUuaW5uZXJUZXh0PWAke2R1cmF0aW9ufWA7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUGxheWxpc3QoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgcGxheWxpc3QnKTtcclxuICAgIHBsYXlsaXN0LmZvckVhY2goZnVuY3Rpb24gKGRldGFpbCkge1xyXG4gICAgICAgIHZhciBzb25nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgLy8gaW1nLnNyYz1kZXRhaWxbJ2ltYWdlJ107XHJcbiAgICAgICAgLy8gc29uZy5jbGFzcz1cImdvaW5nb25cIjtcclxuICAgICAgICBzb25nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlzdF9zb25nJyk7XHJcbiAgICAgICAgbGluay5ocmVmID0gZGV0YWlsWydocmVmJ11bJ3NvbmcnXTtcclxuICAgICAgICBsaW5rLm5hbWUgPSBkZXRhaWxbJ2hyZWYnXVsnaW1hZ2UnXTtcclxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncXVldWUnKTtcclxuICAgICAgICBsaW5rLmlubmVyVGV4dCA9IGRldGFpbFsndGl0bGUnXTtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZGFuZHBsYXkpO1xyXG4gICAgICAgIHNvbmcuYXBwZW5kKGxpbmspO1xyXG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKHNvbmcpO1xyXG4gICAgICAgIGFsbC5hcHBlbmQoc29uZyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWxsKTtcclxuICAgIH0pO1xyXG59XHJcbnZhciBwbGF5aW5nID0gJyc7XHJcbi8vIGF1ZGlvLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XHJcbi8vIHBsYXlsaXN0IHBsYXlcclxuZnVuY3Rpb24gbG9hZGFuZHBsYXkoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gZS50YXJnZXQubmFtZTtcclxuICAgIGF1ZGlvLnNyYyA9IGUudGFyZ2V0LmhyZWY7XHJcbiAgICBwbGF5aW5nID0gZS50YXJnZXQuaHJlZjtcclxuICAgIGF1ZGlvLmxvYWQoKTtcclxuICAgIGNvbnNvbGUubG9nKFwibG9hZGVkXCIpO1xyXG4gICAgYXVkaW8ucGxheSgpO1xyXG4gICAgaW1hZ2Uuc3R5bGUuYm9yZGVyID0gXCI1cHggc29saWQgbWFnZW50YVwiO1xyXG4gICAgaW1hZ2Uuc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4IDEwMHB4IDIwcHggd2hpdGVcIjtcclxuICAgIGRpc2NTdGFydCgpO1xyXG59XHJcbi8vIHBsYXkgYnV0dG9uIG9wdGlvblxyXG5wbGF5X3BhdXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJwbGF5IGJ1dHRvbiBjbGlja2VkXCIpO1xyXG4gICAgaWYgKGF1ZGlvLnNyYyA9PSAnJykge1xyXG4gICAgICAgIGF1ZGlvLnNyYyA9IHBsYXlsaXN0WzBdWydocmVmJ11bJ3NvbmcnXTtcclxuICAgICAgICBwbGF5aW5nID0gcGxheWxpc3RbMF1bJ2hyZWYnXVsnc29uZyddO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHBsYXlsaXN0WzBdWydocmVmJ11bJ2ltYWdlJ107XHJcbiAgICAgICAgZGlzY1N0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICAvLyBpbWFnZS5zdHlsZS5hbmltYXRpb249XCJyb3RhdGlvbiA1cyBpbmZpbml0ZVwiO1xyXG4gICAgaW1hZ2Uuc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4IDEwMHB4IDIwcHggd2hpdGVcIjtcclxuICAgIGltYWdlLnN0eWxlLmJvcmRlciA9IFwiNXB4IHNvbGlkIG1hZ2VudGFcIjtcclxuICAgIGlmIChhdWRpby5wYXVzZWQpIHtcclxuICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgZGlzY1N0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhdWRpby5wYXVzZSgpO1xyXG4gICAgICAgIGRpc2NTdG9wKCk7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhdWRpby5jdXJyZW50VGltZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhdWRpby5kdXJhdGlvbik7XHJcbn0pO1xyXG4vLyBzaHVmZmxpbmcgcGxheWxpc3Rcclxuc2h1ZmZsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXlsaXN0LnNvcnQoZnVuY3Rpb24gKCkgeyByZXR1cm4gLjUgLSBNYXRoLnJhbmRvbSgpOyB9KTtcclxuICAgIGFsbC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNyZWF0ZVBsYXlsaXN0KCk7XHJcbiAgICBhdWRpby5wYXVzZSgpO1xyXG4gICAgYXVkaW8uc3JjID0gJyc7XHJcbiAgICBpbWFnZS5zcmMgPSAnJztcclxuICAgIGltYWdlLnN0eWxlLmJvcmRlciA9ICcnO1xyXG4gICAgYmFyLnN0eWxlLndpZHRoID0gJzAlJztcclxuICAgIGRpc2NTdG9wKCk7XHJcbn0pO1xyXG4vLyBhZGp1c3Qgdm9sdW1lXHJcbnZvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2b2x1bWUuc3R5bGUuZGlzcGxheSA9ICh2b2x1bWUuc3R5bGUuZGlzcGxheSA9PT0gJ2lubGluZScpID8gJ25vbmUnIDogJ2lubGluZSc7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlLmNsaWVudFgsZS5jbGllbnRZKTtcclxuICAgIHZvbHVtZS5zdHlsZS5sZWZ0ID0gZS5jbGllbnRYIC0gZS5vZmZzZXRYIC0gMTAwICsgXCJweFwiO1xyXG4gICAgdm9sdW1lLnN0eWxlLnRvcCA9IGUuY2xpZW50WSAtIGUub2Zmc2V0WSAtIDEwMCArIFwicHhcIjtcclxufSk7XHJcbi8vIG5leHQgc29uZ1xyXG5hdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIG5leHRvbmUpO1xyXG5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dG9uZSk7XHJcbmZ1bmN0aW9uIG5leHRvbmUoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIm5leHQgY2xpY2tlZFwiKTtcclxuICAgIGlmIChhdWRpby5wYXVzZWQpIHtcclxuICAgICAgICBkaXNjU3RhcnQoKTtcclxuICAgIH1cclxuICAgIHZhciBsZW4gPSBwbGF5bGlzdC5sZW5ndGg7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhsZW4pO1xyXG4gICAgLy8gY29uc29sZS5sb2cocGxheWluZyk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHBsYXlsaXN0W2ldWydocmVmJ11bJ3NvbmcnXSA9PT0gcGxheWluZykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSBsZW4gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXVkaW8uc3JjID0gcGxheWxpc3RbaSArIDFdWydocmVmJ11bJ3NvbmcnXTtcclxuICAgICAgICAgICAgcGxheWluZyA9IHBsYXlsaXN0W2kgKyAxXVsnaHJlZiddWydzb25nJ107XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHBsYXlsaXN0W2kgKyAxXVsnaHJlZiddWydpbWFnZSddO1xyXG4gICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gcHJldmlvdXMgc29uZ1xyXG5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldm9uZSk7XHJcbmZ1bmN0aW9uIHByZXZvbmUoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInByZXYgY2xpY2tlZFwiKTtcclxuICAgIGlmIChhdWRpby5wYXVzZWQpIHtcclxuICAgICAgICBkaXNjU3RhcnQoKTtcclxuICAgIH1cclxuICAgIHZhciBsZW4gPSBwbGF5bGlzdC5sZW5ndGg7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhsZW4pO1xyXG4gICAgLy8gY29uc29sZS5sb2cocGxheWluZyk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHBsYXlsaXN0W2ldWydocmVmJ11bJ3NvbmcnXSA9PT0gcGxheWluZykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gbGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF1ZGlvLnNyYyA9IHBsYXlsaXN0W2kgLSAxXVsnaHJlZiddWydzb25nJ107XHJcbiAgICAgICAgICAgIHBsYXlpbmcgPSBwbGF5bGlzdFtpIC0gMV1bJ2hyZWYnXVsnc29uZyddO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBwbGF5bGlzdFtpIC0gMV1bJ2hyZWYnXVsnaW1hZ2UnXTtcclxuICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIGFkanVzdGluZyBzb25nIGxlbmd0aFxyXG5ydW5uaW5nYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgYWRqdXN0KTtcclxuLy8gcnVubmluZ2Jhci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsYWRqdXN0KTtcclxuZnVuY3Rpb24gYWRqdXN0KGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRqdXN0IGNhbGxlZFwiLCBlLm9mZnNldFgpO1xyXG4gICAgLy8gYmFyLnN0eWxlLndpZHRoPWAke2Uub2Zmc2V0WH0lYDtcclxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gKChlLm9mZnNldFggLyAyNTUpICogMTAwKSAvIDEwMCAqIGF1ZGlvLmR1cmF0aW9uO1xyXG59XHJcbnNldEludGVydmFsKHBsYXlwYXVzZSwgMSk7XHJcbnNldEludGVydmFsKGN1cnIsIDEpO1xyXG5mdW5jdGlvbiBwbGF5cGF1c2UoKSB7XHJcbiAgICB2YXIgcHBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlfcGF1c2VfaW1hZ2VcIik7XHJcbiAgICBpZiAoYXVkaW8ucGF1c2VkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXVkaW8ucGF1c2VkKTtcclxuICAgICAgICBwcGltZ1snc3JjJ10gPSBcImh0dHBzOi8vYXNzZXRzLnN0aWNrcG5nLmNvbS90aHVtYnMvNTgwYjU3ZmNkOTk5NmUyNGJjNDNjNGZhLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcHBpbWdbJ3NyYyddID0gXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NTOUlUeDFLbGhteFhIM0NURGk1ZFZHQWtlTjF6dHhZSmpGcmcmdXNxcD1DQVVcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjdXJyKCkge1xyXG4gICAgdmFyIHN0YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGF0dXNcIik7XHJcbiAgICB2YXIgbGVuID0gcGxheWxpc3QubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGlmIChwbGF5bGlzdFtpXVsnaHJlZiddWydzb25nJ10gPT09IHBsYXlpbmcpIHtcclxuICAgICAgICAgICAgc3RhdGUuaW5uZXJUZXh0ID0gXCJUcmFjayBPbiA6LSBcIiArIHBsYXlsaXN0W2ldWyd0aXRsZSddO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=