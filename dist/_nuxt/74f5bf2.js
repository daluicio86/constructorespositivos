(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{349:function(t,e,n){var content=n(353);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("91f1023e",content,!0,{sourceMap:!1})},350:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-4"},[e("img",{attrs:{src:n(351)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"copyright"},[this._v("CONSTRUCTORES POSITIVOS"),e("br"),this._v("2020")])}],r={},c=(n(352),n(18)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("ENCUENTRA LA CASA DE TUS SUEÑOS")]),t._v(" "),n("nuxt-link",{attrs:{to:"/calculadorafinanciera"}},[t._v("CALCULADORA DE CRÉDITO")]),t._v(" "),n("nuxt-link",{attrs:{to:"/insumos"}},[t._v("MATERIALES PARA LA REMODELACIÓN")])],1),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("nuxt-link",{attrs:{to:"/quienes_somos"}},[t._v("QUIENES SOMOS")]),t._v(" "),n("nuxt-link",{attrs:{to:"/blogs"}},[t._v("BLOG Y NOTICIAS")])],1)])]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"social_links"},[n("div",{staticClass:"social_link fb"},[n("a",{attrs:{href:"https://www.facebook.com/constructurespositivosecuador",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),t._v(" "),n("div",{staticClass:"social_link ig"},[n("a",{attrs:{href:"https://www.instagram.com/constructorespositivos/?igshid=q4jnx0yhs6yv",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),t._v(" "),n("div",{staticClass:"social_link twitter"},[n("a",{attrs:{href:"https://twitter.com/Construpositivo",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])])])])]),t._v(" "),t._m(1)])}),o,!1,null,"bdea573c",null);e.default=component.exports;installComponents(component,{Footer:n(350).default})},351:function(t,e,n){t.exports=n.p+"img/footer_registra_proyecto.382e4dc.png"},352:function(t,e,n){"use strict";var o=n(349);n.n(o).a},353:function(t,e,n){(e=n(35)(!1)).push([t.i,"footer[data-v-bdea573c]{width:100%;background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);padding:20px 80px}footer img[data-v-bdea573c]{width:100%;max-width:422px}footer a[data-v-bdea573c]{display:block;color:#fff;font-weight:700}.social_link[data-v-bdea573c]{display:inline-block;margin:0 10px;color:#fff}.copyright[data-v-bdea573c]{margin-top:10px;margin-bottom:10px;text-align:center;font-size:13px}.social_link[data-v-bdea573c]{font-size:24px}@media only screen and (max-width:641px){a[data-v-bdea573c]{font-size:14px;margin:4px 0}}",""]),t.exports=e},355:function(t,e,n){t.exports=n.p+"img/banner_remodelacion.75c9bf0.jpg"},356:function(t,e,n){var content=n(381);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("db370b1a",content,!0,{sourceMap:!1})},357:function(t,e,n){var content=n(384);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("1c9c2296",content,!0,{sourceMap:!1})},380:function(t,e,n){"use strict";var o=n(356);n.n(o).a},381:function(t,e,n){(e=n(35)(!1)).push([t.i,"figure img[data-v-6cf2d151]{width:100%}.title[data-v-6cf2d151]{font-size:20px;color:#c65656;margin-bottom:15px;margin-top:15px}.datos_proyecto[data-v-6cf2d151]{color:#000;font-size:14px}.card_blog[data-v-6cf2d151]{margin-bottom:50px}a[data-v-6cf2d151]{color:#c65656;font-weight:700;text-decoration:underline}.title[data-v-6cf2d151]{text-align:center}.foot_proyectos[data-v-6cf2d151] h2{font-size:23px;color:#c65656;margin:15px 0 0;text-transform:uppercase;font-weight:700}.foot_proyectos[data-v-6cf2d151] h3{color:#000;font-size:25px;text-transform:uppercase}",""]),t.exports=e},382:function(t,e){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"blogs"},arguments:[{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"StringValue",value:"created_at",block:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"titulo"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contenido"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"resumen"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:125}};n.loc.source={body:'query {\n  blogs(sort: "created_at") {\n    id\n    titulo\n    contenido\n    resumen\n    slug\n    image {\n      url\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};n.definitions.forEach((function(t){if(t.name){var e=new Set;!function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var o=e.type;"NamedType"===o.kind&&n.add(o.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}(t,e),o[t.name.value]=e}})),t.exports=n},383:function(t,e,n){"use strict";var o=n(357);n.n(o).a},384:function(t,e,n){(e=n(35)(!1)).push([t.i,".banner[data-v-00b8587e],.banner img[data-v-00b8587e]{width:100%}#header[data-v-00b8587e]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);margin-top:40px;padding:15px 20px}#header h1[data-v-00b8587e]{font-size:36px;font-weight:700;margin:0}#header h1[data-v-00b8587e],#header h2[data-v-00b8587e]{text-align:center;color:#fff}#header h2[data-v-00b8587e]{font-size:28px;font-weight:lighter}#blog[data-v-00b8587e]{margin:20px 0}",""]),t.exports=e},437:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("img",{attrs:{src:n(355)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header"}},[e("h1",[this._v("BLOG")]),this._v(" "),e("h2",[this._v("TODO LO QUE NECESITAS SABER")])])}],r={props:{id:!String,slug:!String,image:!String,title:!String,description:!String},data:function(){return{image_path:""}},computed:{},created:function(){this.image_path="https://strapi.constructorespositivos.com"+this.image}},c=(n(380),n(18)),l=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm col-md-6 card_blog"},[n("figure",[n("img",{attrs:{src:t.image_path}})]),t._v(" "),n("div",{staticClass:"foot_proyectos"},[n("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm"},[n("div",{staticClass:"datos_proyecto"},[t._v(t._s(t.description))]),t._v(" "),n("div",{staticClass:"link"},[n("router-link",{attrs:{to:{name:"blog-id",params:{id:t.id}}}},[t._v("LEER MÁS")])],1)])])])])}),[],!1,null,"6cf2d151",null).exports,d=n(382),f=n.n(d),v={components:{footerPage:n(350).default,articulosBlog:l},data:function(){return{blogs:[]}},methods:{},apollo:{blogs:{prefetch:!1,query:f.a,variables:function(){return{id:parseInt(this.$route.params.id)}}}}},m=(n(383),Object(c.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"cont"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("div",{staticClass:"container"},[e("div",{attrs:{id:"blog"}},[e("div",{staticClass:"row"},this._l(this.blogs,(function(t,n){return e("articulosBlog",{key:n,attrs:{title:t.titulo,image:t.image.url,description:t.resumen,id:t.id,slug:t.slug}})})),1)])]),this._v(" "),e("section",[e("footerPage")],1)])}),o,!1,null,"00b8587e",null));e.default=m.exports}}]);