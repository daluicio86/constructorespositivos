<template>
  <div>
    <footer>
      <div class="row">
        <div class="col-sm-4">
          <img src="../assets/images/footer_registra_proyecto.png" />
        </div>
        <div class="col-sm-4">
          <div class="row">
            <div class="col-sm-6">
              <nuxt-link to="/">LA CASA DE TUS SUEÑOS</nuxt-link>
              <nuxt-link to="/visyvip">PROYECTOS VIS Y VIP</nuxt-link>
              <nuxt-link to="/insumos">PROVEEDOR MATERIALES</nuxt-link>
              <nuxt-link to="/servicios">ESPECIALISTAS</nuxt-link>
            </div>
            <div class="col-sm-6">
              <nuxt-link to="/calculadora">CALCULADORA</nuxt-link>
              <nuxt-link to="/quienes_somos">QUIENES SOMOS</nuxt-link>
              <nuxt-link to="/blog">BLOG</nuxt-link>
              <!-- <nuxt-link to="/">CONTÁCTANOS</nuxt-link> -->
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="social_links">
            <div class="social_link fb">
              <a
                href="https://www.facebook.com/constructurespositivosecuador"
                target="_blank"
                ><font-awesome-icon :icon="['fab', 'facebook']"
              /></a>
            </div>
            <div class="social_link ig">
              <a
                href="https://www.instagram.com/constructorespositivos/?igshid=q4jnx0yhs6yv"
                target="_blank"
                ><font-awesome-icon :icon="['fab', 'instagram']"
              /></a>
            </div>
            <div class="social_link twitter">
              <a href="https://twitter.com/Construpositivo" target="_blank"
                ><font-awesome-icon :icon="['fab', 'twitter']"
              /></a>
            </div>
            <!-- <div class="social_link linkedin">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </div> -->
          </div>
        </div>
      </div>
    </footer>
    <div class="copyright">CONSTRUCTORES POSITIVOS<br />2020</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  width: 100%;
  background: rgb(247, 99, 46);
  background: radial-gradient(
    circle,
    rgba(247, 99, 46, 1) 0%,
    rgba(181, 34, 34, 1) 100%
  );
  padding: 20px 80px;
}
footer img {
  width: 100%;
  max-width: 422px;
}
footer a {
  display: block;
  color: white;
  font-weight: bold;
}
.social_link {
  display: inline-block;
  margin: 0 10px;
  color: white;
}
.copyright {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 13px;
}
.social_link {
  font-size: 24px;
}
@media only screen and (max-width: 641px) {
  a {
    font-size: 14px;
    margin: 4px 0;
  }
}
</style>
