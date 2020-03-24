!function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=13)}({0:function(t,e,i){"use strict";i.d(e,"e",(function(){return o})),i.d(e,"g",(function(){return c})),i.d(e,"c",(function(){return u})),i.d(e,"r",(function(){return m})),i.d(e,"t",(function(){return f})),i.d(e,"n",(function(){return y})),i.d(e,"h",(function(){return a})),i.d(e,"i",(function(){return h})),i.d(e,"l",(function(){return x})),i.d(e,"u",(function(){return p})),i.d(e,"s",(function(){return v})),i.d(e,"k",(function(){return g})),i.d(e,"q",(function(){return b})),i.d(e,"p",(function(){return E})),i.d(e,"b",(function(){return T})),i.d(e,"d",(function(){return w})),i.d(e,"o",(function(){return z})),i.d(e,"m",(function(){return A})),i.d(e,"a",(function(){return R})),i.d(e,"f",(function(){return _})),i.d(e,"j",(function(){return D}));class r{constructor(t,e){this.x=t||0,this.y=e||0}clone(){return new r(this.x,this.y)}copy(t){this.set(t.x,t.y)}equals(t){return t.x===this.x&&t.y===this.y}set(t,e){this.x=t||0,this.y=e||0!==e?this.x:0}}class s{constructor(t,e,i,r){this.x=t||0,this.y=e||0,this.width=i||0,this.height=r||0}}class n{constructor(t,e,i,r,s,n){this.a=t||1,this.b=e||0,this.c=i||0,this.d=r||1,this.tx=s||0,this.ty=n||0}toArray(t,e){this.array||(this.array=new Float32Array(9));var i=e||this.array;return t?(i[0]=this.a,i[1]=this.b,i[2]=0,i[3]=this.c,i[4]=this.d,i[5]=0,i[6]=this.tx,i[7]=this.ty,i[8]=1):(i[0]=this.a,i[1]=this.c,i[2]=this.tx,i[3]=this.b,i[4]=this.d,i[5]=this.ty,i[6]=0,i[7]=0,i[8]=1),i}apply(t,e){e=e||new r;var i=t.x,s=t.y;return e.x=this.a*i+this.c*s+this.tx,e.y=this.b*i+this.d*s+this.ty,e}applyInverse(t,e){e=e||new r;var i=1/(this.a*this.d+this.c*-this.b),s=t.x,n=t.y;return e.x=this.d*i*s+-this.c*i*n+(this.ty*this.c-this.tx*this.d)*i,e.y=this.a*i*n+-this.b*i*s+(-this.ty*this.a+this.tx*this.b)*i,e}translate(t,e){return this.tx+=t,this.ty+=e,this}scale(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this}rotate(t){var e=Math.cos(t),i=Math.sin(t),r=this.a,s=this.c,n=this.tx;return this.a=r*e-this.b*i,this.b=r*i+this.b*e,this.c=s*e-this.d*i,this.d=s*i+this.d*e,this.tx=n*e-this.ty*i,this.ty=n*i+this.ty*e,this}append(t){var e=this.a,i=this.b,r=this.c,s=this.d;return this.a=t.a*e+t.b*r,this.b=t.a*i+t.b*s,this.c=t.c*e+t.d*r,this.d=t.c*i+t.d*s,this.tx=t.tx*e+t.ty*r+this.tx,this.ty=t.tx*i+t.ty*s+this.ty,this}setTransform(t,e,i,r,s,n,h){var a=Math.sin(h),o=Math.cos(h),c=o*s,u=a*s,d=-a*n,l=o*n;return this.a=c+d,this.b=u+l,this.c=c+d,this.d=u+l,this.tx=t+(i*c+r*d),this.ty=e+(i*u+r*l),this}prepend(t){var e=this.tx;if(1!==t.a||0!==t.b||0!==t.c||1!==t.d){var i=this.a,r=this.c;this.a=i*t.a+this.b*t.c,this.b=i*t.b+this.b*t.d,this.c=r*t.a+this.d*t.c,this.d=r*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this}invert(){var t=this.a,e=this.b,i=this.c,r=this.d,s=this.tx,n=t*r-e*i;return this.a=r/n,this.b=-e/n,this.c=-i/n,this.d=t/n,this.tx=(i*this.ty-r*s)/n,this.ty=-(t*this.ty-e*s)/n,this}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){var t=new n;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copy(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}}class h{constructor(t,e,i){this.x=t||0,this.y=e||0,this.z=i||0}set(t,e,i){return this.x=t,this.y=e,this.z=i,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t):(this.x=0,this.y=0,this.z=0),this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}setLength(t){return this.multiplyScalar(t/this.length())}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}normalize(){return this.divideScalar(this.length())}distanceToSquared(t){var e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}limit(t){return this.lengthSq()>t*t&&(this.normalize(),this.mult(t)),this}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}}class a{constructor(){this.reset()}reset(){this.m=[1,0,0,1,0,0]}multiply(t){var e=this.m[0]*t.m[0]+this.m[2]*t.m[1],i=this.m[1]*t.m[0]+this.m[3]*t.m[1],r=this.m[0]*t.m[2]+this.m[2]*t.m[3],s=this.m[1]*t.m[2]+this.m[3]*t.m[3],n=this.m[0]*t.m[4]+this.m[2]*t.m[5]+this.m[4],h=this.m[1]*t.m[4]+this.m[3]*t.m[5]+this.m[5];this.m[0]=e,this.m[1]=i,this.m[2]=r,this.m[3]=s,this.m[4]=n,this.m[5]=h}invert(){var t=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),e=this.m[3]*t,i=-this.m[1]*t,r=-this.m[2]*t,s=this.m[0]*t,n=t*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),h=t*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);this.m[0]=e,this.m[1]=i,this.m[2]=r,this.m[3]=s,this.m[4]=n,this.m[5]=h}rotate(t){var e=Math.cos(t),i=Math.sin(t),r=this.m[0]*e+this.m[2]*i,s=this.m[1]*e+this.m[3]*i,n=this.m[0]*-i+this.m[2]*e,h=this.m[1]*-i+this.m[3]*e;this.m[0]=r,this.m[1]=s,this.m[2]=n,this.m[3]=h}translate(t,e){this.m[4]+=this.m[0]*t+this.m[2]*e,this.m[5]+=this.m[1]*t+this.m[3]*e}translateAndRotate(t,e,i){var r=Math.cos(i),s=Math.sin(i),n=this.m[0]*r+this.m[2]*s,h=this.m[1]*r+this.m[3]*s,a=this.m[0]*-s+this.m[2]*r,o=this.m[1]*-s+this.m[3]*r;this.m[4]+=this.m[0]*t+this.m[2]*e,this.m[5]+=this.m[1]*t+this.m[3]*e,this.m[0]=n,this.m[1]=h,this.m[2]=a,this.m[3]=o}scale(t,e){this.m[0]*=t,this.m[1]*=t,this.m[2]*=e,this.m[3]*=e}transformPoint(t,e){var i=t,r=e;return[t=i*this.m[0]+r*this.m[2]+this.m[4],e=i*this.m[1]+r*this.m[3]+this.m[5]]}}const o=Math.PI,c=2*o,u=o/2,d=o/4,l=o/180;function m(t,e,i){let r=Math.floor(Math.random()*(e-t))+t;return i&&(r=Math.random()*(e-t)+t),r}function f(t,e){return t/100*e}function y(t,e){return t/e*100}function x(t,e){const i=document.createElement("canvas"),r=i.getContext("2d");if(e=e||{},i.width=e.w||window.innerWidth,i.height=e.h||window.innerHeight,i.style.position=e.position||"absolute",i.style.top=e.top||0,i.style.left=e.left||0,i.style.zIndex=e.zi||9,e.css)for(var s in e.css)i.style[s]=e.css[s];return r.font=e.font||"12px Inconsolata",t&&t.appendChild(i),{container:t,canvas:i,w:i.width,h:i.height,ctx:r,center:{x:i.width/2,y:i.height/2}}}function p(t,e,i,r,s){var n=document.createElement("ul"),h="";n.id="years",n.style.zIndex=99999;for(var a=t;a<=e;a++){var o=document.createElement("li"),c=document.createTextNode(a);a===i&&(o.className="current",h=o),o.appendChild(c),n.appendChild(o),o.addEventListener("click",r,!1)}s(n,h)}function v(t,e,i){i=i||"current",t&&t.classList.remove(i),e.classList.add(i)}function g(t){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i="",r=0;r<t.length;){var s,n,h=255&t.charCodeAt(r++),a=255&t.charCodeAt(r++),o=255&t.charCodeAt(r++),c=h>>2,u=(3&h)<<4|a>>4;isNaN(a)?s=n=64:(s=(15&a)<<2|o>>6,n=isNaN(o)?64:63&o),i+=e.charAt(c)+e.charAt(u)+e.charAt(s)+e.charAt(n)}return i}function b(t){return(new T).json(t)}function E(t){var e=new T;return e.req.overrideMimeType("text/plain; charset=x-user-defined"),e.getD(t).then((function(t){return void 0!==t.ret?t:t.data})).catch((function(t){console.error(t)}))}class T{constructor(){this.req=new XMLHttpRequest}abort(){this.req.abort()}json(t){return this.req.overrideMimeType("application/json"),this.getD(t).then((function(t){return void 0!==t.ret?(t.data=JSON.parse(t.data),t):JSON.parse(t.data)})).catch((function(t){console.error("Error in data request, reason:",t)}))}getD(t){if("object"==typeof t){if(!t.url)return void console.error("The request did not receive a url, instead got",t.url)}else"string"==typeof t&&t.length>0&&(t={url:t});var e,i,r=!1,s=this.req,n=t.loadingMsg||"Loading",h=t.container||document.body,a=h.querySelector(".loading");a||((a=document.createElement("div")).className="loading",h.appendChild(a));var o=!!t.loadingEle,c=o?t.loadingEle:null;if(!c){var u=h.querySelector(".loading-ele");(c=document.createElement("div")).className="loadingEle",u?a.insertBefore(u,c):a.appendChild(c)}function d(){c.style.opacity=1,a.style.zIndex=9,(e=c.querySelector(".loading-msg"))||((e=document.createElement("p")).className="loading-msg",e.innerText=n,c.appendChild(e))}function l(t){if(t.lengthComputable){r||(i=c.querySelector(".progress"))||((i=document.createElement("progress")).className="progress",i.style.zIndex=0,i.max=100,i.value=0,c.insertBefore(i,e),r=!0);var h=t.loaded/t.total*100;i.value=h,e.innerText=Math.floor(h)+"%\n"+n}else s.onprogress=null}function m(){o||(c.style.display="none"),a.style.zIndex=0}return new Promise((function(e,i){s.open("GET",t.url,!0),s.onloadstart=d,s.onprogress=l,s.onloadend=m,s.onload=function(){200===s.status?e({data:s.response,ret:t.ret}):i(s.statusText)},s.onerror=function(){i("Network Error")},s.send(null)}))}}class w{constructor(t){var e=t.width||window.innerWidth,i=t.height||window.innerHeight,r=t.zoom||11;t.center?this.center={lon:t.center.lon,lat:t.center.lat}:this.center={},this.hasCenter=null,this.updateSize(e,i,r)}updateSize(t,e,i){this.stageWidth=t,this.stageCenterY=e/2,this.zoom=i||this.zoom,this.zoomX=this.stageWidth*this.zoom,this.zoomY=this.stageCenterY*this.zoom,this.zoomRad=this.zoomX/360,this.newCenter(this.center.lon,this.center.lat)}newCenter(t,e){this.hasCenter=!1,this.convertCoordinates(t,e),this.hasCenter=!0}convertCoordinates(t,e){var i=+e*l,r=Math.log(Math.tan(d+i/2)),s=(+t+180)*this.zoomRad,n=this.zoomY-this.zoomX*r/c;return this.hasCenter?(s-=this.center.x,n-=this.center.y):(this.center.x=s,this.center.y=n),{x:s,y:n}}}function z(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,i,r){return e+e+i+i+r+r}));var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function A(t){return 1/(255/t)}class R{constructor(t,e){if(!t||"[object Object]"!==Object.prototype.toString.call(t))return console.error("The first parameter needs to be an Object.","Example:","{audio1: 'audio1.mp3', audio2: 'audio2.mp3'}");window.AudioContext=window.AudioContext||window.webkitAudioContext;var i,r,s=Object.keys(t).length,n=0,h={};for(var a in this.ctx=new AudioContext,t)i=t[a],o.bind(this),document.body,r=void 0,(r=new T).req.responseType="arraybuffer",r.getD(i).then((function(t){return t})).catch((function(t){console.error("Error fetching audio file",t)}));function o(t,i){this.ctx.decodeAudioData(t,function(t){if(!t)return void console.error("Error decoding audio file:",i);var r=this.ctx.createBufferSource();r.buffer=t,h[i]=r,++n===s&&e(h)}.bind(this),(function(t){console.error("decodeAudioData error",t)}))}}source(t){return(t=this.ctx.createBufferSource()).buffer=buffer,t.connect(this.gainNode),this.gainNode.connect(this.ctx.destination),t}}class _{constructor(t,e,i){this.children=[],this.texture={},this.data=t,this.renderer=e,this.loadImg(t.url),this.setBatchSize(i)}setBatchSize(t){t>16384&&(t=16384),t>15e3&&(t=15e3),this.batchSize=t}renderWebGL(t){t.currentRenderer.render(this)}bindTexture(){var t=this.renderer.gl,e=this.texture;return e.glTexture||(e.glTexture=t.createTexture()),t.bindTexture(t.TEXTURE_2D,e.glTexture),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,this.img),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),e.mipmap&&e.isPowerOfTwo?(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.generateMipmap(t.TEXTURE_2D)):t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),e.isPowerOfTwo?(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT)):(t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)),!0}loadImg(t){this.img=new Image,this.img.onload=this.imgLoaded.bind(this),this.img.src=t}imgLoaded(){for(var t,e,i=this.img.naturalWidth,r=this.img.naturalHeight,s={loaded:!0,isPowerOfTwo:(t=i,e=r,t>0&&0==(t&t-1)&&e>0&&0==(e&e-1))},n=[],h=0;h<this.data.frames.length;h++){var a=this.data.frames[h];n.push({width:a.w,height:a.h,uvs:[a.x/i,a.y/r,(a.x+a.w)/i,(a.y+a.h)/r]})}this.renderer.frames=n,this.texture=s,this.bindTexture(),this.data.cb&&this.data.cb()}particle(t){return(t=t||{}).scale=t.scale||new r(1,1),t.alpha=t.alpha||1,t.rotation=t.rotation||0,t.x=t.x||0,t.y=t.y||0,t.frame=t.frame||0,this.children.push(t),this.children.length>this.batchSize&&this.setBatchSize(this.children.length),t}}class C{constructor(t,e,i){this.gl=t,this.size=new s(0,0,1,1),this.projectionMatrix=new n,this.resize(e,i)}resize(t,e){if(t|=0,e|=0,this.size.width!==t||this.size.height!==e){this.size.width=t,this.size.height=e;var i=this.projectionMatrix.identity();i.a=2/this.size.width,i.d=-2/this.size.height,i.tx=-1,i.ty=1}}}var P=i(1),S=i.n(P),M=i(2),I=i.n(M);class N{constructor(t){this.gl=t,this.uniforms={projectionMatrix:{}},this.attributes={};var e=t.createShader(t.VERTEX_SHADER);t.shaderSource(e,S.a),t.compileShader(e);var i=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(i,I.a),t.compileShader(i);var r=t.createProgram();t.attachShader(r,e),t.attachShader(r,i),t.linkProgram(r),t.deleteShader(e),t.deleteShader(i),this.program=r,t.useProgram(r),this.cacheUniformLocations(["projectionMatrix"]),this.cacheAttributeLocations(["aVertexPosition","aTextureCoord","aAlpha","aPositionCoord","aRotation"])}cacheUniformLocations(t){for(var e=0;e<t.length;++e)this.uniforms[t[e]]._location=this.gl.getUniformLocation(this.program,t[e])}cacheAttributeLocations(t){for(var e=0;e<t.length;++e)this.attributes[t[e]]=this.gl.getAttribLocation(this.program,t[e])}}class L{constructor(t,e){this.renderer=e,this.gl=t,this.start()}start(){var t=this.gl,e=new N(t);this.properties=[{attribute:e.attributes.aVertexPosition,size:2},{attribute:e.attributes.aPositionCoord,size:2},{attribute:e.attributes.aRotation,size:1},{attribute:e.attributes.aTextureCoord,size:2},{attribute:e.attributes.aAlpha,size:1}];for(var i=0;i<this.properties.length;i++)t.enableVertexAttribArray(i);var r=this.renderer.renderTarget.projectionMatrix;t.uniformMatrix3fv(e.uniforms.projectionMatrix._location,!1,r.toArray(!0))}render(t){t.texture;var e=t.children,i=e.length,r=t.maxSize;this.size=t.batchSize;var s=this.gl;if(0!==i){if(i>r&&(i=r),!this.data){this.initBuffers();for(var n=0;n<this.properties.length;n++){var h=this.properties[n];s.vertexAttribPointer(h.attribute,h.size,s.FLOAT,!1,4*this.stride,4*h.offset)}}this.updateData(e,i),s.bufferSubData(s.ARRAY_BUFFER,0,this.data),s.drawElements(s.TRIANGLES,6*i,s.UNSIGNED_SHORT,0)}}initBuffers(){var t=this.gl,e=0;this.stride=0;for(var i=0;i<this.properties.length;i++){var r=this.properties[i];r.offset=e,e+=r.size,this.stride+=r.size}this.data=new Float32Array(this.size*this.stride*4),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,this.data,t.DYNAMIC_DRAW);for(var s=6*this.size,n=new Uint16Array(s),h=(i=0,0);i<s;i+=6,h+=4)n[i]=h,n[i+1]=h+1,n[i+2]=h+2,n[i+3]=h,n[i+4]=h+2,n[i+5]=h+3;t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ELEMENT_ARRAY_BUFFER,n,t.STATIC_DRAW)}updateData(t,e){this.stride;for(var i=0,r=this.data,s=this.renderer.frames,n=0;n<e;n++){var h=t[n],a=s[h.frame],o=a.width*h.scale,c=a.height*h.scale,u=h.x,d=h.y,l=h.rotation,m=a.uvs,f=h.alpha;r[i]=-o,r[++i]=-c,r[++i]=u,r[++i]=d,r[++i]=l,r[++i]=m[0],r[++i]=m[1],r[++i]=f,r[++i]=o,r[++i]=-c,r[++i]=u,r[++i]=d,r[++i]=l,r[++i]=m[2],r[++i]=m[1],r[++i]=f,r[++i]=o,r[++i]=c,r[++i]=u,r[++i]=d,r[++i]=l,r[++i]=m[2],r[++i]=m[3],r[++i]=f,r[++i]=-o,r[++i]=c,r[++i]=u,r[++i]=d,r[++i]=l,r[++i]=m[0],r[++i]=m[3],r[++i]=f,i++}}}class D{constructor(t,e){this.container=t,e=e||{},this.width=e.width||window.innerWidth,this.height=e.height||window.innerHeight,this.canvas=document.createElement("canvas"),this.canvas.style.position="absolute",t.appendChild(this.canvas);var i=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl",ctxOptions);this.gl=i,i.disable(i.DEPTH_TEST),i.disable(i.CULL_FACE),i.enable(i.BLEND),this.renderTarget=new C(i,this.width,this.height),this.currentRenderer=new L(i,this),this.resize(this.width,this.height)}render(t){t.renderWebGL(this)}resize(t,e){this.width=this.canvas.width=t,this.height=this.canvas.height=e,this.gl.viewport(0,0,t,e)}}},1:function(t,e){t.exports="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute float aAlpha;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying float vAlpha;\n\nvoid main(void){\n  float cosine = cos(aRotation);\n  float sine = sin(aRotation);\n\n  vec3 v;\n  v.x = aVertexPosition.x * cosine - aVertexPosition.y * sine;\n  v.y = aVertexPosition.x * sine + aVertexPosition.y * cosine;\n  v.z = 1.0;\n\n  // Move\n  v.xy += aPositionCoord;\n\n  gl_Position = vec4(projectionMatrix * v, 1.0);\n\n  vTextureCoord = aTextureCoord;\n  vAlpha = aAlpha;\n}"},13:function(t,e,i){"use strict";i.r(e);var r=i(0);function s(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=document.getElementById("ddd-container"),h=Object(r.l)(n),a=[],o={width:226,height:50,cols:5,cellOffsetX:-23,cellOffsetY:-25,framesPerImage:5},c=new Image;function u(){a.forEach((function(t){t.update(),t.draw()})),requestAnimationFrame(u)}c.onload=function(){o.frameW=o.width/o.cols|0,o.frameH=o.height,o.loopEnd=o.framesPerImage*o.cols,h.ctx.globalAlpha=1;for(var t=0;t<50;t++)a[t]=new d;u()},c.src="/img/assets/sprites/birdFly_f5_w226_h50.png";var d=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.firstFrameX=Object(r.r)(0,o.cols),this.currentFrameX=this.firstFrameX*o.frameW,this.cycleCounter=this.firstFrameX*o.framesPerImage,this.cycleNextFrame=this.cycleCounter+o.framesPerImage,this.cycleEnd=o.framesPerImage*o.cols,this.x=0,this.y=0,this.vx=0,this.vy=0,this.gravityY=.005,this.shuffle()}var e,i,n;return e=t,(i=[{key:"shuffle",value:function(){this.x=Object(r.r)(-h.w,0),this.y=Object(r.r)(0,h.h),this.vx=10+Object(r.r)(0,11)|0,this.vy=Object(r.r)(-1,2,!0)}},{key:"update",value:function(){this.x>h.w&&this.shuffle(),this.vy+=this.vy*this.gravityY,this.rotation=this.vy/10,this.x+=this.vx,this.y+=this.vy,this.cycleCounter===this.cycleEnd?(this.cycleCounter=0,this.currentFrameX=0,this.cycleNextFrame=o.framesPerImage):this.cycleCounter===this.cycleNextFrame&&(this.currentFrameX+=o.frameW,this.cycleNextFrame+=o.framesPerImage),this.cycleCounter++}},{key:"draw",value:function(){var t=h.ctx;t.save(),t.globalAlpha=.05,t.globalCompositeOperation="destination-out",t.fillRect(0,0,h.w,h.h),t.globalAlpha=1,t.globalCompositeOperation="source-over",t.rotate(this.rotation),t.drawImage(c,this.currentFrameX,0,o.frameW,o.frameH,this.x,this.y,o.frameW,o.frameH),t.restore()}}])&&s(e.prototype,i),n&&s(e,n),t}()},2:function(t,e){t.exports="precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying float vAlpha;\n\nuniform sampler2D uImage;\n\nvoid main(void){\n  vec4 color = texture2D(uImage, vTextureCoord) * vAlpha;\n  if (color.a == 0.0) discard;\n  gl_FragColor = color;\n}"}});