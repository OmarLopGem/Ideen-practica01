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
    <form @submit.prevent="submit">
      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="Correo Institucional"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
        label="Contraseña"
        variant="outlined"
        :type="false ? 'text' : 'password'"
        class="mb-10"
      ></v-text-field>
      <v-btn block
             color="#384FFE"
             class="text-none"
      ><h3 style="color: white">Iniciar sesión</h3></v-btn>
    </form>
  </v-container>
</template>

<script>
import { useField, useForm } from 'vee-validate'
export default {
  setup () {
    const { handleSubmit } = useForm({
      validationSchema: {
        name (value) {
          if (value?.length >= 2) return true

          return 'El nombre necesita al menos dos caracteres'
        },
        phone (value) {
          if (value?.length >= 9) return true

          return 'La matrícula necesita al menos 9 caracteres'
        },
        email (value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

          return 'Debe ingresar un correo válido'
        },
        password (value) {
          if (value?.length >= 6) return true

          return 'La contraseña debe tener al menos 6 caracteres'
        },
        checkbox (value) {
          if (value === '1') return true

          return 'Debe aceptar los términos y condiciones'
        },
      }
    })

    const email = useField('email')
    const password = useField('password')

    const submit = handleSubmit(values => {
      alert(JSON.stringify(values, null, 2))
    })
    return { email, password, submit }

  },
}
</script>

<style scoped>
.tituloInicioSesion {
  margin-top: 170px;
}
</style>
