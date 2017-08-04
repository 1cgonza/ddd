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
/******/ 	__webpack_require__.p = "/Users/juan/lab/ddd/www/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animReq = exports.year = exports.assets = undefined;

var _UI = __webpack_require__(10);

var _UI2 = _interopRequireDefault(_UI);

var _Sprite = __webpack_require__(11);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _Levit = __webpack_require__(12);

var _Levit2 = _interopRequireDefault(_Levit);

var _imgs = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var violenceReq = new DDD.DataRequest();
// var mapReq      = new DDD.DataRequest();

/*----------  STAGE  ----------*/
var container = document.getElementById('ddd-container');
var loading = document.createElement('div');

var bg = DDD.canvas(null);
var log = DDD.canvas(container);
var papa = DDD.canvas(container);
var papaNext = DDD.canvas(container);
var papaLast = DDD.canvas(container);
var papaW;
var papaH;

var stage = DDD.canvas(container);

papa.canvas.id = 'papa';

var assets = exports.assets = {};

loading.className = 'loading';
bg.center.y = stage.center.y = bg.h / 1.5 | 0;
container.appendChild(loading);

/*----------  DATA  ----------*/
var year = exports.year = 2008;
var bodies = [];
var d = [];
var geoD = [];
var dLoaded = false;
var geoLoaded = false;

/*----------  ANIMATION  ----------*/
var animReq = exports.animReq = undefined;
var dataI = 0;
var hold = 4;
var tick = 0;

/*----------  MAP  ----------*/
var map = new DDD.Map({
  zoom: 8,
  width: stage.w,
  height: stage.h,
  center: { lon: -71.999996, lat: 4.000002 }
});

/*----------  TIME  ----------*/
var prevTimePosition = 0;

// Set dates range as ISO 8601 YYYY-MM-DDThh:mm:ss
var dIni = Date.parse(year + '/01/01 00:00:00') / 1000;
var dEnd = Date.parse(year + 1 + '/01/01 00:00:00') / 1000;

/*----------  SPRITES  ----------*/
var imgsLoaded = 0;

/*----------  MENU  ----------*/
var ui = new _UI2.default(container, reloadStage, violenceReq);

function reloadStage(newYear) {
  loading.innerHTML = '';
  loading.style.opacity = 1;
  exports.year = year = newYear;
  dataI = 0;
  bodies = [];
  d = [];
  dLoaded = false;
  prevTimePosition = 0;
  dIni = Date.parse(year + '/01/01 00:00:00') / 1000;
  dEnd = Date.parse(year + 1 + '/01/01 00:00:00') / 1000;

  stage.ctx.clearRect(0, 0, stage.w, stage.h);
  log.ctx.clearRect(0, 0, log.w, log.h);
  bg.ctx.clearRect(0, 0, bg.w, bg.h);

  requestViolenceData();
  checkAssetsLoaded();
  console.log(year);
}

function requestViolenceData() {
  violenceReq.json({
    url: '../../data/monitor/violencia-' + year + '.json',
    container: container,
    loadingMsg: 'Loading Violence Data',
    loadingEle: loading
  }).then(function (res) {
    d = res.data;
    dLoaded = true;
  }).catch(function (err) {
    console.error(err);
  });
}

function init() {
  // bg.ctx.globalCompositeOperation = 'darken';
  // bg.ctx.fillStyle = 'white';

  requestViolenceData();
  // mapReq.json({
  //   url: '../../data/geo/col-50m.json',
  //   container: container,
  //   loadingMsg: 'Loading Map Data',
  //   loadingEle: loading
  // })
  // .then(function(data) {
  //   geoD = data.coordinates;
  //   geoLoaded = true;
  // })
  // .catch(function(err) {
  //   console.error(err);
  // });

  for (var i = 0; i < _imgs.imgs.length; i++) {
    var sprite = new _Sprite2.default(_imgs.imgs[i].options);
    sprite.img.onload = function () {
      imgsLoaded++;
    };
    sprite.img.src = sprite.src;
    assets[_imgs.imgs[i].key] = sprite;
    papaW = papa.h - 50;
    papaH = papa.h - 50;
  }

  checkAssetsLoaded();
}

function checkAssetsLoaded() {
  if (imgsLoaded === _imgs.imgs.length && dLoaded) {
    loading.style.opacity = 0;
    stage.ctx.globalCompositeOperation = 'source-over';
    stage.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    stage.ctx.fillRect(0, 0, stage.w, stage.h);
    // drawMap();
    fade();
    animate();
  } else {
    exports.animReq = animReq = requestAnimationFrame(checkAssetsLoaded);
  }
}

