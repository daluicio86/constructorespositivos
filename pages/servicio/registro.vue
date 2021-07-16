<template>
  <section class="cont">
    <div class="banner">
      <img src="../../assets/images/banner_servicios.jpg" />
    </div>

    <div class="container">
      <div class="text-center">
        <div id="header">
          <h4>REGISTRO DE SERVICIOS</h4>
          <h4>PARA LA CONSTRUCCIÓN</h4>
        </div>
        <b-container class="bv-example-row">
          <form ref="form" @submit.stop.prevent="doRegister">
            <b-row>
              <b-col class="col-sm-12 col-md-6 p-3 mb-1">
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
                      placeholder="* Su número telefónico"
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
                      placeholder="* Ingrese su Correo electrónico"
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
                      placeholder="* Ingrese su página web O su página de Facebook"
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
                      placeholder="* Ingrese su ciudad"
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
                      placeholder="* Ingrse su dirección"
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
              </b-col>
              <b-col class="w-50 p-3 mb-1">
                <!-- FILES --->
                <div>
                  <b-container>
                    <b-row class="w-100 justify-content-center">
                      <div
                        :class="{ no_preview: !haveImagePreview }"
                        id="preview"
                      >
                        <img width="100%" v-if="imageUrl" :src="imageUrl" />
                        <p v-if="!hasPreviousData || imageUrl == null">
                          Cargar imagen de máximo 1Mb (512 x 512 pixels)
                        </p>
                      </div>
                    </b-row>
                    <b-row class="w-100">
                      <p>Ingresa tu fotografía o logotipo de tu empresa</p>
                      <b-col class="col-sm-6">
                        <label class="buttonFile">
                          <!-- input
                            type="file"
                            id="my-files"
                            ref="my-files"
                            v-on:change="handleFileUpload()"
                            accept="image/*"
                          /-->
                          <b-form-file
                            v-model="file"
                            ref="file-input"
                            class="mt-3"
                            plain
                            accept="image/*"
                            :state="Boolean(file)"
                            @input="handleFileUpload()"
                          ></b-form-file>
                          <i class="fa fa-cloud-upload"></i> Cargar Imagen
                        </label>
                      </b-col>

                      <b-col class="col-sm-6">
                        <button v-on:click="clearImage()">
                          Eliminar Imagen
                        </button>
                      </b-col>
                    </b-row>
                  </b-container>
                </div>

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
                        placeholder="Observaciones de su solicitud"
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
                      <p>
                        Estado:
                        {{ aprobado ? "Aprobado" : "Pendiente de aprobación" }}
                      </p>
                    </b-form-checkbox>
                  </b-form-group>
                </div>
              </b-col>
            </b-row>
            <b-row class="w-100">
              <b-col class="col-sm-12">
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
              </b-col>
              <b-col class="col-sm-12">
                <!---------------------------------------------------------- Button SUBMIT -->

                <b-button v-if="!hasPreviousData" @click="doRegister">
                  GUARDAR </b-button
                ><br />
                <b-button v-if="hasPreviousData" @click="doUpdate">
                  ACTUALIZAR </b-button
                ><br />

                <!-- Alerta Signup Success -->
                <b-alert
                  :show="dismissCountDownSignup"
                  dismissible
                  variant="light"
                  @dismissed="dismissCountDownSignup = 0"
                  @dismiss-count-down="countDownSignupChanged"
                >
                  <p>
                    Se ha
                    {{ !hasPreviousData ? "Registrado" : "Actualizado" }}
                    correctamente...
                  </p>
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

                <!-- Alerta Imagen -->
                <b-alert
                  :show="dismissCountDownImage"
                  dismissible
                  variant="light"
                  @dismissed="dismissCountDownImage = 0"
                  @dismiss-count-down="countDownImageChanged"
                >
                  <p>
                    La imagen debe ser de: {{ this.WIDTH_ALLOWED }}x{{
                      this.HEIGHT_ALLOWED
                    }}
                    pixeles y pesar menos de {{ this.SIZE_ALLOWED }}Kb.
                  </p>
                  <b-progress
                    variant="danger"
                    :max="dismissSecs"
                    :value="dismissCountDownImage"
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
              </b-col>
            </b-row>
          </form>
        </b-container>
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
      imageData: {
        size: "",
        height: "",
        width: "",
        type: ""
      },
      imageLoaded: false,
      WIDTH_ALLOWED: 658,
      HEIGHT_ALLOWED: 323,
      SIZE_ALLOWED: 1024,
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
      dismissCountDownImage: 0,
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
    countDownSignupChanged(dismissCountDownSignup) {
      this.dismissCountDownSignup = dismissCountDownSignup;
      if (dismissCountDown == 0) this.$router.push("/servicios");
    },
    countDownImageChanged(dismissCountDownImage) {
      this.dismissCountDownImage = dismissCountDownImage;
    },
    showAlert(message) {
      this.message = message;
      this.dismissCountDown = this.dismissSecs;
    },
    async handleFileUpload() {
      var isAllowedImage = false;
      var imageSize = await JSON.parse(localStorage.getItem("imageSize"));
      try {
        if (this.file === null) return;
        this.imageUrl = await URL.createObjectURL(this.file);
        await this.readImageFile(this.file);

        let imgSize = this.file.size / 1024;

        if (
          imageSize.height < this.HEIGHT_ALLOWED &&
          imageSize.width < this.WIDTH_ALLOWED &&
          imgSize < this.SIZE_ALLOWED
        )
          isAllowedImage = true;

        if (!isAllowedImage) {
          await this.clearImage();
          this.dismissCountDownImage = this.dismissSecs;
          return;
        }
      } catch (err) {
        this.axiosError = await this.$hasAxiosErrors(err);
        if (this.axiosError.id) {
          this.dismissCountDownAxios = this.dismissSecs;
        }
      }
    },
    readImageFile(file) {
      //Initiate the FileReader object.
      var reader = new FileReader();
      //Read the contents of Image File.
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        //Initiate the JavaScript Image object.
        var image = new Image();
        //Set the Base64 string return from FileReader as source.
        image.src = e.target.result;
        //Validate the File Height and Width.
        image.onload = function() {
          var height = this.height;
          var width = this.width;
          localStorage.setItem(
            "imageSize",
            JSON.stringify({ height: height, width: width })
          );
        };
      };
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
    },
    haveImagePreview() {
      if (this.imageUrl != null) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    file(newFile) {
      if (newFile && !newFile.type.startsWith("image/")) {
        this.$nextTick(() => {
          this.file = null;
        });
      }
    }
  }
};
</script>

