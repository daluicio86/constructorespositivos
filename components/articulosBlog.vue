<template>
  <div class="col-sm col-md-6 card_blog">
    <figure>
      <img :src="image_path" />
    </figure>
    <div class="foot_proyectos">
      <div class="title" v-html="title"></div>
      <div class="row">
        <div class="col-sm">
          <div class="datos_proyecto">{{ description }}</div>
          <div class="link">
            <router-link :to="{ name: 'blog-id', params: { id: id } }"
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
    slug: !String,
    image: !String,
    title: !String,
    description: !String
  },
  data() {
    return {
      image_path: ""
    };
  },
  computed: {},
  created() {
    this.image_path = process.env.baseURL + this.image;
  }
};
</script>
<style scoped>
figure img {
  width: 100%;
  /* max-width: 450px; */
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
  margin-bottom: 50px;
}
a {
  color: #c65656;
  font-weight: bold;
  text-decoration: underline;
}
.title {
  text-align: center;
}
.foot_proyectos >>> h2 {
  font-size: 23px;
  color: #c65656;
  margin: 15px 0 0px 0;
  text-transform: uppercase;
  font-weight: bold;
}
.foot_proyectos >>> h3 {
  color: black;
  font-size: 25px;
  text-transform: uppercase;
}
</style>