// function drawMap() {
//   for (var i = 0; i < geoD.length; i++) {
//     var poly = geoD[i];

//     bg.ctx.beginPath();
//     for (var l = 0; l < poly.length; l++) {
//       var layer = poly[l];

//       for (var n = 0; n < layer.length; n++) {
//         var node = layer[n];
//         var coords = map.convertCoordinates(node[0], node[1]);

//         bg.ctx.save();
//         bg.ctx.translate(bg.center.x, bg.center.y);
//         bg.ctx.drawImage(
//           lines.img,
//           DDD.random(0, lines.cols) * lines.fw, 0,
//           lines.fw, lines.fh,
//           coords.x - lines.offX, coords.y - lines.offY,
//           lines.fw, lines.fh
//         );

//         if (n === 0) {
//           bg.ctx.moveTo(coords.x, coords.y);
//         } else {
//           bg.ctx.lineTo(coords.x, coords.y);
//         }

//         bg.ctx.restore();

//       }
//     }
//     bg.ctx.closePath();

//     bg.ctx.globalCompositeOperation = 'source-over';
//     bg.ctx.fill();
//   }
// }

function animate() {
  if (dataI < d.length - 1) {
    if (tick === hold) {
      draw(dataI);
      tick = 0;
    }
    dataI++;
    tick++;
    exports.animReq = animReq = requestAnimationFrame(animate);
  } else {
    window.cancelAnimationFrame(animReq);
  }
}

function debug() {
  for (var i = 0; i < d.length; i++) {
    draw(i);
  }
}
var currentImage = 1;
var op = 1;

function nextImage() {
  currentImage++;

  if (currentImage >= 4) {
    currentImage = 1;
  }

  op = 1;
}

function fade() {
  var n = (currentImage + 1) % 4;
  var nextI = n % 4 === 0 ? 1 : n;
  var curr = assets['papa' + currentImage].img;
  var next = assets['papa' + nextI].img;
  op -= 0.005;
  papaLast.ctx.clearRect(0, 0, papaLast.w, papaLast.h);
  papaLast.ctx.globalAlpha = op;
  papaLast.ctx.drawImage(curr, papa.w / 2 - papaW / 2 - 200, papa.h / 2 - papaH / 2, papaW, papaH);

  papaNext.ctx.clearRect(0, 0, papaNext.w, papaNext.h);
  papaNext.ctx.globalAlpha = 1 - op;
  papaNext.ctx.drawImage(next, papa.w / 2 - papaW / 2 - 200, papa.h / 2 - papaH / 2, papaW, papaH);

  papa.ctx.clearRect(0, 0, papa.w, papa.h);
  papa.ctx.drawImage(papaLast.canvas, 0, 0);
  papa.ctx.drawImage(papaNext.canvas, 0, 0);

  if (op <= 0) {
    nextImage();
  }

  exports.animReq = animReq = requestAnimationFrame(fade);
}

function draw(i) {
  var e = d[i];

  if (e.hasOwnProperty('vTotal') && e.hasOwnProperty('cat') && e.cat.indexOf('Homicidio') >= 0) {
    var total = d[i].vTotal;
    // var date = d[i].fecha.unix;
    // var elapsed = ((date - dIni) / 31536000) * stage.w;

    // log.ctx.beginPath();
    // log.ctx.moveTo(prevTimePosition, 0);
    // log.ctx.lineTo(elapsed - (elapsed - prevTimePosition) / 2, total * 3);
    // log.ctx.lineTo(elapsed, 0);
    // log.ctx.stroke();
    // prevTimePosition = elapsed;

    if ('lon' in e && 'lat' in e) {
      var coords = map.convertCoordinates(e.lon, e.lat);
      //var fx = DDD.random(0, shadows.cols);
      //var fy;

      for (var t = 0; t < total; t++) {
        bodies.push(new _Levit2.default(bg, coords, t));
      }

      // bg.ctx.save();
      // bg.ctx.translate(bg.center.x, bg.center.y);

      // if (total > 0 && total === 1) {
      //   fy = 0;
      // } else if (total <= 8) {
      //   fy = total;
      // } else {
      //   fy = 8;
      // }
      // bg.ctx.globalCompositeOperation = 'source-atop';
      // bg.ctx.drawImage(
      //   shadows.img,
      //   fx * shadows.fw, fy * shadows.fh,
      //   shadows.fw, shadows.fh,
      //   coords.x - shadows.offX, coords.y - shadows.offY,
      //   shadows.fw, shadows.fh
      // );

      // bg.ctx.restore();
    }
  }

  if (bodies.length > 0) {
    bg.ctx.clearRect(0, 0, stage.w, stage.h);

    for (var n = 0; n < bodies.length; n++) {
      if (!bodies[n].finished) {
        bodies[n].draw();
      }
    }

    stage.ctx.globalCompositeOperation = 'source-over';
    stage.ctx.fillStyle = 'rgba(255, 255, 255, 0.01)';
    stage.ctx.fillRect(0, 0, stage.w, stage.h);
    stage.ctx.globalCompositeOperation = 'xor';
    stage.ctx.drawImage(bg.canvas, 0, 0);
  }
}

