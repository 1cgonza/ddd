!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}({10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=2*Math.PI,i=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.age=DDD.random(0,200),this.x=t,this.y=n,this.vx=2*Math.cos(r),this.vy=2*Math.sin(r),this.defineColor(o)}return r(e,[{key:"move",value:function(){this.x+=this.vx,this.y+=this.vy,this.vx+=.005*(DDD.random(0,100)-DDD.random(0,100)),this.vy+=.005*(DDD.random(0,100)-DDD.random(0,100)),this.age++}},{key:"update",value:function(e){if(this.age>200){var t=DDD.random(0,o,!0);this.x=30*Math.cos(t),this.y=30*Math.sin(t),this.vx=0,this.vy=0,this.age=0,this.defineColor(e)}}},{key:"defineColor",value:function(e){this.color=e?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)"}}]),e}();t.default=i},11:function(e,t,n){"use strict";var r,o=n(10),i=(r=o)&&r.__esModule?r:{default:r};var a=Math.PI,u=2*a,s=DDD.canvas(document.getElementById("ddd-container")),c=s.ctx,f=(s.w,s.h,s.center.x),l=s.center.y,h=5e3,v=!1,d=[],y=0;function D(){if(2===y){for(var e=0;e<h;e++){var t=d[e],n=t.x,r=t.y+l;t.move(),c.strokeStyle=t.color,c.save(),c.beginPath(),c.moveTo(f+n,r),c.lineTo(f+t.x,l+t.y),c.stroke(),c.beginPath(),c.moveTo(f-n,r),c.lineTo(f-t.x,l+t.y),c.stroke(),c.restore(),t.update(v)}DDD.random(0,1e4)>9950&&m(),y=0}y++,requestAnimationFrame(D)}function m(){v=!v}!function(){c.fillRect(0,0,s.w,s.h);for(var e=30*Math.sin(u/h)+f,t=30*Math.cos(u/h)+l,n=0;n<h;n++){var r=a*n/h;d.push(new i.default(e,t,r,v))}D(),s.canvas.onclick=m}()}});