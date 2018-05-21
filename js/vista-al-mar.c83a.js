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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/lab/vista-al-mar/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/lab/vista-al-mar/Audio.js":
/*!**************************************!*\
  !*** ./js/lab/vista-al-mar/Audio.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Audio = function () {\n  function Audio() {\n    _classCallCheck(this, Audio);\n\n    this.playing = true;\n    this.a = {};\n    this.btn = document.createElement('div');\n\n    this.audio = new DDD.Audio({\n      mar: 'http://juancgonzalez.com/dddrawings/audio/mar.mp3'\n    }, function (audios) {\n      this.loaded(audios);\n    }.bind(this));\n\n    Object.assign(this.btn.style, {\n      position: 'absolute',\n      zIndex: 9999999,\n      bottom: '20px',\n      left: '20px',\n      cursor: 'pointer',\n      backgroundImage: 'url(/img/assets/icons/audio.png)',\n      display: 'block',\n      width: '28px',\n      height: '25px',\n      backgroundRepeat: 'no-repeat',\n      backgroundSize: 'cover'\n    });\n    document.body.appendChild(this.btn);\n    this.btn.onclick = this.toggle.bind(this);\n  }\n\n  _createClass(Audio, [{\n    key: 'loaded',\n    value: function loaded(audios) {\n      this.a = audios;\n      audios.mar.volume = 1;\n      audios.mar.loop = true;\n      audios.mar.start(0);\n    }\n  }, {\n    key: 'toggle',\n    value: function toggle() {\n      if (this.playing) {\n        this.audio.ctx.suspend();\n        this.btn.style.backgroundPosition = 'right';\n      } else {\n        this.audio.ctx.resume();\n        this.btn.style.backgroundPosition = 'left';\n      }\n      this.playing = !this.playing;\n    }\n  }]);\n\n  return Audio;\n}();\n\nexports.default = Audio;\n\n//# sourceURL=webpack:///./js/lab/vista-al-mar/Audio.js?");

/***/ }),

/***/ "./js/lab/vista-al-mar/Map.js":
/*!************************************!*\
  !*** ./js/lab/vista-al-mar/Map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _helpers = __webpack_require__(/*! ./helpers */ \"./js/lab/vista-al-mar/helpers.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Map = function () {\n  function Map(container) {\n    _classCallCheck(this, Map);\n\n    this.container = container;\n    this.animReq;\n    this.mapLoaded = false;\n    this.imgLoaded = false;\n    this.layer = document.createElement('div');\n    this.layer.id = 'googleMap';\n    Object.assign(this.layer.style, {\n      position: 'absolute',\n      left: 0,\n      top: 0,\n      width: '100%',\n      height: '100%',\n      transition: 'none'\n    });\n    this.container.appendChild(this.layer);\n  }\n\n  _createClass(Map, [{\n    key: 'init',\n    value: function init() {\n      this.map = new google.maps.Map(this.layer, {\n        center: {\n          lat: 10.398683,\n          lng: -75.475911\n        },\n        scrollwheel: false,\n        zoom: 17,\n        disableDefaultUI: true\n      });\n      this.waitMapToLoad();\n      this.gallo = new Image();\n      this.gallo.onload = this.onImageLoaded.bind(this);\n      this.gallo.src = '/img/assets/backgrounds/elGallo.png';\n    }\n  }, {\n    key: 'onImageLoaded',\n    value: function onImageLoaded() {\n      this.mapOver = DDD.canvas(this.container, {\n        w: this.gallo.naturalWidth,\n        h: this.gallo.naturalHeight,\n        left: window.innerWidth / 2 - this.gallo.naturalWidth / 2 - 40 + 'px',\n        top: window.innerHeight / 2 - this.gallo.naturalHeight / 2 + 24 + 'px',\n        css: {\n          opacity: 0,\n          transition: '5s opacity ease-in-out',\n          zIndex: 999\n        }\n      });\n      this.mapOver.canvas.id = 'galloMap';\n      this.mapOver.ctx.drawImage(this.gallo, 0, 0);\n      this.imgLoaded = true;\n    }\n  }, {\n    key: 'checkAssetsLoaded',\n    value: function checkAssetsLoaded() {\n      if (this.imgLoaded) {\n        this.render();\n        window.cancelAnimationFrame(this.animReq);\n      } else {\n        this.animReq = requestAnimationFrame(this.checkAssetsLoaded.bind(this));\n      }\n    }\n  }, {\n    key: 'waitMapToLoad',\n    value: function waitMapToLoad(cb) {\n      google.maps.event.addListenerOnce(this.map, 'idle', this.checkAssetsLoaded.bind(this));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n\n      this.mapOver.canvas.style.opacity = 1;\n      this.mapOver.canvas.onclick = function (event) {\n        var point = { x: event.clientX, y: event.clientY };\n        var coords = (0, _helpers.point2Coords)(point, _this.map);\n        var panorama = _this.map.getStreetView();\n        panorama.setPosition({\n          lat: coords.lat,\n          lng: coords.lng\n        });\n        panorama.setPov();\n        panorama.setVisible(true);\n        _this.mapOver.canvas.style.display = 'none';\n        _this.layer.style.zIndex = 90;\n        return false;\n      };\n    }\n  }]);\n\n  return Map;\n}();\n\nexports.default = Map;\n\n//# sourceURL=webpack:///./js/lab/vista-al-mar/Map.js?");

