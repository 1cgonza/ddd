!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var r=2*Math.PI,i=function(){function e(t,n,o,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.age=DDD.random(0,200),this.x=t,this.y=n,this.vx=2*Math.cos(o),this.vy=2*Math.sin(o),this.defineColor(r)}return o(e,[{key:"move",value:function(){this.x+=this.vx,this.y+=this.vy,this.vx+=.005*(DDD.random(0,100)-DDD.random(0,100)),this.vy+=.005*(DDD.random(0,100)-DDD.random(0,100)),this.age++}},{key:"update",value:function(e){if(this.age>200){var t=DDD.random(0,r,!0);this.x=30*Math.cos(t),this.y=30*Math.sin(t),this.vx=0,this.vy=0,this.age=0,this.defineColor(e)}}},{key:"defineColor",value:function(e){this.color=e?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)"}}]),e}();t.default=i},function(e,t,n){"use strict";var o,r=n(1),i=(o=r)&&o.__esModule?o:{default:o};var a=document.getElementById("ddd-container"),u=DDD.canvas(a),s=u.ctx,c=(u.w,u.h,u.center.x),f=u.center.y,l=5e3,h=!1,v=[],d=Math.PI,y=2*d,D=0;function m(){if(2===D){for(var e=0;e<l;e++){var t=v[e],n=t.x,o=t.y+f;t.move(),s.strokeStyle=t.color,s.save(),s.beginPath(),s.moveTo(c+n,o),s.lineTo(c+t.x,f+t.y),s.stroke(),s.beginPath(),s.moveTo(c-n,o),s.lineTo(c-t.x,f+t.y),s.stroke(),s.restore(),t.update(h)}DDD.random(0,1e4)>9950&&p(),D=0}D++,requestAnimationFrame(m)}function p(){h=!h}!function(){s.fillRect(0,0,u.w,u.h);var e=30*Math.sin(y/l)+c,t=30*Math.cos(y/l)+f;console.log(e,t);for(var n=0;n<l;n++){var o=d*n/l;v.push(new i.default(e,t,o,h))}m()}(),u.canvas.onclick=p}]);