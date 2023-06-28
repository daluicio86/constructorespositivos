<template>
  <div>
    <b-navbar toggleable="lg" type="light">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/quienes_somos" >QUIENES SOMOS</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="LA CASA DE TUS SUEÑOS" >
          <b-dropdown-item href="/">LA CASA DE TUS SUEÑOS</b-dropdown-item>
          <b-dropdown-item href="/visyvip">PROYECTOS VIS Y VIP</b-dropdown-item>
        </b-nav-item-dropdown>
        <!--<b-nav-item-dropdown text="PROVEEDOR MATERIALES">
          <b-dropdown-item href="/insumos">PROVEEDOR MATERIALES</b-dropdown-item>
          <b-dropdown-item href="/calculadora">CALCULADORA</b-dropdown-item>
        </b-nav-item-dropdown>-->
      </b-navbar-nav>

      <b-navbar-nav>
        <b-nav-item href="/insumos">PROVEEDORES DE MATERIALES</b-nav-item>
        <b-nav-item href="/servicios">ESPECIALISTAS</b-nav-item>
        <b-nav-item href="/noticia">PRENSA</b-nav-item>
      </b-navbar-nav>      
    </b-collapse>
  </b-navbar>

   <!-- <ul class="nav-list">
      <li class="nav-item">
        <nuxt-link to="/quienes_somos">QUIENES SOMOS</nuxt-link>
      </li>      
      <li class="nav-item">
        <nuxt-link to="/">LA CASA DE TUS SUEÑOS</nuxt-link>
        <ul>
          <li>
            <nuxt-link to="/visyvip">PROYECTOS VIS Y VIP</nuxt-link>
          </li>
        </ul>
      </li>-->
      <!--<li class="nav-item">
        <nuxt-link to="/visyvip">PROYECTOS VIS Y VIP</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/calculadorafinanciera">CALCULADORA</nuxt-link>
      </li>-->
     <!-- <li class="nav-item">
        <nuxt-link to="/insumos">PROVEEDOR MATERIALES</nuxt-link>
        <ul>
          <li>
            <nuxt-link to="/calculadorafinanciera">CALCULADORA</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <nuxt-link to="/servicios">ESPECIALISTAS</nuxt-link>
      </li>-->
      <!--<li class="nav-item">
        <nuxt-link to="/blog">BLOG</nuxt-link>
      </li>-->
      <!--<<li class="nav-item">
        <nuxt-link to="/noticia">PRENSA</nuxt-link>
      </li>
    </ul>-->
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
  text-decoration: none;
  color: #aa381a;
  /* border: 1px solid #aa381a; */
  padding: 2px 5px;
  border-radius: 8px;
  font-size: 18px;
}
.nav-item a {
  text-decoration: none;
  color: #aa381a;
  /* border: 1px solid #aa381a; */
  padding: 2px 5px;
  border-radius: 8px;
  font-size: 18px;
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
