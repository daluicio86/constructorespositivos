<template>
  <section class="cont">
    <div class="banner">
      <img src="../../assets/images/banner_servicios.jpg" />
    </div>
    <div id="header">
      <h1>REGISTRO DE SERVICIOS</h1>
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

      <div class="login pasos">
        <form ref="form" @submit.stop.prevent="doRegister">
          <div>
            <table>
              <tr>
                <td>
                  <!-- Tipo Servicio -->
                  <validation-provider
                    v-slot="{ errors, valid }"
                    name="Categoria"
                    rules="required"
                  >
                    <b-form-group label="Categoria">
                      <v-select
                        @input="onChangeSelection"
                        class="categorias"
                        v-model="categoria"
                        placeholder="Ej: Electricista"
                        :options="categoryServicios"
                        label="categoria"
                      ></v-select>

                      <b-form-invalid-feedback :state="valid">
                        <span v-for="(error, index) in errors" :key="index">{{
                          error
                        }}</span>
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>

                  <!-- Nombre -->
                  <validation-provider
                    v-slot="{ errors, valid }"
                    name="Nombre"
                    rules="required"
                  >
                    <b-form-group>
                      <b-form-input
                        class="element"
                        id="nombre-input"
                        placeholder="* Nombre del Proveedor"
                        v-model="nombre"
                        type="text"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback :state="valid">
                        <span v-for="(error, index) in errors" :key="index">{{
                          error
                        }}</span>
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>

                  <!-- Descripcion -->
                  <validation-provider
                    v-slot="{ errors, valid }"
                    name="Descripción"
                    rules="required"
                  >
                    <b-form-group>
                      <!-- b-form-input
                        class="element"
                        id="descripcion-input"
                        placeholder="* Descripción del servicio que presta"
                        v-model="descripcion"
                        type="text"
                        required
                      ></b-form-input -->

                      <b-form-textarea
                        id="descripcion-input"
                        class="element"
                        v-model="descripcion"
                        placeholder="* Descripción del servicio que presta"
                        rows="6"
                        max-rows="6"
                        required
                      ></b-form-textarea>

                      <b-form-invalid-feedback :state="valid">
                        <span v-for="(error, index) in errors" :key="index">{{
                          error
                        }}</span>
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>

                  <!-- Telefono -->
                  <validation-provider
                    v-slot="{ errors, valid }"
                    name="Teléfono"
                    rules="required"
                  >
                    <b-form-group>
                      <b-form-input
                        class="element"
                        id="telefono-input"
                        placeholder="* Teléfono del proveedor"
                        v-model="telefono"
                        type="text"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback :state="valid">
                        <span v-for="(error, index) in errors" :key="index">{{
                          error
                        }}</span>
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>

                  <!-- EMAIL -->
                  <validation-provider
                    v-slot="{ errors, valid }"
                    name="Correo"
                    rules="required|email"
                  >
                    <b-form-group>
                      <b-form-input
                        class="element"
                        id="email-input"
                        placeholder="* Correo electrónico del proveedor"
                        v-model="email"
                        type="email"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback :state="valid">
                        <span v-for="(error, index) in errors" :key="index">{{
                          error
                        }}</span>
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>

                  <!-- WEB -->
                  <validation-provider
                    v-slot="{ errors, valid }"
                    name="Página Web"
                    rules="required"
                  >
                    <b-form-group>
                      <b-form-input
                        class="element"
                        id="web-input"
                        placeholder="* Página web del proveedor"
                        v-model="web"
                        type="text"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback :state="valid">
                        <span v-for="(error, index) in errors" :key="index">{{
                          error
                        }}</span>
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>

                  <!-- Ciudad -->
                  <validation-provider
                    v-slot="{ errors, valid }"
                    name="Ciudad"
                    rules="required"
                  >
                    <b-form-group>
                      <b-form-input
                        class="element"
                        id="ciudad-input"
                        placeholder="* Ciudad del proveedor"
                        v-model="ciudad"
                        type="text"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback :state="valid">
                        <span v-for="(error, index) in errors" :key="index">{{
                          error
                        }}</span>
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>

                  <!-- Dirección -->
                  <validation-provider
                    v-slot="{ errors, valid }"
                    name="Dirección"
                    rules="required"
                  >
                    <b-form-group>
                      <b-form-input
                        class="element"
                        id="direccion-input"
                        placeholder="* Dirección del proveedor"
                        v-model="direccion"
                        type="text"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback :state="valid">
                        <span v-for="(error, index) in errors" :key="index">{{
                          error
                        }}</span>
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>

                  <!-- CAPTCHA -->
                  <b-form-group>
                    <b-form-checkbox
                      id="checkbox-captcha"
                      v-model="captcha"
                      name="captcha-1"
                      value="true"
                      unchecked-value="false"
                      switch
                    >
                      <p>No soy un robot</p>
                    </b-form-checkbox>
                  </b-form-group>

                  <!---------------------------------------------------------- Button SUBMIT -->
                  <div class="smallcontainer">
                    <b-button v-if="!hasPreviousData" @click="doRegister"
                      >CREAR</b-button
                    ><br />
                    <b-button v-if="hasPreviousData" @click="doUpdate"
                      >ACTUALIZAR</b-button
                    ><br />

                    <!-- Alerta Signup Success -->
                    <b-alert
                      :show="dismissCountDownSignup"
                      dismissible
                      variant="light"
                      @dismissed="dismissCountDownSignup = 0"
                      @dismiss-count-down="countDownChangedSignup"
                    >
                      <p>Se ha registrado correctamente...</p>
                      <b-progress
                        variant="success"
                        :max="dismissSecs"
                        :value="dismissCountDownSignup"
                        height="4px"
                      ></b-progress>
                    </b-alert>

                    <!-- Alerta Datos -->
                    <b-alert
                      :show="dismissCountDown"
                      dismissible
                      variant="light"
                      @dismissed="dismissCountDown = 0"
                      @dismiss-count-down="countDownChanged"
                    >
                      <p>
                        Los datos no estan completos o no resolvio el captcha...
                      </p>
                      <b-progress
                        variant="danger"
                        :max="dismissSecs"
                        :value="dismissCountDown"
                        height="4px"
                      ></b-progress>
                    </b-alert>

                    <!-- Alerta Axios -->
                    <b-alert
                      :show="dismissCountDownAxios"
                      dismissible
                      variant="light"
                      @dismissed="dismissCountDownAxios = 0"
                      @dismiss-count-down="countDownAxiosChanged"
                    >
                      <b-progress
                        variant="danger"
                        :max="dismissSecs"
                        :value="dismissCountDownAxios"
                        height="4px"
                      ></b-progress>
                    </b-alert>
                  </div>
                </td>
                <td style="padding:50px">
                  <div>
                    <!-- Observaciones -->
                    <validation-provider
                      v-slot="{ errors, valid }"
                      name="Observacion"
                      rules="required"
                      v-if="hasPreviousData"
                    >
                      <b-form-group label="Observaciones">
                        <b-form-textarea
                          id="textarea"
                          v-model="observacion"
                          placeholder="Enter something..."
                          rows="3"
                          max-rows="6"
                          :disabled="true"
                        ></b-form-textarea>
                        <b-form-invalid-feedback :state="valid">
                          <span v-for="(error, index) in errors" :key="index">{{
                            error
                          }}</span>
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>

                    <!-- APROBADO -->
                    <b-form-group v-if="hasPreviousData">
                      <b-form-checkbox
                        id="checkbox-aprobado"
                        v-model="aprobado"
                        name="captcha-2"
                        value="true"
                        unchecked-value="false"
                        switch
                        size="lg"
                        :disabled="true"
                      >
                        <p>Estado: {{ aprobado ? "ABROBADO" : "NEGADO" }}</p>
                      </b-form-checkbox>
                    </b-form-group>
                  </div>
                  <!-- FILES --->
                  <div class="large-12 medium-12 small-12 cell">
                    <table>
                      <tr>
                        <div id="preview">
                          <img v-if="imageUrl" :src="imageUrl" />
                        </div>
                      </tr>
                      <tr
                        style="display: flex; flex-direction: row; justify-content: space-between; width: 100%;"
                      >
                        <label class="button">
                          <input
                            type="file"
                            id="file"
                            ref="file"
                            v-on:change="handleFileUpload()"
                            accept="image/png, image/jpeg"
                          />
                          <i class="fa fa-cloud-upload"></i> AGREGAR </label
                        >&nbsp;&nbsp;&nbsp;
                        <button v-on:click="clearImage()">ELIMINAR</button>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
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
// Graphql queries/mutations
import createServicio from "~/apollo/mutations/servicios/createServicio";
import updateServicio from "~/apollo/mutations/servicios/updateServicio";
import servicioByUserId from "~/apollo/queries/servicios/servicioByUserId";
import upload from "~/apollo/mutations/upload/upload";
import getFile from "~/apollo/queries/upload/getFile";
import { extend, setInteractionMode, ValidationProvider } from "vee-validate";
import { required, max, email } from "vee-validate/dist/rules";
import { mapMutations } from "vuex";
setInteractionMode("eager");
extend("required", {
  ...required,
  message: "{_field_} no puede estar en vacio"
});
extend("email", {
  ...email,
  message: "{_field_} debe ser un correo electrónico válido"
});
export default {
  name: "service-register",
  components: {
    ValidationProvider,
    footerPage,
    proveedoresServicios
  },
  data() {
    return {
      axiosError: {
        id: "",
        message: ""
      },
      apolloError: {
        id: "",
        message: ""
      },
      categoria: null,
      nombre: "",
      descripcion: "",
      telefono: "",
      email: "",
      web: "",
      ciudad: "",
      direccion: "",
      selected: "first",
      observacion: "",
      aprobado: false,
      proovedores_resultado: false,
      servicios_obj: { logo: { url: "" } },
      servicios_todos: "",
      noresults: false,
      verproveedores: false,
      loading: false,
      captcha: false,
      dismissSecs: 10,
      dismissCountDown: 0,
      dismissCountDownSignup: 0,
      dismissCountDownAxios: 0,
      showDismissibleAlert: false,
      file: null,
      imageUrl: null,
      servicioId: 0,
      uploadId: 0,
      hasPreviousData: false,
      oldService: null,
      oldFile: null
    };
  },
  created() {},
  async mounted() {
    try {
      var preData = await this.$apollo.queries.servicioByUserId.refetch();
      this.oldService = preData.data.servicios[0];
      this.hasPreviousData =
        Object.keys(this.oldService).length != 0 ? true : false;

      // si no hay datos previos retorno
      if (!this.hasPreviousData) return;

      this.$apollo.queries.servicios.skip = false;
      const result = await this.$apollo.queries.categoryServicios.refetch();
      var categoryList = await result.data.categoryServicios;

      this.servicioId = this.oldService.id;
      this.nombre = this.oldService.nombre;
      this.descripcion = this.oldService.resumen_descripcion;
      this.telefono = this.oldService.telefono;
      this.email = this.oldService.email;
      this.web = this.oldService.web;
      this.ciudad = this.oldService.ciudad;
      this.direccion = this.oldService.direccion;
      this.observacion = this.oldService.observacion;
      this.aprobado =
        this.oldService.aprobado == null ? false : this.oldService.aprobado;
      this.categoria = {
        id: this.oldService.category_servicio.id,
        categoria: categoryList.find(
          x => x.id == this.oldService.category_servicio.id
        ).categoria
      };

      // Obtengo Imagen
      this.uploadId = this.oldService.imagen_servicio.id;
      this.$apollo.queries.getFile.skip = false;
      var preData2 = await this.$apollo.queries.getFile.refetch();
      this.imageUrl = process.env.baseURL + `${preData2.data.files[0].url}`;
      // console.log(`this.imageUrl-->${this.imageUrl}`);
    } catch (err) {
      console.log(`err-->${JSON.stringify(err)}`);
      this.axiosError = await this.$hasAxiosErrors(err);
      if (this.axiosError.id) {
        this.dismissCountDownAxios = this.dismissSecs;
      }
    }
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
        return { id: parseInt(this.loggedUser.id) };
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
    },
    servicioByUserId: {
      prefetch: false,
      query: servicioByUserId,
      variables() {
        return { id: parseInt(this.loggedUser.id) };
      }
      //      result({ data, loading, networkStatus }) {
      //        const dataIsReady = data && networkStatus === 7;
      //        if (dataIsReady) {
      //          console.log(`data-->${JSON.stringify(data)}`);
      //          this.oldService =data
      //          //  this.loading = false;
      //        }
      //      }
    },
    getFile: {
      prefetch: false,
      query: getFile,
      variables() {
        return { id: parseInt(this.uploadId) };
      }
    }
  },
  methods: {
    async doRegister() {
      // Verificar si ya existe registro

      // creando servicio
      console.log("Registering servicio...");

      // Check Data
      if (!this.validData()) {
        this.dismissCountDown = this.dismissSecs;
        return;
      }

      const input = {
        data: {
          nombre: this.nombre,
          telefono: this.telefono,
          resumen_descripcion: this.descripcion,
          web: this.web,
          category_servicio: this.categoria.id,
          ciudad: this.ciudad,
          direccion: this.direccion,
          email: this.email,
          users: this.loggedUser.id
        }
      };

      try {
        var result = await this.$apollo.mutate({
          mutation: createServicio,
          variables: {
            input: input
          }
        });

        // SI NO CREO EL SERVICIO
        if (!result.data.createServicio.servicio.id) {
          this.servicioId = 0;
          this.dismissCountDownAxios = this.dismissSecs;
          return;
        }

        // OK UPLOAD
        this.servicioId = result.data.createServicio.servicio.id;
        if (await this.uploadFile()) {
          this.dismissCountDownSignup = this.dismissSecs;
        }
      } catch (err) {
        this.axiosError = await this.$hasAxiosErrors(err);
        if (this.axiosError.id) {
          this.dismissCountDownAxios = this.dismissSecs;
        }
      }
    },
    async doUpdate() {
      // actualizando servicio
      console.log("Updating servicio...");

      if (
        this.categoria === null ||
        this.nombre.length == 0 ||
        this.descripcion.length == 0 ||
        this.telefono.length == 0 ||
        this.email.length == 0 ||
        this.web.length == 0 ||
        this.ciudad.length == 0 ||
        this.direccion.length == 0 ||
        !this.captcha
      ) {
        this.dismissCountDown = this.dismissSecs;
        return;
      }

      const input = {
        where: { id: this.servicioId },
        data: {
          nombre: this.nombre,
          telefono: this.telefono,
          resumen_descripcion: this.descripcion,
          web: this.web,
          category_servicio: this.categoria.id,
          ciudad: this.ciudad,
          direccion: this.direccion,
          email: this.email
        }
      };

      try {
        var result = await this.$apollo.mutate({
          mutation: updateServicio,
          variables: {
            input: input
          }
        });

        // SI NO ACTUALIZO EL SERVICIO
        if (!result.data.updateServicio.servicio.id) {
          this.dismissCountDownAxios = this.dismissSecs;
          return;
        }

        // SI HA CAMBIADO LA IMAGEN
        if (!this.imageUrl.includes(`${process.env.baseURL}`)) {
          console.log("Cambio la imagen");
          if (await this.uploadFile()) {
            this.dismissCountDownSignup = this.dismissSecs;
            return;
          }
        }

        this.dismissCountDownSignup = this.dismissSecs;
      } catch (err) {
        this.axiosError = await this.$hasAxiosErrors(err);
        if (this.axiosError.id) {
          this.dismissCountDownAxios = this.dismissSecs;
        }
      }
    },
    async uploadFile() {
      // console.log(`Uploading file with servicio: ${this.servicioId}`);
      // console.log(`this.file.name-->${this.file.name}`);
      try {
        var result = await this.$apollo.mutate({
          mutation: upload,
          variables: {
            refId: this.servicioId, // *** Este es el <upload_file_id> en la tabla upload_file_morph para asociar
            info: {
              name: this.file.name,
              caption: this.file.name,
              alternativeText: this.file.name
            },
            file: this.file
          }
        });

        // Si no subio nada
        if (!result.data.upload.id) {
          this.uploadId = 0;
          return false;
        }

        // OK
        this.uploadId = result.data.upload.id;

        // ACTUALIZO IMAGEN
        if (!(await this.upateServiceImage())) {
          return false;
        }
        return true;
      } catch (error) {
        this.axiosError = await this.$hasAxiosErrors(err);
        if (this.axiosError.id) {
          this.dismissCountDownAxios = this.dismissSecs;
        }
      }
    },
    async upateServiceImage() {
      // actualizando image del servicio
      console.log(`Updating image servicio with upload id ${this.uploadId}...`);

      const input = {
        where: { id: this.servicioId },
        data: {
          imagen_servicio: this.uploadId
        }
      };

      try {
        var result = await this.$apollo.mutate({
          mutation: updateServicio,
          variables: {
            input: input
          }
        });

        // SI NO ACTUALIZO EL SERVICIO
        if (!result.data.updateServicio.servicio.id) {
          this.dismissCountDownAxios = this.dismissSecs;
          return false;
        }

        return true;
      } catch (err) {
        this.axiosError = await this.$hasAxiosErrors(err);
        if (this.axiosError.id) {
          this.dismissCountDownAxios = this.dismissSecs;
        }
      }
    },
    validData() {
      if (
        this.categoria === null ||
        this.file === null ||
        this.nombre.length == 0 ||
        this.descripcion.length == 0 ||
        this.telefono.length == 0 ||
        this.email.length == 0 ||
        this.web.length == 0 ||
        this.ciudad.length == 0 ||
        this.direccion.length == 0 ||
        !this.captcha
      )
        return false;

      return true;
    },
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
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    countDownAxiosChanged(dismissCountDownAxios) {
      this.dismissCountDownAxios = dismissCountDownAxios;
    },
    countDownChangedSignup(dismissCountDown) {
      this.dismissCountDownSignup = dismissCountDown;
      if (dismissCountDown == 0) this.$router.push("/servicios");
    },
    showAlert(message) {
      this.message = message;
      this.dismissCountDown = this.dismissSecs;
    },
    async handleFileUpload() {
      try {
        if (this.$refs.file.files[0] === null) return;
        this.file = this.$refs.file.files[0];
        this.imageUrl = URL.createObjectURL(this.file);
      } catch (err) {
        this.axiosError = await this.$hasAxiosErrors(err);
        if (this.axiosError.id) {
          this.dismissCountDownAxios = this.dismissSecs;
        }
      }
    },
    clearImage() {
      this.file = null;
      this.imageUrl = null;
    }
  },
  computed: {
    isLogged() {
      if (process.browser) {
        try {
          return Object.keys(localStorage.getItem("user")).length !== 0
            ? true
            : false;
        } catch (err) {
          return false;
        }
      } else {
        return false;
      }
    },
    loggedUser() {
      return JSON.parse(this.isLogged ? localStorage.getItem("user") : "{}");
    }
  }
};
</script>

