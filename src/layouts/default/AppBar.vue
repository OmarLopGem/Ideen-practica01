<template>
  <v-app-bar
    class="pa-2 mx-auto"
    color="header"
    flat>
    <v-app-bar-title>
      <v-img src="/src/assets/logoTec.png" width="250"></v-img>
    </v-app-bar-title>
    <v-btn>
      <router-link to="/" class="text-decoration-none" style="color: white">INICIO</router-link>
    </v-btn>
    <v-btn>
      <router-link to="/ListaMaterias" class="text-decoration-none" style="color: white">LISTA DE MATERIAS</router-link>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
  //
</script>
