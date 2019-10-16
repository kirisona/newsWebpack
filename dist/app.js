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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default, renderNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNews\", function() { return renderNews; });\n/* harmony import */ var _moduleHttp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleHttp */ \"./src/moduleHttp.js\");\n/* harmony import */ var _modulenewsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulenewsService */ \"./src/modulenewsService.js\");\n/* harmony import */ var _moduleUi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleUi */ \"./src/moduleUi.js\");\n\n\n\nconst http = Object(_moduleHttp__WEBPACK_IMPORTED_MODULE_0__[\"customHttp\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (http);\nconst newsService = Object(_modulenewsService__WEBPACK_IMPORTED_MODULE_1__[\"newsServiceModule\"])();\nconst newsContainer = document.querySelector(\".news-container .row\");\nconst form = document.forms[\"newsControls\"];\nconst countrySelect = form[\"country\"];\nconst searchInput = form[\"search\"];\nconst categorySelect = form[\"category\"];\n\n\n\n//  init selects\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  M.AutoInit();\n  Object(_moduleUi__WEBPACK_IMPORTED_MODULE_2__[\"showLoader\"])();\n  loadNews();\n  newsService.source(_moduleUi__WEBPACK_IMPORTED_MODULE_2__[\"createSourceOptions\"]);\n});\n\nform.addEventListener(\"submit\", e => {\n  e.preventDefault();\n  Object(_moduleUi__WEBPACK_IMPORTED_MODULE_2__[\"showLoader\"])();\n  if (searchInput.value) {\n    newsService.everything(searchInput.value, onGetResponse);\n  } else {\n    newsService.topHeadlines(countrySelect.value, categorySelect.value, onGetResponse);\n  }\n});\n\nfunction loadNews() {\n  newsService.topHeadlines(countrySelect.value, categorySelect.value, onGetResponse);\n}\n\nfunction onGetResponse(err, response) {\n  Object(_moduleUi__WEBPACK_IMPORTED_MODULE_2__[\"hideLoader\"])();\n  if (err) {\n    console.warn(err);\n    // hideLoader();\n    return;\n  }\n\n  if (!response.articles.length) {\n    M.toast({ html: \"Новости по вашему запросу не найдены\" });\n    return;\n  }\n\n  renderNews(response.articles);\n  // hideLoader();\n}\n\nfunction renderNews(news) {\n  Object(_moduleUi__WEBPACK_IMPORTED_MODULE_2__[\"clearContainer\"])();\n  let fragment = \"\";\n  news.forEach(item => {\n    const template = Object(_moduleUi__WEBPACK_IMPORTED_MODULE_2__[\"newsTemplate\"])(item);\n    fragment += template;\n  });\n\n  newsContainer.insertAdjacentHTML(\"afterbegin\", fragment);\n}\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/moduleHttp.js":
/*!***************************!*\
  !*** ./src/moduleHttp.js ***!
  \***************************/
/*! exports provided: customHttp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customHttp\", function() { return customHttp; });\nfunction customHttp() {\r\n  return {\r\n    get(url, cb) {\r\n      try {\r\n        const xhr = new XMLHttpRequest();\r\n        xhr.open(\"GET\", url);\r\n        xhr.addEventListener(\"load\", () => {\r\n          if (Math.floor(xhr.status / 100) !== 2) {\r\n            cb(`Error. Status code: ${xhr.status}`, xhr);\r\n            return;\r\n          }\r\n          const response = JSON.parse(xhr.responseText);\r\n          cb(null, response);\r\n        });\r\n\r\n        xhr.addEventListener(\"error\", () => {\r\n          cb(`Error. Status code: ${xhr.status}`, xhr);\r\n        });\r\n\r\n        xhr.send();\r\n      } catch (error) {\r\n        cb(error);\r\n      }\r\n    },\r\n    post(url, body, headers, cb) {\r\n      try {\r\n        const xhr = new XMLHttpRequest();\r\n        xhr.open(\"POST\", url);\r\n        xhr.addEventListener(\"load\", () => {\r\n          if (Math.floor(xhr.status / 100) !== 2) {\r\n            cb(`Error. Status code: ${xhr.status}`, xhr);\r\n            return;\r\n          }\r\n          const response = JSON.parse(xhr.responseText);\r\n          cb(null, response);\r\n        });\r\n\r\n        xhr.addEventListener(\"error\", () => {\r\n          cb(`Error. Status code: ${xhr.status}`, xhr);\r\n        });\r\n\r\n        if (headers) {\r\n          Object.entries(headers).forEach(([key, value]) => {\r\n            xhr.setRequestHeader(key, value);\r\n          });\r\n        }\r\n\r\n        xhr.send(JSON.stringify(body));\r\n      } catch (error) {\r\n        cb(error);\r\n      }\r\n    }\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/moduleHttp.js?");

/***/ }),

