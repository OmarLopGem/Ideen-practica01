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
        <v-img src="/src/assets/juan-escutia2.jpeg" class="mx-auto rounded-circle" width="225px"></v-img>
      </v-col>
    </v-row>
    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-sm-and-down">
      <v-col
        cols="9"
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Nombre completo</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ nombre }}</p>
      </v-col>

      <v-col
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Matricula</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ matricula }}</p>
      </v-col>
    </v-row>

    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-md-and-up text-center">
      <v-col
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Nombre completo</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ nombre }}</p>
      </v-col>
    </v-row>

    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-md-and-up text-center">
      <v-col
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Matricula</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ matricula }}</p>
      </v-col>
    </v-row>

    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-sm-and-down">
      <v-col
        cols="9"
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Correo institucional</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ correoInstitucional }}</p>
      </v-col>
      <v-col
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Carrera</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ carrera }}</p>
      </v-col>
    </v-row>

    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-md-and-up text-center">
      <v-col
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Correo institucional</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ correoInstitucional }}</p>
      </v-col>
    </v-row>

    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-md-and-up text-center">
      <v-col
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Carrera</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ carrera }}</p>
      </v-col>
    </v-row>

    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-sm-and-down">
      <v-col
        cols="9"
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Correo personal</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ correoPersonal }}</p>
      </v-col>
    </v-row>

    <v-row style="max-width: 100%; margin: 0px" class="my-8 hidden-md-and-up text-center">
      <v-col
      >
        <p class="text-h5 font-weight-bold" style="color: #384FFE">Correo personal</p>
        <p class="text-h5 font-weight-bold font" style="color: #808B96">{{ correoPersonal }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nombre: "Jorge Omar Lopez Gemigniani",
      matricula: "A01769675",
      carrera: "ITC",
      correoInstitucional: "A01769675@tec.mx",
      correoPersonal: "jolopgem@gmail.com",
    }
  }
}
</script>

<script setup>
  //
</script>
