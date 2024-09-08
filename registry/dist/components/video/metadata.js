!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/metadata"]=t():e["video/metadata"]=t()}(globalThis,(()=>(()=>{"use strict";var e={690:(e,t,n)=>{n.d(t,{component:()=>u,T:()=>d});const i=coreApis.componentApis.define,o=coreApis.spinQuery;var a=n(391);const s=coreApis.utils.urls;var r=n(926);const d="保存视频元数据",l="saveVideoMetadata",c=[{name:"WakelessSloth56",link:"https://github.com/WakelessSloth56"},{name:"LainIO24",link:"https://github.com/LainIO24"}],u=(0,i.defineComponentMetadata)({name:l,displayName:d,description:"保存视频元数据（标题、描述、UP、章节等）",author:c,tags:[componentsTags.video],entry:none,urlInclude:s.videoUrls,widget:{condition:o.hasVideo,component:()=>Promise.resolve().then(n.bind(n,908)).then((e=>e.default))},plugin:{displayName:`下载视频 - ${d}支持`,author:c,setup:e=>{let{addData:t}=e;t("downloadVideo.assets",(async e=>{e.push({name:l,displayName:d,getAssets:async(e,t)=>{const{type:n,enabled:i}=t;if(i){const t=a.Toast.info("获取视频元数据中...",d),i=[];for(const t of e)i.push({name:`${t.input.title}.${n}.txt`,data:await(0,r.a)(n,t.input.aid,t.input.cid),options:{}});return t.message="完成！",t.duration=1e3,i}return[]},component:()=>Promise.resolve().then(n.bind(n,198)).then((e=>e.default))})}))}},commitHash:"3d56cf2259272e9d1519bac8fbbe09edf5380adc",coreVersion:"2.9.2"})},926:(e,t,n)=>{n.d(t,{a:()=>_});const i=coreApis.componentApis.video.videoInfo,o=coreApis.ajax,a=coreApis.meta;var s=n(391),r=n(690);function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function c(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,p(e,t,"get"))}function u(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,p(e,t,"set"),n),n}function p(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function f(e){return e.replace(/[=;#\\\n]/g,(e=>`\\${e}`))}var v=new WeakMap,g=new WeakMap;class h{constructor(e,t){l(this,v,{writable:!0,value:void 0}),l(this,g,{writable:!0,value:void 0}),d(this,"basic",void 0),d(this,"viewPoints",void 0),d(this,"page",void 0),d(this,"quality",void 0),u(this,v,e),u(this,g,t),this.basic=new i.VideoInfo(e)}async fetch(){await this.basic.fetchInfo(),this.page=this.basic.pages.filter((e=>e.cid===parseInt(c(this,g))))[0];const e=await(0,o.bilibiliApi)((0,o.getJsonWithCredentials)(`https://api.bilibili.com/x/player/wbi/v2?aid=${c(this,v)}&cid=${c(this,g)}`));this.viewPoints=lodash.get(e,"view_points",[])}}async function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:unsafeWindow.aid,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:unsafeWindow.cid;const n=new h(e,t);return await n.fetch(),n}function b(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return`${n?"bilibili_":""}${e}=${f(lodash.toString(t))}`}async function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:unsafeWindow.aid,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:unsafeWindow.cid;const n=await m(e,t),i=n.basic,o=[";FFMETADATA1",`;generated by Bilibili-Evolved v${a.meta.compilationInfo.version}`,`;generated on ${(new Date).toLocaleString()}`,b("title",`${i.title} - ${n.page.title}`,!1),b("description",i.description,!1),b("artist",i.up.name,!1),b("title",i.title),b("description",i.description),b("publish_date",new Date(1e3*i.pubdate).toLocaleString()),b("aid",i.aid),b("bvid",i.bvid),b("cid",n.page.cid),b("category_id",i.tagId),b("category_name",i.tagName),b("page_title",n.page.title),b("page",n.page.pageNumber),b("pages",i.pages.length),b("up_name",i.up.name),b("up_uid",i.up.uid)];if(n.quality&&(o.push(b("quality",n.quality.value)),o.push(b("quality_label",n.quality.name))),n.viewPoints.length>0)for(const e of n.viewPoints)o.push("[CHAPTER]","TIMEBASE=1/1",b("START",e.from,!1),b("END",e.to,!1),b("title",e.content,!1));const s=o.join("\n");return console.debug(s),s}async function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:unsafeWindow.aid,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:unsafeWindow.cid;const{viewPoints:n}=await m(e,t);if(console.debug(n),n.length>0){const e=n.reduce(((e,t,n)=>{const i=`${n+1}`.padStart(3,"0");return[...e,`CHAPTER${i}=${new Date(1e3*t.from).toISOString().slice(11,-1)}`,`CHAPTER${i}NAME=${t.content}`]}),[]).join("\n");return console.debug(e),e}return s.Toast.info("此视频没有章节",r.T,3e3),null}async function _(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:unsafeWindow.aid,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:unsafeWindow.cid;if("ogm"===e)t=w;else t=y;return t(n,i)}},198:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"download-video-config-section"},[t("div",{staticClass:"download-video-config-item"},[t("div",[e._v("元数据：")]),e._v(" "),t("VDropdown",{attrs:{items:e.items},scopedSlots:e._u([{key:"item",fn:function({item:t}){return[e._v("\n        "+e._s(t)+"\n      ")]}}]),model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1)])};i._withStripped=!0;var o=n(648);const a=(0,coreApis.settings.getComponentSettings)("downloadVideo").options,s=Vue.extend({components:{VDropdown:o.VDropdown},data:()=>({type:a.metadataType??"无",items:["无","ffmetadata","ogm"]}),computed:{enabled(){return"无"!==this.type}},watch:{type(e){a.metadataType=e}}});const r=(0,n(893).Z)(s,i,[],!1,null,null,null).exports},908:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"multiple-widgets"},[t("DefaultWidget",{ref:"button",attrs:{disabled:e.disabled,name:"保存视频元数据",icon:"mdi-download"},on:{click:function(t){return e.run("ffmetadata")}}}),e._v(" "),t("DefaultWidget",{attrs:{disabled:e.disabled,name:"保存视频章节",icon:"mdi-download"},on:{click:function(t){return e.run("ogm")}}})],1)};i._withStripped=!0;var o=n(648);const a=coreApis.utils.log,s=coreApis.download,r=coreApis.utils.title;var d=n(926);const l=Vue.extend({components:{DefaultWidget:o.DefaultWidget},data:()=>({disabled:!1}),methods:{async run(e){try{this.disabled=!0,s.DownloadPackage.single(`${(0,r.getFriendlyTitle)(!0)}.${e}.txt`,await(0,d.a)(e))}catch(e){(0,a.logError)(e)}finally{this.disabled=!1}}}});const c=(0,n(893).Z)(l,i,[],!1,null,null,null).exports},893:(e,t,n)=>{function i(e,t,n,i,o,a,s,r){var d,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),s?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=d):o&&(d=r?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(e,t){return d.call(t),c(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,d):[d]}return{exports:e,options:l}}n.d(t,{Z:()=>i})},391:e=>{e.exports=coreApis.toast},648:e=>{e.exports=coreApis.ui}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i=n(690);return i=i.component})()));