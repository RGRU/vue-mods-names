!function(s,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-mods-names",[],e):"object"==typeof exports?exports["vue-mods-names"]=e():s["vue-mods-names"]=e()}(this,function(){return function(s){function e(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return s[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var t={};return e.m=s,e.c=t,e.d=function(s,t,n){e.o(s,t)||Object.defineProperty(s,t,{configurable:!1,enumerable:!0,get:n})},e.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(t,"a",t),t},e.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},e.p="/dist/",e(e.s=0)}([function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={install:function(s){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";s.directive("mods-names",{inserted:function(s,e,t){t.context.baseClass=e.arg,t.context.addOriginClass=e.modifiers.origin,t.elm.classList=t.context.modsNames}}),s.mixin({data:function(){return{baseClass:null,addOriginClass:!1}},props:{mods:{type:[String,Array]}},computed:{modsNames:function(){var s=this;if(Array.isArray(this.mods)){var t=!!this.mods&&this.mods.map(function(t){return s.baseClass+e+t}),n=t.slice();return this.addOriginClass&&n.unshift(this.baseClass),n.join(" ")}return this.mods?this.addOriginClass?this.baseClass+" "+this.baseClass+e+this.mods:this.baseClass+e+this.mods:this.baseClass}}})}};e.default=n}])});
//# sourceMappingURL=vue-mods-names.js.map