init();

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(0);

var UI = function UI(container, reloadStage, violenceReq) {
  this.container = container;
  this.current;
  this.reloadStage = reloadStage;
  this.violenceReq = violenceReq;
  this.menu = DDD.yearsMenu(2008, 2016, _index.year, this.onClick.bind(this), this.menuReady.bind(this));
};

exports.default = UI;


UI.prototype.menuReady = function (menu, currentFirst) {
  this.container.appendChild(menu);
  this.current = currentFirst;
};

UI.prototype.onClick = function (event) {
  if (event.target !== this.current) {
    window.cancelAnimationFrame(_index.animReq);
    DDD.resetCurrent(this.current, event.target);
    this.violenceReq.abort();
    this.current = event.target;
    this.reloadStage(event.target.textContent);
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Sprite = function Sprite(op) {
  this.img = new Image();
  this.src = op.src;
  this.w = op.w;
  this.h = op.h;
  this.cols = op.cols;
  this.rows = op.rows;
  this.offX = op.offX;
  this.offY = op.offY;
  this.fw = this.w / this.cols | 0;
  this.fh = this.h / this.rows | 0;
};

exports.default = Sprite;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(0);

function Levit(stage, coords, num) {
  this.stage = stage;
  this.x = coords.x;
  this.y = coords.y;
  this.frameX = 0;
  this.finished = false;
  this.r = -num;
  this.forward = true;
  this.pushY = 0;
  this.count = 0;
}

exports.default = Levit;


Levit.prototype.draw = function () {
  var stage = this.stage;

  if (this.count < _index.assets.levit.cols * 2) {
    if (!this.forward) {
      this.pushY += _index.assets.levit.fh / 15;
    }
    stage.ctx.save();
    stage.ctx.translate(stage.center.x, stage.center.y);
    stage.ctx.rotate(this.r * Math.PI / 20);
    stage.ctx.drawImage(_index.assets.levit.img, this.frameX * _index.assets.levit.fw, 0, _index.assets.levit.fw, _index.assets.levit.fh, this.x - _index.assets.levit.offX, this.y - _index.assets.levit.offY - this.pushY, _index.assets.levit.fw, _index.assets.levit.fh);
    stage.ctx.restore();

    if (this.forward) {
      this.frameX++;
    } else {
      this.frameX--;
    }
    this.count++;

    if (this.frameX === _index.assets.levit.cols - 1) {
      this.forward = false;
    }
  } else {
    this.del();
  }
};

Levit.prototype.del = function () {
  this.finished = true;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var imgs = exports.imgs = [{
  key: 'lines',
  options: {
    src: '/img/assets/sprites/lines-01-small.png',
    w: 295,
    h: 150,
    cols: 21,
    rows: 1,
    offX: 4,
    offY: 1
  }
}, {
  key: 'shadows',
  options: {
    src: '/img/assets/sprites/shadows-sprite.png',
    w: 318,
    h: 300,
    cols: 3,
    rows: 8,
    offX: 55,
    offY: 14
  }
}, {
  key: 'levit',
  options: {
    src: '/img/assets/sprites/levit.png',
    w: 3279,
    h: 165,
    cols: 30,
    rows: 1,
    offX: 68,
    offY: 161
  }
}, {
  key: 'papa1',
  options: {
    src: '/img/assets/sprites/papa1.jpg',
    w: 1200,
    h: 1200
  }
}, {
  key: 'papa2',
  options: {
    src: '/img/assets/sprites/papa2.jpg',
    w: 1200,
    h: 1200
  }
}, {
  key: 'papa3',
  options: {
    src: '/img/assets/sprites/papa3.jpg',
    w: 1200,
    h: 1200
  }
}, {
  key: 'papa4',
  options: {
    src: '/img/assets/sprites/papa4.jpg',
    w: 1200,
    h: 1200
  }
}];

/***/ })
/******/ ]);
//# sourceMappingURL=scripts.js.map