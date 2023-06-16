<template>
  <div class="col-sm col-md-12">
    <figure>
      <img :src="image_path" />
    </figure>
    <div class="foot_proyectos">
      <div class="title">
        <a :href="`${link}`">{{ title }}</a>
      </div>
      <div class="row">
        <div class="col-sm">
          <div class="datos_proyecto" v-html="$md.render(description)"></div>
        </div>
      </div>
      <!--<div class="col-sm right">
        <a href="descargable_path" target="_blank"
          >DESCARGA PDF <font-awesome-icon :icon="['fas', 'download']"
        /></a>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: !String,
    title: !String,
    link:!String,
    description: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      image_path: "",
      descargable_path: ""
    };
  },
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
.right {
  text-align: right;
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
@media only screen and (max-width: 641px) {
  figure img {
    width: 90%;
    /* max-width: 450px; */
  }
}
</style>
