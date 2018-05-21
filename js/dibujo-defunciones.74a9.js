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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/lab/dibujo-defunciones/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/lab/dibujo-defunciones/Levit.js":
/*!********************************************!*\
  !*** ./js/lab/dibujo-defunciones/Levit.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _index = __webpack_require__(/*! ./index */ \"./js/lab/dibujo-defunciones/index.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Levit = function () {\n  function Levit(stage, coords, num) {\n    _classCallCheck(this, Levit);\n\n    this.stage = stage;\n    this.x = coords.x;\n    this.y = coords.y;\n    this.frameX = 0;\n    this.finished = false;\n    this.r = -num;\n    this.forward = true;\n    this.pushY = 0;\n    this.count = 0;\n  }\n\n  _createClass(Levit, [{\n    key: 'draw',\n    value: function draw() {\n      var stage = this.stage;\n      var ctx = stage.ctx;\n\n      if (this.count < _index.assets.levit.cols * 2) {\n        if (!this.forward) {\n          this.pushY += _index.assets.levit.fh / 15;\n        }\n\n        ctx.save();\n        ctx.translate(stage.center.x, stage.center.y);\n        ctx.rotate(this.r * Math.PI / 20);\n        ctx.drawImage(_index.assets.levit.img, this.frameX * _index.assets.levit.fw, 0, _index.assets.levit.fw, _index.assets.levit.fh, this.x - _index.assets.levit.offX, this.y - _index.assets.levit.offY - this.pushY, _index.assets.levit.fw, _index.assets.levit.fh);\n        ctx.restore();\n\n        if (this.forward) {\n          this.frameX++;\n        } else {\n          this.frameX--;\n        }\n        this.count++;\n\n        if (this.frameX === _index.assets.levit.cols - 1) {\n          this.forward = false;\n        }\n      } else {\n        this.del();\n      }\n    }\n  }, {\n    key: 'del',\n    value: function del() {\n      this.finished = true;\n    }\n  }]);\n\n  return Levit;\n}();\n\nexports.default = Levit;\n\n//# sourceURL=webpack:///./js/lab/dibujo-defunciones/Levit.js?");

/***/ }),

/***/ "./js/lab/dibujo-defunciones/Sprite.js":
/*!*********************************************!*\
  !*** ./js/lab/dibujo-defunciones/Sprite.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Sprite = function Sprite(op) {\n  _classCallCheck(this, Sprite);\n\n  this.img = new Image();\n  this.src = op.src;\n  this.w = op.w;\n  this.h = op.h;\n  this.cols = op.cols;\n  this.rows = op.rows;\n  this.offX = op.offX;\n  this.offY = op.offY;\n  this.fw = this.w / this.cols | 0;\n  this.fh = this.h / this.rows | 0;\n};\n\nexports.default = Sprite;\n;\n\n//# sourceURL=webpack:///./js/lab/dibujo-defunciones/Sprite.js?");

/***/ }),

/***/ "./js/lab/dibujo-defunciones/UI.js":
/*!*****************************************!*\
  !*** ./js/lab/dibujo-defunciones/UI.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _index = __webpack_require__(/*! ./index */ \"./js/lab/dibujo-defunciones/index.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar UI = function () {\n  function UI(container, reloadStage, violenceReq) {\n    _classCallCheck(this, UI);\n\n    this.container = container;\n    this.current;\n    this.reloadStage = reloadStage;\n    this.violenceReq = violenceReq;\n    this.menu = DDD.yearsMenu(2008, 2016, _index.year, this.onClick.bind(this), this.menuReady.bind(this));\n  }\n\n  _createClass(UI, [{\n    key: 'menuReady',\n    value: function menuReady(menu, currentFirst) {\n      this.container.appendChild(menu);\n      this.current = currentFirst;\n    }\n  }, {\n    key: 'onClick',\n    value: function onClick(event) {\n      if (event.target !== this.current) {\n        window.cancelAnimationFrame(_index.animReq);\n        DDD.resetCurrent(this.current, event.target);\n        this.violenceReq.abort();\n        this.current = event.target;\n        this.reloadStage(event.target.textContent);\n      }\n    }\n  }]);\n\n  return UI;\n}();\n\nexports.default = UI;\n\n//# sourceURL=webpack:///./js/lab/dibujo-defunciones/UI.js?");

/***/ }),

