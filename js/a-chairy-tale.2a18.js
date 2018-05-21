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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/notations/a-chairy-tale/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/notations/a-chairy-tale/index.js":
/*!*********************************************!*\
  !*** ./js/notations/a-chairy-tale/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Notations = __webpack_require__(/*! ../../utils/Notations */ \"./js/utils/Notations.js\");\n\nvar animReq = void 0;\nvar stageReady = false;\nvar notes = document.getElementById('box');\nvar decription = document.getElementById('description');\nvar left = document.getElementById('left-col');\nvar middle = document.getElementById('middle-col');\nvar right = document.getElementById('right-col');\nvar loadingR = right.querySelector('.loading');\nvar loadingM = middle.querySelector('.loading');\n\nvar assets = {\n  video: document.getElementById('video'),\n  data: '/data/notations/chairy-tale.json',\n  smallImg: '/img/assets/notations/chairy-tale-small.jpg',\n  largeImg: '/img/assets/notations/chairy-tale-notations.jpg'\n};\nvar assetsLoaded = 0;\nassets.length = Object.keys(assets).length;\n\nvar options = {\n  pageWidth: 1360,\n  pageHeight: 2070,\n  pageMarginTop: 112,\n  pageMarginBottom: 40,\n  secondsPerPage: 160,\n  fps: 24,\n  percent: {}\n};\nvar innerPageHeight = options.pageHeight - options.pageMarginTop - options.pageMarginBottom;\noptions.percent.h = DDD.getPercent(innerPageHeight, options.pageHeight);\noptions.percent.top = DDD.getPercent(options.pageMarginTop, options.pageHeight);\noptions.percent.bottom = DDD.getPercent(options.pageMarginBottom, options.pageHeight);\n\n// Set globally the video player and two canvases that will communicate with each other.\nvar _video = (0, _Notations.notationsVideo)(assets.video, videoReady);\n\nvar notationsData = [];\n\nvar _timeline = DDD.canvas(middle, { css: { position: 'relative', opacity: 0 } });\nmiddle.style.width = '10%';\n\nvar _notations = DDD.canvas(right, { css: { position: 'relative', opacity: 0 } });\nright.style.width = '50%';\n_notations.imgW = 1000;\n_notations.imgH = 6088;\n\nvar resize = {\n  stage: function stage() {\n    this.height = window.innerHeight;\n  },\n  timeline: function timeline() {\n    var h = this.height;\n    var ih = 1218;\n    _timeline.canvas.width = middle.offsetWidth;\n    _timeline.canvas.height = h;\n    _timeline.imgResizeW = _timeline.canvas.width * (h / ih);\n    _timeline.pageH = h / 4;\n    _timeline.offTop = DDD.sizeFromPercentage(options.percent.top, _timeline.pageH);\n    _timeline.offBottom = DDD.sizeFromPercentage(options.percent.bottom, _timeline.pageH);\n    _timeline.step = DDD.sizeFromPercentage(options.percent.h, _timeline.pageH) / options.secondsPerPage;\n    middle.style.height = h + 'px';\n\n    if (_timeline.canvas.width > _timeline.imgResizeW) {\n      _timeline.imgX = (_timeline.canvas.width - _timeline.imgResizeW) / 2;\n    } else {\n      _timeline.imgX = 0;\n    }\n  },\n  notations: function notations() {\n    var w = right.offsetWidth;\n    var h = window.innerHeight;\n    var h2 = DDD.sizeFromPercentage(DDD.getPercent(w, _notations.imgW), _notations.imgH) / 4;\n    _notations.canvas.width = w;\n    _notations.canvas.height = h;\n    _notations.headerY = h / 2;\n    _notations.offTop = DDD.sizeFromPercentage(options.percent.top, h2);\n    _notations.offBottom = DDD.sizeFromPercentage(options.percent.bottom, h2);\n    _notations.step = DDD.sizeFromPercentage(options.percent.h, h2) / options.secondsPerPage;\n  },\n  video: function video() {\n    var leftW = left.offsetWidth;\n    var resizePercent = leftW / _video.width * 100;\n    _video.width = leftW;\n    _video.height = DDD.sizeFromPercentage(resizePercent, _video.height);\n  },\n  all: function all() {\n    this.timeline();\n    this.notations();\n    this.video();\n    updateNotations();\n  }\n};\n\nresize.stage();\nloadingR.style.opacity = 1;\nloadingM.style.opacity = 1;\n\nfunction videoReady() {\n  resize.video();\n  // Load JSON data about notations\n  DDD.json({\n    url: assets.data,\n    container: decription\n  }).then(function (data) {\n    notationsData = data.sections;\n\n    /*----------  NOTATIONS IMG  ----------*/\n    _notations.img = new Image();\n    _notations.img.onload = function () {\n      resize.notations();\n      _notations.imgY = _notations.offTop - _notations.headerY;\n      loadingR.style.opacity = 0;\n      _notations.canvas.style.opacity = 1;\n      checkAssetsLoaded();\n      drawNotations();\n    };\n    _notations.img.src = assets.largeImg;\n\n    /*----------  TIMELINE IMG  ----------*/\n    _timeline.img = new Image();\n    _timeline.img.onload = function () {\n      resize.timeline();\n      _timeline.headerY = _timeline.offTop;\n      loadingM.style.opacity = 0;\n      _timeline.canvas.style.opacity = 1;\n      checkAssetsLoaded();\n      drawTimeline();\n    };\n    _timeline.img.src = assets.smallImg;\n\n    checkAssetsLoaded();\n  }).catch(function (err) {\n    console.error(err);\n  });\n\n  _video.onplay = function () {\n    animReq = requestAnimationFrame(playerLoop);\n    return false;\n  };\n\n  _video.onpause = function () {\n    window.cancelAnimationFrame(animReq);\n    return false;\n  };\n\n  _video.onseeking = function () {\n    updateNotations();\n    return false;\n  };\n\n  checkAssetsLoaded();\n}\n\nfunction checkAssetsLoaded() {\n  assetsLoaded++;\n\n  if (assetsLoaded === assets.length) {\n    _video.controls = true;\n    stageReady = true;\n  }\n}\n\nfunction playerLoop() {\n  updateNotations();\n  requestAnimationFrame(playerLoop);\n}\n\nfunction updateNotations() {\n  var time = _video.currentTime;\n\n  if (time <= 38) {\n    var adjustCurrentTime = time * (30 / 38);\n\n    _timeline.headerY = adjustCurrentTime * _timeline.step + _timeline.offTop;\n    _notations.imgY = adjustCurrentTime * _notations.step + _notations.offTop - _notations.headerY;\n  } else {\n    var i;\n    var current;\n    var currentTime = (time - 38) * (550 / 548.96);\n\n    for (i = 1; i < notationsData.length; i++) {\n      var head = notationsData[i - 1].notedEndFrame / options.fps;\n      var tail = notationsData[i].notedEndFrame / options.fps;\n\n      if (currentTime >= head && currentTime <= tail) {\n        current = notationsData[i].page;\n        break;\n      }\n    }\n\n    // Move timeline header\n    _timeline.headerY = currentTime * _timeline.step + _timeline.offTop * current + 30 * _timeline.step;\n\n    // Move notations image\n    _notations.imgY = currentTime * _notations.step + _notations.offTop * current + 30 * _notations.step - //add the first section that has 30 seconds label but lasts 38 in the video.\n    _notations.headerY;\n\n    if (current > 1) {\n      _timeline.headerY = _timeline.headerY + _timeline.offBottom * (current - 1);\n      _notations.imgY = _notations.imgY + _notations.offBottom * (current - 1);\n    }\n  }\n\n  drawTimeline();\n  drawNotations();\n}\n\nfunction drawTimeline() {\n  _timeline.ctx.clearRect(0, 0, _timeline.canvas.width, _timeline.canvas.height);\n  _timeline.ctx.drawImage(_timeline.img, _timeline.imgX, 0, _timeline.imgResizeW, _timeline.canvas.height);\n\n  _timeline.ctx.beginPath();\n  _timeline.ctx.moveTo(0, _timeline.headerY);\n  _timeline.ctx.lineTo(_timeline.canvas.width, _timeline.headerY);\n  _timeline.ctx.strokeStyle = '#fe0404';\n  _timeline.ctx.stroke();\n}\n\nfunction drawNotations() {\n  _notations.ctx.clearRect(0, 0, _notations.canvas.width, _notations.canvas.height);\n  _notations.ctx.drawImage(_notations.img, 0, 0, _notations.imgW, _notations.imgH, 0, -_notations.imgY, _notations.canvas.width, _notations.imgH * (_notations.canvas.width / _notations.imgW));\n\n  _notations.ctx.beginPath();\n  _notations.ctx.moveTo(0, _notations.headerY);\n  _notations.ctx.lineTo(_notations.canvas.width, _notations.headerY);\n  _notations.ctx.strokeStyle = '#fe0404';\n  _notations.ctx.stroke();\n}\n\nwindow.onresize = function () {\n  if (stageReady) {\n    resize.all();\n  }\n  return false;\n};\n\ndocument.getElementById('notes').onclick = function (event) {\n  event.preventDefault();\n  notes.style.display = 'block';\n  return false;\n};\n\ndocument.getElementById('close-box').onclick = function (event) {\n  event.preventDefault();\n  notes.style.display = 'none';\n  return false;\n};\n\n//# sourceURL=webpack:///./js/notations/a-chairy-tale/index.js?");

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