/***/ }),

/***/ "./js/lab/vista-al-mar/Mask.js":
/*!*************************************!*\
  !*** ./js/lab/vista-al-mar/Mask.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Mask = function () {\n  function Mask(container) {\n    _classCallCheck(this, Mask);\n\n    this.layer = DDD.canvas(container);\n    this.layer.canvas.id = 'mask';\n    this.layer.canvas.style.pointerEvents = 'none';\n    this.layer.canvas.style.zIndex = 99;\n    this.draw();\n  }\n\n  _createClass(Mask, [{\n    key: 'resize',\n    value: function resize() {\n      this.draw();\n    }\n  }, {\n    key: 'draw',\n    value: function draw() {\n      var ctx = this.layer.ctx;\n      var w = this.layer.canvas.width = window.innerWidth;\n      var h = this.layer.canvas.height = window.innerHeight;\n      ctx.fillStyle = 'white';\n      ctx.fillRect(0, 0, w, h);\n      ctx.globalCompositeOperation = 'destination-out';\n      ctx.filter = 'blur(70px)';\n      ctx.beginPath();\n      ctx.ellipse(w / 2, h / 2, w / 2.5, h / 2.5, 0, 0, 2 * Math.PI);\n      ctx.fill();\n      ctx.globalCompositeOperation = 'source-over';\n    }\n  }]);\n\n  return Mask;\n}();\n\nexports.default = Mask;\n\n//# sourceURL=webpack:///./js/lab/vista-al-mar/Mask.js?");

/***/ }),

/***/ "./js/lab/vista-al-mar/MemoryPalace.js":
/*!*********************************************!*\
  !*** ./js/lab/vista-al-mar/MemoryPalace.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MemoryPalace = function () {\n  function MemoryPalace(container) {\n    _classCallCheck(this, MemoryPalace);\n\n    var basePath = '/img/assets/vistaMemory/';\n    this.memories = [];\n    this.mnemonics = [basePath + 'golpe1.png', basePath + 'mono.jpg', basePath + 'caida1.jpg', basePath + 'golpe2.jpg'];\n    this.stage = DDD.canvas(container);\n    this.stage.canvas.id = 'memory';\n    this.stage.canvas.style.zIndex = 0;\n    this.loadMemories();\n  }\n\n  _createClass(MemoryPalace, [{\n    key: 'invokeStatic',\n    value: function invokeStatic() {\n      var _this = this;\n\n      var ctx = this.stage.ctx;\n\n      setTimeout(function () {\n        var i = DDD.random(0, _this.memories.length);\n\n        ctx.clearRect(0, 0, _this.stage.w, _this.stage.h);\n        ctx.drawImage(_this.memories[i].img, 0, 0);\n        _this.invokeStatic();\n      }, 10000);\n    }\n  }, {\n    key: 'updateOpacity',\n    value: function updateOpacity(o) {\n      this.stage.ctx.globalAlpha = o / 2;\n    }\n  }, {\n    key: 'loadMemories',\n    value: function loadMemories() {\n      var _this2 = this;\n\n      this.mnemonics.forEach(function (mnemonic) {\n        var img = new Image();\n        img.onload = function () {\n          _this2.memories.push({\n            img: img,\n            w: img.naturalWidth,\n            h: img.naturalHeight\n          });\n        };\n        img.src = mnemonic;\n      });\n    }\n  }]);\n\n  return MemoryPalace;\n}();\n\nexports.default = MemoryPalace;\n;\n\n//# sourceURL=webpack:///./js/lab/vista-al-mar/MemoryPalace.js?");

/***/ }),

