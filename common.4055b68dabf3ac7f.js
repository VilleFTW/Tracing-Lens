"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{67160:(y,p,l)=>{l.d(p,{c:()=>i});var m=l(32361),g=l(87683),u=l(33139);const i=(a,n)=>{let t,e;const s=(c,v,f)=>{if("undefined"==typeof document)return;const h=document.elementFromPoint(c,v);h&&n(h)?h!==t&&(d(),o(h,f)):d()},o=(c,v)=>{t=c,e||(e=t);const f=t;(0,m.c)(()=>f.classList.add("ion-activated")),v()},d=(c=!1)=>{if(!t)return;const v=t;(0,m.c)(()=>v.classList.remove("ion-activated")),c&&e!==t&&t.click(),t=void 0};return(0,u.createGesture)({el:a,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>s(c.currentX,c.currentY,g.a),onMove:c=>s(c.currentX,c.currentY,g.b),onEnd:()=>{d(!0),(0,g.h)(),e=void 0}})}},88685:(y,p,l)=>{l.d(p,{g:()=>m});const m=(n,t,e,s,o)=>u(n[1],t[1],e[1],s[1],o).map(d=>g(n[0],t[0],e[0],s[0],d)),g=(n,t,e,s,o)=>o*(3*t*Math.pow(o-1,2)+o*(-3*e*o+3*e+s*o))-n*Math.pow(o-1,3),u=(n,t,e,s,o)=>a((s-=o)-3*(e-=o)+3*(t-=o)-(n-=o),3*e-6*t+3*n,3*t-3*n,n).filter(c=>c>=0&&c<=1),a=(n,t,e,s)=>{if(0===n)return((n,t,e)=>{const s=t*t-4*n*e;return s<0?[]:[(-t+Math.sqrt(s))/(2*n),(-t-Math.sqrt(s))/(2*n)]})(t,e,s);const o=(3*(e/=n)-(t/=n)*t)/3,d=(2*t*t*t-9*t*e+27*(s/=n))/27;if(0===o)return[Math.pow(-d,1/3)];if(0===d)return[Math.sqrt(-o),-Math.sqrt(-o)];const c=Math.pow(d/2,2)+Math.pow(o/3,3);if(0===c)return[Math.pow(d/2,.5)-t/3];if(c>0)return[Math.pow(-d/2+Math.sqrt(c),1/3)-Math.pow(d/2+Math.sqrt(c),1/3)-t/3];const v=Math.sqrt(Math.pow(-o/3,3)),f=Math.acos(-d/(2*Math.sqrt(Math.pow(-o/3,3)))),h=2*Math.pow(v,1/3);return[h*Math.cos(f/3)-t/3,h*Math.cos((f+2*Math.PI)/3)-t/3,h*Math.cos((f+4*Math.PI)/3)-t/3]}},75062:(y,p,l)=>{l.d(p,{i:()=>m});const m=g=>g&&""!==g.dir?"rtl"===g.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},11112:(y,p,l)=>{l.r(p),l.d(p,{startFocusVisible:()=>i});const m="ion-focused",u=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=a=>{let n=[],t=!0;const e=a?a.shadowRoot:document,s=a||document.body,o=_=>{n.forEach(w=>w.classList.remove(m)),_.forEach(w=>w.classList.add(m)),n=_},d=()=>{t=!1,o([])},c=_=>{t=u.includes(_.key),t||o([])},v=_=>{if(t&&_.composedPath){const w=_.composedPath().filter(E=>!!E.classList&&E.classList.contains("ion-focusable"));o(w)}},f=()=>{e.activeElement===s&&o([])};return e.addEventListener("keydown",c),e.addEventListener("focusin",v),e.addEventListener("focusout",f),e.addEventListener("touchstart",d),e.addEventListener("mousedown",d),{destroy:()=>{e.removeEventListener("keydown",c),e.removeEventListener("focusin",v),e.removeEventListener("focusout",f),e.removeEventListener("touchstart",d),e.removeEventListener("mousedown",d)},setFocus:o}}},1878:(y,p,l)=>{l.d(p,{C:()=>a,a:()=>u,d:()=>i});var m=l(15861),g=l(23756);const u=function(){var n=(0,m.Z)(function*(t,e,s,o,d,c){var v;if(t)return t.attachViewToDom(e,s,d,o);if(!(c||"string"==typeof s||s instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof s?null===(v=e.ownerDocument)||void 0===v?void 0:v.createElement(s):s;return o&&o.forEach(h=>f.classList.add(h)),d&&Object.assign(f,d),e.appendChild(f),yield new Promise(h=>(0,g.c)(f,h)),f});return function(e,s,o,d,c,v){return n.apply(this,arguments)}}(),i=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},a=()=>{let n,t;return{attachViewToDom:function(){var o=(0,m.Z)(function*(d,c,v={},f=[]){var h,_;if(n=d,c){const E="string"==typeof c?null===(h=n.ownerDocument)||void 0===h?void 0:h.createElement(c):c;f.forEach(r=>E.classList.add(r)),Object.assign(E,v),n.appendChild(E),yield new Promise(r=>(0,g.c)(E,r))}else if(n.children.length>0){const E=null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement("div");f.forEach(r=>E.classList.add(r)),E.append(...n.children),n.appendChild(E)}const w=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),n.parentNode.insertBefore(t,n),w.appendChild(n),n});return function(c,v){return o.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&t&&(t.parentNode.insertBefore(n,t),t.remove()),Promise.resolve())}}},87683:(y,p,l)=>{l.d(p,{a:()=>u,b:()=>i,c:()=>g,d:()=>n,h:()=>a});const m={getEngine(){var t;const e=window;return e.TapticEngine||(null===(t=e.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:s})},notification(t){const e=this.getEngine();if(!e)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:s})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},g=()=>{m.selection()},u=()=>{m.selectionStart()},i=()=>{m.selectionChanged()},a=()=>{m.selectionEnd()},n=t=>{m.impact(t)}},77208:(y,p,l)=>{l.d(p,{a:()=>u,b:()=>g,p:()=>m});const m=i=>console.warn(`[Ionic Warning]: ${i}`),g=(i,...a)=>console.error(`[Ionic Error]: ${i}`,...a),u=(i,...a)=>console.error(`<${i.tagName.toLowerCase()}> must be used inside ${a.join(" or ")}.`)},42362:(y,p,l)=>{l.d(p,{I:()=>a,a:()=>o,b:()=>n,c:()=>v,f:()=>d,g:()=>s,i:()=>e,p:()=>f,s:()=>c});var m=l(15861),g=l(23756),u=l(77208);const a="ion-content",n=".ion-content-scroll-host",t=`${a}, ${n}`,e=h=>h&&"ION-CONTENT"===h.tagName,s=function(){var h=(0,m.Z)(function*(_){return e(_)?(yield new Promise(w=>(0,g.c)(_,w)),_.getScrollElement()):_});return function(w){return h.apply(this,arguments)}}(),o=h=>h.querySelector(n)||h.querySelector(t),d=h=>h.closest(t),c=(h,_)=>e(h)?h.scrollToTop(_):Promise.resolve(h.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),v=(h,_,w,E)=>e(h)?h.scrollByPoint(_,w,E):Promise.resolve(h.scrollBy({top:w,left:_,behavior:E>0?"smooth":"auto"})),f=h=>(0,u.a)(h,a)},28439:(y,p,l)=>{l.d(p,{s:()=>m});const m=e=>{try{if(e instanceof class t{constructor(s){this.value=s}})return e.value;if(!i()||"string"!=typeof e||""===e)return e;const s=document.createDocumentFragment(),o=document.createElement("div");s.appendChild(o),o.innerHTML=e,n.forEach(f=>{const h=s.querySelectorAll(f);for(let _=h.length-1;_>=0;_--){const w=h[_];w.parentNode?w.parentNode.removeChild(w):s.removeChild(w);const E=u(w);for(let r=0;r<E.length;r++)g(E[r])}});const d=u(s);for(let f=0;f<d.length;f++)g(d[f]);const c=document.createElement("div");c.appendChild(s);const v=c.querySelector("div");return null!==v?v.innerHTML:c.innerHTML}catch(s){return console.error(s),""}},g=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let o=e.attributes.length-1;o>=0;o--){const d=e.attributes.item(o),c=d.name;if(!a.includes(c.toLowerCase())){e.removeAttribute(c);continue}const v=d.value;null!=v&&v.toLowerCase().includes("javascript:")&&e.removeAttribute(c)}const s=u(e);for(let o=0;o<s.length;o++)g(s[o])},u=e=>null!=e.children?e.children:e.childNodes,i=()=>{var e;const s=window,o=null===(e=null==s?void 0:s.Ionic)||void 0===e?void 0:e.config;return!o||(o.get?o.get("sanitizerEnabled",!0):!0===o.sanitizerEnabled||void 0===o.sanitizerEnabled)},a=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"]},48117:(y,p,l)=>{l.d(p,{a:()=>m,b:()=>d,c:()=>n,d:()=>c,e:()=>r,f:()=>u,g:()=>g,h:()=>w,i:()=>t,j:()=>s,k:()=>v,l:()=>e,m:()=>a,n:()=>i,o:()=>o,p:()=>f,q:()=>h,r:()=>_,s:()=>E});const m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},51316:(y,p,l)=>{l.r(p),l.d(p,{KEYBOARD_DID_CLOSE:()=>g,KEYBOARD_DID_OPEN:()=>m,copyVisualViewport:()=>E,keyboardDidClose:()=>f,keyboardDidOpen:()=>c,keyboardDidResize:()=>v,resetKeyboardAssist:()=>t,setKeyboardClose:()=>d,setKeyboardOpen:()=>o,startKeyboardAssist:()=>e,trackViewportChanges:()=>w});const m="ionKeyboardDidShow",g="ionKeyboardDidHide";let i={},a={},n=!1;const t=()=>{i={},a={},n=!1},e=r=>{s(r),r.visualViewport&&(a=E(r.visualViewport),r.visualViewport.onresize=()=>{w(r),c()||v(r)?o(r):f(r)&&d(r)})},s=r=>{r.addEventListener("keyboardDidShow",M=>o(r,M)),r.addEventListener("keyboardDidHide",()=>d(r))},o=(r,M)=>{h(r,M),n=!0},d=r=>{_(r),n=!1},c=()=>!n&&i.width===a.width&&(i.height-a.height)*a.scale>150,v=r=>n&&!f(r),f=r=>n&&a.height===r.innerHeight,h=(r,M)=>{const D=new CustomEvent(m,{detail:{keyboardHeight:M?M.keyboardHeight:r.innerHeight-a.height}});r.dispatchEvent(D)},_=r=>{const M=new CustomEvent(g);r.dispatchEvent(M)},w=r=>{i=Object.assign({},a),a=E(r.visualViewport)},E=r=>({width:Math.round(r.width),height:Math.round(r.height),offsetTop:r.offsetTop,offsetLeft:r.offsetLeft,pageTop:r.pageTop,pageLeft:r.pageLeft,scale:r.scale})},17741:(y,p,l)=>{l.d(p,{S:()=>g});const g={bubbles:{dur:1e3,circles:9,fn:(u,i,a)=>{const n=u*i/a-u+"ms",t=2*Math.PI*i/a;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(u,i,a)=>{const n=i/a,t=u*n-u+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(u,i)=>({r:6,style:{left:9-9*i+"px","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(u,i,a)=>({y1:14,y2:26,style:{transform:`rotate(${360/a*i+(i<a/2?180:-180)}deg)`,"animation-delay":u*i/a-u+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(u,i,a)=>({y1:12,y2:20,style:{transform:`rotate(${360/a*i+(i<a/2?180:-180)}deg)`,"animation-delay":u*i/a-u+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(u,i,a)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":u*i/a-u+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(u,i,a)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":u*i/a-u+"ms"}})}}},36546:(y,p,l)=>{l.r(p),l.d(p,{createSwipeBackGesture:()=>a});var m=l(23756),g=l(75062),u=l(33139);l(43509);const a=(n,t,e,s,o)=>{const d=n.ownerDocument.defaultView,c=(0,g.i)(n),f=r=>c?-r.deltaX:r.deltaX;return(0,u.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:r=>(r=>{const{startX:C}=r;return c?C>=d.innerWidth-50:C<=50})(r)&&t(),onStart:e,onMove:r=>{const C=f(r)/d.innerWidth;s(C)},onEnd:r=>{const M=f(r),C=d.innerWidth,D=M/C,L=(r=>c?-r.velocityX:r.velocityX)(r),O=L>=0&&(L>.2||M>C/2),T=(O?1-D:D)*C;let x=0;if(T>5){const b=T/Math.abs(L);x=Math.min(b,540)}o(O,D<=0?.01:(0,m.l)(0,D,.9999),x)}})}},92854:(y,p,l)=>{l.d(p,{c:()=>u,g:()=>a,h:()=>g,o:()=>t});var m=l(15861);const g=(e,s)=>null!==s.closest(e),u=(e,s)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},s):s,a=e=>{const s={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(o=>null!=o).map(o=>o.trim()).filter(o=>""!==o):[])(e).forEach(o=>s[o]=!0),s},n=/^[a-z][a-z0-9+\-.]*:/,t=function(){var e=(0,m.Z)(function*(s,o,d,c){if(null!=s&&"#"!==s[0]&&!n.test(s)){const v=document.querySelector("ion-router");if(v)return null!=o&&o.preventDefault(),v.push(s,d,c)}return!1});return function(o,d,c,v){return e.apply(this,arguments)}}()},93985:(y,p,l)=>{l.d(p,{e:()=>a});var m=l(69808),g=l(93075),u=l(70653),i=l(87587);let a=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[m.ez,g.u5,u.Pc]]}),n})()},36495:(y,p,l)=>{l.d(p,{j:()=>u});var m=l(98932),g=l(87587);let u=(()=>{class i{constructor(n){this.firestore=n}getLivestock(){const n=(0,m.hJ)(this.firestore,"livestock");return(0,m.BS)(n,{idField:"id"})}getLivestockById(n){const t=(0,m.JU)(this.firestore,`livestock/${n}`);return(0,m._1)(t,{idField:"id"})}}return i.\u0275fac=function(n){return new(n||i)(g.LFG(m.gg))},i.\u0275prov=g.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);