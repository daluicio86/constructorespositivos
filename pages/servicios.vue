<template>
  <section>
    <div class="banner">
      <img src="../assets/images/banner_servicios.jpg" />
    </div>
    <div id="header">
      <h1>PROVEEDORES DE SERVICIOS</h1>
      <h2>PARA LA CONSTRUCCIÓN</h2>
    </div>
    <div class="container">
      <!-- <div id="video">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/EO2dCOXhe9U?rel=0"
          allowfullscreen
        ></b-embed>
      </div> -->
      <section id="insumos">
        <h2>¡ENCUENTRA TU ESPECIALISTA!</h2>
        <h3>Busca por categorías de servicios</h3>
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <v-select
              @input="onChangeSelection"
              class="categorias"
              v-model="categoria"
              placeholder="Ej: Acero"
              :options="categoryServicios"
              label="categoria"
            ></v-select>
          </div>
          <!-- <div class="col-sm-4 button-buscar">
            <button @click="getProveedores">BUSCAR PROVEEDORES</button>
          </div> -->
          <div class="col-sm-3"></div>
        </div>
        <div v-if="loading" class="d-flex justify-content-center loading">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-if="proovedores_resultado" class="proveedores-todos">
          <h3 class="no-result">{{ categoria.categoria.toUpperCase() }}</h3>
          <div id="proveedores-container">
            <proveedoresServicios
              v-for="(proveedor, index) in servicios_obj"
              :key="index"
              :image="proveedor.imagen_servicio.url"
              :categoria="proveedor.category_servicio.categoria"
              :website="proveedor.web"
              :telefono="proveedor.telefono"
              :nombre_empresa="proveedor.nombre"
              :ciudad="proveedor.ciudad"
              :direccion="proveedor.direccion"
              :descripcion="proveedor.resumen_descripcion"
            ></proveedoresServicios>
          </div>
        </div>
        <div class="no-result" v-if="noresults">
          NO HAY RESULTADOS
        </div>
        <div id="map">
          <button @click="mostrarResultados">
            <span>VER</span> ESPECIALISTAS
          </button>
          <div v-if="verproveedores" class="proveedores-todos">
            <h3>TODOS LOS ESPECIALISTAS</h3>
            <div class="proveedores-container">
              <div
                class="proveedor"
                v-for="(proveedor, index) in servicios_todos"
                :key="index"
              >
                <img
                  :src="
                    `https://strapi.constructorespositivos.com${proveedor.imagen_servicio.url}`
                  "
                />
                <span class="proveedor-nombre">{{ proveedor.nombre }}</span>
                <span v-if="verproveedores" class="proveedor-categoria">{{
                  proveedor.category_servicio.categoria
                }}</span>
                <span class="proveedor-ciudad">{{ proveedor.ciudad }}</span>

                <span class="proveedor-direccion"><b>Dirección: </b>{{ proveedor.direccion }}</span>

                <span class="proveedor-sitio"
                  ><b>Web: </b><a
                    @click="
                      openLinkAllProovedores(proveedor.web, proveedor.nombre)
                    "
                    >{{ proveedor.web }}</a
                  ></span
                >

                <span v-if="proveedor.web_catalogo" class="proveedor-sitio"
                  ><b>Cátalogo: </b><a
                    @click="
                      openLinkAllProovedores(proveedor.web_catalogo, proveedor.nombre)
                    ">{{ proveedor.web_catalogo }}</a
                  ></span
                >
                <span v-if="proveedor.telefono.startsWith('09')" class="proveedor-tel"                
                  ><a :href="`https://wa.me//+${proveedor.telefono.replace('0','593')}`"                  
                    ><font-awesome-icon :icon="['fab', 'whatsapp']" />
                    <b>Tel: </b>{{ proveedor.telefono }}</a
                  >
                </span>
                <span v-else class="proveedor-tel"                
                  ><a :href="`https://wa.me//+${proveedor.telefono.replace('0','593')}`"                  
                    ><b>Tel: </b>{{ proveedor.telefono }}</a
                  >
                </span>
                <span class="proveedor-descripcion">{{ proveedor.resumen_descripcion }}</span>                
              </div>
            </div>
          </div>
        </div>
        <button @click="openLoginServicios" class="registra_servicios">
          REGISTRA Y PUBLICA TUS SERVICIOS
        </button>
        <div class="advertencia">
          * Constructores Positivos no se responsabiliza por los servicios
          brindados por los especialistas publicados en esta página.
        </div>
      </section>
    </div>
    <section>
      <footerPage />
    </section>
  </section>
</template>

<script>
import footerPage from "~/components/footer";
import categoryServicios from "~/apollo/queries/servicios/categoryServicios";
import servicios from "~/apollo/queries/servicios/servicios";
import todosServicios from "~/apollo/queries/servicios/Todosservicios";
import proveedoresServicios from "~/components/proveedoresServicios";

