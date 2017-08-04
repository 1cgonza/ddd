import {point2Coords} from './helpers';

var Map = function(container) {
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

export default Map;

Map.prototype.init = function() {
  this.map = new google.maps.Map(this.layer, {
    center: {lat: 10.398683, lng: -75.475911},
    scrollwheel: false,
    zoom: 17,
    disableDefaultUI: true
  });
  this.waitMapToLoad();

  this.gallo = new Image();
  this.gallo.onload = this.onImageLoaded.bind(this);
  this.gallo.src = '/img/assets/backgrounds/elGallo.png';
};

Map.prototype.onImageLoaded = function() {
  this.mapOver = DDD.canvas(this.container, {
    w: this.gallo.naturalWidth,
    h: this.gallo.naturalHeight,
    left: (window.innerWidth / 2) - (this.gallo.naturalWidth / 2) - 40 + 'px',
    top: (window.innerHeight / 2) - (this.gallo.naturalHeight / 2) + 24 + 'px',
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

Map.prototype.checkAssetsLoaded = function() {
  if (this.imgLoaded) {
    this.render();
    window.cancelAnimationFrame(this.animReq);
  } else {
    this.animReq = requestAnimationFrame(this.checkAssetsLoaded.bind(this));
  }
};

Map.prototype.waitMapToLoad = function(cb) {
  google.maps.event.addListenerOnce(this.map, 'idle', this.checkAssetsLoaded.bind(this));
};

Map.prototype.render = function() {
  this.mapOver.canvas.style.opacity = 1;

  this.mapOver.canvas.onclick = (event) => {
    var point = {x: event.clientX, y: event.clientY};
    var coords = point2Coords(point, this.map);
    var panorama = this.map.getStreetView();
    panorama.setPosition({lat: coords.lat, lng: coords.lng});
    panorama.setPov();
    panorama.setVisible(true);

    this.mapOver.canvas.style.display = 'none';
    this.layer.style.zIndex = 90;

    return false;
  };
};
