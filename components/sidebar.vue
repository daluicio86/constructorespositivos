<template>
<ssr-carousel show-arrows loop>
    <!--<div v-for="(item, index) in urls"  v-bind:key="index">
            <div :index=index>   <img :src="item" /></div>
     </div>-->
</ssr-carousel>

</template>

  <script>
  import SsrCarousel from 'vue-ssr-carousel'
  import ssrCarouselCss from 'vue-ssr-carousel/index.css'

  export default {
    props: {
        url: !String,
    },
    components: {
    SsrCarousel
  },    
  mounted() {

     console.log("www:"+this.url);
  }  
  };
  </script>