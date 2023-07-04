<template>
    <div>
        <div class="calcular">
            <h1 class="title">CALCULADORA</h1>
            <form action class="form" @submit.prevent="contact">  
                <div class="row vrigth">
                    <!--<div class="col-sm-4">
                        <label class="form-label" for="#tipo"><b>Sistema de amortización: </b></label>
                        <select v-model="tipo" id="tipo" class="form-input select-h" placeholder="Seleccionar...">
                            <option value="f" selected>Francés</option>
                            <option value="a">Alemán</option>
                        </select>
                    </div>-->             
                    <div class="col-sm-4">
                        <label class="form-label" for="#vInicial"><b>Valor Vivienda: </b></label>
                        <input
                            v-model="vInicial"
                            class="form-input vrigth"
                            type="number"
                            id="vInicial"
                            required
                            placeholder="0"
                            @change="calculaEntrada"
                        />
                    </div>
                    <div class="col-sm-2">
                        <label class="form-label" for="#tiempo"><b>Plazo: </b></label>
                        <select v-model="tiempo" id="tiempo" class="form-input select-h" placeholder="Seleccionar...">
                            <option value="240" selected>20 años</option>
                            <option value="300">25 años</option>
                        </select>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-4 vrigth">                
                        <input class="form-submit" type="submit" value="Calcular" />
                    </div>
                </div>                
            </form>

            <br/>
            <form action class="form" @submit.prevent="credito">  
                <div class="row">
                    <div class="col-sm-5 vrigth">
                        <h5>CRÉDITO CASA PARA TODOS</h5>
                        <br/>
                        <label class="form-label" for="#min5Entrada"><b>Entrada mínima del 5%: </b></label>
                        <input
                            v-model="min5Entrada"
                            class="form-input vrigth"
                            type="number"
                            id="min5Entrada"                            
                            placeholder="0"
                            readonly
                        />
                        <br/>
                        <label class="form-label" for="#vVivienda5"><b>Valor de la vivienda: </b></label>
                        <input
                            v-model="vVivienda5"
                            class="form-input vrigth"
                            type="number"
                            id="vVivienda5"                            
                            placeholder="0"
                            readonly
                        />
                        <br/>
                        <label class="form-label" for="#entrada5"><b>Entrada 5%: </b></label>
                        <input
                            v-model="entrada5"
                            class="form-input vrigth"
                            type="number"
                            id="entrada5"
                            readonly
                            placeholder="0"
                        />
                        <br/>
                        <label class="form-label" for="#mCredito5"><b>Monto del crédito: </b></label>
                        <input
                            v-model="mCredito5"
                            class="form-input vrigth"
                            type="number"
                            id="mCredito5"
                            readonly
                            placeholder="0"
                        />
                        <br/>
                        <label class="form-label" for="#pMeses5"><b>Plazo en meses: </b></label>
                        <input
                            v-model="pMeses5"
                            class="form-input vrigth"
                            type="number"
                            id="pMeses5"                            
                            placeholder="0"
                            readonly
                        />
                        <br/>
                        <label class="form-label" for="#tInteres5"><b>Tasa de interés efectiva: </b></label>
                        <input
                            v-model="tInteres5"
                            class="form-input vrigth"
                            type="text"
                            id="tInteres5"
                            readonly
                            placeholder="0"
                        />
                        <br/>
                        <label class="form-label" for="#cuota5"><b>Cuota mensual: </b></label>
                            <input
                                v-model="cuota5"
                                class="form-input vrigth"
                                type="number"
                                id="cuota5"                                
                                placeholder="0"
                                readonly
                            />
                            <br/>                           
                    </div>                        
                    <div class="col-sm-6 vrigth">
                            <h5 class="title">CRÉDITO PROMEDIO DEL MERCADO ACTUAL</h5>
                            <br/>
                            <label class="form-label" for="#min25Entrada"><b>Entrada mínima del 25%: </b></label>
                            <input
                                v-model="min25Entrada"
                                class="form-input vrigth"
                                type="number"
                                id="min25Entrada"
                                readonly
                                placeholder="0"
                            />
                            <br/>
                            <label class="form-label" for="#vVivienda25"><b>Valor de la vivienda: </b></label>
                            <input
                                v-model="vVivienda25"
                                class="form-input vrigth"
                                type="number"
                                id="vVivienda25"
                                readonly
                                placeholder="0"
                            />
                            <br/>
                            <label class="form-label" for="#entrada25"><b>Entrada 25%: </b></label>
                            <input
                                v-model="entrada25"
                                class="form-input vrigth"
                                type="number"
                                id="entrada25"
                                readonly
                                placeholder="0"
                            />
                            <br/>
                            <label class="form-label" for="#mCredito25"><b>Monto del crédito: </b></label>
                            <input
                                v-model="mCredito25"
                                class="form-input vrigth"
                                type="number"
                                id="mCredito25"
                                readonly
                                placeholder="0"
                            />
                            <br/>
                            <label class="form-label" for="#pMeses25"><b>Plazo en meses: </b></label>
                            <input
                                v-model="pMeses25"
                                class="form-input vrigth"
                                type="number"
                                id="pMeses25"                                
                                placeholder="0"
                                readonly
                            />
                            <br/>
                            <label class="form-label" for="#tInteres25"><b>Tasa de interés efectiva: </b></label>
                            <input
                                v-model="tInteres25"
                                class="form-input vrigth"
                                type="text"
                                id="tInteres25"
                                readonly
                                placeholder="0"
                            />    
                            <br/>        
                            <label class="form-label" for="#cuota25"><b>Cuota mensual: </b></label>
                            <input
                                v-model="cuota25"
                                class="form-input vrigth"
                                type="number"
                                id="cuota25"                                
                                placeholder="0"
                                readonly
                            />
                            <br/>                                                                                                                                
                    </div>                        
                </div>
                <br/>     
                <div class="row">
                    <div class="col-sm-6 vrigth">
                        <h5>Tabla de amortización de crédito hipotecario 'Casa para Todos'</h5>
                        <br/>
                        <table class="vtable border">
                            <thead>
                                <tr class="border">
                                    <th class="border">Mes</th>
                                    <th class="border">Saldo Capital</th>
                                    <th class="border">Pago Capital</th>
                                    <th class="border">Pago Interes</th>
                                    <th class="border">Cuota</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border">
                                    <td class="border">1</td>
                                    <td class="border">10</td>
                                    <td class="border">10</td>
                                    <td class="border">15</td>
                                    <td class="border">20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-sm-6 vrigth">
                        <h5>Tabla de amortización de créditos hipotecarios en mercado actual</h5>
                        <br/>
                        <table class="vtable border">
                            <thead>
                                <tr>
                                    <th class="border">Mes</th>
                                    <th class="border">Saldo Capital</th>
                                    <th class="border">Pago Capital</th>
                                    <th class="border">Pago Interes</th>
                                    <th class="border">Cuota</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border">
                                    <td class="border">1</td>
                                    <td class="border">10</td>
                                    <td class="border">10</td>
                                    <td class="border">15</td>
                                    <td class="border">20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>      
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        vInicial: !Number,
        tiempo: !Number,
        min5Entrada: !Number,
        min25Entrada: !Number,
        vVivienda5: !Number,
        vVivienda25: !Number,
        entrada5: !Number,
        entrada25: !Number,
        mCredito5: !Number,
        mCredito25: !Number,
        pMeses5: !Number,
        pMeses25: !Number,
        tInteres5:!String,
        tInteres25:!String,
        cuota5:!String,
        cuota25:!String,
  },
    data(){
        return  {
    
        }
    },
    methods: {
        calculaEntrada(){
            this.min5Entrada = this.vInicial*5/100;
            this.min25Entrada = this.vInicial*25/100;

            this.vVivienda5 = this.vInicial;
            this.vVivienda25 = this.vInicial;

            this.entrada5 = this.vInicial*5/100;
            this.entrada25 = this.vInicial*25/100;

            this.mCredito5 = this.vInicial-this.entrada5;
            this.mCredito25 = this.vInicial-this.entrada25;   

            this.tInteres5 = '4.99 %';
            this.tInteres25 = '10.14 % Fuente:Banco Central del Ecuador';

            this.cuota5 = 0.62;
            this.cuota25 = 0.71;
            

        }
    }
};
</script>

<style scoped>
.select-h{
    height: 32px;
}
.vtable{
    text-align: center;
    width: 100%;
    border: #5e5e5e;
    border-collapse: collapse !important;
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
  