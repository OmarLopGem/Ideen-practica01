<template>
  <v-app>
    <InformacionAlumno v-if="condition === true"/>
    <InicioSesion v-else/>
    <default-view />
  </v-app>
</template>

<script>
export default {
  name: "EstatusUser",
  data() {
    return {
      condition: false,
    }
  }
}
</script>

<script setup>
import InformacionAlumno from "@/components/InfoAlumno.vue";
import InicioSesion from "@/components/InicioSesion.vue";
</script>
