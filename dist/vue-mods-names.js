!function(s,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-mods-names",[],e):"object"==typeof exports?exports["vue-mods-names"]=e():s["vue-mods-names"]=e()}(this,function(){return function(s){function e(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return s[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};return e.m=s,e.c=t,e.d=function(s,t,n){e.o(s,t)||Object.defineProperty(s,t,{configurable:!1,enumerable:!0,get:n})},e.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(t,"a",t),t},e.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},e.p="/dist/",e(e.s=0)}([function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={install:function(s){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";s.directive("mods-names",{inserted:function(s,e,t){var n=t.context,o=t.elm;n.$baseClass=e.arg||o.className,n.$addOriginClass=e.modifiers["no-origin"],o.classList+=" "+n.$modsNames},update:function(s,e,t,n){var o=t.data,r=t.elm,i=t.context;o.class!==n.data.class&&(o.class?r.classList=i.$modsNames+" "+o.class:r.classList=i.$modsNames)}}),s.mixin({data:function(){return{$baseClass:null,$addOriginClass:!0}},props:{mods:{type:[String,Array]}},computed:{$modsNames:function(){var s=this,t=function(t){return s.$baseClass+e+t};if(Array.isArray(this.mods)){var n=!!this.mods&&this.mods.map(function(s){return t(s)}),o=n.slice(0);return this.$addOriginClass||o.unshift(this.$baseClass),o.join(" ")}return this.mods?this.$addOriginClass?t(this.mods):this.$baseClass+" "+t(this.mods):this.$baseClass}}})}}}])});
//# sourceMappingURL=vue-mods-names.js.map