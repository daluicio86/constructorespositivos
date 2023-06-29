<template>
    <section class="cont">
      <div class="banner">
        <img src="../assets/images/banner1.jpg" />
      </div>
      <div id="header">
        <h1>CALCULA TU CRÉDITO</h1>
        <h2>EN VARIAS INSTITUCIONES FINANCIERAS</h2>
      </div>
      <div v-if="!loading" class="container calculadoras">
        <div class="row">
            <h5>Utiliza la calculadora del Ministerio de Económica para calcular las cuotas mensuales de créditos hipotecarios</h5>
        </div>
        <br/>      
        <calculadora/>
      </div>
  
      <div id="header-1">
        <h2>CONOCE</h2>
        <h3>LO NECESARIO</h3>
      </div>
      <div class="container prestamos">
        <!-- Start calculadora -->
        <div class="row ">
          <div class="col-sm-12">
            <h4>
              LOS BANCOS <strong>UTILIZAN</strong> ESTOS 2 SISTEMAS PARA
              <strong>OTORGAR PRÉSTAMOS</strong>
            </h4>
            <div class="tipos-prestamos">
              <div class="row">
                <div class="col-sm-6">
                  <div class="header-prestamo">
                    <h6>
                      SISTEMA DE AMORTIZACIÓN <br /><strong>FRANCÉS</strong>
                    </h6>
                  </div>
                  <div class="sub-prestamo">
                    <div class="col-prestamos">
                      <span class="prestamo-title">DEUDA</span
                      ><span class="prestamos-sub">$300</span>
                    </div>
                    <div class="col-prestamos">
                      <span class="prestamo-title">INTERÉS</span
                      ><span class="prestamos-sub">11%</span>
                    </div>
                    <div class="col-prestamos">
                      <span class="prestamo-title">TIEMPO</span
                      ><span class="prestamos-sub">12 MESES</span>
                    </div>
                  </div>
                  <div class="contenido-prestamo">
                    <p>
                      LAS CUOTAS SON <strong>FIJAS</strong> DURANTE EL PLAZO DE
                      PAGO DE UN CRÉDITO.
                    </p>
                    <p>
                      EN LAS PRIMERAS CUOTAS SE
                      <strong>AMORTIZA </strong> PROPORCIONALMENTE
                      <strong>MENOS CAPITAL</strong> QUE EN LAS ÚLTIMAS CUOTAS,
                      POR LO QUE GENERA INTERÉS .
                    </p>
                  </div>
                  <h4>POR EJEMPLO</h4>
                  <div class="ejemplo-container">
                    <div class="ejemplo">
                      <span class="cuota">PRIMERA CUOTA: $26,51</span>
                      <span class="interes">(INTERÉS $2,75, CAPITAL $23,76)</span>
                    </div>
                    <div class="ejemplo">
                      <span class="cuota">SEGUNDA CUOTA: $26,51</span>
                      <span class="interes">(INTERÉS $2,53, CAPITAL $23,98)</span>
                    </div>
                    <div class="ejemplo">
                      <span class="cuota">TERCERA CUOTA: $26,51</span>
                      <span class="interes">(INTERÉS $2,31, CAPITAL $24,20)</span>
                    </div>
                  </div>
                  <h5>EL CIUDADANO TERMINA PAGANDO:</h5>
                  <h6>$318,12</h6>
                </div>
                <div class="col-sm-6">
                  <div class="header-prestamo">
                    <h6>SISTEMA DE AMORTIZACIÓN<br /><strong>ALEMÁN</strong></h6>
                  </div>
                  <div class="sub-prestamo">
                    <div class="col-prestamos ">
                      <span class="prestamo-title">DEUDA</span
                      ><span class="prestamos-sub">$300</span>
                    </div>
                    <div class="col-prestamos ">
                      <span class="prestamo-title">INTERÉS</span
                      ><span class="prestamos-sub">11%</span>
                    </div>
                    <div class="col-prestamos">
                      <span class="prestamo-title">TIEMPO</span
                      ><span class="prestamos-sub">12 MESES</span>
                    </div>
                  </div>
                  <div class="contenido-prestamo">
                    <p>
                      LAS CUOTAS SON <strong>DECRECIENTES </strong>DURANTE EL
                      PLAZO DE PAGO DE UN CRÉDITO.
                    </p>
                    <p>
                      EXISTE <strong>AMORTIZACIÓN FIJA</strong> DE CAPITAL Y SE
                      PAGAN MENOS INTERESES.
                    </p>
                  </div>
                  <h4>POR EJEMPLO</h4>
                  <div class="ejemplo-container">
                    <div class="ejemplo">
                      <span class="cuota">PRIMERA CUOTA: $27.75</span>
                      <span class="interes">(INTERÉS $2,75, CAPITAL $25)</span>
                    </div>
                    <div class="ejemplo">
                      <span class="cuota">SEGUNDA CUOTA: $27,52</span>
                      <span class="interes">(INTERÉS $2,52, CAPITAL $25)</span>
                    </div>
                    <div class="ejemplo">
                      <span class="cuota">TERCERA CUOTA: $27.29</span>
                      <span class="interes">(INTERÉS $2,29, CAPITAL $25)</span>
                    </div>
                  </div>
                  <h5>EL CIUDADANO TERMINA PAGANDO:</h5>
                  <h6>$317,88</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <footerPage />
      </section>
    </section>
  </template>
  
  <script>
  import calculadora from "~/components/calculadora";
  import footerPage from "~/components/footer";
  import calculadoras from "~/apollo/queries/calculadora/calculadoras";
  export default {
    components: {
      footerPage,
      calculadora
    },
    data() {
      return {
        selected: null,
        loading: true,
        calculadoras: []
      };
    },
    methods: {
      mostrarResultados() {
        this.resultados_proyectos = true;
      },
      sendGAEvent(link, label) {
        this.$ga.event({
          eventCategory: "calculadora",
          eventAction: "abrir",
          eventLabel: label
        });
        window.open(link, "_blank");
      }
    },
  
    apollo: {
      calculadoras: {
        prefetch: true,
        query: calculadoras,
        result({ data, loading, networkStatus }) {
          const infoReady = data && networkStatus === 7;
          if (infoReady) {
            this.loading = false;
            // console.log(data);
            this.calculadoras = data.calculadoras;
          }
        },
        variables() {
          // return { id: this.categoria.id };
        }
      }
    }
  };
  </script>
  
  <style scoped>
