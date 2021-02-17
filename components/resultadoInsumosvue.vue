<template>
  <div class="col-sm col-md-6 card_proyecto">
    <figure>
      <img src="../assets/images/edificio1.jpg" />
    </figure>
    <div class="foot_proyectos">
      <div class="title">{{ title }}</div>
      <div class="row">
        <div class="col-sm-8">
          <div class="datos_proyecto">PRECIOS DESDE LOS: {{ precio_min }}</div>
          <div class="datos_proyecto">{{ description }}</div>
          <div class="datos_proyecto">
            {{ amenities }}
          </div>
        </div>
        <div class="col-sm-4 items">
          <div class="item">
            <font-awesome-icon :icon="['fas', 'directions']" />
          </div>
          <div class="item info">
            <font-awesome-icon :icon="['fas', 'info']" />
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
    precio_min: !String,
    description: !String,
    amenities: !String
  }
};
</script>
<style scoped>
figure img {
  width: 100%;
}
.foot_proyectos {
  background: #aa381a;
  padding: 5px 20px 15px 20px;
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
</style>
