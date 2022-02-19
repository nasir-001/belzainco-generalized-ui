<template>
  <div>
    <top-bar></top-bar>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TopBar from "components/TopBar.vue";

export default defineComponent({
  name: "Home",
  components: {
    TopBar,
  },
});
</script>
