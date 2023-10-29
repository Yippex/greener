import { createRouter, createWebHistory } from 'vue-router'
import fedasCo from '../views/fedasCo.vue'
import HomeView from '../views/HomeView.vue'
import fedasfarm from '../views/fedasFarm.vue'
import fedasHotels from '../views/fedasHotels.vue'
import fedasStores from '../views/fedasStores.vue'
import fedasWater from '../views/fedasWater.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/fedasFarm',
      component: fedasfarm
    },
    {
      path: '/fedasCo',
      component: fedasCo
    },
    {
      path: '/fedasHotel',
      component: fedasHotels
    },
    {
      path: '/fedasStores',
      component: fedasStores
    },
    {
      path: '/fedasWater',
      component: fedasWater
    }
  ]
})

export default router
