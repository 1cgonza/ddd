(function () {
  'use strict';
  var container = document.getElementById('ddd-container');
  var loading   = document.getElementById('ddd-loading');
  var stageW = window.innerWidth;
  var stageH = window.innerHeight;
  var centerX = stageW / 2 | 0;
  var centerY = stageH / 2 | 0;
  var onCells = {};
  var cells = [];
  var reqAnim;

  /*----------  CREATE CANVAS  ----------*/
  var canvas = document.createElement('canvas');
  var ctx    = canvas.getContext('2d');
  canvas.width  = stageW;
  canvas.height = stageH;
  container.appendChild(canvas);

  function init () {
    loading.style.opacity = 0;

    for (var x = 0; x < 50; x++) {
      for (var y = 0; y < 50; y++) {
        var on = getRandom(0, 10) === 1 ? true : false;
        cells.push( new Cell(x, y, on) );
      }
    }

    animate();
  }

  function animate() {
    for (var i = 0; i < cells.length; i++) {
      var bounds = ctx.getImageData(cells[i].x - 1, cells[i].y - 1, 3, 3);
      var countNeighbours = 0;

      for (var a = 3; a < 36; a = a + 4) {
        if (bounds.data[a] === 255) {
          countNeighbours++;
        }
      }

      // 1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.
      // 3. Any live cell with more than three live neighbours dies, as if by overcrowding.
      if (countNeighbours < 2 || countNeighbours > 3) {
        cells[i].die();
      }
      else if (countNeighbours === 3) {
        cells[i].reproduce();
      }
    }

    // reqAnim = requestAnimationFrame(animate);
  }


  /*=============================
  =            CELLS            =
  =============================*/
  function Cell(x, y, on) {
    this.x = x;
    this.y = y;
    if (on) this.reproduce();
    // onCells[]
  }

  Cell.prototype.die = function() {
    ctx.clearRect(this.x, this.y, 1, 1);
  };

  // 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  Cell.prototype.reproduce = function() {
    ctx.fillRect(this.x, this.y, 1, 1);
  };

  /*=====  End of CELLS  ======*/


  init();
})();