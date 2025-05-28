<template>
  <div class="digimon">
    <h1>Busca tu Digimon</h1>
    <p>Utiliza el buscador para encontrar un Digimon .</p>
    <input type="number" v-model="digimonId" placeholder="Ej: 1" />
    <button @click="cosumirApi">Buscar</button>

    <div class="digiRes" v-if="digimonData">
      <h2>{{ digimonData.name }}</h2>
      <img class="imgDigimon"
        :src="digimonData.images[0].href"
        :alt="digimonData.name"
      />
    </div>
  
  </div>
</template>

<script>
import { consultarDigimonFachada } from "@/clients/Digimon.js";
export default {
  data() {
    return {
      digimonId: "",
      digimonData: null,
     
    };
  },
  methods: {
    async cosumirApi() {
      
      this.digimonData = null;
      if (!this.digimonId) {
        this.error = "Por favor ingresa un ID de Digimon.";
        return;
      }
      const data = await consultarDigimonFachada(this.digimonId);
      if (data && data.name) {
        this.digimonData = data;
      } else {
        this.error =
          "No se encontró el Digimon o hubo un error en la consulta.";
      }
    },
  },
};
</script>

<style>
.digimon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 36px 28px;
  margin: 40px auto;
  max-width: 420px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
input {
  width: 10%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  margin-bottom: 16px;
  text-align: center;
}
.digiRes {
  text-align: center;
  margin-top: 20px;
  background: rgb(245, 227, 227);
}

button {
  background: #4e91f9;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  width: 200px;
}
.imgDigimon {
  width: 350px;
  height: 350px;
  border-radius: 90px;
  margin-top: 10px;
}
h1 {
  color: #4e91f9;
  font-size: 24px;
  margin-bottom: 10px;
}
p {
  color: #333;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
}
</style>