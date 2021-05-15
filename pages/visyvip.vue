<template>
  <div class="cont">
    <div class="banner">
      <img src="../assets/images/banner_visyvip.jpg" />
    </div>
    <div id="header">
      <h1>TODA LA INFORMACIÓN QUE NECESITAS</h1>
      <h2>PARA TENER TU VIVIENDA</h2>
    </div>
    <div class="container">
      <!-- Start pasos -->
      <section id="contenido" class="row">
        <div class="col-sm-12 col-md-4">
          <div class="type_container">
            <div
              @click="
                gotoUrl(
                  'https://www.miduvi.net/vivienda-de-inter%C3%A9s-social',
                  'vivienda',
                  'vipvis',
                  'clic'
                )
              "
              class="link"
            >
              <h3>VIS</h3>
              <h4>Vivienda de Interés Social</h4>
            </div>
            <p>De $23.024 a $40.608</p>
            <p>Con subsidio de $6.000</p>
            <img src="../assets/images/vivienda_interes1.jpg" />
            <span class="subtitulo"
              >(Vivienda con subsidio parcial del Estado).</span
            >
            <ul>
              <li>
                Bono de USD 6.000 (Seis mil dólares); Préstamo hipotecario con
                tasa de interés preferencial del 4,99% hasta 25 años plazo y con
                el 5% de entrada.
              </li>
              <li>
                Viviendas desde 50 m2: 2 dormitorios.*Viviendas desde 50 m2: 2
                dormitorios.
              </li>
              <li>Viviendas desde 57 m2: 3 dormitorios.</li>
              <li>Desde USD 23.024 23 hasta USD 40.608.</li>
              <li>Ingresos máximos de 2.5 SBU ($1.000).</li>
              <li>Primera y única vivienda.</li>
              <li>
                No haber recibido ningún bono subsidio por parte del estado.
              </li>
            </ul>
          </div>
          <button @click="gotoHome" class="vivienda-btn">
            AQUI TU VIVIENDA
          </button>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="type_container">
            <div
              @click="
                gotoUrl(
                  'https://www.miduvi.net/vivienda-de-inter%C3%A9s-p%C3%BAblico',
                  'vivienda',
                  'vipvis',
                  'clic'
                )
              "
              class="link"
            >
              <h3>VIS</h3>
              <h4>Vivienda de Interés Social</h4>
            </div>
            <p>De $40.608 a $71.064<br /><br /></p>
            <img src="../assets/images/vivienda_interes2.jpg" />
            <span class="subtitulo"
              >(Vivienda con subsidio parcial del Estado).</span
            >
            <ul>
              <li>
                Bono de USD 6.000 (Seis mil dólares); Préstamo hipotecario con
                tasa de interés preferencial del 4,99% hasta 25 años plazo y con
                el 5% de entrada.
              </li>
              <li>
                Viviendas desde 50 m2: 2 dormitorios.*Viviendas desde 50 m2: 2
                dormitorios.
              </li>
              <li>Viviendas desde 57 m2: 3 dormitorios.</li>
              <li>Desde USD 23.024 23 hasta USD 40.608.</li>
              <li>Ingresos máximos de 2.5 SBU ($1.000).</li>
              <li>Primera y única vivienda.</li>
              <li>
                No haber recibido ningún bono subsidio por parte del estado.
              </li>
            </ul>
          </div>
          <button @click="gotoHome" class="vivienda-btn">
            AQUI TU VIVIENDA
          </button>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="type_container">
            <div
              @click="
                gotoUrl(
                  'https://www.miduvi.net/proyectos-de-inter%C3%A9s-social',
                  'vivienda',
                  'vipvis',
                  'clic'
                )
              "
              class="link"
            >
              <h3>VIP</h3>
              <h4>VIvienda de Interés Público</h4>
            </div>
            <p>De $71.065 a $91.368<br /><br /></p>

            <img src="../assets/images/vivienda_interes3.jpg" />
            <span class="subtitulo"
              >(Vivienda con subsidio parcial del Estado).</span
            >
            <ul>
              <li>
                Bono de USD 6.000 (Seis mil dólares); Préstamo hipotecario con
                tasa de interés preferencial del 4,99% hasta 25 años plazo y con
                el 5% de entrada.
              </li>
              <li>
                Viviendas desde 50 m2: 2 dormitorios.*Viviendas desde 50 m2: 2
                dormitorios.
              </li>
              <li>Viviendas desde 57 m2: 3 dormitorios.</li>
              <li>Desde USD 23.024 23 hasta USD 40.608.</li>
              <li>Ingresos máximos de 2.5 SBU ($1.000).</li>
              <li>Primera y única vivienda.</li>
              <li>
                No haber recibido ningún bono subsidio por parte del estado.
              </li>
            </ul>
          </div>
          <button @click="gotoHome" class="vivienda-btn">
            AQUI TU VIVIENDA
          </button>
        </div>
      </section>
      <section>
        <button
          @click="
            gotoUrl(
              'https://www.miduvi.net/calculadora',
              'calculadora',
              'clic',
              'calculadora'
            )
          "
          class="calculadora-btn"
        >
          CALCULADORA: CALCULA TU CRÉDITO HIPOTECARIO
        </button>
      </section>
    </div>
    <div id="separador">
      <h2>FINANCIAMIENTO</h2>
    </div>
    <div class="container">
      <div class="row bancos">
        <div class="col-sm-3 banco">
          <a
            class="link"
            @click="
              gotoCalculadora(
                'https://www.aplicacionesbp.com.ec:4443/simulador-credito-web/faces/Segmento-Credito',
                'Pacifico'
              )
            "
            ><img src="../assets/images/bancodelpacifico.jpg"
          /></a>
        </div>
        <div class="col-sm-3 banco">
          <a
            class="link"
            @click="
              gotoCalculadora(
                'https://www.aplicacionesbp.com.ec:4443/simulador-credito-web/faces/Segmento-Credito',
                'Pichincha'
              )
            "
          >
            <img src="../assets/images/bancopichincha.jpg"
          /></a>
        </div>
        <div class="col-sm-3 banco">
          <a
            class="link"
            @click="
              gotoCalculadora(
                'https://info.mutualistaazuay.com/simuladorcredito/code/1',
                'mutualista azuay'
              )
            "
          >
            <img src="../assets/images/mutualistaazuay.jpg"
          /></a>
        </div>
        <div class="col-sm-3 banco">
          <a
            class="link"
            @click="
              gotoCalculadora(
                'https://www.mutualistapichincha.com/credito-hipotecario',
                'mutualista pichincha'
              )
            "
          >
            <img src="../assets/images/mutualistapichincha.jpg"
          /></a>
        </div>
      </div>
    </div>
    <!-- <div id="slogan">
      “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
      nonummy nibh”
    </div> -->
    <div>
      <footerPage />
    </div>
  </div>
