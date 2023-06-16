<template>
  <section class="cont">
    <div class="banner">
      <img src="../../assets/images/banner_remodelacion.jpg" />
    </div>
    <div id="header">
      <h1>NOTICIAS</h1>
      <h1>REGULACIONES Y NOTICIAS</h1>
    </div>
    <div class="container">
      <div id="noticia">
        <div class="row">
          <articuloNoticia
            v-for="(articulo, index) in noticias"
            :key="index"
            :image="articulo.foto.url"
            :title="articulo.titulo"
            :link="articulo.link"
            :description="articulo.contenido"
          ></articuloNoticia>
        </div>
      </div>
    </div>
    <section>
      <footerPage />
    </section>
  </section>
</template>

<script>
import articuloNoticia from "~/components/articuloNoticia";
import notiQuery from "~/apollo/queries/noticias/noticiasRegulaciones";
import footerPage from "~/components/footer";
export default {
  components: {
    footerPage,
    articuloNoticia
  },
  data() {
    return {
      noticias: []
    };
  },
  methods: {},
  apollo: {
    noticias: {
      prefetch: false,
      query: notiQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
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
</style>
