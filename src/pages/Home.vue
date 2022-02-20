<template>
  <div>
    <top-bar></top-bar>
    <hero></hero>
    <about></about>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TopBar from "components/TopBar.vue";
import Hero from "components/Hero.vue";
import About from "components/About.vue";

export default defineComponent({
  name: "Home",
  components: {
    TopBar,
    Hero,
    About,
  },
});
</script>
