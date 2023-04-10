<template>
  <v-container class="pa-10" style="max-width: 718px">
    <v-row class="d-flex align-center justify-center">
      <v-col class="auto">
        <h4
          class="text-h3 text-center font-weight-bold"
          style="color: #384FFE"
        >
          INFORMACION DEL ALUMNO
        </h4>
      </v-col>
    </v-row>
    <v-row class="d-flex align-center justify-center my-8">
      <v-col>
        <v-img :src="userImage" class="mx-auto rounded-circle" width="225px"></v-img>
      </v-col>
    </v-row>
    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-sm-and-down">
      <v-col
        cols="9"
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Nombre completo</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ data.nombre }}</p>
      </v-col>

      <v-col
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Matricula</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ data.matricula }}</p>
      </v-col>
    </v-row>

    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-md-and-up text-center">
      <v-col
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Nombre completo</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ data.nombre }}</p>
      </v-col>
    </v-row>

    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-md-and-up text-center">
      <v-col
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Matricula</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ data.matricula }}</p>
      </v-col>
    </v-row>

    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-sm-and-down">
      <v-col
        cols="9"
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Correo institucional</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ data.correoInstitucional }}</p>
      </v-col>
      <v-col
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Carrera</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ data.carrera }}</p>
      </v-col>
    </v-row>

    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-md-and-up text-center">
      <v-col
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Correo institucional</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ data.correoInstitucional }}</p>
      </v-col>
    </v-row>

    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-md-and-up text-center">
      <v-col
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Carrera</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ data.carrera }}</p>
      </v-col>
    </v-row>

    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-sm-and-down">
      <v-col
        cols="9"
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Correo personal</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ data.correoPersonal }}</p>
      </v-col>
    </v-row>

    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-md-and-up text-center">
      <v-col
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Correo personal</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ data.correoPersonal }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getAuth } from 'firebase/auth'
import { getFirestore, getDoc, doc } from 'firebase/firestore'
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage'

const data = ref({
  nombre: '',
  matricula: '',
  correoInstitucional: '',
  correoPersonal: '',
  carrera: ''
})

const userImage = ref('')

onMounted(async () => {
  const auth = getAuth()
  const user = auth.currentUser
  const db = getFirestore()
  const docRef = doc(db, 'users', user.uid)
  const docSnap = await getDoc(docRef)

  const storage = getStorage()
  userImage.value = await getDownloadURL(storageRef(storage, 'Sample_User_Icon.png'))
  data.value = docSnap.data()
  console.log(data.value)
})
</script>
