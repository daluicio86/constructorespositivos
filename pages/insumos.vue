<template>
  <section class="cont">
    <div class="banner">
    <ssr-carousel  show-arrows loop>
      <div :index='1'><a @click="
                      openLinkAllProovedores(
                        'https://kywitiendaenlinea.com/product-category/odm',
                        'Kywi'
                      )"
                      ><img src="../assets/images/FotoKywi.jpg" /></a></div>
      <!--<div :index='2'><img src="../assets/images/banner_visyvip.jpg" /></div>
      <div :index='3'><img src="../assets/images/banner_remodelacion.jpg" /></div>-->
    </ssr-carousel>
    <!--<button @click='page--'>Atrás</button>
    <button @click='page++'>Siguiente</button>    -->
    </div>
    <div id="header">
      <h1>TODO LO QUE NECESITAS</h1>
      <h2>PARA LA CONSTRUCCIÓN</h2>
    </div>
    <div class="container">
      <div id="video">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/EO2dCOXhe9U?rel=0"
          allowfullscreen
        ></b-embed>
      </div>
      <section id="insumos">
        <h2>¡ENCUENTRA LO QUE NECESITAS!</h2>
        <h3>Busca por categorías de productos</h3>
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <v-select
              @input="onChangeSelection"
              class="categorias"
              v-model="categoria"
              placeholder="Ej: Acero"
              :options="categoryInsumos"
              label="categoryname"
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
        <div v-if="proovedores_resultado" class="proveedores_todos">
          <h4>{{ categoria.categoryname }}</h4>
          <div id="proveedores_resultado">
            <proveedores
              v-for="(proveedor, index) in insumos_obj"
              :key="index"
              :image="proveedor.logo[0].url"
              :website="proveedor.website"
              :telefono="proveedor.telefono"
              :nombre_empresa="proveedor.nombre_empresa"
              :descripcion="proveedor.descripcion"
              :latitud="proveedor.latitud"
              :longitud="proveedor.longitud"
            ></proveedores>
          </div>
        </div>
        <div class="no-result" v-if="noresults">
          NO HAY RESULTADOS
        </div>
        <div id="map">
          <button @click="mostrarResultados">
            <span>VER</span> PROVEEDORES
          </button>
          <div v-if="verproveedores" class="proveedores-todos">
            <h3>TODOS LOS PROVEEDORES</h3>
            <div class="proveedores-container">
              <div class="proveedor"
                v-for="(proveedor, index) in insumos_todos"
                :key="index"
              >
                <img
                  :src="
                    `https://strapi.constructorespositivos.com${proveedor.logo[0].url}`
                  "
                />
                <span class="proveedor-nombre">{{
                  proveedor.nombre_empresa
                }}</span>
                <span class="proveedor-sitio"
                  >
                  <div v-for="(item, index) in proveedor.website.split('_')"  v-bind:key="index">
                    <a
                    @click="
                      openLinkAllProovedores(
                        item,
                        proveedor.nombre_empresa
                      )
                    ">{{ item }}</a>
                  </div>
                  </span>
                <span v-if="proveedor.telefono.startsWith('09')" class="proveedor-tel">
                  <a :href="`https://wa.me//+${proveedor.telefono.replace('0','593')}`"><font-awesome-icon :icon="['fab', 'whatsapp']" />Tel: {{  proveedor.telefono }}</a>                  
                </span>
                <span v-else class="proveedor-tel">Tel: {{ proveedor.telefono }}</span>
                <span class="proveedor-descripcion">{{ proveedor.descripcion}}</span>

                <div class="item">        
                  <a :href="maps_path + proveedor.latitud + ',' + proveedor.longitud" target="_blank"
                    ><font-awesome-icon :icon="['fas', 'directions']"
                  /></a>     
                </div>                   
              </div>
            </div>
          </div>
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
import categoryInsumos from "~/apollo/queries/insumos/categoryInsumos";
import insumos from "~/apollo/queries/insumos/insumos";
import todosInsumos from "~/apollo/queries/insumos/Todosinsumos";
import proveedores from "~/components/proveedores";

import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'



export default {
  buildModules: [ 'vue-ssr-carousel/nuxt' ],
  components: {
    footerPage,
    proveedores,
    SsrCarousel
  },
  data() {
    return {
      page: 1,
      selected: "first",
      proovedores_resultado: false,
      categoria: null,
      insumos_obj: { logo: { url: "" } },
      insumos_todos: "",
      noresults: false,
      verproveedores: false,
      loading: false,
      maps_path: "https://www.google.com/maps/search/?api=1&query="
    };
  },
  apollo: {
    categoryInsumos: {
      prefetch: true,
      query: categoryInsumos,
      variables() {
        // return { id: this.categoria.id };
        //no variables
      }
    },
    insumos: {
      prefetch: false,
      query: insumos,
      variables() {
        return { id: this.categoria.id };
      },
      skip() {
        return this.skipQuery;
      }
    },
    todosInsumos: {
      prefetch: false,
      query: todosInsumos,
      skip() {
        return this.skipQuery;
      }
    }
  },
  methods: {
    async mostrarResultados() {
       console.log("mostrar resultados");
       //console.log(this.$apollo.queries);
      this.$apollo.queries.todosInsumos.skip = false;
      const result = await this.$apollo.queries.todosInsumos.refetch();
      this.insumos_todos = await result.data.insumos;
      console.log(this.insumos_todos);
      
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
         console.log("get proveedores");
        this.$apollo.queries.insumos.skip = false;
        const result = await this.$apollo.queries.insumos.refetch();
        this.insumos_obj = await result.data.categoryInsumos[0].insumos;
        console.log( this.insumos_obj );

        if (this.insumos_obj.length > 0) {
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
        eventCategory: "insumos",
        eventAction: "abrir",
        eventLabel: label
      });
      window.open(link, "_blank");
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
  width: 25%;
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
