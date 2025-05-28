import axios from 'axios';

// Recibe el ID del Digimon como parámetro
const consultarDigimon = async (digimonId) => {
  const respuesta = await axios
    .get(`https://digi-api.com/api/v1/digimon/${digimonId}`)
    .then(rpt => rpt.data);
  return respuesta;
};

// La fachada también recibe el ID y lo pasa a la función principal
export const consultarDigimonFachada = async (digimonId) => {
  return await consultarDigimon(digimonId);
};