/***/ "./src/moduleUi.js":
/*!*************************!*\
  !*** ./src/moduleUi.js ***!
  \*************************/
/*! exports provided: createSourceOptions, renderNews, clearContainer, newsTemplate, showLoader, hideLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSourceOptions\", function() { return createSourceOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNews\", function() { return renderNews; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearContainer\", function() { return clearContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsTemplate\", function() { return newsTemplate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showLoader\", function() { return showLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideLoader\", function() { return hideLoader; });\nconst newsContainer = document.querySelector(\".news-container .row\");\r\nconst sources = document.querySelector('#sources');\r\n\r\nfunction createSourceOptions(err, response) {\r\n  const sourceArray = response.sources;\r\n\r\n  for (let i = 0; i <= 15; i++) {\r\n    const newSourceOption = `\r\n    <option value=${sourceArray[i].id}>${sourceArray[i].name}</option>\r\n    `;\r\n\r\n    sources.insertAdjacentHTML('beforeend', newSourceOption);\r\n    M.FormSelect.init(sources, newSourceOption);\r\n  }\r\n}\r\n\r\n//  init selects\r\n\r\nfunction renderNews(news) {\r\n  clearContainer();\r\n  let fragment = \"\";\r\n  news.forEach(item => {\r\n    const template = newsTemplate(item);\r\n    fragment += template;\r\n  });\r\n\r\n  newsContainer.insertAdjacentHTML(\"afterbegin\", fragment);\r\n}\r\n\r\nfunction clearContainer() {\r\n  newsContainer.innerHTML = \"\";\r\n}\r\n\r\nfunction newsTemplate({ title, urlToImage, url, description }) {\r\n  return `\r\n  <div class=\"col s12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-image\">\r\n        <img src=\"${urlToImage}\">\r\n        <span class=\"card-title\">${title || \"\"}</span>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <p>${description || \"\"}</p>\r\n      </div>\r\n      <div class=\"card-action\">\r\n        <a href=\"${url}\">Read more</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  `;\r\n}\r\nfunction showLoader() {\r\n  const template = `\r\n  <div class=\"progress\">\r\n      <div class=\"indeterminate\"></div>\r\n  </div>\r\n  `;\r\n\r\n  document.body.insertAdjacentHTML(\"afterbegin\", template);\r\n}\r\n\r\nfunction hideLoader() {\r\n  const loader = document.querySelector(\".progress\");\r\n  if (loader) {\r\n    loader.remove();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/moduleUi.js?");

/***/ }),

/***/ "./src/modulenewsService.js":
/*!**********************************!*\
  !*** ./src/modulenewsService.js ***!
  \**********************************/
/*! exports provided: newsServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsServiceModule\", function() { return newsServiceModule; });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\r\n\r\nfunction newsServiceModule() {\r\n  const apiUrl = \"https://newsapi.org\";\r\n  const apiKey = \"d5c22bbbee6c463393c90ec6f4796af2\";\r\n  return {\r\n    topHeadlines(country, category, cb) {\r\n      _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\r\n        `${apiUrl}/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`,\r\n        cb\r\n      );\r\n    },\r\n\r\n    everything(text, cb) {\r\n      _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`${apiUrl}/v2/everything?q=${text}&sources=${sources.value}&apiKey=${apiKey}`, cb);\r\n    },\r\n\r\n    source(cb) {\r\n      _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`${apiUrl}/v2/sources?&language=en&apiKey=${apiKey}`, cb)\r\n    }\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modulenewsService.js?");

/***/ })

/******/ });