/***/ "./js/lab/dibujo-defunciones/imgs.js":
/*!*******************************************!*\
  !*** ./js/lab/dibujo-defunciones/imgs.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar imgs = exports.imgs = [{\n  key: 'lines',\n  options: {\n    src: '/img/assets/sprites/lines-01-small.png',\n    w: 295,\n    h: 150,\n    cols: 21,\n    rows: 1,\n    offX: 4,\n    offY: 1\n  }\n}, {\n  key: 'shadows',\n  options: {\n    src: '/img/assets/sprites/shadows-sprite.png',\n    w: 318,\n    h: 300,\n    cols: 3,\n    rows: 8,\n    offX: 55,\n    offY: 14\n  }\n}, {\n  key: 'levit',\n  options: {\n    src: '/img/assets/sprites/levit.png',\n    w: 3279,\n    h: 165,\n    cols: 30,\n    rows: 1,\n    offX: 68,\n    offY: 161\n  }\n}, {\n  key: 'papa1',\n  options: {\n    src: '/img/assets/sprites/papa1.jpg',\n    w: 1200,\n    h: 1200\n  }\n}, {\n  key: 'papa2',\n  options: {\n    src: '/img/assets/sprites/papa2.jpg',\n    w: 1200,\n    h: 1200\n  }\n}, {\n  key: 'papa3',\n  options: {\n    src: '/img/assets/sprites/papa3.jpg',\n    w: 1200,\n    h: 1200\n  }\n}, {\n  key: 'papa4',\n  options: {\n    src: '/img/assets/sprites/papa4.jpg',\n    w: 1200,\n    h: 1200\n  }\n}];\n\n//# sourceURL=webpack:///./js/lab/dibujo-defunciones/imgs.js?");

/***/ }),

