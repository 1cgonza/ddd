const TWO_PI = Math.PI * 2;

function Particle(x, y, r, blackout) {
  this.age = DDD.random(0, 200);
  this.x = x;
  this.y = y;
  this.vx = 2 * Math.cos(r);
  this.vy = 2 * Math.sin(r);

  this.defineColor(blackout);
}

export default Particle;

Particle.prototype.move = function() {
  // var _x = this.x;
  // var _y = this.y + centerY;

  this.x += this.vx;
  this.y += this.vy;

  this.vx += (DDD.random(0, 100) - DDD.random(0, 100)) * 0.005;
  this.vy += (DDD.random(0, 100) - DDD.random(0, 100)) * 0.005;

  // stage.ctx.save();
  // stage.ctx.strokeStyle = this.color;
  // stage.ctx.beginPath();
  // stage.ctx.moveTo(centerX + _x, _y);
  // stage.ctx.lineTo(centerX + this.x, centerY + this.y);
  // stage.ctx.stroke();
  // stage.ctx.beginPath();
  // stage.ctx.moveTo(centerX - _x, _y);
  // stage.ctx.lineTo(centerX - this.x, centerY + this.y);
  // stage.ctx.stroke();
  // stage.ctx.restore();

  this.age++;
};

Particle.prototype.update = function(blackout) {
  if (this.age > 200) {
    var t = DDD.random(0, TWO_PI, true);
    this.x = 30 * Math.cos(t);
    this.y = 30 * Math.sin(t);
    this.vx = 0;
    this.vy = 0;
    this.age = 0;
    this.defineColor(blackout);
  }
};

Particle.prototype.defineColor = function(blackout) {
  this.color = blackout ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
};
