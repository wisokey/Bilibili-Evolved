!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/custom-font-family"]=e():t["style/custom-font-family"]=e()}(globalThis,(()=>(()=>{var t,e,n={681:(t,e,n)=>{var o=n(218)((function(t){return t[1]}));o.push([t.id,".custom-font-family-extra-options-entry {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}",""]),t.exports=o},787:(t,e,n)=>{var o=n(218)((function(t){return t[1]}));o.push([t.id,".custom-font-family-extra-options-panel.extra-options-panel {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  max-height: 80vh;\n  padding: 22px 0;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) scale(0.95);\n  transition: all 0.2s ease-out;\n  font-size: 14px;\n  z-index: 100002;\n}\nbody.dark .custom-font-family-extra-options-panel.extra-options-panel {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .custom-font-family-extra-options-panel.extra-options-panel {\n  background-color: #282828;\n  color: #eee;\n}\nbody.dark .custom-font-family-extra-options-panel.extra-options-panel {\n  background-color: #222;\n}\n.custom-font-family-extra-options-panel.extra-options-panel.open {\n  transform: translateX(-50%) translateY(-50%) scale(1);\n}\n.custom-font-family-extra-options-panel.extra-options-panel.peek {\n  opacity: 0.1;\n}\n.custom-font-family-extra-options-panel.extra-options-panel > .eop-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 22px 18px 22px;\n  flex-shrink: 0;\n}\n.custom-font-family-extra-options-panel.extra-options-panel > .eop-header > .eop-h-left {\n  display: flex;\n  column-gap: 4px;\n}\n.custom-font-family-extra-options-panel.extra-options-panel > .eop-header > .eop-h-left > .eop-h-l-title {\n  font-weight: 600;\n  font-size: 19px;\n  line-height: 20px;\n}\n.custom-font-family-extra-options-panel.extra-options-panel > .eop-header > .eop-h-right {\n  display: flex;\n  column-gap: 20px;\n}\n.custom-font-family-extra-options-panel.extra-options-panel > .eop-header > .eop-h-right > [class*=eop-h-r] {\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n}\n.custom-font-family-extra-options-panel.extra-options-panel > .eop-header > .eop-h-right > [class*=eop-h-r]:hover {\n  color: var(--theme-color);\n}\n.custom-font-family-extra-options-panel.extra-options-panel > .eop-separator {\n  height: 1px;\n  margin: 0 22px;\n  background: rgba(0, 0, 0, 0.1);\n  flex-shrink: 0;\n}\nbody.dark .custom-font-family-extra-options-panel.extra-options-panel > .eop-separator {\n  background: rgba(255, 255, 255, 0.1);\n}\n.custom-font-family-extra-options-panel.extra-options-panel > .eop-content {\n  padding: 0 22px;\n  overflow: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.custom-font-family-extra-options-panel.extra-options-panel > .eop-content > .eop-c-section {\n  margin: 18px 0;\n}\n.custom-font-family-extra-options-panel.extra-options-panel > .eop-content > .eop-c-section:nth-child(1):nth-last-child(1) {\n  margin-bottom: 12px;\n}\n.custom-font-family-extra-options-panel.extra-options-panel > .eop-content > .eop-c-section > .eop-c-s-title {\n  margin-bottom: 2px;\n  font-size: 14px;\n}\n.custom-font-family-extra-options-panel.extra-options-panel > .eop-content > .eop-c-section > .eop-c-s-description {\n  margin-bottom: 8px;\n  opacity: 0.6;\n  font-size: 12px;\n}\n.custom-font-family-extra-options-panel.extra-options-panel > .eop-content > .eop-c-section > .eop-c-s-input {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.custom-font-family-extra-options-panel > .eop-content > .eop-c-section > .eop-c-s-input.input-font-family .be-text-area {\n  min-height: 160px;\n}",""]),t.exports=o},633:(t,e,n)=>{var o=n(218)((function(t){return t[1]}));o.push([t.id,'@charset "UTF-8";\nhtml[custom-font-family--options--disable-quotation-mark-text-indent=true] :is(p[title^=「],\np[title^=『],\np[title^=【],\nh1[title^=「],\nh1[title^=『],\nh1[title^=【],\nh3[title^=「],\nh3[title^=『],\nh3[title^=【]) {\n  text-indent: initial !important;\n}',""]),t.exports=o},150:(t,e,n)=>{var o=n(218)((function(t){return t[1]}));o.push([t.id,"html[custom-font-family--detect--is-input-empty=false] :not(.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-text .sailing-text, .bili-dyn-ornament__type--3 span, .bb-comment .sailing .sailing-info, .comment-bilibili-fold .sailing .sailing-info, .badge-level, .bili-dm, .iconfont, .icon-font, .read-icon, .bili-note-iconfont, .bili-footer-font, [class^=icon-], .bilifont, .bp-icon-font, .bcc-iconfont, .fontvt, .article-detail .article-container .article-container__content .article-content .read-article-holder, .article-detail .article-container .article-container__content .article-content .read-article-holder *, .season-cover .score, .season-cover .season-cover-score) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--on-ornament=true] :is(.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-text .sailing-text, .bili-dyn-ornament__type--3 span, .bb-comment .sailing .sailing-info, .comment-bilibili-fold .sailing .sailing-info) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--on-fans-medal=true] :is(.badge-level) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--on-danmaku=true] :is(.bili-dm) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--on-icon-font=true] :is(.iconfont, .icon-font, .read-icon, .bili-note-iconfont, .bili-footer-font, [class^=icon-], .bilifont, .bp-icon-font, .bcc-iconfont, .fontvt) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--on-column=true] :is(.article-detail .article-container .article-container__content .article-content .read-article-holder, .article-detail .article-container .article-container__content .article-content .read-article-holder *) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--on-score=true] :is(.season-cover .score, .season-cover .season-cover-score) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}",""]),t.exports=o},218:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var i={};if(o)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var s=this[a][0];null!=s&&(i[s]=!0)}for(var r=0;r<t.length;r++){var l=[].concat(t[r]);o&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},186:(t,e,n)=>{"use strict";n.d(e,{n:()=>o});const o="Microsoft Yahei, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei"},142:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});var o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"custom-font-family-extra-options-entry"},[e("VButton",{ref:"button",on:{mouseover:function(e){return t.loadExtraOptions()},click:function(e){return t.toggleExtraOptionsDisplay()}}},[t._v("\n    字体设置"),e("VIcon",{attrs:{icon:"right-arrow",size:16}})],1)],1)};o._withStripped=!0;var i=n(309),a=n(648),s=n(605);let r;const l=(0,i.defineComponent)({components:{VIcon:a.VIcon,VButton:a.VButton},methods:{async loadExtraOptions(){if(!await(async()=>Boolean(r))()){await(async()=>{const t=await Promise.resolve().then(n.bind(n,592)).then((t=>t.default));r=(0,s.mountVueComponent)(t),document.body.insertAdjacentElement("beforeend",r.$el)})();const e=this.$refs.button.$el;t=e,r.triggerElement=t}var t},toggleExtraOptionsDisplay:async()=>{r.popupOpen=!r.popupOpen}}});var c=n(332),p=n.n(c),f=n(681),u=n.n(f),m={insert:"head",singleton:!1};p()(u(),m);u().locals;const d=(0,n(499).Z)(l,o,[],!1,null,null,null).exports},592:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>h});var o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("VPopup",{ref:"popup",staticClass:"custom-font-family-extra-options-panel extra-options-panel",class:{peek:t.isPeeking},attrs:{fixed:"",lazy:!1,"trigger-element":t.triggerElement},model:{value:t.popupOpen,callback:function(e){t.popupOpen=e},expression:"popupOpen"}},[e("div",{staticClass:"eop-header"},[e("div",{staticClass:"eop-h-left"},[e("VIcon",{staticClass:"eop-h-l-symbol",attrs:{icon:"mdi-format-font",size:24}}),t._v(" "),e("div",{staticClass:"eop-h-l-title"},[t._v("字体设置")])],1),t._v(" "),e("div",{staticClass:"eop-h-right"},[e("VIcon",{staticClass:"eop-h-r-reset",attrs:{title:"重置面板中的所有选项为默认值",icon:"mdi-cog-sync-outline",size:24},on:{click:function(e){return t.confirmResetOptions()}}}),t._v(" "),e("VIcon",{staticClass:"eop-h-r-peek",attrs:{title:"透视",icon:"mdi-eye-outline",size:24},on:{mouseover:function(e){t.mouseOnPeekIcon=!0},mouseout:function(e){t.mouseOnPeekIcon=!1}}}),t._v(" "),e("VIcon",{staticClass:"eop-h-r-close",attrs:{title:"关闭",icon:"mdi-close",size:24},on:{click:function(e){t.popupOpen=!1}}})],1)]),t._v(" "),e("div",{staticClass:"eop-separator"}),t._v(" "),e("div",{staticClass:"eop-content"},[e("div",{staticClass:"eop-c-section"},[e("div",{staticClass:"eop-c-s-title"},[t._v("自定义字体")]),t._v(" "),e("div",{staticClass:"eop-c-s-description"},[t._v("输入字体，不同字体之间必须以英文逗号分隔")]),t._v(" "),e("div",{staticClass:"eop-c-s-input input-font-family"},[e("TextArea",{model:{value:t.inputFontFamily,callback:function(e){t.inputFontFamily=e},expression:"inputFontFamily"}})],1)])])])};o._withStripped=!0;var i=n(309),a=n(648),s=n(986),r=n(605);const l=coreApis.utils.log;var c=n(186);const p=(0,i.defineComponent)({components:{VPopup:a.VPopup,VIcon:a.VIcon,TextArea:a.TextArea},props:{triggerElement:{type:HTMLElement,default:null}},data:()=>({popupOpen:!1,isPeeking:!1,mouseOnPeekIcon:!1,inputFontFamily:(0,s.getComponentSettings)("customFontFamily").options.fontFamily}),watch:{inputFontFamily:lodash.debounce((t=>{(0,s.getComponentSettings)("customFontFamily").options.fontFamily=t}),500),async mouseOnPeekIcon(t){t?(t&&await(0,r.delay)(200),this.mouseOnPeekIcon&&(this.isPeeking=!0)):this.isPeeking=!1}},methods:{confirmResetOptions(){confirm("确定将面板中的所有选项重置为默认值吗？")&&this.resetOptions()},resetOptions(){(0,s.getComponentSettings)("customFontFamily").options.fontFamily=c.n,this.inputFontFamily=c.n;(0,l.useScopedConsole)("自定义字体").log("已将字体设置面板中的所有选项重置为默认值")}}});var f=n(332),u=n.n(f),m=n(787),d=n.n(m),y={insert:"head",singleton:!1};u()(d(),y);d().locals;const h=(0,n(499).Z)(p,o,[],!1,null,null,null).exports},499:(t,e,n)=>{"use strict";function o(t,e,n,o,i,a,s,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=r?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var p=c.render;c.render=function(t,e){return l.call(e),p(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:c}}n.d(e,{Z:()=>o})},332:(t,e,n)=>{"use strict";var o,i=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),s=[];function r(t){for(var e=-1,n=0;n<s.length;n++)if(s[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},o=[],i=0;i<t.length;i++){var a=t[i],l=e.base?a[0]+e.base:a[0],c=n[l]||0,p="".concat(l," ").concat(c);n[l]=c+1;var f=r(p),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(s[f].references++,s[f].updater(u)):s.push({identifier:p,updater:h(u,e),references:1}),o.push(p)}return o}function c(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var s=a(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var p,f=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function u(t,e,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=f(e,i);else{var a=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(a,s[e]):t.appendChild(a)}}function m(t,e,n){var o=n.css,i=n.media,a=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var d=null,y=0;function h(t,e){var n,o,i;if(e.singleton){var a=y++;n=d||(d=c(e)),o=u.bind(null,n,a,!1),i=u.bind(null,n,a,!0)}else n=c(e),o=m.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var i=r(n[o]);s[i].references--}for(var a=l(t,e),c=0;c<n.length;c++){var p=r(n[c]);0===s[p].references&&(s[p].updater(),s.splice(p,1))}n=a}}}},53:(t,e,n)=>{var o=n(633);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},143:(t,e,n)=>{var o=n(150);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},309:t=>{"use strict";t.exports=globalThis.Vue},986:t=>{"use strict";t.exports=coreApis.settings},648:t=>{"use strict";t.exports=coreApis.ui},605:t=>{"use strict";t.exports=coreApis.utils}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var a=o[t]={id:t,exports:{}};return n[t](a,a.exports,i),a.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,i.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var a=Object.create(null);i.r(a);var s={};t=t||[null,e({}),e([]),e(e)];for(var r=2&o&&n;"object"==typeof r&&!~t.indexOf(r);r=e(r))Object.getOwnPropertyNames(r).forEach((t=>s[t]=()=>n[t]));return s.default=()=>n,i.d(a,s),a},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};return(()=>{"use strict";i.d(a,{component:()=>f});const t=coreApis.componentApis.define;var e=i(986),n=i(186);const o=document.documentElement,s="custom-font-family",r="customFontFamily",l=[componentsTags.style,componentsTags.general],c={fontFamily:{displayName:"字体",defaultValue:n.n,hidden:!0},disableQuotationMarkTextIndent:{displayName:"禁用引号缩进",defaultValue:!0},onOrnament:{displayName:"覆盖装扮字体",defaultValue:!1},onFansMedal:{displayName:"覆盖粉丝勋章字体",defaultValue:!1},onDanmaku:{displayName:"覆盖弹幕字体",defaultValue:!1},onIconFont:{displayName:"覆盖图标字体",defaultValue:!1},onColumn:{displayName:"覆盖专栏自定义字体",defaultValue:!1},onScore:{displayName:"覆盖评分字体",defaultValue:!1}},p=[{name:"customFontFamily--style--setFontFamily",style:()=>Promise.resolve().then(i.t.bind(i,143,23)),important:!0},{name:"customFontFamily--style--disableQuotationMarkTextIndent",style:()=>Promise.resolve().then(i.t.bind(i,53,23)),important:!0}],f=(0,t.defineComponentMetadata)({name:r,displayName:"自定义字体",description:{"zh-CN":"使用组件提供的字体设置覆盖原版的主站字体，并使主站字体可被自定义。字体设置写法请参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family) 、默认设置与设置说明"},tags:l,entry:()=>{(0,e.addComponentListener)("customFontFamily.fontFamily",(t=>{t?(o.style.setProperty(`--${s}--options--font-family`,`${t}`),o.setAttribute(`${s}--detect--is-input-empty`,"false")):o.setAttribute(`${s}--detect--is-input-empty`,"true")}),!0),(0,e.addComponentListener)("customFontFamily.disableQuotationMarkTextIndent",(t=>{o.setAttribute(`${s}--options--disable-quotation-mark-text-indent`,`${t}`)}),!0);[{camel:"onOrnament",kebab:"on-ornament"},{camel:"onFansMedal",kebab:"on-fans-medal"},{camel:"onDanmaku",kebab:"on-danmaku"},{camel:"onIconFont",kebab:"on-icon-font"},{camel:"onColumn",kebab:"on-column"},{camel:"onScore",kebab:"on-score"}].forEach((t=>{(0,e.addComponentListener)(`customFontFamily.${t.camel}`,(e=>{o.setAttribute(`${s}--options--${t.kebab}`,`${e}`)}),!0)}))},options:c,extraOptions:()=>Promise.resolve().then(i.bind(i,142)).then((t=>t.default)),instantStyles:p,author:{name:"Tinhone",link:"https://github.com/Tinhone"},commitHash:"10300c16bb881eed2e5693d2a1ecf93ab6c272b6",coreVersion:"2.8.5"})})(),a=a.component})()));