<template>
  <v-app>
    <default-bar v-if="condition === true"/>
    <default-unlogged-bar v-else/>
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
import DefaultBar from './AppBar.vue'
import DefaultUnloggedBar from "@/layouts/default/AppBarUnlogged.vue";
import DefaultView from './View.vue'
</script>