/***/ "./js/lab/dibujo-defunciones/index.js":
/*!********************************************!*\
  !*** ./js/lab/dibujo-defunciones/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.animReq = exports.year = exports.assets = undefined;\n\nvar _UI = __webpack_require__(/*! ./UI */ \"./js/lab/dibujo-defunciones/UI.js\");\n\nvar _UI2 = _interopRequireDefault(_UI);\n\nvar _Sprite = __webpack_require__(/*! ./Sprite */ \"./js/lab/dibujo-defunciones/Sprite.js\");\n\nvar _Sprite2 = _interopRequireDefault(_Sprite);\n\nvar _Levit = __webpack_require__(/*! ./Levit */ \"./js/lab/dibujo-defunciones/Levit.js\");\n\nvar _Levit2 = _interopRequireDefault(_Levit);\n\nvar _imgs = __webpack_require__(/*! ./imgs */ \"./js/lab/dibujo-defunciones/imgs.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar violenceReq = new DDD.DataRequest();\n\n/*----------  STAGE  ----------*/\nvar container = document.getElementById('ddd-container');\nvar loading = document.createElement('div');\n\nvar bg = DDD.canvas(null);\nvar log = DDD.canvas(container);\nvar papa = DDD.canvas(container);\nvar papaNext = DDD.canvas(container);\nvar papaLast = DDD.canvas(container);\nvar papaW = void 0;\nvar papaH = void 0;\n\nvar stage = DDD.canvas(container);\n\npapa.canvas.id = 'papa';\n\nvar assets = exports.assets = {};\n\nloading.className = 'loading';\nbg.center.y = stage.center.y = bg.h / 1.5 | 0;\ncontainer.appendChild(loading);\n\n/*----------  DATA  ----------*/\nvar year = exports.year = 2008;\nvar bodies = [];\nvar d = [];\nvar geoD = [];\nvar dLoaded = false;\nvar geoLoaded = false;\n\n/*----------  ANIMATION  ----------*/\nvar animReq = exports.animReq = void 0;\nvar dataI = 0;\nvar hold = 4;\nvar tick = 0;\n\n/*----------  MAP  ----------*/\nvar map = new DDD.Map({\n  zoom: 8,\n  width: stage.w,\n  height: stage.h,\n  center: {\n    lon: -71.999996,\n    lat: 4.000002\n  }\n});\n\n/*----------  TIME  ----------*/\nvar prevTimePosition = 0;\n\n// Set dates range as ISO 8601 YYYY-MM-DDThh:mm:ss\nvar dIni = Date.parse(year + '/01/01 00:00:00') / 1000;\nvar dEnd = Date.parse(year + 1 + '/01/01 00:00:00') / 1000;\n\n/*----------  SPRITES  ----------*/\nvar imgsLoaded = 0;\n\n/*----------  MENU  ----------*/\nvar ui = new _UI2.default(container, reloadStage, violenceReq);\n\nfunction reloadStage(newYear) {\n  loading.innerHTML = '';\n  loading.style.opacity = 1;\n  exports.year = year = newYear;\n  dataI = 0;\n  bodies = [];\n  d = [];\n  dLoaded = false;\n  prevTimePosition = 0;\n  dIni = Date.parse(year + '/01/01 00:00:00') / 1000;\n  dEnd = Date.parse(year + 1 + '/01/01 00:00:00') / 1000;\n\n  stage.ctx.clearRect(0, 0, stage.w, stage.h);\n  log.ctx.clearRect(0, 0, log.w, log.h);\n  bg.ctx.clearRect(0, 0, bg.w, bg.h);\n\n  requestViolenceData();\n  checkAssetsLoaded();\n  console.log(year);\n}\n\nfunction requestViolenceData() {\n  violenceReq.json({\n    url: '../../data/monitor/violencia-' + year + '.json',\n    container: container,\n    loadingMsg: 'Loading Violence Data',\n    loadingEle: loading\n  }).then(function (res) {\n    d = res.data;\n    dLoaded = true;\n  }).catch(function (err) {\n    console.error(err);\n  });\n}\n\nfunction init() {\n  requestViolenceData();\n\n  for (var i = 0; i < _imgs.imgs.length; i++) {\n    var sprite = new _Sprite2.default(_imgs.imgs[i].options);\n    sprite.img.onload = function () {\n      imgsLoaded++;\n    };\n    sprite.img.src = sprite.src;\n    assets[_imgs.imgs[i].key] = sprite;\n    papaW = papa.h - 50;\n    papaH = papa.h - 50;\n  }\n\n  checkAssetsLoaded();\n}\n\nfunction checkAssetsLoaded() {\n  if (imgsLoaded === _imgs.imgs.length && dLoaded) {\n    loading.style.opacity = 0;\n    stage.ctx.globalCompositeOperation = 'source-over';\n    stage.ctx.fillStyle = 'rgba(255, 255, 255, 1)';\n    stage.ctx.fillRect(0, 0, stage.w, stage.h);\n    fade();\n    animate();\n  } else {\n    exports.animReq = animReq = requestAnimationFrame(checkAssetsLoaded);\n  }\n}\n\nfunction animate() {\n  if (dataI < d.length - 1) {\n    if (tick === hold) {\n      draw(dataI);\n      tick = 0;\n    }\n    dataI++;\n    tick++;\n    exports.animReq = animReq = requestAnimationFrame(animate);\n  } else {\n    window.cancelAnimationFrame(animReq);\n  }\n}\n\nvar currentImage = 1;\nvar op = 1;\n\nfunction nextImage() {\n  currentImage++;\n\n  if (currentImage >= 4) {\n    currentImage = 1;\n  }\n\n  op = 1;\n}\n\nfunction fade() {\n  var n = (currentImage + 1) % 4;\n  var nextI = n % 4 === 0 ? 1 : n;\n  var curr = assets['papa' + currentImage].img;\n  var next = assets['papa' + nextI].img;\n  op -= 0.005;\n  papaLast.ctx.clearRect(0, 0, papaLast.w, papaLast.h);\n  papaLast.ctx.globalAlpha = op;\n  papaLast.ctx.drawImage(curr, papa.w / 2 - papaW / 2 - 200, papa.h / 2 - papaH / 2, papaW, papaH);\n\n  papaNext.ctx.clearRect(0, 0, papaNext.w, papaNext.h);\n  papaNext.ctx.globalAlpha = 1 - op;\n  papaNext.ctx.drawImage(next, papa.w / 2 - papaW / 2 - 200, papa.h / 2 - papaH / 2, papaW, papaH);\n\n  papa.ctx.clearRect(0, 0, papa.w, papa.h);\n  papa.ctx.drawImage(papaLast.canvas, 0, 0);\n  papa.ctx.drawImage(papaNext.canvas, 0, 0);\n\n  if (op <= 0) {\n    nextImage();\n  }\n\n  exports.animReq = animReq = requestAnimationFrame(fade);\n}\n\nfunction draw(i) {\n  var e = d[i];\n\n  if (e.hasOwnProperty('vTotal') && e.hasOwnProperty('cat') && e.cat.indexOf('Homicidio') >= 0) {\n    var total = d[i].vTotal;\n\n    if ('lon' in e && 'lat' in e) {\n      var coords = map.convertCoordinates(e.lon, e.lat);\n\n      for (var t = 0; t < total; t++) {\n        bodies.push(new _Levit2.default(bg, coords, t));\n      }\n    }\n  }\n\n  if (bodies.length > 0) {\n    bg.ctx.clearRect(0, 0, stage.w, stage.h);\n\n    for (var n = 0; n < bodies.length; n++) {\n      if (!bodies[n].finished) {\n        bodies[n].draw();\n      }\n    }\n\n    stage.ctx.globalCompositeOperation = 'source-over';\n    stage.ctx.fillStyle = 'rgba(255, 255, 255, 0.01)';\n    stage.ctx.fillRect(0, 0, stage.w, stage.h);\n    stage.ctx.globalCompositeOperation = 'xor';\n    stage.ctx.drawImage(bg.canvas, 0, 0);\n  }\n}\n\ninit();\n\n//# sourceURL=webpack:///./js/lab/dibujo-defunciones/index.js?");

/***/ })

/******/ });