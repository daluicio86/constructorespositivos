(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{349:function(e,t,n){var content=n(353);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("537eb6ce",content,!0,{sourceMap:!1})},350:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-sm-4"},[t("img",{attrs:{src:n(351)}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"copyright"},[this._v("CONSTRUCTORES POSITIVOS"),t("br"),this._v("2020")])}],r={},c=(n(352),n(18)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("footer",[n("div",{staticClass:"row"},[e._m(0),e._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("nuxt-link",{attrs:{to:"/"}},[e._v("ENCUENTRA LA CASA DE TUS SUEÑOS")]),e._v(" "),n("nuxt-link",{attrs:{to:"/visyvip"}},[e._v("PROYECTOS VIS Y VIP")]),e._v(" "),n("nuxt-link",{attrs:{to:"/insumos"}},[e._v("MATERIALES PARA LA REMODELACIÓN")])],1),e._v(" "),n("div",{staticClass:"col-sm-6"},[n("nuxt-link",{attrs:{to:"/calculadorafinanciera"}},[e._v("CALCULADORA DE CRÉDITO")]),e._v(" "),n("nuxt-link",{attrs:{to:"/quienes_somos"}},[e._v("QUIENES SOMOS")]),e._v(" "),n("nuxt-link",{attrs:{to:"/blog"}},[e._v("BLOG Y NOTICIAS")])],1)])]),e._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"social_links"},[n("div",{staticClass:"social_link fb"},[n("a",{attrs:{href:"https://www.facebook.com/constructurespositivosecuador",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),e._v(" "),n("div",{staticClass:"social_link ig"},[n("a",{attrs:{href:"https://www.instagram.com/constructorespositivos/?igshid=q4jnx0yhs6yv",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),e._v(" "),n("div",{staticClass:"social_link twitter"},[n("a",{attrs:{href:"https://twitter.com/Construpositivo",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])])])])]),e._v(" "),e._m(1)])}),o,!1,null,"a1aac506",null);t.default=component.exports;installComponents(component,{Footer:n(350).default})},351:function(e,t,n){e.exports=n.p+"img/footer_registra_proyecto.382e4dc.png"},352:function(e,t,n){"use strict";var o=n(349);n.n(o).a},353:function(e,t,n){(t=n(35)(!1)).push([e.i,"footer[data-v-a1aac506]{width:100%;background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);padding:20px 80px}footer img[data-v-a1aac506]{width:100%;max-width:422px}footer a[data-v-a1aac506]{display:block;color:#fff;font-weight:700}.social_link[data-v-a1aac506]{display:inline-block;margin:0 10px;color:#fff}.copyright[data-v-a1aac506]{margin-top:10px;margin-bottom:10px;text-align:center;font-size:13px}.social_link[data-v-a1aac506]{font-size:24px}@media only screen and (max-width:641px){a[data-v-a1aac506]{font-size:14px;margin:4px 0}}",""]),e.exports=t},355:function(e,t,n){var content=n(359);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("2fe25d1f",content,!0,{sourceMap:!1})},356:function(e,t,n){"use strict";n.r(t);var o={props:{image:{type:!String,default:""},nombre_empresa:!String,website:!String,telefono:!String},data:function(){return{image_path:""}},methods:{openLinkBuscadorProveedores:function(link,label){this.$ga.event({eventCategory:"insumos",eventAction:"abrir",eventLabel:label}),window.open(link,"_blank")}},computed:{},mounted:function(){this.image_path="https://strapi.constructorespositivos.com"+this.image},watch:{image:function(e,t){this.image_path="https://strapi.constructorespositivos.com"+e}}},r=(n(358),n(18)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-sm col-md-3 proveedor-item"},[n("figure",[n("img",{attrs:{src:e.image_path}})]),e._v(" "),n("div",{staticClass:"foot_proyectos"},[n("div",{staticClass:"nombre_empresa"},[e._v(e._s(e.nombre_empresa))]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm"},[n("div",{staticClass:"datos_proyecto"},[n("a",{staticClass:"website",on:{click:function(t){return e.openLinkBuscadorProveedores(e.website,e.nombre_empresa)}}},[e._v(e._s(e.website))])]),e._v(" "),n("div",{staticClass:"datos_proyecto"},[e._v("\n          Tel:\n          "),n("a",{staticClass:"phone",attrs:{href:"tel:"+this.telefono}},[e._v(e._s(e.telefono))])])])])])])}),[],!1,null,"aef92d0a",null);t.default=component.exports},357:function(e,t,n){e.exports=n.p+"img/banner_insumos.452d443.jpg"},358:function(e,t,n){"use strict";var o=n(355);n.n(o).a},359:function(e,t,n){(t=n(35)(!1)).push([e.i,"figure img[data-v-aef92d0a]{width:100%}.foot_proyectos[data-v-aef92d0a]{text-align:center}.datos_proyecto[data-v-aef92d0a] p{padding:0!important;margin:0!important}.proveedor-item[data-v-aef92d0a]{margin:5px 20px}.website[data-v-aef92d0a]{color:#c12e24;font-size:14px;text-decoration:underline;cursor:pointer}",""]),e.exports=t},368:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categoryServicios"},arguments:[{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"StringValue",value:"categoria",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categoria"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:76}};n.loc.source={body:'query {\n  categoryServicios(sort: "categoria") {\n    id\n    categoria\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};n.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var o=t.type;"NamedType"===o.kind&&n.add(o.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,n)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,n)})),t.definitions&&t.definitions.forEach((function(t){e(t,n)}))}(e,t),o[e.name.value]=t}})),e.exports=n},369:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"servicios"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categoryServicios"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categoria"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"servicios"},arguments:[{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"StringValue",value:"nombre:asc",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nombre"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"web"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"telefono"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imagen_servicio"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:223}};n.loc.source={body:'query servicios($id: ID!) {\n  categoryServicios(where: { id: $id }) {\n    categoria\n    servicios(sort: "nombre:asc") {\n      id\n      nombre\n      web\n      telefono\n      imagen_servicio {\n        url\n      }\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function r(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var o=t.type;"NamedType"===o.kind&&n.add(o.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,n)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,n)})),t.definitions&&t.definitions.forEach((function(t){e(t,n)}))}(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.servicios=function(e,t){var n={kind:e.kind,definitions:[r(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var c=o[t]||new Set,d=new Set,l=new Set;for(c.forEach((function(e){l.add(e)}));l.size>0;){var v=l;l=new Set,v.forEach((function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach((function(e){l.add(e)})))}))}return d.forEach((function(t){var o=r(e,t);o&&n.definitions.push(o)})),n}(n,"servicios")},370:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"servicios"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"servicios"},arguments:[{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"StringValue",value:"nombre:asc",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nombre"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category_servicios"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categoria"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"imagen_servicio"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"web"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"telefono"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:181}};n.loc.source={body:'query servicios {\n  servicios(sort: "nombre:asc") {\n    id\n    nombre\n    category_servicios{\n      categoria\n    }\n    imagen_servicio {\n      url\n    }\n    web\n    telefono\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function r(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var o=t.type;"NamedType"===o.kind&&n.add(o.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,n)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,n)})),t.definitions&&t.definitions.forEach((function(t){e(t,n)}))}(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.servicios=function(e,t){var n={kind:e.kind,definitions:[r(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var c=o[t]||new Set,d=new Set,l=new Set;for(c.forEach((function(e){l.add(e)}));l.size>0;){var v=l;l=new Set,v.forEach((function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach((function(e){l.add(e)})))}))}return d.forEach((function(t){var o=r(e,t);o&&n.definitions.push(o)})),n}(n,"servicios")},372:function(e,t,n){var content=n(407);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("5666f9d1",content,!0,{sourceMap:!1})},406:function(e,t,n){"use strict";var o=n(372);n.n(o).a},407:function(e,t,n){(t=n(35)(!1)).push([e.i,".banner[data-v-ec09d1b2],.banner img[data-v-ec09d1b2]{width:100%}.loading[data-v-ec09d1b2]{margin-top:30px}#header[data-v-ec09d1b2]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);margin-top:40px;padding:15px 20px}#header h1[data-v-ec09d1b2]{font-size:36px;font-weight:700;margin:0}#header h1[data-v-ec09d1b2],#header h2[data-v-ec09d1b2]{text-align:center;color:#fff}#header h2[data-v-ec09d1b2]{font-size:28px;font-weight:lighter}#video[data-v-ec09d1b2]{margin:30px 0}#insumos[data-v-ec09d1b2]{margin:20px 0}#insumos h2[data-v-ec09d1b2]{font-size:26px;margin-bottom:10px;font-weight:700}#insumos h2[data-v-ec09d1b2],#insumos h3[data-v-ec09d1b2]{color:#5e5e5e;text-align:center}#insumos h3[data-v-ec09d1b2]{font-size:20px;margin-bottom:20px;font-weight:400}#insumos button[data-v-ec09d1b2]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;border:none;outline:none;height:38px;border-radius:10px;padding:6px 25px;position:relative;top:-2px}#insumos input[data-v-ec09d1b2]{width:100%;margin-top:5px;border-radius:5px;padding:6px 20px}#insumos[data-v-ec09d1b2] .vs__selected-options{width:2500px;flex-basis:inherit!important}#insumos[data-v-ec09d1b2] .vs__clear{margin-right:-37px;display:none}#proveedores_resultado[data-v-ec09d1b2]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:20px 0}.proveedores_container h4[data-v-ec09d1b2]{text-align:center;font-size:23px;color:#5e5e5e;margin-top:40px;text-transform:uppercase}.categorias[data-v-ec09d1b2] #vs1__listbox{width:500px;top:3px;position:relative}#map[data-v-ec09d1b2]{margin:30px}#map[data-v-ec09d1b2],.no-result[data-v-ec09d1b2]{text-align:center}.no-result[data-v-ec09d1b2]{padding:30px 0;font-weight:700}.proveedores-todos[data-v-ec09d1b2]{padding:40px 0}.proveedores-todos h3[data-v-ec09d1b2]{font-weight:700;font-size:26px;text-align:center;color:#5e5e5e}.proveedores-container[data-v-ec09d1b2]{display:flex;flex-wrap:wrap;justify-content:center;align-items:center}.proveedor[data-v-ec09d1b2]{margin:20px 30px;width:25%}.proveedor img[data-v-ec09d1b2]{width:100%;height:auto;display:block}.proveedor-nombre[data-v-ec09d1b2]{margin-top:8px;display:block;font-weight:700}.proveedor-sitio[data-v-ec09d1b2],.proveedor-tel[data-v-ec09d1b2]{display:block}.proveedor-sitio a[data-v-ec09d1b2]{color:#b65e48}.proveedor-tel a[data-v-ec09d1b2]{color:#5e5e5e}@media (max-width:767px){#header h1[data-v-ec09d1b2]{font-size:22px}#header h2[data-v-ec09d1b2]{font-size:20px}#insumos button[data-v-ec09d1b2]{margin:20px auto 10px;top:0}.button-buscar[data-v-ec09d1b2]{text-align:center}.proveedores-container[data-v-ec09d1b2]{flex-direction:column}.proveedor[data-v-ec09d1b2]{margin:20px auto;width:80%}.categorias[data-v-ec09d1b2] #vs1__listbox{width:100%;min-width:300px}}",""]),e.exports=t},465:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"banner"},[t("img",{attrs:{src:n(357)}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"header"}},[t("h1",[this._v("TODO LO QUE NECESITAS")]),this._v(" "),t("h2",[this._v("PARA LA CONSTRUCCIÓN")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"spinner-border",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[this._v("Loading...")])])}],r=(n(44),n(17)),footer=n(350),c=n(368),d=n.n(c),l=n(369),v=n.n(l),m=n(370),f=n.n(m),h=n(356),_={components:{footerPage:footer.default,proveedores:h.default},data:function(){return{selected:"first",proovedores_resultado:!1,categoria:null,servicios_obj:{logo:{url:""}},servicios_todos:"",noresults:!1,verproveedores:!1,loading:!1}},apollo:{categoryServicios:{prefetch:!0,query:d.a,variables:function(){}},servicios:{prefetch:!1,query:v.a,variables:function(){return{id:this.categoria.id}},skip:function(){return this.skipQuery}},todosServicios:{prefetch:!1,query:f.a,skip:function(){return this.skipQuery}}},methods:{mostrarResultados:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$apollo.queries.todosServicios.skip=!1,t.next=3,e.$apollo.queries.todosServicios.refetch();case 3:return n=t.sent,t.next=6,n.data.servicios;case 6:e.servicios_todos=t.sent,e.verproveedores=!0,e.proovedores_resultado=!1;case 9:case"end":return t.stop()}}),t)})))()},onChangeSelection:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.buscarResultados();case 1:case"end":return t.stop()}}),t)})))()},buscarResultados:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e.categoria){t.next=12;break}return e.loading=!0,e.verproveedores=!1,e.$apollo.queries.servicios.skip=!1,t.next=6,e.$apollo.queries.servicios.refetch();case 6:return n=t.sent,t.next=9,n.data.categoryServicios[0].servicios;case 9:e.servicios_obj=t.sent,e.servicios_obj.length>0?(e.proovedores_resultado=!0,e.noresults=!1):(e.proovedores_resultado=!1,e.noresults=!0),e.loading=!1;case 12:case"end":return t.stop()}}),t)})))()},openLinkAllProovedores:function(link,label){this.$ga.event({eventCategory:"servicios",eventAction:"abrir",eventLabel:label}),window.open(link,"_blank")}}},k=(n(406),n(18)),component=Object(k.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"cont"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"container"},[n("div",{attrs:{id:"video"}},[n("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/EO2dCOXhe9U?rel=0",allowfullscreen:""}})],1),e._v(" "),n("section",{attrs:{id:"insumos"}},[n("h2",[e._v("¡ENCUENTRA LO QUE NECESITAS!")]),e._v(" "),n("h3",[e._v("Busca por categorías de productos")]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-3"}),e._v(" "),n("div",{staticClass:"col-sm-6"},[n("v-select",{staticClass:"categorias",attrs:{placeholder:"Ej: Acero",options:e.categoryServicios,label:"categoryname"},on:{input:e.onChangeSelection},model:{value:e.categoria,callback:function(t){e.categoria=t},expression:"categoria"}})],1),e._v(" "),n("div",{staticClass:"col-sm-3"})]),e._v(" "),e.loading?n("div",{staticClass:"d-flex justify-content-center loading"},[e._m(2)]):e._e(),e._v(" "),e.proovedores_resultado?n("div",{staticClass:"proveedores_container"},[n("h4",[e._v(e._s(e.categoria.categoria))]),e._v(" "),n("div",{attrs:{id:"proveedores_resultado"}},e._l(e.servicios_obj,(function(e,t){return n("proveedores",{key:t,attrs:{image:e.imagen_servicio.url,website:e.web,telefono:e.telefono,nombre_empresa:e.nombre_empresa}})})),1)]):e._e(),e._v(" "),e.noresults?n("div",{staticClass:"no-result"},[e._v("\n        NO HAY RESULTADOS\n      ")]):e._e(),e._v(" "),n("div",{attrs:{id:"map"}},[n("button",{on:{click:e.mostrarResultados}},[n("span",[e._v("VER")]),e._v(" PROVEEDORES\n        ")]),e._v(" "),e.verproveedores?n("div",{staticClass:"proveedores-todos"},[n("h3",[e._v("TODOS LOS PROVEEDORES")]),e._v(" "),n("div",{staticClass:"proveedores-container"},e._l(e.servicios_todos,(function(t,o){return n("div",{key:o,staticClass:"proveedor"},[n("img",{attrs:{src:"https://strapi.constructorespositivos.com"+t.imagen_servicio.url}}),e._v(" "),n("span",{staticClass:"proveedor-nombre"},[e._v(e._s(t.nombre_empresa))]),e._v(" "),n("span",{staticClass:"proveedor-sitio"},[n("a",{on:{click:function(n){return e.openLinkAllProovedores(t.website,t.nombre_empresa)}}},[e._v(e._s(t.web))])]),e._v(" "),n("span",{staticClass:"proveedor-tel"},[n("a",{attrs:{href:"tel:"+t.telefono}},[e._v("Tel: "+e._s(t.telefono))])])])})),0)]):e._e()])])]),e._v(" "),n("section",[n("footerPage")],1)])}),o,!1,null,"ec09d1b2",null);t.default=component.exports;installComponents(component,{Proveedores:n(356).default})}}]);