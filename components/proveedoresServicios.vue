<template>
  <div class="col-sm col-md-3 proveedor-item">
    <figure>
      <img :src="image_path" />
    </figure>
    <div class="foot_proyectos">
      <div class="nombre_empresa">{{ nombre_empresa }}</div>
      <div class="ciudad">{{ ciudad }}</div>
      <div class="row">
        <div class="col-sm">
          <div class="datos_proyecto">
            <a
              class="website"
              @click="openLinkBuscadorProveedores(website, nombre_empresa)"
              >{{ website }}</a
            >
          </div>
          <div class="datos_proyecto">
            Tel:
            <a class="phone" :href="`tel:${this.telefono}`">{{ telefono }}</a>
          </div>
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
    website: !String,
    telefono: !String
  },
  data() {
    return {
      image_path: ""
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
