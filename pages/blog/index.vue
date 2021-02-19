<template>
  <section class="cont">
    <div class="banner">
      <img src="../../assets/images/banner_remodelacion.jpg" />
    </div>
    <div id="header">
      <h1>BLOG</h1>
      <h2>TODO LO QUE NECESITAS SABER</h2>
    </div>
    <div class="container">
      <div id="blog">
        <div class="row">
          <articulosBlog
            v-for="(articulo, index) in blogs"
            :key="index"
            :title="articulo.titulo"
            :image="articulo.image.url"
            :description="articulo.resumen"
            :id="articulo.id"
            :slug="articulo.slug"
          ></articulosBlog>
        </div>
      </div>
    </div>
    <section>
      <footerPage />
    </section>
  </section>
</template>

<script>
import articulosBlog from "~/components/articulosBlog";
import blogsQuery from "~/apollo/queries/blog/blogs";
import footerPage from "~/components/footer";
export default {
  components: {
    footerPage,
    articulosBlog
  },
  data() {
    return {
      blogs: []
    };
  },
  methods: {},
  apollo: {
    blogs: {
      prefetch: false,
      query: blogsQuery,
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
#blog {
  margin: 20px 0;
}
</style>
