<template>
  <div class="proveedor">
    <figure>
      <img :src="image_path" />
    </figure>
    <div class="foot_proyectos">
      <div class="nombre_empresa">{{ nombre_empresa }}</div>
      <span class="proveedor-sitio ">
        <div v-for="(item, index) in website.split('_')"  v-bind:key="index">
          <a @click="openLinkBuscadorProveedores(website,nombre_empresa)">{{ item }}</a>
        </div>
      </span>    
          <span v-if="this.telefono.startsWith('09')" class="datos_proyecto">
            <a :href="`https://wa.me//+${this.telefono.replace('0','593')}`"><font-awesome-icon :icon="['fab', 'whatsapp']" />Tel: {{ telefono }}</a>
          </span>
          <span v-else class="proveedor-tel">Tel: {{ telefono }}</span><br/>
          <span class="proveedor-descripcion">{{descripcion}}</span>
          <div class="item">        
            <a :href="maps_path + latitud + ',' + longitud" target="_blank"
              ><font-awesome-icon :icon="['fas', 'directions']"
            /></a>     
          </div>  
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: !String,
      default: ""
    },
    nombre_empresa: !String,
    website: !String,
    telefono: !String,
    descripcion: !String,
    latitud: !String,
    longitud: !String,
  },
  data() {
    return {
      image_path: "",
      maps_path: "https://www.google.com/maps/search/?api=1&query="
    };
  },
  methods: {
    openLinkBuscadorProveedores(link, label) {
      this.$ga.event({
        eventCategory: "insumos",
        eventAction: "abrir",
        eventLabel: label
      });
      window.open(link, "_blank");
    }
  },
  computed: {},
  mounted() {
    console.log(this.telefono);
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
  width: 100%;
  /* max-width: 450px; */
}

.datos_proyecto >>> p {
  padding: 0 !important;
  margin: 0 !important;
}
.proveedor {
  margin: 20px 30px;
  width: 25%;
  text-align: center;
}
.proveedor-item {
  margin: 5px 20px;
}
.website {
  color: #c12e24;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
}
.proveedor-sitio {
  display: block;
}
.proveedor-sitio a {
  color: #b65e48;
}
.proveedor-tel {
  display: block;
}
.proveedor-tel a {
  color: #5e5e5e;
}
</style>
