(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{350:function(t,e,n){var content=n(354);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("53e02bd3",content,!0,{sourceMap:!1})},351:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-4"},[e("img",{attrs:{src:n(352)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"copyright"},[this._v("CONSTRUCTORES POSITIVOS"),e("br"),this._v("2020")])}],r={},d=(n(353),n(18)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("LA CASA DE TUS SUEÑOS")]),t._v(" "),n("nuxt-link",{attrs:{to:"/visyvip"}},[t._v("PROYECTOS VIS Y VIP")]),t._v(" "),n("nuxt-link",{attrs:{to:"/insumos"}},[t._v("PROVEEDOR MATERIALES")]),t._v(" "),n("nuxt-link",{attrs:{to:"/servicios"}},[t._v("ESPECIALISTAS")])],1),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("nuxt-link",{attrs:{to:"/calculadorafinanciera"}},[t._v("CALCULADORA")]),t._v(" "),n("nuxt-link",{attrs:{to:"/quienes_somos"}},[t._v("QUIENES SOMOS")]),t._v(" "),n("nuxt-link",{attrs:{to:"/blog"}},[t._v("BLOG")])],1)])]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"social_links"},[n("div",{staticClass:"social_link fb"},[n("a",{attrs:{href:"https://www.facebook.com/constructurespositivosecuador",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),t._v(" "),n("div",{staticClass:"social_link ig"},[n("a",{attrs:{href:"https://www.instagram.com/constructorespositivos/?igshid=q4jnx0yhs6yv",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),t._v(" "),n("div",{staticClass:"social_link twitter"},[n("a",{attrs:{href:"https://twitter.com/Construpositivo",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])])])])]),t._v(" "),t._m(1)])}),o,!1,null,"5ec0ca18",null);e.default=component.exports;installComponents(component,{Footer:n(351).default})},352:function(t,e,n){t.exports=n.p+"img/footer_registra_proyecto.382e4dc.png"},353:function(t,e,n){"use strict";var o=n(350);n.n(o).a},354:function(t,e,n){(e=n(35)(!1)).push([t.i,"footer[data-v-5ec0ca18]{width:100%;background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);padding:20px 80px}footer img[data-v-5ec0ca18]{width:100%;max-width:422px}footer a[data-v-5ec0ca18]{display:block;color:#fff;font-weight:700}.social_link[data-v-5ec0ca18]{display:inline-block;margin:0 10px;color:#fff}.copyright[data-v-5ec0ca18]{margin-top:10px;margin-bottom:10px;text-align:center;font-size:13px}.social_link[data-v-5ec0ca18]{font-size:24px}@media only screen and (max-width:641px){a[data-v-5ec0ca18]{font-size:14px;margin:4px 0}}",""]),t.exports=e},355:function(t,e,n){t.exports=n.p+"img/banner_servicios.ea6567a.jpg"},397:function(t,e,n){var content=n(490);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("297e661b",content,!0,{sourceMap:!1})},398:function(t,e,n){var content=n(492);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("7feff9d8",content,!0,{sourceMap:!1})},488:function(t,e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"register"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"UsersPermissionsRegisterInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"register"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"jwt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:202}};n.loc.source={body:"mutation register ($input: UsersPermissionsRegisterInput!) {\n      register(input: $input) {\n          jwt,\n          user{\n            username\n            email\n            id\n          }\n      }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function r(t,e){for(var i=0;i<t.definitions.length;i++){var element=t.definitions[i];if(element.name&&element.name.value==e)return element}}n.definitions.forEach((function(t){if(t.name){var e=new Set;!function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var o=e.type;"NamedType"===o.kind&&n.add(o.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}(t,e),o[t.name.value]=e}})),t.exports=n,t.exports.register=function(t,e){var n={kind:t.kind,definitions:[r(t,e)]};t.hasOwnProperty("loc")&&(n.loc=t.loc);var d=o[e]||new Set,c=new Set,l=new Set;for(d.forEach((function(t){l.add(t)}));l.size>0;){var f=l;l=new Set,f.forEach((function(t){c.has(t)||(c.add(t),(o[t]||new Set).forEach((function(t){l.add(t)})))}))}return c.forEach((function(e){var o=r(t,e);o&&n.definitions.push(o)})),n}(n,"register")},489:function(t,e,n){"use strict";var o=n(397);n.n(o).a},490:function(t,e,n){(e=n(35)(!1)).push([t.i,'.element[data-v-5ed62923]{background:#f7f7f7;border:1px solid #707070;padding:0 0 0 10px;border-radius:15px;margin-top:10px;display:flex;flex:0 0 50%;flex-wrap:wrap;width:100%}button[data-v-5ed62923]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;border:none;outline:none;height:38px;border-radius:20px;padding:6px 8px;margin:10px;/display:block;/width:150px;font-weight:700}button[data-v-5ed62923]:hover{background:#3789d3}.nav-item[data-v-5ed62923]{margin:0}.nav-item a[data-v-5ed62923]{text-decoration:none;color:#aa381a;/border:1px solid #aa381a;/padding:2px 10px;/border-radius:8px;/font-size:13px}.nav-item a[data-v-5ed62923]:active,.nav-item a[data-v-5ed62923]:hover{color:#3789d3}.banner[data-v-5ed62923],.banner img[data-v-5ed62923]{width:100%}.title[data-v-5ed62923]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-5ed62923]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links[data-v-5ed62923]{padding-top:15px}.card_home[data-v-5ed62923]{margin:0 20px;position:relative}.card_home img[data-v-5ed62923]{width:100%}#pasos[data-v-5ed62923]{margin:40px 0 80px}#pasos h1[data-v-5ed62923]{color:#5e5e5e;text-align:center;font-size:30px;margin-bottom:30px;font-weight:700}.foot_card[data-v-5ed62923]{color:#fff;background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);text-align:center;padding:10px}figure[data-v-5ed62923]{margin:0}.foot_card h3[data-v-5ed62923]{font-size:15px;font-weight:700;margin:0;padding:0}.foot_card h4[data-v-5ed62923]{font-size:14px;margin:0;padding:0;font-weight:300}#ubicar[data-v-5ed62923]{text-align:center;margin:25px 0 40px}#ubicar button[data-v-5ed62923]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;border:none;outline:none;height:38px;border-radius:10px;padding:6px 8px;margin-top:25px}#ubicar input[data-v-5ed62923]{width:100%;margin-top:5px}#ubicar input[data-v-5ed62923]::-moz-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-5ed62923]:-ms-input-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-5ed62923]::placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar h2[data-v-5ed62923]{color:#5e5e5e;text-align:center;font-size:26px;margin-bottom:30px;font-weight:700}.input-data[data-v-5ed62923]{margin-top:-7px}#map[data-v-5ed62923]{margin-top:20px}#map button[data-v-5ed62923]{background:#f26424;border-radius:0;margin-top:15px;margin-bottom:20px}#map button span[data-v-5ed62923]{font-weight:700}#resultados[data-v-5ed62923]{padding:0 0 50px}#video[data-v-5ed62923]{margin-bottom:40px}.buscar-instructions[data-v-5ed62923],.ubicacion-instructions[data-v-5ed62923]{font-style:italic;margin-top:20px;display:block;font-weight:500}.titulo-buscar[data-v-5ed62923]{text-align:left;font-weight:700}@media only screen and (max-width:641px){.card_home[data-v-5ed62923]{margin-bottom:30px}.ubicacion_actual[data-v-5ed62923]{margin-top:20px}.arrow[data-v-5ed62923]:after{display:none}#pasos h1[data-v-5ed62923]{font-size:22px}#ubicar h2[data-v-5ed62923]{font-size:20px}.input-data[data-v-5ed62923]{margin-top:10px}}',""]),t.exports=e},491:function(t,e,n){"use strict";var o=n(398);n.n(o).a},492:function(t,e,n){(e=n(35)(!1)).push([t.i,'.banner[data-v-6f32609c],.banner img[data-v-6f32609c]{width:100%}.container[data-v-6f32609c]{margin:0 auto;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-around;align-items:flex-start;align-content:center;justify-content:space-between}.title[data-v-6f32609c]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-6f32609c]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links[data-v-6f32609c]{padding-top:15px}.card_home img[data-v-6f32609c]{width:100%}#pasos h1[data-v-6f32609c]{color:#5e5e5e;text-align:center;font-size:30px;margin-bottom:30px;font-weight:700}.foot_card[data-v-6f32609c]{color:#fff;background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);text-align:center;padding:10px}figure[data-v-6f32609c]{margin:0}.foot_card h3[data-v-6f32609c]{font-size:15px;font-weight:700;margin:0;padding:0}.foot_card h4[data-v-6f32609c]{font-size:14px;margin:0;padding:0;font-weight:300}#ubicar[data-v-6f32609c]{text-align:center;margin:25px 0 40px}#ubicar button[data-v-6f32609c]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;border:none;outline:none;height:38px;border-radius:10px;padding:6px 8px;margin-top:25px}#ubicar input[data-v-6f32609c]{width:100%;margin-top:5px}#ubicar input[data-v-6f32609c]::-moz-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-6f32609c]:-ms-input-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-6f32609c]::placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar h2[data-v-6f32609c]{color:#5e5e5e;text-align:center;font-size:26px;margin-bottom:30px;font-weight:700}.input-data[data-v-6f32609c]{margin-top:-7px}@media only screen and (max-width:641px){.card_home[data-v-6f32609c]{margin-bottom:30px}.ubicacion_actual[data-v-6f32609c]{margin-top:20px}.arrow[data-v-6f32609c]:after{display:none}#pasos h1[data-v-6f32609c]{font-size:22px}#ubicar h2[data-v-6f32609c]{font-size:20px}.input-data[data-v-6f32609c]{margin-top:10px}}',""]),t.exports=e},525:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("img",{attrs:{src:n(355)}})])}],footer=n(351),r=(n(7),n(5),n(4),n(2),n(6),n(44),n(17)),d=n(0),c=n(362),l=n(363),f=(n(487),n(488)),m=n.n(f);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}Object(c.c)("eager"),Object(c.b)("required",x(x({},l.b),{},{message:"{_field_} no puede estar en vacio"})),Object(c.b)("email",x(x({},l.a),{},{message:"{_field_} debe ser un correo electrónico válido"}));var h={name:"register-signup",components:{ValidationProvider:c.a},head:function(){},data:function(){return{axiosError:{id:"",message:""},message:"",email:"",password:"",password2:"",captcha:!1,dismissSecs:10,dismissCountDown:0,dismissCountDownSignup:0,dismissCountDownPassword:0,dismissCountDownAxios:0,showDismissibleAlert:!1,username:"",firstName:"",lastName:"",userId:0}},mounted:function(){},computed:{},methods:{doRegister:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=t.email.length&&0!=t.password.length&&0!=t.password2.length&&t.captcha){e.next=3;break}return t.dismissCountDown=t.dismissSecs,e.abrupt("return");case 3:if(t.password==t.password2){e.next=6;break}return t.dismissCountDownPassword=t.dismissSecs,e.abrupt("return");case 6:t.registerUser();case 7:case"end":return e.stop()}}),e)})))()},registerUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var input;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,input={username:t.username,email:t.email,password:t.password},e.next=4,t.$apollo.mutate({mutation:m.a,variables:{input:input}});case 4:if(e.sent.data.register.user.id){e.next=8;break}return t.dismissCountDownAxios=t.dismissSecs,e.abrupt("return");case 8:t.dismissCountDownSignup=t.dismissSecs,e.next=17;break;case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,t.$hasAxiosErrors(e.t0);case 15:t.axiosError=e.sent,t.axiosError.id&&(t.dismissCountDownAxios=t.dismissSecs);case 17:case"end":return e.stop()}}),e,null,[[0,11]])})))()},countDownChanged:function(t){this.dismissCountDown=t},countDownChangedPassword:function(t){this.dismissCountDownPassword=t},countDownAxiosChanged:function(t){this.dismissCountDownAxios=t},countDownChangedSignup:function(t){this.dismissCountDownSignup=t,0==t&&this.$router.push("/authentication/login")},showAlert:function(t){this.message=t,this.dismissCountDown=this.dismissSecs}},apollo:{}},w=(n(489),n(18)),_=Object(w.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"cont"},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",{staticClass:"w-100 p-3 mb-1"},[n("h3",{staticClass:"subtitle"},[t._v("CREAR CUENTA")]),t._v(" "),n("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.doRegister(e)}}},[n("div",[n("validation-provider",{attrs:{name:"Username",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors,r=e.valid;return[n("b-form-group",[n("b-form-input",{staticClass:"element",attrs:{id:"username-input",placeholder:"* Nombre de usuario",type:"text",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:r}},t._l(o,(function(e,o){return n("span",{key:o},[t._v(t._s(e))])})),0)],1)]}}])}),t._v(" "),n("validation-provider",{attrs:{name:"Correo",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors,r=e.valid;return[n("b-form-group",[n("b-form-input",{staticClass:"element",attrs:{id:"email-input",placeholder:"* Correo Electrónico",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:r}},t._l(o,(function(e,o){return n("span",{key:o},[t._v(t._s(e))])})),0)],1)]}}])}),t._v(" "),n("div",[n("div",[n("validation-provider",{attrs:{name:"Contraseña",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors,r=e.valid;return[n("b-form-group",[n("b-form-input",{staticClass:"element",staticStyle:{width:"100%",margin:"0px"},attrs:{id:"password-input",placeholder:"* Contraseña",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:r}},t._l(o,(function(e,o){return n("span",{key:o},[t._v(t._s(e))])})),0)],1)]}}])})],1),t._v(" "),n("div",[n("validation-provider",{attrs:{name:"Confirmar Contraseña",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors,r=e.valid;return[n("b-form-group",[n("b-form-input",{staticClass:"element",staticStyle:{width:"100%",margin:"0px"},attrs:{id:"password2-input",placeholder:"* Confirmar Contraseña",type:"password",required:""},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}}),t._v(" "),n("b-form-invalid-feedback",{attrs:{state:r}},t._l(o,(function(e,o){return n("span",{key:o},[t._v(t._s(e))])})),0)],1)]}}])})],1)]),t._v(" "),n("b-form-group",[n("b-form-checkbox",{attrs:{id:"checkbox-captcha",name:"captcha-1",value:"true","unchecked-value":"false",switch:""},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}},[n("p",[t._v("No soy un robot")])])],1),t._v(" "),n("div",[n("b-button",{on:{click:t.doRegister}},[t._v("CREAR CUENTA")]),t._v(" "),n("b-alert",{attrs:{show:t.dismissCountDownSignup,dismissible:"",variant:"light"},on:{dismissed:function(e){t.dismissCountDownSignup=0},"dismiss-count-down":t.countDownChangedSignup}},[n("p",[t._v("Se ha registrado correctamente,"),n("br"),t._v("se le envió un correo electrónico para su validación.")]),t._v(" "),n("b-progress",{attrs:{variant:"success",max:t.dismissSecs,value:t.dismissCountDownSignup,height:"4px"}})],1),t._v(" "),n("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"light"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[n("p",[t._v("Los datos no estan completos o no resolvio el captcha...")]),t._v(" "),n("b-progress",{attrs:{variant:"danger",max:t.dismissSecs,value:t.dismissCountDown,height:"4px"}})],1),t._v(" "),n("b-alert",{attrs:{show:t.dismissCountDownAxios,dismissible:"",variant:"light"},on:{dismissed:function(e){t.dismissCountDownAxios=0},"dismiss-count-down":t.countDownAxiosChanged}},[n("p",[t._v("Error: "+t._s(t.axiosError.message))]),t._v(" "),n("b-progress",{attrs:{variant:"danger",max:t.dismissSecs,value:t.dismissCountDownAxios,height:"4px"}})],1),t._v(" "),n("b-alert",{attrs:{show:t.dismissCountDownPassword,dismissible:"",variant:"light"},on:{dismissed:function(e){t.dismissCountDownPassword=0},"dismiss-count-down":t.countDownChangedPassword}},[n("p",[t._v("Las claves no concuerdan")]),t._v(" "),n("b-progress",{attrs:{variant:"danger",max:t.dismissSecs,value:t.dismissCountDownPassword,height:"4px"}})],1)],1)],1)])])],1)],1)],1)])])}),[],!1,null,"5ed62923",null).exports,k=n(357),C=n.n(k),S=(n(358),{components:{footerPage:footer.default,signupPage:_,RangeSlider:C.a}}),y=(n(491),Object(w.a)(S,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"cont"},[this._m(0),this._v(" "),e("div",{staticClass:"container pasos"},[e("signup-page")],1),this._v(" "),e("section",[e("footerPage")],1)])}),o,!1,null,"6f32609c",null));e.default=y.exports}}]);