<template>
  <div class="col-sm col-md-6 card_blog">
    <figure>
      <img :src="image_path" />
      <div v-if="descargar" class="descargable">
        <a href=""
          >DESCARGA PDF <font-awesome-icon :icon="['fas', 'download']"
        /></a>
      </div>
    </figure>
    <div class="foot_proyectos">
      <div class="title">{{ title }}</div>
      <div class="row">
        <div class="col-sm">
          <div class="datos_proyecto">{{ description }}</div>
          <div class="link">
            <router-link :to="{ name: 'noticia-id', params: { id: id } }"
              >LEER MÁS</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: !String,
    image: !String,
    title: !String,
    description: !String,
    link: !String
  },
  data() {
    return {
      descargar: false,
      image_path: ""
    };
  },
  computed: {
    articulo_path() {
      return `/noticias/${this.link}`;
    }
  },
  created() {
    if (this.descargable != null) {
      this.descargar = true;
    } else {
      this.descargar = false;
    }
    this.image_path = process.env.baseURL + this.image;
  }
};
</script>
<style scoped>
figure {
  position: relative;
}
figure img {
  width: 100%;
  /* max-width: 450px; */
}
.descargable {
  position: absolute;
  bottom: 0px;
  right: 15px;
  color: white;
  background: #d12f1d;
  padding: 4px 10px;
}
.descargable a {
  color: white;
  text-decoration: none;
}
.title {
  font-size: 20px;
  color: #c65656;
  margin-bottom: 15px;
  margin-top: 15px;
}
.datos_proyecto {
  color: black;
  font-size: 14px;
}
.card_blog {
  margin-bottom: 10px;
}
a {
  color: #c65656;
  font-weight: bold;
  text-decoration: underline;
}
</style>
