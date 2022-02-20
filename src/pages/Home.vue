<template>
  <div>
    <top-bar></top-bar>
    <hero></hero>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TopBar from "components/TopBar.vue";
import Hero from "components/Hero.vue";

export default defineComponent({
  name: "Home",
  components: {
    TopBar,
    Hero,
  },
});
</script>
