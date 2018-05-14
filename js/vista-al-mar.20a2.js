!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(){this.container=document.createElement("div"),this.container.id="credits",Object.assign(this.container.style,{position:"absolute",width:"100%",height:"100%",backgroundColor:"white",top:0,left:0,zIndex:999999});var t=document.createElement("h1");t.innerText="Vista al Mar",this.container.appendChild(t),document.body.appendChild(this.container)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){this.audio=new DDD.Audio({mar:"http://juancgonzalez.com/dddrawings/audio/mar.mp3"},function(t){this.loaded(t)}.bind(this)),this.playing=!0,this.a={},this.btn=document.createElement("div"),Object.assign(this.btn.style,{position:"absolute",zIndex:9999999,bottom:"20px",left:"20px",cursor:"pointer",backgroundImage:"url(/img/assets/icons/audio.png)",display:"block",width:"28px",height:"25px",backgroundRepeat:"no-repeat",backgroundSize:"cover"}),document.body.appendChild(this.btn),this.btn.onclick=this.toggle.bind(this)};e.default=i,i.prototype.loaded=function(t){this.a=t,t.mar.volume=1,t.mar.loop=!0,t.mar.start(0)},i.prototype.toggle=function(){this.playing?(this.audio.ctx.suspend(),this.btn.style.backgroundPosition="right"):(this.audio.ctx.resume(),this.btn.style.backgroundPosition="left"),this.playing=!this.playing}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.latLng2Point=function(t,e){var n=e.getProjection().fromLatLngToPoint(e.getBounds().getNorthEast()),i=e.getProjection().fromLatLngToPoint(e.getBounds().getSouthWest()),o=Math.pow(2,e.getZoom()),a=e.getProjection().fromLatLngToPoint(t);return new google.maps.Point((a.x-i.x)*o,(a.y-n.y)*o)},e.point2Coords=function(t,e){var n=e.getProjection().fromLatLngToPoint(e.getBounds().getNorthEast()),i=e.getProjection().fromLatLngToPoint(e.getBounds().getSouthWest()),o=Math.pow(2,e.getZoom()),a=new google.maps.Point(t.x/o+i.x,t.y/o+n.y),s=e.getProjection().fromPointToLatLng(a);return{lat:s.lat(),lng:s.lng()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),o=function(t){this.container=t,this.animReq,this.mapLoaded=!1,this.imgLoaded=!1,this.layer=document.createElement("div"),this.layer.id="googleMap",this.layer.style.position="absolute",this.layer.style.left=0,this.layer.style.top=0,this.layer.style.width="100%",this.layer.style.height="100%",this.layer.style.transition="none",this.container.appendChild(this.layer)};e.default=o,o.prototype.init=function(){this.map=new google.maps.Map(this.layer,{center:{lat:10.398683,lng:-75.475911},scrollwheel:!1,zoom:17,disableDefaultUI:!0}),this.waitMapToLoad(),this.gallo=new Image,this.gallo.onload=this.onImageLoaded.bind(this),this.gallo.src="/img/assets/backgrounds/elGallo.png"},o.prototype.onImageLoaded=function(){this.mapOver=DDD.canvas(this.container,{w:this.gallo.naturalWidth,h:this.gallo.naturalHeight,left:window.innerWidth/2-this.gallo.naturalWidth/2-40+"px",top:window.innerHeight/2-this.gallo.naturalHeight/2+24+"px",css:{opacity:0,transition:"5s opacity ease-in-out",zIndex:999}}),this.mapOver.canvas.id="galloMap",this.mapOver.ctx.drawImage(this.gallo,0,0),this.imgLoaded=!0},o.prototype.checkAssetsLoaded=function(){this.imgLoaded?(this.render(),window.cancelAnimationFrame(this.animReq)):this.animReq=requestAnimationFrame(this.checkAssetsLoaded.bind(this))},o.prototype.waitMapToLoad=function(t){google.maps.event.addListenerOnce(this.map,"idle",this.checkAssetsLoaded.bind(this))},o.prototype.render=function(){var t=this;this.mapOver.canvas.style.opacity=1,this.mapOver.canvas.onclick=function(e){var n={x:e.clientX,y:e.clientY},o=(0,i.point2Coords)(n,t.map),a=t.map.getStreetView();return a.setPosition({lat:o.lat,lng:o.lng}),a.setPov(),a.setVisible(!0),t.mapOver.canvas.style.display="none",t.layer.style.zIndex=90,!1}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.layer=DDD.canvas(e),this.layer.canvas.id="mask",this.layer.canvas.style.pointerEvents="none",this.layer.canvas.style.zIndex=99,this.draw()}return i(t,[{key:"resize",value:function(){this.draw()}},{key:"draw",value:function(){var t=this.layer.ctx,e=this.layer.canvas.width=window.innerWidth,n=this.layer.canvas.height=window.innerHeight;t.fillStyle="white",t.fillRect(0,0,e,n),t.globalCompositeOperation="destination-out",t.filter="blur(70px)",t.beginPath(),t.ellipse(e/2,n/2,e/2.5,n/2.5,0,0,2*Math.PI),t.fill(),t.globalCompositeOperation="source-over"}}]),t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){this.stage=DDD.canvas(t,{h:60}),this.stage.canvas.style.zIndex=9999};e.default=i,i.prototype.bindData=function(t){this.data=t,this.stepX=this.stage.w/t.length},i.prototype.init=function(){var t=this.stage.ctx,e=0,n=3e3,i=this.data.length;t.strokeStyle="rgba(0, 0, 0, 0.01)";var o=this;!function a(){if(e<i){for(var s=e;s<e+n;s++)o.update(s);e+=n,requestAnimationFrame(a)}else t.strokeStyle="rgba(255, 0, 0, 0.01)"}()},i.prototype.update=function(t){var e=this.stage.ctx,n=this.data[t],i=t*this.stepX;e.beginPath(),e.moveTo(i,0),e.lineTo(i,-500+n),e.stroke()},i.prototype.getNewI=function(t){return t/this.stepX|0}},function(t,e,n){"use strict";var i=r(n(11)),o=r(n(10)),a=r(n(9)),s=r(n(7));r(n(6));function r(t){return t&&t.__esModule?t:{default:t}}var l,c=document.getElementById("ddd-container"),u=new i.default(c),d=new o.default(c),h=new a.default(c);new s.default;window.init=function(){h.init()};var p=[],g=0,f=0,y=563,m=y-462,v=1/m;DDD.json("/data/pulse/heart.2.json").then(function(t){for(var e=0;e<t.beats.length;e++){var n=t.beats[e];"S"===n.charAt(0)&&p.push(+n.substr(1))}!0,g=p.length,u.bindData(p),u.init(),b()}).catch(function(t){console.error(t)});function b(){if(f<g){var t=p[f];h.layer.style.opacity=(y-t-m/3)*v,u.update(f),f++}else window.cancelAnimationFrame(l);l=requestAnimationFrame(b)}u.stage.canvas.onclick=function(t){return f=u.getNewI(t.clientX),!1},window.onresize=function(t){d.resize()}}]);