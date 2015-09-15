// CREDITS
// I did not make this, just translated from Processing to JS for learning purposes
// See original code at http://www.complexification.net/gallery/machines/bubblechamber/
// Bubble Chamber
// j.tarbell   October, 2003
// Albuquerque, New Mexico
// complexification.net

// a generative painting system using random collisions of
// four unique orbit decaying particle types.
(function () {
  'use strict';
  /*----------  GLOBALS  ----------*/
  var container = document.getElementById('ddd-container');
  var loading   = document.getElementById('ddd-loading');
  var stageW = window.innerWidth;
  var stageH = window.innerHeight;
  var centerX = stageW / 2 | 0;
  var centerY = stageH / 2 | 0;
  var TWO_PI = Math.PI * 2;

  // particle proportions
  var maxMuon = 1789;
  var maxQuark = 1300;
  var maxHadron = 1000;
  var maxAxion = 111;

  // angle of collision (usually calculated with mouse position)
  var collisionTheta;

  // first time user interaction flag
  var boom = false;

  // discrete universe of particles?
  var muon = [];
  var quark = [];
  var hadron = [];
  var axion = [];

  // some nice color palettes
  // rusted desert metal. winter, new mexico
  var goodcolor = ['#3a242b', '#3b2426', '#352325', '#836454', '#7d5533', '#8b7352','#b1a181', '#a4632e', '#bb6b33', '#b47249', '#ca7239', '#d29057', '#e0b87e', '#d9b166', '#f5eabe', '#fcfadf', '#d9d1b0', '#fcfadf', '#d1d1ca', '#a7b1ac', '#879a8c', '#9186ad', '#776a8e'];


  /*----------  CREATE CANVAS  ----------*/
  var canvas = document.createElement('canvas');
  var ctx    = canvas.getContext('2d');
  canvas.width  = stageW;
  canvas.height = stageH;
  container.appendChild(canvas);

  function setup () {
    // instantiate universe of particles
    for (var i = 0; i < maxAxion; i++) {
      axion[i] = new Axion(centerX, centerY);
    }

    for (var ii = 0; ii < maxHadron; ii++) {
      hadron[ii] = new Hadron(centerX, centerY);
    }

    for (var j = 0; j < maxQuark; j++) {
      quark[j] = new Quark(centerX, centerY);
    }

    for (var jj = 0; jj < maxMuon; jj++) {
      muon[jj] = new Muon(centerX, centerY);
    }

    boom = true;
    collideAll();
    draw();
    loading.style.opacity = 0;
  }

  function draw () {
    if (boom) {
      // initial collision event has occured, ok to move the particles...

      // allow each particle in the universe one step
      for (var i = 0; i < hadron.length; i++){
        hadron[i].move();
      }

      for (var ii = 0; ii < muon.length; ii++){
        muon[ii].move();
      }

      for (var j = 0; j < quark.length; j++){
        quark[j].move();
      }

      for (var jj = 0; jj < axion.length; jj++){
        axion[jj].move();
      }
    }
    requestAnimationFrame(draw);
  }

  function collideOne (event) {
    // eject a single particle, relative to position position
    var t;
    collisionTheta = Math.atan2(centerX - event.clientX, centerY / 2 - event.clientY);

    // choose a set of hadron particles to recollide
    if (hadron.length > 0) {
      t = getRandom(0, hadron.length);
      hadron[t].collide();
    }

    // choose a set of quark particles to recollide
    if (quark.length > 0) {
      t = getRandom(0, quark.length);
      quark[t].collide();
    }

    // choose a set of muon particles to recollide
    if (muon.length > 0) {
      t = getRandom(0, muon.length);
      muon[t].collide();
    }
  }

  function collideAll () {
    // random collision angle
    collisionTheta = getRandom(0, TWO_PI, true);

    // particle super collision
    if (hadron.length > 0) {
      for (var i = 0; i < maxHadron; i++) {
        hadron[i].collide();
      }
    }

    if (quark.length > 0) {
      for (var ii = 0; ii < maxQuark; ii++) {
        quark[ii].collide();
      }
    }

    if (muon.length > 0) {
      for (var j = 0; j < maxMuon; j++) {
        muon[j].collide();
      }
    }

    if (axion.length > 0) {
      for (var jj = 0; jj < maxAxion; jj++) {
        axion[jj].collide();
      }
    }
  }

  // CLASSES ---------------------------------------------------------------------------

  // Muon particle
  //   the muon is a colorful particle with an entangled friend.
  //   draws both itself and its horizontally symmetric partner.
  //   a high range of speed and almost no speed decay allow the
  //   muon to reach the extents of the window, often forming rings
  //   where theta has decayed but speed remains stable.  result
  //   is color almost everywhere in the general direction of collision,
  //   stabilized into fuzzy rings.

  function Muon (x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.myc = hexToRgb( goodcolor[0] );
    this.mya = hexToRgb( goodcolor[goodcolor.length - 1] );
  }

  Muon.prototype.collide = function () {
    // initialize all parameters
    this.x = centerX;
    this.y = centerY;
    this.speed = getRandom(2, 32);
    this.speedD = getRandom(0.0001, 0.001, true);

    // rotation
    this.theta = collisionTheta + getRandom(-0.1, 0.1, true);
    this.thetaD = 0;
    this.thetaDD = 0;

    // ensure that there IS decay
    while (Math.abs(this.thetaDD) < 0.001) {
      // rate of orbit decay
      this.thetaDD = getRandom(-0.1, 0.1, true);
    }

    // color is determined by direction of movement
    var c = (goodcolor.length - 1) * (this.theta + Math.PI) / TWO_PI | 0;
    if ( c >= goodcolor.length || c < 0 ) {
      // SAFETY: this is giving me problems
      // println("whoa: "+c);
    } else {
      this.myc = hexToRgb( goodcolor[c] );
      // anti-particle color
      this.mya = hexToRgb( goodcolor[goodcolor.length - c - 1] );
    }
  };

  Muon.prototype.move = function () {
    // draw
    ctx.save();
      ctx.fillStyle = 'rgba(' + this.myc.r + ', ' + this.myc.g + ', ' + this.myc.b + ', ' + convertAlpha(42) + ')';
      ctx.fillRect(this.x, this.y, 1, 1);
    ctx.restore();

    // draw anti-particle
    ctx.save();
      ctx.fillStyle = 'rgba(' + this.mya.r + ', ' + this.mya.g + ', ' + this.mya.b + ', ' + convertAlpha(42) + ')';
      ctx.fillRect(canvas.width - this.x, this.y, 1, 1);
    ctx.restore();

    // move
    this.x += this.speed * Math.sin(this.theta);
    this.y += this.speed * Math.cos(this.theta);

    // rotate
    this.theta += this.thetaD;

    // modify spin
    this.thetaD += this.thetaDD;

    // modify speed
    this.speed -= this.speedD;

    // do not allow particle to enter extreme offscreen areas
    if ( (this.x <- canvas.width) || (this.x > canvas.width * 2) || (this.y <- canvas.height) || (this.y > canvas.height * 2) ) {
      this.collide();
    }
  };

  // Quark particle
  //   the quark draws as a translucent black.  their large numbers
  //   create fields of blackness overwritten only by the glowing shadows of Hadrons.
  //   quarks are allowed to accelerate away with speed decay values above 1.0
  //   each quark has an entangled friend.  both particles are drawn identically,
  //   mirrored along the y-axis.

  function Quark (x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
  }

  Quark.prototype.collide = function () {
    // initialize all parameters with random collision
    this.x = centerX;
    this.y = centerY;
    this.theta = collisionTheta + getRandom(-0.11, 0.11, true);
    this.speed = getRandom(0.5, 3.0, true);

    this.speedD = getRandom(0.996, 1.001, true);
    this.thetaD = 0;
    this.thetaDD = 0;

    // rate of orbit decay
    while ( Math.abs(this.thetaDD) < 0.00001) {
      this.thetaDD = getRandom(-0.001, 0.001, true);
    }
  };

  Quark.prototype.move = function () {
    // draw
    ctx.save();
      ctx.fillStyle = 'rgba(0, 0, 0, ' + convertAlpha(32) + ')';
      ctx.fillRect(this.x, this.y, 1, 1);
      // draw anti-particle
      ctx.fillRect(canvas.width - this.x, this.y, 1, 1);
    ctx.restore();

    // move
    this.x += this.vx;
    this.y += this.vy;

    // turn
    this.vx = this.speed * Math.sin(this.theta);
    this.vy = this.speed * Math.cos(this.theta);

    this.theta += this.thetaD;

    // modify spin
    this.thetaD += this.thetaDD;

    // modify speed
    this.speed *= this.speedD;

    if ( getRandom(0, 1000) > 997 ) {
      this.speed *= -1;
      this.speedD = 2 - this.speedD;
    }

    // do not allow particle to enter extreme offscreen areas
    if ( (this.x <- canvas.width) || (this.x > canvas.width * 2) || (this.y <- canvas.height) || (this.y > canvas.height * 2) ) {
      this.collide();
    }
  };

  //  Hadron particle
  //    hadrons collide from totally random directions.
  //    those hadrons that do not exit the drawing area,
  //    tend to stabilize into perfect circular orbits.
  //    each hadron draws with a slight glowing emboss.
  //    the hadron itself is not drawn.

  function Hadron (x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
  }

  Hadron.prototype.collide = function () {
    // initialize all parameters with random collision
    this.x = centerX;
    this.y = centerY;
    this.theta = getRandom(0, TWO_PI, true);
    this.speed = getRandom(0.5, 3.5, true);

    this.speedD = getRandom(0.996, 1.001, true);
    this.thetaD = 0;
    this.thetaDD = 0;

    // rate of orbit decay
    while ( Math.abs(this.thetaDD) < 0.00001) {
      this.thetaDD = getRandom(-0.001, 0.001, true);
    }

    this.myc = hexToRgb('#00FF00');
  };

  Hadron.prototype.move = function () {
    // the particle itself is unseen, not drawn
    // instead, draw shadow emboss

    // lighten pixel above hadron
    ctx.save();
      ctx.fillStyle = 'rgba(255, 255, 255, ' + convertAlpha(28) + ')';
      ctx.fillRect(this.x, this.y -1, 1, 1);
    ctx.restore();

    // darken pixel below hadron
    ctx.save();
      ctx.fillStyle = 'rgba(0, 0, 0, ' + convertAlpha(28) + ')';
      ctx.fillRect(this.x, this.y +1, 1, 1);
    ctx.restore();

    // move
    this.x += this.vx;
    this.y += this.vy;

    // turn
    this.vx = this.speed * Math.sin(this.theta);
    this.vy = this.speed * Math.cos(this.theta);

    // modify spin
    this.theta += this.thetaD;
    this.thetaD += this.thetaDD;

    // modify speed
    this.speed *= this.speedD;

    // random chance of subcollision event
    if (getRandom(0, 1000) > 997) {
      // stablize orbit
      this.speedD = 1.0;
      this.thetaDD = 0.00001;
      if (getRandom(0, 100) > 70) {
        // recollide
        this.x = centerX;
        this.y = centerY;
        this.collide();
      }
    }

    // do not allow particle to enter extreme offscreen areas
    if ( (this.x <- canvas.width) || (this.x > canvas.width * 2) || (this.y <- canvas.height) || (this.y > canvas.height * 2) ) {
      this.collide();
    }
  };

  // Axion particle
  //   the axion particle draws a bold black path.  axions exist
  //   in a slightly higher dimension and as such are drawn with
  //   elevated embossed shadows.  axions are quick to stabilize
  //   and fall into single pixel orbits axions automatically
  //   recollide themselves after stabilizing.

  function Axion (x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
  }

  Axion.prototype.collide = function () {
    this.x = centerX;
    this.y = centerY;
    this.theta = getRandom(0, TWO_PI, true);
    this.speed = getRandom(1.0, 6.0, true);

    this.speedD = getRandom(0.998, 1.000, true);
    this.thetaD = 0;
    this.thetaDD = 0;

    // rate of orbit decay
    while( Math.abs(this.thetaDD) < 0.00001 ) {
      this.thetaDD = getRandom(-0.001, 0.001, true);
    }
  };

  Axion.prototype.move = function () {
    // draw - axions are high contrast
    ctx.save();
    ctx.fillStyle = 'rgba(16, 16, 16, ' + convertAlpha(150) + ')';
    ctx.fillRect(this.x, this.y, 1, 1);
    ctx.restore();

    // axions cast vertical glows, highlight/shadow emboss
    for (var dy = 1; dy < 5; dy++) {
      ctx.save();
      ctx.fillStyle = 'rgba(255, 255, 255, ' + convertAlpha(30 - dy * 6) + ')';
      ctx.fillRect(this.x, this.y - dy, 1, 1);
      ctx.restore();
    }

    for (var dy2 = 1; dy2 < 5; dy2++) {
      ctx.save();
      ctx.fillStyle = 'rgba(0, 0, 0, ' + convertAlpha(30 - dy * 6) + ')';
      ctx.fillRect(this.x, this.y + dy2, 1, 1);
      ctx.restore();
    }

    // move
    this.x += this.vx;
    this.y += this.vy;

    // turn
    this.vx = this.speed * Math.sin(this.theta);
    this.vy = this.speed * Math.cos(this.theta);

    this.theta += this.thetaD;

    // modify spin
    this.thetaD += this.thetaDD;

    // modify speed
    this.speed *= this.speedD;
    this.speedD *= 0.9999;

    if (getRandom(0, 100) > 30) {
      this.x = centerX;
      this.y = centerY;
      this.collide();
    }
  };

  setup();

  document.body.addEventListener('click', function (e) {
    // fire 11 of each particle type
    for (var k = 0; k < 11; k++) {
      collideOne(event);
    }

    boom = true;
  });

  window.addEventListener('keyup', function (e) {
    if (event.keyCode === 32) {
      boom = true;
      ctx.save();
        ctx.fillStyle = '#FFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
      collideAll();
    }
  });

})();
