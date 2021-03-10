<template>
  <div class="col-sm col-md-6 card_proyecto ">
    <div class="shadow-sm card-interna">
      <figure>
        <img :src="full_path" />
      </figure>
      <div class="foot_proyectos">
        <div class="title">{{ title }}</div>
        <div class="row">
          <div class="col-sm-8">
            <div class="datos_proyecto strong">
              PRECIOS DESDE LOS: ${{
                precio_min.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
              }}
            </div>
            <div class="datos_proyecto">{{ description }}</div>
            <div class="datos_proyecto">
              <h3 v-if="showAmenities">Incluye:</h3>
              <p class="amenities" v-html="amenities"></p>
            </div>
          </div>
          <div class="col-sm-4 items">
            <div class="item">
              <a :href="direction_path" target="_blank"
                ><font-awesome-icon :icon="['fas', 'directions']"
              /></a>
            </div>
            <div class="item info">
              <a class="information" @click="openLinkProyecto(title, website)">
                <font-awesome-icon :icon="['fas', 'info']"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: !String,
    images: {
      type: Array,
      default: () => [
        { uploadFile: { url: "https://via.placeholder.com/150" } }
      ]
    },
    precio_min: {
      type: !String,
      default: ""
    },
    description: !String,
    amenities: !String,
    website: !String,
    lat: !Number,
    lon: !Number
  },
  data() {
    return {
      path: process.env.baseURL,
      full_path: "",
      direction_path: "",
      maps_path: "https://www.google.com/maps/search/?api=1&query="
    };
  },
  computed: {
    showAmenities() {
      if (this.amenities != "") {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    //this.fullpath=this.path+this.images;
    // console.log (this.images[0])
    if (this.images.length > 0) {
      this.full_path = this.path + this.images[0].uploadFile.url;
    } else {
      this.full_path = "https://via.placeholder.com/275x183";
    }
    this.direction_path = this.maps_path + this.lat + "," + this.lon;
  },
  methods: {
    openLinkProyecto(link, label) {
      console.log("openLink proyecto:" + link + "," + label);
      this.$ga.event({
        eventCategory: "proyectos",
        eventAction: "abrir",
        eventLabel: label
      });
      this.moreInfo();
    },
    moreInfo() {
      this.$emit("showRegistro", this.website);
    }
  }
};
</script>
<style scoped>
figure {
  margin: 0;
}
figure img {
  width: 100%;
}
.foot_proyectos {
  background: #aa381a;
  padding: 5px 20px 15px 20px;
  height: 290px;
}
.title {
  font-size: 16px;
  text-align: center;
  color: white;
  margin-bottom: 15px;
}
.datos_proyecto {
  color: white;
  font-size: 14px;
}
.card_proyecto {
  margin-bottom: 20px;
}
.item {
  display: inline-block;
  color: white;
  font-size: 25px;
  border-radius: 50%;
  border: 1px solid white;
  padding: 2px 8px;
}
.info {
  padding: 2px 15px;
}
h3 {
  margin-top: 5px;
  font-size: 14px;
  font-style: italic;
}
.strong {
  font-weight: bold;
}
.item a {
  color: white;
  cursor: pointer;
}
.item a:hover {
  color: darkgray;
}
.amenities {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
}
@media only screen and (max-width: 641px) {
  .foot_proyectos {
    height: auto;
  }
}
</style>
