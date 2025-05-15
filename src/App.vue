<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <ContadorView />
  </div>
</template>

<script>
import HolaMundoVue from "@/view/HolaMundoVue.vue";
import ContadorView from "@/view/ContadorView.vue";

export default {
  name: "App",
  components: {
    HolaMundoVue,
    ContadorView,
  },
};
</script>

<style>
</style>
