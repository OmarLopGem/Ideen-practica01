// Composables
import { createRouter, createWebHistory } from 'vue-router'
import ListaMaterias from "@/components/ListaMaterias.vue";
import InicioSesion from "@/components/InicioSesion.vue";
import RegistroUsuario from "@/components/RegistroUsuario.vue";
import InfoAlumno from "@/components/InfoAlumno.vue";
import firebase from "firebase/compat"

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/InfoAlumno',
        name: 'InfoAlumno',
        component: InfoAlumno,
        meta: {
          requiredUser: true
        }
      },
      {
        path: '/ListaMaterias',
        name: 'ListaMaterias',
        component: ListaMaterias
      },

      {
        path: '/InicioSesion',
        name: 'InicioSesion',
        component: InicioSesion
      },
      {
        path: '/RegistroUsuario',
        name: 'RegistroUsuario',
        component: RegistroUsuario
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(ruta => ruta.meta.requiredUser)) {
    const user = firebase.auth().currentUser;
    if (user) {
      next();
    } else {
      next({
        name:'InicioSesion'
      })
    }
  } else {
    next();
  }
})

export default router
