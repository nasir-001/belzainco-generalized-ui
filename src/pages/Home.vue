<template>
  <div>
    <top-bar id="home"></top-bar>
    <hero></hero>
    <about id="about"></about>
    <services></services>
    <big-image></big-image>
    <products id="products"></products>
    <images></images>
    <app-footer id="footer"></app-footer>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TopBar from "components/TopBar.vue";
import Hero from "components/Hero.vue";
import About from "components/About.vue";
import Services from "components/Services.vue";
import BigImage from "components/BigImage.vue";
import Products from "components/Products.vue";
import Images from "components/Images.vue";
import AppFooter from "components/AppFooter.vue";

export default defineComponent({
  name: "Home",
  components: {
    TopBar,
    Hero,
    About,
    Services,
    BigImage,
    Products,
    Images,
    AppFooter,
  },
});
</script>
