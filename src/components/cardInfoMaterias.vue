<template>
  <v-container class="pa-2" style="max-width: 875px">
    <v-row class="d-flex align-center justify-center">
      <v-col class="auto">
        <v-card
          class="elevation-2 pa-4 rounded-lg">
          <h3 style="color: #384FFE">{{ props.nombre }}</h3>
          <h3 style="color: #808B96">Profesor: {{ props.profesor }}</h3>
          <div class="d-flex flex-row-reverse">
            <v-btn variant="text" class="text-none text-caption">
              <h3 style="color: #384FFE">Ver detalles</h3>
              <v-dialog
                v-model="dialog"
                activator="parent"
              >
                <v-card class="py-5 px-4 rounded-lg mx-auto" id="dialogInfoMaterias" width="100%" max-width="700px">
                  <h2 style="color: #384FFE" class="text-center mb-4">{{ props.nombre }}</h2>
                  <div class="infoDialog">
                    <h3>Profesor: {{ props.profesor }}</h3>
                    <h3>Salón: {{ props.salon }}</h3>
                    <h3>Días: {{ props.dias }}</h3>
                    <h3>Horario: {{ props.horario }}</h3>
                  </div>
                  <div class="pt-4 d-flex flex-row-reverse">
                    <v-card-actions>
                      <v-btn
                        variant="text" class="text-none text-caption"
                        @click="dialog = false"
                      >
                        <h3 style="color: #384FFE">CERRAR</h3>
                      </v-btn>
                    </v-card-actions>
                  </div>

                </v-card>
              </v-dialog>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  nombre: {
    type: String
  },
  profesor: {
    type: String
  },
  salon: {
    type: String
  },
  dias: {
    type: String
  },
  horario: {
    type: String
  }
})

let dialog = ref(false)
</script>

<style scoped>

</style>
