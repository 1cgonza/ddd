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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/notations/sisisisisisisisisisisi/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/notations/sisisisisisisisisisisi/index.js":
/*!******************************************************!*\
  !*** ./js/notations/sisisisisisisisisisisi/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Notations = __webpack_require__(/*! ../../utils/Notations */ \"./js/utils/Notations.js\");\n\nvar animReq;\nvar assetsLoaded = 0;\nvar container = document.getElementById('ddd-container');\nvar stage = document.createElement('div');\nstage.id = 'right-col';\nstage.style.width = '60%';\nstage.style.height = window.innerHeight + 'px';\n\ncontainer.appendChild(stage);\n\nvar notes = document.getElementById('box');\nvar video;\nvar r = 0;\nvar r2 = 0;\nvar h = 0;\nvar h2 = 0;\n\nvar notations = new _Notations.Notations({\n  img: {\n    width: 1418,\n    height: 1144,\n    offTop: 214,\n    offRight: 24,\n    offBottom: 17,\n    offLeft: 165,\n    src: '/img/assets/notations/sisisi-notations.jpg',\n    cb: assetReady,\n    msg: 'Loading Notations'\n  },\n  secPerPage: 160,\n  fps: 24,\n  url: '/data/notations/sisisisisisisisisisisi.json',\n  cb: notationsReady,\n  container: stage\n});\nnotations.canvas.style.opacity = 0;\n\nvar debug = false;\n\nfunction assetReady() {\n  assetsLoaded++;\n}\n\nfunction notationsReady(d) {\n  notations.d = d.sections;\n  video = (0, _Notations.notationsVideo)(document.getElementById('video'), videoReady);\n  resetHeightInData();\n\n  /*----------  DEBUG  ----------*/\n  if (debug) {\n    debugReferencePoint();\n  }\n}\n\nfunction videoReady() {\n  updateSize();\n  notationsUpdate();\n\n  notations.canvas.style.opacity = 1;\n  video.controls = true;\n\n  video.onplay = function () {\n    animReq = requestAnimationFrame(playerLoop);\n    return false;\n  };\n\n  video.onpause = function () {\n    window.cancelAnimationFrame(playerLoop);\n    return false;\n  };\n\n  video.onseeking = notationsUpdate;\n}\n\nfunction playerLoop() {\n  notationsUpdate();\n  animReq = requestAnimationFrame(playerLoop);\n}\n\nfunction notationsUpdate() {\n  var current;\n  var next;\n\n  for (var i = 0; i < notations.d.length - 1; i++) {\n    if (video.currentTime >= notations.d[i].start && video.currentTime < notations.d[i + 1].start) {\n      current = notations.d[i];\n      next = notations.d[i + 1];\n      break;\n    }\n  }\n\n  var sectionLength = next.start - current.start;\n  var lengthOffset = video.currentTime - current.start;\n\n  var rStep = (next.r - current.r) / sectionLength;\n  var r2Step = (next.r2 - current.r2) / sectionLength;\n  var hStep = (next.h - current.h) / sectionLength;\n  var h2Step = (next.h2 - current.h2) / sectionLength;\n\n  notations.ctx.clearRect(0, 0, notations.canvas.width, notations.canvas.height);\n\n  r = lengthOffset * rStep + current.r;\n  r2 = lengthOffset * r2Step + current.r2;\n  h = lengthOffset * hStep + current.h;\n  h2 = lengthOffset * h2Step + current.h2;\n  timelineDraw();\n}\n\nfunction timelineDraw() {\n  notations.ctx.drawImage(notations.img, 0, 0, notations.imgW, notations.imgH, 0, notations.canvas.height / 2 - notations.resizeH / 2, notations.canvas.width, notations.resizeH);\n\n  notations.ctx.save();\n  notations.ctx.translate(notations.canvas.width / 2, notations.canvas.height / 2);\n  notations.ctx.rotate(r * Math.PI / 180);\n\n  notations.ctx.beginPath();\n  notations.ctx.strokeStyle = 'black';\n\n  notations.ctx.moveTo(0, 0);\n  notations.ctx.lineTo(0, -h);\n  notations.ctx.stroke();\n\n  notations.ctx.beginPath();\n  notations.ctx.strokeStyle = 'red';\n  notations.ctx.translate(0, -h);\n  notations.ctx.moveTo(0, 0);\n  notations.ctx.rotate(r2 * Math.PI / 180);\n  notations.ctx.lineTo(0, -h2);\n  notations.ctx.stroke();\n  notations.ctx.restore();\n}\n\nfunction resetHeightInData() {\n  for (var i = 0; i < notations.d.length; i++) {\n    notations.d[i].h = DDD.sizeFromPercentage(notations.d[i].hPercent, notations.canvas.width);\n    notations.d[i].h2 = DDD.sizeFromPercentage(notations.d[i].h2Percent, notations.canvas.width);\n  }\n}\n\nfunction updateSize() {\n  notations.canvas.width = stage.offsetWidth;\n  notations.canvas.height = window.innerHeight;\n  notations.resizeH = DDD.sizeFromPercentage(DDD.getPercent(notations.canvas.width, notations.imgW), notations.imgH);\n  resetHeightInData();\n  notationsUpdate();\n}\n\nwindow.onresize = updateSize;\n\ndocument.getElementById('notes').onclick = function (event) {\n  event.preventDefault();\n  notes.style.display = 'block';\n\n  return false;\n};\n\ndocument.getElementById('close-box').onclick = function (event) {\n  event.preventDefault();\n  notes.style.display = 'none';\n\n  return false;\n};\n\nfunction debugReferencePoint() {\n  var ref = DDD.canvas(stage, { w: notations.canvas.width, h: notations.canvas.height });\n\n  for (var i = 0; i < d.sections.length; i++) {\n    if (d.sections[i].hasOwnProperty('r') && d.sections[i].hasOwnProperty('r2')) {\n      var r1 = d.sections[i].r;\n      var r2 = d.sections[i].r2;\n      var h1 = d.sections[i].h;\n      var h2 = d.sections[i].h2;\n\n      ref.ctx.save();\n      ref.ctx.translate(ref.canvas.width / 2, ref.canvas.height / 2);\n\n      ref.ctx.beginPath();\n      ref.ctx.moveTo(0, 0);\n      ref.ctx.rotate(r1 * Math.PI / 180);\n      ref.ctx.lineTo(0, -h1);\n      ref.ctx.strokeStyle = 'rgba(0,0,0,0.3)';\n      ref.ctx.stroke();\n\n      ref.ctx.beginPath();\n      ref.ctx.translate(0, -h1);\n      ref.ctx.moveTo(0, 0);\n      ref.ctx.rotate(r2 * Math.PI / 180);\n      ref.ctx.lineTo(0, -h2);\n      ref.ctx.strokeStyle = 'rgba(255,0,0,0.3)';\n      ref.ctx.stroke();\n\n      ref.ctx.restore();\n    }\n  }\n}\n\n//# sourceURL=webpack:///./js/notations/sisisisisisisisisisisi/index.js?");

