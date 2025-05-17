<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

  
    
    <EstudianteTablaView />
  </div>
</template>

<script>
import HolaMundoVue from "@/view/HolaMundoVue.vue";
import ContadorView from "@/view/ContadorView.vue";
import EstudianteTablaView from "@/view/EstudianteTablaView.vue";

export default {
  name: "App",
  components: {
    HolaMundoVue,
    ContadorView,
    EstudianteTablaView,
  },
};
</script>

<style>
</style>