<style scoped>
.element {
  background: #f7f7f7;
  border: 1px solid #707070;
  padding: 0 0 0 10px;
  border-radius: 15px;
  margin-top: 10px;
  display: flex;
  flex: 0 0 50%;
  flex-wrap: wrap;
  width: 100%;
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
  margin: 10px;
  width: 150px;
  font-weight: bold;
}
button:hover {
  background: #3789d3;
}
.nav-item {
  margin: 0 0;
}
.buttonFile {
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
  margin: 10px;
  display: block;
  width: 100%;
  font-weight: bold;
  text-align: center;
}
.buttonFile:hover {
  background: #3789d3;
}
input[type="file"] {
  display: none;
}
.nav-item a {
  text-decoration: none;
  color: #aa381a;
  /border: 1px solid #aa381a;
  /padding: 2px 10px;
  /border-radius: 8px;
  /font-size: 13px;
}
.nav-item a:hover,
.nav-item a:active {
  color: #3789d3;
}
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #aa381a;
  padding: 2px 10px;
  max-width: 100%;
  /*min-height: 323px;*/
  max-height: 323px;
}
#preview img {
  max-width: 100%;
  /*min-height: 323px;*/
  max-height: 323px;
}
.banner {
  width: 100%;
}
.banner img {
  width: 100%;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.card_home {
  margin: 0 20px;
  position: relative;
}
.card_home img {
  width: 100%;
}
#pasos {
  margin: 40px 0 80px 0;
}
#pasos h1 {
  color: #5e5e5e;
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: bold;
}
.foot_card {
  color: white;
  background: rgb(247, 99, 46);
  background: radial-gradient(
    circle,
    rgba(247, 99, 46, 1) 0%,
    rgba(181, 34, 34, 1) 100%
  );
  text-align: center;
  padding: 10px 10px;
}
figure {
  margin: 0;
}
.foot_card h3 {
  font-size: 15px;
  font-weight: bold;
  margin: 0;
  padding: 0;
}
.foot_card h4 {
  font-size: 14px;
  margin: 0;
  padding: 0;
  font-weight: 300;
}
#ubicar {
  text-align: center;
  margin: 25px 0 40px 0;
}
#ubicar button {
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
  padding: 6px 8px;
  margin-top: 25px;
}
#ubicar input {
  width: 100%;
  margin-top: 5px;
}
#ubicar input::placeholder {
  font-style: italic;
  font-weight: 300;
  padding-left: 10px;
}

#ubicar h2 {
  color: #5e5e5e;
  text-align: center;
  font-size: 26px;
  margin-bottom: 30px;
  font-weight: bold;
}
.input-data {
  margin-top: -7px;
}
#map {
  margin-top: 20px;
}
#map button {
  background: #f26424;
  border-radius: 0px;
  margin-top: 15px;
  margin-bottom: 20px;
}
#map button span {
  font-weight: bold;
}
#resultados {
  padding: 0 0 50px 0;
}
#video {
  margin-bottom: 40px;
}
.ubicacion-instructions,
.buscar-instructions {
  font-style: italic;
  margin-top: 20px;
  display: block;
  font-weight: 500;
}
.titulo-buscar {
  text-align: left;
  font-weight: bold;
}
.distancia {
  /* margin-top: 5px; */
}
.no_preview {
  border: 1px solid #aa381a;
  min-height: 300px;
}
.form-group {
  margin-bottom: 0px !important;
}
@media only screen and (max-width: 641px) {
  .card_home {
    margin-bottom: 30px;
  }
  .ubicacion_actual {
    margin-top: 20px;
  }
  .arrow::after {
    display: none;
  }
  #pasos h1 {
    font-size: 22px;
  }
  #ubicar h2 {
    font-size: 20px;
  }
  .input-data {
    margin-top: 10px;
  }
}
</style>