/***/ }),

/***/ "./js/utils/Notations.js":
/*!*******************************!*\
  !*** ./js/utils/Notations.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Notations = exports.Notations = function () {\n  function Notations(data) {\n    _classCallCheck(this, Notations);\n\n    var container = data.container || document.body;\n\n    if (data.hasOwnProperty('url')) {\n      DDD.json({\n        url: data.url,\n        container: container\n      }).then(data.cb).catch(function (err) {\n        console.error(err);\n      });\n    }\n\n    if (data.hasOwnProperty('img')) {\n      this.imgCallback = data.img.cb;\n      DDD.image({\n        url: data.img.src,\n        container: container,\n        loadingMsg: data.img.msg\n      }).then(this.prepareImageData.bind(this));\n\n      // Image Dimensions\n      this.imgW = data.img.width;\n      this.imgH = data.img.height;\n      this.fps = data.fps;\n\n      var areaWidth = this.imgW - data.img.offLeft - data.img.offRight;\n      var areaHeight = this.imgH - data.img.offTop - data.img.offBottom;\n\n      this.percent = {\n        h: DDD.getPercent(areaHeight, this.imgH),\n        w: DDD.getPercent(areaWidth, this.imgW),\n        top: DDD.getPercent(data.img.offTop, this.imgH),\n        bottom: DDD.getPercent(data.img.offBottom, this.imgH),\n        left: DDD.getPercent(data.img.offLeft, this.imgW),\n        right: DDD.getPercent(data.img.offRight, this.imgW)\n      };\n    }\n\n    this.stage = DDD.canvas(container, {\n      w: container.offsetWidth\n    });\n    this.canvas = this.stage.canvas;\n    this.ctx = this.stage.ctx;\n  }\n\n  _createClass(Notations, [{\n    key: 'prepareImageData',\n    value: function prepareImageData(res) {\n      this.img = new Image();\n      this.img.onload = this.imgCallback;\n      this.img.src = 'data:image/jpeg;base64,' + DDD.base64(res);\n    }\n  }]);\n\n  return Notations;\n}();\n\nvar notationsVideo = exports.notationsVideo = function notationsVideo(video, cb) {\n  // Happens once and triggers callback when video information (eg: duration) is accessible\n  video.onloadedmetadata = function () {\n    cb();\n    return false;\n  };\n\n  // TODO: implement some progress report or abort if taking too long\n  // var startLoading = Date.now();\n  // video.onprogress = function() {\n  //   var now = Date.now();\n  //   if (now - startLoading >= 10000 && video.readyState < 4) {\n  //     ...abort?\n  //   }\n  //   return false;\n  // };\n\n  video.onerror = function (event) {\n    var errMsg = document.createElement('div');\n    errMsg.innerHTML = video.innerHTML;\n    video.parentNode.replaceChild(errMsg, video);\n    console.log(err);\n    return false;\n  };\n\n  return video;\n};\n\n//# sourceURL=webpack:///./js/utils/Notations.js?");

/***/ })

/******/ });