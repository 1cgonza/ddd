var Audio = function() {
  this.audio = new DDD.Audio({mar: 'http://juancgonzalez.com/dddrawings/audio/mar.mp3'}, function(audios) {
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

export default Audio;

Audio.prototype.loaded = function(audios) {
  this.a = audios;
  audios.mar.volume = 1;
  audios.mar.loop = true;
  audios.mar.start(0);
};

Audio.prototype.toggle = function() {
  if (this.playing) {
    this.audio.ctx.suspend();
    this.btn.style.backgroundPosition = 'right';
  } else {
    this.audio.ctx.resume();
    this.btn.style.backgroundPosition = 'left';
  }
  this.playing = !this.playing;
};