.select-h{
    height: 32px;
}
  .vrigth{
    text-align: right;    
  }
  .banner {
    width: 100%;
  }
  .banner img {
    width: 100%;
  }
  #header,
  #header-1 {
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
  #header-1 h2 {
    text-align: center;
    color: white;
    font-size: 36px;
    font-weight: bold;
    margin: 0;
  }
  #header-1 h3 {
    text-align: center;
    color: white;
    font-size: 28px;
    font-weight: lighter;
    margin: 0;
  }
  .calculadoras h3 {
    text-align: center;
    margin: 30px 0 10px 0;
    font-weight: lighter;
    font-style: italic;
    color: #5e5e5e;
  }
  .calculadoras h4 {
    text-align: center;
    font-size: 26px;
    font-weight: normal;
    color: #5e5e5e;
    margin: 0 0 30px 0;
  }
  .calculadora-item {
    padding: 20px 30px;
  }
  .logo-banco img {
    width: auto;
    height: 65px;
  }
  .logo-banco {
    text-align: center;
  }
  .calculadora-item span {
    text-align: center;
    display: block;
    margin: 10px 0 60px 0;
  }
  .header-prestamo {
    background: rgb(247, 99, 46);
    background: radial-gradient(
      circle,
      rgba(247, 99, 46, 1) 0%,
      rgba(181, 34, 34, 1) 100%
    );
    margin-top: 40px;
    padding: 15px 20px;
    color: white;
  }
  .header-prestamo h6 {
    text-align: center;
    font-weight: lighter;
    font-size: 20px;
  }
  .header-prestamo h6 strong {
    font-size: 32px;
    font-weight: bold;
  }
  .sub-prestamo {
    background: rgb(247, 99, 46);
    background: radial-gradient(
      circle,
      rgba(247, 99, 46, 1) 0%,
      rgba(181, 34, 34, 1) 100%
    );
    margin-top: 40px;
    padding: 15px 20px;
    color: white;
    display: flex;
  }
  .prestamos {
    padding: 40px 0;
  }
  .prestamo-title {
    display: block;
    font-weight: bold;
    font-size: 24px;
  }
  .col-prestamos {
    width: 33%;
    text-align: center;
  }
  .prestamos-sub {
    font-size: 30px;
    font-weight: lighter;
  }
  .contenido-prestamo {
    border: 1px dashed black;
    margin: 30px;
    padding: 30px;
    min-height: 300px;
  }
  .contenido-prestamo p {
    text-align: center;
    font-size: 22px;
  }
  h4 {
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    display: block;
  }
  .ejemplo-container {
    background: rgb(247, 99, 46);
    background: radial-gradient(
      circle,
      rgba(247, 99, 46, 1) 0%,
      rgba(181, 34, 34, 1) 100%
    );
    margin-top: 40px;
    padding: 15px 20px;
    color: white;
    text-align: center;
  }
  .ejemplo-container .cuota {
    font-weight: bold;
    font-size: 26px;
    display: block;
  }
  .ejemplo-container .interes {
    font-size: 26px;
    font-weight: lighter;
  }
  .ejemplo {
    margin: 20px 0;
  }
  h5 {
    text-align: center;
    display: block;
    font-size: 26px;
    margin: 25px 0 0 0;
    color: #5e5e5e;
  }
  h6 {
    text-align: center;
    display: block;
    font-size: 36px;
    margin: 0;
    color: #aa381a;
    font-weight: bold;
  }
  .header-prestamo h6 {
    color: white !important;
  }
  .calcualdora-link {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    .logo-banco img {
      height: 53px;
    }
    #header h1 {
      font-size: 22px;
    }
    #header h2 {
      font-size: 20px;
    }
    .calculadoras h3 {
      font-size: 18px;
    }
    .calculadoras h4 {
      font-size: 16px;
    }
    #header-1 h2 {
      font-size: 18px;
    }
    #header-1 h3 {
      font-size: 20px;
    }
    .prestamos h4 {
      font-size: 20px !important;
    }
    .header-prestamo h6 {
      color: white !important;
    }
    .prestamo-title {
      font-size: 22px;
    }
    .prestamos-sub {
      font-size: 20px;
    }
    .ejemplo-container .cuota {
      font-size: 20px;
    }
    .ejemplo-container .interes {
      font-size: 18px;
    }
    .calculadora-item {
      padding: 10px 30px;
    }
  }
  </style>
  