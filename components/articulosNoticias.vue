<template>
  <div class="col-sm col-md-6 noti_card">
    <figure>
      <img :src="image_path" />
    </figure>
    <div class="foot_proyectos">
      <div class="title"><a :href="lnk" target="_blank">{{ title }}</a></div>
      <div class="row">
        <div class="col-sm">
          <div class="datos_proyecto">{{ description }}</div>
          <div class="link">  
            <router-link :to="{ name: 'noticia-id', params: { id: id } }"
              >LEER MÁS</router-link
            >
            <!--<a class="website" @click="openLinkBuscadorProveedores(lnk)">LEER MÁS</a>-->
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
    foto: !String,
    lnk: !String,
    title: !String,
    description: !String
  },
  data() {
    return {
      image_path: ""
    };
  },
  methods: {
    openLinkBuscador(link) {
      window.open(link, "_blank");
    }
  },  
  mounted() {
    console.log("link:"+this.lnk);
  },
  computed: {},
  created() {
    this.image_path = process.env.baseURL + this.foto;
  }
};
</script>
<style scoped>
figure img {
width: 500px;
height: 400px;
  /* max-width: 450px; */
}

.title {
  font-size: 20px;
  color: #c65656;
  margin-bottom: 15px;
  margin-top: 15px;
  text-align: center;
}
.datos_proyecto {
  color: black;
  font-size: 14px;
  text-align: justify;
}
.noti_card {
  margin-bottom: 50px;
}
a {
  color: #c65656;
  font-weight: bold;
  text-decoration: underline;
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
.website {
  color: #c12e24;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  user-select: none;
}

@media (max-width: 767px) {
  figure img {
    width: 100%;
  }
}
</style>