export default {
  components: {
    footerPage,
    proveedoresServicios
  },
  data() {
    return {
      selected: "first",
      proovedores_resultado: false,
      categoria: null,
      servicios_obj: { logo: { url: "" } },
      servicios_todos: "",
      noresults: false,
      verproveedores: false,
      loading: false
    };
  },
  apollo: {
    categoryServicios: {
      prefetch: true,
      query: categoryServicios,
      variables() {
        // return { id: this.categoria.id };
        //no variables
      }
    },
    servicios: {
      prefetch: false,
      query: servicios,
      variables() {
        return { id: this.categoria.id, aprobado: true };
      },
      skip() {
        return this.skipQuery;
      }
    },
    todosServicios: {
      prefetch: false,
      query: todosServicios,
      skip() {
        return this.skipQuery;
      }
    }
  },

  methods: {
    async mostrarResultados() {
      // console.log("mostrar resultados");
      this.$apollo.queries.todosServicios.skip = false;
      const result = await this.$apollo.queries.todosServicios.refetch();

      this.servicios_todos = await result.data.servicios;
      this.verproveedores = true;
      this.proovedores_resultado = false;
    },
    async onChangeSelection() {
      this.buscarResultados();
    },
    async buscarResultados() {
      if (this.categoria != null) {
        this.loading = true;
        this.verproveedores = false;
        // console.log("get proveedores");
        this.$apollo.queries.servicios.skip = false;
        const result = await this.$apollo.queries.servicios.refetch();
        this.servicios_obj = await result.data.categoryServicios[0].servicios;

        if (this.servicios_obj.length > 0) {
          this.proovedores_resultado = true;
          this.noresults = false;
        } else {
          this.proovedores_resultado = false;
          this.noresults = true;
        }
        this.loading = false;
      }
    },
    openLinkAllProovedores(link, label) {
      this.$ga.event({
        eventCategory: "servicios",
        eventAction: "abrir",
        eventLabel: label
      });
      window.open(link, "_blank");
    },
    openLoginServicios() {
      this.$router.push("/authentication/login");
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
.loading {
  margin-top: 30px;
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
#video {
  margin: 30px 0;
}
#insumos {
  margin: 20px 0;
}
#insumos h2 {
  color: #5e5e5e;
  text-align: center;
  font-size: 26px;
  margin-bottom: 10px;
  font-weight: bold;
}
#insumos h3 {
  color: #5e5e5e;
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: normal;
}

#insumos button {
  background: rgb(247, 99, 46);
  background: radial-gradient(
    circle,
    rgba(247, 99, 46, 1) 0%,
    rgba(181, 34, 34, 1) 100%
  );
  color: white;
  border: none;
  outline: none;
  height: 38px;
  border-radius: 10px;
  padding: 6px 25px;
  position: relative;
  top: -2px;
}
#insumos input {
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
  padding: 6px 20px;
}
.advertencia {
  margin-top: 15px;
  font-size: 13px;
  text-align: center;
}
#insumos >>> .vs__selected-options {
  /* position: absolute;
  margin-left: -20px; */
  width: 2500px;
  flex-basis: inherit !important;
}
#insumos >>> .vs__clear {
  margin-right: -37px;
}
#insumos >>> .vs__clear {
  display: none;
}
#proveedores_resultado {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px 0 20px 0;
}
.proveedores_container h4 {
  text-align: center;
  font-size: 23px;
  color: #5e5e5e;
  margin-top: 40px;
  text-transform: uppercase;
}
.categorias >>> #vs1__listbox {
  width: 500px;
  top: 3px;
  position: relative;
}

#map {
  text-align: center;
  margin: 30px;
}
.no-result {
  padding: 30px 0;
  text-align: center;
  font-weight: bold;
}
.proveedores-todos {
  padding: 40px 0;
}
.proveedores-todos h3 {
  font-weight: bold;
  font-size: 26px;
  text-align: center;
  color: #5e5e5e;
}
.proveedores-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.proveedor {
  margin: 20px 30px;
  width: 35%;
}
.proveedor img {
  width: 100%;
  height: auto;
  display: block;
}
.proveedor-nombre {
  margin-top: 8px;
  display: block;
  font-weight: bold;
}
.proveedor-sitio {
  display: block;
  cursor: pointer;
}
.proveedor-tel {
  display: block;
}
.proveedor-sitio a {
  color: #b65e48;
}
.proveedor-tel a {
  color: #5e5e5e;
}
.registra_servicios {
  display: block;
  margin: 0 auto;
  background: #5e5e5e !important;
}
.proveedor-ciudad {
  display: block;
  margin: 0 auto;
  font-weight: bold;
}
@media (max-width: 767px) {
  #header h1 {
    font-size: 22px;
  }
  #header h2 {
    font-size: 20px;
  }
  #insumos button {
    margin: 20px auto 10px auto;
    top: 0px;
  }
  .button-buscar {
    text-align: center;
  }
  .proveedores-container {
    flex-direction: column;
  }
  .proveedor {
    margin: 20px auto;
    width: 80%;
  }
  .categorias >>> #vs1__listbox {
    width: 100%;
    min-width: 300px;
  }
}
</style>
