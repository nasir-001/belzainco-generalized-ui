<template>
  <div>
    <top-bar></top-bar>
    <hero></hero>
    <about></about>
    <services></services>
    <big-image></big-image>
    <products></products>
    <images></images>
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
  },
});
</script>
