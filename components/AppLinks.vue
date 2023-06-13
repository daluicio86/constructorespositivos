<template>
  <div>
    <ul class="nav-list">
      <li class="nav-item">
        <nuxt-link to="/">LA CASA DE TUS SUEÑOS</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/visyvip">PROYECTOS VIS Y VIP</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/calculadorafinanciera">CALCULADORA</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/insumos">PROVEEDOR MATERIALES</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/servicios">ESPECIALISTAS</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/quienes_somos">QUIENES SOMOS</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/blog">BLOG</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/noticia">NOTICIAS</nuxt-link>
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
  margin: 0 5px;
}
.nav-item a {
  text-decoration: none;
  color: #aa381a;
  /* border: 1px solid #aa381a; */
  padding: 2px 5px;
  border-radius: 8px;
  font-size: 15px;
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
