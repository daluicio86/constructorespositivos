(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{349:function(e,t,n){var content=n(353);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("afdc6470",content,!0,{sourceMap:!1})},350:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-sm-4"},[t("img",{attrs:{src:n(351)}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"copyright"},[this._v("CONSTRUCTORES POSITIVOS"),t("br"),this._v("2020")])}],r={},c=(n(352),n(18)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("footer",[n("div",{staticClass:"row"},[e._m(0),e._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("nuxt-link",{attrs:{to:"/"}},[e._v("ENCUENTRA LA CASA DE TUS SUEÑOS")]),e._v(" "),n("nuxt-link",{attrs:{to:"/calculadorafinanciera"}},[e._v("CALCULADORA DE CRÉDITO")]),e._v(" "),n("nuxt-link",{attrs:{to:"/insumos"}},[e._v("MATERIALES PARA LA REMODELACIÓN")])],1),e._v(" "),n("div",{staticClass:"col-sm-6"},[n("nuxt-link",{attrs:{to:"/quienes_somos"}},[e._v("QUIENES SOMOS")]),e._v(" "),n("nuxt-link",{attrs:{to:"/blog"}},[e._v("BLOG Y NOTICIAS")])],1)])]),e._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"social_links"},[n("div",{staticClass:"social_link fb"},[n("a",{attrs:{href:"https://www.facebook.com/constructurespositivosecuador",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),e._v(" "),n("div",{staticClass:"social_link ig"},[n("a",{attrs:{href:"https://www.instagram.com/constructorespositivos/?igshid=q4jnx0yhs6yv",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),e._v(" "),n("div",{staticClass:"social_link twitter"},[n("a",{attrs:{href:"https://twitter.com/Construpositivo",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])])])])]),e._v(" "),e._m(1)])}),o,!1,null,"19fde776",null);t.default=component.exports;installComponents(component,{Footer:n(350).default})},351:function(e,t,n){e.exports=n.p+"img/footer_registra_proyecto.382e4dc.png"},352:function(e,t,n){"use strict";var o=n(349);n.n(o).a},353:function(e,t,n){(t=n(35)(!1)).push([e.i,"footer[data-v-19fde776]{width:100%;background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);padding:20px 80px}footer img[data-v-19fde776]{width:100%;max-width:422px}footer a[data-v-19fde776]{display:block;color:#fff;font-weight:700}.social_link[data-v-19fde776]{display:inline-block;margin:0 10px;color:#fff}.copyright[data-v-19fde776]{margin-top:10px;margin-bottom:10px;text-align:center;font-size:13px}.social_link[data-v-19fde776]{font-size:24px}@media only screen and (max-width:641px){a[data-v-19fde776]{font-size:14px;margin:4px 0}}",""]),e.exports=t},360:function(e,t,n){e.exports=n.p+"img/banner_insumos.452d443.jpg"},361:function(e,t,n){var content=n(392);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("2fe25d1f",content,!0,{sourceMap:!1})},362:function(e,t,n){var content=n(394);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("4ced3ed7",content,!0,{sourceMap:!1})},379:function(e,t,n){"use strict";n.r(t);var o={props:{image:{type:!String,default:""},nombre_empresa:!String,website:!String,telefono:!String},data:function(){return{image_path:""}},methods:{openLinkBuscadorProveedores:function(link,label){this.$ga.event({eventCategory:"insumos",eventAction:"abrir",eventLabel:label}),window.open(link,"_blank")}},computed:{},mounted:function(){this.image_path="https://strapi.constructorespositivos.com"+this.image},watch:{image:function(e,t){this.image_path="https://strapi.constructorespositivos.com"+e}}},r=(n(391),n(18)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-sm col-md-3 proveedor-item"},[n("figure",[n("img",{attrs:{src:e.image_path}})]),e._v(" "),n("div",{staticClass:"foot_proyectos"},[n("div",{staticClass:"nombre_empresa"},[e._v(e._s(e.nombre_empresa))]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm"},[n("div",{staticClass:"datos_proyecto"},[n("a",{staticClass:"website",on:{click:function(t){return e.openLinkBuscadorProveedores(e.website,e.nombre_empresa)}}},[e._v(e._s(e.website))])]),e._v(" "),n("div",{staticClass:"datos_proyecto"},[e._v("\n          Tel:\n          "),n("a",{staticClass:"phone",attrs:{href:"tel:"+this.telefono}},[e._v(e._s(e.telefono))])])])])])])}),[],!1,null,"aef92d0a",null);t.default=component.exports},388:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categoryInsumos"},arguments:[{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"StringValue",value:"categoryname",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categoryname"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:80}};n.loc.source={body:'query {\n  categoryInsumos(sort: "categoryname") {\n    id\n    categoryname\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};n.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var o=t.type;"NamedType"===o.kind&&n.add(o.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,n)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,n)})),t.definitions&&t.definitions.forEach((function(t){e(t,n)}))}(e,t),o[e.name.value]=t}})),e.exports=n},389:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"insumos"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categoryInsumos"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categoryname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"insumos"},arguments:[{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"StringValue",value:"nombre_empresa:asc",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nombre_empresa"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"website"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"telefono"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:229}};n.loc.source={body:'query insumos($id: ID!) {\n  categoryInsumos(where: { id: $id }) {\n    categoryname\n    insumos(sort: "nombre_empresa:asc") {\n      id\n      nombre_empresa\n      website\n      telefono\n      logo {\n        url\n      }\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function r(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var o=t.type;"NamedType"===o.kind&&n.add(o.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,n)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,n)})),t.definitions&&t.definitions.forEach((function(t){e(t,n)}))}(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.insumos=function(e,t){var n={kind:e.kind,definitions:[r(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var c=o[t]||new Set,d=new Set,l=new Set;for(c.forEach((function(e){l.add(e)}));l.size>0;){var v=l;l=new Set,v.forEach((function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach((function(e){l.add(e)})))}))}return d.forEach((function(t){var o=r(e,t);o&&n.definitions.push(o)})),n}(n,"insumos")},390:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"insumos"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"insumos"},arguments:[{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"StringValue",value:"nombre_empresa:asc",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nombre_empresa"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category_insumos"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categoryname"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"website"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"telefono"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:188}};n.loc.source={body:'query insumos {\n  insumos(sort: "nombre_empresa:asc") {\n    id\n    nombre_empresa\n    category_insumos {\n      categoryname\n    }\n    logo {\n      url\n    }\n    website\n    telefono\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function r(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var o=t.type;"NamedType"===o.kind&&n.add(o.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,n)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,n)})),t.definitions&&t.definitions.forEach((function(t){e(t,n)}))}(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.insumos=function(e,t){var n={kind:e.kind,definitions:[r(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var c=o[t]||new Set,d=new Set,l=new Set;for(c.forEach((function(e){l.add(e)}));l.size>0;){var v=l;l=new Set,v.forEach((function(e){d.has(e)||(d.add(e),(o[e]||new Set).forEach((function(e){l.add(e)})))}))}return d.forEach((function(t){var o=r(e,t);o&&n.definitions.push(o)})),n}(n,"insumos")},391:function(e,t,n){"use strict";var o=n(361);n.n(o).a},392:function(e,t,n){(t=n(35)(!1)).push([e.i,"figure img[data-v-aef92d0a]{width:100%}.foot_proyectos[data-v-aef92d0a]{text-align:center}.datos_proyecto[data-v-aef92d0a] p{padding:0!important;margin:0!important}.proveedor-item[data-v-aef92d0a]{margin:5px 20px}.website[data-v-aef92d0a]{color:#c12e24;font-size:14px;text-decoration:underline;cursor:pointer}",""]),e.exports=t},393:function(e,t,n){"use strict";var o=n(362);n.n(o).a},394:function(e,t,n){(t=n(35)(!1)).push([e.i,".banner[data-v-37fcb272],.banner img[data-v-37fcb272]{width:100%}.loading[data-v-37fcb272]{margin-top:30px}#header[data-v-37fcb272]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);margin-top:40px;padding:15px 20px}#header h1[data-v-37fcb272]{font-size:36px;font-weight:700;margin:0}#header h1[data-v-37fcb272],#header h2[data-v-37fcb272]{text-align:center;color:#fff}#header h2[data-v-37fcb272]{font-size:28px;font-weight:lighter}#video[data-v-37fcb272]{margin:30px 0}#insumos[data-v-37fcb272]{margin:20px 0}#insumos h2[data-v-37fcb272]{font-size:26px;margin-bottom:10px;font-weight:700}#insumos h2[data-v-37fcb272],#insumos h3[data-v-37fcb272]{color:#5e5e5e;text-align:center}#insumos h3[data-v-37fcb272]{font-size:20px;margin-bottom:20px;font-weight:400}#insumos button[data-v-37fcb272]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;border:none;outline:none;height:38px;border-radius:10px;padding:6px 25px;position:relative;top:-2px}#insumos input[data-v-37fcb272]{width:100%;margin-top:5px;border-radius:5px;padding:6px 20px}#insumos[data-v-37fcb272] .vs__selected-options{width:2500px;flex-basis:inherit!important}#insumos[data-v-37fcb272] .vs__clear{margin-right:-37px;display:none}#proveedores_resultado[data-v-37fcb272]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;padding:20px 0}.proveedores_container h4[data-v-37fcb272]{text-align:center;font-size:23px;color:#5e5e5e;margin-top:40px;text-transform:uppercase}.categorias[data-v-37fcb272] #vs1__listbox{width:500px;top:3px;position:relative}#map[data-v-37fcb272]{margin:30px}#map[data-v-37fcb272],.no-result[data-v-37fcb272]{text-align:center}.no-result[data-v-37fcb272]{padding:30px 0;font-weight:700}.proveedores-todos[data-v-37fcb272]{padding:40px 0}.proveedores-todos h3[data-v-37fcb272]{font-weight:700;font-size:26px;text-align:center;color:#5e5e5e}.proveedores-container[data-v-37fcb272]{display:flex;flex-wrap:wrap;justify-content:center;align-items:center}.proveedor[data-v-37fcb272]{margin:20px 30px;width:25%}.proveedor img[data-v-37fcb272]{width:100%;height:auto;display:block}.proveedor-nombre[data-v-37fcb272]{margin-top:8px;display:block;font-weight:700}.proveedor-sitio[data-v-37fcb272],.proveedor-tel[data-v-37fcb272]{display:block}.proveedor-sitio a[data-v-37fcb272]{color:#b65e48}.proveedor-tel a[data-v-37fcb272]{color:#5e5e5e}@media (max-width:767px){#header h1[data-v-37fcb272]{font-size:22px}#header h2[data-v-37fcb272]{font-size:20px}#insumos button[data-v-37fcb272]{margin:20px auto 10px;top:0}.button-buscar[data-v-37fcb272]{text-align:center}.proveedores-container[data-v-37fcb272]{flex-direction:column}.proveedor[data-v-37fcb272]{margin:20px auto;width:80%}.categorias[data-v-37fcb272] #vs1__listbox{width:100%;min-width:300px}}",""]),e.exports=t},441:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"banner"},[t("img",{attrs:{src:n(360)}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"header"}},[t("h1",[this._v("TODO LO QUE NECESITAS")]),this._v(" "),t("h2",[this._v("PARA LA CONSTRUCCIÓN")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"spinner-border",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[this._v("Loading...")])])}],r=(n(44),n(17)),footer=n(350),c=n(388),d=n.n(c),l=n(389),v=n.n(l),f=n(390),m=n.n(f),h=n(379),_={components:{footerPage:footer.default,proveedores:h.default},data:function(){return{selected:"first",proovedores_resultado:!1,categoria:null,insumos_obj:{logo:{url:""}},insumos_todos:"",noresults:!1,verproveedores:!1,loading:!1}},apollo:{categoryInsumos:{prefetch:!0,query:d.a,variables:function(){}},insumos:{prefetch:!1,query:v.a,variables:function(){return{id:this.categoria.id}},skip:function(){return this.skipQuery}},todosInsumos:{prefetch:!1,query:m.a,skip:function(){return this.skipQuery}}},methods:{mostrarResultados:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$apollo.queries.todosInsumos.skip=!1,t.next=3,e.$apollo.queries.todosInsumos.refetch();case 3:return n=t.sent,t.next=6,n.data.insumos;case 6:e.insumos_todos=t.sent,e.verproveedores=!0,e.proovedores_resultado=!1;case 9:case"end":return t.stop()}}),t)})))()},onChangeSelection:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.buscarResultados();case 1:case"end":return t.stop()}}),t)})))()},buscarResultados:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e.categoria){t.next=12;break}return e.loading=!0,e.verproveedores=!1,e.$apollo.queries.insumos.skip=!1,t.next=6,e.$apollo.queries.insumos.refetch();case 6:return n=t.sent,t.next=9,n.data.categoryInsumos[0].insumos;case 9:e.insumos_obj=t.sent,e.insumos_obj.length>0?(e.proovedores_resultado=!0,e.noresults=!1):(e.proovedores_resultado=!1,e.noresults=!0),e.loading=!1;case 12:case"end":return t.stop()}}),t)})))()},openLinkAllProovedores:function(link,label){this.$ga.event({eventCategory:"insumos",eventAction:"abrir",eventLabel:label}),window.open(link,"_blank")}}},k=(n(393),n(18)),component=Object(k.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"cont"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"container"},[n("div",{attrs:{id:"video"}},[n("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/-pIj0x6Y3A0?rel=0",allowfullscreen:""}})],1),e._v(" "),n("section",{attrs:{id:"insumos"}},[n("h2",[e._v("¡ENCUENTRA LO QUE NECESITAS!")]),e._v(" "),n("h3",[e._v("Busca por categorías de productos")]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-3"}),e._v(" "),n("div",{staticClass:"col-sm-6"},[n("v-select",{staticClass:"categorias",attrs:{placeholder:"Ej: Acero",options:e.categoryInsumos,label:"categoryname"},on:{input:e.onChangeSelection},model:{value:e.categoria,callback:function(t){e.categoria=t},expression:"categoria"}})],1),e._v(" "),n("div",{staticClass:"col-sm-3"})]),e._v(" "),e.loading?n("div",{staticClass:"d-flex justify-content-center loading"},[e._m(2)]):e._e(),e._v(" "),e.proovedores_resultado?n("div",{staticClass:"proveedores_container"},[n("h4",[e._v(e._s(e.categoria.categoryname))]),e._v(" "),n("div",{attrs:{id:"proveedores_resultado"}},e._l(e.insumos_obj,(function(e,t){return n("proveedores",{key:t,attrs:{image:e.logo.url,website:e.website,telefono:e.telefono,nombre_empresa:e.nombre_empresa}})})),1)]):e._e(),e._v(" "),e.noresults?n("div",{staticClass:"no-result"},[e._v("\n        NO HAY RESULTADOS\n      ")]):e._e(),e._v(" "),n("div",{attrs:{id:"map"}},[n("button",{on:{click:e.mostrarResultados}},[n("span",[e._v("VER")]),e._v(" PROVEEDORES\n        ")]),e._v(" "),e.verproveedores?n("div",{staticClass:"proveedores-todos"},[n("h3",[e._v("TODOS LOS PROOVEDORES")]),e._v(" "),n("div",{staticClass:"proveedores-container"},e._l(e.insumos_todos,(function(t,o){return n("div",{key:o,staticClass:"proveedor"},[n("img",{attrs:{src:"https://strapi.constructorespositivos.com"+t.logo.url}}),e._v(" "),n("span",{staticClass:"proveedor-nombre"},[e._v(e._s(t.nombre_empresa))]),e._v(" "),n("span",{staticClass:"proveedor-sitio"},[n("a",{on:{click:function(n){return e.openLinkAllProovedores(t.website,t.nombre_empresa)}}},[e._v(e._s(t.website))])]),e._v(" "),n("span",{staticClass:"proveedor-tel"},[n("a",{attrs:{href:"tel:"+t.website}},[e._v("Tel: "+e._s(t.telefono))])])])})),0)]):e._e()])])]),e._v(" "),n("section",[n("footerPage")],1)])}),o,!1,null,"37fcb272",null);t.default=component.exports;installComponents(component,{Proveedores:n(379).default})}}]);