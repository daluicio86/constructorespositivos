<template>
    <div>
        <div class="calcular">
            <h1 class="title">CALCULADORA</h1>
            <form action class="form" @submit.prevent="contact">  
                <div class="row vrigth">
                    <div class="col-sm-5">
                        <label class="form-label" for="#name"><b>Valor Vivienda: </b></label>
                        <input
                            v-model="name"
                            class="form-input vrigth"
                            type="number"
                            id="name"
                            required
                            placeholder="0"
                        />
                    </div>
                    <div class="col-sm-2">
                        <label class="form-label" for="#email"><b>Plazo: </b></label>
                        <select v-model="selected" id="tiempo" class="form-input select-h" placeholder="Seleccionar...">
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
                            v-model="name"
                            class="form-input vrigth"
                            type="number"
                            id="min5Entrada"
                            required
                            placeholder="0"
                        />
                        <br/>
                        <label class="form-label" for="#vVivienda"><b>Valor de la vivienda: </b></label>
                        <input
                            v-model="name"
                            class="form-input vrigth"
                            type="number"
                            id="vVivienda"
                            required
                            placeholder="0"
                        />
                        <br/>
                        <label class="form-label" for="#entrada5"><b>Entrada 5%: </b></label>
                        <input
                            v-model="name"
                            class="form-input vrigth"
                            type="number"
                            id="entrada5"
                            required
                            placeholder="0"
                        />
                        <br/>
                        <label class="form-label" for="#mCredito"><b>Monto del crédito: </b></label>
                        <input
                            v-model="name"
                            class="form-input vrigth"
                            type="number"
                            id="mCredito"
                            required
                            placeholder="0"
                        />
                        <br/>
                        <label class="form-label" for="#pMeses"><b>Plazo en meses: </b></label>
                        <input
                            v-model="name"
                            class="form-input vrigth"
                            type="number"
                            id="pMeses"
                            required
                            placeholder="0"
                        />
                        <br/>
                        <label class="form-label" for="#tInteres"><b>Tasa de interés efectiva: </b></label>
                        <input
                            v-model="name"
                            class="form-input vrigth"
                            type="number"
                            id="tInteres"
                            required
                            placeholder="0"
                        />
                    </div>                        
                    <div class="col-sm-6 vrigth">
                            <h5 class="title">CRÉDITO PROMEDIO DEL MERCADO ACTUAL</h5>
                            <br/>
                            <label class="form-label" for="#min25-entrada"><b>Entrada mínima del 25%: </b></label>
                            <input
                                v-model="name"
                                class="form-input vrigth"
                                type="number"
                                id="min25-entrada"
                                required
                                placeholder="0"
                            />
                            <br/>
                            <label class="form-label" for="#min25-entrada"><b>Valor de la vivienda: </b></label>
                            <input
                                v-model="name"
                                class="form-input vrigth"
                                type="number"
                                id="min25-entrada"
                                required
                                placeholder="0"
                            />
                            <br/>
                            <label class="form-label" for="#min25-entrada"><b>Entrada 25%: </b></label>
                            <input
                                v-model="name"
                                class="form-input vrigth"
                                type="number"
                                id="min25-entrada"
                                required
                                placeholder="0"
                            />
                            <br/>
                            <label class="form-label" for="#min25-entrada"><b>Monto del crédito: </b></label>
                            <input
                                v-model="name"
                                class="form-input vrigth"
                                type="number"
                                id="min25-entrada"
                                required
                                placeholder="0"
                            />
                            <br/>
                            <label class="form-label" for="#min25-entrada"><b>Plazo en meses: </b></label>
                            <input
                                v-model="name"
                                class="form-input vrigth"
                                type="number"
                                id="min25-entrada"
                                required
                                placeholder="0"
                            />
                            <br/>
                            <label class="form-label" for="#min25-entrada"><b>Tasa de interés efectiva: </b></label>
                            <input
                                v-model="name"
                                class="form-input vrigth"
                                type="number"
                                id="min25-entrada"
                                required
                                placeholder="0"
                            />                                                                                                                                            
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
    // data(){
    //     return  {
    //         min5Entrada:'', 
    //         vVivienda:'',
    //         entrada5:'',
    //         mCredito:'',
    //         pMeses:'',
    //         tInteres:'',


    //         mes:'',
    //         saldoCapital:'',
    //         pagoCapital:'',
    //         pagoInteres:'',
    //         cuota:''
    //     }
    // }
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
  