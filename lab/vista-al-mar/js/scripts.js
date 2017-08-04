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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pulseNotations = __webpack_require__(4);

var _pulseNotations2 = _interopRequireDefault(_pulseNotations);

var _Mask = __webpack_require__(5);

var _Mask2 = _interopRequireDefault(_Mask);

var _Map = __webpack_require__(6);

var _Map2 = _interopRequireDefault(_Map);

var _Audio = __webpack_require__(8);

var _Audio2 = _interopRequireDefault(_Audio);

var _Menu = __webpack_require__(9);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*----------  SET STAGE  ----------*/
var container = document.getElementById('ddd-container');
var animReq;
var notations = new _pulseNotations2.default(container);
var mask = new _Mask2.default(container);
var map = new _Map2.default(container);
var audio = new _Audio2.default();

window.init = function () {
  map.init();
};

/*----------  GLOBALS  ----------*/
var pulseData = [];
var pulseDataLoaded = false;
var dataLenght = 0;
var dataI = 0;
var maxBeat = 563;
var minBeat = 462;
var beatRange = maxBeat - minBeat;
var beatStep = 1 / beatRange;

var pulse = DDD.json('/data/pulse/heart.2.json').then(function (ret) {
  for (var i = 0; i < ret.beats.length; i++) {
    var d = ret.beats[i];
    if (d.charAt(0) === 'S') {
      pulseData.push(+d.substr(1));
    }
  }
  pulseDataLoaded = true;
  dataLenght = pulseData.length;
  notations.bindData(pulseData);
  notations.init();
  heart();
}).catch(function (err) {
  console.error(err);
});

function heart() {
  if (dataI < dataLenght) {
    var beat = pulseData[dataI];
    map.layer.style.opacity = (maxBeat - beat - beatRange / 3) * beatStep;
    notations.update(dataI);
    dataI++;
  } else {
    window.cancelAnimationFrame(animReq);
  }
  animReq = requestAnimationFrame(heart);
}

notations.stage.canvas.onclick = function (event) {
  dataI = notations.getNewI(event.clientX);
  return false;
};

window.onresize = function (event) {
  mask.resize();
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Notations = function Notations(container) {
  this.stage = DDD.canvas(container, { h: 60 });
  this.stage.canvas.style.zIndex = 9999;
};

exports.default = Notations;


Notations.prototype.bindData = function (data) {
  this.data = data;
  this.stepX = this.stage.w / data.length;
};

Notations.prototype.init = function () {
  var ctx = this.stage.ctx;
  var animReq;
  var i = 0;
  var step = 3000;
  var len = this.data.length;
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.01)';

  var _this = this;

  function render() {
    if (i < len) {
      for (var j = i; j < i + step; j++) {
        _this.update(j);
      }
      i += step;
      animReq = requestAnimationFrame(render);
    } else {
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.01)';
    }
  }
  render();

  // for (var i = 0; i < this.data.length; i++) {
  //   this.update(i);
  // }
};

Notations.prototype.update = function (i) {
  var ctx = this.stage.ctx;
  var beat = this.data[i];
  var x = i * this.stepX;

  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, -500 + beat);
  ctx.stroke();
};

