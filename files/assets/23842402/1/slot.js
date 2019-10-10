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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entities/slot.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/entities/slot.ts":
/*!******************************!*\
  !*** ./src/entities/slot.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_createScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createScript */ \"./src/utils/createScript.ts\");\n/* harmony import */ var _utils_delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/delay */ \"./src/utils/delay.ts\");\n\r\n\r\nconst attibuteses = {\r\n    pattern_1: {\r\n        type: \"entity\"\r\n    },\r\n    pattern_2: {\r\n        type: \"entity\"\r\n    },\r\n    pattern_3: {\r\n        type: \"entity\"\r\n    },\r\n    trigger: {\r\n        type: \"entity\"\r\n    },\r\n    probabilityOf: {\r\n        type: \"number\"\r\n    },\r\n    perticles: {\r\n        type: \"entity\",\r\n        array: true\r\n    },\r\n    winningScript: {\r\n        type: \"entity\"\r\n    }\r\n};\r\nclass Slot extends _utils_createScript__WEBPACK_IMPORTED_MODULE_0__[\"ScriptTypeBase\"] {\r\n    initialize() {\r\n        this.isMoving = false;\r\n        if (this.app.touch) {\r\n            // this.app.touch.on(pc.EVENT_TOUCHSTART, this.play, this);\r\n        }\r\n        else {\r\n            // this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.play, this);\r\n        }\r\n        this.trigger.collision.on(\"triggerenter\", this.play, this);\r\n    }\r\n    lottery() {\r\n        if (Math.random() * 100 < this.probabilityOf) {\r\n            console.log(\"Winning!\");\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n    async play() {\r\n        if (this.isMoving) {\r\n            return;\r\n        }\r\n        await Object(_utils_delay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(200);\r\n        if (this.lottery()) {\r\n            this.start(true, 2);\r\n            this.isMoving = true;\r\n            await Object(_utils_delay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(2800);\r\n            const randomNumber = Math.round(Math.random() * 10) / 10;\r\n            this.stop(true, randomNumber - (randomNumber % 0.125));\r\n            for (let perticle of this.perticles) {\r\n                perticle.script.perticles.start();\r\n            }\r\n            const throwing = await this.winningScript.script.throwcoin.coinThrow();\r\n            await Object(_utils_delay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(5000);\r\n            this.isMoving = false;\r\n        }\r\n        else {\r\n            this.start();\r\n            this.isMoving = true;\r\n            await Object(_utils_delay__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1800);\r\n            this.stop();\r\n            for (let perticle of this.perticles) {\r\n                perticle.script.perticles.stop();\r\n            }\r\n            this.isMoving = false;\r\n        }\r\n    }\r\n    onClick() {\r\n        if (!this.isMoving) {\r\n            this.start();\r\n        }\r\n        else {\r\n            this.stop();\r\n        }\r\n        this.isMoving = !this.isMoving;\r\n    }\r\n    stop(win, offset) {\r\n        this.pattern_1.script.scrollingtexture.stop(win, offset);\r\n        this.pattern_2.script.scrollingtexture.stop(win, offset);\r\n        this.pattern_3.script.scrollingtexture.stop(win, offset);\r\n    }\r\n    start(win, offset) {\r\n        this.pattern_1.script.scrollingtexture.start(win, offset);\r\n        this.pattern_2.script.scrollingtexture.start(win, offset);\r\n        this.pattern_3.script.scrollingtexture.start(win, offset);\r\n    }\r\n    update() { }\r\n}\r\nObject(_utils_createScript__WEBPACK_IMPORTED_MODULE_0__[\"createScript\"])(Slot, attibuteses);\r\n\n\n//# sourceURL=webpack:///./src/entities/slot.ts?");

/***/ }),

/***/ "./src/utils/createScript.ts":
/*!***********************************!*\
  !*** ./src/utils/createScript.ts ***!
  \***********************************/
/*! exports provided: createScript, ScriptTypeBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createScript\", function() { return createScript; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScriptTypeBase\", function() { return ScriptTypeBase; });\nconst createScript = (App, attributeses) => {\r\n    const name = App.name.toLowerCase();\r\n    const app = pc.createScript(name);\r\n    if (attributeses !== undefined) {\r\n        for (let [name, attributes] of Object.entries(attributeses)) {\r\n            console.log(name, attributes);\r\n            app.attributes.add(name, attributes);\r\n        }\r\n    }\r\n    Object.setPrototypeOf(app.prototype, App.prototype);\r\n    return app;\r\n};\r\nclass ScriptTypeBase {\r\n    attach() { }\r\n    on() { }\r\n    off() { }\r\n    fire() { }\r\n    once() { }\r\n    set() { }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utils/createScript.ts?");

/***/ }),

/***/ "./src/utils/delay.ts":
/*!****************************!*\
  !*** ./src/utils/delay.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst delay = (ms) => {\r\n    return new Promise(resolve => setTimeout(resolve, ms));\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (delay);\r\n\n\n//# sourceURL=webpack:///./src/utils/delay.ts?");

/***/ })

/******/ });