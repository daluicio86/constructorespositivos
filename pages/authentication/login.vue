<template>
  <section class="cont">
    <b-modal v-model="registroShow" title="Déjanos tus datos" @ok="handleOk">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Nombre"
          label-for="name-input"
          invalid-feedback="El nombre es requerido"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="nombre"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Apellido"
          label-for="last-input"
          invalid-feedback="El apellido es requerido"
          :state="lastnameState"
        >
          <b-form-input
            id="last-input"
            v-model="apellido"
            :state="lastnameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Email"
          label-for="email-input"
          invalid-feedback="El Email es requerido"
        >
          <b-input-group
            prepend="@"
            class="mb-2 mr-sm-2 mb-sm-0"
            :state="emailState"
          >
            <b-form-input
              id="email-input"
              v-model="email"
              :state="emailState"
              type="email"
              required
            ></b-form-input>
          </b-input-group>
        </b-form-group>
      </form>
    </b-modal>
    <div class="banner">
      <img src="../../assets/images/banner_servicios.jpg" />
    </div>
    <div class="container"><login-page /></div>
    <!-- CONTAINER -->

    <!-- END CONTAINER -->
    <section>
      <footerPage />
    </section>
  </section>
</template>

<script>
import footerPage from "~/components/footer";
import loginPage from "~/components/Authentication/Login";
import axios from "axios";
import RangeSlider from "vue-range-slider";
// you probably need to import built-in style
import "vue-range-slider/dist/vue-range-slider.css";
//import { mapMutations } from "vuex";