/***/ "./js/lab/vista-al-mar/Menu.js":
/*!*************************************!*\
  !*** ./js/lab/vista-al-mar/Menu.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Menu = function Menu() {\n  this.container = document.createElement('div');\n  this.container.id = 'credits';\n  Object.assign(this.container.style, {\n    position: 'absolute',\n    width: '100%',\n    height: '100%',\n    backgroundColor: 'white',\n    top: 0,\n    left: 0,\n    zIndex: 999999\n  });\n\n  var title = document.createElement('h1');\n  title.innerText = 'Vista al Mar';\n\n  this.container.appendChild(title);\n  document.body.appendChild(this.container);\n};\n\nexports.default = Menu;\n\n//# sourceURL=webpack:///./js/lab/vista-al-mar/Menu.js?");

/***/ }),

/***/ "./js/lab/vista-al-mar/helpers.js":
/*!****************************************!*\
  !*** ./js/lab/vista-al-mar/helpers.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.latLng2Point = latLng2Point;\nexports.point2Coords = point2Coords;\n// Convert points to coords and viceversa\n// https://stackoverflow.com/questions/25219346/how-to-convert-from-x-y-screen-coordinates-to-latlng-google-maps\nfunction latLng2Point(latLng, map) {\n  var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());\n  var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());\n  var scale = Math.pow(2, map.getZoom());\n  var worldPoint = map.getProjection().fromLatLngToPoint(latLng);\n  return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale);\n}\n\nfunction point2Coords(point, map) {\n  var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());\n  var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());\n  var scale = Math.pow(2, map.getZoom());\n  var worldPoint = new google.maps.Point(point.x / scale + bottomLeft.x, point.y / scale + topRight.y);\n  var fn = map.getProjection().fromPointToLatLng(worldPoint);\n  var coords = {\n    lat: fn.lat(),\n    lng: fn.lng()\n  };\n  return coords;\n};\n\n//# sourceURL=webpack:///./js/lab/vista-al-mar/helpers.js?");

/***/ }),

