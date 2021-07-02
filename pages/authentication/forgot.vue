<template>
  <section class="cont">
    <div class="banner">
      <img src="../../assets/images/banner_servicios.jpg" />
    </div>
    <div class="container pasos">
      <forgot-page />
    </div>
    <section>
      <footerPage />
    </section>
  </section>
</template>

<script>
import footerPage from "~/components/footer";
import forgotPage from "~/components/Authentication/Forgot";
import RangeSlider from "vue-range-slider";
// you probably need to import built-in style
import "vue-range-slider/dist/vue-range-slider.css";

export default {
  components: {
    footerPage,
    forgotPage,
    RangeSlider
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: center;
  justify-content: space-between;
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
.card_home img {
  width: 100%;
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
