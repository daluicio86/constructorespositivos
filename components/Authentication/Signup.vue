<template>
  <div class="container">
    <div class="login pasos">
      <h3 class="subtitle">CREAR CUENTA</h3>
      <form ref="form" @submit.stop.prevent="doRegister">
        <div>
          <!-- Username -->
          <validation-provider
            v-slot="{ errors, valid }"
            name="Username"
            rules="required"
          >
            <b-form-group>
              <b-form-input
                class="element"
                id="username-input"
                placeholder="* Nombre de usuario"
                v-model="username"
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

          <!-- Nombre -->
          <!-- validation-provider v-slot="{ errors, valid }" name="Nombre" rules="required">
            <b-form-group>
              <b-form-input class="element"
                            id="nombre-input"
                            placeholder="* Nombre"
                            v-model="firstName"
                            type="text"
                            required
              ></b-form-input>
              <b-form-invalid-feedback :state="valid">
                <span v-for="(error, index) in errors" :key="index">{{ error }}</span>
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider -->

          <!-- Apellido -->
          <!--validation-provider v-slot="{ errors, valid }" name="Apellido" rules="required">
            <b-form-group>
              <b-form-input class="element"
                            id="apellido-input"
                            placeholder="* Apellido"
                            v-model="lastName"
                            type="text"
                            required
              ></b-form-input>
              <b-form-invalid-feedback :state="valid">
                <span v-for="(error, index) in errors" :key="index">{{ error }}</span>
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider -->

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
                placeholder="* Correo Electrónico"
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

          <div>
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

          <div class="smallcontainer">
            <b-button @click="doRegister">CREAR CUENTA</b-button>

            <!-- Alerta Signup Success -->
            <b-alert
              :show="dismissCountDownSignup"
              dismissible
              variant="light"
              @dismissed="dismissCountDownSignup = 0"
              @dismiss-count-down="countDownChangedSignup"
            >
              <p>Se ha registrado correctamente,<br>se le envi&oacute; un correo electr&oacute;nico para su validaci&oacute;n.</p>
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
              <p>Los datos no estan completos o no resolvio el captcha...</p>
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
              <p>Error: {{ axiosError.message }}</p>
              <b-progress
                variant="danger"
                :max="dismissSecs"
                :value="dismissCountDownAxios"
                height="4px"
              ></b-progress>
            </b-alert>

            <!-- Alerta Claves -->
            <b-alert
              :show="dismissCountDownPassword"
              dismissible
              variant="light"
              @dismissed="dismissCountDownPassword = 0"
              @dismiss-count-down="countDownChangedPassword"
            >
              <p>Las claves no concuerdan</p>
              <b-progress
                variant="danger"
                :max="dismissSecs"
                :value="dismissCountDownPassword"
                height="4px"
              ></b-progress>
            </b-alert>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { extend, setInteractionMode, ValidationProvider } from "vee-validate";
import { required, max, email } from "vee-validate/dist/rules";
//import axios from "axios";
import { mapMutations } from "vuex";

import isEmpty from 'lodash';

