<template>
  <section class="cont">
    <div class="container">
      <div class="text-center">
        <b-container class="bv-example-row">
          <b-row>
            <b-col class="w-100 p-3 mb-1">
              <h3 class="subtitle">REINICIAR MI CONTRASEÑA</h3>
              <form ref="form" @submit.stop.prevent="doReset">
                <div>
                  <!-- PASSWORD -->
                  <validation-provider
                    v-slot="{ errors, valid }"
                    name="Contraseña"
                    rules="required"
                  >
                    <b-form-group>
                      <b-form-input
                        class="element"
                        style="width: 100%; margin: 0px;"
                        id="password-input"
                        placeholder="* Contraseña"
                        type="password"
                        v-model="password"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback :state="valid">
                  <span v-for="(error, index) in errors" :key="index">{{
                    error
                    }}</span>
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </div>

                <div>
                  <!-- PASSWORD CONFIRM-->
                  <validation-provider
                    v-slot="{ errors, valid }"
                    name="Confirmar Contraseña"
                    rules="required"
                  >
                    <b-form-group>
                      <b-form-input
                        class="element"
                        style="width: 100%; margin: 0px;"
                        id="password2-input"
                        placeholder="* Confirmar Contraseña"
                        type="password"
                        v-model="password2"
                        required
                      ></b-form-input>
                      <b-form-invalid-feedback :state="valid">
                  <span v-for="(error, index) in errors" :key="index">{{
                    error
                    }}</span>
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </div>

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

                <div>
                  <b-button @click="doReset">REINICIAR</b-button>

                  <!-- Alerta Axios -->
                  <b-alert
                    :show="dismissCountDownAxios"
                    dismissible
                    variant="light"
                    @dismissed="dismissCountDownAxios = 0"
                    @dismiss-count-down="countDownChangedAxios"
                  >
                    <p>Error: {{ axiosError.message }}</p>
                    <b-progress
                      variant="danger"
                      :max="dismissSecs"
                      :value="dismissCountDownAxios"
                      height="4px"
                    ></b-progress>
                  </b-alert>


                  <!-- Alerta Success -->
                  <b-alert
                    :show="dismissCountDownSuccess"
                    dismissible
                    variant="light"
                    @dismissed="dismissCountDownSuccess = 0"
                    @dismiss-count-down="countDownChangedSuccess"
                  >
                    <p>
                      SU CLAVE SE REINICIO CORRECTAMENTE!
                    </p>
                    <b-progress
                      variant="success"
                      :max="dismissSecs"
                      :value="dismissCountDownSuccess"
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
                    <p>Contrase&ntilde;as no coinciden o captcha no superado...</p>
                    <b-progress
                      variant="danger"
                      :max="dismissSecs"
                      :value="dismissCountDown"
                      height="4px"
                    ></b-progress>
                  </b-alert>
                </div>              </form>
            </b-col>
          </b-row>
        </b-container>
      </div>




    </div>
  </section>
</template>

<script>
import { extend, setInteractionMode, ValidationProvider } from "vee-validate";
import { required, max, email } from "vee-validate/dist/rules";
//import axios from "axios";
import { mapMutations } from "vuex";

// Graphql Imports
import resetPassword from "~/apollo/mutations/authentication/resetPassword";

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
  name: "reset",
  components: {
    ValidationProvider
  },
  head() {},
  data() {
    return {
      axiosError: {
        id: "",
        message: ""
      },
      password: "",
      password2: "",
      captcha: false,
      dismissSecs: 10,
      dismissCountDown: 0,
      dismissCountDownAxios: 0,
      dismissCountDownSuccess: 0,
      showDismissibleAlert: false
    };
  },
  mounted() {},
  computed: {},
  methods: {
    async doReset() {
      if (
        this.password.length == 0 ||
        this.password2.length == 0 ||
        !this.captcha
      ) {
        this.dismissCountDown = this.dismissSecs;
        return;
      }
      if (this.password != this.password2) {
        this.dismissCountDown = this.dismissSecs;
        return;
      }

      // Proceso reset
      try {

        var result = await this.$apollo.mutate({
          mutation: resetPassword,
          variables: {
            password: this.password,
            passwordConfirmation: this.password2,
            code: this.$route.query.code
          }
        });

        // SI NO RESETEO LA CLAVE
        if (!result.data.resetPassword.user.id) {
          this.dismissCountDownAxios = this.dismissSecs;
          return;
        }

        this.dismissCountDownSuccess = this.dismissSecs;

      } catch (err) {
        console.log(`err-->${JSON.stringify(err)}`);
        this.axiosError = await this.$hasAxiosErrors(err);
        if (this.axiosError.id) {
          this.dismissCountDownAxios = this.dismissSecs;
        }
      }
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    countDownChangedAxios(dismissCountDown) {
      this.dismissCountDownAxios = dismissCountDown;
    },
    countDownChangedSuccess(dismissCountDown) {
      this.dismissCountDownSuccess = dismissCountDown;
      if (dismissCountDown == 0) this.$router.push("/authentication/login");
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  },
  apollo: {}
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
  /display: block;
  /width: 150px;
    font-weight: bold;
  }
  button:hover {
    background: #3789d3;
  }
  .nav-item {
    margin: 0 0;
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
