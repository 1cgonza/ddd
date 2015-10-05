(function () {
  'use strict';
  var container = document.getElementById('ddd-container');
  var loading   = document.getElementById('ddd-loading');
  var stageW = window.innerWidth;
  var stageH = window.innerHeight;
  var centerX = stageW / 2 | 0;
  var centerY = stageH / 2 | 0;
  var weather = {};

  /*----------  CREATE CANVAS  ----------*/
  var canvas = document.createElement('canvas');
  var ctx    = canvas.getContext('2d');
  canvas.width  = stageW;
  canvas.height = stageH;
  container.appendChild(canvas);

  function init () {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(successLoc, errorLoc);
    }
  }

  function processIP (res) {
    console.log(res);

    if ( res.hasOwnProperty('ip') ) {
      requestData('http://www.geoplugin.net/json.gp?jsoncallback=?', successLoc);
      // requestData('http://www.geoplugin.net/json.gp?ip=' + res.ip, processLocation);
    }
  }

  function successLoc (res) {
    requestData(
      'http://api.openweathermap.org/data/2.5/weather?lat=' + res.coords.latitude + '&lon=' + res.coords.longitude,
      function (d) {
        console.log(d);
        weather = d;
        loading.style.opacity = 0;
      }
    );
  }

  function errorLoc (err) {
    console.warn('Error getting location', err);
  }
  init();
})();