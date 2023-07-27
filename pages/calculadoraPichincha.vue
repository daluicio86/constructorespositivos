<template>
    <section class="cont">
        <b-modal id="modal-vip" hide-footer>
            <template #modal-title>
                Vivienda nueva o usada
            </template>
            <div class="d-block">
            <p>
                Para ecuatorianos o extranjeros que trabajen al menos 5 años en el país que deseen comprar una casa o departamento ya sea nuevo o usado.
            </p>
            <p>· El valor mínimo de la vivienda debe ser $15.000.</p>
            <p>· Te financiamos hasta el 80% del valor de la vivienda que deseas adquirir incluido gastos legales, avalúos y tributo SOLCA.</p>
            <p>· El monto mínimo del préstamo debe ser de $3.000.</p>
            <p>· Tasa de interés anual referencial de 9,45%.</p>
            <p>· Plazo de pago de 3 a 20 años.</p>
            <p>Aplican condiciones*</p>
            </div>
            <b-button class="mt-3 primary" block @click="$bvModal.hide('modal-vip')">Cerrar</b-button>
        </b-modal>        

        <b-modal id="modal-vis" hide-footer>
            <template #modal-title>
                Vivienda de Interés Público y Social (VIP y VIS)
            </template>
            <div class="d-block">
            <p>
                Créditos destinados a la compra de tu primera vivienda.
            </p>
            <p>· Aplica para viviendas nuevas, no para viviendas usadas.</p>
            <p>· El ingreso mensual del solicitante no debe superar los $2.853,00. En caso solicite con su cónyuge, los ingresos mensuales combinados no deberán superar dicho monto.</p>
            <p>· La vivienda debe calificar como Vivienda de Interés Público (VIP) o de Interés Social (VIS).</p>
            <p>· El valor de la vivienda a financiar debe estar entre los $25.906,50 y los $102.789,00.</p>
            <p>· El área mínima de la vivienda debe ser 57m2.</p>
            <p>· El valor del m2 debe ser menor a $1.120,50.</p>
            <p>· Te financiamos hasta el 100% del valor de la vivienda que deseas adquirir, incluido gastos legales, avalúos y tributo SOLCA.</p>
            <p>· Tasa especial de interés anual referencial de 4,87%.</p>
            <p>· Plazo de pago de 20 a 25 años.</p>
            <p>Aplican condiciones*</p>
            </div>
            <b-button class="mt-3 primary" block @click="$bvModal.hide('modal-vis')">Cerrar</b-button>
        </b-modal>                


      <div class="banner">
        <img src="../assets/images/banner1.jpg" />
      </div>
      <div id="header">
        <h1>TODA LA INFORMACIÓN QUE NECESITAS</h1>
        <h2>PARA TENER TU VIVIENDA</h2>
      </div>
      <div v-if="!loading" class="container calculadoras">
        <!-- Start calculadora -->
        <div class="row ">
          <div class="col-sm-12">
            <h3>CALCULA TU CUOTA MENSUAL</h3>
            <h4>
              <strong>Elige el tipo de crédito que se ajusta a tus necesidades</strong>
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm col-md-5 npanel">
              <p class="center"><strong>Vivienda nueva o usada</strong></p>
              <p>Para que adquieras la casa o departamento que deseas. Tasa de interés referencial 9,45%</p>
              <div class="center"><a href="#" @click="$bvModal.show('modal-vip')">VER MÁS</a></div>              
          </div>
          <div class="col-sm col-md-1 minh"></div>
          <div class="col-sm col-md-5 npanel">
            <p class="center"><strong>Vivienda de interés público y social</strong></p>
              <p>Para que adquieras tu primera vivienda de hasta $102.789,00. Tasa de interés referencial 4,87%</p>
              <div class="center"><a href="#" @click="$bvModal.show('modal-vis')">VER MÁS</a></div>    
          </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-sm-4 center">
                <label class="form-mlabel"><b>¿Cuánto cuesta la vivienda que deseas comprar? </b></label>
                <br>
                <input
                    class="form-input"
                    type="number"
                    id="min25Entrada"
                    readonly
                    placeholder="0"
                />
            </div>
            <div class="col-sm-5 center">
                <label class="form-mlabel"><b>¿Cuánto dinero necesitas que te prestemos? </b>             
                    <a class="information" v-b-tooltip.hover title="Te financiamos hasta el 80% del valor de la vivienda que deseas adquirir incluido gastos legales, avalúos y contribución SOLCA.">
                        <font-awesome-icon :icon="['fas', 'info']"/></a></label>
                <br>
                <input
                    class="form-input"
                    type="number"
                    id="min25Entrada"
                    readonly
                    placeholder="0"
                />                
            </div>
            <div class="col-sm-3 center">
            <div class="form-mlabel">Plazo de pago: {{ plazoPagos }} años.</div>
            <range-slider
              class="slider"
              min="0"
              max="20"
              step="1"
              v-model="plazoPagos"
            >
            </range-slider>
          </div>        
        </div>
        <br/>
        <div class="row">
            <div class="col-sm col-md-12">
                <h1 class="center">Tu pago mensual sería:</h1>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-sm col-md-2 center">
                <label class="form-vlabel">$0</label><br>                
                <label class="form-mslabel">Capital + interés</label>
            </div>
            <div class="col-sm col-md-1"><h5>+</h5></div>
            <div class="col-sm col-md-2 center">
                <label class="form-vlabel">$0</label><br>     
                <label class="form-mslabel">Seguro de desgravamen</label>
            </div>
            <div class="col-sm col-md-1"><h5>+</h5></div>
            <div class="col-sm col-md-3 center">
                <label class="form-vlabel">$0</label><br>     
                <label class="form-mslabel">Seguro contra incendio y terremotos</label>
            </div>
            <div class="col-sm col-md-1"><h5>=</h5></div>
            <div class="col-sm col-md-2 center">
                <label class="form-vlabel">$0</label><br>     
                <label class="form-mslabel">Cuota mensual</label>
            </div>
        </div>    
        <br/>    
        <div class="row">
            <div class="col-sm col-md-12 center">
                <span class="texto-f">El cálculo de la cuota está basado en el sistema de amortización francés e incluye gastos legales, de avalúo, contribución SOLCA, seguro de desgravamen y seguro contra incendio y terremoto. Los resultados de esta simulación son referenciales, por tanto, no constituyen una pre-aprobación del crédito ni otorgamiento del mismo por parte de Banco Pichincha.</span>
            </div>
        </div>
        <br/>
        <hr/>
        <br/>
        <div class="row">
            <div class="col-sm col-md-12 center">
                <h2>Haz realidad el sueño de tu hogar con Banco Pichincha</h2>
            </div>
            <div class="col-sm col-md-12 center">
                <a href="https://creditohipotecario.pichincha.com/login/plusvalia?utm_source=plusvalia&utm_medium=calculator&utm_campaign=plusvalia_integration" class="btn-ph" target="_blank">Empieza Ahora</a>
            </div>
        </div>
      </div>
  
      <div id="header-1">
        <h2>Por qué elegir Banco Pichincha</h2>
      </div>
      <div class="container prestamos">
        <div class="row">
            <div class="col-sm col-md-3 center">
                <a class="icon-f"><font-awesome-icon :icon="['fas', 'info']"/></a>                
                <p><strong>Proceso ágil</strong></p>
                <p>Precalifica y solicita tu crédito de manera simple y rápida</p>
            </div>
            <div class="col-sm col-md-3 center">
                <a class="icon-f"><font-awesome-icon :icon="['fas', 'info']"/></a>
                <p><strong>Estarás acompañado</strong></p>
                <p>Contarás con la asesoría personalizada de un equipo de especialistas</p>
            </div>
            <div class="col-sm col-md-3 center">
                <a class="icon-f"><font-awesome-icon :icon="['fas', 'info']"/></a>
                <p><strong>Monitorea el avance</strong></p>
                <p>Se te informará en todo momento del progreso de tu solicitud</p>
            </div>
            <div class="col-sm col-md-3 center">
                <a class="icon-f"><font-awesome-icon :icon="['fas', 'info']"/></a>
                <p><strong>Flexibilidad para pagar</strong></p>
                <p>Podrás realizar abonos y pre-cancelaciones sin recargo</p>
            </div>
        </div>                    
        <br/>
        <div class="row">
            <div class="col-sm col-md-5 marginp1">
                <img src="../assets/images/pinchCalc.png" width="100%">
            </div>
            <div class="col-sm col-md-1"></div>
            <div class="col-sm col-md-5">
                <div class="row">
                    <div class="col-sm col-md-12 marginp1">
                        <span class="texto-f">Con el financiamiento de</span>
                        <br/>
                        <img src="../assets/images/pichincha.svg">
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm col-md-12 center">
                        <p><strong>El viaje al sueño de tu hogar en 5 pasos</strong></p>
                    </div>
                    <div class="col-sm col-md-12">
                        <div class="accordion" role="tablist">
                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-1 variant="default">1. Infórmate y toma las mejores decisiones</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>En nuestra guía podrás encontrar lo que necesitas saber para adquirir tu casa con Banco Pichincha. Si tienes alguna duda, te contactamos para resolverlas.</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-2 variant="default">2. Simula lo que pagarías mensualmente</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-card-text>Hazte una idea aproximada de la cuota mensual que podrías pagar con nuestra calculadora.</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-3 variant="default">3. Precalifica y solicita tu crédito</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-card-text>Descubre lo podrías pedir prestado e inicia el camino a tu sueño. Buscaremos que el crédito se ajuste a tus necesidades y te ayudaremos durante el proceso de aprobación.</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-4 variant="default">4. Obtén el financiamiento y déjanos lo demás a nosotros</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-card-text>¡Trabajamos para ti! Una vez aprobado tu crédito, un equipo de especialistas te ayudará con el trámite de adquisición de tu casa.</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>

                            <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-5 variant="default">5. Firma y disfruta</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                <b-card-text>Finalmente, acércate a firmar y comienza a disfrutar de tu nuevo hogar.</b-card-text>
                                </b-card-body>
                            </b-collapse>
                            </b-card>
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
  import footerPage from "~/components/footer";
  import calculadoras from "~/apollo/queries/calculadora/calculadoras";
  import RangeSlider from "vue-range-slider";