/***/ "./js/lab/vista-al-mar/index.js":
/*!**************************************!*\
  !*** ./js/lab/vista-al-mar/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _pulseNotations = __webpack_require__(/*! ./pulseNotations */ \"./js/lab/vista-al-mar/pulseNotations.js\");\n\nvar _pulseNotations2 = _interopRequireDefault(_pulseNotations);\n\nvar _Mask = __webpack_require__(/*! ./Mask */ \"./js/lab/vista-al-mar/Mask.js\");\n\nvar _Mask2 = _interopRequireDefault(_Mask);\n\nvar _Map = __webpack_require__(/*! ./Map */ \"./js/lab/vista-al-mar/Map.js\");\n\nvar _Map2 = _interopRequireDefault(_Map);\n\nvar _Audio = __webpack_require__(/*! ./Audio */ \"./js/lab/vista-al-mar/Audio.js\");\n\nvar _Audio2 = _interopRequireDefault(_Audio);\n\nvar _Menu = __webpack_require__(/*! ./Menu */ \"./js/lab/vista-al-mar/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _MemoryPalace = __webpack_require__(/*! ./MemoryPalace */ \"./js/lab/vista-al-mar/MemoryPalace.js\");\n\nvar _MemoryPalace2 = _interopRequireDefault(_MemoryPalace);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*----------  SET STAGE  ----------*/\nvar container = document.getElementById('ddd-container');\nvar notations = new _pulseNotations2.default(container);\nvar mask = new _Mask2.default(container);\nvar map = new _Map2.default(container);\nvar audio = new _Audio2.default();\nvar memory = new _MemoryPalace2.default(container);\n\nwindow.init = function () {\n  map.init();\n};\n\n/*----------  GLOBALS  ----------*/\nvar animReq = void 0;\nvar pulseData = [];\nvar pulseDataLoaded = false;\nvar dataLenght = 0;\nvar dataI = 0;\nvar maxBeat = 563;\nvar minBeat = 462;\nvar beatRange = maxBeat - minBeat;\nvar beatStep = 1 / beatRange;\n\nvar pulse = DDD.json('/data/pulse/heart.2.json').then(function (ret) {\n  for (var i = 0; i < ret.beats.length; i++) {\n    var d = ret.beats[i];\n    if (d.charAt(0) === 'S') {\n      pulseData.push(+d.substr(1));\n    }\n  }\n  pulseDataLoaded = true;\n  dataLenght = pulseData.length;\n  notations.bindData(pulseData);\n  notations.init();\n  heart();\n  memory.invokeStatic();\n}).catch(function (err) {\n  console.error(err);\n});\n\nfunction heart() {\n  if (dataI < dataLenght) {\n    var beat = pulseData[dataI];\n    var o = (maxBeat - beat) * beatStep;\n    map.layer.style.opacity = o;\n    memory.updateOpacity(o);\n    notations.update(dataI);\n    dataI++;\n  } else {\n    window.cancelAnimationFrame(animReq);\n  }\n  animReq = requestAnimationFrame(heart);\n}\n\nnotations.stage.canvas.onclick = function (event) {\n  dataI = notations.getNewI(event.clientX);\n  return false;\n};\n\nwindow.onresize = function (event) {\n  mask.resize();\n};\n\n//# sourceURL=webpack:///./js/lab/vista-al-mar/index.js?");

/***/ }),

/***/ "./js/lab/vista-al-mar/pulseNotations.js":
/*!***********************************************!*\
  !*** ./js/lab/vista-al-mar/pulseNotations.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Notations = function Notations(container) {\n  this.stage = DDD.canvas(container, { h: 60 });\n  this.stage.canvas.style.zIndex = 9999;\n};\n\nexports.default = Notations;\n\n\nNotations.prototype.bindData = function (data) {\n  this.data = data;\n  this.stepX = this.stage.w / data.length;\n};\n\nNotations.prototype.init = function () {\n  var ctx = this.stage.ctx;\n  var animReq;\n  var i = 0;\n  var step = 3000;\n  var len = this.data.length;\n  ctx.strokeStyle = 'rgba(0, 0, 0, 0.01)';\n\n  var _this = this;\n\n  function render() {\n    if (i < len) {\n      for (var j = i; j < i + step; j++) {\n        _this.update(j);\n      }\n      i += step;\n      animReq = requestAnimationFrame(render);\n    } else {\n      ctx.strokeStyle = 'rgba(255, 0, 0, 0.01)';\n    }\n  }\n  render();\n\n  // for (var i = 0; i < this.data.length; i++) {\n  //   this.update(i);\n  // }\n};\n\nNotations.prototype.update = function (i) {\n  var ctx = this.stage.ctx;\n  var beat = this.data[i];\n  var x = i * this.stepX;\n\n  ctx.beginPath();\n  ctx.moveTo(x, 0);\n  ctx.lineTo(x, -500 + beat);\n  ctx.stroke();\n};\n\nNotations.prototype.getNewI = function (x) {\n  return x / this.stepX | 0;\n};\n\n//# sourceURL=webpack:///./js/lab/vista-al-mar/pulseNotations.js?");

/***/ })

/******/ });