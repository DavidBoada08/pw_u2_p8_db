<template>
<div>

  
    <PreguntaView/>
   
  </div>
</template>

<script>
import HolaMundoVue from "@/view/HolaMundoVue.vue";
import ContadorView from "@/view/ContadorView.vue";
import EstudianteTablaView from "@/view/EstudianteTablaView.vue";
import PreguntaView from "@/view/PreguntaView.vue";

export default {
  name: "App",
  components: {
    HolaMundoVue,
    ContadorView,
    EstudianteTablaView,
    PreguntaView,
  },
};
</script>

<style>
</style>
