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
    <form @submit.prevent="submit">
      <v-text-field
        v-model="name.value.value"
        :error-messages="name.errorMessage.value"
        label="Nombre Completo"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="phone.value.value"
        :counter="7"
        :error-messages="phone.errorMessage.value"
        label="Matrícula"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="Correo Institucional"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="Correo Personal"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
        label="Contraseña"
        variant="outlined"
        :type="false ? 'text' : 'password'"
      ></v-text-field>
      <v-text-field
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
        label="Confirmar Contraseña"
        variant="outlined"
        :type="false ? 'text' : 'password'"
      ></v-text-field>
      <v-checkbox
        v-model="checkbox.value.value"
        :error-messages="checkbox.errorMessage.value"
        value="1"
        label="Acepto términos y condiciones"
        type="checkbox"
        class="d-flex justify-center align-center mb-5"
      ></v-checkbox>
      <v-btn block
             color="#384FFE"
             class="text-none"
      ><h3 style="color: white">Registrarse</h3></v-btn>
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
    const name = useField('name')
    const phone = useField('phone')
    const email = useField('email')
    const password = useField('password')
    const checkbox = useField('checkbox')

    const submit = handleSubmit(values => {
      alert(JSON.stringify(values, null, 2))
    })
    return { name, phone, email, password, checkbox, submit }

  },
}
</script>

<style scoped>

</style>
