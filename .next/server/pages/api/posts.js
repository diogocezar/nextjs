module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/posts.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/posts.ts":
/*!****************************!*\
  !*** ./pages/api/posts.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst init = middleware => {\n  return (req, res) => new Promise((resolve, reject) => {\n    middleware(req, res, result => {\n      if (result instanceof Error) {\n        return reject(result);\n      }\n\n      return resolve(result);\n    });\n  });\n};\n\nconst cors = init(cors__WEBPACK_IMPORTED_MODULE_0___default()({\n  methods: [\"GET\", \"POST\", \"OPTIONS\"]\n}));\n\nasync function posts(req, res) {\n  await cors(req, res);\n  const {\n    page = 1,\n    slug = null\n  } = req.query;\n  let op = null;\n  let value = null;\n\n  if (slug) {\n    op = \"slug\";\n    value = slug;\n  } else {\n    op = \"page\";\n    value = page;\n  }\n\n  const baseUrl = \"https://www.diogocezar.com/wp-json/wp/v2/posts\";\n  const url = `${baseUrl}?${op}=${value}`;\n  const posts = await fetch(url);\n  const total = parseInt(posts.headers.get(\"x-wp-total\"), 10);\n  const totalPages = parseInt(posts.headers.get(\"x-wp-totalpages\"), 10);\n  const postsJson = await posts.json();\n  res.setHeader(\"Cache-Control\", \"s-maxage=10, stale-while-revalidate\");\n  res.json({\n    date: new Date().toUTCString(),\n    posts: postsJson,\n    total: total,\n    totalPages: totalPages\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (posts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcG9zdHMudHM/NGFjZiJdLCJuYW1lcyI6WyJpbml0IiwibWlkZGxld2FyZSIsInJlcSIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiLCJjb3JzIiwiQ29ycyIsIm1ldGhvZHMiLCJwb3N0cyIsInBhZ2UiLCJzbHVnIiwicXVlcnkiLCJvcCIsInZhbHVlIiwiYmFzZVVybCIsInVybCIsImZldGNoIiwidG90YWwiLCJwYXJzZUludCIsImhlYWRlcnMiLCJnZXQiLCJ0b3RhbFBhZ2VzIiwicG9zdHNKc29uIiwianNvbiIsInNldEhlYWRlciIsImRhdGUiLCJEYXRlIiwidG9VVENTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLElBQUksR0FBSUMsVUFBRCxJQUFnQjtBQUMzQixTQUFPLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUNMLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDL0JMLGNBQVUsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVlJLE1BQUQsSUFBWTtBQUMvQixVQUFJQSxNQUFNLFlBQVlDLEtBQXRCLEVBQTZCO0FBQzNCLGVBQU9GLE1BQU0sQ0FBQ0MsTUFBRCxDQUFiO0FBQ0Q7O0FBQ0QsYUFBT0YsT0FBTyxDQUFDRSxNQUFELENBQWQ7QUFDRCxLQUxTLENBQVY7QUFNRCxHQVBELENBREY7QUFTRCxDQVZEOztBQVlBLE1BQU1FLElBQUksR0FBR1QsSUFBSSxDQUNmVSwyQ0FBSSxDQUFDO0FBQ0hDLFNBQU8sRUFBRSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFNBQWhCO0FBRE4sQ0FBRCxDQURXLENBQWpCOztBQU1BLGVBQWVDLEtBQWYsQ0FBcUJWLEdBQXJCLEVBQTBCQyxHQUExQixFQUErQjtBQUM3QixRQUFNTSxJQUFJLENBQUNQLEdBQUQsRUFBTUMsR0FBTixDQUFWO0FBQ0EsUUFBTTtBQUFFVSxRQUFJLEdBQUcsQ0FBVDtBQUFZQyxRQUFJLEdBQUc7QUFBbkIsTUFBNEJaLEdBQUcsQ0FBQ2EsS0FBdEM7QUFDQSxNQUFJQyxFQUFFLEdBQUcsSUFBVDtBQUNBLE1BQUlDLEtBQUssR0FBRyxJQUFaOztBQUNBLE1BQUlILElBQUosRUFBVTtBQUNSRSxNQUFFLEdBQUcsTUFBTDtBQUNBQyxTQUFLLEdBQUdILElBQVI7QUFDRCxHQUhELE1BR087QUFDTEUsTUFBRSxHQUFHLE1BQUw7QUFDQUMsU0FBSyxHQUFHSixJQUFSO0FBQ0Q7O0FBQ0QsUUFBTUssT0FBTyxHQUFHLGdEQUFoQjtBQUNBLFFBQU1DLEdBQUcsR0FBSSxHQUFFRCxPQUFRLElBQUdGLEVBQUcsSUFBR0MsS0FBTSxFQUF0QztBQUNBLFFBQU1MLEtBQUssR0FBRyxNQUFNUSxLQUFLLENBQUNELEdBQUQsQ0FBekI7QUFDQSxRQUFNRSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ1YsS0FBSyxDQUFDVyxPQUFOLENBQWNDLEdBQWQsQ0FBa0IsWUFBbEIsQ0FBRCxFQUFrQyxFQUFsQyxDQUF0QjtBQUNBLFFBQU1DLFVBQVUsR0FBR0gsUUFBUSxDQUFDVixLQUFLLENBQUNXLE9BQU4sQ0FBY0MsR0FBZCxDQUFrQixpQkFBbEIsQ0FBRCxFQUF1QyxFQUF2QyxDQUEzQjtBQUNBLFFBQU1FLFNBQVMsR0FBRyxNQUFNZCxLQUFLLENBQUNlLElBQU4sRUFBeEI7QUFDQXhCLEtBQUcsQ0FBQ3lCLFNBQUosQ0FBYyxlQUFkLEVBQStCLHFDQUEvQjtBQUNBekIsS0FBRyxDQUFDd0IsSUFBSixDQUFTO0FBQ1BFLFFBQUksRUFBRSxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFEQztBQUVQbkIsU0FBSyxFQUFFYyxTQUZBO0FBR1BMLFNBQUssRUFBRUEsS0FIQTtBQUlQSSxjQUFVLEVBQUVBO0FBSkwsR0FBVDtBQU1EOztBQUVjYixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9wb3N0cy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JzIGZyb20gXCJjb3JzXCI7XG5cbmNvbnN0IGluaXQgPSAobWlkZGxld2FyZSkgPT4ge1xuICByZXR1cm4gKHJlcSwgcmVzKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG1pZGRsZXdhcmUocmVxLCByZXMsIChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNvcnMgPSBpbml0KFxuICBDb3JzKHtcbiAgICBtZXRob2RzOiBbXCJHRVRcIiwgXCJQT1NUXCIsIFwiT1BUSU9OU1wiXSxcbiAgfSlcbik7XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RzKHJlcSwgcmVzKSB7XG4gIGF3YWl0IGNvcnMocmVxLCByZXMpO1xuICBjb25zdCB7IHBhZ2UgPSAxLCBzbHVnID0gbnVsbCB9ID0gcmVxLnF1ZXJ5O1xuICBsZXQgb3AgPSBudWxsO1xuICBsZXQgdmFsdWUgPSBudWxsO1xuICBpZiAoc2x1Zykge1xuICAgIG9wID0gXCJzbHVnXCI7XG4gICAgdmFsdWUgPSBzbHVnO1xuICB9IGVsc2Uge1xuICAgIG9wID0gXCJwYWdlXCI7XG4gICAgdmFsdWUgPSBwYWdlO1xuICB9XG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vd3d3LmRpb2dvY2V6YXIuY29tL3dwLWpzb24vd3AvdjIvcG9zdHNcIjtcbiAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0/JHtvcH09JHt2YWx1ZX1gO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IHRvdGFsID0gcGFyc2VJbnQocG9zdHMuaGVhZGVycy5nZXQoXCJ4LXdwLXRvdGFsXCIpLCAxMCk7XG4gIGNvbnN0IHRvdGFsUGFnZXMgPSBwYXJzZUludChwb3N0cy5oZWFkZXJzLmdldChcIngtd3AtdG90YWxwYWdlc1wiKSwgMTApO1xuICBjb25zdCBwb3N0c0pzb24gPSBhd2FpdCBwb3N0cy5qc29uKCk7XG4gIHJlcy5zZXRIZWFkZXIoXCJDYWNoZS1Db250cm9sXCIsIFwicy1tYXhhZ2U9MTAsIHN0YWxlLXdoaWxlLXJldmFsaWRhdGVcIik7XG4gIHJlcy5qc29uKHtcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCksXG4gICAgcG9zdHM6IHBvc3RzSnNvbixcbiAgICB0b3RhbDogdG90YWwsXG4gICAgdG90YWxQYWdlczogdG90YWxQYWdlcyxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/posts.ts\n");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCI/N2U5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cors\n");

/***/ })

/******/ });