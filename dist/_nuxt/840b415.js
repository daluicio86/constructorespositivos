/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38,20,23],{478:function(t,e,o){var content=o(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(57).default)("9702ba9c",content,!0,{sourceMap:!1})},479:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this._self._c;return t("div",{staticClass:"col-sm-4"},[t("img",{attrs:{src:o(480)}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copyright"},[t._v("CONSTRUCTORES POSITIVOS"),e("br"),t._v("2020")])}],r={},l=(o(481),o(31)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("footer",[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("LA CASA DE TUS SUEÑOS")]),t._v(" "),e("nuxt-link",{attrs:{to:"/visyvip"}},[t._v("PROYECTOS VIS Y VIP")]),t._v(" "),e("nuxt-link",{attrs:{to:"/insumos"}},[t._v("PROVEEDOR MATERIALES")]),t._v(" "),e("nuxt-link",{attrs:{to:"/servicios"}},[t._v("ESPECIALISTAS")])],1),t._v(" "),e("div",{staticClass:"col-sm-6"},[e("nuxt-link",{attrs:{to:"/calculadora"}},[t._v("CALCULADORA")]),t._v(" "),e("nuxt-link",{attrs:{to:"/quienes_somos"}},[t._v("QUIENES SOMOS")]),t._v(" "),e("nuxt-link",{attrs:{to:"/blog"}},[t._v("BLOG")])],1)])]),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"social_links"},[e("div",{staticClass:"social_link fb"},[e("a",{attrs:{href:"https://www.facebook.com/constructurespositivosecuador",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),t._v(" "),e("div",{staticClass:"social_link ig"},[e("a",{attrs:{href:"https://www.instagram.com/constructorespositivos/?igshid=q4jnx0yhs6yv",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)]),t._v(" "),e("div",{staticClass:"social_link twitter"},[e("a",{attrs:{href:"https://twitter.com/Construpositivo",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])])])])]),t._v(" "),t._m(1)])}),n,!1,null,"5f73b57e",null);e.default=component.exports;installComponents(component,{Footer:o(479).default})},480:function(t,e,o){t.exports=o.p+"img/footer_registra_proyecto.a10f373.png"},481:function(t,e,o){"use strict";o(478)},482:function(t,e,o){var n=o(56)((function(i){return i[1]}));n.push([t.i,"footer[data-v-5f73b57e]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);padding:20px 80px;width:100%}footer img[data-v-5f73b57e]{max-width:422px;width:100%}footer a[data-v-5f73b57e]{color:#fff;display:block;font-weight:700}.social_link[data-v-5f73b57e]{color:#fff;display:inline-block;margin:0 10px}.copyright[data-v-5f73b57e]{font-size:13px;margin-bottom:10px;margin-top:10px;text-align:center}.social_link[data-v-5f73b57e]{font-size:24px}@media only screen and (max-width:641px){a[data-v-5f73b57e]{font-size:14px;margin:4px 0}}",""]),n.locals={},t.exports=n},483:function(t,e,o){"use strict";var n={created:function(){"undefined"!=typeof document&&l(this,(function(t,e){var o,n,l,c;o=document,n=t,l=e,c=r?{passive:!1}:void 0,o.addEventListener(n,l,c)}))},beforeDestroy:function(){"undefined"!=typeof document&&l(this,(function(t,e){var o,n,l,c;o=document,n=t,l=e,c=r?{passive:!1}:void 0,o.removeEventListener(n,l,c)}))}},r="undefined"!=typeof window&&function(){var t=!1;try{var desc={get:function(){t=!0}},e=Object.defineProperty({},"passive",desc);window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){t=!1}return t}();function l(t,e){var o=t.$options.events;Object.keys(o).forEach((function(n){e(n,(function(e){return o[n].call(t,e)}))}))}function c(t,base){var e=base.getBoundingClientRect();return{left:t.clientX-e.left,top:t.clientY-e.top}}var d={mixins:[n],props:{disabled:Boolean},data:function(){return{isDrag:!1}},events:{mousedown:function(t){return this.dragStart(t,this.offsetByMouse)},mousemove:function(t){return this.dragMove(t,this.offsetByMouse)},mouseup:function(t){return this.dragEnd(t,this.offsetByMouse)},touchstart:function(t){return this.dragStart(t,this.offsetByTouch)},touchmove:function(t){return this.dragMove(t,this.offsetByTouch)},touchend:function(t){return this.dragEnd(t,this.offsetByTouch)},touchcancel:function(t){return this.dragEnd(t,this.offsetByTouch)}},methods:{isInTarget:function(t){return!!t&&(t===this.$el||this.isInTarget(t.parentElement))},offsetByMouse:function(t){return c(t,this.$el)},offsetByTouch:function(t){return c(0===t.touches.length?t.changedTouches[0]:t.touches[0],this.$el)},dragStart:function(t,e){this.disabled||void 0!==t.button&&0!==t.button||!this.isInTarget(t.target)||(t.preventDefault(),this.isDrag=!0,this.$emit("dragstart",t,e(t),this.$el))},dragMove:function(t,e){this.isDrag&&(t.preventDefault(),this.$emit("drag",t,e(t),this.$el))},dragEnd:function(t,e){this.isDrag&&(t.preventDefault(),this.isDrag=!1,this.$emit("dragend",t,e(t),this.$el))}},render:function(){return this.$slots.default&&this.$slots.default[0]}},f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"range-slider",class:{disabled:t.disabled}},[o("drag-helper",{attrs:{disabled:t.disabled},on:{dragstart:t.dragStart,drag:t.drag,dragend:t.dragEnd}},[o("span",{ref:"inner",staticClass:"range-slider-inner"},[o("input",{staticClass:"range-slider-hidden",attrs:{type:"text",name:t.name,disabled:t.disabled},domProps:{value:t.actualValue}}),t._v(" "),o("span",{staticClass:"range-slider-rail"}),t._v(" "),o("span",{staticClass:"range-slider-fill",style:{width:t.valuePercent+"%"}}),t._v(" "),o("span",{ref:"knob",staticClass:"range-slider-knob",style:{left:t.valuePercent+"%"}},[t._t("knob")],2)])])],1)},staticRenderFns:[],props:{name:String,value:[String,Number],disabled:{type:Boolean,default:!1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},step:{type:[String,Number],default:1}},data:function(){return{actualValue:null,dragStartValue:null}},created:function(){var t=this._min,e=this._max,o=Number(this.value);(null==this.value||isNaN(o))&&(o=t>e?t:(t+e)/2),this.actualValue=this.round(o)},computed:{_min:function(){return Number(this.min)},_max:function(){return Number(this.max)},_step:function(){return Number(this.step)},valuePercent:function(){return(this.actualValue-this._min)/(this._max-this._min)*100}},watch:{value:function(t){var e=Number(t);null==t||isNaN(e)||(this.actualValue=this.round(e))},min:function(){this.actualValue=this.round(this.actualValue)},max:function(){this.actualValue=this.round(this.actualValue)}},methods:{dragStart:function(t,e){this.dragStartValue=this.actualValue,t.target!==this.$refs.knob&&this.drag(t,e)},drag:function(t,e){var o=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,o)),this.emitInput(this.actualValue)},dragEnd:function(t,e){var o=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,o)),this.dragStartValue!==this.actualValue&&this.emitChange(this.actualValue)},emitInput:function(t){this.$emit("input",t)},emitChange:function(t){this.$emit("change",t)},valueFromBounds:function(t,e){return t/e*(this._max-this._min)+this._min},round:function(t){return function(t,e,o,n){if(t<=e)return e;var r=Math.floor((o-e)/n)*n+e;if(t>=r)return r;var l=(t-e)/n,c=Math.floor(l),d=l-c;return 0===d?t:d<.5?n*c+e:n*(c+1)+e}(t,this._min,this._max,this._step)}},components:{DragHelper:d}};t.exports=f},484:function(t,e,o){var content=o(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(57).default)("389b95e5",content,!0,{sourceMap:!1})},485:function(t,e,o){var n=o(56)((function(i){return i[1]}));n.push([t.i,".range-slider{display:inline-block;height:20px;padding:0 10px;width:130px}.range-slider.disabled{opacity:.5}.range-slider-inner{display:inline-block;height:100%;position:relative;width:100%}.range-slider-fill,.range-slider-rail{border-radius:2px;display:block;height:4px;left:0;position:absolute;top:50%;transform:translateY(-50%)}.range-slider-rail{background-color:#e2e2e2;width:100%}.range-slider-fill{background-color:#21fb92}.range-slider-knob{background-color:#fff;border:1px solid #f5f5f5;border-radius:50%;box-shadow:1px 1px rgba(0,0,0,.2);box-sizing:border-box;cursor:pointer;display:block;height:20px;left:0;position:absolute;top:50%;transform:translate(-50%,-50%);width:20px}.range-slider-hidden{display:none}",""]),n.locals={},t.exports=n},490:function(t,e,o){t.exports=o.p+"img/banner1.209f33c.jpg"},513:function(t,e,o){var content=o(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(57).default)("989aaa1c",content,!0,{sourceMap:!1})},540:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},541:function(t,e,o){t.exports=o.p+"img/arrow.57dff7c.png"},550:function(t,e,o){"use strict";o(513)},551:function(t,e,o){var n=o(56)((function(i){return i[1]}));n.push([t.i,"figure[data-v-582b2782]{margin:0}figure img[data-v-582b2782]{width:100%}.foot_proyectos[data-v-582b2782]{background:#aa381a;height:290px;padding:5px 20px 15px}.title[data-v-582b2782]{color:#fff;font-size:16px;margin-bottom:15px;text-align:center}.datos_proyecto[data-v-582b2782]{color:#fff;font-size:14px}.card_proyecto[data-v-582b2782]{margin-bottom:20px}.item[data-v-582b2782]{border:1px solid #fff;border-radius:50%;color:#fff;display:inline-block;font-size:25px;padding:2px 8px}.info[data-v-582b2782]{padding:2px 15px}h3[data-v-582b2782]{font-size:14px;font-style:italic;margin-top:5px}.strong[data-v-582b2782]{font-weight:700}.item a[data-v-582b2782]{color:#fff;cursor:pointer}.item a[data-v-582b2782]:hover{color:#a9a9a9}.amenities[data-v-582b2782]{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width:641px){.foot_proyectos[data-v-582b2782]{height:auto}}",""]),n.locals={},t.exports=n},584:function(t,e,o){var content=o(684);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(57).default)("26ab7c08",content,!0,{sourceMap:!1})},598:function(t,e,o){"use strict";o.r(e);o(14),o(23),o(1),o(39),o(4),o(77),o(157),o(17);var n=o(516),r=o.n(n),l=(o(517),{buildModules:["vue-ssr-carousel/nuxt"],components:{SsrCarousel:r.a},props:{title:!String,images:{type:Array,default:function(){return[{uploadFile:{url:"https://via.placeholder.com/150"}}]}},precio_min:{type:!String,default:""},description:!String,amenities:!String,website:!String,lat:!Number,lon:!Number},data:function(){return{path:"https://strapi.constructorespositivos.com",full_path:"",slides:[],direction_path:"",maps_path:"https://www.google.com/maps/search/?api=1&query="}},computed:{showAmenities:function(){return""!=this.amenities}},mounted:function(){this.images.length>0?this.full_path=this.path+this.images[0].uploadFile.url:this.full_path="https://via.placeholder.com/275x183",this.direction_path=this.maps_path+this.lat+","+this.lon},methods:{openLinkProyecto:function(link,label){console.log("openLink proyecto:"+link+","+label),this.$ga.event({eventCategory:"proyectos",eventAction:"abrir",eventLabel:label}),this.moreInfo()},moreInfo:function(){this.$emit("showRegistro",this.website)}},beforeMount:function(){var t=this;this.images.map((function(e){t.slides.push(t.path+e.uploadFile.url)}))}}),c=(o(550),o(31)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm col-md-6 card_proyecto"},[e("div",{staticClass:"shadow-sm card-interna"},[e("ssr-carousel",{key:t.slides.length,attrs:{"show-dots":""}},t._l(t.slides,(function(t,o){return e("div",{key:o},[e("img",{attrs:{src:t}})])})),0),t._v(" "),e("div",{staticClass:"foot_proyectos"},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"datos_proyecto strong"},[t._v("\n            PRECIOS DESDE LOS: $"+t._s(t.precio_min.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"))+"\n          ")]),t._v(" "),e("div",{staticClass:"datos_proyecto"},[t._v(t._s(t.description))])]),t._v(" "),e("div",{staticClass:"col-sm-4 items"},[e("div",{staticClass:"item"},[e("a",{attrs:{href:t.direction_path,target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fas","directions"]}})],1)]),t._v(" "),e("div",{staticClass:"item info"},[e("a",{staticClass:"information",on:{click:function(e){return t.openLinkProyecto(t.title,t.website)}}},[e("font-awesome-icon",{attrs:{icon:["fas","info"]}})],1)])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"datos_proyecto"},[t.showAmenities?e("h3",[t._v("Incluye:")]):t._e(),t._v(" "),e("p",{staticClass:"amenities",domProps:{innerHTML:t._s(t.amenities)}})])])])])],1)])}),[],!1,null,"582b2782",null);e.default=component.exports},679:function(t,e,o){t.exports=o.p+"img/paso4.bf81a2a.jpg"},680:function(t,e,o){t.exports=o.p+"img/paso1.d2d02cc.jpg"},681:function(t,e,o){t.exports=o.p+"img/paso2.7d4ddcc.jpg"},682:function(t,e,o){t.exports=o.p+"img/paso3.809182c.jpg"},683:function(t,e,o){"use strict";o(584)},684:function(t,e,o){var n=o(56),r=o(540),l=o(541),c=n((function(i){return i[1]})),d=r(l);c.push([t.i,'.banner[data-v-09496b3a],.banner img[data-v-09496b3a]{width:100%}.title[data-v-09496b3a]{color:#35495e;display:block;font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:100px;font-weight:300;letter-spacing:1px}.subtitle[data-v-09496b3a]{color:#526488;font-size:42px;font-weight:300;padding-bottom:15px;word-spacing:5px}.links[data-v-09496b3a]{padding-top:15px}.card_home[data-v-09496b3a]{margin:0 20px;position:relative}.arrow[data-v-09496b3a]:after{background:url('+d+');background-repeat:no-repeat;background-size:contain;content:"";display:block;height:30px;position:absolute;right:-55px;top:131px;width:30px}.card_home img[data-v-09496b3a]{width:100%}#pasos[data-v-09496b3a]{margin:40px 0 80px}#pasos h1[data-v-09496b3a]{color:#5e5e5e;font-size:30px;font-weight:700;margin-bottom:30px;text-align:center}.foot_card[data-v-09496b3a]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);color:#fff;padding:10px;text-align:center}figure[data-v-09496b3a]{margin:0}.foot_card h3[data-v-09496b3a]{font-size:15px;font-weight:700;margin:0;padding:0}.foot_card h4[data-v-09496b3a]{font-size:14px;font-weight:300;margin:0;padding:0}#ubicar[data-v-09496b3a]{margin:25px 0 40px;text-align:center}#ubicar button[data-v-09496b3a]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);border:none;border-radius:10px;color:#fff;height:38px;margin-top:25px;outline:none;padding:6px 8px}#ubicar input[data-v-09496b3a]{margin-top:5px;width:100%}#ubicar input[data-v-09496b3a]::-moz-placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar input[data-v-09496b3a]::placeholder{font-style:italic;font-weight:300;padding-left:10px}#ubicar h2[data-v-09496b3a]{color:#5e5e5e;font-size:26px;font-weight:700;margin-bottom:30px;text-align:center}.input-data[data-v-09496b3a]{margin-top:-7px}#map[data-v-09496b3a]{margin-top:20px}#map button[data-v-09496b3a]{background:#f26424;border-radius:0;margin-bottom:20px;margin-top:15px}#map button span[data-v-09496b3a]{font-weight:700}#resultados[data-v-09496b3a]{padding:0 0 50px}#video[data-v-09496b3a]{margin-bottom:40px}.buscar-instructions[data-v-09496b3a],.ubicacion-instructions[data-v-09496b3a]{display:block;font-style:italic;font-weight:500;margin-top:20px}.titulo-buscar[data-v-09496b3a]{font-weight:700;text-align:left}@media only screen and (max-width:641px){.card_home[data-v-09496b3a]{margin-bottom:30px}.ubicacion_actual[data-v-09496b3a]{margin-top:20px}.arrow[data-v-09496b3a]:after{display:none}#pasos h1[data-v-09496b3a]{font-size:22px}#ubicar h2[data-v-09496b3a]{font-size:20px}.input-data[data-v-09496b3a]{margin-top:10px}}#calc[data-v-09496b3a]{margin:25px 0 40px;text-align:center}#calc button[data-v-09496b3a]{background:#f7632e;background:radial-gradient(circle,#f7632e 0,#b52222 100%);border:none;border-radius:10px;color:#fff;height:38px;margin-top:25px;outline:none;padding:6px 8px}',""]),c.locals={},t.exports=c},711:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this._self._c;return t("div",{staticClass:"banner"},[t("img",{attrs:{src:o(490)}})])},function(){var t=this._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("h1",[this._v("\n            ENCUENTRA LA CASA DE TUS SUEÑOS:\n          ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-2"}),t._v(" "),e("div",{staticClass:"col-sm-8"},[e("span",{staticClass:"ubicacion-instructions"},[t._v("Para buscar proyectos que no se encuentren en su ubicación\n            actual, mueva el mapa al sector de su preferencia")])]),t._v(" "),e("div",{staticClass:"col-sm-2"})])},function(){var t=this._self._c;return t("div",{staticClass:"spinner-border",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[this._v("Loading...")])])}],r=o(27),footer=(o(17),o(18),o(1),o(3),o(32),o(69),o(479)),l=o(491),c=o.n(l),d=o(483),f=o.n(d),m=(o(484),{components:{footerPage:footer.default,RangeSlider:f.a},data:function(){return{nombre:"",apellido:"",email:"",telefono:"",categoria:"",nameState:null,lastnameState:null,emailState:null,telefonoState:null,distancia:1,mapCenter:{lat:-.1984136,lng:-78.495783},markers:[{position:{lat:-.1984196,lng:-78.495753}}],proyectos:[],proyecto_id_string:"",proyectos_detallados:[],resultados_proyectos:!1,lat:-.18558429549488542,long:-78.48053330227975,loading:!1,registroShow:!1,registrado:!1,website:"",ubicacion:"",autocomplete:null}},methods:{gotoUrl:function(t,label,e,o){this.$ga.event({eventCategory:e,eventAction:o,eventLabel:label}),window.open(t,"_blank")},checkFormValidity:function(){var t=this.$refs.form.checkValidity();return this.nameState=t,t},mostrarResultados:function(){this.loading=!0,this.$ga.event({eventCategory:"proyectos",eventAction:"buscar"}),this.getProyectosCercanos()},getUserLocation:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getUserLocation"),e.prev=1,e.next=4,t.$getLocation({enableHighAccuracy:!0});case 4:o=e.sent,t.mapCenter=o,t.lat=t.mapCenter.lat,t.long=t.mapCenter.lng,console.log(o),t.gotoMyLocation(),t.getGeoCode(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),t.noLocation=!0;case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))()},gotoMyLocation:function(){var map=this.$refs.gMap.map,t=map.markers[0];map.setCenter(new google.maps.LatLng(this.lat,this.long)),t.setPosition(new google.maps.LatLng(this.lat,this.long))},getProyectosCercanos:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.lat+"-"+t.long+"-"+t.distancia),t.proyectos="",e.prev=2,e.next=5,c()({method:"POST",url:"https://api.constructorespositivos.com/api-web",headers:{"Access-Control-Allow-Origin":"no-cors"},data:{query:"{\n                proyectosCercanos(latitude:".concat(t.lat,", longitude: ").concat(t.long,", distance: ").concat(t.distancia,") {\n                        id\n                        nombre\n                        informacion\n                        slug\n                        latitude\n                        longitude\n                        amenities\n                        email_proyecto\n                        website_proyecto\n                        desde\n                        hasta\n                        nombre_contacto\n                        telefono_contacto\n                        Constructora{\n                          nombre_constructora\n                      }\n                        files{\n                              uploadFile {\n                                url\n                              }\n                            }\n                  }\n                    }    ")}});case 5:o=e.sent;try{data=o.data.data.proyectosCercanos,t.proyectos=data,t.clearMarkers(),t.addMarkers(t.proyectos),t.resultados_proyectos=!0,t.loading=!1}catch(t){}e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})))()},getLatLongMap:function(){this.$refs.gMap.map;var t=this.$refs.gMap.map.getCenter();this.lat=t.lat(),this.long=t.lng(),this.$refs.gMap.map.markers[0].setPosition(new google.maps.LatLng(this.lat,this.long))},getGeoCode:function(){var t=this,e=new google.maps.Geocoder,o={lat:this.lat,lng:this.long};e.geocode({location:o},(function(e,o){if(null!=e&&e[0]){console.log(e);var n=e[0].address_components;n.forEach((function(element){"route"==element.types[0]&&(t.ubicacion=element.long_name)})),n=[]}}))},clearMarkers:function(){for(var i=1;i<this.markers.length;i++)this.markers[i].setMap(null);this.markers.length=1},addMarkers:function(t){var e=this,map=this.$refs.gMap.map;t.forEach((function(element){var t=new google.maps.LatLng(element.latitude,element.longitude),marker=new google.maps.Marker({position:t,map:map,title:element.nombre});e.markers.push(marker);var o=new google.maps.InfoWindow;google.maps.event.addListener(marker,"click",(function(){var t;t=element.files.length>0?'<img style="max-width:200px" src="https://strapi.constructorespositivos.com'.concat(element.files[0].uploadFile.url,'"/>'):"",o.setContent('<div style="text-align:left;font-weight:bold">'.concat(element.nombre,'</div><div style="text-align:left"><span style="font-weight:bold">Constructora: </span>').concat(element.Constructora.nombre_constructora,'</div><div style="text-align:left"><span style="font-weight:bold">Precios desde:</span> $').concat(element.desde,"</div>").concat(t,"<div></div>")),o.open(map,this)}))}))},showRegistro:function(t){console.log("show registro"+t),this.website=t,this.registroShow=!0},handleSubmit:function(){var t=this;console.log("submit"),this.checkFormValidity()&&(this.$store.commit("subscribe/SET_EMAIL",this.email),localStorage.setItem("user_email",this.email),this.$nextTick((function(){t.$bvModal.hide("modal-prevent-closing"),t.registroShow=!1,t.registrado=!0,t.sendData()})))},sendData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("sending data"),(o=new FormData).append("nombre",t.nombre),o.append("apellido",t.apellido),o.append("telefono",t.telefono),o.append("email",t.email),"createUser",n={headers:{"Content-Type":"text/plain"}},c.a.post("https://fmwlab.com/constructores/api/usuarios.php?actions=createUser",o,n).then((function(e){return window.open(t.website)}));case 9:case"end":return e.stop()}}),e)})))()},checkData:function(t){},handleOk:function(t){t.preventDefault(),this.handleSubmit()},closeVideo:function(){this.video=!1},autoComplete:function(){var t=this;null==this.autocomplete&&null!=google&&(this.autocomplete=new google.maps.places.Autocomplete(document.getElementById("ubicacionSearch"),{componentRestrictions:{country:"ec"}}),google.maps.event.addListener(this.autocomplete,"place_changed",(function(){var e=t.autocomplete.getPlace();null!=e.address_components&&(t.lat=e.geometry.location.lat(),t.long=e.geometry.location.lng(),t.ubicacion=e.name,t.$refs.gMap.map.setCenter(new google.maps.LatLng(t.lat,t.long)),t.$refs.gMap.map.markers[0].setPosition(new google.maps.LatLng(t.lat,t.long)))})))},onKeyUpEnterCompleteSearch:function(){var t=this,e={input:this.ubicacion},o=new google.maps.places.AutocompleteService,n=new google.maps.Geocoder;o.getPlacePredictions(e,(function(e,o){o==google.maps.places.PlacesServiceStatus.OK&&(console.log(e[0]),n.geocode({placeId:e[0].place_id},(function(e,o){o==google.maps.GeocoderStatus.OK&&(t.lat=e[0].geometry.location.lat(),t.long=e[0].geometry.location.lng())})))}))}},computed:{latlong:function(){return"Lat:".concat(this.lat,", Long:").concat(this.long)}},watch:{ubicacion:function(t,e){""==e&&null==this.autocomplete&&this.autoComplete()}},mounted:function(){null!=localStorage.getItem("user_email")&&(this.registrado=!0)}}),v=(o(683),o(31)),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"cont"},[e("b-modal",{attrs:{title:"Déjanos tus datos"},on:{ok:t.handleOk},model:{value:t.registroShow,callback:function(e){t.registroShow=e},expression:"registroShow"}},[e("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("b-form-group",{attrs:{label:"Nombre","label-for":"name-input","invalid-feedback":"El nombre es requerido",state:t.nameState}},[e("b-form-input",{attrs:{id:"name-input",state:t.nameState,required:""},model:{value:t.nombre,callback:function(e){t.nombre=e},expression:"nombre"}})],1),t._v(" "),e("b-form-group",{attrs:{label:"Apellido","label-for":"last-input","invalid-feedback":"El apellido es requerido",state:t.lastnameState}},[e("b-form-input",{attrs:{id:"last-input",state:t.lastnameState,required:""},model:{value:t.apellido,callback:function(e){t.apellido=e},expression:"apellido"}})],1),t._v(" "),e("b-form-group",{attrs:{label:"Email","label-for":"email-input","invalid-feedback":"El Email es requerido"}},[e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"@",state:t.emailState}},[e("b-form-input",{attrs:{id:"email-input",state:t.emailState,type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),e("b-form-group",{attrs:{label:"Teléfono","label-for":"last-input","invalid-feedback":"El teléfono es requerido",state:t.telefonoState}},[e("b-form-input",{attrs:{id:"last-input",state:t.telefonoState,required:""},model:{value:t.telefono,callback:function(e){t.telefono=e},expression:"telefono"}})],1)],1)]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"container"},[e("section",{attrs:{id:"pasos"}},[t._m(1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 col-sm-12"},[e("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#ubicar",expression:"'#ubicar'"}],attrs:{to:"#"}},[e("div",{staticClass:"card_home arrow"},[e("figure",[e("img",{attrs:{alt:"Encuentra la casa de tus sueños",src:o(679)}})]),t._v(" "),e("div",{staticClass:"foot_card"},[e("h3",[t._v("ENCUENTRA LA CASA")]),t._v(" "),e("h4",[t._v("DE TUS SUEÑOS")]),t._v(" "),e("br")])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 col-sm-12"},[e("nuxt-link",{attrs:{to:"/visyvip"}},[e("div",{staticClass:"card_home arrow"},[e("figure",[e("img",{attrs:{alt:"Viviendad de interés social y público",src:o(680)}})]),t._v(" "),e("div",{staticClass:"foot_card"},[e("h3",[t._v("PROYECTOS VIS Y VIP")]),t._v(" "),e("h4",[t._v("VIVIENDA INTERÉS SOCIAL/PÚBLICO")])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 col-sm-12"},[e("nuxt-link",{attrs:{to:"/calculadoraPichincha"}},[e("div",{staticClass:"card_home arrow"},[e("figure",[e("img",{attrs:{alt:"Calculadoras de créditos",src:o(681)}})]),t._v(" "),e("div",{staticClass:"foot_card"},[e("h3",[t._v("CALCULA TU CRÉDITO")]),t._v(" "),e("h4",[t._v("EN VARIAS INSITUCIONES FINANCIERAS")])])])])],1),t._v(" "),e("div",{staticClass:"col-md-3 col-sm-12"},[e("nuxt-link",{attrs:{to:"/insumos"}},[e("div",{staticClass:"card_home"},[e("figure",[e("img",{attrs:{alt:"Encuentra material y acabados para la construccion",src:o(682)}})]),t._v(" "),e("div",{staticClass:"foot_card"},[e("h3",[t._v("ENCUENTRA MATERIALES")]),t._v(" "),e("h4",[t._v("Y ACABADOS PARA LA CONTRUCCIÓN")])])])])],1)])]),t._v(" "),e("section",[e("div",{attrs:{id:"video"}},[e("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/oKsbve7M584?rel=0",allowfullscreen:""}})],1)]),t._v(" "),e("section",{attrs:{id:"ubicar"}},[e("h2",[t._v("\n        PON TU UBICACIÓN Y ENCUENTRA LA CASA DE TUS SUEÑOS:\n      ")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-1"}),t._v(" "),e("div",{staticClass:"col-sm-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.ubicacion,expression:"ubicacion"}],ref:"ubicacionSearch",attrs:{type:"text",id:"ubicacionSearch",placeholder:"Ingresa una ubicación o arrastra el mapa"},domProps:{value:t.ubicacion},on:{input:function(e){e.target.composing||(t.ubicacion=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-sm-3 input-data"},[e("div",{staticClass:"distancia"},[t._v("Rango distancia: "+t._s(t.distancia)+" Km.")]),t._v(" "),e("range-slider",{staticClass:"slider",attrs:{min:"0",max:"10",step:"1"},model:{value:t.distancia,callback:function(e){t.distancia=e},expression:"distancia"}})],1),t._v(" "),e("div",{staticClass:"col-sm-3"},[e("v-select",{staticClass:"categorias",attrs:{placeholder:"Servicios",options:["Todos","Hospitales","Parques","Escuelas","Restaurantes"],label:"categoria"},model:{value:t.categoria,callback:function(e){t.categoria=e},expression:"categoria"}})],1),t._v(" "),e("div",{staticClass:"col-sm-1"})]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("button",{staticClass:"ubicacion_actual",on:{click:t.getUserLocation}},[t._v("\n            USAR MI UBICACIÓN ACTUAL\n          ")])])]),t._v(" "),t._m(2),t._v(" "),e("div",{attrs:{id:"map"}},[e("GMap",{ref:"gMap",staticStyle:{width:"100%",height:"400px"},attrs:{center:t.mapCenter,zoom:16,"map-type-id":"terrain"},on:{drag:t.getLatLongMap,dragend:t.getGeoCode}},t._l(t.markers,(function(marker,t){return e("GMapMarker",{key:t,attrs:{options:{icon:"imagen/person.png"},position:marker.position,clickable:!0,draggable:!0}})})),1),t._v(" "),e("span",{staticClass:"buscar-instructions"},[t._v("\n          Una vez seleccionado la ubicación podrá buscar los proyectos cerca\n          de su sector\n        ")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm col-md-4"}),t._v(" "),e("div",{staticClass:"col-sm col-md-4"},[e("v-select",{staticClass:"categorias",attrs:{placeholder:"Unidad de Interés",options:["Departamento","Casa","Suite","Terreno/Lote","Local Comercial"],label:"categoria"},model:{value:t.categoria,callback:function(e){t.categoria=e},expression:"categoria"}})],1),t._v(" "),e("div",{staticClass:"col-sm col-md-4"})]),t._v(" "),e("button",{on:{click:t.mostrarResultados}},[e("span",[t._v("BUSCAR")]),t._v(" PROYECTOS\n        ")]),t._v(" "),t.loading?e("div",{staticClass:"d-flex justify-content-center"},[t._m(3)]):t._e()],1)]),t._v(" "),t.resultados_proyectos?e("section",{attrs:{id:"resultados"}},[e("div",{staticClass:"row"},t._l(t.proyectos,(function(o,n){return e("ProyectosResultados",{key:n,attrs:{title:o.nombre,precio_min:o.desde,description:o.informacion,amenities:o.amenities,images:o.files,lat:o.latitude,lon:o.longitude,website:o.website_proyecto},on:{showRegistro:t.showRegistro}})})),1)]):t._e(),t._v(" "),e("section",{attrs:{id:"calc"}},[e("button",{staticClass:"calculadora-btn",on:{click:function(e){return t.gotoUrl("https://constructorespositivos.com/calculadoraPichincha","calculadora","clic","calculadora")}}},[t._v("\n        CALCULADORA: CALCULA TU CRÉDITO HIPOTECARIO\n      ")])])]),t._v(" "),e("section",[e("footerPage")],1)],1)}),n,!1,null,"09496b3a",null);e.default=component.exports;installComponents(component,{ProyectosResultados:o(598).default})}}]);