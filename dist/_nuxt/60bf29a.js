(window.webpackJsonp=window.webpackJsonp||[]).push([[35,19,20],{478:function(t,e,r){var content=r(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("9702ba9c",content,!0,{sourceMap:!1})},479:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this._self._c;return t("div",{staticClass:"col-sm-4"},[t("img",{attrs:{src:r(480)}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copyright"},[t._v("CONSTRUCTORES POSITIVOS"),e("br"),t._v("2020")])}],o={},l=(r(481),r(31)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("footer",[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("LA CASA DE TUS SUEÑOS")]),t._v(" "),e("nuxt-link",{attrs:{to:"/visyvip"}},[t._v("PROYECTOS VIS Y VIP")]),t._v(" "),e("nuxt-link",{attrs:{to:"/insumos"}},[t._v("PROVEEDOR MATERIALES")]),t._v(" "),e("nuxt-link",{attrs:{to:"/servicios"}},[t._v("ESPECIALISTAS")])],1),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("nuxt-link",{attrs:{to:"/calculadora"}},[t._v("CALCULADORA")]),t._v(" "),e("nuxt-link",{attrs:{to:"/quienes_somos"}},[t._v("QUIENES SOMOS")]),t._v(" "),e("nuxt-link",{attrs:{to:"/blog"}},[t._v("BLOG")])],1)])]),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"social_links"},[e("div",{staticClass:"social_link fb"},[e("a",{attrs:{href:"https://www.facebook.com/constructurespositivosecuador",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),t._v(" "),e("div",{staticClass:"social_link ig"},[e("a",{attrs:{href:"https://www.instagram.com/constructorespositivos/?igshid=q4jnx0yhs6yv",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),t._v(" "),e("div",{staticClass:"social_link twitter"},[e("a",{attrs:{href:"https://twitter.com/Construpositivo",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])])])])]),t._v(" "),t._m(1)])}),n,!1,null,"5f73b57e",null);e.default=component.exports;installComponents(component,{Footer:r(479).default})},480:function(t,e,r){t.exports=r.p+"img/footer_registra_proyecto.a10f373.png"},481:function(t,e,r){"use strict";r(478)},482:function(t,e,r){var n=r(56)((function(i){return i[1]}));n.push([t.i,"footer[data-v-5f73b57e]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);padding:20px 80px;width:100%}footer img[data-v-5f73b57e]{max-width:422px;width:100%}footer a[data-v-5f73b57e]{color:#fff;display:block;font-weight:700}.social_link[data-v-5f73b57e]{color:#fff;display:inline-block;margin:0 10px}.copyright[data-v-5f73b57e]{font-size:13px;margin-bottom:10px;margin-top:10px;text-align:center}.social_link[data-v-5f73b57e]{font-size:24px}@media only screen and (max-width:641px){a[data-v-5f73b57e]{font-size:14px;margin:4px 0}}",""]),n.locals={},t.exports=n},490:function(t,e,r){t.exports=r.p+"img/banner1.209f33c.jpg"},496:function(t,e,r){var content=r(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("412b3d46",content,!0,{sourceMap:!1})},497:function(t,e){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"calculadoras"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"calculadoras"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"link_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"link"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:112}};r.loc.source={body:"query calculadoras {\r\n  calculadoras {\r\n    id\r\n    link_title\r\n    link\r\n    logo {\r\n      url\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(t,e){if("FragmentSpread"===t.kind)e.add(t.name.value);else if("VariableDefinition"===t.kind){var r=t.type;"NamedType"===r.kind&&e.add(r.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){n(t,e)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){n(t,e)})),t.definitions&&t.definitions.forEach((function(t){n(t,e)}))}var o={};function l(t,e){for(var i=0;i<t.definitions.length;i++){var element=t.definitions[i];if(element.name&&element.name.value==e)return element}}r.definitions.forEach((function(t){if(t.name){var e=new Set;n(t,e),o[t.name.value]=e}})),t.exports=r,t.exports.calculadoras=function(t,e){var r={kind:t.kind,definitions:[l(t,e)]};t.hasOwnProperty("loc")&&(r.loc=t.loc);var n=o[e]||new Set,c=new Set,d=new Set;for(n.forEach((function(t){d.add(t)}));d.size>0;){var v=d;d=new Set,v.forEach((function(t){c.has(t)||(c.add(t),(o[t]||new Set).forEach((function(t){d.add(t)})))}))}return c.forEach((function(e){var n=l(t,e);n&&r.definitions.push(n)})),r}(r,"calculadoras")},522:function(t,e,r){"use strict";r(496)},523:function(t,e,r){var n=r(56)((function(i){return i[1]}));n.push([t.i,".select-h[data-v-4db65f2c]{height:32px}.vtable[data-v-4db65f2c]{border:#5e5e5e;border-collapse:collapse!important;text-align:center;width:100%}.vrigth[data-v-4db65f2c]{text-align:right}.banner[data-v-4db65f2c],.banner img[data-v-4db65f2c]{width:100%}#header[data-v-4db65f2c],#header-1[data-v-4db65f2c]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);margin-top:40px;padding:15px 20px}#header h1[data-v-4db65f2c]{font-size:36px;font-weight:700;margin:0}#header h1[data-v-4db65f2c],#header h2[data-v-4db65f2c]{color:#fff;text-align:center}#header h2[data-v-4db65f2c]{font-size:28px;font-weight:lighter}#header-1 h2[data-v-4db65f2c]{font-size:36px;font-weight:700}#header-1 h2[data-v-4db65f2c],#header-1 h3[data-v-4db65f2c]{color:#fff;margin:0;text-align:center}#header-1 h3[data-v-4db65f2c]{font-size:28px;font-weight:lighter}.calculadoras h3[data-v-4db65f2c]{color:#5e5e5e;font-style:italic;font-weight:lighter;margin:30px 0 10px;text-align:center}.calculadoras h4[data-v-4db65f2c]{color:#5e5e5e;font-size:26px;font-weight:400;margin:0 0 30px;text-align:center}.calculadora-item[data-v-4db65f2c]{padding:20px 30px}.logo-banco img[data-v-4db65f2c]{height:65px;width:auto}.logo-banco[data-v-4db65f2c]{text-align:center}.calculadora-item span[data-v-4db65f2c]{display:block;margin:10px 0 60px;text-align:center}.header-prestamo[data-v-4db65f2c]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;margin-top:40px;padding:15px 20px}.header-prestamo h6[data-v-4db65f2c]{font-size:20px;font-weight:lighter;text-align:center}.header-prestamo h6 strong[data-v-4db65f2c]{font-size:32px;font-weight:700}.sub-prestamo[data-v-4db65f2c]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;display:flex;margin-top:40px;padding:15px 20px}.prestamos[data-v-4db65f2c]{padding:40px 0}.prestamo-title[data-v-4db65f2c]{display:block;font-size:24px;font-weight:700}.col-prestamos[data-v-4db65f2c]{text-align:center;width:33%}.prestamos-sub[data-v-4db65f2c]{font-size:30px;font-weight:lighter}.contenido-prestamo[data-v-4db65f2c]{border:1px dashed #000;margin:30px;min-height:300px;padding:30px}.contenido-prestamo p[data-v-4db65f2c]{font-size:22px;text-align:center}h4[data-v-4db65f2c]{display:block;font-size:30px;font-weight:700;text-align:center}.ejemplo-container[data-v-4db65f2c]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;margin-top:40px;padding:15px 20px;text-align:center}.ejemplo-container .cuota[data-v-4db65f2c]{display:block;font-size:26px;font-weight:700}.ejemplo-container .interes[data-v-4db65f2c]{font-size:26px;font-weight:lighter}.ejemplo[data-v-4db65f2c]{margin:20px 0}h5[data-v-4db65f2c]{color:#5e5e5e;font-size:26px;margin:25px 0 0}h5[data-v-4db65f2c],h6[data-v-4db65f2c]{display:block;text-align:center}h6[data-v-4db65f2c]{color:#aa381a;font-size:36px;font-weight:700;margin:0}.header-prestamo h6[data-v-4db65f2c]{color:#fff!important}.calcualdora-link[data-v-4db65f2c]{cursor:pointer}@media (max-width:767px){.logo-banco img[data-v-4db65f2c]{height:53px}#header h1[data-v-4db65f2c]{font-size:22px}#header h2[data-v-4db65f2c]{font-size:20px}.calculadoras h3[data-v-4db65f2c]{font-size:18px}.calculadoras h4[data-v-4db65f2c]{font-size:16px}#header-1 h2[data-v-4db65f2c]{font-size:18px}#header-1 h3[data-v-4db65f2c]{font-size:20px}.prestamos h4[data-v-4db65f2c]{font-size:20px!important}.header-prestamo h6[data-v-4db65f2c]{color:#fff!important}.prestamo-title[data-v-4db65f2c]{font-size:22px}.ejemplo-container .cuota[data-v-4db65f2c],.prestamos-sub[data-v-4db65f2c]{font-size:20px}.ejemplo-container .interes[data-v-4db65f2c]{font-size:18px}.calculadora-item[data-v-4db65f2c]{padding:10px 30px}}",""]),n.locals={},t.exports=n},556:function(t,e,r){"use strict";r.r(e);r(17),r(2),r(1),r(157);var n={props:{vInicial:!Number,tiempo:!Number,min5Entrada:!Number,min25Entrada:!Number,vVivienda5:!Number,vVivienda25:!Number,entrada5:!Number,entrada25:!Number,mCredito5:!Number,mCredito25:!Number,pMeses5:!Number,pMeses25:!Number,tInteres5:!String,tInteres25:!String,cuota5:!String,cuota25:!String,lista1:!Array,lista2:!Array},data:function(){return{}},methods:{calculaEntrada:function(){this.min5Entrada=5*this.vInicial/100,this.min25Entrada=25*this.vInicial/100,this.vVivienda5=this.vInicial,this.vVivienda25=this.vInicial,this.entrada5=5*this.vInicial/100,this.entrada25=25*this.vInicial/100,this.mCredito5=this.vInicial-this.entrada5,this.mCredito25=this.vInicial-this.entrada25,this.tInteres5="4.99 %",this.tInteres25="10.14 % Fuente:Banco Central del Ecuador",this.cuota5=.62,this.cuota25=.71},calculoCuotas:function(){this.vInicial;var t={mes:0,saldoCapital:0,pagoCapital:0,pagoInteres:0,Cuota:0};lista1.push(t),lista2.push(t)}}},o=(r(522),r(31)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"calcular"},[e("h1",{staticClass:"title"},[t._v("CALCULADORA")]),t._v(" "),e("form",{staticClass:"form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.calculoCuotas.apply(null,arguments)}}},[e("div",{staticClass:"row vrigth"},[e("div",{staticClass:"col-sm-4"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vInicial,expression:"vInicial"}],staticClass:"form-input vrigth",attrs:{type:"number",id:"vInicial",required:"",placeholder:"0"},domProps:{value:t.vInicial},on:{change:t.calculaEntrada,input:function(e){e.target.composing||(t.vInicial=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-2"},[t._m(1),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.tiempo,expression:"tiempo"}],staticClass:"form-input select-h",attrs:{id:"tiempo",placeholder:"Seleccionar..."},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.tiempo=e.target.multiple?r:r[0]}}},[e("option",{attrs:{value:"240",selected:""}},[t._v("20 años")]),t._v(" "),e("option",{attrs:{value:"300"}},[t._v("25 años")])])])]),t._v(" "),e("br"),t._v(" "),t._m(2)]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-5 vrigth"},[e("h5",[t._v("CRÉDITO CASA PARA TODOS")]),t._v(" "),e("br"),t._v(" "),t._m(3),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.min5Entrada,expression:"min5Entrada"}],staticClass:"form-input vrigth",attrs:{type:"number",id:"min5Entrada",placeholder:"0",readonly:""},domProps:{value:t.min5Entrada},on:{input:function(e){e.target.composing||(t.min5Entrada=e.target.value)}}}),t._v(" "),e("br"),t._v(" "),t._m(4),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vVivienda5,expression:"vVivienda5"}],staticClass:"form-input vrigth",attrs:{type:"number",id:"vVivienda5",placeholder:"0",readonly:""},domProps:{value:t.vVivienda5},on:{input:function(e){e.target.composing||(t.vVivienda5=e.target.value)}}}),t._v(" "),e("br"),t._v(" "),t._m(5),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.entrada5,expression:"entrada5"}],staticClass:"form-input vrigth",attrs:{type:"number",id:"entrada5",readonly:"",placeholder:"0"},domProps:{value:t.entrada5},on:{input:function(e){e.target.composing||(t.entrada5=e.target.value)}}}),t._v(" "),e("br"),t._v(" "),t._m(6),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mCredito5,expression:"mCredito5"}],staticClass:"form-input vrigth",attrs:{type:"number",id:"mCredito5",readonly:"",placeholder:"0"},domProps:{value:t.mCredito5},on:{input:function(e){e.target.composing||(t.mCredito5=e.target.value)}}}),t._v(" "),e("br"),t._v(" "),t._m(7),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pMeses5,expression:"pMeses5"}],staticClass:"form-input vrigth",attrs:{type:"number",id:"pMeses5",placeholder:"0",readonly:""},domProps:{value:t.pMeses5},on:{input:function(e){e.target.composing||(t.pMeses5=e.target.value)}}}),t._v(" "),e("br"),t._v(" "),t._m(8),t._v(" "),e("label",{staticClass:"form-label"},[t._v(t._s(this.tInteres5))]),t._v(" "),e("br"),t._v(" "),t._m(9),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cuota5,expression:"cuota5"}],staticClass:"form-input vrigth",attrs:{type:"number",id:"cuota5",placeholder:"0",readonly:""},domProps:{value:t.cuota5},on:{input:function(e){e.target.composing||(t.cuota5=e.target.value)}}}),t._v(" "),e("br")]),t._v(" "),e("div",{staticClass:"col-sm-6 vrigth"},[e("h5",{staticClass:"title"},[t._v("CRÉDITO PROMEDIO DEL MERCADO ACTUAL")]),t._v(" "),e("br"),t._v(" "),t._m(10),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.min25Entrada,expression:"min25Entrada"}],staticClass:"form-input vrigth",attrs:{type:"number",id:"min25Entrada",readonly:"",placeholder:"0"},domProps:{value:t.min25Entrada},on:{input:function(e){e.target.composing||(t.min25Entrada=e.target.value)}}}),t._v(" "),e("br"),t._v(" "),t._m(11),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vVivienda25,expression:"vVivienda25"}],staticClass:"form-input vrigth",attrs:{type:"number",id:"vVivienda25",readonly:"",placeholder:"0"},domProps:{value:t.vVivienda25},on:{input:function(e){e.target.composing||(t.vVivienda25=e.target.value)}}}),t._v(" "),e("br"),t._v(" "),t._m(12),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.entrada25,expression:"entrada25"}],staticClass:"form-input vrigth",attrs:{type:"number",id:"entrada25",readonly:"",placeholder:"0"},domProps:{value:t.entrada25},on:{input:function(e){e.target.composing||(t.entrada25=e.target.value)}}}),t._v(" "),e("br"),t._v(" "),t._m(13),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mCredito25,expression:"mCredito25"}],staticClass:"form-input vrigth",attrs:{type:"number",id:"mCredito25",readonly:"",placeholder:"0"},domProps:{value:t.mCredito25},on:{input:function(e){e.target.composing||(t.mCredito25=e.target.value)}}}),t._v(" "),e("br"),t._v(" "),t._m(14),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pMeses25,expression:"pMeses25"}],staticClass:"form-input vrigth",attrs:{type:"number",id:"pMeses25",placeholder:"0",readonly:""},domProps:{value:t.pMeses25},on:{input:function(e){e.target.composing||(t.pMeses25=e.target.value)}}}),t._v(" "),e("br"),t._v(" "),t._m(15),t._v(" "),e("label",{staticClass:"form-label"},[t._v(t._s(this.tInteres25))]),t._v(" "),e("br"),t._v(" "),t._m(16),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cuota25,expression:"cuota25"}],staticClass:"form-input vrigth",attrs:{type:"number",id:"cuota25",placeholder:"0",readonly:""},domProps:{value:t.cuota25},on:{input:function(e){e.target.composing||(t.cuota25=e.target.value)}}}),t._v(" "),e("br")])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 vrigth"},[e("h5",[t._v("Tabla de amortización de crédito hipotecario 'Casa para Todos'")]),t._v(" "),e("br"),t._v(" "),e("table",{staticClass:"vtable border"},[t._m(17),t._v(" "),e("tbody",t._l(t.lista1,(function(r){return e("tr",{key:r.mes,staticClass:"border"},[e("td",{staticClass:"border"},[t._v(t._s(r.mes))]),t._v(" "),e("td",{staticClass:"border"},[t._v(t._s(r.saldoCapital))]),t._v(" "),e("td",{staticClass:"border"},[t._v(t._s(r.pagoCapital))]),t._v(" "),e("td",{staticClass:"border"},[t._v(t._s(r.pagoInteres))]),t._v(" "),e("td",{staticClass:"border"},[t._v(t._s(r.Cuota))])])})),0)])]),t._v(" "),e("div",{staticClass:"col-sm-6 vrigth"},[e("h5",[t._v("Tabla de amortización de créditos hipotecarios en mercado actual")]),t._v(" "),e("br"),t._v(" "),e("table",{staticClass:"vtable border"},[t._m(18),t._v(" "),e("tbody",t._l(t.lista2,(function(r){return e("tr",{key:r.mes,staticClass:"border"},[e("td",{staticClass:"border"},[t._v(t._s(r.mes))]),t._v(" "),e("td",{staticClass:"border"},[t._v(t._s(r.saldoCapital))]),t._v(" "),e("td",{staticClass:"border"},[t._v(t._s(r.pagoCapital))]),t._v(" "),e("td",{staticClass:"border"},[t._v(t._s(r.pagoInteres))]),t._v(" "),e("td",{staticClass:"border"},[t._v(t._s(r.Cuota))])])})),0)])])])])])}),[function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#vInicial"}},[t("b",[this._v("Valor Vivienda: ")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#tiempo"}},[t("b",[this._v("Plazo: ")])])},function(){var t=this._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-4 vrigth"},[t("input",{staticClass:"form-submit",attrs:{type:"submit",value:"Calcular"}})])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#min5Entrada"}},[t("b",[this._v("Entrada mínima del 5%: ")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#vVivienda5"}},[t("b",[this._v("Valor de la vivienda: ")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#entrada5"}},[t("b",[this._v("Entrada 5%: ")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#mCredito5"}},[t("b",[this._v("Monto del crédito: ")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#pMeses5"}},[t("b",[this._v("Plazo en meses: ")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#tInteres5"}},[t("b",[this._v("Tasa de interés efectiva: ")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#cuota5"}},[t("b",[this._v("Cuota mensual: ")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#min25Entrada"}},[t("b",[this._v("Entrada mínima del 25%: ")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#vVivienda25"}},[t("b",[this._v("Valor de la vivienda: ")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#entrada25"}},[t("b",[this._v("Entrada 25%: ")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#mCredito25"}},[t("b",[this._v("Monto del crédito: ")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#pMeses25"}},[t("b",[this._v("Plazo en meses: ")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#tInteres25"}},[t("b",[this._v("Tasa de interés efectiva: ")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-label",attrs:{for:"#cuota25"}},[t("b",[this._v("Cuota mensual: ")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",{staticClass:"border"},[e("th",{staticClass:"border"},[t._v("Mes")]),t._v(" "),e("th",{staticClass:"border"},[t._v("Saldo Capital")]),t._v(" "),e("th",{staticClass:"border"},[t._v("Pago Capital")]),t._v(" "),e("th",{staticClass:"border"},[t._v("Pago Interes")]),t._v(" "),e("th",{staticClass:"border"},[t._v("Cuota")])])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"border"},[t._v("Mes")]),t._v(" "),e("th",{staticClass:"border"},[t._v("Saldo Capital")]),t._v(" "),e("th",{staticClass:"border"},[t._v("Pago Capital")]),t._v(" "),e("th",{staticClass:"border"},[t._v("Pago Interes")]),t._v(" "),e("th",{staticClass:"border"},[t._v("Cuota")])])])}],!1,null,"4db65f2c",null);e.default=component.exports},558:function(t,e,r){var content=r(605);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("50b995f2",content,!0,{sourceMap:!1})},604:function(t,e,r){"use strict";r(558)},605:function(t,e,r){var n=r(56)((function(i){return i[1]}));n.push([t.i,".select-h[data-v-9bbc7ff0]{height:32px}.vrigth[data-v-9bbc7ff0]{text-align:right}.banner[data-v-9bbc7ff0],.banner img[data-v-9bbc7ff0]{width:100%}#header[data-v-9bbc7ff0],#header-1[data-v-9bbc7ff0]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);margin-top:40px;padding:15px 20px}#header h1[data-v-9bbc7ff0]{font-size:36px;font-weight:700;margin:0}#header h1[data-v-9bbc7ff0],#header h2[data-v-9bbc7ff0]{color:#fff;text-align:center}#header h2[data-v-9bbc7ff0]{font-size:28px;font-weight:lighter}#header-1 h2[data-v-9bbc7ff0]{font-size:36px;font-weight:700}#header-1 h2[data-v-9bbc7ff0],#header-1 h3[data-v-9bbc7ff0]{color:#fff;margin:0;text-align:center}#header-1 h3[data-v-9bbc7ff0]{font-size:28px;font-weight:lighter}.calculadoras h3[data-v-9bbc7ff0]{color:#5e5e5e;font-style:italic;font-weight:lighter;margin:30px 0 10px;text-align:center}.calculadoras h4[data-v-9bbc7ff0]{color:#5e5e5e;font-size:26px;font-weight:400;margin:0 0 30px;text-align:center}.calculadora-item[data-v-9bbc7ff0]{padding:20px 30px}.logo-banco img[data-v-9bbc7ff0]{height:65px;width:auto}.logo-banco[data-v-9bbc7ff0]{text-align:center}.calculadora-item span[data-v-9bbc7ff0]{display:block;margin:10px 0 60px;text-align:center}.header-prestamo[data-v-9bbc7ff0]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;margin-top:40px;padding:15px 20px}.header-prestamo h6[data-v-9bbc7ff0]{font-size:20px;font-weight:lighter;text-align:center}.header-prestamo h6 strong[data-v-9bbc7ff0]{font-size:32px;font-weight:700}.sub-prestamo[data-v-9bbc7ff0]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;display:flex;margin-top:40px;padding:15px 20px}.prestamos[data-v-9bbc7ff0]{padding:40px 0}.prestamo-title[data-v-9bbc7ff0]{display:block;font-size:24px;font-weight:700}.col-prestamos[data-v-9bbc7ff0]{text-align:center;width:33%}.prestamos-sub[data-v-9bbc7ff0]{font-size:30px;font-weight:lighter}.contenido-prestamo[data-v-9bbc7ff0]{border:1px dashed #000;margin:30px;min-height:300px;padding:30px}.contenido-prestamo p[data-v-9bbc7ff0]{font-size:22px;text-align:center}h4[data-v-9bbc7ff0]{display:block;font-size:30px;font-weight:700;text-align:center}.ejemplo-container[data-v-9bbc7ff0]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;margin-top:40px;padding:15px 20px;text-align:center}.ejemplo-container .cuota[data-v-9bbc7ff0]{display:block;font-size:26px;font-weight:700}.ejemplo-container .interes[data-v-9bbc7ff0]{font-size:26px;font-weight:lighter}.ejemplo[data-v-9bbc7ff0]{margin:20px 0}h5[data-v-9bbc7ff0]{color:#5e5e5e;font-size:26px;margin:25px 0 0}h5[data-v-9bbc7ff0],h6[data-v-9bbc7ff0]{display:block;text-align:center}h6[data-v-9bbc7ff0]{color:#aa381a;font-size:36px;font-weight:700;margin:0}.header-prestamo h6[data-v-9bbc7ff0]{color:#fff!important}.calcualdora-link[data-v-9bbc7ff0]{cursor:pointer}@media (max-width:767px){.logo-banco img[data-v-9bbc7ff0]{height:53px}#header h1[data-v-9bbc7ff0]{font-size:22px}#header h2[data-v-9bbc7ff0]{font-size:20px}.calculadoras h3[data-v-9bbc7ff0]{font-size:18px}.calculadoras h4[data-v-9bbc7ff0]{font-size:16px}#header-1 h2[data-v-9bbc7ff0]{font-size:18px}#header-1 h3[data-v-9bbc7ff0]{font-size:20px}.prestamos h4[data-v-9bbc7ff0]{font-size:20px!important}.header-prestamo h6[data-v-9bbc7ff0]{color:#fff!important}.prestamo-title[data-v-9bbc7ff0]{font-size:22px}.ejemplo-container .cuota[data-v-9bbc7ff0],.prestamos-sub[data-v-9bbc7ff0]{font-size:20px}.ejemplo-container .interes[data-v-9bbc7ff0]{font-size:18px}.calculadora-item[data-v-9bbc7ff0]{padding:10px 30px}}",""]),n.locals={},t.exports=n},695:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this._self._c;return t("div",{staticClass:"banner"},[t("img",{attrs:{src:r(490)}})])},function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"header"}},[e("h1",[t._v("CALCULA TU CRÉDITO")]),t._v(" "),e("h2",[t._v("EN VARIAS INSTITUCIONES FINANCIERAS")])])},function(){var t=this._self._c;return t("div",{staticClass:"row"},[t("h5",[this._v("Utiliza la calculadora del Ministerio de Económia para calcular las cuotas mensuales de créditos hipotecarios")])])},function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"header-1"}},[e("h2",[t._v("CONOCE")]),t._v(" "),e("h3",[t._v("LO NECESARIO")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"container prestamos"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("h4",[t._v("\n          LOS BANCOS "),e("strong",[t._v("UTILIZAN")]),t._v(" ESTOS 2 SISTEMAS PARA\n          "),e("strong",[t._v("OTORGAR PRÉSTAMOS")])]),t._v(" "),e("div",{staticClass:"tipos-prestamos"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"header-prestamo"},[e("h6",[t._v("\n                  SISTEMA DE AMORTIZACIÓN "),e("br"),e("strong",[t._v("FRANCÉS")])])]),t._v(" "),e("div",{staticClass:"sub-prestamo"},[e("div",{staticClass:"col-prestamos"},[e("span",{staticClass:"prestamo-title"},[t._v("DEUDA")]),e("span",{staticClass:"prestamos-sub"},[t._v("$300")])]),t._v(" "),e("div",{staticClass:"col-prestamos"},[e("span",{staticClass:"prestamo-title"},[t._v("INTERÉS")]),e("span",{staticClass:"prestamos-sub"},[t._v("11%")])]),t._v(" "),e("div",{staticClass:"col-prestamos"},[e("span",{staticClass:"prestamo-title"},[t._v("TIEMPO")]),e("span",{staticClass:"prestamos-sub"},[t._v("12 MESES")])])]),t._v(" "),e("div",{staticClass:"contenido-prestamo"},[e("p",[t._v("\n                  LAS CUOTAS SON "),e("strong",[t._v("FIJAS")]),t._v(" DURANTE EL PLAZO DE\n                  PAGO DE UN CRÉDITO.\n                ")]),t._v(" "),e("p",[t._v("\n                  EN LAS PRIMERAS CUOTAS SE\n                  "),e("strong",[t._v("AMORTIZA ")]),t._v(" PROPORCIONALMENTE\n                  "),e("strong",[t._v("MENOS CAPITAL")]),t._v(" QUE EN LAS ÚLTIMAS CUOTAS,\n                  POR LO QUE GENERA INTERÉS .\n                ")])]),t._v(" "),e("h4",[t._v("POR EJEMPLO")]),t._v(" "),e("div",{staticClass:"ejemplo-container"},[e("div",{staticClass:"ejemplo"},[e("span",{staticClass:"cuota"},[t._v("PRIMERA CUOTA: $26,51")]),t._v(" "),e("span",{staticClass:"interes"},[t._v("(INTERÉS $2,75, CAPITAL $23,76)")])]),t._v(" "),e("div",{staticClass:"ejemplo"},[e("span",{staticClass:"cuota"},[t._v("SEGUNDA CUOTA: $26,51")]),t._v(" "),e("span",{staticClass:"interes"},[t._v("(INTERÉS $2,53, CAPITAL $23,98)")])]),t._v(" "),e("div",{staticClass:"ejemplo"},[e("span",{staticClass:"cuota"},[t._v("TERCERA CUOTA: $26,51")]),t._v(" "),e("span",{staticClass:"interes"},[t._v("(INTERÉS $2,31, CAPITAL $24,20)")])])]),t._v(" "),e("h5",[t._v("EL CIUDADANO TERMINA PAGANDO:")]),t._v(" "),e("h6",[t._v("$318,12")])]),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"header-prestamo"},[e("h6",[t._v("SISTEMA DE AMORTIZACIÓN"),e("br"),e("strong",[t._v("ALEMÁN")])])]),t._v(" "),e("div",{staticClass:"sub-prestamo"},[e("div",{staticClass:"col-prestamos"},[e("span",{staticClass:"prestamo-title"},[t._v("DEUDA")]),e("span",{staticClass:"prestamos-sub"},[t._v("$300")])]),t._v(" "),e("div",{staticClass:"col-prestamos"},[e("span",{staticClass:"prestamo-title"},[t._v("INTERÉS")]),e("span",{staticClass:"prestamos-sub"},[t._v("11%")])]),t._v(" "),e("div",{staticClass:"col-prestamos"},[e("span",{staticClass:"prestamo-title"},[t._v("TIEMPO")]),e("span",{staticClass:"prestamos-sub"},[t._v("12 MESES")])])]),t._v(" "),e("div",{staticClass:"contenido-prestamo"},[e("p",[t._v("\n                  LAS CUOTAS SON "),e("strong",[t._v("DECRECIENTES ")]),t._v("DURANTE EL\n                  PLAZO DE PAGO DE UN CRÉDITO.\n                ")]),t._v(" "),e("p",[t._v("\n                  EXISTE "),e("strong",[t._v("AMORTIZACIÓN FIJA")]),t._v(" DE CAPITAL Y SE\n                  PAGAN MENOS INTERESES.\n                ")])]),t._v(" "),e("h4",[t._v("POR EJEMPLO")]),t._v(" "),e("div",{staticClass:"ejemplo-container"},[e("div",{staticClass:"ejemplo"},[e("span",{staticClass:"cuota"},[t._v("PRIMERA CUOTA: $27.75")]),t._v(" "),e("span",{staticClass:"interes"},[t._v("(INTERÉS $2,75, CAPITAL $25)")])]),t._v(" "),e("div",{staticClass:"ejemplo"},[e("span",{staticClass:"cuota"},[t._v("SEGUNDA CUOTA: $27,52")]),t._v(" "),e("span",{staticClass:"interes"},[t._v("(INTERÉS $2,52, CAPITAL $25)")])]),t._v(" "),e("div",{staticClass:"ejemplo"},[e("span",{staticClass:"cuota"},[t._v("TERCERA CUOTA: $27.29")]),t._v(" "),e("span",{staticClass:"interes"},[t._v("(INTERÉS $2,29, CAPITAL $25)")])])]),t._v(" "),e("h5",[t._v("EL CIUDADANO TERMINA PAGANDO:")]),t._v(" "),e("h6",[t._v("$317,88")])])])])])])])}],o=r(556),footer=r(479),l=r(497),c=r.n(l),d={components:{footerPage:footer.default,calculadora:o.default},data:function(){return{selected:null,loading:!0,calculadoras:[]}},methods:{mostrarResultados:function(){this.resultados_proyectos=!0},sendGAEvent:function(link,label){this.$ga.event({eventCategory:"calculadora",eventAction:"abrir",eventLabel:label}),window.open(link,"_blank")}},apollo:{calculadoras:{prefetch:!0,query:c.a,result:function(t){var data=t.data,e=(t.loading,t.networkStatus);data&&7===e&&(this.loading=!1,this.calculadoras=data.calculadoras)},variables:function(){}}}},v=(r(604),r(31)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"cont"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.loading?t._e():e("div",{staticClass:"container calculadoras"},[t._m(2),t._v(" "),e("br"),t._v(" "),e("calculadora")],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("section",[e("footerPage")],1)])}),n,!1,null,"9bbc7ff0",null);e.default=component.exports;installComponents(component,{Calculadora:r(556).default})}}]);