<template>
  <v-container class="pa-10" style="max-width: 875px">
    <v-row class="d-flex align-center justify-center">
      <v-col class="auto">
        <h4
          class="text-h3 text-center font-weight-bold"
          style="color: #384FFE"
        >
          MATERIAS INSCRITAS
        </h4>
      </v-col>
    </v-row>
    <v-row class="d-flex align-center justify-center">
      <v-col class="auto">
        <card-info-materias v-for="(materia, index) in materias" v-bind="materia" :key="index" > </card-info-materias>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .infoDialog {
    color: #808B96;
  }

  .infoDialog h3 {
    margin: 15px;
  }

  #dialogInfoMaterias {
    width: 600px;
  }

</style>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import CardInfoMaterias from "@/components/cardInfoMaterias.vue";

const db = getFirestore()
const materias = ref([])

onMounted(async () => {
  // const user = await signInWithEmailAndPassword(auth, 'myuser@test.com', 'password')
  const querySnapshot = await getDocs(collection(db, 'materias'))
  const data = []
  querySnapshot.forEach((doc) => {
    data.push(doc.data())
  })
  materias.value = data
})

</script>

<style scoped>

</style>