export default {
  components: {
    footerPage,
    RangeSlider,
    loginPage
  },
  data() {
    return {
      nombre: "",
      apellido: "",
      email: "",
      nameState: null,
      lastnameState: null,
      emailState: null,
      distancia: 1,
      mapCenter: { lat: -0.1984136, lng: -78.495783 },
      markers: [
        {
          position: {
            lat: -0.1984196,
            lng: -78.495753
          }
        }
      ],
      proyectos: [],
      proyecto_id_string: "",
      proyectos_detallados: [],
      resultados_proyectos: false,
      lat: -0.18558429549488542,
      long: -78.48053330227975,
      loading: false,
      registroShow: false,
      registrado: false,
      website: "",
      ubicacion: "",
      autocomplete: null
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    mostrarResultados() {
      this.loading = true;
      this.$ga.event({
        eventCategory: "proyectos",
        eventAction: "buscar"
      });
      this.getProyectosCercanos();
    },
    async getUserLocation() {
      console.log("getUserLocation");
      try {
        const coordinates = await this.$getLocation({
          enableHighAccuracy: true
        });

        this.mapCenter = coordinates;
        this.lat = this.mapCenter.lat;
        this.long = this.mapCenter.lng;
        console.log(coordinates);
        this.gotoMyLocation();
        this.getGeoCode();
      } catch (error) {
        this.noLocation = true;
      }
    },
    gotoMyLocation() {
      var map = this.$refs.gMap.map;
      var markers = map.markers;
      var principalMarker = markers[0];
      map.setCenter(new google.maps.LatLng(this.lat, this.long));
      principalMarker.setPosition(new google.maps.LatLng(this.lat, this.long));
    },
    async getProyectosCercanos() {
      this.proyectos = "";
      try {
        var result = await axios({
          method: "POST",
          url: "https://api.constructorespositivos.com/api-web",
          data: {
            query: `{
                proyectosCercanos(latitude:${this.lat}, longitude: ${this.long}, distance: ${this.distancia}) {
                        id
                        nombre
                        informacion
                        slug
                        latitude
                        longitude
                        amenities
                        email_proyecto
                        website_proyecto
                        desde
                        hasta
                        nombre_contacto
                        telefono_contacto
                        Constructora{
                          nombre_constructora
                      }
                        files{
                              uploadFile {
                                url
                              }
                            }
                  }
                    }    `
          }
        });
        try {
          let data = result.data.data.proyectosCercanos;

          this.proyectos = data;

          this.clearMarkers();
          this.addMarkers(this.proyectos);
          this.resultados_proyectos = true;
          this.loading = false;
        } catch (err) {
          // console.log(err);
        }
      } catch (error) {
        // console.error(error);
      }
    },
    getLatLongMap() {
      var map = this.$refs.gMap.map;
      var pos = this.$refs.gMap.map.getCenter();
      this.lat = pos.lat();
      this.long = pos.lng();
      var markers = this.$refs.gMap.map.markers;

      var principalMarker = markers[0];
      principalMarker.setPosition(new google.maps.LatLng(this.lat, this.long));
    },
    getGeoCode() {
      var geocoder = new google.maps.Geocoder();
      const latlng = {
        lat: this.lat,
        lng: this.long
      };
      geocoder.geocode({ location: latlng }, (results, status) => {
        if (results != null) {
          if (results[0]) {
            console.log(results);
            let arr = results[0].address_components;
            // console.log(arr);
            arr.forEach(element => {
              if (element.types[0] == "route") {
                this.ubicacion = element.long_name;
              }
            });
            arr = [];
          }
        }
      });
    },
    clearMarkers() {
      for (var i = 1; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
      this.markers.length = 1;
    },
    addMarkers(array) {
      var map = this.$refs.gMap.map;

      array.forEach(element => {
        var location = new google.maps.LatLng(
          element.latitude,
          element.longitude
        );
        let marker = new google.maps.Marker({
          position: location,
          map: map,
          title: element.nombre
        });
        this.markers.push(marker);
        var ventanaInfo = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, "click", function() {
          var imagen;
          if (element.files.length > 0) {
            imagen = `<img style="max-width:200px" src="https://strapi.constructorespositivos.com${element.files[0].uploadFile.url}"/>`;
          } else {
            imagen = "";
          }
          // console.log(element);
          ventanaInfo.setContent(
            `<div style="text-align:left;font-weight:bold">${element.nombre}</div><div style="text-align:left"><span style="font-weight:bold">Constructora: </span>${element.Constructora.nombre_constructora}</div><div style="text-align:left"><span style="font-weight:bold">Precios desde:</span> $${element.desde}</div>${imagen}<div></div>`
          );
          ventanaInfo.open(map, this);
        });
      });
    },
    showRegistro(payload) {
      console.log("show registro" + payload);
      this.website = payload;
      if (!this.registrado) {
        this.registroShow = true;
      } else {
        if (process.client) {
          window.open(this.website);
        }
      }
    },
    handleSubmit() {
      console.log("submit");
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      if (process.browser) {
        this.$store.commit("subscribe/SET_EMAIL", this.email);
        localStorage.setItem("user_email", this.email);
      }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
        this.registroShow = false;
        this.registrado = true;
        this.sendData();
      });
    },
    async sendData() {
      console.log("sending data");
      var formdata = new FormData();
      formdata.append("nombre", this.nombre);
      formdata.append("apellido", this.apellido);
      formdata.append("email", this.email);
      // console.log (formdata);
      var actions = "createUser";
      const auth = {
        headers: {
          "Content-Type": "text/plain"
        }
      };
      axios
        .post(
          "https://fmwlab.com/constructores/api/usuarios.php?actions=" +
            actions,
          formdata, // the data to post
          auth
        )
        .then(response => window.open(this.website));
    },
    checkData(response) {
      if (response == "true") {
      }
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    closeVideo() {
      this.video = false;
    },
    //load AutoComplete
    autoComplete() {
      if (this.autocomplete != null || google == null) return;

      //LOAD API GOOGLE AND USE
      this.autocomplete = new google.maps.places.Autocomplete(
        document.getElementById("ubicacionSearch"),
        { componentRestrictions: { country: "ec" } }
      );

      // EVENT LISTENER AUTO COMPLETE
      google.maps.event.addListener(this.autocomplete, "place_changed", () => {
        let place = this.autocomplete.getPlace(); //get place choosed when clicked
        let ac = place.address_components; //return details of place

        if (ac == undefined) return;
        // console.log(place);
        this.lat = place.geometry.location.lat();
        this.long = place.geometry.location.lng();
        this.ubicacion = place.name;
        var map = this.$refs.gMap.map;
        map.setCenter(new google.maps.LatLng(this.lat, this.long));
        var markers = this.$refs.gMap.map.markers;
        var principalMarker = markers[0];
        principalMarker.setPosition(
          new google.maps.LatLng(this.lat, this.long)
        );
        //loop for find informations specific
      });
    },
    //Event Listener key up enter
    onKeyUpEnterCompleteSearch() {
      let options = {
        input: this.ubicacion
      };

      //created a service to search same results from autocomplete when pressioned enter key.
      let complete = new google.maps.places.AutocompleteService();

      //created a geocoder to search details more specific of places.
      let geocoder = new google.maps.Geocoder();

      complete.getPlacePredictions(options, (place, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          //show all results from auto complete
          console.log(place[0]);

          geocoder.geocode(
            { placeId: place[0].place_id },
            (placeDetails, stat) => {
              if (stat == google.maps.GeocoderStatus.OK) {
                //show detail first result from auto complete
                // console.log();
                this.lat = placeDetails[0].geometry.location.lat();
                this.long = placeDetails[0].geometry.location.lng();
              }
            }
          );
        }
      });
    }
  },
  computed: {
    latlong() {
      return `Lat:${this.lat}, Long:${this.long}`;
    },
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
    }
  },
  watch: {
    ubicacion: function(newValue, oldValue) {
      if (oldValue == "" && this.autocomplete == null) {
        this.autoComplete();
      }
    }
  },
  mounted() {
    if (process.browser) {
      let user_email = localStorage.getItem("user_email");
      if (user_email != null) {
        this.registrado = true;
      }
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
.arrow::after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  background: url("../../assets/images/arrow.png");
  background-repeat: no-repeat;
  background-size: contain;
  top: 131px;
  right: -55px;
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
