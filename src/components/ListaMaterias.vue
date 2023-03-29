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
    <v-row v-for="(materia, index) in datos" :key="index" class="d-flex align-center justify-center">
      <v-col class="auto">
        <v-card
          class="elevation-2 pa-4 rounded-lg">
          <h3 style="color: #384FFE">{{ materia.nombre }}</h3>
          <h3 style="color: #808B96">Profesor: {{ materia.profesor }}</h3>
          <div class="d-flex flex-row-reverse">
            <v-btn variant="text" class="text-none text-caption">
              <h3 style="color: #384FFE">Ver detalles</h3>
              <v-dialog
                v-model="dialog"
                activator="parent"
              >
                <v-card class="py-5 px-4 rounded-lg mx-auto" id="dialogInfoMaterias" width="100%" max-width="700px">
                  <h2 style="color: #384FFE" class="text-center mb-4">{{ materia.nombre }}</h2>
                  <div class="infoDialog">
                    <h3>Profesor: {{ materia.profesor }}</h3>
                    <h3>Salón: {{ materia.salon }}</h3>
                    <h3>Días: {{ materia.dias }}</h3>
                    <h3>Horario: {{ materia.horario }}</h3>
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

<script>
  const materia1 = {
    nombre: "Título de la materia",
    profesor: "Cristiano Ronaldo",
    salon: "La Congeladora",
    dias: "Lunes, Miércoles & Viernes",
    horario: "7:00 - 9:00"
  };
  const materia2 = {
    nombre: "Título de la materia",
    profesor: "Cristiano Ronaldo",
    salon: "La Congeladora",
    dias: "Lunes, Miércoles & Viernes",
    horario: "7:00 - 9:00"
  };
  const materia3 = {
    nombre: "Título de la materia",
    profesor: "Cristiano Ronaldo",
    salon: "La Congeladora",
    dias: "Lunes, Miércoles & Viernes",
    horario: "7:00 - 9:00"
  };
  const materia4 = {
    nombre: "Título de la materia",
    profesor: "Cristiano Ronaldo",
    salon: "La Congeladora",
    dias: "Lunes, Miércoles & Viernes",
    horario: "7:00 - 9:00"
  };
  const materia5 = {
    nombre: "Título de la materia",
    profesor: "Cristiano Ronaldo",
    salon: "La Congeladora",
    dias: "Lunes, Miércoles & Viernes",
    horario: "7:00 - 9:00"
  };
  export default {
    data() {
      return {
        datos: [materia1, materia2, materia3, materia4, materia5],
        dialog: false
      }
    }
}
</script>

<style scoped>

</style>
