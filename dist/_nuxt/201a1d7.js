(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{500:function(t,e,o){var content=o(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(57).default)("1b3d50a3",content,!0,{sourceMap:!1})},527:function(t,e,o){"use strict";o(500)},528:function(t,e,o){var c=o(56)((function(i){return i[1]}));c.push([t.i,"figure img[data-v-0ae9cc64]{height:400px;width:500px}.title[data-v-0ae9cc64]{color:#c65656;font-size:20px;margin-bottom:15px;margin-top:15px;text-align:center}.datos_proyecto[data-v-0ae9cc64]{color:#000;font-size:14px;text-align:justify}.noti_card[data-v-0ae9cc64]{margin-bottom:50px}a[data-v-0ae9cc64]{-webkit-text-decoration:underline;text-decoration:underline}.foot_proyectos[data-v-0ae9cc64] h2,a[data-v-0ae9cc64]{color:#c65656;font-weight:700}.foot_proyectos[data-v-0ae9cc64] h2{font-size:23px;margin:15px 0 0;text-transform:uppercase}.foot_proyectos[data-v-0ae9cc64] h3{color:#000;font-size:25px;text-transform:uppercase}.website[data-v-0ae9cc64]{color:#c12e24;cursor:pointer;font-size:14px;-webkit-text-decoration:underline;text-decoration:underline;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (max-width:767px){figure img[data-v-0ae9cc64]{width:100%}}",""]),c.locals={},t.exports=c},590:function(t,e,o){"use strict";o.r(e);o(4),o(77);var c={props:{id:!String,slug:!String,foto:!String,lnk:!String,title:!String,description:!String},data:function(){return{image_path:""}},methods:{openLinkBuscador:function(link){window.open(link,"_blank")}},mounted:function(){console.log("link:"+this.lnk)},computed:{},created:function(){this.image_path="https://strapi.constructorespositivos.com"+this.foto}},n=(o(527),o(31)),component=Object(n.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm col-md-6 noti_card"},[e("figure",[e("img",{attrs:{src:t.image_path}})]),t._v(" "),e("div",{staticClass:"foot_proyectos"},[e("div",{staticClass:"title"},[e("a",{attrs:{href:t.lnk,target:"_blank"}},[t._v(t._s(t.title))])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm"},[e("div",{staticClass:"datos_proyecto"},[t._v(t._s(t.description))]),t._v(" "),e("div",{staticClass:"link"},[e("router-link",{attrs:{to:{name:"noticia-id",params:{id:t.id}}}},[t._v("LEER MÁS")])],1)])])])])}),[],!1,null,"0ae9cc64",null);e.default=component.exports}}]);