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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/lab/binary-ring-jared-tarbell/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/lab/binary-ring-jared-tarbell/Particle.js":
/*!******************************************************!*\
  !*** ./js/lab/binary-ring-jared-tarbell/Particle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TWO_PI = Math.PI * 2;\n\nvar Particle = function () {\n  function Particle(x, y, r, blackout) {\n    _classCallCheck(this, Particle);\n\n    this.age = DDD.random(0, 200);\n    this.x = x;\n    this.y = y;\n    this.vx = 2 * Math.cos(r);\n    this.vy = 2 * Math.sin(r);\n    this.defineColor(blackout);\n  }\n\n  _createClass(Particle, [{\n    key: 'move',\n    value: function move() {\n      this.x += this.vx;\n      this.y += this.vy;\n      this.vx += .005 * (DDD.random(0, 100) - DDD.random(0, 100));\n      this.vy += .005 * (DDD.random(0, 100) - DDD.random(0, 100));\n      this.age++;\n    }\n  }, {\n    key: 'update',\n    value: function update(blackout) {\n      if (this.age > 200) {\n        var t = DDD.random(0, TWO_PI, true);\n        this.x = 30 * Math.cos(t);\n        this.y = 30 * Math.sin(t);\n        this.vx = 0;\n        this.vy = 0;\n        this.age = 0;\n        this.defineColor(blackout);\n      }\n    }\n  }, {\n    key: 'defineColor',\n    value: function defineColor(blackout) {\n      this.color = blackout ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';\n    }\n  }]);\n\n  return Particle;\n}();\n\nexports.default = Particle;\n\n//# sourceURL=webpack:///./js/lab/binary-ring-jared-tarbell/Particle.js?");

/***/ }),

/***/ "./js/lab/binary-ring-jared-tarbell/index.js":
/*!***************************************************!*\
  !*** ./js/lab/binary-ring-jared-tarbell/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Particle = __webpack_require__(/*! ./Particle */ \"./js/lab/binary-ring-jared-tarbell/Particle.js\");\n\nvar _Particle2 = _interopRequireDefault(_Particle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PI = Math.PI;\nvar TWO_PI = PI * 2;\n\n/*----------  SET STAGE  ----------*/\nvar stage = DDD.canvas(document.getElementById('ddd-container'));\nvar ctx = stage.ctx;\nvar stageW = stage.w;\nvar stageH = stage.h;\nvar centerX = stage.center.x;\nvar centerY = stage.center.y;\n\n/*----------  GLOBALs  ----------*/\nvar num = 5000; // total number of particles\nvar blackout = false; // blackout is production control of white or black filaments\nvar kaons = []; // kaons is array of path tracing particles\nvar count = 0;\n\nfunction init() {\n  ctx.fillRect(0, 0, stage.w, stage.h);\n  var emitX = 30 * Math.sin(TWO_PI / num) + centerX;\n  var emitY = 30 * Math.cos(TWO_PI / num) + centerY;\n\n  // begin with particle sling-shot around ring origin\n  for (var i = 0; i < num; i++) {\n    var r = PI * i / num;\n    kaons.push(new _Particle2.default(emitX, emitY, r, blackout));\n  }\n\n  draw();\n  stage.canvas.onclick = switchBlackout;\n}\n\nfunction draw() {\n  if (count === 2) {\n    for (var i = 0; i < num; i++) {\n      var particle = kaons[i];\n      var _x = particle.x;\n      var _y = particle.y + centerY;\n\n      particle.move();\n\n      ctx.strokeStyle = particle.color;\n      ctx.save();\n      ctx.beginPath();\n      ctx.moveTo(centerX + _x, _y);\n      ctx.lineTo(centerX + particle.x, centerY + particle.y);\n      ctx.stroke();\n      ctx.beginPath();\n      ctx.moveTo(centerX - _x, _y);\n      ctx.lineTo(centerX - particle.x, centerY + particle.y);\n      ctx.stroke();\n      ctx.restore();\n\n      particle.update(blackout);\n    }\n\n    // randomly switch blackout periods\n    if (DDD.random(0, 10000) > 9950) {\n      switchBlackout();\n    }\n\n    count = 0;\n  }\n\n  count++;\n  requestAnimationFrame(draw);\n}\n\nfunction switchBlackout() {\n  blackout = !blackout;\n}\n\ninit();\n\n//# sourceURL=webpack:///./js/lab/binary-ring-jared-tarbell/index.js?");

/***/ })

/******/ });