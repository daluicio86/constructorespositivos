

<template>
  <section class="cont">
    <div class="banner">
      <img src="../../assets/images/14.png" />
    </div>
    <div id="header">

      <h1>NOTICIAS DESTACADAS/COMUNICADOS OFICIALES</h1>
    </div>
    <!--
<div class="item">
        <a :href="direction_path" target="_blank"><font-awesome-icon :icon="['fas', 'microphone']"/></a>
    </div>   
    -->
    <div class="sticky-container1">
      <a @click="showRegistro()"><img src="../../assets/images/micro.jpg" class="img-btn" title="Principales voceros"/></a>
    </div>
    <div class="sticky-container">
      <b-modal v-model="registroShow" hide-footer>
        <form ref="form" @submit.stop.prevent="handleSubmit">        
            <h2 class="margin-lft">Principales voceros</h2>
            <div class="sticky">
                <barraLat          
                    v-for="(articulo, index) in barraPrincipals"
                    :key="index"
                    :nombre="articulo.Nombre"
                    :cargo="articulo.Cargo"
                    :foto="articulo.Image.url"
                    @showRegistro="showRegistro">
                </barraLat>
              </div>
            <p class="datos_proyecto"><b>Contacto para prensa: </b><br/>comunicacion@constructorespositivos.com<br/>administracion@constructorespositivos.com</p>        
        </form>
      </b-modal>
    </div>
    <div class="container">
        <div id="noticia">
          <div class="row">
            <articulosNoticia
              v-for="(articulo, index) in noticiasRegulaciones"
              :key="index"
              :title="articulo.titulo"
              :foto="articulo.foto.url"
              :description="articulo.resumen"
              :id="articulo.id"
              :lnk="articulo.link"
              :slug="articulo.slug"
            ></articulosNoticia>
          </div>
        </div>
    </div>
    <section>
      <footerPage />
    </section>
  </section>
</template>
<script>
import barraLat from "~/components/barraLateral";
import articulosNoticia from "~/components/articulosNoticias";
import notiQuery from "~/apollo/queries/noticias/noticiasRegulaciones";
import barraQuery from "~/apollo/queries/noticias/barralateral";
import footerPage from "~/components/footer";
export default {
  components: {
    footerPage,
    articulosNoticia,
    barraLat
  },
  data() {
    return {
      registroShow: false,
      direction_path: "",
      noticiasRegulaciones: [],
      barraPrincipals: []
    };
  },
  methods: {
    handleSubmit() {
      console.log("submit");
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
        this.registroShow = true;
      });
    },
    showRegistro(payload) {
      console.log("show registro" + payload);
      this.website = payload;
      this.registroShow = true;
    },    
  },
  apollo: {
    noticiasRegulaciones: {
      prefetch: false,
      query: notiQuery,
      variables() {        
        return { id: parseInt(this.$route.params.id) };
      }
    },
    barraPrincipals: {
      prefetch: false,
      query: barraQuery,
      variables() {        

      }
    }    
  }
};
</script>

<style scoped>
.banner {
  width: 100%;
}
.margin-lft{
 text-align: center;
}
.banner img {
  width: 100%;
  display: block;;
}
.img-btn{
  width: 100px;
}
.item {
  display: inline-block;
  color: white;
  font-size: 25px;
  border-radius: 50%;
  border: 1px solid white;
  padding: 2px 8px;
}
#header {
  background: rgb(247, 99, 46);
  background: radial-gradient(
    circle,
    rgba(247, 99, 46, 1) 0%,
    rgba(181, 34, 34, 1) 100%
  );
  margin-top: 40px;
  padding: 15px 20px;
}
#header h1 {
  text-align: center;
  color: white;
  font-size: 36px;
  font-weight: bold;
  margin: 0;
}
#header h2 {
  text-align: center;
  color: white;
  font-size: 28px;
  font-weight: lighter;
}
#noticia {
  margin: 20px 0;
}
.datos_proyecto {
   color: black;
  font-size: 13px;
  margin-left: 25px;
}
.sticky-container{
  background-color: white;
    padding:0px;
    margin:0px;
    position:absolute;
    right:0px;
    top:460px;
    width:350px;
    z-index: 1100;
}
.sticky-container1{
  background-color: white;
    position:absolute;
    right:40px;
    top:480px;
    display: block;
    z-index: 1000;
}
.sticky li{
    list-style-type:none;
    color:black;
    background-color: white;
    padding:0px;
    margin:0px 0px 1px 0px;
    cursor:pointer;
    text-align: center;
}
.sticky li img{
    float:left;
    margin:5px 4px;
    margin-right:5px;
}
.sticky li p{
    padding-top:5px;
    margin:0px;
    line-height:16px;
    font-size:12px;
}
.sticky li p a{
    text-decoration:none;
    color:#2C3539;
}
.sticky li p a:hover{
    text-decoration:underline;
}
@media (max-width: 767px) {
  .sticky-container{
    display: none;
  }
  .img-btn{
    display: block;
    width: 50px;
  }
  .sticky-container1{
  background-color: white;
    position:absolute;
    top: 75px;
    right: 20px;
    display: block;
    z-index: 1000;
}  
}
</style>
