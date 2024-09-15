!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download/wasm-output"]=t():e["video/download/wasm-output"]=t()}(globalThis,(()=>(()=>{"use strict";var e={124:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var n=function(){var e=this,t=e._self._c;e._self._setupProxy;return e.shouldShow?t("div",{staticClass:"download-video-config-item",staticStyle:{"flex-wrap":"wrap"}},[t("div",{staticClass:"download-video-config-title"},[e._v("写入元数据：")]),e._v(" "),t("SwitchBox",{on:{change:e.saveOptions},model:{value:e.muxWithMetadata,callback:function(t){e.muxWithMetadata=t},expression:"muxWithMetadata"}}),e._v(" "),t("div",{staticClass:"download-video-config-description",staticStyle:{width:"100%"}},[e._v("\n    仅支持元数据类型「ffmetadata」\n  ")])],1):e._e()};n._withStripped=!0;const a=coreApis.ui;var i=o(986);const{options:r}=(0,i.getComponentSettings)("downloadVideo"),s={muxWithMetadata:!1,...r};var c=function(e,t,o,n,a,i,r,s){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=o,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=c):a&&(c=s?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:l}}(Vue.extend({components:{SwitchBox:a.SwitchBox},data(){const e=(0,i.isComponentEnabled)("saveVideoMetadata");return{shouldShow:e,muxWithMetadata:e&&s.muxWithMetadata}},methods:{saveOptions(){s.muxWithMetadata=this.muxExtraAssets,Object.assign(r,s)}}}),n,[],!1,null,null,null);const l=c.exports},986:e=>{e.exports=coreApis.settings}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.d(n,{plugin:()=>k,T:()=>M});const e=coreApis.toast,t=coreApis.download,a=coreApis.meta;var i=o(986);function r(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t,o){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,o)}function c(e,t,o){return function(e,t,o){if(t.set)t.set.call(e,o);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=o}}(e,d(e,t,"set"),o),o}function l(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}
/* eslint-disable @typescript-eslint/naming-convention */(e,d(e,t,"get"))}function d(e,t,o){if(!t.has(e))throw new TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}const u=(()=>{let e=0;return()=>e++})();var p=function(e){return e.LOAD="LOAD",e.EXEC="EXEC",e.WRITE_FILE="WRITE_FILE",e.READ_FILE="READ_FILE",e.ERROR="ERROR",e}(p||{}),f=new WeakMap,h=new WeakMap,m=new WeakMap,w=new WeakMap,v=new WeakMap;const g=coreApis.utils.formatters,y={cache:"cache"};async function b(e,t){return async function(){return new Promise(((e,t)=>{const o=unsafeWindow.indexedDB.open("bilibili-evolved-wasm-output",124);o.onerror=t,o.onupgradeneeded=()=>{const e=o.result;for(const t of e.objectStoreNames)e.deleteObjectStore(t);Object.values(y).forEach((t=>{e.createObjectStore(t)}))},o.onsuccess=()=>e(o.result)}))}().then((o=>new Promise(((n,a)=>{const i=o.transaction(e,t);n(i.objectStore(e)),i.onerror=a}))))}async function E(e,t,o){const n=await b(e).then((e=>async function(e,t){return new Promise(((o,n)=>{const a=e.get(t);a.onerror=n,a.onsuccess=()=>o(a.result)}))}(e,t)));if(n)return n;const a=await o(t);return await b(e,"readwrite").then((e=>async function(e,t,o){return new Promise(((n,a)=>{const i=e.put(t,o);i.onerror=a,i.onsuccess=()=>n(i.result)}))}(e,a,t))),a}const x=coreApis.runtimeLibrary;function _(e){const t=[];return(o,n)=>(a,i)=>{var r,s;t[o]=`${n}: ${r=a,s=i,`${(0,g.formatFileSize)(r)}${s>0?` / ${(0,g.formatFileSize)(s)} @ ${(0,g.formatPercent)(r/s)}`:""}`}`,e.message=t.join("\n")}}async function S(e,t){const o=await fetch(e);if(!o.ok)throw new Error(`${o.status} ${o.statusText}`);const n=o.body.getReader(),a=o.headers.get("Content-Encoding")?-1:parseInt(o.headers.get("Content-Length"));let i=0;const r=[];
// eslint-disable-next-line no-constant-condition
for(;;){const{done:e,value:o}=await n.read();if(e)break;r.push(o),i+=o.length,t(i,a)}const s=new Uint8Array(i);let c=0;for(const e of r)s.set(e,c),c+=e.length;return s}async function F(e,t,o){return E(y.cache,e,(async()=>{const e=await S(t.url,o),n=await x.RuntimeLibrary.sha256(e);if(n!==t.sha256)throw new Error(`Check integrity failed from ${t.url}, expected = ${t.sha256}, actual = ${n}`);return e}))}function A(e,t){const o=new Blob([e],{type:t});return URL.createObjectURL(o)}const R=new class{constructor(){var e=this;s(this,f,{writable:!0,value:null}),s(this,h,{writable:!0,value:{}}),s(this,m,{writable:!0,value:{}}),r(this,"loaded",!1),s(this,w,{writable:!0,value:()=>{l(this,f)&&(l(this,f).onmessage=e=>{let{data:{id:t,type:o,data:n}}=e;switch(o){case p.LOAD:this.loaded=!0,l(this,h)[t](n);break;case p.EXEC:case p.WRITE_FILE:case p.READ_FILE:l(this,h)[t](n);break;case p.ERROR:l(this,m)[t](n)}delete l(this,h)[t],delete l(this,m)[t]})}}),s(this,v,{writable:!0,value:function(t){let{type:o,data:n}=t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2?arguments[2]:void 0;return l(e,f)?new Promise(((t,r)=>{const s=u();l(e,f)&&l(e,f).postMessage({id:s,type:o,data:n},a),l(e,h)[s]=t,l(e,m)[s]=r,i?.addEventListener("abort",(()=>{r(new DOMException(`Message # ${s} was aborted`,"AbortError"))}),{once:!0})})):Promise.reject(new Error("FFmpeg is not loaded"))}}),r(this,"load",((e,t)=>(l(this,f)||(c(this,f,new Worker(e.workerLoadURL,{type:"classic"})),l(this,w).call(this)),l(this,v).call(this,{type:p.LOAD,data:e},void 0,t)))),r(this,"exec",(function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=arguments.length>2?arguments[2]:void 0;return l(e,v).call(e,{type:p.EXEC,data:{args:t,timeout:o}},void 0,n)})),r(this,"terminate",(()=>{const e=Object.keys(l(this,m));for(const t of e)l(this,m)[t](new Error("FFmpeg terminated")),delete l(this,m)[t],delete l(this,h)[t];l(this,f)&&(l(this,f).terminate(),c(this,f,null),this.loaded=!1)})),r(this,"writeFile",((e,t,o)=>{const n=[];return n.push(t.buffer),l(this,v).call(this,{type:p.WRITE_FILE,data:{path:e,data:t}},n,o)})),r(this,"readFile",((e,t)=>l(this,v).call(this,{type:p.READ_FILE,data:{path:e,encoding:"binary"}},void 0,t)))}};async function W(o,n,a,i,r){let s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1;const l=e.Toast.info("",`${M} - ${s} / ${c}`),d=_(l),[u,p]=await Promise.all([S(n,d(0,"正在下载视频流")),S(a,d(1,"正在下载音频流"))]);R.writeFile("video",u),R.writeFile("audio",p);const f=["-i","video","-i","audio"];i&&(R.writeFile("ffmetadata",(new TextEncoder).encode(i)),f.push("-i","ffmetadata","-map_metadata","2"),r||f.push("-movflags","+use_metadata_tags")),f.push("-codec","copy","-f",r?"matroska":"mp4","output"),console.debug("FFmpeg commandline args:",f.join(" ")),l.message="混流中……",await R.exec(f);const h=await R.readFile("output"),m=new Blob([h],{type:r?"video/x-matroska":"video/mp4"});l.message="完成！",l.duration=1e3,await t.DownloadPackage.single(o.replace(/.[^/.]+$/,"."+(r?"mkv":"mp4")),m)}async function C(t,o){R.loaded||await async function(){const t=e.Toast.info("正在加载 FFmpeg",`${M} - 初始化`),o=_(t),[n,i,r]=await Promise.all([F("ffmpeg-worker",a.meta.compilationInfo.altCdn.library.ffmpeg.worker,o(0,"正在加载 FFmpeg Worker")),F("ffmpeg-core",a.meta.compilationInfo.altCdn.library.ffmpeg.core,o(1,"正在加载 FFmpeg Core")),F("ffmpeg-wasm",a.meta.compilationInfo.altCdn.library.ffmpeg.wasm,o(2,"正在加载 FFmpeg WASM"))]);await R.load({workerLoadURL:A(n,"text/javascript"),coreURL:A(i,"text/javascript"),wasmURL:A(r,"application/wasm")}),t.message="完成！",t.close()}();const{infos:n,extraAssets:r}=t;let s;if(o){const e=[];for(const{asset:t,instance:o}of r)s||"saveVideoMetadata"!==t.name||"ffmetadata"!==o.type?e.push({asset:t,instance:o}):s=await t.getAssets(n,o);t.extraAssets=e}const{dashAudioExtension:c,dashFlacAudioExtension:l,dashVideoExtension:d}=(0,i.getComponentSettings)("downloadVideo").options;for(let e=0;e<n.length;e++){const t=n[e],[o,a]=t.titledFragments;if(2!==t.fragments.length||o.extension!==d||a.extension!==c&&a.extension!==l)throw new Error("仅支持 DASH 格式视频和音频");await W(o.title,o.url,a.url,s?.[e]?.data,a.extension===l,e+1,n.length)}}const M="WASM 混流输出",j="使用 WASM 在浏览器中下载并合并音视频, 支持批量下载",k={name:"downloadVideo.outputs.wasm",displayName:`下载视频 - ${M}`,description:j,author:{name:"WakelessSloth56",link:"https://github.com/WakelessSloth56"},setup:t=>{let{addData:n}=t;n("downloadVideo.outputs",(t=>{t.push({name:"wasm",displayName:"WASM",description:`${j}。运行过程中请勿关闭页面，初次使用或清除缓存后需要加载约 30 MB 的 WASM 文件。`,runAction:async(t,o)=>{try{await C(t,o.muxWithMetadata)}catch(t){e.Toast.error(String(t),M)}},component:()=>Promise.resolve().then(o.bind(o,124)).then((e=>e.default))})}))},commitHash:"527e4f69de85942dcd582299c9eb455b527f780e",coreVersion:"2.9.3"}})(),n=n.plugin})()));