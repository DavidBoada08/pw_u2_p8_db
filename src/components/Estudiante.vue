<template>
    <div class="container">
        <label for="id_nombre">Nombre: </label>
        <input v-model="nuevoNombre" id="id_nombre" type="text" />
        <br>
        <label for="id_apellido">Apellido: </label>
        <input v-model="nuevoApellido" id="id_apellido" type="text" />
        <br>
        <label for="id_genero">Genero: </label>
        <input v-model="nuevoGenero" id="id_genero" type="text" />
        <br>
        <label for="id_edad">Edad: </label>
        <input v-model="nuevoEdad" id="id_edad" type="number" />
        <br>
        <label for="id_ciudad">Ciudad: </label>
        <input v-model="nuevoCiudad" id="id_ciudad" type="text" />
        <br>
        <label for="id_hobbie">Hobbie: </label>
        <input v-model="nuevoHobbie" id="id_hobbie" type="text" />
        <br>
        <button v-on:click="agregarEstudiante()">Agregar Estudiante</button>
        <br>
        <!-- {{nuevoNombre}} -->
            <ul>  <!-- segunda opcion usando destructuració -->
            <li v-for="{nombre, apellido, genero, edad, ciudad, hobbie}  in lista" :key="nombre">
                Nombre: {{nombre}} 
                - Apellido: {{apellido}}
                - Genero: {{genero}}
                - Edad: {{edad}}
                - Ciudad: {{ciudad}}
                - Hobbies: {{hobbie}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nuevoNombre: " ",
            lista:[
                {nombre: 'Manuel', apellido: 'Andrango', genero: 'M', edad: 29, ciudad: 'Quito', hobbie: 'Futbol'},
                {nombre: 'Clare', apellido: 'Boada', genero: 'M', edad: 28, ciudad: 'Ibarra', hobbie: 'Natación'},
                {nombre: 'Emilia', apellido: 'Boada', genero: 'F', edad: 25, ciudad: 'Quito', hobbie: 'Ciclismo'},
                {nombre: 'Johanna', apellido: 'Andrango', genero: 'M', edad: 22, ciudad: 'Latacunga', hobbie: 'Correr'},
                {nombre: 'Julieta', apellido: 'Aguacondo', genero: 'F', edad: 20, ciudad: 'Ambato', hobbie: 'Leer'},
            ],
        };
    },
    methods: {
        agregarEstudiante() {
            const nuevo = {
                nombre: this.nuevoNombre,
                apellido: this.nuevoApellido,
                genero: this.nuevoGenero,
                edad: this.nuevoEdad,
                ciudad: this.nuevoCiudad,
                hobbie: this.nuevoHobbie,
            };
            this.lista.unshift(nuevo);

        },
    },
}
</script>

<style>
li {
    list-style-type: none;
    padding: 5px;
    margin: 5px 0;
    border-radius: 3px;
}
button {
    background-color: #283be2; 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    width: 150px;
}
.container {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-left: 15px;
    margin-right: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f5e3e3;
}
input
{
    margin: 5px ;
    padding: 5px;
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 5px;
}


</style>