<template>
  <div>
    <ul class="nav-list">
      <li class="nav-item">
        <nuxt-link to="/">ENCUENTRA LA CASA DE TUS SUEÑOS</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/calculadorafinanciera"
          >CALCULADORA DE CRÉDITO</nuxt-link
        >
      </li>
      <li class="nav-item">
        <nuxt-link to="/insumos">MATERIALES PARA LA REMODELACIÓN</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/quienes_somos">QUIENES SOMOS</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/blog">BLOG Y NOTICIAS</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-item {
  margin: 0 10px;
}
.nav-item a {
  text-decoration: none;
  color: #aa381a;
  border: 1px solid #aa381a;
  padding: 2px 10px;
  border-radius: 8px;
  font-size: 13px;
}
.nav-item a:hover,
.nav-item a:active {
  color: #b65e48;
}

@media (max-width: 767px) {
  .nav-list {
    display: block;
    text-align: center;
  }
  .nav-item {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  #social_links {
    display: flex;
  }
  .nav-item a {
    border: none;
  }
}
@media (min-width: 768px) {
  .nav-list {
    display: inline-flex;
  }
  #social_links {
    display: inline-flex;
  }
}
</style>
