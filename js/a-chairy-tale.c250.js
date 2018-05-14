!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.Notations=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=t.container||document.body;if(t.url&&DDD.json({url:t.url,container:n}).then(t.cb).catch(function(e){console.error(e)}),t.img){this.imgCallback=t.img.cb,DDD.image({url:t.img.src,container:n,loadingMsg:t.img.msg}).then(this.prepareImageData.bind(this)),this.imgW=t.img.width,this.imgH=t.img.height,this.fps=t.fps;var i=this.imgW-t.img.offLeft-t.img.offRight,o=this.imgH-t.img.offTop-t.img.offBottom;this.percent={h:DDD.getPercent(o,this.imgH),w:DDD.getPercent(i,this.imgW),top:DDD.getPercent(t.img.offTop,this.imgH),bottom:DDD.getPercent(t.img.offBottom,this.imgH),left:DDD.getPercent(t.img.offLeft,this.imgW),right:DDD.getPercent(t.img.offRight,this.imgW)}}this.stage=DDD.canvas(n,{w:n.offsetWidth}),this.canvas=this.stage.canvas,this.ctx=this.stage.ctx}return i(e,[{key:"prepareImageData",value:function(e){this.img=new Image,this.img.onload=this.imgCallback,this.img.src="data:image/jpeg;base64,"+DDD.base64(e)}}]),e}(),t.notationsVideo=function(e,t){return e.onloadedmetadata=function(){return t(),!1},e.onerror=function(t){var n=document.createElement("div");return n.innerHTML=e.innerHTML,e.parentNode.replaceChild(n,e),!1},e}},10:function(e,t,n){"use strict";var i=n(0),o=void 0,a=!1,r=document.getElementById("box"),c=document.getElementById("description"),s=document.getElementById("left-col"),g=document.getElementById("middle-col"),m=document.getElementById("right-col"),f=m.querySelector(".loading"),h=g.querySelector(".loading"),l={video:document.getElementById("video"),data:"/data/notations/chairy-tale.json",smallImg:"/img/assets/notations/chairy-tale-small.jpg",largeImg:"/img/assets/notations/chairy-tale-notations.jpg"},d=0;l.length=Object.keys(l).length;var p={pageWidth:1360,pageHeight:2070,pageMarginTop:112,pageMarginBottom:40,secondsPerPage:160,fps:24,percent:{}},u=p.pageHeight-p.pageMarginTop-p.pageMarginBottom;p.percent.h=DDD.getPercent(u,p.pageHeight),p.percent.top=DDD.getPercent(p.pageMarginTop,p.pageHeight),p.percent.bottom=DDD.getPercent(p.pageMarginBottom,p.pageHeight);var D=(0,i.notationsVideo)(l.video,function(){P.video(),DDD.json({url:l.data,container:c}).then(function(e){v=e.sections,w.img=new Image,w.img.onload=function(){P.notations(),w.imgY=w.offTop-w.headerY,f.style.opacity=0,w.canvas.style.opacity=1,b(),I()},w.img.src=l.largeImg,y.img=new Image,y.img.onload=function(){P.timeline(),y.headerY=y.offTop,h.style.opacity=0,y.canvas.style.opacity=1,b(),T()},y.img.src=l.smallImg,b()}).catch(function(e){console.error(e)}),D.onplay=function(){return o=requestAnimationFrame(x),!1},D.onpause=function(){return window.cancelAnimationFrame(o),!1},D.onseeking=function(){return H(),!1},b()}),v=[],y=DDD.canvas(g,{css:{position:"relative",opacity:0}});g.style.width="10%";var w=DDD.canvas(m,{css:{position:"relative",opacity:0}});m.style.width="50%",w.imgW=1e3,w.imgH=6088;var P={stage:function(){this.height=window.innerHeight},timeline:function(){var e=this.height;y.canvas.width=g.offsetWidth,y.canvas.height=e,y.imgResizeW=y.canvas.width*(e/1218),y.pageH=e/4,y.offTop=DDD.sizeFromPercentage(p.percent.top,y.pageH),y.offBottom=DDD.sizeFromPercentage(p.percent.bottom,y.pageH),y.step=DDD.sizeFromPercentage(p.percent.h,y.pageH)/p.secondsPerPage,g.style.height=e+"px",y.canvas.width>y.imgResizeW?y.imgX=(y.canvas.width-y.imgResizeW)/2:y.imgX=0},notations:function(){var e=m.offsetWidth,t=window.innerHeight,n=DDD.sizeFromPercentage(DDD.getPercent(e,w.imgW),w.imgH)/4;w.canvas.width=e,w.canvas.height=t,w.headerY=t/2,w.offTop=DDD.sizeFromPercentage(p.percent.top,n),w.offBottom=DDD.sizeFromPercentage(p.percent.bottom,n),w.step=DDD.sizeFromPercentage(p.percent.h,n)/p.secondsPerPage},video:function(){var e=s.offsetWidth,t=e/D.width*100;D.width=e,D.height=DDD.sizeFromPercentage(t,D.height)},all:function(){this.timeline(),this.notations(),this.video(),H()}};function b(){++d===l.length&&(D.controls=!0,a=!0)}function x(){H(),requestAnimationFrame(x)}function H(){var e=D.currentTime;if(e<=38){var t=e*(30/38);y.headerY=t*y.step+y.offTop,w.imgY=t*w.step+w.offTop-w.headerY}else{var n,i,o=550/548.96*(e-38);for(n=1;n<v.length;n++){var a=v[n-1].notedEndFrame/p.fps,r=v[n].notedEndFrame/p.fps;if(o>=a&&o<=r){i=v[n].page;break}}y.headerY=o*y.step+y.offTop*i+30*y.step,w.imgY=o*w.step+w.offTop*i+30*w.step-w.headerY,i>1&&(y.headerY=y.headerY+y.offBottom*(i-1),w.imgY=w.imgY+w.offBottom*(i-1))}T(),I()}function T(){y.ctx.clearRect(0,0,y.canvas.width,y.canvas.height),y.ctx.drawImage(y.img,y.imgX,0,y.imgResizeW,y.canvas.height),y.ctx.beginPath(),y.ctx.moveTo(0,y.headerY),y.ctx.lineTo(y.canvas.width,y.headerY),y.ctx.strokeStyle="#fe0404",y.ctx.stroke()}function I(){w.ctx.clearRect(0,0,w.canvas.width,w.canvas.height),w.ctx.drawImage(w.img,0,0,w.imgW,w.imgH,0,-w.imgY,w.canvas.width,w.imgH*(w.canvas.width/w.imgW)),w.ctx.beginPath(),w.ctx.moveTo(0,w.headerY),w.ctx.lineTo(w.canvas.width,w.headerY),w.ctx.strokeStyle="#fe0404",w.ctx.stroke()}P.stage(),f.style.opacity=1,h.style.opacity=1,window.onresize=function(){return a&&P.all(),!1},document.getElementById("notes").onclick=function(e){return e.preventDefault(),r.style.display="block",!1},document.getElementById("close-box").onclick=function(e){return e.preventDefault(),r.style.display="none",!1}}});