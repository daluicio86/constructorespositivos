<template>
  <section class="cont">
    <div class="banner">
      <img src="../../assets/images/14.png" />
    </div>
    <div id="header">
      <h1>NOTICIAS DESTACADAS/COMUNICADOS OFICIALES</h1>
    </div>
    <div class="container">
      <section id="noticia">
        <div class="row">
          <articuloNoticia
            :foto="noticiasRegulacione.foto.url"
            :title="noticiasRegulacione.titulo"
            :description="noticiasRegulacione.contenido"
            :lnk="noticiasRegulacione.link"
          ></articuloNoticia>
          <router-link to="/noticia"
            ><span class="back-arrow">
              <font-awesome-icon :icon="['fas', 'chevron-left']"/></span
            >Regresar</router-link
          >
        </div>
      </section>
    </div>
    <section>
      <footerPage />
    </section>
  </section>
</template>

<script>
import articuloNoticia from "~/components/articuloNoticia";
import footerPage from "~/components/footer";
import axios from "axios";
export default {
  components: {
    footerPage,
    articuloNoticia
  },
  data() {
    return {
      noticiasRegulacione: { foto: { url: "" } },
      api_url: process.env.strapiBaseUri,
      id: "1"
    };
  },
  methods: {
    async getArticulo() {
      try {
        var result = await axios({
          method: "POST",
          url: process.env.strapiBaseUri, 
          data: {
            query: `{
              noticiasRegulacione(id: ${this.id}) {
                  id
                  titulo
                  contenido
                  resumen
                  slug
                  link
                  foto {
                    url
                  }
                }
              }`
          }
        });
        try {
          let data = result.data.data.noticiasRegulacione;
          this.noticiasRegulacione = data;
        } catch (err) {
          console.log(err);
        }
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.id = parseInt(this.$route.params.id);
    this.getArticulo();
  }
};
</script>

<style>
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
  padding: 10px 20px;
}
#header h1 {
  text-align: center;
  color: white;
  font-size: 26px;
  font-weight: bold;
}
#header h2 {
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: normal;
}
#noticia {
  margin: 20px 0;
}
.back-arrow {
  margin-right: 5px;
}
</style>
