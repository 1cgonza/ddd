(function () {
  'use strict';
  var container = document.getElementById('ddd-container');
  var loading   = document.getElementById('ddd-loading');
  var stageW = window.innerWidth;
  var stageH = window.innerHeight;
  var centerX = stageW / 2 | 0;
  var centerY = stageH / 2 | 0;

  /*----------  CREATE CANVAS  ----------*/
  var canvas = document.createElement('canvas');
  var ctx    = canvas.getContext('2d');
  canvas.width  = stageW;
  canvas.height = stageH;
  container.appendChild(canvas);

  function init () {
    requestData('../../data/dane/defunciones/defunciones-2004.json', processData);
    loading.style.opacity = 0;
  }

  function processData(data) {
    console.log(data);
  }

  init();
})();