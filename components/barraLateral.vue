<template>
       <li>
         <img :src="image_path" />
         <p class="datos_proyecto"><b>{{ nombre }}<br/>{{ cargo }}</b></p>
        </li>   
</template>

<!--<template>
  <div class="col-sm col-md-6 noti_card">

    <div class="foot_proyectos">
      <div class="row">
        <div class="col-sm">
          <div class="datos_proyecto">{{ nombre }}</div>
        </div>
      </div>
    </div>
  </div>
</template>-->

<script>
export default {
  props: {
    id: !String,
    nombre: !String,
    cargo: !String,
    foto: !String
  },
  data() {
    return {
      image_path: ""
    };
  },
  methods: {
  },  
  computed: {},
  created() {
    this.image_path = process.env.baseURL + this.foto;
  }
};
</script>

<style scoped>
img {
   width: 150px; 
   height:150px;
}
.noti_card{
   padding-top: 5px;
}
.title {
  font-size: 20px;
  color: #c65656;
  margin-bottom: 15px;
  margin-top: 15px;
}
.card_blog {
  margin-bottom: 50px;
}
a {
  color: #c65656;
  font-weight: bold;
  text-decoration: underline;
}
.title {
  text-align: center;
}
.foot_proyectos >>> h2 {
  font-size: 23px;
  color: #c65656;
  margin: 15px 0 0px 0;
  text-transform: uppercase;
  font-weight: bold;
}
.foot_proyectos >>> h3 {
  color: black;
  font-size: 25px;
  text-transform: uppercase;
}
.website {
  color: #c12e24;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  user-select: none;
}
.datos_proyecto {
   color: black;
   font-size: 14px;
}

</style>
