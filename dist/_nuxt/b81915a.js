/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{350:function(t,e,n){var content=n(354);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("537eb6ce",content,!0,{sourceMap:!1})},351:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-4"},[e("img",{attrs:{src:n(352)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"copyright"},[this._v("CONSTRUCTORES POSITIVOS"),e("br"),this._v("2020")])}],r={},c=(n(353),n(18)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("ENCUENTRA LA CASA DE TUS SUEÑOS")]),t._v(" "),n("nuxt-link",{attrs:{to:"/visyvip"}},[t._v("PROYECTOS VIS Y VIP")]),t._v(" "),n("nuxt-link",{attrs:{to:"/insumos"}},[t._v("MATERIALES PARA LA REMODELACIÓN")])],1),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("nuxt-link",{attrs:{to:"/calculadorafinanciera"}},[t._v("CALCULADORA DE CRÉDITO")]),t._v(" "),n("nuxt-link",{attrs:{to:"/quienes_somos"}},[t._v("QUIENES SOMOS")]),t._v(" "),n("nuxt-link",{attrs:{to:"/blog"}},[t._v("BLOG Y NOTICIAS")])],1)])]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"social_links"},[n("div",{staticClass:"social_link fb"},[n("a",{attrs:{href:"https://www.facebook.com/constructurespositivosecuador",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),t._v(" "),n("div",{staticClass:"social_link ig"},[n("a",{attrs:{href:"https://www.instagram.com/constructorespositivos/?igshid=q4jnx0yhs6yv",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),t._v(" "),n("div",{staticClass:"social_link twitter"},[n("a",{attrs:{href:"https://twitter.com/Construpositivo",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])])])])]),t._v(" "),t._m(1)])}),o,!1,null,"a1aac506",null);e.default=component.exports;installComponents(component,{Footer:n(351).default})},352:function(t,e,n){t.exports=n.p+"img/footer_registra_proyecto.382e4dc.png"},353:function(t,e,n){"use strict";var o=n(350);n.n(o).a},354:function(t,e,n){(e=n(35)(!1)).push([t.i,"footer[data-v-a1aac506]{width:100%;background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);padding:20px 80px}footer img[data-v-a1aac506]{width:100%;max-width:422px}footer a[data-v-a1aac506]{display:block;color:#fff;font-weight:700}.social_link[data-v-a1aac506]{display:inline-block;margin:0 10px;color:#fff}.copyright[data-v-a1aac506]{margin-top:10px;margin-bottom:10px;text-align:center;font-size:13px}.social_link[data-v-a1aac506]{font-size:24px}@media only screen and (max-width:641px){a[data-v-a1aac506]{font-size:14px;margin:4px 0}}",""]),t.exports=e},355:function(t,e,n){t.exports=n.p+"img/banner1.67bdb63.jpg"},357:function(t,e,n){"use strict";var o={created:function(){"undefined"!=typeof document&&c(this,(function(t,e){var n,o,c,d;n=document,o=t,c=e,d=r?{passive:!1}:void 0,n.addEventListener(o,c,d)}))},beforeDestroy:function(){"undefined"!=typeof document&&c(this,(function(t,e){var n,o,c,d;n=document,o=t,c=e,d=r?{passive:!1}:void 0,n.removeEventListener(o,c,d)}))}},r="undefined"!=typeof window&&function(){var t=!1;try{var desc={get:function(){t=!0}},e=Object.defineProperty({},"passive",desc);window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){t=!1}return t}();function c(t,e){var n=t.$options.events;Object.keys(n).forEach((function(o){e(o,(function(e){return n[o].call(t,e)}))}))}function d(t,base){var e=base.getBoundingClientRect();return{left:t.clientX-e.left,top:t.clientY-e.top}}var l={mixins:[o],props:{disabled:Boolean},data:function(){return{isDrag:!1}},events:{mousedown:function(t){return this.dragStart(t,this.offsetByMouse)},mousemove:function(t){return this.dragMove(t,this.offsetByMouse)},mouseup:function(t){return this.dragEnd(t,this.offsetByMouse)},touchstart:function(t){return this.dragStart(t,this.offsetByTouch)},touchmove:function(t){return this.dragMove(t,this.offsetByTouch)},touchend:function(t){return this.dragEnd(t,this.offsetByTouch)},touchcancel:function(t){return this.dragEnd(t,this.offsetByTouch)}},methods:{isInTarget:function(t){return!!t&&(t===this.$el||this.isInTarget(t.parentElement))},offsetByMouse:function(t){return d(t,this.$el)},offsetByTouch:function(t){return d(0===t.touches.length?t.changedTouches[0]:t.touches[0],this.$el)},dragStart:function(t,e){this.disabled||void 0!==t.button&&0!==t.button||!this.isInTarget(t.target)||(t.preventDefault(),this.isDrag=!0,this.$emit("dragstart",t,e(t),this.$el))},dragMove:function(t,e){this.isDrag&&(t.preventDefault(),this.$emit("drag",t,e(t),this.$el))},dragEnd:function(t,e){this.isDrag&&(t.preventDefault(),this.isDrag=!1,this.$emit("dragend",t,e(t),this.$el))}},render:function(){return this.$slots.default&&this.$slots.default[0]}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"range-slider",class:{disabled:t.disabled}},[n("drag-helper",{attrs:{disabled:t.disabled},on:{dragstart:t.dragStart,drag:t.drag,dragend:t.dragEnd}},[n("span",{ref:"inner",staticClass:"range-slider-inner"},[n("input",{staticClass:"range-slider-hidden",attrs:{type:"text",name:t.name,disabled:t.disabled},domProps:{value:t.actualValue}}),t._v(" "),n("span",{staticClass:"range-slider-rail"}),t._v(" "),n("span",{staticClass:"range-slider-fill",style:{width:t.valuePercent+"%"}}),t._v(" "),n("span",{ref:"knob",staticClass:"range-slider-knob",style:{left:t.valuePercent+"%"}},[t._t("knob")],2)])])],1)},staticRenderFns:[],props:{name:String,value:[String,Number],disabled:{type:Boolean,default:!1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},step:{type:[String,Number],default:1}},data:function(){return{actualValue:null,dragStartValue:null}},created:function(){var t=this._min,e=this._max,n=Number(this.value);(null==this.value||isNaN(n))&&(n=t>e?t:(t+e)/2),this.actualValue=this.round(n)},computed:{_min:function(){return Number(this.min)},_max:function(){return Number(this.max)},_step:function(){return Number(this.step)},valuePercent:function(){return(this.actualValue-this._min)/(this._max-this._min)*100}},watch:{value:function(t){var e=Number(t);null==t||isNaN(e)||(this.actualValue=this.round(e))},min:function(){this.actualValue=this.round(this.actualValue)},max:function(){this.actualValue=this.round(this.actualValue)}},methods:{dragStart:function(t,e){this.dragStartValue=this.actualValue,t.target!==this.$refs.knob&&this.drag(t,e)},drag:function(t,e){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,n)),this.emitInput(this.actualValue)},dragEnd:function(t,e){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,n)),this.dragStartValue!==this.actualValue&&this.emitChange(this.actualValue)},emitInput:function(t){this.$emit("input",t)},emitChange:function(t){this.$emit("change",t)},valueFromBounds:function(t,e){return t/e*(this._max-this._min)+this._min},round:function(t){return function(t,e,n,o){if(t<=e)return e;var r=Math.floor((n-e)/o)*o+e;if(t>=r)return r;var c=(t-e)/o,d=Math.floor(c),l=c-d;return 0===l?t:l<.5?o*d+e:o*(d+1)+e}(t,this._min,this._max,this._step)}},components:{DragHelper:l}};t.exports=f},358:function(t,e,n){var content=n(359);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("ccf3550a",content,!0,{sourceMap:!1})},359:function(t,e,n){(e=n(35)(!1)).push([t.i,".range-slider{display:inline-block;padding:0 10px;height:20px;width:100%}.range-slider.disabled{opacity:.5}.range-slider-inner{display:inline-block;position:relative;height:100%;width:100%}.range-slider-fill,.range-slider-rail{display:block;position:absolute;top:50%;left:0;height:8px;border-radius:2px;transform:translateY(-50%)}.range-slider-rail{width:100%;background-color:#e2e2e2}.range-slider-fill{background-color:#f7632e}.range-slider-knob{display:block;position:absolute;top:50%;left:0;box-sizing:border-box;height:20px;width:20px;border:1px solid #f5f5f5;border-radius:50%;background-color:#fff;box-shadow:1px 1px rgba(0,0,0,.2);transform:translate(-50%,-50%);cursor:pointer}.range-slider-hidden{display:none}",""]),t.exports=e},386:function(t,e,n){var content=n(467);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("05f4ad5e",content,!0,{sourceMap:!1})},387:function(t,e,n){var content=n(469);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("428fcc81",content,!0,{sourceMap:!1})},466:function(t,e,n){"use strict";var o=n(386);n.n(o).a},467:function(t,e,n){(e=n(35)(!1)).push([t.i,'.container[data-v-3599c81d]{margin:0 auto;min-height:100vh}.container[data-v-3599c81d],.smallcontainer[data-v-3599c81d]{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-around;align-items:flex-start;align-content:center;justify-content:space-between}.smallcontainer[data-v-3599c81d]{margin:10px;text-align:center}.login[data-v-3599c81d]{margin-top:10px;min-height:10vh;display:flex;flex-direction:column;flex-wrap:wrap;align-items:center;align-content:center;justify-content:space-between}.element[data-v-3599c81d]{background:#f7f7f7;border:1px solid #707070;padding:0 0 0 10px;border-radius:15px;display:flex;flex:0 0 50%;flex-wrap:wrap;width:400px}.pasos h2[data-v-3599c81d]:before{content:"";display:inline-block;width:28px;height:51px;background:#851819;margin-right:10px;position:relative;top:16px}.pasos h2[data-v-3599c81d]{font-weight:700;font-size:28px}.pasos h2 .paso-subtitle[data-v-3599c81d]{font-weight:100}.banner[data-v-3599c81d],.banner img[data-v-3599c81d]{width:100%}.title[data-v-3599c81d]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-3599c81d]{font-weight:300;font-size:38px;color:#526488;word-spacing:5px;padding-bottom:10px}.links[data-v-3599c81d]{padding-top:15px}.card_home[data-v-3599c81d]{margin:0 20px;position:relative}.card_home img[data-v-3599c81d]{width:100%}#pasos[data-v-3599c81d]{margin:40px 0 80px}#pasos h1[data-v-3599c81d]{color:#5e5e5e;text-align:center;font-size:30px;margin-bottom:30px;font-weight:700}.foot_card[data-v-3599c81d]{color:#fff;background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);text-align:center;padding:10px}figure[data-v-3599c81d]{margin:0}.foot_card h3[data-v-3599c81d]{font-size:15px;font-weight:700;margin:0;padding:0}.foot_card h4[data-v-3599c81d]{font-size:14px;margin:0;padding:0;font-weight:300}button[data-v-3599c81d]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;border:none;outline:none;height:38px;border-radius:20px;padding:6px 8px;margin-top:25px;display:block;width:150px;font-weight:700}button[data-v-3599c81d]:hover{background:#3789d3}#ubicar[data-v-3599c81d]{text-align:center;margin:25px 0 40px}.nav-item[data-v-3599c81d]{margin:0}.nav-item a[data-v-3599c81d]{text-decoration:none;color:#aa381a;padding:2px 10px;font-size:13px}.nav-item a[data-v-3599c81d]:active,.nav-item a[data-v-3599c81d]:hover{color:#3789d3}#ubicar button[data-v-3599c81d]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;border:none;outline:none;height:38px;border-radius:10px;padding:6px 8px;margin-top:25px}#ubicar input[data-v-3599c81d]{width:100%;margin-top:5px}#ubicar input[data-v-3599c81d]::-moz-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-3599c81d]:-ms-input-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-3599c81d]::placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar h2[data-v-3599c81d]{color:#5e5e5e;text-align:center;font-size:26px;margin-bottom:30px;font-weight:700}.input-data[data-v-3599c81d]{margin-top:-7px}#map[data-v-3599c81d]{margin-top:20px}#map button[data-v-3599c81d]{background:#f26424;border-radius:0;margin-top:15px;margin-bottom:20px}#map button span[data-v-3599c81d]{font-weight:700}#resultados[data-v-3599c81d]{padding:0 0 50px}#video[data-v-3599c81d]{margin-bottom:40px}.buscar-instructions[data-v-3599c81d],.ubicacion-instructions[data-v-3599c81d]{font-style:italic;margin-top:20px;display:block;font-weight:500}.titulo-buscar[data-v-3599c81d]{text-align:left;font-weight:700}@media only screen and (max-width:641px){.card_home[data-v-3599c81d]{margin-bottom:30px}.ubicacion_actual[data-v-3599c81d]{margin-top:20px}.arrow[data-v-3599c81d]:after{display:none}#pasos h1[data-v-3599c81d]{font-size:22px}#ubicar h2[data-v-3599c81d]{font-size:20px}.input-data[data-v-3599c81d]{margin-top:10px}}',""]),t.exports=e},468:function(t,e,n){"use strict";var o=n(387);n.n(o).a},469:function(t,e,n){(e=n(35)(!1)).push([t.i,'.banner[data-v-6fb7efa7],.banner img[data-v-6fb7efa7]{width:100%}.container[data-v-6fb7efa7]{margin:0 auto;min-height:100vh;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-around;align-items:flex-start;align-content:center;justify-content:space-between}.title[data-v-6fb7efa7]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-6fb7efa7]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links[data-v-6fb7efa7]{padding-top:15px}.card_home img[data-v-6fb7efa7]{width:100%}#pasos h1[data-v-6fb7efa7]{color:#5e5e5e;text-align:center;font-size:30px;margin-bottom:30px;font-weight:700}.foot_card[data-v-6fb7efa7]{color:#fff;background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);text-align:center;padding:10px}figure[data-v-6fb7efa7]{margin:0}.foot_card h3[data-v-6fb7efa7]{font-size:15px;font-weight:700;margin:0;padding:0}.foot_card h4[data-v-6fb7efa7]{font-size:14px;margin:0;padding:0;font-weight:300}#ubicar[data-v-6fb7efa7]{text-align:center;margin:25px 0 40px}#ubicar button[data-v-6fb7efa7]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;border:none;outline:none;height:38px;border-radius:10px;padding:6px 8px;margin-top:25px}#ubicar input[data-v-6fb7efa7]{width:100%;margin-top:5px}#ubicar input[data-v-6fb7efa7]::-moz-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-6fb7efa7]:-ms-input-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-6fb7efa7]::placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar h2[data-v-6fb7efa7]{color:#5e5e5e;text-align:center;font-size:26px;margin-bottom:30px;font-weight:700}.input-data[data-v-6fb7efa7]{margin-top:-7px}@media only screen and (max-width:641px){.card_home[data-v-6fb7efa7]{margin-bottom:30px}.ubicacion_actual[data-v-6fb7efa7]{margin-top:20px}.arrow[data-v-6fb7efa7]:after{display:none}#pasos h1[data-v-6fb7efa7]{font-size:22px}#ubicar h2[data-v-6fb7efa7]{font-size:20px}.input-data[data-v-6fb7efa7]{margin-top:10px}}',""]),t.exports=e},514:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("img",{attrs:{src:n(355)}})])}],footer=n(351),r=(n(7),n(5),n(4),n(2),n(6),n(44),n(17)),c=n(0),d=n(364),l=n(365),f=n(360),h=n.n(f);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}Object(d.c)("eager"),Object(d.b)("required",v(v({},l.b),{},{message:"{_field_} no puede estar en vacio"})),Object(d.b)("email",v(v({},l.a),{},{message:"{_field_} debe ser un correo electrónico válido"}));var x={name:"forgot",components:{ValidationProvider:d.a},head:function(){},data:function(){return{axiosError:{id:"",message:""},email:"",captcha:!1,dismissSecs:10,dismissCountDown:0,dismissCountDownSuccess:0,dismissCountDownAxios:0,showDismissibleAlert:!1}},mounted:function(){},computed:{},methods:{doForgot:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=t.email.length&&t.captcha){e.next=3;break}return t.dismissCountDown=t.dismissSecs,e.abrupt("return");case 3:return"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI0ODM0ODU0LCJleHAiOjE2Mjc0MjY4NTR9.f92_JmR40Xq4VIBFJGpvEk9i4mK8874zgFYZ3uUu2gM",e.prev=4,e.next=7,h()({method:"POST",url:"".concat("https://strapi.constructorespositivos.com/graphql"),headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json",Authorization:"".concat("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI0ODM0ODU0LCJleHAiOjE2Mjc0MjY4NTR9.f92_JmR40Xq4VIBFJGpvEk9i4mK8874zgFYZ3uUu2gM")},data:{query:"mutation($email: String!) {\n                        forgotPassword(email: $email) {\n                            ok\n                        }\n                    }",variables:{email:t.email}}});case 7:return n=e.sent,e.next=10,t.$hasAxiosErrors(n.data);case 10:if(t.axiosError=e.sent,0==Object.keys(t.axiosError).length){e.next=14;break}return t.dismissCountDownAxios=t.dismissSecs,e.abrupt("return");case 14:if(e.prev=14,t.loading=!1,!n.data.data.forgotPassword.ok){e.next=19;break}return t.dismissCountDownSuccess=t.dismissSecs,e.abrupt("return");case 19:t.dismissCountDown=t.dismissSecs,e.next=25;break;case 22:e.prev=22,e.t0=e.catch(14),console.log(e.t0);case 25:e.next=30;break;case 27:e.prev=27,e.t1=e.catch(4),console.error(e.t1);case 30:case"end":return e.stop()}}),e,null,[[4,27],[14,22]])})))()},countDownChanged:function(t){this.dismissCountDown=t},countDownChangedAxios:function(t){this.dismissCountDownAxios=t},countDownChangedSuccess:function(t){this.dismissCountDownSuccess=t,0==t&&this.$router.push("/")},showAlert:function(){this.dismissCountDown=this.dismissSecs}},apollo:{}},w=(n(466),n(18)),_=Object(w.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"login pasos"},[n("h3",{staticClass:"subtitle"},[t._v("RECUPERACIÕN DE CUENTA")]),t._v(" "),n("p",{staticStyle:{color:"#99210f"}},[t._v("Ingrese su correo electrónico para recuperar su contraseña")]),n("br"),t._v(" "),n("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.doForgot(e)}}},[n("div",[n("validation-provider",{attrs:{name:"Correo",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors,r=e.valid;return[n("b-form-group",[n("b-form-input",{staticClass:"element",attrs:{id:"email-input",placeholder:"* Correo Electrónico",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:r}},t._l(o,(function(e,o){return n("span",{key:o},[t._v(t._s(e))])})),0)],1)]}}])}),t._v(" "),n("b-form-group",[n("b-form-checkbox",{attrs:{id:"checkbox-captcha",name:"captcha-1",value:"true","unchecked-value":"false",switch:""},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}},[n("p",[t._v("No soy un robot")])])],1),t._v(" "),n("div",{staticClass:"smallcontainer"},[n("b-button",{on:{click:t.doForgot}},[t._v("RECUPERAR")]),t._v(" "),n("b-alert",{attrs:{show:t.dismissCountDownAxios,dismissible:"",variant:"light"},on:{dismissed:function(e){t.dismissCountDownAxios=0},"dismiss-count-down":t.countDownChangedAxios}},[n("p",[t._v("Error: "+t._s(t.axiosError.message))]),t._v(" "),n("b-progress",{attrs:{variant:"danger",max:t.dismissSecs,value:t.dismissCountDownAxios,height:"4px"}})],1),t._v(" "),n("b-alert",{attrs:{show:t.dismissCountDownSuccess,dismissible:"",variant:"light"},on:{dismissed:function(e){t.dismissCountDownSuccess=0},"dismiss-count-down":t.countDownChangedSuccess}},[n("p",[t._v("SE LE ENVIO UN CORREO ELECTRÓNICO CON UN ENLACE PARA REINICIAR SU CONTRASEÑA")]),t._v(" "),n("b-progress",{attrs:{variant:"success",max:t.dismissSecs,value:t.dismissCountDownSuccess,height:"4px"}})],1),t._v(" "),n("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"light"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[n("p",[t._v("Correo invalido/no-registrado o captcha no superado...")]),t._v(" "),n("b-progress",{attrs:{variant:"danger",max:t.dismissSecs,value:t.dismissCountDown,height:"4px"}})],1)],1)],1)])])])}),[],!1,null,"3599c81d",null).exports,y=n(357),C=n.n(y),k=(n(358),{components:{footerPage:footer.default,forgotPage:_,RangeSlider:C.a}}),S=(n(468),Object(w.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"cont"},[this._m(0),this._v(" "),e("div",{staticClass:"container pasos"},[e("forgot-page")],1),this._v(" "),e("section",[e("footerPage")],1)])}),o,!1,null,"6fb7efa7",null));e.default=S.exports}}]);