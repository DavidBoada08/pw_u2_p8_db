<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

  
    
    <EstudianteView />
  </div>
</template>

<script>
import HolaMundoVue from "@/view/HolaMundoVue.vue";
import ContadorView from "@/view/ContadorView.vue";
import EstudianteView from "@/view/EstudianteView.vue";

export default {
  name: "App",
  components: {
    HolaMundoVue,
    ContadorView,
    EstudianteView,
  },
};
</script>

<style>
</style>
