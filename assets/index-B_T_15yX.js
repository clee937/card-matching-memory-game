var _e=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var er=_e((ar,O)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))I(v);new MutationObserver(v=>{for(const b of v)if(b.type==="childList")for(const P of b.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&I(P)}).observe(document,{childList:!0,subtree:!0});function m(v){const b={};return v.integrity&&(b.integrity=v.integrity),v.referrerPolicy&&(b.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?b.credentials="include":v.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function I(v){if(v.ep)return;v.ep=!0;const b=m(v);fetch(v.href,b)}})();var O={};(function n(t,m,I,v){var b=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),P=typeof Path2D=="function"&&typeof DOMMatrix=="function",ie=function(){if(!t.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var a=r.transferToImageBitmap();try{e.createPattern(a,"no-repeat")}catch{return!1}return!0}();function V(){}function B(r){var e=m.exports.Promise,a=e!==void 0?e:t.Promise;return typeof a=="function"?new a(r):(r(V,V),null)}var _=function(r,e){return{transform:function(a){if(r)return a;if(e.has(a))return e.get(a);var s=new OffscreenCanvas(a.width,a.height),i=s.getContext("2d");return i.drawImage(a,0,0),e.set(a,s),s},clear:function(){e.clear()}}}(ie,new Map),k=function(){var r=Math.floor(16.666666666666668),e,a,s={},i=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(l){var c=Math.random();return s[c]=requestAnimationFrame(function o(u){i===u||i+r-1<u?(i=u,delete s[c],l()):s[c]=requestAnimationFrame(o)}),c},a=function(l){s[l]&&cancelAnimationFrame(s[l])}):(e=function(l){return setTimeout(l,r)},a=function(l){return clearTimeout(l)}),{frame:e,cancel:a}}(),le=function(){var r,e,a={};function s(i){function l(c,o){i.postMessage({options:c||{},callback:o})}i.init=function(o){var u=o.transferControlToOffscreen();i.postMessage({canvas:u},[u])},i.fire=function(o,u,h){if(e)return l(o,null),e;var g=Math.random().toString(36).slice(2);return e=B(function(f){function p(M){M.data.callback===g&&(delete a[g],i.removeEventListener("message",p),e=null,_.clear(),h(),f())}i.addEventListener("message",p),l(o,g),a[g]=p.bind(null,{data:{callback:g}})}),e},i.reset=function(){i.postMessage({reset:!0});for(var o in a)a[o](),delete a[o]}}return function(){if(r)return r;if(!I&&b){var i=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([i])))}catch(l){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",l),null}s(r)}return r}}(),ce={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function ue(r,e){return e?e(r):r}function de(r){return r!=null}function y(r,e,a){return ue(r&&de(r[e])?r[e]:ce[e],a)}function he(r){return r<0?0:Math.floor(r)}function fe(r,e){return Math.floor(Math.random()*(e-r))+r}function N(r){return parseInt(r,16)}function me(r){return r.map(ve)}function ve(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:N(e.substring(0,2)),g:N(e.substring(2,4)),b:N(e.substring(4,6))}}function ge(r){var e=y(r,"origin",Object);return e.x=y(e,"x",Number),e.y=y(e,"y",Number),e}function pe(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function ye(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function Me(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function be(r,e,a,s,i,l,c,o,u){r.save(),r.translate(e,a),r.rotate(l),r.scale(s,i),r.arc(0,0,1,c,o,u),r.restore()}function we(r){var e=r.angle*(Math.PI/180),a=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*a-Math.random()*a),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function Ce(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var a=e.tick++/e.totalTicks,s=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,l=e.wobbleX+e.random*e.tiltCos,c=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-a)+")",r.beginPath(),P&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(Se(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(l-s)*.1,Math.abs(c-i)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var o=Math.PI/10*e.wobble,u=Math.abs(l-s)*.1,h=Math.abs(c-i)*.1,g=e.shape.bitmap.width*e.scalar,f=e.shape.bitmap.height*e.scalar,p=new DOMMatrix([Math.cos(o)*u,Math.sin(o)*u,-Math.sin(o)*h,Math.cos(o)*h,e.x,e.y]);p.multiplySelf(new DOMMatrix(e.shape.matrix));var M=r.createPattern(_.transform(e.shape.bitmap),"no-repeat");M.setTransform(p),r.globalAlpha=1-a,r.fillStyle=M,r.fillRect(e.x-g/2,e.y-f/2,g,f),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(l-s)*e.ovalScalar,Math.abs(c-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):be(r,e.x,e.y,Math.abs(l-s)*e.ovalScalar,Math.abs(c-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var d=Math.PI/2*3,w=4*e.scalar,C=8*e.scalar,T=e.x,E=e.y,L=5,S=Math.PI/L;L--;)T=e.x+Math.cos(d)*C,E=e.y+Math.sin(d)*C,r.lineTo(T,E),d+=S,T=e.x+Math.cos(d)*w,E=e.y+Math.sin(d)*w,r.lineTo(T,E),d+=S;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(i)),r.lineTo(Math.floor(l),Math.floor(c)),r.lineTo(Math.floor(s),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function Te(r,e,a,s,i){var l=e.slice(),c=r.getContext("2d"),o,u,h=B(function(g){function f(){o=u=null,c.clearRect(0,0,s.width,s.height),_.clear(),i(),g()}function p(){I&&!(s.width===v.width&&s.height===v.height)&&(s.width=r.width=v.width,s.height=r.height=v.height),!s.width&&!s.height&&(a(r),s.width=r.width,s.height=r.height),c.clearRect(0,0,s.width,s.height),l=l.filter(function(M){return Ce(c,M)}),l.length?o=k.frame(p):f()}o=k.frame(p),u=f});return{addFettis:function(g){return l=l.concat(g),h},canvas:r,promise:h,reset:function(){o&&k.cancel(o),u&&u()}}}function Z(r,e){var a=!r,s=!!y(e||{},"resize"),i=!1,l=y(e,"disableForReducedMotion",Boolean),c=b&&!!y(e||{},"useWorker"),o=c?le():null,u=a?pe:ye,h=r&&o?!!r.__confetti_initialized:!1,g=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,f;function p(d,w,C){for(var T=y(d,"particleCount",he),E=y(d,"angle",Number),L=y(d,"spread",Number),S=y(d,"startVelocity",Number),Le=y(d,"decay",Number),Pe=y(d,"gravity",Number),xe=y(d,"drift",Number),G=y(d,"colors",me),Fe=y(d,"ticks",Number),K=y(d,"shapes"),Oe=y(d,"scalar"),Ae=!!y(d,"flat"),J=ge(d),Q=T,W=[],Re=r.width*J.x,Be=r.height*J.y;Q--;)W.push(we({x:Re,y:Be,angle:E,spread:L,startVelocity:S,color:G[Q%G.length],shape:K[fe(0,K.length)],ticks:Fe,decay:Le,gravity:Pe,drift:xe,scalar:Oe,flat:Ae}));return f?f.addFettis(W):(f=Te(r,W,u,w,C),f.promise)}function M(d){var w=l||y(d,"disableForReducedMotion",Boolean),C=y(d,"zIndex",Number);if(w&&g)return B(function(S){S()});a&&f?r=f.canvas:a&&!r&&(r=Me(C),document.body.appendChild(r)),s&&!h&&u(r);var T={width:r.width,height:r.height};o&&!h&&o.init(r),h=!0,o&&(r.__confetti_initialized=!0);function E(){if(o){var S={getBoundingClientRect:function(){if(!a)return r.getBoundingClientRect()}};u(S),o.postMessage({resize:{width:S.width,height:S.height}});return}T.width=T.height=null}function L(){f=null,s&&(i=!1,t.removeEventListener("resize",E)),a&&r&&(document.body.removeChild(r),r=null,h=!1)}return s&&!i&&(i=!0,t.addEventListener("resize",E,!1)),o?o.fire(d,T,L):p(d,T,L)}return M.reset=function(){o&&o.reset(),f&&f.reset()},M}var q;function H(){return q||(q=Z(null,{useWorker:!0,resize:!0})),q}function Se(r,e,a,s,i,l,c){var o=new Path2D(r),u=new Path2D;u.addPath(o,new DOMMatrix(e));var h=new Path2D;return h.addPath(u,new DOMMatrix([Math.cos(c)*i,Math.sin(c)*i,-Math.sin(c)*l,Math.cos(c)*l,a,s])),h}function Ie(r){if(!P)throw new Error("path confetti are not supported in this browser");var e,a;typeof r=="string"?e=r:(e=r.path,a=r.matrix);var s=new Path2D(e),i=document.createElement("canvas"),l=i.getContext("2d");if(!a){for(var c=1e3,o=c,u=c,h=0,g=0,f,p,M=0;M<c;M+=2)for(var d=0;d<c;d+=2)l.isPointInPath(s,M,d,"nonzero")&&(o=Math.min(o,M),u=Math.min(u,d),h=Math.max(h,M),g=Math.max(g,d));f=h-o,p=g-u;var w=10,C=Math.min(w/f,w/p);a=[C,0,0,C,-Math.round(f/2+o)*C,-Math.round(p/2+u)*C]}return{type:"path",path:e,matrix:a}}function Ee(r){var e,a=1,s="#000000",i='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,a="scalar"in r?r.scalar:a,i="fontFamily"in r?r.fontFamily:i,s="color"in r?r.color:s);var l=10*a,c=""+l+"px "+i,o=new OffscreenCanvas(l,l),u=o.getContext("2d");u.font=c;var h=u.measureText(e),g=Math.ceil(h.actualBoundingBoxRight+h.actualBoundingBoxLeft),f=Math.ceil(h.actualBoundingBoxAscent+h.actualBoundingBoxDescent),p=2,M=h.actualBoundingBoxLeft+p,d=h.actualBoundingBoxAscent+p;g+=p+p,f+=p+p,o=new OffscreenCanvas(g,f),u=o.getContext("2d"),u.font=c,u.fillStyle=s,u.fillText(e,M,d);var w=1/a;return{type:"bitmap",bitmap:o.transferToImageBitmap(),matrix:[w,0,0,w,-g*w/2,-f*w/2]}}m.exports=function(){return H().apply(this,arguments)},m.exports.reset=function(){H().reset()},m.exports.create=Z,m.exports.shapeFromPath=Ie,m.exports.shapeFromText=Ee})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),O,!1);const ke=O.exports;O.exports.create;const Ne={particleCount:45,startVelocity:52,colors:["#e81e08","#009cdb","#42b232","#fcd000","#ee2fbe"],shapes:["star"],gravity:.6,spread:150},qe=()=>{ke(Ne)},Y=document.querySelector(".game"),A=[...document.querySelectorAll(".card")],D=document.querySelectorAll(".overlay"),U=document.querySelector(".seconds"),$=document.querySelector(".overlay__gameover"),X=document.querySelector(".overlay__win"),x=document.querySelector(".audio__game"),ee=document.querySelector(".audio__match"),re=document.querySelector(".audio__win"),ae=document.querySelector(".audio__flip"),te=document.querySelector(".audio__gameover");let z=0,F=[],R=[];if(!Y||A.length===0||D.length===0||!U||!$||!X||!x||!ee||!re||!ae||!te)throw new Error("Something went wrong with a query selector");const We=n=>{n.currentTarget.classList.remove("overlay--visible")},je=()=>{$.classList.add("overlay--visible"),te.play(),x.pause()},De=()=>{setTimeout(function(){X.classList.add("overlay--visible")},600),x.pause(),setTimeout(()=>{re.play(),qe()},300)},Ue=()=>{let n=90;const t=setInterval(function(){n--,U.innerText=n.toString(),n===0?(clearInterval(t),je()):R.length===16&&clearInterval(t)},1e3)},ze=n=>{for(let t=n.length-1;t>=0;t--){const m=Math.floor((t+1)*Math.random()),I=n[m];n[m]=n[t],n[t]=I}return n},Ve=()=>{A.forEach(n=>{n.classList.remove("card--visible"),n.classList.remove("matched")}),D.forEach(n=>{n.classList.remove("overlay--visible")}),se(),j(R),j(F),U.innerText="90"},Ze=n=>{Ve(),ze(A).forEach(m=>{Y.appendChild(m)}),We(n),Ue()},He=n=>{n.classList.add("card--visible")},ne=(n,t,m)=>{typeof m<"u"?n.push(t,m):n.push(t)},oe=n=>n.length,Ge=n=>n,j=n=>{n.length=0},se=()=>{z=0},Ke=(n,t)=>{n.classList.remove("card--visible"),t.classList.remove("card--visible")},Je=()=>{oe(R)===A.length&&De()},Qe=()=>{const n=Ge(F),t=n[0],m=n[1],I=t.getElementsByClassName("card__image")[1],v=m.getElementsByClassName("card__image")[1];I.alt===v.alt?(ne(R,t,m),t.classList.add("matched"),m.classList.add("matched"),setTimeout(()=>{ee.play()},450),Je()):setTimeout(()=>{Ke(t,m)},1300),j(F),se()},Ye=()=>z,$e=()=>{z++},Xe=n=>{const t=n.currentTarget;if(Ye()>2||t.classList.contains("matched")||t.classList.contains("card--visible"))return;ae.play(),$e(),He(t),ne(F,t),oe(F)===2&&Qe()};D.forEach(n=>{n.addEventListener("click",Ze),n.addEventListener("click",()=>{x.volume=.1,x.currentTime=0,x.play()})});A.forEach(n=>{n.addEventListener("click",Xe)})});export default er();