</template>

<script>
import footerPage from "~/components/footer";
import quieneSomo from "~/apollo/queries/quieneSomo";

export default {
  components: {
    footerPage
  },
  data() {
    return {
      quieneSomo: { banner: { url: "" } }
    };
  },
  computed: {
    banner() {
      return process.env.baseURL + this.quieneSomo.banner.url;
    }
  },

  apollo: {
    quieneSomo: {
      prefetch: false,
      query: quieneSomo,
      variables() {}
    }
  },
  methods: {
    gotoUrl(site, label, category, action) {
      this.$ga.event({
        eventCategory: category,
        eventAction: action,
        eventLabel: label
      });
      window.open(site, "_blank");
    },
    gotoHome() {
      this.$router.push("/");
    },
    gotoCalculadora(site, label) {
      this.$ga.event({
        eventCategory: "vipvisbanco",
        eventAction: "abrir",
        eventLabel: label
      });
      window.open(site, "_blank");
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
#header,
#separador {
  background: rgb(247, 99, 46);
  background: radial-gradient(
    circle,
    rgba(247, 99, 46, 1) 0%,
    rgba(181, 34, 34, 1) 100%
  );
  margin-top: 40px;
  padding: 15px 20px;
}
#header h1,
#separador h2 {
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
.type_container {
  background: #aa381a;
  margin: 20px 10px;
  padding: 20px 0px;
  color: white;
}
.type_container img {
  width: 100%;
}
.type_container h3 {
  text-align: center;
  color: white;
  font-size: 30px;
}
.type_container h4 {
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: normal;
}
.type_container p {
  color: white;
  text-align: center;
  margin: 5px 0;
  font-size: 22px;
}
.type_container .subtitulo {
  display: block;
  padding: 10px 20px;
}
.type_container ul {
  padding: 0 30px;
}
.vivienda-btn {
  display: block;
  border: none;
  border-radius: 5px;
  margin: 0 auto;
  background: rgb(247, 99, 46);
  background: radial-gradient(
    circle,
    rgba(247, 99, 46, 1) 0%,
    rgba(181, 34, 34, 1) 100%
  );
  color: white;
  padding: 5px 20px;
  outline: none;
}
#texto {
  padding: 20px 0 50px 0;
}
.calculadora-btn {
  background: #6b6b6b;
  color: white;
  display: block;
  width: 80%;
  margin: 40px auto;
  padding: 8px;
  border: none;
  outline: none;
  font-size: 32px;
  font-weight: bold;
  border-radius: 8px;
}
.link {
  cursor: pointer;
}
.link:hover {
  text-decoration: underline;
}
.banco img {
  width: 100%;
}
.bancos {
  padding: 70px 0;
  align-items: center;
}
@media (max-width: 767px) {
  .header h1 {
    font-size: 26px;
  }
  .calculadora-btn {
    font-size: 22px;
  }
  .banco {
    margin: 20px;
  }
}
</style>
