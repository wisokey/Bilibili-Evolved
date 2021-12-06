!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/subtitle/download"]=e():t["video/subtitle/download"]=e()}(self,(function(){return function(){var t,e,n={753:function(t,e,n){"use strict";n.d(e,{mE:function(){return l}});var i=coreApis.ajax,o=n(141),r=coreApis.utils.lazyPanel,a=n(729),s=n(129);const l=async(t,e={...lodash.pick(unsafeWindow,"aid","cid"),title:(0,s.getFriendlyTitle)(!0)})=>{const{aid:l,cid:c}=e;if(!l||!c)throw new Error("未找到视频AID和CID");const u=await(async(t,e)=>{const{VideoInfo:i}=await Promise.resolve().then(n.t.bind(n,705,23)),o=new i(t);return o.cid="string"==typeof e?parseInt(e):e,await o.fetchInfo(),o.subtitles})(l,c);if(0===u.length)return o.Toast.info("当前视频没有字幕.","下载字幕",3e3),null;const[d,f]=await(async()=>{const{SubtitleConverter:t,SubtitleSize:e,SubtitleLocation:i}=await Promise.resolve().then(n.bind(n,283)),o=await(0,r.loadSubtitleSettingsPanel)();if(!o)return(0,a.logError)("未找到字幕设置"),[t.defaultConfig,""];const l=o.querySelector(".bilibili-player-video-subtitle-setting-lan .bui-select-result").innerHTML,c=(0,s.getFriendlyTitle)(!0),u=o.querySelector(".bilibili-player-video-subtitle-setting-fontsize .bui-thumb"),d=parseFloat(u.style.transform.replace(/translateX\(([\d\.]+)/,"$1")),f={214:e.VeryLarge,163.5:e.Large,107:e.Medium,50.5:e.Small,0:e.VerySmall}[d],p=o.querySelector(".bilibili-player-video-subtitle-setting-color .bui-select-result span:first-child").getAttribute("style").match(/background:[ ]*(.+);/)[1],g=o.querySelector(".bilibili-player-video-subtitle-setting-opacity .bui-bar"),v=parseFloat(g.style.transform.replace(/scaleX\(([\d\.]+)/,"$1")),h=dq(".subtitle-position"),m={bc:i.BottomCenter,bl:i.BottomLeft,br:i.BottomRight,tc:i.TopCenter,tl:i.TopLeft,tr:i.TopRight},b=Object.entries(m).filter((([t])=>h.classList.contains(`subtitle-position-${t}`))).map((([,t])=>t)).shift(),y=dq("video");return[{title:c,height:y.videoHeight,width:y.videoWidth,color:p,location:b,opacity:v,size:f,boxPadding:1,boxMargin:32},l]})(),p=u.find((t=>t.language===f))||u[0],g=(await(0,i.getJson)(p.url)).body;switch(t){case"ass":{const{SubtitleConverter:t}=await Promise.resolve().then(n.bind(n,283)),i=new t({...d,title:e.title}),o=await i.convertToAss(g);return new Blob([o],{type:"text/ass"})}default:case"json":return new Blob([JSON.stringify(g)],{type:"text/json"})}}},283:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,{SubtitleLocation:function(){return o},SubtitleSize:function(){return r},SubtitleConverter:function(){return a}});const o={TopLeft:7,TopCenter:8,TopRight:9,BottomLeft:1,BottomCenter:2,BottomRight:3};let r;!function(t){t[t.VerySmall=1]="VerySmall",t[t.Small=2]="Small",t[t.Medium=3]="Medium",t[t.Large=4]="Large",t[t.VeryLarge=5]="VeryLarge"}(r||(r={}));class a{constructor(t){i(this,"config",void 0),this.config=Object.assign(a.defaultConfig,t)}async getAssMeta(){const{convertHexColorForStyle:t}=await Promise.resolve().then(n.t.bind(n,740,23)),e=t(this.config.color),i=t("#000000",this.config.opacity),r=[],a=(10*(this.config.size-3)+48)*this.config.height/720;console.log(a);for(const[t,n]of Object.entries(o))r.push(`Style: ${t},微软雅黑,${a},${e},${e},${i},${i},0,0,0,0,100,100,0,0,3,${this.config.boxPadding},0,${n},${this.config.boxMargin},${this.config.boxMargin},${this.config.boxMargin},0`);return`\n[Script Info]\n; Script generated by Bilibili Evolved Danmaku Converter\n; https://github.com/the1812/Bilibili-Evolved/\nTitle: ${this.config.title}\nScriptType: v4.00+\nPlayResX: ${this.config.width}\nPlayResY: ${this.config.height}\nTimer: 10.0000\nWrapStyle: 0\nScaledBorderAndShadow: no\n\n[V4+ Styles]\nFormat: Name, Fontname, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\n${r.join("\n")}\n\n[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text`.trim()}async convertToAss(t){const{convertTimeByEndTime:e,normalizeContent:i}=await Promise.resolve().then(n.t.bind(n,740,23));return`${await this.getAssMeta()}\n${t.map((t=>{const[n,r]=e(t.from,t.to);var a;return`Dialogue: 0,${n},${r},${a=this.config.location,Object.entries(o).filter((([,t])=>t===a)).map((([t])=>t)).shift()},,0,0,0,,${i(t.content)}`})).join("\n")}`}}i(a,"defaultConfig",void 0),a.defaultConfig={title:"",color:"#ffffff",width:1920,height:1080,size:r.Medium,opacity:.5,location:o.BottomCenter,boxPadding:1,boxMargin:32}},937:function(t,e,n){var i=n(645)((function(t){return t[1]}));i.push([t.id,".download-subtitle-config.download-video-config-section .be-dropdown {\n  text-transform: uppercase;\n}",""]),t.exports=i},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,i){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},379:function(t,e,n){"use strict";var i,o=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},i=[],o=0;o<t.length;o++){var r=t[o],l=e.base?r[0]+e.base:r[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=s(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:h(f,e),references:1}),i.push(u)}return i}function c(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function p(t,e,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var g=null,v=0;function h(t,e){var n,i,o;if(e.singleton){var r=v++;n=g||(g=c(e)),i=f.bind(null,n,r,!1),o=f.bind(null,n,r,!0)}else n=c(e),i=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var o=s(n[i]);a[o].references--}for(var r=l(t,e),c=0;c<n.length;c++){var u=s(n[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=r}}}},321:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multiple-widgets"},[n("DefaultWidget",{attrs:{disabled:t.disabled,name:"下载字幕 (JSON)",icon:"subtitle"},on:{click:function(e){return t.download("json")}}}),t._v(" "),n("DefaultWidget",{attrs:{disabled:t.disabled,name:"下载字幕 (ASS)",icon:"subtitle"},on:{click:function(e){return t.download("ass")}}})],1)};i._withStripped=!0;var o=coreApis.pluginApis.data,r=n(643),a=n(729),s=n(129),l=coreApis.download,c=n(753);(0,o.addData)("ui.icons",(t=>{t.subtitle='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M4 4h14a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm5 5.5a1 1 0 100-2H6a2 2 0 00-2 2v3a2 2 0 002 2h3a1 1 0 000-2H7a1 1 0 01-1-1v-1a1 1 0 011-1h2zm8 0a1 1 0 000-2h-3a2 2 0 00-2 2v3a2 2 0 002 2h3a1 1 0 000-2h-2a1 1 0 01-1-1v-1a1 1 0 011-1h2z" fill-rule="evenodd"/></svg>'}));var u=Vue.extend({components:{DefaultWidget:r.DefaultWidget},data:()=>({disabled:!1}),methods:{async download(t){try{this.disabled=!0;const e=await(0,c.mE)(t);l.DownloadPackage.single(`${(0,s.getFriendlyTitle)(!0)}.${t}`,e)}catch(t){(0,a.logError)(t)}finally{this.disabled=!1}}}}),d=(0,n(900).Z)(u,i,[],!1,null,null,null);d.options.__file="registry/lib/components/video/subtitle/download/DownloadSubtitle.vue";var f=d.exports},623:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"download-subtitle-config download-video-config-section"},[n("div",{staticClass:"download-video-config-item"},[n("div",{staticClass:"download-video-config-title"},[t._v("\n      字幕:\n    ")]),t._v(" "),n("VDropdown",{attrs:{items:t.items},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n)+"\n      ")]}}]),model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1)])};i._withStripped=!0;var o=coreApis.settings,r=n(643);const a=(0,o.getComponentSettings)("downloadVideo").options;var s=Vue.extend({components:{VDropdown:r.VDropdown},data:()=>({type:a.subtitleType??"无",items:["无","ass","json"]}),computed:{enabled(){return"无"!==this.type}},watch:{type(t){a.subtitleType=t}}}),l=n(379),c=n.n(l),u=n(937),d=n.n(u),f={insert:"head",singleton:!1},p=(c()(d(),f),d().locals,(0,n(900).Z)(s,i,[],!1,null,null,null));p.options.__file="registry/lib/components/video/subtitle/download/Plugin.vue";var g=p.exports},900:function(t,e,n){"use strict";function i(t,e,n,i,o,r,a,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):o&&(l=s?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}n.d(e,{Z:function(){return i}})},740:function(t){"use strict";t.exports=coreApis.componentApis.video.assUtils},705:function(t){"use strict";t.exports=coreApis.componentApis.video.videoInfo},141:function(t){"use strict";t.exports=coreApis.toast},643:function(t){"use strict";t.exports=coreApis.ui},729:function(t){"use strict";t.exports=coreApis.utils.log},129:function(t){"use strict";t.exports=coreApis.utils.title}},i={};function o(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={id:t,exports:{}};return n[t](r,r.exports,o),r.exports}o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},o.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"==typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"==typeof n.then)return n}var r=Object.create(null);o.r(r);var a={};t=t||[null,e({}),e([]),e(e)];for(var s=2&i&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){a[t]=function(){return n[t]}}));return a.default=function(){return n},o.d(r,a),r},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return function(){"use strict";o.d(r,{component:function(){return a}});var t=coreApis.spinQuery,e=o(141),n=coreApis.utils.urls,i=o(753);const a={name:"downloadSubtitle",displayName:"下载字幕",description:{"zh-CN":"启用下载字幕支持, 在视频页面中可从功能面板里下载字幕."},tags:[componentsTags.video],entry:none,urlInclude:n.videoUrls,widget:{condition:t.hasVideo,component:()=>Promise.resolve().then(o.bind(o,321)).then((t=>t.default))},plugin:{displayName:"下载视频 - 下载字幕支持",setup:({addData:t})=>{t("downloadVideo.assets",(async t=>{t.push({name:"downloadSubtitles",displayName:"下载字幕",getAssets:async(t,n)=>{const{type:o,enabled:r}=n;if(!r)return[];const a=e.Toast.info("获取字幕中...","下载字幕");let s=0;const l=await Promise.allSettled(t.map((async e=>{const n=await(0,i.mE)(o,e.input);return s++,a.message=`获取字幕中... (${s}/${t.length})`,{name:`${e.input.title}.${o}`,data:n}}))),c=l.filter((t=>"fulfilled"===t.status)),u=l.filter((t=>"rejected"===t.status));return a.message=`获取完成. 成功 ${c.length} 个, 失败 ${u.length} 个.`,c.map((t=>t.value))},component:()=>Promise.resolve().then(o.bind(o,623)).then((t=>t.default))})}))}},commitHash:"cf8b483555a7c0450a216cdcdc325d577f4790e6"}}(),r=r.component}()}));