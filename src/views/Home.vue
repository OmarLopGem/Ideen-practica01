<template>
  <v-app>
    <InicioSesion />
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
import InicioSesion from "@/components/InicioSesion.vue";
</script>
