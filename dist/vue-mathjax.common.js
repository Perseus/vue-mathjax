module.exports=function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=1)}([function(module,exports,__webpack_require__){var Component=__webpack_require__(3)(__webpack_require__(2),__webpack_require__(4),null,null);module.exports=Component.exports},function(module,__webpack_exports__,__webpack_require__){"use strict";function install(Vue){Vue.component("vue-mathjax",__WEBPACK_IMPORTED_MODULE_0__components_vue_mathjax_vue___default.a)}Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__components_vue_mathjax_vue__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0__components_vue_mathjax_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_vue_mathjax_vue__);__webpack_require__.d(__webpack_exports__,"VueMathjax",function(){return __WEBPACK_IMPORTED_MODULE_0__components_vue_mathjax_vue___default.a});var plugin={version:"0.0.11",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target};__webpack_exports__.default={props:{formula:{type:String},safe:{type:Boolean,default:!0},options:{type:Object,default:function(){return{}}},shouldQueueRender:{type:Boolean,default:!1},renderCallback:{type:Function,default:function(){return function(){return null}}}},watch:{formula:function(){this.renderMathJax()}},mounted:function(){this.renderMathJax()},methods:{renderContent:function(){this.safe?this.$refs.mathJaxEl.textContent=this.formula:this.$refs.mathJaxEl.innerHTML=this.formula},renderMathJax:function(){this.renderContent(),window.MathJax&&(window.MathJax.Hub.Config(_extends({tex2jax:{inlineMath:[["$","$"],["(",")"]],displayMath:[["$$","$$"],["[","]"]],processEscapes:!0,processEnvironments:!0},displayAlign:"center","HTML-CSS":{styles:{".MathJax_Display":{margin:0}},linebreaks:{automatic:!0}}},this.options)),this.shouldQueueRender?window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,this.$refs.mathJaxEl]):window.MathJax.isReady?window.MathJax.Hub.Typeset(this.$refs.mathJaxEl,this.renderCallback):window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,this.$refs.mathJaxEl]))}}}},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement;return(_vm._self._c||_h)("span",{ref:"mathJaxEl"},[_vm._v(_vm._s(_vm.formula))])},staticRenderFns:[]}}]);