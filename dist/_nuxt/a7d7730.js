/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{350:function(e,t,n){var content=n(354);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("537eb6ce",content,!0,{sourceMap:!1})},351:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-sm-4"},[t("img",{attrs:{src:n(352)}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"copyright"},[this._v("CONSTRUCTORES POSITIVOS"),t("br"),this._v("2020")])}],r={},c=(n(353),n(18)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("footer",[n("div",{staticClass:"row"},[e._m(0),e._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("nuxt-link",{attrs:{to:"/"}},[e._v("ENCUENTRA LA CASA DE TUS SUEÑOS")]),e._v(" "),n("nuxt-link",{attrs:{to:"/visyvip"}},[e._v("PROYECTOS VIS Y VIP")]),e._v(" "),n("nuxt-link",{attrs:{to:"/insumos"}},[e._v("MATERIALES PARA LA REMODELACIÓN")])],1),e._v(" "),n("div",{staticClass:"col-sm-6"},[n("nuxt-link",{attrs:{to:"/calculadorafinanciera"}},[e._v("CALCULADORA DE CRÉDITO")]),e._v(" "),n("nuxt-link",{attrs:{to:"/quienes_somos"}},[e._v("QUIENES SOMOS")]),e._v(" "),n("nuxt-link",{attrs:{to:"/blog"}},[e._v("BLOG Y NOTICIAS")])],1)])]),e._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"social_links"},[n("div",{staticClass:"social_link fb"},[n("a",{attrs:{href:"https://www.facebook.com/constructurespositivosecuador",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),e._v(" "),n("div",{staticClass:"social_link ig"},[n("a",{attrs:{href:"https://www.instagram.com/constructorespositivos/?igshid=q4jnx0yhs6yv",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),e._v(" "),n("div",{staticClass:"social_link twitter"},[n("a",{attrs:{href:"https://twitter.com/Construpositivo",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])])])])]),e._v(" "),e._m(1)])}),o,!1,null,"a1aac506",null);t.default=component.exports;installComponents(component,{Footer:n(351).default})},352:function(e,t,n){e.exports=n.p+"img/footer_registra_proyecto.382e4dc.png"},353:function(e,t,n){"use strict";var o=n(350);n.n(o).a},354:function(e,t,n){(t=n(35)(!1)).push([e.i,"footer[data-v-a1aac506]{width:100%;background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);padding:20px 80px}footer img[data-v-a1aac506]{width:100%;max-width:422px}footer a[data-v-a1aac506]{display:block;color:#fff;font-weight:700}.social_link[data-v-a1aac506]{display:inline-block;margin:0 10px;color:#fff}.copyright[data-v-a1aac506]{margin-top:10px;margin-bottom:10px;text-align:center;font-size:13px}.social_link[data-v-a1aac506]{font-size:24px}@media only screen and (max-width:641px){a[data-v-a1aac506]{font-size:14px;margin:4px 0}}",""]),e.exports=t},355:function(e,t,n){e.exports=n.p+"img/banner_servicios.ea6567a.jpg"},357:function(e,t,n){"use strict";var o={created:function(){"undefined"!=typeof document&&c(this,(function(e,t){var n,o,c,l;n=document,o=e,c=t,l=r?{passive:!1}:void 0,n.addEventListener(o,c,l)}))},beforeDestroy:function(){"undefined"!=typeof document&&c(this,(function(e,t){var n,o,c,l;n=document,o=e,c=t,l=r?{passive:!1}:void 0,n.removeEventListener(o,c,l)}))}},r="undefined"!=typeof window&&function(){var e=!1;try{var desc={get:function(){e=!0}},t=Object.defineProperty({},"passive",desc);window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){e=!1}return e}();function c(e,t){var n=e.$options.events;Object.keys(n).forEach((function(o){t(o,(function(t){return n[o].call(e,t)}))}))}function l(e,base){var t=base.getBoundingClientRect();return{left:e.clientX-t.left,top:e.clientY-t.top}}var d={mixins:[o],props:{disabled:Boolean},data:function(){return{isDrag:!1}},events:{mousedown:function(e){return this.dragStart(e,this.offsetByMouse)},mousemove:function(e){return this.dragMove(e,this.offsetByMouse)},mouseup:function(e){return this.dragEnd(e,this.offsetByMouse)},touchstart:function(e){return this.dragStart(e,this.offsetByTouch)},touchmove:function(e){return this.dragMove(e,this.offsetByTouch)},touchend:function(e){return this.dragEnd(e,this.offsetByTouch)},touchcancel:function(e){return this.dragEnd(e,this.offsetByTouch)}},methods:{isInTarget:function(e){return!!e&&(e===this.$el||this.isInTarget(e.parentElement))},offsetByMouse:function(e){return l(e,this.$el)},offsetByTouch:function(e){return l(0===e.touches.length?e.changedTouches[0]:e.touches[0],this.$el)},dragStart:function(e,t){this.disabled||void 0!==e.button&&0!==e.button||!this.isInTarget(e.target)||(e.preventDefault(),this.isDrag=!0,this.$emit("dragstart",e,t(e),this.$el))},dragMove:function(e,t){this.isDrag&&(e.preventDefault(),this.$emit("drag",e,t(e),this.$el))},dragEnd:function(e,t){this.isDrag&&(e.preventDefault(),this.isDrag=!1,this.$emit("dragend",e,t(e),this.$el))}},render:function(){return this.$slots.default&&this.$slots.default[0]}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"range-slider",class:{disabled:e.disabled}},[n("drag-helper",{attrs:{disabled:e.disabled},on:{dragstart:e.dragStart,drag:e.drag,dragend:e.dragEnd}},[n("span",{ref:"inner",staticClass:"range-slider-inner"},[n("input",{staticClass:"range-slider-hidden",attrs:{type:"text",name:e.name,disabled:e.disabled},domProps:{value:e.actualValue}}),e._v(" "),n("span",{staticClass:"range-slider-rail"}),e._v(" "),n("span",{staticClass:"range-slider-fill",style:{width:e.valuePercent+"%"}}),e._v(" "),n("span",{ref:"knob",staticClass:"range-slider-knob",style:{left:e.valuePercent+"%"}},[e._t("knob")],2)])])],1)},staticRenderFns:[],props:{name:String,value:[String,Number],disabled:{type:Boolean,default:!1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},step:{type:[String,Number],default:1}},data:function(){return{actualValue:null,dragStartValue:null}},created:function(){var e=this._min,t=this._max,n=Number(this.value);(null==this.value||isNaN(n))&&(n=e>t?e:(e+t)/2),this.actualValue=this.round(n)},computed:{_min:function(){return Number(this.min)},_max:function(){return Number(this.max)},_step:function(){return Number(this.step)},valuePercent:function(){return(this.actualValue-this._min)/(this._max-this._min)*100}},watch:{value:function(e){var t=Number(e);null==e||isNaN(t)||(this.actualValue=this.round(t))},min:function(){this.actualValue=this.round(this.actualValue)},max:function(){this.actualValue=this.round(this.actualValue)}},methods:{dragStart:function(e,t){this.dragStartValue=this.actualValue,e.target!==this.$refs.knob&&this.drag(e,t)},drag:function(e,t){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(t.left,n)),this.emitInput(this.actualValue)},dragEnd:function(e,t){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(t.left,n)),this.dragStartValue!==this.actualValue&&this.emitChange(this.actualValue)},emitInput:function(e){this.$emit("input",e)},emitChange:function(e){this.$emit("change",e)},valueFromBounds:function(e,t){return e/t*(this._max-this._min)+this._min},round:function(e){return function(e,t,n,o){if(e<=t)return t;var r=Math.floor((n-t)/o)*o+t;if(e>=r)return r;var c=(e-t)/o,l=Math.floor(c),d=c-l;return 0===d?e:d<.5?o*l+t:o*(l+1)+t}(e,this._min,this._max,this._step)}},components:{DragHelper:d}};e.exports=m},358:function(e,t,n){var content=n(359);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("ccf3550a",content,!0,{sourceMap:!1})},359:function(e,t,n){(t=n(35)(!1)).push([e.i,".range-slider{display:inline-block;padding:0 10px;height:20px;width:100%}.range-slider.disabled{opacity:.5}.range-slider-inner{display:inline-block;position:relative;height:100%;width:100%}.range-slider-fill,.range-slider-rail{display:block;position:absolute;top:50%;left:0;height:8px;border-radius:2px;transform:translateY(-50%)}.range-slider-rail{width:100%;background-color:#e2e2e2}.range-slider-fill{background-color:#f7632e}.range-slider-knob{display:block;position:absolute;top:50%;left:0;box-sizing:border-box;height:20px;width:20px;border:1px solid #f5f5f5;border-radius:50%;background-color:#fff;box-shadow:1px 1px rgba(0,0,0,.2);transform:translate(-50%,-50%);cursor:pointer}.range-slider-hidden{display:none}",""]),e.exports=t},389:function(e,t,n){var content=n(475);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("6f993278",content,!0,{sourceMap:!1})},390:function(e,t,n){var content=n(477);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("7779e8c4",content,!0,{sourceMap:!1})},391:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},392:function(e,t,n){e.exports=n.p+"img/arrow.bbd4c27.png"},472:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getUser"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"firstname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"provider"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"confirmed"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"blocked"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:160}};n.loc.source={body:"query getUser($id: ID!) {\n  user(id: $id) {\n    id\n    firstname\n    lastname\n    provider\n    confirmed\n    blocked\n    role {\n      id\n      name\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function r(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var o=t.type;"NamedType"===o.kind&&n.add(o.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,n)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,n)})),t.definitions&&t.definitions.forEach((function(t){e(t,n)}))}(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.getUser=function(e,t){var n={kind:e.kind,definitions:[r(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var c=o[t]||new Set,l=new Set,d=new Set;for(c.forEach((function(e){d.add(e)}));d.size>0;){var m=d;d=new Set,m.forEach((function(e){l.has(e)||(l.add(e),(o[e]||new Set).forEach((function(e){d.add(e)})))}))}return l.forEach((function(t){var o=r(e,t);o&&n.definitions.push(o)})),n}(n,"getUser")},473:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"login"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"identifier"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"password"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"login"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"identifier"},value:{kind:"Variable",name:{kind:"Name",value:"identifier"}}},{kind:"ObjectField",name:{kind:"Name",value:"password"},value:{kind:"Variable",name:{kind:"Name",value:"password"}}},{kind:"ObjectField",name:{kind:"Name",value:"provider"},value:{kind:"StringValue",value:"local",block:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"jwt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:274}};n.loc.source={body:'mutation login($identifier: String!, $password: String!) {\n  login(\n    input: { identifier: $identifier, password: $password, provider: "local" }\n  ) {\n    jwt\n    user {\n      username\n      email\n      id\n      role {\n        name\n        description\n      }\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function r(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var o=t.type;"NamedType"===o.kind&&n.add(o.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,n)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,n)})),t.definitions&&t.definitions.forEach((function(t){e(t,n)}))}(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.login=function(e,t){var n={kind:e.kind,definitions:[r(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var c=o[t]||new Set,l=new Set,d=new Set;for(c.forEach((function(e){d.add(e)}));d.size>0;){var m=d;d=new Set,m.forEach((function(e){l.has(e)||(l.add(e),(o[e]||new Set).forEach((function(e){d.add(e)})))}))}return l.forEach((function(t){var o=r(e,t);o&&n.definitions.push(o)})),n}(n,"login")},474:function(e,t,n){"use strict";var o=n(389);n.n(o).a},475:function(e,t,n){(t=n(35)(!1)).push([e.i,'.element[data-v-c75b867e]{background:#f7f7f7;border:1px solid #707070;padding:0 0 0 10px;border-radius:15px;margin-top:10px;display:flex;flex:0 0 50%;flex-wrap:wrap;width:100%}button[data-v-c75b867e]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;border:none;outline:none;height:38px;border-radius:20px;padding:6px 8px;margin:10px;/display:block;/width:150px;font-weight:700}button[data-v-c75b867e]:hover{background:#3789d3}.nav-item[data-v-c75b867e]{margin:0}.nav-item a[data-v-c75b867e]{text-decoration:none;color:#aa381a;/border:1px solid #aa381a;/padding:2px 10px;/border-radius:8px;/font-size:13px}.nav-item a[data-v-c75b867e]:active,.nav-item a[data-v-c75b867e]:hover{color:#3789d3}.banner[data-v-c75b867e],.banner img[data-v-c75b867e]{width:100%}.title[data-v-c75b867e]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-c75b867e]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links[data-v-c75b867e]{padding-top:15px}.card_home[data-v-c75b867e]{margin:0 20px;position:relative}.card_home img[data-v-c75b867e]{width:100%}#pasos[data-v-c75b867e]{margin:40px 0 80px}#pasos h1[data-v-c75b867e]{color:#5e5e5e;text-align:center;font-size:30px;margin-bottom:30px;font-weight:700}.foot_card[data-v-c75b867e]{color:#fff;background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);text-align:center;padding:10px}figure[data-v-c75b867e]{margin:0}.foot_card h3[data-v-c75b867e]{font-size:15px;font-weight:700;margin:0;padding:0}.foot_card h4[data-v-c75b867e]{font-size:14px;margin:0;padding:0;font-weight:300}#ubicar[data-v-c75b867e]{text-align:center;margin:25px 0 40px}#ubicar button[data-v-c75b867e]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;border:none;outline:none;height:38px;border-radius:10px;padding:6px 8px;margin-top:25px}#ubicar input[data-v-c75b867e]{width:100%;margin-top:5px}#ubicar input[data-v-c75b867e]::-moz-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-c75b867e]:-ms-input-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-c75b867e]::placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar h2[data-v-c75b867e]{color:#5e5e5e;text-align:center;font-size:26px;margin-bottom:30px;font-weight:700}.input-data[data-v-c75b867e]{margin-top:-7px}#map[data-v-c75b867e]{margin-top:20px}#map button[data-v-c75b867e]{background:#f26424;border-radius:0;margin-top:15px;margin-bottom:20px}#map button span[data-v-c75b867e]{font-weight:700}#resultados[data-v-c75b867e]{padding:0 0 50px}#video[data-v-c75b867e]{margin-bottom:40px}.buscar-instructions[data-v-c75b867e],.ubicacion-instructions[data-v-c75b867e]{font-style:italic;margin-top:20px;display:block;font-weight:500}.titulo-buscar[data-v-c75b867e]{text-align:left;font-weight:700}@media only screen and (max-width:641px){.card_home[data-v-c75b867e]{margin-bottom:30px}.ubicacion_actual[data-v-c75b867e]{margin-top:20px}.arrow[data-v-c75b867e]:after{display:none}#pasos h1[data-v-c75b867e]{font-size:22px}#ubicar h2[data-v-c75b867e]{font-size:20px}.input-data[data-v-c75b867e]{margin-top:10px}}',""]),e.exports=t},476:function(e,t,n){"use strict";var o=n(390);n.n(o).a},477:function(e,t,n){var o=n(35),r=n(391),c=n(392);t=o(!1);var l=r(c);t.push([e.i,'.banner[data-v-79ce3e4a],.banner img[data-v-79ce3e4a]{width:100%}.title[data-v-79ce3e4a]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-79ce3e4a]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links[data-v-79ce3e4a]{padding-top:15px}.card_home[data-v-79ce3e4a]{margin:0 20px;position:relative}.arrow[data-v-79ce3e4a]:after{content:"";display:block;width:30px;height:30px;position:absolute;background:url('+l+");background-repeat:no-repeat;background-size:contain;top:131px;right:-55px}.card_home img[data-v-79ce3e4a]{width:100%}#pasos[data-v-79ce3e4a]{margin:40px 0 80px}#pasos h1[data-v-79ce3e4a]{color:#5e5e5e;text-align:center;font-size:30px;margin-bottom:30px;font-weight:700}.foot_card[data-v-79ce3e4a]{color:#fff;background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);text-align:center;padding:10px}figure[data-v-79ce3e4a]{margin:0}.foot_card h3[data-v-79ce3e4a]{font-size:15px;font-weight:700;margin:0;padding:0}.foot_card h4[data-v-79ce3e4a]{font-size:14px;margin:0;padding:0;font-weight:300}#ubicar[data-v-79ce3e4a]{text-align:center;margin:25px 0 40px}#ubicar button[data-v-79ce3e4a]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;border:none;outline:none;height:38px;border-radius:10px;padding:6px 8px;margin-top:25px}#ubicar input[data-v-79ce3e4a]{width:100%;margin-top:5px}#ubicar input[data-v-79ce3e4a]::-moz-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-79ce3e4a]:-ms-input-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-79ce3e4a]::placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar h2[data-v-79ce3e4a]{color:#5e5e5e;text-align:center;font-size:26px;margin-bottom:30px;font-weight:700}.input-data[data-v-79ce3e4a]{margin-top:-7px}#map[data-v-79ce3e4a]{margin-top:20px}#map button[data-v-79ce3e4a]{background:#f26424;border-radius:0;margin-top:15px;margin-bottom:20px}#map button span[data-v-79ce3e4a]{font-weight:700}#resultados[data-v-79ce3e4a]{padding:0 0 50px}#video[data-v-79ce3e4a]{margin-bottom:40px}.buscar-instructions[data-v-79ce3e4a],.ubicacion-instructions[data-v-79ce3e4a]{font-style:italic;margin-top:20px;display:block;font-weight:500}.titulo-buscar[data-v-79ce3e4a]{text-align:left;font-weight:700}@media only screen and (max-width:641px){.card_home[data-v-79ce3e4a]{margin-bottom:30px}.ubicacion_actual[data-v-79ce3e4a]{margin-top:20px}.arrow[data-v-79ce3e4a]:after{display:none}#pasos h1[data-v-79ce3e4a]{font-size:22px}#ubicar h2[data-v-79ce3e4a]{font-size:20px}.input-data[data-v-79ce3e4a]{margin-top:10px}}",""]),e.exports=t},522:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"banner"},[t("img",{attrs:{src:n(355)}})])}],r=(n(4),n(2),n(6),n(19),n(44),n(17)),footer=n(351),c=(n(7),n(5),n(0)),l=n(362),d=n(363),m=n(472),f=n.n(m),v=n(473),h=n.n(v);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(l.c)("eager"),Object(l.b)("required",k(k({},d.b),{},{message:"{field} no puede estar en vacio"})),Object(l.b)("email",k(k({},d.a),{},{message:"{field} debe ser un correo electrónico válido"}));var w={name:"login",components:{ValidationProvider:l.a},head:function(){},data:function(){return{axiosError:{id:"",message:""},email:"",password:"",captcha:!1,dismissSecs:10,dismissCountDown:0,dismissCountDownAxios:0,showDismissibleAlert:!1,user:{firstname:"",lastname:"",token:"",username:"",id:0,role:"",email:"",confirmed:!1,bocked:!1,provider:""}}},mounted:function(){},computed:{},methods:{doLogin:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=e.email.length&&0!=e.password.length&&e.captcha){t.next=3;break}return e.dismissCountDown=e.dismissSecs,t.abrupt("return");case 3:return t.next=5,e.validateCredentials();case 5:case"end":return t.stop()}}),t)})))()},countDownChanged:function(e){this.dismissCountDown=e},countDownAxiosChanged:function(e){this.dismissCountDownAxios=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},validateCredentials:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$apollo.mutate({mutation:h.a,variables:{identifier:e.email,password:e.password}});case 3:if((n=t.sent).data.login.user.id){t.next=7;break}return e.dismissCountDownAxios=e.dismissSecs,t.abrupt("return");case 7:return e.user.token=n.data.login.jwt,e.user.username=n.data.login.user.username,e.user.id=n.data.login.user.id,e.user.role=n.data.login.user.role.name,e.user.email=n.data.login.user.email,e.loading=!1,t.next=15,e.getUser();case 15:if(t.sent){t.next=17;break}return t.abrupt("return");case 17:return t.next=20,e.$store.commit("auth/USER_LOGIN",e.user);case 20:localStorage.setItem("user",JSON.stringify(e.user));case 21:e.$router.push("/servicio/registro"),t.next=30;break;case 24:return t.prev=24,t.t0=t.catch(0),t.next=28,e.$hasAxiosErrors(t.t0);case 28:e.axiosError=t.sent,e.axiosError.id&&(e.dismissCountDownAxios=e.dismissSecs);case 30:case"end":return t.stop()}}),t,null,[[0,24]])})))()},getUser:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$apollo.queries.getUser.skip=!1,t.next=4,e.$apollo.queries.getUser.refetch();case 4:if((n=t.sent).data.user.id){t.next=8;break}return e.dismissCountDownAxios=e.dismissSecs,t.abrupt("return");case 8:return e.user.firstname=n.data.user.firstname,e.user.lastname=n.data.user.lastname,e.user.blocked=n.data.user.blocked,e.user.confirmed=n.data.user.confirmed,e.user.provider=n.data.user.provider,e.loading=!1,t.abrupt("return",!0);case 17:return t.prev=17,t.t0=t.catch(0),t.next=21,e.$hasAxiosErrors(t.t0);case 21:e.axiosError=t.sent,e.axiosError.id&&(e.dismissCountDownAxios=e.dismissSecs);case 23:case"end":return t.stop()}}),t,null,[[0,17]])})))()}},apollo:{getUser:{prefetch:!1,query:f.a,variables:function(){return{id:parseInt(this.user.id)}},skip:function(){return this.skipQuery}}}},y=(n(474),n(18)),_=Object(y.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"cont"},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col"),e._v(" "),n("b-col",{staticClass:"w-100 p-3 mb-1"},[n("h3",{staticClass:"subtitle"},[e._v("ACCEDER")]),e._v(" "),n("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.doLogin(t)}}},[n("div",[n("validation-provider",{attrs:{name:"Correo",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,r=t.valid;return[n("b-form-group",[n("b-form-input",{staticClass:"element",attrs:{id:"email-input",placeholder:"* Correo Electrónico",type:"email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("b-form-invalid-feedback",{attrs:{state:r}},e._l(o,(function(t,o){return n("span",{key:o},[e._v(e._s(t))])})),0)],1)]}}])}),e._v(" "),n("validation-provider",{attrs:{name:"Contraseña",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors,r=t.valid;return[n("b-form-group",[n("b-form-input",{staticClass:"element",attrs:{id:"password-input",placeholder:"* Contraseña",type:"password",required:"",autocomplete:"on"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),n("b-form-invalid-feedback",{attrs:{state:r}},e._l(o,(function(t,o){return n("span",{key:o},[e._v(e._s(t))])})),0)],1)]}}])}),e._v(" "),n("b-form-group",[n("b-form-checkbox",{attrs:{id:"checkbox-captcha",name:"captcha-1",value:"true","unchecked-value":"false",switch:""},model:{value:e.captcha,callback:function(t){e.captcha=t},expression:"captcha"}},[n("p",[e._v("No soy un robot")])])],1),e._v(" "),n("div",[n("b-button",{on:{click:e.doLogin}},[e._v("INICIAR SESION")]),e._v(" "),n("b-alert",{attrs:{show:e.dismissCountDownAxios,dismissible:"",variant:"light"},on:{dismissed:function(t){e.dismissCountDownAxios=0},"dismiss-count-down":e.countDownAxiosChanged}},[n("p",[e._v("Error: "+e._s(e.axiosError.message))]),e._v(" "),n("b-progress",{attrs:{variant:"danger",max:e.dismissSecs,value:e.dismissCountDownAxios,height:"4px"}})],1),e._v(" "),n("b-alert",{attrs:{show:e.dismissCountDown,dismissible:"",variant:"light"},on:{dismissed:function(t){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[n("p",[e._v("Los datos no estan completos o no resolvio el captcha...")]),e._v(" "),n("b-progress",{attrs:{variant:"danger",max:e.dismissSecs,value:e.dismissCountDown,height:"4px"}})],1),e._v(" "),n("div",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/authentication/forgot"}},[e._v("Olvidaste tu contraseña?")])],1),e._v(" "),n("div",{staticClass:"nav-item"},[n("nuxt-link",{attrs:{to:"/authentication/signup"}},[e._v("CREAR CUENTA")])],1)],1)],1)])]),e._v(" "),n("b-col")],1)],1)],1)])])}),[],!1,null,"c75b867e",null).exports,S=n(364),C=n.n(S),E=n(357),N=n.n(E),O=(n(358),{components:{footerPage:footer.default,RangeSlider:N.a,loginPage:_},data:function(){return{nombre:"",apellido:"",email:"",nameState:null,lastnameState:null,emailState:null,distancia:1,mapCenter:{lat:-.1984136,lng:-78.495783},markers:[{position:{lat:-.1984196,lng:-78.495753}}],proyectos:[],proyecto_id_string:"",proyectos_detallados:[],resultados_proyectos:!1,lat:-.18558429549488542,long:-78.48053330227975,loading:!1,registroShow:!1,registrado:!1,website:"",ubicacion:"",autocomplete:null}},methods:{checkFormValidity:function(){var e=this.$refs.form.checkValidity();return this.nameState=e,e},mostrarResultados:function(){this.loading=!0,this.$ga.event({eventCategory:"proyectos",eventAction:"buscar"}),this.getProyectosCercanos()},getUserLocation:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("getUserLocation"),t.prev=1,t.next=4,e.$getLocation({enableHighAccuracy:!0});case 4:n=t.sent,e.mapCenter=n,e.lat=e.mapCenter.lat,e.long=e.mapCenter.lng,console.log(n),e.gotoMyLocation(),e.getGeoCode(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),e.noLocation=!0;case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))()},gotoMyLocation:function(){var map=this.$refs.gMap.map,e=map.markers[0];map.setCenter(new google.maps.LatLng(this.lat,this.long)),e.setPosition(new google.maps.LatLng(this.lat,this.long))},getProyectosCercanos:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.proyectos="",t.prev=1,t.next=4,C()({method:"POST",url:"https://api.constructorespositivos.com/api-web",headers:{"Access-Control-Allow-Origin":"*"},data:{query:"{\n                proyectosCercanos(latitude:".concat(e.lat,", longitude: ").concat(e.long,", distance: ").concat(e.distancia,") {\n                        id\n                        nombre\n                        informacion\n                        slug\n                        latitude\n                        longitude\n                        amenities\n                        email_proyecto\n                        website_proyecto\n                        desde\n                        hasta\n                        nombre_contacto\n                        telefono_contacto\n                        Constructora{\n                          nombre_constructora\n                      }\n                        files{\n                              uploadFile {\n                                url\n                              }\n                            }\n                  }\n                    }    ")}});case 4:n=t.sent;try{data=n.data.data.proyectosCercanos,e.proyectos=data,e.clearMarkers(),e.addMarkers(e.proyectos),e.resultados_proyectos=!0,e.loading=!1}catch(e){}t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),t,null,[[1,8]])})))()},getLatLongMap:function(){this.$refs.gMap.map;var e=this.$refs.gMap.map.getCenter();this.lat=e.lat(),this.long=e.lng(),this.$refs.gMap.map.markers[0].setPosition(new google.maps.LatLng(this.lat,this.long))},getGeoCode:function(){var e=this,t=new google.maps.Geocoder,n={lat:this.lat,lng:this.long};t.geocode({location:n},(function(t,n){if(null!=t&&t[0]){console.log(t);var o=t[0].address_components;o.forEach((function(element){"route"==element.types[0]&&(e.ubicacion=element.long_name)})),o=[]}}))},clearMarkers:function(){for(var i=1;i<this.markers.length;i++)this.markers[i].setMap(null);this.markers.length=1},addMarkers:function(e){var t=this,map=this.$refs.gMap.map;e.forEach((function(element){var e=new google.maps.LatLng(element.latitude,element.longitude),marker=new google.maps.Marker({position:e,map:map,title:element.nombre});t.markers.push(marker);var n=new google.maps.InfoWindow;google.maps.event.addListener(marker,"click",(function(){var e;e=element.files.length>0?'<img style="max-width:200px" src="https://strapi.constructorespositivos.com'.concat(element.files[0].uploadFile.url,'"/>'):"",n.setContent('<div style="text-align:left;font-weight:bold">'.concat(element.nombre,'</div><div style="text-align:left"><span style="font-weight:bold">Constructora: </span>').concat(element.Constructora.nombre_constructora,'</div><div style="text-align:left"><span style="font-weight:bold">Precios desde:</span> $').concat(element.desde,"</div>").concat(e,"<div></div>")),n.open(map,this)}))}))},showRegistro:function(e){console.log("show registro"+e),this.website=e,this.registrado?window.open(this.website):this.registroShow=!0},handleSubmit:function(){var e=this;console.log("submit"),this.checkFormValidity()&&(this.$store.commit("subscribe/SET_EMAIL",this.email),localStorage.setItem("user_email",this.email),this.$nextTick((function(){e.$bvModal.hide("modal-prevent-closing"),e.registroShow=!1,e.registrado=!0,e.sendData()})))},sendData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("sending data"),(n=new FormData).append("nombre",e.nombre),n.append("apellido",e.apellido),n.append("email",e.email),"createUser",o={headers:{"Content-Type":"text/plain"}},C.a.post("https://fmwlab.com/constructores/api/usuarios.php?actions=createUser",n,o).then((function(t){return window.open(e.website)}));case 8:case"end":return t.stop()}}),t)})))()},checkData:function(e){},handleOk:function(e){e.preventDefault(),this.handleSubmit()},closeVideo:function(){this.video=!1},autoComplete:function(){var e=this;null==this.autocomplete&&null!=google&&(this.autocomplete=new google.maps.places.Autocomplete(document.getElementById("ubicacionSearch"),{componentRestrictions:{country:"ec"}}),google.maps.event.addListener(this.autocomplete,"place_changed",(function(){var t=e.autocomplete.getPlace();null!=t.address_components&&(e.lat=t.geometry.location.lat(),e.long=t.geometry.location.lng(),e.ubicacion=t.name,e.$refs.gMap.map.setCenter(new google.maps.LatLng(e.lat,e.long)),e.$refs.gMap.map.markers[0].setPosition(new google.maps.LatLng(e.lat,e.long)))})))},onKeyUpEnterCompleteSearch:function(){var e=this,t={input:this.ubicacion},n=new google.maps.places.AutocompleteService,o=new google.maps.Geocoder;n.getPlacePredictions(t,(function(t,n){n==google.maps.places.PlacesServiceStatus.OK&&(console.log(t[0]),o.geocode({placeId:t[0].place_id},(function(t,n){n==google.maps.GeocoderStatus.OK&&(e.lat=t[0].geometry.location.lat(),e.long=t[0].geometry.location.lng())})))}))}},computed:{latlong:function(){return"Lat:".concat(this.lat,", Long:").concat(this.long)},isLogged:function(){try{return 0!==Object.keys(localStorage.getItem("user")).length}catch(e){return!1}}},watch:{ubicacion:function(e,t){""==t&&null==this.autocomplete&&this.autoComplete()}},mounted:function(){null!=localStorage.getItem("user_email")&&(this.registrado=!0)}}),D=(n(476),Object(y.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"cont"},[n("b-modal",{attrs:{title:"Déjanos tus datos"},on:{ok:e.handleOk},model:{value:e.registroShow,callback:function(t){e.registroShow=t},expression:"registroShow"}},[n("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[n("b-form-group",{attrs:{label:"Nombre","label-for":"name-input","invalid-feedback":"El nombre es requerido",state:e.nameState}},[n("b-form-input",{attrs:{id:"name-input",state:e.nameState,required:""},model:{value:e.nombre,callback:function(t){e.nombre=t},expression:"nombre"}})],1),e._v(" "),n("b-form-group",{attrs:{label:"Apellido","label-for":"last-input","invalid-feedback":"El apellido es requerido",state:e.lastnameState}},[n("b-form-input",{attrs:{id:"last-input",state:e.lastnameState,required:""},model:{value:e.apellido,callback:function(t){e.apellido=t},expression:"apellido"}})],1),e._v(" "),n("b-form-group",{attrs:{label:"Email","label-for":"email-input","invalid-feedback":"El Email es requerido"}},[n("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"@",state:e.emailState}},[n("b-form-input",{attrs:{id:"email-input",state:e.emailState,type:"email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1)],1)]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"container"},[n("login-page")],1),e._v(" "),n("section",[n("footerPage")],1)],1)}),o,!1,null,"79ce3e4a",null));t.default=D.exports}}]);