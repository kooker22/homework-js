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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sourse = document.querySelector('.template').innerHTML.trim();\nconst template = Handlebars.compile(sourse);\nconst cardList = document.querySelector('.card-list');\nconst input = document.querySelector('#input');\nconst form = document.querySelector('.form');\nconst button = document.querySelector('btn');\nconst bbb = document.querySelector('.deleteNode');\nlet linkArray = [];\n\nconst LOCALSTORAGE = (w => {\n  if (!w) return;\n  const isActive = 'localStorage' in w;\n\n  const get = key => {\n    try {\n      const serializedState = localStorage.getItem(key);\n      return serializedState === null ? undefined : JSON.parse(serializedState);\n    } catch (err) {\n      console.error('Get state error: ', err);\n    }\n  };\n\n  const set = (key, value) => {\n    try {\n      const serializedState = JSON.stringify(value);\n      localStorage.setItem(key, serializedState);\n    } catch (err) {\n      console.error('Set state error: ', err);\n    }\n  };\n\n  const publicAPI = {\n    isActive,\n    get,\n    set\n  };\n  return publicAPI;\n})(window);\n\n(function preload() {\n  if (LOCALSTORAGE.get('linkArray') === undefined) return;\n  linkArray = LOCALSTORAGE.get('linkArray');\n  markUp(linkArray);\n  console.log(linkArray);\n})();\n\nfunction addCard(e) {\n  e.preventDefault();\n\n  if (input.value === '') {\n    alert('Please enter your link');\n    form.reset();\n    return;\n  } else if (!checkValue(input.value, linkArray)) {\n    linkArray.unshift({\n      url: input.value\n    });\n    LOCALSTORAGE.set('linkArray', linkArray);\n  } else {\n    alert('Link already exists in bookmark');\n    form.reset();\n    return;\n  }\n\n  cardList.innerHTML = '';\n  markUp(linkArray);\n  form.reset();\n}\n\nfunction checkValue(value, arr) {\n  return arr.some(el => el.url === value);\n}\n\nfunction markUp(arr) {\n  let markUp = arr.reduce((acc, link) => acc + template(link), '');\n  cardList.insertAdjacentHTML('afterbegin', markUp);\n}\n\nfunction removeCard(e) {\n  let event = e.target;\n\n  if (event.classList.value === 'delete') {\n    event.parentNode.remove();\n    linkArray = linkArray.filter(el => el.url !== event.previousElementSibling.innerText);\n    LOCALSTORAGE.set('linkArray', linkArray);\n    cardList.innerHTML = '';\n    markUp(linkArray);\n  }\n}\n\nform.addEventListener('submit', addCard);\ncardList.addEventListener('click', removeCard);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });