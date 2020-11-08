import Vue from 'vue'
import VueRouter from 'vue-router'
import Tickets from '../views/Tickets.vue'
import CustomerSupport from '../views/CustomerSupport.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tickets',
    component: Tickets
  },
  {
    path: '/atencion',
    name: 'CustomerSupport',
    component: CustomerSupport
  }
]

const router = new VueRouter({
  routes
})

export default router
