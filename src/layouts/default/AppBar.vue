<template>
  <template v-if="user">
    <v-app-bar
      class="pa-2 mx-auto"
      color="header"
      flat>
      <v-app-bar-title>
        <v-img src="/src/assets/logoTec.png" width="250"></v-img>
      </v-app-bar-title>
      <v-btn>
        <router-link to="/InfoAlumno" class="text-decoration-none" style="color: white">INICIO</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/ListaMaterias" class="text-decoration-none" style="color: white">LISTA DE MATERIAS</router-link>
      </v-btn>
      <v-btn>

        <v-icon icon="mdi-logout" @click.prevent="logout"></v-icon>
      </v-btn>
    </v-app-bar>
  </template>
  <template v-else>
    <v-app-bar
      class="pa-2 mx-auto"
      color="header"
      flat>
      <v-app-bar-title>
        <v-img src="/src/assets/logoTec.png" width="250"></v-img>
      </v-app-bar-title>
      <v-btn>
        <router-link to="/InicioSesion" class="text-decoration-none" style="color: white">INICIAR SESIÓN</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/RegistroUsuario" class="text-decoration-none" style="color: white">REGISTRARSE</router-link>
      </v-btn>

    </v-app-bar>
  </template>
</template>

<script>
import firebase from "firebase/compat";
export default {
  data() {
    return {
      user: null
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push({name: 'InicioSesion'})
      })
    },
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    })
  }
}

</script>

<script setup>
  //
</script>
