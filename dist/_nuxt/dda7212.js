(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{513:function(t,e,o){var content=o(536);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(57).default)("39176184",content,!0,{sourceMap:!1})},535:function(t,e,o){"use strict";o(513)},536:function(t,e,o){var n=o(56)((function(i){return i[1]}));n.push([t.i,"figure[data-v-4e9be90f]{margin:0}figure img[data-v-4e9be90f]{width:100%}.foot_proyectos[data-v-4e9be90f]{background:#aa381a;height:290px;padding:5px 20px 15px}.title[data-v-4e9be90f]{color:#fff;font-size:16px;margin-bottom:15px;text-align:center}.datos_proyecto[data-v-4e9be90f]{color:#fff;font-size:14px}.card_proyecto[data-v-4e9be90f]{margin-bottom:20px}.item[data-v-4e9be90f]{border:1px solid #fff;border-radius:50%;color:#fff;display:inline-block;font-size:25px;padding:2px 8px}.info[data-v-4e9be90f]{padding:2px 15px}h3[data-v-4e9be90f]{font-size:14px;font-style:italic;margin-top:5px}.strong[data-v-4e9be90f]{font-weight:700}.item a[data-v-4e9be90f]{color:#fff;cursor:pointer}.item a[data-v-4e9be90f]:hover{color:#a9a9a9}.amenities[data-v-4e9be90f]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width:641px){.foot_proyectos[data-v-4e9be90f]{height:auto}}",""]),n.locals={},t.exports=n},577:function(t,e,o){"use strict";o.r(e);o(14),o(23),o(1),o(39),o(4),o(77),o(156);var n={props:{title:!String,images:{type:Array,default:function(){return[{uploadFile:{url:"https://via.placeholder.com/150"}}]}},precio_min:{type:!String,default:""},description:!String,amenities:!String,website:!String,lat:!Number,lon:!Number},data:function(){return{path:"https://strapi.constructorespositivos.com",full_path:"",direction_path:"",maps_path:"https://www.google.com/maps/search/?api=1&query="}},computed:{showAmenities:function(){return""!=this.amenities}},mounted:function(){this.images.length>0?this.full_path=this.path+this.images[0].uploadFile.url:this.full_path="https://via.placeholder.com/275x183",this.direction_path=this.maps_path+this.lat+","+this.lon},methods:{openLinkProyecto:function(link,label){console.log("openLink proyecto:"+link+","+label),this.$ga.event({eventCategory:"proyectos",eventAction:"abrir",eventLabel:label}),this.moreInfo()},moreInfo:function(){this.$emit("showRegistro",this.website)}}},r=(o(535),o(31)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm col-md-6 card_proyecto"},[e("div",{staticClass:"shadow-sm card-interna"},[e("figure",[e("img",{attrs:{src:t.full_path}})]),t._v(" "),e("div",{staticClass:"foot_proyectos"},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"datos_proyecto strong"},[t._v("\n            PRECIOS DESDE LOS: $"+t._s(t.precio_min.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))+"\n          ")]),t._v(" "),e("div",{staticClass:"datos_proyecto"},[t._v(t._s(t.description))]),t._v(" "),e("div",{staticClass:"datos_proyecto"},[t.showAmenities?e("h3",[t._v("Incluye:")]):t._e(),t._v(" "),e("p",{staticClass:"amenities",domProps:{innerHTML:t._s(t.amenities)}})])]),t._v(" "),e("div",{staticClass:"col-sm-4 items"},[e("div",{staticClass:"item"},[e("a",{attrs:{href:t.direction_path,target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fas","directions"]}})],1)]),t._v(" "),e("div",{staticClass:"item info"},[e("a",{staticClass:"information",on:{click:function(e){return t.openLinkProyecto(t.title,t.website)}}},[e("font-awesome-icon",{attrs:{icon:["fas","info"]}})],1)])])])])])])}),[],!1,null,"4e9be90f",null);e.default=component.exports}}]);