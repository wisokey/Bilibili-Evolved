!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/custom-font-family"]=e():t["style/custom-font-family"]=e()}(globalThis,(()=>(()=>{var t,e,n={447:(t,e,n)=>{"use strict";n.d(e,{nF:()=>i,nY:()=>o,p_:()=>a});const o="Microsoft Yahei, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Heiti SC, Malgun Gothic",i=[{camel:"coverOrnament",kebab:"cover-ornament",display:"装扮字体"},{camel:"coverFansMedal",kebab:"cover-fans-medal",display:"粉丝勋章字体"},{camel:"coverDanmaku",kebab:"cover-danmaku",display:"弹幕字体"},{camel:"coverIconFont",kebab:"cover-icon-font",display:"图标字体"},{camel:"coverColumn",kebab:"cover-column",display:"专栏自定义字体"},{camel:"coverScore",kebab:"cover-score",display:"评分字体"}],a={coverOrnament:!1,coverFansMedal:!1,coverDanmaku:!1,coverIconFont:!1,coverColumn:!1,coverScore:!1}},468:(t,e,n)=>{var o=n(218)((function(t){return t[1]}));o.push([t.id,".custom-font-family-extra-options-entry {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}",""]),t.exports=o},982:(t,e,n)=>{var o=n(218)((function(t){return t[1]}));o.push([t.id,".be-extra-options-panel.be-extra-options-panel {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  border: 1px solid rgba(136, 136, 136, 0.1333333333);\n  box-sizing: border-box;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  max-width: 80vw;\n  max-height: 80vh;\n  padding: 18px 0;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) scale(0.95);\n  transition: all 0.2s ease-out;\n  font-size: 14px;\n  line-height: normal;\n  z-index: 100002;\n}\nbody.dark .be-extra-options-panel.be-extra-options-panel {\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .be-extra-options-panel.be-extra-options-panel {\n  background-color: #282828;\n  color: #eee;\n}\nbody.dark .be-extra-options-panel.be-extra-options-panel {\n  background-color: #222;\n}\n.be-extra-options-panel.be-extra-options-panel.open {\n  transform: translateX(-50%) translateY(-50%) scale(1);\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 18px 14px 18px;\n  flex-shrink: 0;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-header > .be-eop-h-title {\n  display: flex;\n  column-gap: 4px;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-header > .be-eop-h-title > .be-eop-h-t-text {\n  font-weight: 600;\n  font-size: 19px;\n  line-height: 20px;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-header > .be-eop-h-actions {\n  display: flex;\n  column-gap: 18px;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-header > .be-eop-h-actions > .be-eop-h-a-action {\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-header > .be-eop-h-actions > .be-eop-h-a-action:hover {\n  color: var(--theme-color);\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-separator {\n  height: 1px;\n  margin: 0 18px;\n  background-color: rgba(0, 0, 0, 0.1);\n  flex-shrink: 0;\n}\nbody.dark .be-extra-options-panel.be-extra-options-panel > .be-eop-separator {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-content {\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n  padding: 14px 18px 0 18px;\n  overflow: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-content::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-content > .be-eop-c-option {\n  margin-bottom: 18px;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-content > .be-eop-c-option:nth-last-child(1) {\n  margin-bottom: 12px;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-content > .be-eop-c-option > .be-eop-c-o-title {\n  margin-bottom: 2px;\n  font-size: 14px;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-content > .be-eop-c-option > .be-eop-c-o-description {\n  margin-bottom: 8px;\n  opacity: 0.6;\n  font-size: 12px;\n}\n.be-extra-options-panel.be-extra-options-panel > .be-eop-content > .be-eop-c-option > .be-eop-c-o-input {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}",""]),t.exports=o},440:(t,e,n)=>{var o=n(218)((function(t){return t[1]}));o.push([t.id,".custom-font-family-extra-options-panel.peek {\n  opacity: 0.1;\n}\n.custom-font-family-extra-options-panel > .be-eop-content > .be-eop-c-option > .be-eop-c-o-input.input-input-font-family > .be-text-area {\n  min-height: 160px;\n}",""]),t.exports=o},157:(t,e,n)=>{var o=n(218)((function(t){return t[1]}));o.push([t.id,".switch-options-min {\n  position: relative;\n  --columns: 1;\n  width: 100%;\n}\n.switch-options-min .switch-icon {\n  margin-right: 8px;\n  transform: scale(0.9);\n}\n.switch-options-min .dim {\n  opacity: 0.5;\n}\n.switch-options-min > .switch-options-min-grid {\n  font-size: 12px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 50%);\n}",""]),t.exports=o},129:(t,e,n)=>{var o=n(218)((function(t){return t[1]}));o.push([t.id,'@charset "UTF-8";\nhtml[custom-font-family--options--disable-title-punctuation-text-indent=true] :is(p[title^=「],\np[title^=『],\np[title^=【],\nh1[title^=「],\nh1[title^=『],\nh1[title^=【],\nh3[title^=「],\nh3[title^=『],\nh3[title^=【],\np[title^=～],\nh3[title^=～],\np[title^=《],\nh3[title^=《],\np[title^=“],\nh3[title^=“],\np[title^=～],\nh3[title^=～],\np[title^=《],\nh3[title^=《]) {\n  text-indent: initial !important;\n}',""]),t.exports=o},854:(t,e,n)=>{var o=n(218)((function(t){return t[1]}));o.push([t.id,"html[custom-font-family--detect--is-input-empty=false] :not(.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-text .sailing-text, .bili-dyn-ornament__type--3 span, .bb-comment .sailing .sailing-info, .comment-bilibili-fold .sailing .sailing-info, .badge-level, .bili-dm, .iconfont, .icon-font, .read-icon, .bili-note-iconfont, .bili-footer-font, [class^=icon-], .bilifont, .bp-icon-font, .bcc-iconfont, .fontvt, span.quick-favorite.be-quick-favorite > i.quick-favorite-icon.icon, .article-detail .article-container .article-container__content .article-content .read-article-holder, .article-detail .article-container .article-container__content .article-content .read-article-holder *, .season-cover .score, .season-cover .season-cover-score) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--cover-ornament=true] :is(.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-text .sailing-text, .bili-dyn-ornament__type--3 span, .bb-comment .sailing .sailing-info, .comment-bilibili-fold .sailing .sailing-info) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--cover-fans-medal=true] :is(.badge-level) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--cover-danmaku=true] :is(.bili-dm) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--cover-icon-font=true] :is(.iconfont, .icon-font, .read-icon, .bili-note-iconfont, .bili-footer-font, [class^=icon-], .bilifont, .bp-icon-font, .bcc-iconfont, .fontvt, span.quick-favorite.be-quick-favorite > i.quick-favorite-icon.icon) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--cover-column=true] :is(.article-detail .article-container .article-container__content .article-content .read-article-holder, .article-detail .article-container .article-container__content .article-content .read-article-holder *) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}\nhtml[custom-font-family--detect--is-input-empty=false][custom-font-family--options--cover-score=true] :is(.season-cover .score, .season-cover .season-cover-score) {\n  font-family: var(--custom-font-family--options--font-family) !important;\n}",""]),t.exports=o},218:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var i={};if(o)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var s=this[a][0];null!=s&&(i[s]=!0)}for(var r=0;r<t.length;r++){var c=[].concat(t[r]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},332:(t,e,n)=>{"use strict";var o,i=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),s=[];function r(t){for(var e=-1,n=0;n<s.length;n++)if(s[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},o=[],i=0;i<t.length;i++){var a=t[i],c=e.base?a[0]+e.base:a[0],l=n[c]||0,p="".concat(c," ").concat(l);n[c]=l+1;var u=r(p),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(s[u].references++,s[u].updater(d)):s.push({identifier:p,updater:b(d,e),references:1}),o.push(p)}return o}function l(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var s=a(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var p,u=(p=[],function(t,e){return p[t]=e,p.filter(Boolean).join("\n")});function d(t,e,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=u(e,i);else{var a=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(a,s[e]):t.appendChild(a)}}function f(t,e,n){var o=n.css,i=n.media,a=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var m=null,h=0;function b(t,e){var n,o,i;if(e.singleton){var a=h++;n=m||(m=l(e)),o=d.bind(null,n,a,!1),i=d.bind(null,n,a,!0)}else n=l(e),o=f.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var i=r(n[o]);s[i].references--}for(var a=c(t,e),l=0;l<n.length;l++){var p=r(n[l]);0===s[p].references&&(s[p].updater(),s.splice(p,1))}n=a}}}},879:(t,e,n)=>{var o=n(129);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},488:(t,e,n)=>{var o=n(854);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},750:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>m});var o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"custom-font-family-extra-options-entry"},[e("VButton",{on:{mouseover:function(e){return t.loadPanel()},click:function(e){return t.togglePanelDisplay()}}},[t._v("\n    更多选项"),e("VIcon",{attrs:{icon:"right-arrow",size:16}})],1)],1)};o._withStripped=!0;var i=n(309),a=n(648),s=n(605);let r;const c=(0,i.defineComponent)({components:{VIcon:a.VIcon,VButton:a.VButton},methods:{loadPanel:async()=>{Boolean(r)||await(async()=>{const t=await Promise.resolve().then(n.bind(n,24)).then((t=>t.default));r=(0,s.mountVueComponent)(t),document.body.insertAdjacentElement("beforeend",r.$el)})()},togglePanelDisplay:async()=>{r.toggleDisplay()}}});var l=n(332),p=n.n(l),u=n(468),d=n.n(u),f={insert:"head",singleton:!1};p()(d(),f);d().locals;const m=(0,n(893).Z)(c,o,[],!1,null,null,null).exports},24:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>$});var o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ExtraOptionsPanel",{ref:"extraOptionsPanel",staticClass:"custom-font-family-extra-options-panel",class:{peek:t.isPeeking},attrs:{"init-data":t.initData},scopedSlots:t._u([{key:"input0",fn:function(){return[e("TextArea",{model:{value:t.inputFontFamily,callback:function(e){t.inputFontFamily=e},expression:"inputFontFamily"}})]},proxy:!0},{key:"input1",fn:function(){return[e("SwitchOptionsMin",{attrs:{options:t.switchOptionsComponentOptions}})]},proxy:!0}])})};o._withStripped=!0;var i=n(309),a=n(648),s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"switch-options-min"},[e("div",{staticClass:"switch-options-min-grid"},t._l(Object.keys(t.options.switches),(function(n){return e(t.options.radio?"RadioButton":"CheckBox",t._b({key:n,tag:"component",class:{dim:!(Number(t.componentOptions[n])^Number(t.isDimAtChecked))},attrs:{checked:t.componentOptions[n]},on:{change:function(e){t.componentOptions[n]=e}}},"component",t.mergedSwitchProps,!1),[t._v("\n      "+t._s(t.options.switches[n].displayName)+"\n    ")])})),1)])};s._withStripped=!0;var r=n(986);const c=(0,i.defineComponent)({name:"SwitchOptionsMin",components:{CheckBox:a.CheckBox,RadioButton:a.RadioButton},props:{options:{type:Object,required:!0}},data(){const{componentName:t}=this.options;return{componentOptions:(0,r.getComponentSettings)(t).options,isDimAtChecked:(()=>"checked"===this.options.dimAt||void 0===this.options.dimAt||(this.options.dimAt,!1))()}},computed:{mergedSwitchProps(){return{checkedIcon:"mdi-eye-off-outline",notCheckedIcon:"mdi-eye-outline",...this.options.switchProps}}},watch:{options(){this.updateColumnsCount()}},mounted(){this.updateColumnsCount()},methods:{updateColumnsCount(){const t=this.$el,e=Math.ceil(Object.keys(this.options.switches).length/12);t.style.setProperty("--columns",e.toString())}}});var l=n(332),p=n.n(l),u=n(157),d=n.n(u),f={insert:"head",singleton:!1};p()(d(),f);d().locals;var m=n(893);const h=(0,m.Z)(c,s,[],!1,null,null,null).exports;var b=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("VPopup",{staticClass:"be-extra-options-panel",attrs:{fixed:"",lazy:!1},model:{value:t.popupOpen,callback:function(e){t.popupOpen=e},expression:"popupOpen"}},[e("div",{staticClass:"be-eop-header"},[e("div",{staticClass:"be-eop-h-title"},[e("VIcon",{staticClass:"be-eop-h-t-icon",attrs:{icon:t.initData.header.title.icon,size:24}}),t._v(" "),e("div",{staticClass:"be-eop-h-t-text"},[t._v(t._s(t.initData.header.title.text))])],1),t._v(" "),e("div",{staticClass:"be-eop-h-actions"},[t._l(t.initData.header.actions,(function(t){return e("div",{key:t.id,staticClass:"be-eop-h-a-action"},[e("VIcon",{ref:`action${t.id}`,refInFor:!0,class:`action-${t.actionClassNameSuffix}`,attrs:{title:t.title,icon:t.icon,size:24}})],1)})),t._v(" "),e("div",{staticClass:"be-eop-h-a-action"},[e("VIcon",{staticClass:"action-close",attrs:{title:"关闭",icon:"mdi-close",size:24},on:{click:function(e){t.popupOpen=!1}}})],1)],2)]),t._v(" "),e("div",{staticClass:"be-eop-separator"}),t._v(" "),e("div",{staticClass:"be-eop-content"},t._l(t.initData.content.options,(function(n){return e("div",{key:n.id,staticClass:"be-eop-c-option"},[e("div",{staticClass:"be-eop-c-o-title"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"be-eop-c-o-description"},[t._v(t._s(n.description))]),t._v(" "),e("div",{staticClass:"be-eop-c-o-input",class:`input-${n.inputClassNameSuffix}`},[t._t(`input${n.id}`,(function(){return[t._v("\n          选项输入入口默认文字，使用含 v-slot 指令的 template 元素以替换默认内容\n        ")]}))],2)])})),0)])};b._withStripped=!0;const y=(0,i.defineComponent)({name:"ExtraOptionsPanel",components:{VPopup:a.VPopup,VIcon:a.VIcon},props:{initData:{type:Object,default:{header:{title:{text:"默认标题",icon:"mdi-format-font"},actions:[{id:0,title:"默认动作 0",icon:"mdi-cog-sync-outline",actionClassNameSuffix:"default-action-0"},{id:1,title:"默认动作 1",icon:"mdi-eye-outline",actionClassNameSuffix:"default-action-1"}]},content:{options:[{id:0,title:"默认选项 0",description:"默认选项 0 的说明",inputClassNameSuffix:"default-option-0"},{id:1,title:"默认选项 1",description:"默认选项 1 的说明",inputClassNameSuffix:"default-option-1"}]}}}},data:()=>({popupOpen:!1})});var v=n(982),x=n.n(v),g={insert:"head",singleton:!1};p()(x(),g);x().locals;const _=(0,m.Z)(y,b,[],!1,null,null,null).exports,C=coreApis.toast;var k=n(605);const O=coreApis.utils.log;var w=n(447);const F={header:{title:{text:"自定义字体",icon:"mdi-format-font"},actions:[{id:0,title:"重置面板中的所有选项为默认值",icon:"mdi-cog-sync-outline",actionClassNameSuffix:"reset"},{id:1,title:"透视",icon:"mdi-eye-outline",actionClassNameSuffix:"peek"}]},content:{options:[{id:0,title:"自定义字体",description:"输入需要设置的字体，不同字体之间必须以英文逗号分隔",inputClassNameSuffix:"input-font-family"},{id:1,title:"覆盖选项",description:"下面的元素使用了特殊字体，启用选项后可在对应的元素上应用组件提供的字体设置",inputClassNameSuffix:"cover-options"}]}},S={name:"customFontFamilyCoverOptions",switches:{},radio:!1,dimAt:"notChecked",switchProps:{checkedIcon:"mdi-checkbox-marked-circle",notCheckedIcon:"mdi-checkbox-blank-circle-outline"},componentName:"customFontFamily",optionDisplayName:"自定义字体覆盖选项"};for(const t of w.nF)S.switches[t.camel]={displayName:t.display,defaultValue:w.p_[t.camel]};const P=(0,O.useScopedConsole)("自定义字体"),N=(0,i.defineComponent)({components:{ExtraOptionsPanel:_,TextArea:a.TextArea,SwitchOptionsMin:h},data:()=>({isPeeking:!1,isMouseOverPeekIcon:!1,initData:F,inputFontFamily:(0,r.getComponentSettings)("customFontFamily").options.fontFamily,switchOptionsComponentOptions:S}),watch:{inputFontFamily:lodash.debounce((t=>{(0,r.getComponentSettings)("customFontFamily").options.fontFamily=t}),1e3),async isMouseOverPeekIcon(t){t?(t&&await(0,k.delay)(200),this.isMouseOverPeekIcon&&(this.isPeeking=!0)):this.isPeeking=!1}},mounted(){this.$refs.extraOptionsPanel.$refs.action0[0].$el.addEventListener("click",this.confirmResetOptions);const t=this.$refs.extraOptionsPanel.$refs.action1[0].$el;t.addEventListener("mouseover",this.setIsMouseOverPeekIconToTrue),t.addEventListener("mouseout",this.setIsMouseOverPeekIconToFalse)},methods:{toggleDisplay(){this.$refs.extraOptionsPanel.popupOpen=!this.$refs.extraOptionsPanel.popupOpen},setIsMouseOverPeekIconToTrue(){this.isMouseOverPeekIcon=!0},setIsMouseOverPeekIconToFalse(){this.isMouseOverPeekIcon=!1},confirmResetOptions(){confirm("确定将面板中的所有选项重置为默认值吗？")&&this.resetOptions()},resetOptions(){(0,r.getComponentSettings)("customFontFamily").options.fontFamily=w.nY,this.inputFontFamily=w.nY;for(const t of w.nF){const e=w.p_[t.camel];(0,r.getComponentSettings)("customFontFamily").options[t.camel]=e}C.Toast.success("更多选项面板中的所有选项已成功被重置为默认值","自定义字体",2e3),P.log("更多选项面板中的所有选项已成功被重置为默认值")}}});var T=n(440),I=n.n(T),M={insert:"head",singleton:!1};p()(I(),M);I().locals;const $=(0,m.Z)(N,o,[],!1,null,null,null).exports},893:(t,e,n)=>{"use strict";function o(t,e,n,o,i,a,s,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=r?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var p=l.render;l.render=function(t,e){return c.call(e),p(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}n.d(e,{Z:()=>o})},814:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=814,t.exports=e},697:t=>{"use strict";t.exports="使用组件提供的字体设置覆盖原版的主站字体，并使主站字体可被自定义。\n\n当组件被启用后，几乎所有的元素会立即应用组件提供的字体设置。\n\n选项说明:\n- `禁用标题标点符号缩进`: 在新版视频页中，推荐视频栏中的视频标题，如果首个字符是特定的标点符号，则文本会缩入左侧。这个选项可以禁用这种样式\n- `更多选项`:\n  - `自定义字体`: 设置自定义字体。写法请参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)、默认设置与设置说明。\n  - `覆盖选项`: 相当于一个白名单，使用了特殊字体的元素会被加入其中。默认情况下这些元素不会应用组件提供的字体设置，只有在启用对应的选项后才会应用。"},309:t=>{"use strict";t.exports=globalThis.Vue},986:t=>{"use strict";t.exports=coreApis.settings},648:t=>{"use strict";t.exports=coreApis.ui},605:t=>{"use strict";t.exports=coreApis.utils}},o={};function i(t){var e=o[t];if(void 0!==e)return e.exports;var a=o[t]={id:t,exports:{}};return n[t](a,a.exports,i),a.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,i.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var a=Object.create(null);i.r(a);var s={};t=t||[null,e({}),e([]),e(e)];for(var r=2&o&&n;"object"==typeof r&&!~t.indexOf(r);r=e(r))Object.getOwnPropertyNames(r).forEach((t=>s[t]=()=>n[t]));return s.default=()=>n,i.d(a,s),a},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};return(()=>{"use strict";i.d(a,{component:()=>u});const t=coreApis.componentApis.define;var e=i(986),n=i(447);const o=document.documentElement,s="custom-font-family",r="customFontFamily",c=[componentsTags.style,componentsTags.general],l={fontFamily:{displayName:"字体",defaultValue:n.nY,hidden:!0},disableTitlePunctuationTextIndent:{displayName:"禁用标题标点符号缩进",defaultValue:!0}};(()=>{for(const t of n.nF)l[t.camel]={displayName:t.display,defaultValue:n.p_[t.camel],hidden:!0}})();const p=[{name:`${s}--style--set-font-family`,style:()=>Promise.resolve().then(i.t.bind(i,488,23)),important:!0},{name:`${s}--style--disable-title-punctuation-text-indent`,style:()=>Promise.resolve().then(i.t.bind(i,879,23)),important:!0}],u=(0,t.defineComponentMetadata)({name:r,displayName:"自定义字体",tags:c,entry:()=>{(0,e.addComponentListener)("customFontFamily.fontFamily",(t=>{t?(o.style.setProperty(`--${s}--options--font-family`,`${t}`),o.setAttribute(`${s}--detect--is-input-empty`,"false")):o.setAttribute(`${s}--detect--is-input-empty`,"true")}),!0),(0,e.addComponentListener)("customFontFamily.disableTitlePunctuationTextIndent",(t=>{o.setAttribute(`${s}--options--disable-title-punctuation-text-indent`,`${t}`)}),!0);for(const t of n.nF)(0,e.addComponentListener)(`customFontFamily.${t.camel}`,(e=>{o.setAttribute(`${s}--options--${t.kebab}`,`${e}`)}),!0)},options:l,extraOptions:()=>Promise.resolve().then(i.bind(i,750)).then((t=>t.default)),instantStyles:p,author:{name:"Tinhone",link:"https://github.com/Tinhone"},commitHash:"3d56cf2259272e9d1519bac8fbbe09edf5380adc",coreVersion:"2.9.2",description:(()=>{const t=i(814);return{...Object.fromEntries(t.keys().map((e=>[e.match(/index\.(.+)\.md$/)[1],t(e)]))),"zh-CN":()=>Promise.resolve().then(i.t.bind(i,697,17)).then((t=>t.default))}})()})})(),a=a.component})()));