<template>
  <div class="proveedor">
    <figure>
      <img :src="image_path" />
    </figure>
    <div class="foot_proyectos">
      <div class="nombre_empresa">{{ nombre_empresa }}</div>
      <span class="proveedor-categoria">{{ categoria }}</span>
      <div class="ciudad">{{ ciudad }}</div>
      <span class="proveedor-direccion"><b>Dirección: </b>{{ direccion }}</span>
      <div class="row">
        <div class="col-sm">
          <div class="datos_proyecto">
            <b>Web: </b><a
              class="website"
              @click="openLinkBuscadorProveedores(website, nombre_empresa)"
              >{{ website }}</a
            >
          </div>
          <span v-if="this.telefono.startsWith('09')" class="proveedor-tel"                
                  ><a :href="`https://wa.me//+${this.telefono.replace('0','593')}`"                  
                    ><font-awesome-icon :icon="['fab', 'whatsapp']" />
                    <b>Tel: </b>{{ telefono }}</a
                  >
                </span>
                <span v-else class="proveedor-tel"                
                  ><a :href="`https://wa.me//+${this.telefono.replace('0','593')}`"                  
                    ><b>Tel: </b>{{ telefono }}</a
                  >
                </span>
                <span class="proveedor-descripcion">{{ descripcion }}</span>              
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Proveedorservicio",
  props: {
    image: {
      type: !String,
      default: ""
    },
    nombre_empresa: !String,
    ciudad: !String,
    direccion: !String,
    website: !String,
    telefono: !String,
    categoria: !String,
    descripcion: !String
  },
  data() {
    return {
      image_path: ""
    };
  },
  methods: {
    openLinkBuscadorProveedores(link, label) {
      this.$ga.event({
        eventCategory: "servicios",
        eventAction: "abrir",
        eventLabel: label
      });
      window.open(link, "_blank");
    }
  },
  computed: {},
  mounted() {
    console.log(this.descripcion);
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
.nombre_empresa {
  margin-top: 8px;
  display: block;
  font-weight: bold;
}
.foot_proyectos {
  text-align: center;
}
.datos_proyecto >>> p {
  padding: 0 !important;
  margin: 0 !important;
}
.proveedor-item {
  margin: 5px 20px;
}
.proveedor-tel {
  display: block;
}
.website {
  color: #c12e24;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  user-select: none;
}
.ciudad {
  font-weight: bold;
}
</style>
