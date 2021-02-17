<template>
  <section class="cont">
    <div class="banner">
      <img src="../../assets/images/banner_quienes.jpg" />
    </div>
    <div id="header">
      <h1>REGULACIONES Y NOTICIAS</h1>
      <h2>LO QUE NOS INTERESA</h2>
    </div>
    <div class="container">
      <section id="blog">
        <div class="row">
          <articuloNoticia
            :descargable="blog.descargable"
            :image="blog.foto.url"
            :title="blog.titulo"
            :description="blog.contenido"
          ></articuloNoticia>
          <router-link to="/noticias"
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
      blog: { foto: { url: "none" }, descargable: { url: "none" } },
      api_url: process.env.strapiBaseUri,
      id: "1"
    };
  },
  methods: {
    async getArticulo() {
      try {
        var result = await axios({
          method: "POST",
          url: "https://strapiconstructores.fmwlab.com/graphql",
          data: {
            query: `{
                noticiasRegulacione(id: ${this.id}) {
                  id
                  titulo
                  contenido
                  resumen
                  foto {
                    url
                  }
                  descargable{
                    url
                  }
                }
                    }    `
          }
        });
        try {
          let data = result.data.data.noticiasRegulacione;
          console.log(data);
          this.blog = data;
          //revisar si el descargable es null cambiarlo por ""
          if (this.blog.descargable == null) {
            console.log("cambiando descargable");
            this.blog.descargable = "";
            this.blog.descargable.url = "";
          }
          console.log(this.blog);
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
#blog {
  margin: 20px 0;
}
.back-arrow {
  margin-right: 5px;
}
</style>
