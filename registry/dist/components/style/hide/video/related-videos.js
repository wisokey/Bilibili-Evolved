!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/hide/video/related-videos"]=e():t["style/hide/video/related-videos"]=e()}(self,(function(){return function(){var t,e,n={632:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,"#recom_module,\n#reco_list,\n.bilibili-player-ending-panel-box-videos,\n.r-con .rcmd-list {\n  display: none !important;\n}\n\n.bilibili-player-ending-panel-box-functions .bilibili-player-upinfo-spans {\n  position: static !important;\n}\n\n.bilibili-player-ending-panel-box {\n  display: flex !important;\n  justify-content: center !important;\n  flex-direction: column !important;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var u=0;u<t.length;u++){var a=[].concat(t[u]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),e.push(a))}},e}},32:function(t,e,n){var o=n(632);t.exports="string"==typeof o?o:o.toString()}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var c={};t=t||[null,e({}),e([]),e(e)];for(var u=2&o&&n;"object"==typeof u&&!~t.indexOf(u);u=e(u))Object.getOwnPropertyNames(u).forEach((function(t){c[t]=function(){return n[t]}}));return c.default=function(){return n},r.d(i,c),i},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return e}});var t=coreApis.utils.urls;const e={name:"hideRelatedVideos",displayName:"隐藏视频推荐",entry:none,instantStyles:[{name:"hideRelatedVideos",style:()=>Promise.resolve().then(r.t.bind(r,32,23))}],tags:[componentsTags.style,componentsTags.video],description:{"zh-CN":"隐藏番剧和视频页面右侧的推荐视频列表. 注意: 如果你想关闭 b 站的自动连播 (自动播放下一个推荐视频) 功能, 需要先取消隐藏视频推荐才能看到开关."},urlInclude:t.videoAndBangumiUrls,commitHash:"cf8b483555a7c0450a216cdcdc325d577f4790e6"}}(),i=i.component}()}));