var Be=(n,a)=>()=>(a||n((a={exports:{}}).exports,a),a.exports);var Xe=Be((rr,_)=>{(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))I(v);new MutationObserver(v=>{for(const b of v)if(b.type==="childList")for(const P of b.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&I(P)}).observe(document,{childList:!0,subtree:!0});function m(v){const b={};return v.integrity&&(b.integrity=v.integrity),v.referrerPolicy&&(b.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?b.credentials="include":v.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function I(v){if(v.ep)return;v.ep=!0;const b=m(v);fetch(v.href,b)}})();var _={};(function n(a,m,I,v){var b=!!(a.Worker&&a.Blob&&a.Promise&&a.OffscreenCanvas&&a.OffscreenCanvasRenderingContext2D&&a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype.transferControlToOffscreen&&a.URL&&a.URL.createObjectURL),P=typeof Path2D=="function"&&typeof DOMMatrix=="function",ie=function(){if(!a.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var t=r.transferToImageBitmap();try{e.createPattern(t,"no-repeat")}catch{return!1}return!0}();function V(){}function B(r){var e=m.exports.Promise,t=e!==void 0?e:a.Promise;return typeof t=="function"?new t(r):(r(V,V),null)}var k=function(r,e){return{transform:function(t){if(r)return t;if(e.has(t))return e.get(t);var s=new OffscreenCanvas(t.width,t.height),i=s.getContext("2d");return i.drawImage(t,0,0),e.set(t,s),s},clear:function(){e.clear()}}}(ie,new Map),N=function(){var r=Math.floor(16.666666666666668),e,t,s={},i=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(c){var l=Math.random();return s[l]=requestAnimationFrame(function o(d){i===d||i+r-1<d?(i=d,delete s[l],c()):s[l]=requestAnimationFrame(o)}),l},t=function(c){s[c]&&cancelAnimationFrame(s[c])}):(e=function(c){return setTimeout(c,r)},t=function(c){return clearTimeout(c)}),{frame:e,cancel:t}}(),ce=function(){var r,e,t={};function s(i){function c(l,o){i.postMessage({options:l||{},callback:o})}i.init=function(o){var d=o.transferControlToOffscreen();i.postMessage({canvas:d},[d])},i.fire=function(o,d,h){if(e)return c(o,null),e;var g=Math.random().toString(36).slice(2);return e=B(function(f){function y(M){M.data.callback===g&&(delete t[g],i.removeEventListener("message",y),e=null,k.clear(),h(),f())}i.addEventListener("message",y),c(o,g),t[g]=y.bind(null,{data:{callback:g}})}),e},i.reset=function(){i.postMessage({reset:!0});for(var o in t)t[o](),delete t[o]}}return function(){if(r)return r;if(!I&&b){var i=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([i])))}catch(c){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",c),null}s(r)}return r}}(),le={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function de(r,e){return e?e(r):r}function ue(r){return r!=null}function p(r,e,t){return de(r&&ue(r[e])?r[e]:le[e],t)}function he(r){return r<0?0:Math.floor(r)}function fe(r,e){return Math.floor(Math.random()*(e-r))+r}function q(r){return parseInt(r,16)}function me(r){return r.map(ve)}function ve(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:q(e.substring(0,2)),g:q(e.substring(2,4)),b:q(e.substring(4,6))}}function ge(r){var e=p(r,"origin",Object);return e.x=p(e,"x",Number),e.y=p(e,"y",Number),e}function ye(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function pe(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function Me(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function be(r,e,t,s,i,c,l,o,d){r.save(),r.translate(e,t),r.rotate(c),r.scale(s,i),r.arc(0,0,1,l,o,d),r.restore()}function we(r){var e=r.angle*(Math.PI/180),t=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*t-Math.random()*t),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function Ce(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var t=e.tick++/e.totalTicks,s=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,c=e.wobbleX+e.random*e.tiltCos,l=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-t)+")",r.beginPath(),P&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(Ie(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(c-s)*.1,Math.abs(l-i)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var o=Math.PI/10*e.wobble,d=Math.abs(c-s)*.1,h=Math.abs(l-i)*.1,g=e.shape.bitmap.width*e.scalar,f=e.shape.bitmap.height*e.scalar,y=new DOMMatrix([Math.cos(o)*d,Math.sin(o)*d,-Math.sin(o)*h,Math.cos(o)*h,e.x,e.y]);y.multiplySelf(new DOMMatrix(e.shape.matrix));var M=r.createPattern(k.transform(e.shape.bitmap),"no-repeat");M.setTransform(y),r.globalAlpha=1-t,r.fillStyle=M,r.fillRect(e.x-g/2,e.y-f/2,g,f),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(c-s)*e.ovalScalar,Math.abs(l-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):be(r,e.x,e.y,Math.abs(c-s)*e.ovalScalar,Math.abs(l-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var u=Math.PI/2*3,w=4*e.scalar,C=8*e.scalar,T=e.x,S=e.y,E=5,L=Math.PI/E;E--;)T=e.x+Math.cos(u)*C,S=e.y+Math.sin(u)*C,r.lineTo(T,S),u+=L,T=e.x+Math.cos(u)*w,S=e.y+Math.sin(u)*w,r.lineTo(T,S),u+=L;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(i)),r.lineTo(Math.floor(c),Math.floor(l)),r.lineTo(Math.floor(s),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function Te(r,e,t,s,i){var c=e.slice(),l=r.getContext("2d"),o,d,h=B(function(g){function f(){o=d=null,l.clearRect(0,0,s.width,s.height),k.clear(),i(),g()}function y(){I&&!(s.width===v.width&&s.height===v.height)&&(s.width=r.width=v.width,s.height=r.height=v.height),!s.width&&!s.height&&(t(r),s.width=r.width,s.height=r.height),l.clearRect(0,0,s.width,s.height),c=c.filter(function(M){return Ce(l,M)}),c.length?o=N.frame(y):f()}o=N.frame(y),d=f});return{addFettis:function(g){return c=c.concat(g),h},canvas:r,promise:h,reset:function(){o&&N.cancel(o),d&&d()}}}function Z(r,e){var t=!r,s=!!p(e||{},"resize"),i=!1,c=p(e,"disableForReducedMotion",Boolean),l=b&&!!p(e||{},"useWorker"),o=l?ce():null,d=t?ye:pe,h=r&&o?!!r.__confetti_initialized:!1,g=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,f;function y(u,w,C){for(var T=p(u,"particleCount",he),S=p(u,"angle",Number),E=p(u,"spread",Number),L=p(u,"startVelocity",Number),Ee=p(u,"decay",Number),Pe=p(u,"gravity",Number),xe=p(u,"drift",Number),G=p(u,"colors",me),Fe=p(u,"ticks",Number),K=p(u,"shapes"),Ae=p(u,"scalar"),Oe=!!p(u,"flat"),J=ge(u),Q=T,j=[],_e=r.width*J.x,Re=r.height*J.y;Q--;)j.push(we({x:_e,y:Re,angle:S,spread:E,startVelocity:L,color:G[Q%G.length],shape:K[fe(0,K.length)],ticks:Fe,decay:Ee,gravity:Pe,drift:xe,scalar:Ae,flat:Oe}));return f?f.addFettis(j):(f=Te(r,j,d,w,C),f.promise)}function M(u){var w=c||p(u,"disableForReducedMotion",Boolean),C=p(u,"zIndex",Number);if(w&&g)return B(function(L){L()});t&&f?r=f.canvas:t&&!r&&(r=Me(C),document.body.appendChild(r)),s&&!h&&d(r);var T={width:r.width,height:r.height};o&&!h&&o.init(r),h=!0,o&&(r.__confetti_initialized=!0);function S(){if(o){var L={getBoundingClientRect:function(){if(!t)return r.getBoundingClientRect()}};d(L),o.postMessage({resize:{width:L.width,height:L.height}});return}T.width=T.height=null}function E(){f=null,s&&(i=!1,a.removeEventListener("resize",S)),t&&r&&(document.body.removeChild(r),r=null,h=!1)}return s&&!i&&(i=!0,a.addEventListener("resize",S,!1)),o?o.fire(u,T,E):y(u,T,E)}return M.reset=function(){o&&o.reset(),f&&f.reset()},M}var W;function H(){return W||(W=Z(null,{useWorker:!0,resize:!0})),W}function Ie(r,e,t,s,i,c,l){var o=new Path2D(r),d=new Path2D;d.addPath(o,new DOMMatrix(e));var h=new Path2D;return h.addPath(d,new DOMMatrix([Math.cos(l)*i,Math.sin(l)*i,-Math.sin(l)*c,Math.cos(l)*c,t,s])),h}function Le(r){if(!P)throw new Error("path confetti are not supported in this browser");var e,t;typeof r=="string"?e=r:(e=r.path,t=r.matrix);var s=new Path2D(e),i=document.createElement("canvas"),c=i.getContext("2d");if(!t){for(var l=1e3,o=l,d=l,h=0,g=0,f,y,M=0;M<l;M+=2)for(var u=0;u<l;u+=2)c.isPointInPath(s,M,u,"nonzero")&&(o=Math.min(o,M),d=Math.min(d,u),h=Math.max(h,M),g=Math.max(g,u));f=h-o,y=g-d;var w=10,C=Math.min(w/f,w/y);t=[C,0,0,C,-Math.round(f/2+o)*C,-Math.round(y/2+d)*C]}return{type:"path",path:e,matrix:t}}function Se(r){var e,t=1,s="#000000",i='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,t="scalar"in r?r.scalar:t,i="fontFamily"in r?r.fontFamily:i,s="color"in r?r.color:s);var c=10*t,l=""+c+"px "+i,o=new OffscreenCanvas(c,c),d=o.getContext("2d");d.font=l;var h=d.measureText(e),g=Math.ceil(h.actualBoundingBoxRight+h.actualBoundingBoxLeft),f=Math.ceil(h.actualBoundingBoxAscent+h.actualBoundingBoxDescent),y=2,M=h.actualBoundingBoxLeft+y,u=h.actualBoundingBoxAscent+y;g+=y+y,f+=y+y,o=new OffscreenCanvas(g,f),d=o.getContext("2d"),d.font=l,d.fillStyle=s,d.fillText(e,M,u);var w=1/t;return{type:"bitmap",bitmap:o.transferToImageBitmap(),matrix:[w,0,0,w,-g*w/2,-f*w/2]}}m.exports=function(){return H().apply(this,arguments)},m.exports.reset=function(){H().reset()},m.exports.create=Z,m.exports.shapeFromPath=Le,m.exports.shapeFromText=Se})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),_,!1);const ke=_.exports;_.exports.create;const Ne={particleCount:45,startVelocity:52,colors:["#e81e08","#009cdb","#42b232","#fcd000","#ee2fbe"],shapes:["star"],gravity:.6,spread:150},qe=()=>{ke(Ne)},Y=document.querySelector(".game"),A=[...document.querySelectorAll(".card")],U=document.querySelectorAll(".overlay"),z=document.querySelector(".seconds"),$=document.querySelector(".overlay__gameover"),X=document.querySelector(".overlay__win"),x=document.querySelector(".audio__game"),ee=document.querySelector(".audio__match"),re=document.querySelector(".audio__win"),ae=document.querySelector(".audio__flip"),te=document.querySelector(".audio__gameover"),ne=document.querySelector(".audio__yahoo"),oe=document.querySelector(".audio__ohno");let F=[],O=[];if(!Y||A.length===0||U.length===0||!z||!$||!X||!x||!ee||!re||!ae||!te||!ne||!oe)throw new Error("Something went wrong with a query selector");const We=n=>{n.currentTarget.classList.remove("overlay--visible")},je=()=>{$.classList.add("overlay--visible"),oe.play(),setTimeout(()=>{te.play()},500),x.pause()},De=()=>{setTimeout(function(){X.classList.add("overlay--visible")},800),x.pause(),setTimeout(()=>{ne.play()},300),setTimeout(()=>{re.play(),qe()},700)},Ue=()=>{let n=90;const a=setInterval(function(){n--,z.innerText=n.toString(),n===0?(clearInterval(a),je()):O.length===16&&clearInterval(a)},1e3)},ze=n=>{for(let a=n.length-1;a>=0;a--){const m=Math.floor((a+1)*Math.random()),I=n[m];n[m]=n[a],n[a]=I}return n},Ve=()=>{A.forEach(n=>{n.classList.remove("card--visible"),n.classList.remove("matched")}),U.forEach(n=>{n.classList.remove("overlay--visible")}),D(O),D(F),z.innerText="90"},Ze=n=>{Ve(),ze(A).forEach(m=>{Y.appendChild(m)}),We(n),Ue()},He=n=>{n.classList.add("card--visible"),n.classList.add("card--selected")},se=(n,a,m)=>{typeof m<"u"?n.push(a,m):n.push(a)},R=n=>n.length,Ge=n=>n,D=n=>{n.length=0},Ke=(n,a)=>{n.classList.remove("card--visible"),a.classList.remove("card--visible")},Je=()=>{R(O)===A.length&&De()},Qe=()=>{const n=Ge(F),a=n[0],m=n[1],I=a.getElementsByClassName("card__image")[1],v=m.getElementsByClassName("card__image")[1];I.alt===v.alt?(se(O,a,m),a.classList.add("matched"),m.classList.add("matched"),a.classList.remove("card--selected"),m.classList.remove("card--selected"),setTimeout(()=>{R(O)!==16&&ee.play()},450),Je()):setTimeout(()=>{a.classList.remove("card--selected"),m.classList.remove("card--selected"),Ke(a,m)},1300),D(F)},Ye=()=>{let n=0;return A.forEach(a=>{a.classList.contains("card--selected")&&n++}),n===2},$e=n=>{const a=n.currentTarget;if(a.classList.contains("matched")||R(F)===2||a.classList.contains("card--visible")||Ye())return;ae.play(),He(a),se(F,a),R(F)===2&&Qe()};U.forEach(n=>{n.addEventListener("click",Ze),n.addEventListener("click",()=>{x.volume=.1,x.currentTime=0,x.play()})});A.forEach(n=>{n.addEventListener("click",$e)})});export default Xe();