<template>
  <v-container style="max-width: 875px">
    <v-row class="d-flex align-center justify-center mb-16">
      <v-col class="auto">
        <h4
          class="text-h3 text-center font-weight-bold tituloInicioSesion"
          style="color: #384FFE"
        >
          INICIO DE SESIÓN
        </h4>
      </v-col>
    </v-row>
    <v-form v-model="val" @submit.prevent="onSubmit">
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
        v-model="password"
        label="Contraseña"
        :type="'password'"
        variant="outlined"
        :rules="[
          (v) => !!v || 'Se requiere una contraseña',
          (v) => v.length >= 6 || 'Se debe ingresar una contrseña de al menos 6 caracteres'
        ]"
      ></v-text-field>
      <v-btn block
             color="#384FFE"
             class="text-none"
             :disabled="!val"
             type="submit"
      ><h3 style="color: white">Iniciar sesión</h3></v-btn>
    </v-form>
    <v-dialog
      v-model="errorInfo"
    >
      <v-card class="py-5 px-4 rounded-lg mx-auto" id="dialogInfoMaterias" width="100%" max-width="400px">
        <h2 style="color: #384FFE" class="text-center mb-4">{{ errorInfo.title }}</h2>
        <h3 class="d-flex justify-center align-center">{{ errorInfo.title }}</h3>
        <h3 class="d-flex justify-center align-center">{{ errorInfo.msg }}</h3>
        <div class="pt-4 text-center">
          <v-card-actions>
            <v-btn
              block
              variant="text"
              class="text-none text-caption text-center"
              @click="errorInfo = false"
            >
              <h3 style="color: #384FFE">CERRAR</h3>
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import firebase from "firebase/compat";
  export default {
    data: () => ({
      val: false,
      correoInstitucional: null,
      password: null,
      errorStatus: false,
      errorInfo: false
    }),

    methods: {
      async onSubmit () {
        if (!this.val) return
        try {
          await firebase.auth().signInWithEmailAndPassword(this.correoInstitucional, this.password).then(() => {
            this.$router.push({name: 'InfoAlumno'})
          });
          this.errorStatus = false
        } catch (errorType) {
          this.errorStatus = true
          const msg = errorType.code === 'auth/wrong-password'
              ? 'La contraseña no coincide con el correo ingresado'
              :'El correo no esta registrado'
          this.errorInfo = {
            title: 'Error al iniciar sesión',
            msg,
            type: 'error'
          }
        }
      },
    },

  }
</script>

<style scoped>
.tituloInicioSesion {
  margin-top: 170px;
}
</style>
