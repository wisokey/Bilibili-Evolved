!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/hide/video/top-mask"]=t():e["style/hide/video/top-mask"]=t()}(globalThis,(()=>(()=>{var e,t,o={996:(e,t,o)=>{var n=o(218)((function(e){return e[1]}));n.push([e.id,".bpx-player-top-wrap,\n.bilibili-player-video-top {\n  display: none !important;\n}",""]),e.exports=n},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,o,n){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var p=0;p<e.length;p++){var s=[].concat(e[p]);n&&r[s[0]]||(o&&(s[2]?s[2]="".concat(o," and ").concat(s[2]):s[2]=o),t.push(s))}},t}},439:(e,t,o)=>{var n=o(996);n&&n.__esModule&&(n=n.default),e.exports="string"==typeof n?n:n.toString()}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={id:e,exports:{}};return o[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var p=2&n&&o;"object"==typeof p&&!~e.indexOf(p);p=t(p))Object.getOwnPropertyNames(p).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,r.d(i,a),i},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>n});const e=coreApis.componentApis.define,t=coreApis.utils.urls,o="hideVideoTopMask",n=(0,e.defineComponentMetadata)({name:o,displayName:"隐藏视频标题层",entry:none,instantStyles:[{name:o,style:()=>Promise.resolve().then(r.t.bind(r,439,23))}],tags:[componentsTags.style,componentsTags.video],description:{"zh-CN":"隐藏视频里鼠标经过时出现在右上角的覆盖层."},urlInclude:t.playerUrls,commitHash:"527e4f69de85942dcd582299c9eb455b527f780e",coreVersion:"2.9.3"})})(),i=i.component})()));