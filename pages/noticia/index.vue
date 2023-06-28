<template>
  <section class="cont">
    <div class="banner">
      <img src="../../assets/images/14.png" />
    </div>
    <div id="header">

      <h1>NOTICIAS DESTACADAS/COMUNICADOS OFICIALES</h1>
    </div>
    <div class="sticky-container">
      <h4>Principales voceros</h4>
      <ul class="sticky">
          <barraLat         
              v-for="(articulo, index) in barraPrincipals"
              :key="index"
              :nombre="articulo.Nombre"
              :cargo="articulo.Cargo"
              :foto="articulo.Image.url">
          </barraLat>
      </ul>
      <p class="datos_proyecto"><b>Contacto para prensa: </b><br/>comunicacion@constructorespositivos.com<br/>administracion@constructorespositivos.com</p>
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
      noticiasRegulaciones: [],
      barraPrincipals: []
    };
  },
  methods: {},
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
.banner img {
  width: 100%;
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
  font-size: 10px;
margin-left: 35px;
}
.sticky-container{
    padding:0px;
    margin:0px;
    position:absolute;
    right:0px;
    top:510px;
    width:320px;
    z-index: 1100;
}
.sticky li{
    list-style-type:none;
    color:black;
    background-color: white;
    padding:0px;
    margin:0px 0px 1px 0px;
    -webkit-transition:all 0.25s ease-in-out;
    -moz-transition:all 0.25s ease-in-out;
    -o-transition:all 0.25s ease-in-out;
    transition:all 0.25s ease-in-out;
    cursor:pointer;
}
.sticky li:hover{
    margin-left:-115px;
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
    font-size:11px;
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
}
</style>
