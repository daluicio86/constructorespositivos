(window.webpackJsonp=window.webpackJsonp||[]).push([[36,19,20],{478:function(e,t,n){var content=n(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("9702ba9c",content,!0,{sourceMap:!1})},479:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this._self._c;return e("div",{staticClass:"col-sm-4"},[e("img",{attrs:{src:n(480)}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"copyright"},[e._v("CONSTRUCTORES POSITIVOS"),t("br"),e._v("2020")])}],r={},d=(n(481),n(31)),component=Object(d.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("footer",[t("div",{staticClass:"row"},[e._m(0),e._v(" "),t("div",{staticClass:"col-sm-4"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-6"},[t("nuxt-link",{attrs:{to:"/"}},[e._v("LA CASA DE TUS SUEÑOS")]),e._v(" "),t("nuxt-link",{attrs:{to:"/visyvip"}},[e._v("PROYECTOS VIS Y VIP")]),e._v(" "),t("nuxt-link",{attrs:{to:"/insumos"}},[e._v("PROVEEDOR MATERIALES")]),e._v(" "),t("nuxt-link",{attrs:{to:"/servicios"}},[e._v("ESPECIALISTAS")])],1),e._v(" "),t("div",{staticClass:"col-sm-6"},[t("nuxt-link",{attrs:{to:"/calculadora"}},[e._v("CALCULADORA")]),e._v(" "),t("nuxt-link",{attrs:{to:"/quienes_somos"}},[e._v("QUIENES SOMOS")]),e._v(" "),t("nuxt-link",{attrs:{to:"/blog"}},[e._v("BLOG")])],1)])]),e._v(" "),t("div",{staticClass:"col-sm-4"},[t("div",{staticClass:"social_links"},[t("div",{staticClass:"social_link fb"},[t("a",{attrs:{href:"https://www.facebook.com/constructurespositivosecuador",target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),e._v(" "),t("div",{staticClass:"social_link ig"},[t("a",{attrs:{href:"https://www.instagram.com/constructorespositivos/?igshid=q4jnx0yhs6yv",target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),e._v(" "),t("div",{staticClass:"social_link twitter"},[t("a",{attrs:{href:"https://twitter.com/Construpositivo",target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])])])])]),e._v(" "),e._m(1)])}),o,!1,null,"5f73b57e",null);t.default=component.exports;installComponents(component,{Footer:n(479).default})},480:function(e,t,n){e.exports=n.p+"img/footer_registra_proyecto.a10f373.png"},481:function(e,t,n){"use strict";n(478)},482:function(e,t,n){var o=n(56)((function(i){return i[1]}));o.push([e.i,"footer[data-v-5f73b57e]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);padding:20px 80px;width:100%}footer img[data-v-5f73b57e]{max-width:422px;width:100%}footer a[data-v-5f73b57e]{color:#fff;display:block;font-weight:700}.social_link[data-v-5f73b57e]{color:#fff;display:inline-block;margin:0 10px}.copyright[data-v-5f73b57e]{font-size:13px;margin-bottom:10px;margin-top:10px;text-align:center}.social_link[data-v-5f73b57e]{font-size:24px}@media only screen and (max-width:641px){a[data-v-5f73b57e]{font-size:14px;margin:4px 0}}",""]),o.locals={},e.exports=o},491:function(e,t,n){var content=n(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("f908b708",content,!0,{sourceMap:!1})},494:function(e,t,n){"use strict";n.r(t);n(156),n(14),n(23);var o={props:{image:{type:!String,default:""},nombre_empresa:!String,website:!String,telefono:!String,descripcion:!String,latitud:!String,longitud:!String},data:function(){return{image_path:"",maps_path:"https://www.google.com/maps/search/?api=1&query="}},methods:{openLinkBuscadorProveedores:function(link,label){this.$ga.event({eventCategory:"insumos",eventAction:"abrir",eventLabel:label}),window.open(link,"_blank")}},computed:{},mounted:function(){console.log("lleeeeeeeee"),console.log(this),this.image_path="https://strapi.constructorespositivos.com"+this.image},watch:{image:function(e,t){this.image_path="https://strapi.constructorespositivos.com"+e}}},r=(n(497),n(31)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"proveedor"},[t("figure",[t("img",{attrs:{src:e.image_path}})]),e._v(" "),t("div",{staticClass:"foot_proyectos"},[t("div",{staticClass:"nombre_empresa"},[e._v(e._s(e.nombre_empresa))]),e._v(" "),t("span",{staticClass:"proveedor-sitio"},e._l(e.website.split("_"),(function(n,o){return t("div",{key:o},[t("a",{on:{click:function(t){return e.openLinkBuscadorProveedores(e.website,e.nombre_empresa)}}},[e._v(e._s(n))])])})),0),e._v(" "),this.telefono.startsWith("09")?t("span",{staticClass:"datos_proyecto"},[t("a",{attrs:{href:"https://wa.me//+".concat(this.telefono.replace("0","593"))}},[t("font-awesome-icon",{attrs:{icon:["fab","whatsapp"]}}),e._v("Tel: "+e._s(e.telefono))],1)]):t("span",{staticClass:"proveedor-tel"},[e._v("Tel: "+e._s(e.telefono))]),t("br"),e._v(" "),t("span",{staticClass:"proveedor-descripcion"},[e._v(e._s(e.descripcion))]),e._v(" "),t("div",{staticClass:"item"},[t("a",{attrs:{href:e.maps_path+e.latitud+","+e.longitud,target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:["fas","directions"]}})],1)])])])}),[],!1,null,"44c25b77",null);t.default=component.exports},497:function(e,t,n){"use strict";n(491)},498:function(e,t,n){var o=n(56)((function(i){return i[1]}));o.push([e.i,"figure img[data-v-44c25b77]{width:100%}.datos_proyecto[data-v-44c25b77] p{margin:0!important;padding:0!important}.proveedor[data-v-44c25b77]{margin:20px 30px;text-align:center;width:25%}.proveedor-item[data-v-44c25b77]{margin:5px 20px}.website[data-v-44c25b77]{color:#c12e24;cursor:pointer;font-size:14px;-webkit-text-decoration:underline;text-decoration:underline}.proveedor-sitio[data-v-44c25b77]{display:block}.proveedor-sitio a[data-v-44c25b77]{color:#b65e48}.proveedor-tel[data-v-44c25b77]{display:block}.proveedor-tel a[data-v-44c25b77]{color:#5e5e5e}",""]),o.locals={},e.exports=o},558:function(e,t,n){var content=n(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("6b828ccb",content,!0,{sourceMap:!1})},605:function(e,t,n){e.exports=n.p+"img/FotoKywi.fde6552.jpg"},606:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categoryInsumos"},arguments:[{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"StringValue",value:"categoryname",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"categoryname"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:86}};n.loc.source={body:'query {\r\n  categoryInsumos(sort: "categoryname") {\r\n    id\r\n    categoryname\r\n  }\r\n}\r\n',name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,t)})),e.definitions&&e.definitions.forEach((function(e){o(e,t)}))}var r={};n.definitions.forEach((function(e){if(e.name){var t=new Set;o(e,t),r[e.name.value]=t}})),e.exports=n},607:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"insumos"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categoryInsumos"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categoryname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"insumos"},arguments:[{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"StringValue",value:"nombre_empresa:asc",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nombre_empresa"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"website"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"descripcion"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"latitud"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"longitud"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"telefono"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:293}};n.loc.source={body:'query insumos($id: ID!) {\r\n  categoryInsumos(where: { id: $id }) {\r\n    categoryname\r\n    insumos(sort: "nombre_empresa:asc") {\r\n      id\r\n      nombre_empresa\r\n      website\r\n      descripcion\r\n      latitud\r\n      longitud\r\n      telefono\r\n      logo {\r\n        url\r\n      }\r\n    }\r\n  }\r\n}\r\n',name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,t)})),e.definitions&&e.definitions.forEach((function(e){o(e,t)}))}var r={};function d(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;o(e,t),r[e.name.value]=t}})),e.exports=n,e.exports.insumos=function(e,t){var n={kind:e.kind,definitions:[d(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var o=r[t]||new Set,c=new Set,l=new Set;for(o.forEach((function(e){l.add(e)}));l.size>0;){var v=l;l=new Set,v.forEach((function(e){c.has(e)||(c.add(e),(r[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(t){var o=d(e,t);o&&n.definitions.push(o)})),n}(n,"insumos")},608:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"insumos"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"insumos"},arguments:[{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"StringValue",value:"nombre_empresa:asc",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nombre_empresa"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category_insumos"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"categoryname"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"website"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"descripcion"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"latitud"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"longitud"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"telefono"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:246}};n.loc.source={body:'query insumos {\r\n  insumos(sort: "nombre_empresa:asc") {\r\n    id\r\n    nombre_empresa\r\n    category_insumos {\r\n      categoryname\r\n    }\r\n    logo {\r\n      url\r\n    }\r\n    website\r\n    descripcion\r\n    latitud\r\n    longitud\r\n    telefono\r\n  }\r\n}\r\n',name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,t)})),e.definitions&&e.definitions.forEach((function(e){o(e,t)}))}var r={};function d(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;o(e,t),r[e.name.value]=t}})),e.exports=n,e.exports.insumos=function(e,t){var n={kind:e.kind,definitions:[d(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var o=r[t]||new Set,c=new Set,l=new Set;for(o.forEach((function(e){l.add(e)}));l.size>0;){var v=l;l=new Set,v.forEach((function(e){c.has(e)||(c.add(e),(r[e]||new Set).forEach((function(e){l.add(e)})))}))}return c.forEach((function(t){var o=d(e,t);o&&n.definitions.push(o)})),n}(n,"insumos")},612:function(e,t,n){"use strict";n(558)},613:function(e,t,n){var o=n(56)((function(i){return i[1]}));o.push([e.i,".banner[data-v-f84f1cba],.banner img[data-v-f84f1cba]{width:100%}.loading[data-v-f84f1cba]{margin-top:30px}#header[data-v-f84f1cba]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);margin-top:40px;padding:15px 20px}#header h1[data-v-f84f1cba]{font-size:36px;font-weight:700;margin:0}#header h1[data-v-f84f1cba],#header h2[data-v-f84f1cba]{color:#fff;text-align:center}#header h2[data-v-f84f1cba]{font-size:28px;font-weight:lighter}#video[data-v-f84f1cba]{margin:30px 0}#insumos[data-v-f84f1cba]{margin:20px 0}#insumos h2[data-v-f84f1cba]{font-size:26px;font-weight:700;margin-bottom:10px}#insumos h2[data-v-f84f1cba],#insumos h3[data-v-f84f1cba]{color:#5e5e5e;text-align:center}#insumos h3[data-v-f84f1cba]{font-size:20px;font-weight:400;margin-bottom:20px}#insumos button[data-v-f84f1cba]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);border:none;border-radius:10px;color:#fff;height:38px;outline:none;padding:6px 25px;position:relative;top:-2px}#insumos input[data-v-f84f1cba]{border-radius:5px;margin-top:5px;padding:6px 20px;width:100%}#insumos[data-v-f84f1cba] .vs__selected-options{flex-basis:inherit!important;width:2500px}#insumos[data-v-f84f1cba] .vs__clear{display:none;margin-right:-37px}#proveedores_resultado[data-v-f84f1cba]{align-items:center;display:flex;flex-wrap:wrap;justify-content:center;padding:20px 0}.proveedores_container h4[data-v-f84f1cba]{color:#5e5e5e;font-size:23px;margin-top:40px;text-align:center;text-transform:uppercase}.categorias[data-v-f84f1cba] #vs1__listbox{position:relative;top:3px;width:500px}#map[data-v-f84f1cba]{margin:30px}#map[data-v-f84f1cba],.no-result[data-v-f84f1cba]{text-align:center}.no-result[data-v-f84f1cba]{font-weight:700;padding:30px 0}.proveedores-todos[data-v-f84f1cba]{padding:40px 0}.proveedores-todos h3[data-v-f84f1cba]{color:#5e5e5e;font-size:26px;font-weight:700;text-align:center}.proveedores-container[data-v-f84f1cba]{align-items:center;display:flex;flex-wrap:wrap;justify-content:center}.proveedor[data-v-f84f1cba]{margin:20px 30px;width:25%}.proveedor img[data-v-f84f1cba]{display:block;height:auto;width:100%}.proveedor-nombre[data-v-f84f1cba]{display:block;font-weight:700;margin-top:8px}.proveedor-sitio[data-v-f84f1cba],.proveedor-tel[data-v-f84f1cba]{display:block}.proveedor-sitio a[data-v-f84f1cba]{color:#b65e48}.proveedor-tel a[data-v-f84f1cba]{color:#5e5e5e}@media (max-width:767px){#header h1[data-v-f84f1cba]{font-size:22px}#header h2[data-v-f84f1cba]{font-size:20px}#insumos button[data-v-f84f1cba]{margin:20px auto 10px;top:0}.button-buscar[data-v-f84f1cba]{text-align:center}.proveedores-container[data-v-f84f1cba]{flex-direction:column}.proveedor[data-v-f84f1cba]{margin:20px auto;width:80%}.categorias[data-v-f84f1cba] #vs1__listbox{min-width:300px;width:100%}}",""]),o.locals={},e.exports=o},693:function(e,t,n){"use strict";n.r(t);n(156);var o=n(27),footer=(n(69),n(479)),r=n(606),d=n.n(r),c=n(607),l=n.n(c),v=n(608),f=n.n(v),m=n(494),_=n(609),k=n.n(_),h=(n(610),{buildModules:["vue-ssr-carousel/nuxt"],components:{footerPage:footer.default,proveedores:m.default,SsrCarousel:k.a},data:function(){return{page:1,selected:"first",proovedores_resultado:!1,categoria:null,insumos_obj:{logo:{url:""}},insumos_todos:"",noresults:!1,verproveedores:!1,loading:!1,maps_path:"https://www.google.com/maps/search/?api=1&query="}},apollo:{categoryInsumos:{prefetch:!0,query:d.a,variables:function(){}},insumos:{prefetch:!1,query:l.a,variables:function(){return{id:this.categoria.id}},skip:function(){return this.skipQuery}},todosInsumos:{prefetch:!1,query:f.a,skip:function(){return this.skipQuery}}},methods:{mostrarResultados:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$apollo.queries.todosInsumos.skip=!1,t.next=3,e.$apollo.queries.todosInsumos.refetch();case 3:return n=t.sent,t.next=6,n.data.insumos;case 6:e.insumos_todos=t.sent,e.verproveedores=!0,e.proovedores_resultado=!1;case 9:case"end":return t.stop()}}),t)})))()},onChangeSelection:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.buscarResultados();case 1:case"end":return t.stop()}}),t)})))()},buscarResultados:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e.categoria){t.next=14;break}return e.loading=!0,e.verproveedores=!1,console.log("get proveedores"),e.$apollo.queries.insumos.skip=!1,t.next=7,e.$apollo.queries.insumos.refetch();case 7:return n=t.sent,t.next=10,n.data.categoryInsumos[0].insumos;case 10:e.insumos_obj=t.sent,console.log(e.insumos_obj),e.insumos_obj.length>0?(e.proovedores_resultado=!0,e.noresults=!1):(e.proovedores_resultado=!1,e.noresults=!0),e.loading=!1;case 14:case"end":return t.stop()}}),t)})))()},openLinkAllProovedores:function(link,label){this.$ga.event({eventCategory:"insumos",eventAction:"abrir",eventLabel:label}),window.open(link,"_blank")}}}),x=(n(612),n(31)),component=Object(x.a)(h,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"cont"},[t("div",{staticClass:"banner"},[t("ssr-carousel",{attrs:{"show-arrows":"",loop:""}},[t("div",{attrs:{index:1}},[t("img",{attrs:{src:n(605)}})])])],1),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"container"},[t("div",{attrs:{id:"video"}},[t("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/EO2dCOXhe9U?rel=0",allowfullscreen:""}})],1),e._v(" "),t("section",{attrs:{id:"insumos"}},[t("h2",[e._v("¡ENCUENTRA LO QUE NECESITAS!")]),e._v(" "),t("h3",[e._v("Busca por categorías de productos")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-3"}),e._v(" "),t("div",{staticClass:"col-sm-6"},[t("v-select",{staticClass:"categorias",attrs:{placeholder:"Ej: Acero",options:e.categoryInsumos,label:"categoryname"},on:{input:e.onChangeSelection},model:{value:e.categoria,callback:function(t){e.categoria=t},expression:"categoria"}})],1),e._v(" "),t("div",{staticClass:"col-sm-3"})]),e._v(" "),e.loading?t("div",{staticClass:"d-flex justify-content-center loading"},[e._m(1)]):e._e(),e._v(" "),e.proovedores_resultado?t("div",{staticClass:"proveedores_todos"},[t("h4",[e._v(e._s(e.categoria.categoryname))]),e._v(" "),t("div",{attrs:{id:"proveedores_resultado"}},e._l(e.insumos_obj,(function(e,n){return t("proveedores",{key:n,attrs:{image:e.logo[0].url,website:e.website,telefono:e.telefono,nombre_empresa:e.nombre_empresa,descripcion:e.descripcion,latitud:e.latitud,longitud:e.longitud}})})),1)]):e._e(),e._v(" "),e.noresults?t("div",{staticClass:"no-result"},[e._v("\n        NO HAY RESULTADOS\n      ")]):e._e(),e._v(" "),t("div",{attrs:{id:"map"}},[t("button",{on:{click:e.mostrarResultados}},[t("span",[e._v("VER")]),e._v(" PROVEEDORES\n        ")]),e._v(" "),e.verproveedores?t("div",{staticClass:"proveedores-todos"},[t("h3",[e._v("TODOS LOS PROVEEDORES")]),e._v(" "),t("div",{staticClass:"proveedores-container"},e._l(e.insumos_todos,(function(n,o){return t("div",{key:o,staticClass:"proveedor"},[t("img",{attrs:{src:"https://strapi.constructorespositivos.com".concat(n.logo[0].url)}}),e._v(" "),t("span",{staticClass:"proveedor-nombre"},[e._v(e._s(n.nombre_empresa))]),e._v(" "),t("span",{staticClass:"proveedor-sitio"},e._l(n.website.split("_"),(function(o,r){return t("div",{key:r},[t("a",{on:{click:function(t){return e.openLinkAllProovedores(o,n.nombre_empresa)}}},[e._v(e._s(o))])])})),0),e._v(" "),n.telefono.startsWith("09")?t("span",{staticClass:"proveedor-tel"},[e._v("\n                Tel: "+e._s(n.telefono)+"\n              ")]):t("span",{staticClass:"proveedor-tel"},[e._v("Tel: "+e._s(n.telefono))]),e._v(" "),t("span",{staticClass:"proveedor-descripcion"},[e._v(e._s(n.descripcion))]),e._v(" "),t("div",{staticClass:"item"},[t("a",{attrs:{href:e.maps_path+n.latitud+","+n.longitud,target:"_blank"}},[t("font-awesome-icon",{attrs:{icon:["fas","directions"]}})],1)])])})),0)]):e._e()])])]),e._v(" "),t("section",[t("footerPage")],1)])}),[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"header"}},[t("h1",[e._v("TODO LO QUE NECESITAS")]),e._v(" "),t("h2",[e._v("PARA LA CONSTRUCCIÓN")])])},function(){var e=this._self._c;return e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[this._v("Loading...")])])}],!1,null,"f84f1cba",null);t.default=component.exports;installComponents(component,{Proveedores:n(494).default})}}]);