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
eval("__webpack_require__.r(__webpack_exports__);\nasync function posts(req, res) {\n  const {\n    page = 1\n  } = req.query;\n  const posts = await fetch(`https://www.diogocezar.com/wp-json/wp/v2/posts?page=${page}`);\n  const total = parseInt(posts.headers.get(\"x-wp-total\"), 10);\n  const totalPages = parseInt(posts.headers.get(\"x-wp-totalpages\"), 10);\n  const postsJson = await posts.json();\n  res.setHeader(\"Cache-Control\", \"s-maxage=10, stale-while-revalidate\");\n  res.json({\n    date: new Date().toUTCString(),\n    posts: postsJson,\n    total: total,\n    totalPages: totalPages\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (posts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcG9zdHMudHM/NGFjZiJdLCJuYW1lcyI6WyJwb3N0cyIsInJlcSIsInJlcyIsInBhZ2UiLCJxdWVyeSIsImZldGNoIiwidG90YWwiLCJwYXJzZUludCIsImhlYWRlcnMiLCJnZXQiLCJ0b3RhbFBhZ2VzIiwicG9zdHNKc29uIiwianNvbiIsInNldEhlYWRlciIsImRhdGUiLCJEYXRlIiwidG9VVENTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsZUFBZUEsS0FBZixDQUFxQkMsR0FBckIsRUFBMEJDLEdBQTFCLEVBQStCO0FBQzdCLFFBQU07QUFBRUMsUUFBSSxHQUFHO0FBQVQsTUFBZUYsR0FBRyxDQUFDRyxLQUF6QjtBQUNBLFFBQU1KLEtBQUssR0FBRyxNQUFNSyxLQUFLLENBQ3RCLHVEQUFzREYsSUFBSyxFQURyQyxDQUF6QjtBQUdBLFFBQU1HLEtBQUssR0FBR0MsUUFBUSxDQUFDUCxLQUFLLENBQUNRLE9BQU4sQ0FBY0MsR0FBZCxDQUFrQixZQUFsQixDQUFELEVBQWtDLEVBQWxDLENBQXRCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHSCxRQUFRLENBQUNQLEtBQUssQ0FBQ1EsT0FBTixDQUFjQyxHQUFkLENBQWtCLGlCQUFsQixDQUFELEVBQXVDLEVBQXZDLENBQTNCO0FBQ0EsUUFBTUUsU0FBUyxHQUFHLE1BQU1YLEtBQUssQ0FBQ1ksSUFBTixFQUF4QjtBQUNBVixLQUFHLENBQUNXLFNBQUosQ0FBYyxlQUFkLEVBQStCLHFDQUEvQjtBQUNBWCxLQUFHLENBQUNVLElBQUosQ0FBUztBQUNQRSxRQUFJLEVBQUUsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBREM7QUFFUGhCLFNBQUssRUFBRVcsU0FGQTtBQUdQTCxTQUFLLEVBQUVBLEtBSEE7QUFJUEksY0FBVSxFQUFFQTtBQUpMLEdBQVQ7QUFNRDs7QUFFY1Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBwb3N0cyhyZXEsIHJlcykge1xuICBjb25zdCB7IHBhZ2UgPSAxIH0gPSByZXEucXVlcnk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vd3d3LmRpb2dvY2V6YXIuY29tL3dwLWpzb24vd3AvdjIvcG9zdHM/cGFnZT0ke3BhZ2V9YFxuICApO1xuICBjb25zdCB0b3RhbCA9IHBhcnNlSW50KHBvc3RzLmhlYWRlcnMuZ2V0KFwieC13cC10b3RhbFwiKSwgMTApO1xuICBjb25zdCB0b3RhbFBhZ2VzID0gcGFyc2VJbnQocG9zdHMuaGVhZGVycy5nZXQoXCJ4LXdwLXRvdGFscGFnZXNcIiksIDEwKTtcbiAgY29uc3QgcG9zdHNKc29uID0gYXdhaXQgcG9zdHMuanNvbigpO1xuICByZXMuc2V0SGVhZGVyKFwiQ2FjaGUtQ29udHJvbFwiLCBcInMtbWF4YWdlPTEwLCBzdGFsZS13aGlsZS1yZXZhbGlkYXRlXCIpO1xuICByZXMuanNvbih7XG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1VUQ1N0cmluZygpLFxuICAgIHBvc3RzOiBwb3N0c0pzb24sXG4gICAgdG90YWw6IHRvdGFsLFxuICAgIHRvdGFsUGFnZXM6IHRvdGFsUGFnZXMsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwb3N0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/posts.ts\n");

/***/ })

/******/ });