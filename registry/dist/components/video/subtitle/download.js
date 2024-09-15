!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/subtitle/download"]=e():t["video/subtitle/download"]=e()}(globalThis,(()=>(()=>{var t,e,n={680:(t,e,n)=>{"use strict";n.d(e,{mE:()=>l});const o=coreApis.ajax;var i=n(391),r=n(674);const a=async()=>{const{SubtitleConverter:t,SubtitleSize:e,SubtitleLocation:o}=await Promise.resolve().then(n.bind(n,248)),{playerAgent:i}=await Promise.resolve().then(n.t.bind(n,833,23)),a=i.getPlayerConfig("subtitle",null);if(!a)return[t.defaultConfig,""];const s=a.lan,l=(0,r.getFriendlyTitle)(!0),c={.6:e.VerySmall,.8:e.Small,1:e.Medium,1.3:e.Large,1.6:e.VeryLarge}[a.fontsize],d=parseInt(a.color).toString(16),{opacity:u}=a,f={bc:o.BottomCenter,bl:o.BottomLeft,br:o.BottomRight,tc:o.TopCenter,tl:o.TopLeft,tr:o.TopRight,"bottom-center":o.BottomCenter,"bottom-left":o.BottomLeft,"bottom-right":o.BottomRight,"top-center":o.TopCenter,"top-left":o.TopLeft,"top-right":o.TopRight}[a.position],p=i.query.video.element.sync();return[{title:l,height:p.videoHeight,width:p.videoWidth,color:d,location:f,opacity:u,size:c,boxPadding:1,boxMargin:32},s]},s=async(t,e)=>{const n=await(0,o.bilibiliApi)((0,o.getJsonWithCredentials)(`https://api.bilibili.com/x/player/wbi/v2?aid=${t}&cid=${e}`));return lodash.get(n,"subtitle.subtitles",[])},l=async function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{...lodash.pick(unsafeWindow,"aid","cid"),title:(0,r.getFriendlyTitle)(!0)};const{aid:l,cid:c}=e;if(!l||!c)throw new Error("未找到视频AID和CID");const d=await s(l,c);if(0===d.length)return i.Toast.info("当前视频没有字幕.","下载字幕",3e3),null;const[u,f]=await a(),p=d.find((t=>t.lan===f))||d[0],m=await(0,o.getJson)(p.subtitle_url),g=m.body;if("ass"===t){const{SubtitleConverter:t}=await Promise.resolve().then(n.bind(n,248)),o=new t({...u,title:e.title}),i=await o.convertToAss(g);return new Blob([i],{type:"text/ass"})}return new Blob([JSON.stringify(g,void 0,2)],{type:"text/json"})}},248:(t,e,n)=>{"use strict";function o(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,{SubtitleConverter:()=>a,SubtitleLocation:()=>i,SubtitleSize:()=>r});const i={TopLeft:7,TopCenter:8,TopRight:9,BottomLeft:1,BottomCenter:2,BottomRight:3};let r=function(t){return t[t.VerySmall=1]="VerySmall",t[t.Small=2]="Small",t[t.Medium=3]="Medium",t[t.Large=4]="Large",t[t.VeryLarge=5]="VeryLarge",t}({});class a{constructor(t){o(this,"config",void 0),this.config=Object.assign(a.defaultConfig,t)}async getAssMeta(){const{convertHexColorForStyle:t}=await Promise.resolve().then(n.t.bind(n,726,23)),e=t(this.config.color),o=t("#000000",this.config.opacity),r=[],a=(10*(this.config.size-3)+48)*this.config.height/720;console.log(a);for(const[t,n]of Object.entries(i))r.push(`Style: ${t},微软雅黑,${a},${e},${e},${o},${o},0,0,0,0,100,100,0,0,3,${this.config.boxPadding},0,${n},${this.config.boxMargin},${this.config.boxMargin},${this.config.boxMargin},0`);return`\n[Script Info]\n; Script generated by Bilibili Evolved Danmaku Converter\n; https://github.com/the1812/Bilibili-Evolved/\nTitle: ${this.config.title}\nScriptType: v4.00+\nPlayResX: ${this.config.width}\nPlayResY: ${this.config.height}\nTimer: 10.0000\nWrapStyle: 0\nScaledBorderAndShadow: no\n\n[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\n${r.join("\n")}\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text`.trim()}async convertToAss(t){const{convertTimeByEndTime:e,normalizeContent:o}=await Promise.resolve().then(n.t.bind(n,726,23));return`${await this.getAssMeta()}\n${t.map((t=>{const[n,r]=e(t.from,t.to);var a;return`Dialogue: 0,${n},${r},${a=this.config.location,Object.entries(i).filter((t=>{let[,e]=t;return e===a})).map((t=>{let[e]=t;return e})).shift()},,0,0,0,,${o(t.content)}`})).join("\n")}`}}o(a,"defaultConfig",void 0),a.defaultConfig={title:"",color:"#ffffff",width:1920,height:1080,size:r.Medium,opacity:.5,location:i.BottomCenter,boxPadding:1,boxMargin:32}},308:(t,e,n)=>{var o=n(218)((function(t){return t[1]}));o.push([t.id,".download-subtitle-config.download-video-config-section .be-dropdown {\n  text-transform: uppercase;\n}",""]),t.exports=o},218:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var i={};if(o)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},332:(t,e,n)=>{"use strict";var o,i=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},o=[],i=0;i<t.length;i++){var r=t[i],l=e.base?r[0]+e.base:r[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=s(d),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:v(f,e),references:1}),o.push(d)}return o}function c(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function f(t,e,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=u(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function p(t,e,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var m=null,g=0;function v(t,e){var n,o,i;if(e.singleton){var r=g++;n=m||(m=c(e)),o=f.bind(null,n,r,!1),i=f.bind(null,n,r,!0)}else n=c(e),o=p.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var i=s(n[o]);a[i].references--}for(var r=l(t,e),c=0;c<n.length;c++){var d=s(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=r}}}},626:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});var o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"multiple-widgets"},[e("DefaultWidget",{attrs:{disabled:t.disabled,name:"下载字幕 (JSON)",icon:"subtitle"},on:{click:function(e){return t.download("json")}}}),t._v(" "),e("DefaultWidget",{attrs:{disabled:t.disabled,name:"下载字幕 (ASS)",icon:"subtitle"},on:{click:function(e){return t.download("ass")}}})],1)};o._withStripped=!0;const i=coreApis.pluginApis.data;var r=n(648);const a=coreApis.utils.log;var s=n(674);const l=coreApis.download;var c=n(680);(0,i.addData)("ui.icons",(t=>{t.subtitle='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M4 4h14a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm5 5.5a1 1 0 100-2H6a2 2 0 00-2 2v3a2 2 0 002 2h3a1 1 0 000-2H7a1 1 0 01-1-1v-1a1 1 0 011-1h2zm8 0a1 1 0 000-2h-3a2 2 0 00-2 2v3a2 2 0 002 2h3a1 1 0 000-2h-2a1 1 0 01-1-1v-1a1 1 0 011-1h2z" fill-rule="evenodd"/></svg>'}));const d=Vue.extend({components:{DefaultWidget:r.DefaultWidget},data:()=>({disabled:!1}),methods:{async download(t){try{this.disabled=!0;const e=await(0,c.mE)(t);l.DownloadPackage.single(`${(0,s.getFriendlyTitle)(!0)}.${t}`,e)}catch(t){(0,a.logError)(t)}finally{this.disabled=!1}}}});const u=(0,n(893).Z)(d,o,[],!1,null,null,null).exports},535:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});var o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"download-subtitle-config download-video-config-section"},[e("div",{staticClass:"download-video-config-item"},[e("div",{staticClass:"download-video-config-title"},[t._v("字幕:")]),t._v(" "),e("VDropdown",{attrs:{items:t.items},scopedSlots:t._u([{key:"item",fn:function({item:e}){return[t._v("\n        "+t._s(e)+"\n      ")]}}]),model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)])};o._withStripped=!0;const i=coreApis.settings;var r=n(648);const a=(0,i.getComponentSettings)("downloadVideo").options,s=Vue.extend({components:{VDropdown:r.VDropdown},data:()=>({type:a.subtitleType??"无",items:["无","ass","json"]}),computed:{enabled(){return"无"!==this.type}},watch:{type(t){a.subtitleType=t}}});var l=n(332),c=n.n(l),d=n(308),u=n.n(d),f={insert:"head",singleton:!1};c()(u(),f);u().locals;const p=(0,n(893).Z)(s,o,[],!1,null,null,null).exports},893:(t,e,n)=>{"use strict";function o(t,e,n,o,i,r,a,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):i&&(l=s?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}n.d(e,{Z:()=>o})},673:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=673,t.exports=e},132:t=>{"use strict";t.exports="启用下载字幕支持, 在视频页面中可从功能面板里下载字幕. (AI 生成的不可下载)\n"},726:t=>{"use strict";t.exports=coreApis.componentApis.video.assUtils},833:t=>{"use strict";t.exports=coreApis.componentApis.video.playerAgent},391:t=>{"use strict";t.exports=coreApis.toast},648:t=>{"use strict";t.exports=coreApis.ui},674:t=>{"use strict";t.exports=coreApis.utils.title}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={id:t,exports:{}};return n[t](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,i.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var r=Object.create(null);i.r(r);var a={};t=t||[null,e({}),e([]),e(e)];for(var s=2&o&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((t=>a[t]=()=>n[t]));return a.default=()=>n,i.d(r,a),r},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{"use strict";i.d(r,{component:()=>s});const t=coreApis.componentApis.define,e=coreApis.spinQuery;var n=i(391);const o=coreApis.utils.urls;var a=i(680);const s=(0,t.defineComponentMetadata)({name:"downloadSubtitle",displayName:"下载字幕",tags:[componentsTags.video],entry:none,urlInclude:o.videoAndBangumiUrls,widget:{condition:e.hasVideo,component:()=>Promise.resolve().then(i.bind(i,626)).then((t=>t.default))},plugin:{displayName:"下载视频 - 下载字幕支持",setup:t=>{let{addData:e}=t;e("downloadVideo.assets",(async t=>{t.push({name:"downloadSubtitles",displayName:"下载字幕",getAssets:async(t,e)=>{const{type:o,enabled:i}=e;if(!i)return[];const r=n.Toast.info("获取字幕中...","下载字幕");let s=0;const l=await Promise.allSettled(t.map((async e=>{const n=await(0,a.mE)(o,e.input);return s++,r.message=`获取字幕中... (${s}/${t.length})`,{name:`${e.input.title}.${o}`,data:n}}))),c=l.filter((t=>"fulfilled"===t.status)),d=l.filter((t=>"rejected"===t.status));return r.message=`获取完成. 成功 ${c.length} 个, 失败 ${d.length} 个.`,c.map((t=>t.value))},component:()=>Promise.resolve().then(i.bind(i,535)).then((t=>t.default))})}))}},commitHash:"45fd78f0062595947393d1979fb929e4ac5cf75f",coreVersion:"2.9.3",description:(()=>{const t=i(673);return{...Object.fromEntries(t.keys().map((e=>[e.match(/index\.(.+)\.md$/)[1],t(e)]))),"zh-CN":()=>Promise.resolve().then(i.t.bind(i,132,17)).then((t=>t.default))}})()})})(),r=r.component})()));