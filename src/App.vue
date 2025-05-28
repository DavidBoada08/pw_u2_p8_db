<template>
<div>

  
    <DigimonView/>
   
  </div>
</template>

<script>
import HolaMundoVue from "@/view/HolaMundoVue.vue";
import ContadorView from "@/view/ContadorView.vue";
import EstudianteTablaView from "@/view/EstudianteTablaView.vue";
import PreguntaView from "@/view/PreguntaView.vue";
import DigimonView from "@/view/DigimonView.vue";    


export default {
  name: "App",
  components: {
    HolaMundoVue,
    ContadorView,
    EstudianteTablaView,
    PreguntaView,
    DigimonView,
  },
};
</script>

<style>
</style>
