(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{349:function(t,e,n){var content=n(353);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("537eb6ce",content,!0,{sourceMap:!1})},350:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-4"},[e("img",{attrs:{src:n(351)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"copyright"},[this._v("CONSTRUCTORES POSITIVOS"),e("br"),this._v("2020")])}],d={},r=(n(352),n(18)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("ENCUENTRA LA CASA DE TUS SUEÑOS")]),t._v(" "),n("nuxt-link",{attrs:{to:"/visyvip"}},[t._v("PROYECTOS VIS Y VIP")]),t._v(" "),n("nuxt-link",{attrs:{to:"/insumos"}},[t._v("MATERIALES PARA LA REMODELACIÓN")])],1),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("nuxt-link",{attrs:{to:"/calculadorafinanciera"}},[t._v("CALCULADORA DE CRÉDITO")]),t._v(" "),n("nuxt-link",{attrs:{to:"/quienes_somos"}},[t._v("QUIENES SOMOS")]),t._v(" "),n("nuxt-link",{attrs:{to:"/blog"}},[t._v("BLOG Y NOTICIAS")])],1)])]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"social_links"},[n("div",{staticClass:"social_link fb"},[n("a",{attrs:{href:"https://www.facebook.com/constructurespositivosecuador",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),t._v(" "),n("div",{staticClass:"social_link ig"},[n("a",{attrs:{href:"https://www.instagram.com/constructorespositivos/?igshid=q4jnx0yhs6yv",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),t._v(" "),n("div",{staticClass:"social_link twitter"},[n("a",{attrs:{href:"https://twitter.com/Construpositivo",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])])])])]),t._v(" "),t._m(1)])}),o,!1,null,"a1aac506",null);e.default=component.exports;installComponents(component,{Footer:n(350).default})},351:function(t,e,n){t.exports=n.p+"img/footer_registra_proyecto.382e4dc.png"},352:function(t,e,n){"use strict";var o=n(349);n.n(o).a},353:function(t,e,n){(e=n(35)(!1)).push([t.i,"footer[data-v-a1aac506]{width:100%;background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);padding:20px 80px}footer img[data-v-a1aac506]{width:100%;max-width:422px}footer a[data-v-a1aac506]{display:block;color:#fff;font-weight:700}.social_link[data-v-a1aac506]{display:inline-block;margin:0 10px;color:#fff}.copyright[data-v-a1aac506]{margin-top:10px;margin-bottom:10px;text-align:center;font-size:13px}.social_link[data-v-a1aac506]{font-size:24px}@media only screen and (max-width:641px){a[data-v-a1aac506]{font-size:14px;margin:4px 0}}",""]),t.exports=e},358:function(t,e,n){t.exports=n.p+"img/banner1.67bdb63.jpg"},359:function(t,e,n){var content=n(389);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("068b8cfe",content,!0,{sourceMap:!1})},387:function(t,e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"calculadoras"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"calculadoras"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"link_title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"link"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:102}};n.loc.source={body:"query calculadoras {\n  calculadoras {\n    id\n    link_title\n    link\n    logo {\n      url\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function d(t,e){for(var i=0;i<t.definitions.length;i++){var element=t.definitions[i];if(element.name&&element.name.value==e)return element}}n.definitions.forEach((function(t){if(t.name){var e=new Set;!function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var o=e.type;"NamedType"===o.kind&&n.add(o.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}(t,e),o[t.name.value]=e}})),t.exports=n,t.exports.calculadoras=function(t,e){var n={kind:t.kind,definitions:[d(t,e)]};t.hasOwnProperty("loc")&&(n.loc=t.loc);var r=o[e]||new Set,c=new Set,l=new Set;for(r.forEach((function(t){l.add(t)}));l.size>0;){var v=l;l=new Set,v.forEach((function(t){c.has(t)||(c.add(t),(o[t]||new Set).forEach((function(t){l.add(t)})))}))}return c.forEach((function(e){var o=d(t,e);o&&n.definitions.push(o)})),n}(n,"calculadoras")},388:function(t,e,n){"use strict";var o=n(359);n.n(o).a},389:function(t,e,n){(e=n(35)(!1)).push([t.i,".banner[data-v-5e026d1d],.banner img[data-v-5e026d1d]{width:100%}#header[data-v-5e026d1d],#header-1[data-v-5e026d1d]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);margin-top:40px;padding:15px 20px}#header h1[data-v-5e026d1d]{font-size:36px;font-weight:700;margin:0}#header h1[data-v-5e026d1d],#header h2[data-v-5e026d1d]{text-align:center;color:#fff}#header h2[data-v-5e026d1d]{font-size:28px;font-weight:lighter}#header-1 h2[data-v-5e026d1d]{font-size:36px;font-weight:700}#header-1 h2[data-v-5e026d1d],#header-1 h3[data-v-5e026d1d]{text-align:center;color:#fff;margin:0}#header-1 h3[data-v-5e026d1d]{font-size:28px;font-weight:lighter}.calculadoras h3[data-v-5e026d1d]{text-align:center;margin:30px 0 10px;font-weight:lighter;font-style:italic;color:#5e5e5e}.calculadoras h4[data-v-5e026d1d]{text-align:center;font-size:26px;font-weight:400;color:#5e5e5e;margin:0 0 30px}.calculadora-item[data-v-5e026d1d]{padding:20px 30px}.logo-banco img[data-v-5e026d1d]{width:auto;height:65px}.logo-banco[data-v-5e026d1d]{text-align:center}.calculadora-item span[data-v-5e026d1d]{text-align:center;display:block;margin:10px 0 60px}.header-prestamo[data-v-5e026d1d]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);margin-top:40px;padding:15px 20px;color:#fff}.header-prestamo h6[data-v-5e026d1d]{text-align:center;font-weight:lighter;font-size:20px}.header-prestamo h6 strong[data-v-5e026d1d]{font-size:32px;font-weight:700}.sub-prestamo[data-v-5e026d1d]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);margin-top:40px;padding:15px 20px;color:#fff;display:flex}.prestamos[data-v-5e026d1d]{padding:40px 0}.prestamo-title[data-v-5e026d1d]{display:block;font-weight:700;font-size:24px}.col-prestamos[data-v-5e026d1d]{width:33%;text-align:center}.prestamos-sub[data-v-5e026d1d]{font-size:30px;font-weight:lighter}.contenido-prestamo[data-v-5e026d1d]{border:1px dashed #000;margin:30px;padding:30px;min-height:300px}.contenido-prestamo p[data-v-5e026d1d]{text-align:center;font-size:22px}h4[data-v-5e026d1d]{text-align:center;font-weight:700;font-size:30px;display:block}.ejemplo-container[data-v-5e026d1d]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);margin-top:40px;padding:15px 20px;color:#fff;text-align:center}.ejemplo-container .cuota[data-v-5e026d1d]{font-weight:700;font-size:26px;display:block}.ejemplo-container .interes[data-v-5e026d1d]{font-size:26px;font-weight:lighter}.ejemplo[data-v-5e026d1d]{margin:20px 0}h5[data-v-5e026d1d]{font-size:26px;margin:25px 0 0;color:#5e5e5e}h5[data-v-5e026d1d],h6[data-v-5e026d1d]{text-align:center;display:block}h6[data-v-5e026d1d]{font-size:36px;margin:0;color:#aa381a;font-weight:700}.header-prestamo h6[data-v-5e026d1d]{color:#fff!important}.calcualdora-link[data-v-5e026d1d]{cursor:pointer}@media (max-width:767px){.logo-banco img[data-v-5e026d1d]{height:53px}#header h1[data-v-5e026d1d]{font-size:22px}#header h2[data-v-5e026d1d]{font-size:20px}.calculadoras h3[data-v-5e026d1d]{font-size:18px}.calculadoras h4[data-v-5e026d1d]{font-size:16px}#header-1 h2[data-v-5e026d1d]{font-size:18px}#header-1 h3[data-v-5e026d1d]{font-size:20px}.prestamos h4[data-v-5e026d1d]{font-size:20px!important}.header-prestamo h6[data-v-5e026d1d]{color:#fff!important}.prestamo-title[data-v-5e026d1d]{font-size:22px}.ejemplo-container .cuota[data-v-5e026d1d],.prestamos-sub[data-v-5e026d1d]{font-size:20px}.ejemplo-container .interes[data-v-5e026d1d]{font-size:18px}.calculadora-item[data-v-5e026d1d]{padding:10px 30px}}",""]),t.exports=e},451:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("img",{attrs:{src:n(358)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header"}},[e("h1",[this._v("CALCULA TU CRÉDITO")]),this._v(" "),e("h2",[this._v("EN VARIAS INSTITUCIONES FINANCIERAS")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row "},[n("div",{staticClass:"col-sm-12"},[n("h3",[t._v("DA CLICK EN TU INSTITUCIÓN FINANCIERA DE CONFIANZA")]),t._v(" "),n("h4",[n("strong",[t._v("INVIERTE")]),t._v(" EL "),n("strong",[t._v("30%")]),t._v(" DE TU\n          "),n("strong",[t._v("SALARIO")]),t._v(" EN TU HOGAR\n        ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header-1"}},[e("h2",[this._v("CONOCE")]),this._v(" "),e("h3",[this._v("LO NECESARIO")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container prestamos"},[n("div",{staticClass:"row "},[n("div",{staticClass:"col-sm-12"},[n("h4",[t._v("\n          LOS BANCOS "),n("strong",[t._v("UTILIZAN")]),t._v(" ESTOS 2 SISTEMAS PARA\n          "),n("strong",[t._v("OTORGAR PRÉSTAMOS")])]),t._v(" "),n("div",{staticClass:"tipos-prestamos"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"header-prestamo"},[n("h6",[t._v("\n                  SISTEMA DE AMORTIZACIÓN "),n("br"),n("strong",[t._v("FRANCÉS")])])]),t._v(" "),n("div",{staticClass:"sub-prestamo"},[n("div",{staticClass:"col-prestamos"},[n("span",{staticClass:"prestamo-title"},[t._v("DEUDA")]),n("span",{staticClass:"prestamos-sub"},[t._v("$300")])]),t._v(" "),n("div",{staticClass:"col-prestamos"},[n("span",{staticClass:"prestamo-title"},[t._v("INTERÉS")]),n("span",{staticClass:"prestamos-sub"},[t._v("11%")])]),t._v(" "),n("div",{staticClass:"col-prestamos"},[n("span",{staticClass:"prestamo-title"},[t._v("TIEMPO")]),n("span",{staticClass:"prestamos-sub"},[t._v("12 MESES")])])]),t._v(" "),n("div",{staticClass:"contenido-prestamo"},[n("p",[t._v("\n                  LAS CUOTAS SON "),n("strong",[t._v("FIJAS")]),t._v(" DURANTE EL PLAZO DE\n                  PAGO DE UN CRÉDITO.\n                ")]),t._v(" "),n("p",[t._v("\n                  EN LAS PRIMERAS CUOTAS SE\n                  "),n("strong",[t._v("AMORTIZA ")]),t._v(" PROPORCIONALMENTE\n                  "),n("strong",[t._v("MENOS CAPITAL")]),t._v(" QUE EN LAS ÚLTIMAS CUOTAS,\n                  POR LO QUE GENERA INTERÉS .\n                ")])]),t._v(" "),n("h4",[t._v("POR EJEMPLO")]),t._v(" "),n("div",{staticClass:"ejemplo-container"},[n("div",{staticClass:"ejemplo"},[n("span",{staticClass:"cuota"},[t._v("PRIMERA CUOTA: $26,51")]),t._v(" "),n("span",{staticClass:"interes"},[t._v("(INTERÉS $2,75, CAPITAL $23,76)")])]),t._v(" "),n("div",{staticClass:"ejemplo"},[n("span",{staticClass:"cuota"},[t._v("SEGUNDA CUOTA: $26,51")]),t._v(" "),n("span",{staticClass:"interes"},[t._v("(INTERÉS $2,53, CAPITAL $23,98)")])]),t._v(" "),n("div",{staticClass:"ejemplo"},[n("span",{staticClass:"cuota"},[t._v("TERCERA CUOTA: $26,51")]),t._v(" "),n("span",{staticClass:"interes"},[t._v("(INTERÉS $2,31, CAPITAL $24,20)")])])]),t._v(" "),n("h5",[t._v("EL CIUDADANO TERMINA PAGANDO:")]),t._v(" "),n("h6",[t._v("$318,12")])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("div",{staticClass:"header-prestamo"},[n("h6",[t._v("SISTEMA DE AMORTIZACIÓN"),n("br"),n("strong",[t._v("ALEMÁN")])])]),t._v(" "),n("div",{staticClass:"sub-prestamo"},[n("div",{staticClass:"col-prestamos "},[n("span",{staticClass:"prestamo-title"},[t._v("DEUDA")]),n("span",{staticClass:"prestamos-sub"},[t._v("$300")])]),t._v(" "),n("div",{staticClass:"col-prestamos "},[n("span",{staticClass:"prestamo-title"},[t._v("INTERÉS")]),n("span",{staticClass:"prestamos-sub"},[t._v("11%")])]),t._v(" "),n("div",{staticClass:"col-prestamos"},[n("span",{staticClass:"prestamo-title"},[t._v("TIEMPO")]),n("span",{staticClass:"prestamos-sub"},[t._v("12 MESES")])])]),t._v(" "),n("div",{staticClass:"contenido-prestamo"},[n("p",[t._v("\n                  LAS CUOTAS SON "),n("strong",[t._v("DECRECIENTES ")]),t._v("DURANTE EL\n                  PLAZO DE PAGO DE UN CRÉDITO.\n                ")]),t._v(" "),n("p",[t._v("\n                  EXISTE "),n("strong",[t._v("AMORTIZACIÓN FIJA")]),t._v(" DE CAPITAL Y SE\n                  PAGAN MENOS INTERESES.\n                ")])]),t._v(" "),n("h4",[t._v("POR EJEMPLO")]),t._v(" "),n("div",{staticClass:"ejemplo-container"},[n("div",{staticClass:"ejemplo"},[n("span",{staticClass:"cuota"},[t._v("PRIMERA CUOTA: $27.75")]),t._v(" "),n("span",{staticClass:"interes"},[t._v("(INTERÉS $2,75, CAPITAL $25)")])]),t._v(" "),n("div",{staticClass:"ejemplo"},[n("span",{staticClass:"cuota"},[t._v("SEGUNDA CUOTA: $27,52")]),t._v(" "),n("span",{staticClass:"interes"},[t._v("(INTERÉS $2,52, CAPITAL $25)")])]),t._v(" "),n("div",{staticClass:"ejemplo"},[n("span",{staticClass:"cuota"},[t._v("TERCERA CUOTA: $27.29")]),t._v(" "),n("span",{staticClass:"interes"},[t._v("(INTERÉS $2,29, CAPITAL $25)")])])]),t._v(" "),n("h5",[t._v("EL CIUDADANO TERMINA PAGANDO:")]),t._v(" "),n("h6",[t._v("$317,88")])])])])])])])}],footer=n(350),d=n(387),r=n.n(d),c={components:{footerPage:footer.default},data:function(){return{selected:null,loading:!0,calculadoras:[]}},methods:{mostrarResultados:function(){this.resultados_proyectos=!0},sendGAEvent:function(link,label){this.$ga.event({eventCategory:"calculadora",eventAction:"abrir",eventLabel:label}),window.open(link,"_blank")}},apollo:{calculadoras:{prefetch:!0,query:r.a,result:function(t){var data=t.data,e=(t.loading,t.networkStatus);data&&7===e&&(this.loading=!1,this.calculadoras=data.calculadoras)},variables:function(){}}}},l=(n(388),n(18)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"cont"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.loading?t._e():n("div",{staticClass:"container calculadoras"},[t._m(2),t._v(" "),n("div",{staticClass:"row"},t._l(t.calculadoras,(function(e,o){return n("div",{key:o,staticClass:"col-sm-4 calculadora-item"},[n("a",{staticClass:"calcualdora-link",attrs:{target:"_blank"},on:{click:function(n){return t.sendGAEvent(e.link,e.link_title)}}},[n("div",{staticClass:"logo-banco"},[n("img",{attrs:{src:"https://strapi.constructorespositivos.com"+e.logo.url}})]),t._v(" "),n("span",[t._v(t._s(e.link_title))])])])})),0)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("section",[n("footerPage")],1)])}),o,!1,null,"5e026d1d",null);e.default=component.exports}}]);