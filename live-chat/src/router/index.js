import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../Firebase/config'

//auth guard
const requireAuth = (to, from, next) => {
    let user = projectAuth.currentUser
    if( !user ){
      next({name: 'Welcome'})
    } else{
      next()
    }
}

const requiredNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if( user ){
    next({name: 'Chatroom'})
  } else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requiredNoAuth
  },
  {
    path: '/chatroom',
    name: "Chatroom",
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
