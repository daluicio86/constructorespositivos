<template>
  <div class="cont">
    <div class="banner">
      <img src="../assets/images/banner_insumos.jpg" />
    </div>
    <div id="header">
      <h1>¿QUIÉNES SOMOS?</h1>
      <h2>EL CLÚSTER DE LA CONSTRUCCIÓN</h2>
    </div>
    <div class="container">
      <!-- Start pasos -->
      <section id="contenido" class="row">
        <div class="col-sm-12">
          <div class="logo_quienes">
            <Logo />
          </div>
          <div id="video">
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/6pk8e99hTqA?rel=0"
              allowfullscreen
            ></b-embed>
          </div>
          <div v-if="!loading" id="texto" v-html="quienesSomos[0].contenido"></div>
        </div>
      </section>
    </div>
    <!-- <div id="slogan">
      “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
      nonummy nibh”
    </div> -->
    <div>
      <footerPage />
    </div>
  </div>
</template>

<script>
import footerPage from "~/components/footer";
import quienesSomos from "~/apollo/queries/quieneSomo";

export default {
  components: {
    footerPage
  },
  data() {
    return {
      loading:true,
      quienesSomos: []
    };
  },
  computed: {
    // banner() {
    //   //return process.env.baseURL + this.quieneSomo.banner.url;
    // }
  },

  apollo: {
    quienesSomos: {
      prefetch: false,
      query: quienesSomos,
       result({ data, loading, networkStatus }) {
        const dataIsReady = data && networkStatus === 7;
        if (dataIsReady) {
          this.loading = false;         
        // this.gallery = data.galleries.items;
        }
      },
      variables() {}
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
.logo_quienes {
  text-align: center;
  margin: 20px 0;
}
#video {
  margin-bottom: 40px;
}
#slogan {
  background: rgb(247, 99, 46);
  background: radial-gradient(
    circle,
    rgba(247, 99, 46, 1) 0%,
    rgba(181, 34, 34, 1) 100%
  );
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 10px 20px;
  text-align: center;
  color: white;
  font-size: 24px;
}
ul {
  margin-top: 30px;
}
li {
  margin: 10px 0;
}
#texto {
  padding: 20px 0 50px 0;
}
</style>
