const TWO_PI = Math.PI * 2;

export default class Particle {
  constructor(x, y, r, blackout) {
    this.age = DDD.random(0, 200);
    this.x = x;
    this.y = y;
    this.vx = 2 * Math.cos(r);
    this.vy = 2 * Math.sin(r);
    this.defineColor(blackout);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx += .005 * (DDD.random(0, 100) - DDD.random(0, 100));
    this.vy += .005 * (DDD.random(0, 100) - DDD.random(0, 100));
    this.age++;
  }

  update(blackout) {
    if (this.age > 200) {
      var t = DDD.random(0, TWO_PI, true);
      this.x = 30 * Math.cos(t);
      this.y = 30 * Math.sin(t);
      this.vx = 0;
      this.vy = 0;
      this.age = 0;
      this.defineColor(blackout);
    }
  }

  defineColor(blackout) {
    this.color = blackout ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
  }
}
