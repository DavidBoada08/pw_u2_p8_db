import axios from 'axios';


const consultarRespuesta = async () => {
   const respuesta = axios.get('https://yesno.wtf/api')
        .then(rpt =>rpt.data);
        return respuesta;
}

//funcion fachada
export const consultarRespuestaFachada = async () => {
   return await consultarRespuesta()
}