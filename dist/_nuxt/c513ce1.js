/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23,12,17],{478:function(t,e,n){var content=n(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("4bdd65fe",content,!0,{sourceMap:!1})},479:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this._self._c;return t("div",{staticClass:"col-sm-4"},[t("img",{attrs:{src:n(480)}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copyright"},[t._v("CONSTRUCTORES POSITIVOS"),e("br"),t._v("2020")])}],r={},d=(n(481),n(31)),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("footer",[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("LA CASA DE TUS SUEÑOS")]),t._v(" "),e("nuxt-link",{attrs:{to:"/visyvip"}},[t._v("PROYECTOS VIS Y VIP")]),t._v(" "),e("nuxt-link",{attrs:{to:"/insumos"}},[t._v("PROVEEDOR MATERIALES")]),t._v(" "),e("nuxt-link",{attrs:{to:"/servicios"}},[t._v("ESPECIALISTAS")])],1),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("nuxt-link",{attrs:{to:"/calculadorafinanciera"}},[t._v("CALCULADORA")]),t._v(" "),e("nuxt-link",{attrs:{to:"/quienes_somos"}},[t._v("QUIENES SOMOS")]),t._v(" "),e("nuxt-link",{attrs:{to:"/blog"}},[t._v("BLOG")])],1)])]),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"social_links"},[e("div",{staticClass:"social_link fb"},[e("a",{attrs:{href:"https://www.facebook.com/constructurespositivosecuador",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),t._v(" "),e("div",{staticClass:"social_link ig"},[e("a",{attrs:{href:"https://www.instagram.com/constructorespositivos/?igshid=q4jnx0yhs6yv",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),t._v(" "),e("div",{staticClass:"social_link twitter"},[e("a",{attrs:{href:"https://twitter.com/Construpositivo",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])])])])]),t._v(" "),t._m(1)])}),o,!1,null,"5ec0ca18",null);e.default=component.exports;installComponents(component,{Footer:n(479).default})},480:function(t,e,n){t.exports=n.p+"img/footer_registra_proyecto.a10f373.png"},481:function(t,e,n){"use strict";n(478)},482:function(t,e,n){var o=n(56)((function(i){return i[1]}));o.push([t.i,"footer[data-v-5ec0ca18]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);padding:20px 80px;width:100%}footer img[data-v-5ec0ca18]{max-width:422px;width:100%}footer a[data-v-5ec0ca18]{color:#fff;display:block;font-weight:700}.social_link[data-v-5ec0ca18]{color:#fff;display:inline-block;margin:0 10px}.copyright[data-v-5ec0ca18]{font-size:13px;margin-bottom:10px;margin-top:10px;text-align:center}.social_link[data-v-5ec0ca18]{font-size:24px}@media only screen and (max-width:641px){a[data-v-5ec0ca18]{font-size:14px;margin:4px 0}}",""]),o.locals={},t.exports=o},483:function(t,e,n){t.exports=n.p+"img/banner_servicios.557b226.jpg"},485:function(t,e,n){"use strict";var o={created:function(){"undefined"!=typeof document&&d(this,(function(t,e){var n,o,d,c;n=document,o=t,d=e,c=r?{passive:!1}:void 0,n.addEventListener(o,d,c)}))},beforeDestroy:function(){"undefined"!=typeof document&&d(this,(function(t,e){var n,o,d,c;n=document,o=t,d=e,c=r?{passive:!1}:void 0,n.removeEventListener(o,d,c)}))}},r="undefined"!=typeof window&&function(){var t=!1;try{var desc={get:function(){t=!0}},e=Object.defineProperty({},"passive",desc);window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){t=!1}return t}();function d(t,e){var n=t.$options.events;Object.keys(n).forEach((function(o){e(o,(function(e){return n[o].call(t,e)}))}))}function c(t,base){var e=base.getBoundingClientRect();return{left:t.clientX-e.left,top:t.clientY-e.top}}var l={mixins:[o],props:{disabled:Boolean},data:function(){return{isDrag:!1}},events:{mousedown:function(t){return this.dragStart(t,this.offsetByMouse)},mousemove:function(t){return this.dragMove(t,this.offsetByMouse)},mouseup:function(t){return this.dragEnd(t,this.offsetByMouse)},touchstart:function(t){return this.dragStart(t,this.offsetByTouch)},touchmove:function(t){return this.dragMove(t,this.offsetByTouch)},touchend:function(t){return this.dragEnd(t,this.offsetByTouch)},touchcancel:function(t){return this.dragEnd(t,this.offsetByTouch)}},methods:{isInTarget:function(t){return!!t&&(t===this.$el||this.isInTarget(t.parentElement))},offsetByMouse:function(t){return c(t,this.$el)},offsetByTouch:function(t){return c(0===t.touches.length?t.changedTouches[0]:t.touches[0],this.$el)},dragStart:function(t,e){this.disabled||void 0!==t.button&&0!==t.button||!this.isInTarget(t.target)||(t.preventDefault(),this.isDrag=!0,this.$emit("dragstart",t,e(t),this.$el))},dragMove:function(t,e){this.isDrag&&(t.preventDefault(),this.$emit("drag",t,e(t),this.$el))},dragEnd:function(t,e){this.isDrag&&(t.preventDefault(),this.isDrag=!1,this.$emit("dragend",t,e(t),this.$el))}},render:function(){return this.$slots.default&&this.$slots.default[0]}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"range-slider",class:{disabled:t.disabled}},[n("drag-helper",{attrs:{disabled:t.disabled},on:{dragstart:t.dragStart,drag:t.drag,dragend:t.dragEnd}},[n("span",{ref:"inner",staticClass:"range-slider-inner"},[n("input",{staticClass:"range-slider-hidden",attrs:{type:"text",name:t.name,disabled:t.disabled},domProps:{value:t.actualValue}}),t._v(" "),n("span",{staticClass:"range-slider-rail"}),t._v(" "),n("span",{staticClass:"range-slider-fill",style:{width:t.valuePercent+"%"}}),t._v(" "),n("span",{ref:"knob",staticClass:"range-slider-knob",style:{left:t.valuePercent+"%"}},[t._t("knob")],2)])])],1)},staticRenderFns:[],props:{name:String,value:[String,Number],disabled:{type:Boolean,default:!1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},step:{type:[String,Number],default:1}},data:function(){return{actualValue:null,dragStartValue:null}},created:function(){var t=this._min,e=this._max,n=Number(this.value);(null==this.value||isNaN(n))&&(n=t>e?t:(t+e)/2),this.actualValue=this.round(n)},computed:{_min:function(){return Number(this.min)},_max:function(){return Number(this.max)},_step:function(){return Number(this.step)},valuePercent:function(){return(this.actualValue-this._min)/(this._max-this._min)*100}},watch:{value:function(t){var e=Number(t);null==t||isNaN(e)||(this.actualValue=this.round(e))},min:function(){this.actualValue=this.round(this.actualValue)},max:function(){this.actualValue=this.round(this.actualValue)}},methods:{dragStart:function(t,e){this.dragStartValue=this.actualValue,t.target!==this.$refs.knob&&this.drag(t,e)},drag:function(t,e){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,n)),this.emitInput(this.actualValue)},dragEnd:function(t,e){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,n)),this.dragStartValue!==this.actualValue&&this.emitChange(this.actualValue)},emitInput:function(t){this.$emit("input",t)},emitChange:function(t){this.$emit("change",t)},valueFromBounds:function(t,e){return t/e*(this._max-this._min)+this._min},round:function(t){return function(t,e,n,o){if(t<=e)return e;var r=Math.floor((n-e)/o)*o+e;if(t>=r)return r;var d=(t-e)/o,c=Math.floor(d),l=d-c;return 0===l?t:l<.5?o*c+e:o*(c+1)+e}(t,this._min,this._max,this._step)}},components:{DragHelper:l}};t.exports=f},486:function(t,e,n){var content=n(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("389b95e5",content,!0,{sourceMap:!1})},487:function(t,e,n){var o=n(56)((function(i){return i[1]}));o.push([t.i,".range-slider{display:inline-block;height:20px;padding:0 10px;width:130px}.range-slider.disabled{opacity:.5}.range-slider-inner{display:inline-block;height:100%;position:relative;width:100%}.range-slider-fill,.range-slider-rail{border-radius:2px;display:block;height:4px;left:0;position:absolute;top:50%;transform:translateY(-50%)}.range-slider-rail{background-color:#e2e2e2;width:100%}.range-slider-fill{background-color:#21fb92}.range-slider-knob{background-color:#fff;border:1px solid #f5f5f5;border-radius:50%;box-shadow:1px 1px rgba(0,0,0,.2);box-sizing:border-box;cursor:pointer;display:block;height:20px;left:0;position:absolute;top:50%;transform:translate(-50%,-50%);width:20px}.range-slider-hidden{display:none}",""]),o.locals={},t.exports=o},508:function(t,e,n){var content=n(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("6c6e31f2",content,!0,{sourceMap:!1})},520:function(t,e,n){"use strict";n(508)},521:function(t,e,n){var o=n(56)((function(i){return i[1]}));o.push([t.i,'.element[data-v-5a6dc767]{background:#f7f7f7;border:1px solid #707070;border-radius:15px;display:flex;flex:0 0 50%;flex-wrap:wrap;margin-top:10px;padding:0 0 0 10px;width:100%}button[data-v-5a6dc767]{/display:block;/width:150px;background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);border:none;border-radius:20px;color:#fff;font-weight:700;height:38px;margin:10px;outline:none;padding:6px 8px}button[data-v-5a6dc767]:hover{background:#3789d3}.nav-item[data-v-5a6dc767]{margin:0}.nav-item a[data-v-5a6dc767]{/border:1px solid #aa381a;/padding:2px 10px;/border-radius:8px;/font-size:13px;color:#aa381a;-webkit-text-decoration:none;text-decoration:none}.nav-item a[data-v-5a6dc767]:active,.nav-item a[data-v-5a6dc767]:hover{color:#3789d3}.banner[data-v-5a6dc767],.banner img[data-v-5a6dc767]{width:100%}.title[data-v-5a6dc767]{color:#35495e;display:block;font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:100px;font-weight:300;letter-spacing:1px}.subtitle[data-v-5a6dc767]{color:#526488;font-size:42px;font-weight:300;padding-bottom:15px;word-spacing:5px}.links[data-v-5a6dc767]{padding-top:15px}.card_home[data-v-5a6dc767]{margin:0 20px;position:relative}.card_home img[data-v-5a6dc767]{width:100%}#pasos[data-v-5a6dc767]{margin:40px 0 80px}#pasos h1[data-v-5a6dc767]{color:#5e5e5e;font-size:30px;font-weight:700;margin-bottom:30px;text-align:center}.foot_card[data-v-5a6dc767]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;padding:10px;text-align:center}figure[data-v-5a6dc767]{margin:0}.foot_card h3[data-v-5a6dc767]{font-size:15px;font-weight:700;margin:0;padding:0}.foot_card h4[data-v-5a6dc767]{font-size:14px;font-weight:300;margin:0;padding:0}#ubicar[data-v-5a6dc767]{margin:25px 0 40px;text-align:center}#ubicar button[data-v-5a6dc767]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);border:none;border-radius:10px;color:#fff;height:38px;margin-top:25px;outline:none;padding:6px 8px}#ubicar input[data-v-5a6dc767]{margin-top:5px;width:100%}#ubicar input[data-v-5a6dc767]::-moz-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-5a6dc767]::placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar h2[data-v-5a6dc767]{color:#5e5e5e;font-size:26px;font-weight:700;margin-bottom:30px;text-align:center}.input-data[data-v-5a6dc767]{margin-top:-7px}#map[data-v-5a6dc767]{margin-top:20px}#map button[data-v-5a6dc767]{background:#f26424;border-radius:0;margin-bottom:20px;margin-top:15px}#map button span[data-v-5a6dc767]{font-weight:700}#resultados[data-v-5a6dc767]{padding:0 0 50px}#video[data-v-5a6dc767]{margin-bottom:40px}.buscar-instructions[data-v-5a6dc767],.ubicacion-instructions[data-v-5a6dc767]{display:block;font-style:italic;font-weight:500;margin-top:20px}.titulo-buscar[data-v-5a6dc767]{font-weight:700;text-align:left}@media only screen and (max-width:641px){.card_home[data-v-5a6dc767]{margin-bottom:30px}.ubicacion_actual[data-v-5a6dc767]{margin-top:20px}.arrow[data-v-5a6dc767]:after{display:none}#pasos h1[data-v-5a6dc767]{font-size:22px}#ubicar h2[data-v-5a6dc767]{font-size:20px}.input-data[data-v-5a6dc767]{margin-top:10px}}',""]),o.locals={},t.exports=o},556:function(t,e,n){var content=n(631);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("f9730068",content,!0,{sourceMap:!1})},572:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var o=n(27),r=n(0),d=(n(69),n(488)),c=n(489);n(490);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}Object(d.c)("eager"),Object(d.b)("required",f(f({},c.b),{},{message:"{_field_} no puede estar en vacio"})),Object(d.b)("email",f(f({},c.a),{},{message:"{_field_} debe ser un correo electrónico válido"}));var h={name:"activate",components:{ValidationProvider:d.a},head:function(){},data:function(){return{axiosError:{id:"",message:""},email:"",captcha:!1,dismissSecs:10,dismissCountDown:0,dismissCountDownAxios:0,showDismissibleAlert:!1}},mounted:function(){},computed:{},methods:{doActivate:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$router.push("/");case 1:case"end":return e.stop()}}),e)})))()},countDownChanged:function(t){this.dismissCountDown=t},countDownChangedAxios:function(t){this.dismissCountDownAxios=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}},apollo:{}},v=(n(520),n(31)),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"cont"},[e("div",{staticClass:"container"},[e("div",{staticClass:"text-center"},[e("b-container",{staticClass:"bv-example-row"},[e("b-row",[e("b-col",{staticClass:"w-100 p-3 mb-1"},[e("h3",{staticClass:"subtitle"},[t._v("CORREO ACTIVADO")]),t._v(" "),e("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.doActivate.apply(null,arguments)}}},[e("div",[e("h4",[t._v("Su cuenta de correo se activo correctamente.")]),t._v(" "),e("div",[e("b-button",{on:{click:t.doActivate}},[t._v("ACEPTAR")]),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDownAxios,dismissible:"",variant:"light"},on:{dismissed:function(e){t.dismissCountDownAxios=0},"dismiss-count-down":t.countDownChangedAxios}},[e("p",[t._v("Error: "+t._s(t.axiosError.message))]),t._v(" "),e("b-progress",{attrs:{variant:"danger",max:t.dismissSecs,value:t.dismissCountDownAxios,height:"4px"}})],1),t._v(" "),e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"light"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[e("p",[t._v("Correo invalido/no-registrado o captcha no superado...")]),t._v(" "),e("b-progress",{attrs:{variant:"danger",max:t.dismissSecs,value:t.dismissCountDown,height:"4px"}})],1)],1)])])])],1)],1)],1)])])}),[],!1,null,"5a6dc767",null);e.default=component.exports},630:function(t,e,n){"use strict";n(556)},631:function(t,e,n){var o=n(56)((function(i){return i[1]}));o.push([t.i,'.banner[data-v-016144fd],.banner img[data-v-016144fd]{width:100%}.container[data-v-016144fd]{align-content:center;align-items:flex-start;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-around;justify-content:space-between;margin:0 auto;min-height:100vh}.title[data-v-016144fd]{color:#35495e;display:block;font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:100px;font-weight:300;letter-spacing:1px}.subtitle[data-v-016144fd]{color:#526488;font-size:42px;font-weight:300;padding-bottom:15px;word-spacing:5px}.links[data-v-016144fd]{padding-top:15px}.card_home img[data-v-016144fd]{width:100%}#pasos h1[data-v-016144fd]{color:#5e5e5e;font-size:30px;font-weight:700;margin-bottom:30px;text-align:center}.foot_card[data-v-016144fd]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;padding:10px;text-align:center}figure[data-v-016144fd]{margin:0}.foot_card h3[data-v-016144fd]{font-size:15px;font-weight:700;margin:0;padding:0}.foot_card h4[data-v-016144fd]{font-size:14px;font-weight:300;margin:0;padding:0}#ubicar[data-v-016144fd]{margin:25px 0 40px;text-align:center}#ubicar button[data-v-016144fd]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);border:none;border-radius:10px;color:#fff;height:38px;margin-top:25px;outline:none;padding:6px 8px}#ubicar input[data-v-016144fd]{margin-top:5px;width:100%}#ubicar input[data-v-016144fd]::-moz-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-016144fd]::placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar h2[data-v-016144fd]{color:#5e5e5e;font-size:26px;font-weight:700;margin-bottom:30px;text-align:center}.input-data[data-v-016144fd]{margin-top:-7px}@media only screen and (max-width:641px){.card_home[data-v-016144fd]{margin-bottom:30px}.ubicacion_actual[data-v-016144fd]{margin-top:20px}.arrow[data-v-016144fd]:after{display:none}#pasos h1[data-v-016144fd]{font-size:22px}#ubicar h2[data-v-016144fd]{font-size:20px}.input-data[data-v-016144fd]{margin-top:10px}}',""]),o.locals={},t.exports=o},682:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this._self._c;return t("div",{staticClass:"banner"},[t("img",{attrs:{src:n(483)}})])}],footer=n(479),r=n(572),d=n(485),c=n.n(d),l=(n(486),{components:{footerPage:footer.default,activatedPage:r.default,RangeSlider:c.a}}),f=(n(630),n(31)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"cont"},[t._m(0),t._v(" "),e("div",{staticClass:"container pasos"},[e("activated-page")],1),t._v(" "),e("section",[e("footerPage")],1)])}),o,!1,null,"016144fd",null);e.default=component.exports}}]);