// Graphql Imports
import register from "~/apollo/mutations/authentication/register";

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
  name: "register-signup",
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
      message: "",
      email: "",
      password: "",
      password2: "",
      captcha: false,
      dismissSecs: 10,
      dismissCountDown: 0,
      dismissCountDownSignup: 0,
      dismissCountDownPassword: 0,
      dismissCountDownAxios: 0,
      showDismissibleAlert: false,
      username: "",
      firstName: "",
      lastName: "",
      userId: 0
    };
  },
  mounted() {},
  computed: {
    //      user () {
    //        return this.$store.state.auth.user;
    //      }
  },
  methods: {
    async doRegister() {
      if (
        this.email.length == 0 ||
        this.password.length == 0 ||
        this.password2.length == 0 ||
        !this.captcha
      ) {
        this.dismissCountDown = this.dismissSecs;
        return;
      }
      if (this.password != this.password2) {
        this.dismissCountDownPassword = this.dismissSecs;
        return;
      }
      this.registerUser();
    },
    async registerUser() {
      // creando usuario
      try {

        const input = {
          username: this.username,
          email: this.email,
          password: this.password
        };


        var result = await this.$apollo.mutate({
          mutation: register,
          variables: {
            input: input
          }
        });

        // SI NO CREO EL USER
        if (!result.data.register.user.id) {
          this.dismissCountDownAxios = this.dismissSecs;
          return;
        }

        this.dismissCountDownSignup = this.dismissSecs;

      } catch (err) {
        this.axiosError = await this.$hasAxiosErrors(err);
        if (this.axiosError.id) {
          this.dismissCountDownAxios = this.dismissSecs;
        }
      }

    },
//    async doSignup() {
//      if (
//        this.email.length == 0 ||
//        this.password.length == 0 ||
//        this.password2.length == 0 ||
//        !this.captcha ||
//        this.firstName.length == 0 ||
//        this.lastName.length == 0
//      ) {
//        this.dismissCountDown = this.dismissSecs;
//        return;
//      }
//      if (this.password != this.password2) {
//        this.dismissCountDownPassword = this.dismissSecs;
//        return;
//      }
//      this.createUser();
//    },
//    async createUser() {
//      // creando usuario
//      console.log(`Creando usuario en : ${process.env.strapiBaseUri}`);
//      try {
//        var result = await axios({
//          method: "POST",
//          url: `${process.env.strapiBaseUri}`,
//          headers: {
//            "Access-Control-Allow-Origin": "*",
//            Accept: "application/json",
//            "Content-Type": "application/json"
//          },
//          data: {
//            query: `mutation($username: String!, $email: String!, $firstname: String!, $lastname: String!, $password: String!) {
//                          createUser(input: {data:{username: $username, email: $email,firstname: $firstname, lastname:$lastname, password: $password, provider: "local",}}) {
//                              user{
//                                id
//                              }
//                          }
//                      }`,
//            variables: {
//              username: this.email.split("@")[0],
//              email: this.email,
//              password: this.password,
//              firstname: this.firstName,
//              lastname: this.lastName
//            }
//          }
//        });
//        this.axiosError = await this.$hasAxiosErrors(result.data);
//        if (Object.keys(this.axiosError).length != 0) {
//          this.dismissCountDownAxios = this.dismissSecs;
//          return;
//        }
//        try {
//          this.userId = result.data.data.createUser.user.id;
//          this.loading = false;
//        } catch (err) {
//          console.log(err);
//        }
//      } catch (error) {
//        this.axiosError = await this.$hasAxiosErrors(error);
//        if (Object.keys(this.axiosError).length != 0) {
//          this.dismissCountDownAxios = this.dismissSecs;
//        }
//        //        console.error(error);
//      }
//    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    countDownChangedPassword(dismissCountDown) {
      this.dismissCountDownPassword = dismissCountDown;
    },
    countDownAxiosChanged(dismissCountDown) {
      this.dismissCountDownAxios = dismissCountDown;
    },
    countDownChangedSignup(dismissCountDown) {
      this.dismissCountDownSignup = dismissCountDown;
      if (dismissCountDown == 0) this.$router.push("/authentication/login");
    },
    showAlert(message) {
      this.message = message;
      this.dismissCountDown = this.dismissSecs;
    }
  },
  apollo: {}
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: center;
  justify-content: space-between; */
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
  font-size: 38px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 10px;
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
#ubicar {
  text-align: center;
  margin: 25px 0 40px 0;
}
.nav-item {
  margin: 0 0;
}
.nav-item a {
  text-decoration: none;
  color: #aa381a;
  /*border: 1px solid #aa381a;*/
  padding: 2px 10px;
  /*border-radius: 8px;*/
  font-size: 13px;
}
.nav-item a:hover,
.nav-item a:active {
  color: #3789d3;
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
