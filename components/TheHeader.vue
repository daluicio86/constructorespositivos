<template>
  <header>
    <div class="brand-name">
      <nuxt-link to="/">
        <!-- <img src="../assets/images/logo.png" /> -->
        <Logo />
        ></nuxt-link
      >
      <div id="social_links">
        <div class="social_link_header">
          <a
            href="https://www.facebook.com/constructurespositivosecuador"
            target="_blank"
            ><font-awesome-icon :icon="['fab', 'facebook']"
          /></a>
        </div>
        <div class="social_link_header">
          <a
            href="https://www.instagram.com/constructorespositivos/?igshid=q4jnx0yhs6yv"
            target="_blank"
            ><font-awesome-icon :icon="['fab', 'instagram']"
          /></a>
        </div>
        <div class="social_link_header">
          <a href="https://twitter.com/Construpositivo" target="_blank"
            ><font-awesome-icon :icon="['fab', 'twitter']"
          /></a>
        </div>
        <!-- <div class="social_link_header">
          <font-awesome-icon
            :icon="['fab', 'linkedin-in']"
            class="social_icon"
          />
        </div> -->
        <!-- <div class="social_link_header">
          <font-awesome-icon
            :icon="['fab', 'linkedin-in']"
            class="social_icon"
          />
        </div> -->
      </div>
    </div>

    <div
      class="drawer-toggle"
      role="button"
      @click="$store.dispatch('nav/toggleSidebar')"
    >
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div class="app-links">
      <app-links></app-links>
    </div>
  </header>
</template>

<script>
import AppLinks from "~/components/AppLinks";
import Logo from "~/components/Logo";
export default {
  components: { AppLinks, Logo }
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
  margin-bottom: 15px;
}
.app-links {
  justify-self: end;
}
.brand-name {
  margin: 10px 0 30px 0;
  font-size: 1.3rem;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.brand-name a {
  text-decoration: none;
  color: white;
  display: block;
  height: 61px;
}
.drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: black;
}
.drawer-toggle {
  display: flex;
  justify-self: end;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  padding-right: 16px;
  cursor: pointer;
}
.brand-name img {
  width: 100%;
  max-width: 300px;
}
#social_links {
  display: flex;
}
.social_link_header {
  margin: 0 8px;
  color: #b65e48;
}
.social_link_header a {
  color: #b65e48 !important;
}
@media (max-width: 1199px) {
  header {
    padding: 0 16px;
  }
  header:nth-child {
    justify-self: end !important;
  }
  .app-links {
    display: none;
  }
  .drawer-toggle .bar {
    margin: 2px 0px;
  }
}
@media (min-width: 1200px) {
  header {
    padding: 10px 64px;
  }
  .app-links {
    display: block;
  }
  .drawer-toggle {
    display: none;
  }
}
</style>