// you probably need to import built-in style
import "vue-range-slider/dist/vue-range-slider.css";
  export default {
    components: {
      footerPage,
      RangeSlider
    },
    data() {
      return {
        selected: null,
        loading: true,
        calculadoras: [],

        plazoPagos: 3, 
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
  .banner {
    width: 100%;
  }
  .banner img {
    width: 100%;
  }
  .center{
    text-align: center;
  }
  .minh{
    min-height: 10px;
  }
  .icon-f{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #F4F6F9;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    margin-left: 110px;
  }
  .information{
  color: #aa381a;
  font-size: 15px;
  border-radius: 50%;
  border: 1px solid #aa381a;
  padding: 2px 6px;
  }
  .marginp1{
    margin: 10px;
  }
  .npanel{
    border: 1px solid #5e5e5e;
    margin: 10px;
    border-radius: 5px;
    padding-top: 5px;
  }
  .texto-f{
    margin: 0;
    font-family: Prelo;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
    color: #6E6E73;
    text-align: center;
    font-size: 14px;
  }

  .btn-ph{
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: inherit;
    font-family: Prelo;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    text-transform: uppercase;
    min-width: 64px;
    padding: 6px 16px;
    border-radius: 4px;
    -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: #fff;
    background-color: #0F265C;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    box-shadow: none;
    font-family: Prelo-SemiBold;
    background-color: #FFDD00;
    color: #0F265C;
    text-transform: none;    
  }

  .form-vlabel{
    margin: 0;
    font-family: Prelo-Slab-SemiBold;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #0F265C;
    font-weight: 400;
  }
  .form-mslabel{
    margin: 0;
    font-family: Prelo;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
    font-size: 14px;
    font-weight: 700;
  }
  .form-mlabel{
    margin: 0;
    font-family: Prelo;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
    font-size: 16px;
    font-weight: 700;
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

    .icon-f{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #F4F6F9;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    margin-left: 170px;
  }
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
  