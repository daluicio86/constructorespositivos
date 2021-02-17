<template>
  <div class="col-sm col-md-12">
    <figure>
      <img :src="image_path" />
    </figure>
    <div class="foot_proyectos">
      <div class="title" v-html="title"></div>
      <div class="row">
        <div class="col-sm">
          <div class="datos_proyecto" v-html="$md.render(description)"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: !String,
    title: !String,
    description: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      image_path: ""
    };
  },
  computed: {},
  mounted() {
    this.image_path = process.env.baseURL + this.image;
  },
  watch: {
    image: function(newVal, oldVal) {
      // watch it
      this.image_path = process.env.baseURL + newVal;
    }
  }
};
</script>
<style scoped>
figure img {
  width: 60%;
  /* max-width: 450px; */
}

.title {
  font-size: 24px;
  color: #c65656;
  margin-bottom: 15px;
  margin-top: 15px;
}
.datos_proyecto {
  color: black;
  font-size: 16px;
}
.card_blog {
  margin-bottom: 10px;
}
a {
  color: #c65656;
  font-weight: bold;
  text-decoration: underline;
}
p {
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
@media only screen and (max-width: 641px) {
  figure img {
    width: 90%;
    /* max-width: 450px; */
  }
}
</style>
