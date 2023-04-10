<template>
  <v-container style="max-width: 875px" class="mt-10">
    <v-row class="d-flex align-center justify-center">
      <v-col class="auto mb-10">
        <h4
          class="text-h3 text-center font-weight-bold tituloInicioSesion"
          style="color: #384FFE"
        >
          CREA UNA CUENTA
        </h4>
      </v-col>
    </v-row>
    <v-form v-model="val" @submit.prevent="onSubmit">
      <v-text-field
        v-model="nombre"
        label="Nombre Completo"
        variant="outlined"
        :rules="[
          (v) => !!v || 'Se requiere un nombre',
        ]"
      ></v-text-field>
      <v-text-field
        v-model="matricula"
        label="Matrícula"
        variant="outlined"
        :rules="[
          (v) => !!v || 'Se requiere una matrícula',
          (v) => v.length === 9 || 'Se requieren 9 caracteres para la matrícula'
        ]"
      ></v-text-field>
      <v-text-field
        v-model="correoInstitucional"
        label="Correo Institucional"
        variant="outlined"
        :rules="[
          (v) => !!v || 'Se requiere un correo',
          (v) =>
            !v ||
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Se debe ingresar correo válido'
        ]"
      ></v-text-field>
      <v-text-field
        v-model="correoPersonal"
        label="Correo Personal"
        variant="outlined"
        :rules="[
          (v) => !!v || 'Se requiere un correo',
          (v) =>
            !v ||
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Se debe ingresar correo válido'
        ]"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Contraseña"
        :type="'password'"
        variant="outlined"
        :rules="[
          (v) => !!v || 'Se requiere una contraseña',
          (v) => v.length >= 6 || 'Se debe ingresar una contrseña de al menos 6 caracteres'
        ]"
      ></v-text-field>
      <v-text-field
        v-model="confirmPassword"
        label="Confirmar Contraseña"
        :type="'password'"
        variant="outlined"
        :rules="[
          (v) => !!v || 'Se requiere una contraseña',
          (v) => v.length >= 6 || 'Se debe ingresar una contrseña para confirmar',
          (v) => v === password || 'Las contraseñas deben coincidir'
        ]"
      ></v-text-field>
      <v-checkbox
        v-model="terms"
        value="1"
        label="Acepto términos y condiciones"
        type="checkbox"
        :rules="[
          (v) => !!v || 'Debe aceptar los terminos y condiciones'
        ]"
        class="d-flex justify-center align-center mb-5"
      ></v-checkbox>
      <v-btn block
             color="#384FFE"
             class="text-none"
             :disabled="!val"
             :disables="!terms"
             type="submit"
      ><h3 style="color: white">Registrarse</h3></v-btn>
    </v-form>
  </v-container>
</template>

<script>
import firebase from "firebase/compat";
export default {
  props: {
    logg: Boolean
  },
  name: "infoUser",
  data: () => ({
    val: false,
    nombre: null,
    matricula: null,
    correoInstitucional: null,
    correoPersonal: null,
    password: null,
    confirmPassword: null,
    terms: false
  }),

  methods: {
    async onSubmit () {
      if (!this.val) return
      if (this.val) {
        await firebase.auth().createUserWithEmailAndPassword(this.correoInstitucional, this.password).then((result) => {
          this.$router.push({name: 'InfoAlumno'})
          firebase.firestore().collection('users').doc(result.user.uid).set({
            'nombre': this.nombre,
            'matricula': this.matricula,
            'correoPersonal': this.correoPersonal
          });
        });
      }
    },
  },

}
</script>

<style scoped>

</style>
