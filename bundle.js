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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sumOfArray = __webpack_require__(1);

var _sumOfArray2 = _interopRequireDefault(_sumOfArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.getElementById('form').addEventListener('submit', handleSubmit);
document.getElementById('clear').addEventListener('click', handleClear);

var numbers = [];

function handleSubmit(e) {
  console.log('hello there');
  var hello = function hello() {
    return console.log("ES6!!!!");
  };
  hello();
  e.preventDefault();
  if (getNumber()) {
    numbers.push(getNumber());
    var newElement = createNumberListEl(getNumber());
    var numberList = document.getElementById('values');
    numberList.insertBefore(newElement, numberList.firstChild);
    attachSum((0, _sumOfArray2.default)(numbers));
  }
  setInput("");
}

function handleClear(e) {
  e.preventDefault();
  numbers = [];
  node = document.getElementById('values');
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
  attachSum(0);
  setInput("");
}

function setInput(str) {
  document.getElementById('input').value = str;
}

function attachSum(n) {
  document.getElementById('current').innerHTML = n;
}

function getNumber() {
  var number = document.getElementById('input').value;
  if (number) {
    return Number(number);
  } else {
    return null;
  }
}

function createNumberListEl(n) {
  var newElement = document.createElement('li');
  var content = document.createTextNode(n);
  newElement.appendChild(content);
  return newElement;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function sumOfArray(arr) {
  return arr.reduce(function (previous, current) {
    return previous + current;
  }, 0);
}

module.exports = sumOfArray;

/***/ })
/******/ ]);