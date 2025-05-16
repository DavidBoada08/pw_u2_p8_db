<template>
    <div class="container">
        <label for="id_nombre">Nombre: </label>
        <input v-model="nuevoNombre" id="id_nombre" type="text" />
        <label for="id_apellido">Apellido: </label>
        <input v-model="nuevoApellido" id="id_apellido" type="text" />
        <button v-on:click="agregarEstudiante()">Agregar Estudiante</button>
        <br>
        {{nuevoNombre}}
        <ul>
            <li v-for="estu in lista" :key="estu.nombre">
                Nombre: {{estu.nombre}} - Apellido: {{estu.apellido}}</li>
        </ul>
        <ul>  <!-- segunda opcion usando destructuració -->
            <li v-for="{nombre, apellido} in lista" :key="nombre">
                Nombre: {{nombre}} - Apellido: {{apellido}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nuevoNombre: " ",
            lista:[
                {nombre: 'David', apellido: 'Boada'},
                {nombre: 'Clare', apellido: 'Boada'},
                {nombre: 'Emilia', apellido: 'Boada'},
                {nombre: 'Juan', apellido: 'Perez'},
                {nombre: 'Andrea', apellido: 'Ramirez'}
            ],
        };
    },
    methods: {
        agregarEstudiante() {
            const nuevo = {
                nombre: this.nuevoNombre,
                apellido: this.nuevoApellido,
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
}

</style>