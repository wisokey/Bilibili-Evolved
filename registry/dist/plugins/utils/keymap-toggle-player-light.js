!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/keymap-toggle-player-light"]=t():e["utils/keymap-toggle-player-light"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{plugin:()=>a});const o=coreApis.componentApis.video.playerLight,a={name:"keymap.actions.togglePlayerLight",displayName:"快捷键扩展 - 开关灯",description:'在快捷键的动作列表里添加一个 "开关灯".',setup:e=>{let{addData:t}=e;t("keymap.actions",(e=>{e.togglePlayerLight={displayName:"开关灯",run:async()=>{(0,o.toggleLight)()}}})),t("keymap.presets",(e=>{e.togglePlayerLight="shift l"}))},commitHash:"3d56cf2259272e9d1519bac8fbbe09edf5380adc",coreVersion:"2.9.2"};return t=t.plugin})()));