Notations.prototype.getNewI = function (x) {
  return x / this.stepX | 0;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Mask = function Mask(container) {
  this.layer = DDD.canvas(container);
  this.layer.canvas.id = 'mask';
  this.layer.canvas.style.pointerEvents = 'none';
  this.layer.canvas.style.zIndex = 99;
  this.draw();
};

exports.default = Mask;


Mask.prototype.resize = function () {
  this.draw();
};

Mask.prototype.draw = function () {
  var ctx = this.layer.ctx;
  var w = this.layer.canvas.width = window.innerWidth;
  var h = this.layer.canvas.height = window.innerHeight;

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'destination-out';
  ctx.filter = 'blur(70px)';
  ctx.beginPath();
  ctx.ellipse(w / 2, h / 2, w / 2.5, h / 2.5, 0, 0, 2 * Math.PI);
  ctx.fill();

  ctx.globalCompositeOperation = 'source-over';
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = __webpack_require__(7);

var Map = function Map(container) {
  this.container = container;
  this.animReq;
  this.mapLoaded = false;
  this.imgLoaded = false;
  this.layer = document.createElement('div');
  this.layer.id = 'googleMap';

  this.layer.style.position = 'absolute';
  this.layer.style.left = 0;
  this.layer.style.top = 0;
  this.layer.style.width = '100%';
  this.layer.style.height = '100%';
  this.layer.style.transition = 'none';
  this.container.appendChild(this.layer);
};

exports.default = Map;


Map.prototype.init = function () {
  this.map = new google.maps.Map(this.layer, {
    center: { lat: 10.398683, lng: -75.475911 },
    scrollwheel: false,
    zoom: 17,
    disableDefaultUI: true
  });
  this.waitMapToLoad();

  this.gallo = new Image();
  this.gallo.onload = this.onImageLoaded.bind(this);
  this.gallo.src = '/img/assets/backgrounds/elGallo.png';
};

Map.prototype.onImageLoaded = function () {
  this.mapOver = DDD.canvas(this.container, {
    w: this.gallo.naturalWidth,
    h: this.gallo.naturalHeight,
    left: window.innerWidth / 2 - this.gallo.naturalWidth / 2 - 40 + 'px',
    top: window.innerHeight / 2 - this.gallo.naturalHeight / 2 + 24 + 'px',
    css: {
      opacity: 0,
      transition: '5s opacity ease-in-out',
      zIndex: 999
    }
  });
  this.mapOver.canvas.id = 'galloMap';
  this.mapOver.ctx.drawImage(this.gallo, 0, 0);

  this.imgLoaded = true;
};

Map.prototype.checkAssetsLoaded = function () {
  if (this.imgLoaded) {
    this.render();
    window.cancelAnimationFrame(this.animReq);
  } else {
    this.animReq = requestAnimationFrame(this.checkAssetsLoaded.bind(this));
  }
};

Map.prototype.waitMapToLoad = function (cb) {
  google.maps.event.addListenerOnce(this.map, 'idle', this.checkAssetsLoaded.bind(this));
};

Map.prototype.render = function () {
  var _this = this;

  this.mapOver.canvas.style.opacity = 1;

  this.mapOver.canvas.onclick = function (event) {
    var point = { x: event.clientX, y: event.clientY };
    var coords = (0, _helpers.point2Coords)(point, _this.map);
    var panorama = _this.map.getStreetView();
    panorama.setPosition({ lat: coords.lat, lng: coords.lng });
    panorama.setPov();
    panorama.setVisible(true);

    _this.mapOver.canvas.style.display = 'none';
    _this.layer.style.zIndex = 90;

    return false;
  };
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.latLng2Point = latLng2Point;
exports.point2Coords = point2Coords;
// Convert points to coords and viceversa
// https://stackoverflow.com/questions/25219346/how-to-convert-from-x-y-screen-coordinates-to-latlng-google-maps
function latLng2Point(latLng, map) {
  var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
  var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
  var scale = Math.pow(2, map.getZoom());
  var worldPoint = map.getProjection().fromLatLngToPoint(latLng);
  return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale);
}

function point2Coords(point, map) {
  var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
  var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
  var scale = Math.pow(2, map.getZoom());
  var worldPoint = new google.maps.Point(point.x / scale + bottomLeft.x, point.y / scale + topRight.y);
  var fn = map.getProjection().fromPointToLatLng(worldPoint);
  var coords = {
    lat: fn.lat(),
    lng: fn.lng()
  };
  return coords;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Audio = function Audio() {
  this.audio = new DDD.Audio({ mar: '/videos/mar.mp3' }, function (audios) {
    this.loaded(audios);
  }.bind(this));
  this.playing = true;
  this.a = {};

  this.btn = document.createElement('div');
  Object.assign(this.btn.style, {
    position: 'absolute',
    zIndex: 9999999,
    bottom: '20px',
    left: '20px',
    cursor: 'pointer',
    backgroundImage: 'url(/img/assets/icons/audio.png)',
    display: 'block',
    width: '28px',
    height: '25px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  });

  document.body.appendChild(this.btn);

  this.btn.onclick = this.toggle.bind(this);
};

exports.default = Audio;


Audio.prototype.loaded = function (audios) {
  this.a = audios;
  audios.mar.volume = 1;
  audios.mar.loop = true;
  audios.mar.start(0);
};

Audio.prototype.toggle = function () {
  if (this.playing) {
    this.audio.ctx.suspend();
    this.btn.style.backgroundPosition = 'right';
  } else {
    this.audio.ctx.resume();
    this.btn.style.backgroundPosition = 'left';
  }
  this.playing = !this.playing;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Menu = function Menu() {
  this.container = document.createElement('div');
  this.container.id = 'credits';
  Object.assign(this.container.style, {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    top: 0,
    left: 0,
    zIndex: 999999
  });

  var title = document.createElement('h1');
  title.innerText = 'Vista al Mar';

  this.container.appendChild(title);
  document.body.appendChild(this.container);
};

exports.default = Menu;

/***/ })
/******/ ]);
//# sourceMappingURL=scripts.js.map