<style scoped>
.cont {
  /* min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}
.smallcontainer {
  margin: 10px;
  /*min-height: 5vh;*/
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: center;
  justify-content: space-between;
  text-align: center;
}
.login {
  margin-top: 10px;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
}
.element {
  background: #f7f7f7;
  border: 1px solid #707070;
  padding: 0 0 0 10px;
  border-radius: 15px;
  /*margin-top: 10px;*/
  display: flex;
  flex: 0 0 50%;
  flex-wrap: wrap;
  width: 400px;
}
.pasos h2::before {
  content: "";
  display: inline-block;
  width: 28px;
  height: 51px;
  background: #851819;
  margin-right: 10px;
  position: relative;
  top: 16px;
}
.pasos h2 {
  font-weight: bold;
  font-size: 28px;
}
.pasos h2 .paso-subtitle {
  font-weight: 100;
}
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
  position: relative;
  background: #f7f7f7;
  border: 1px solid #707070;
  padding: 0 0 0 10px;
  border-radius: 15px;
  /*margin-top: 10px;*/
  display: flex;
  flex: 0 0 50%;
  flex-wrap: wrap;
  width: 400px;
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
.registra_servicios {
  display: block;
  margin: 0 auto;
  background: #5e5e5e !important;
}
#pasos h1 {
  color: #5e5e5e;
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: bold;
}
button {
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
  border-radius: 20px;
  padding: 6px 8px;
  margin-top: 25px;
  display: block;
  width: 150px;
  font-weight: bold;
}
button:hover {
  background: #3789d3;
}
.button {
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
  border-radius: 20px;
  padding: 6px 8px;
  margin-top: 25px;
  display: block;
  width: 150px;
  font-weight: bold;
  text-align: center;
}
.button:hover {
  background: #3789d3;
}
input[type="file"] {
  display: none;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #aa381a;
  border: 1px solid #aa381a;
  padding: 2px 10px;
  min-height: 300px;
}
#preview img {
  max-width: 100%;
  max-height: 300px;
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
  #pasos h1 {
    font-size: 22px;
  }
  #ubicar h2 {
    font-size: 20px;
  }
}
</style>
