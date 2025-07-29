import { createRouter, createWebHistory } from 'vue-router'
import SimulationSales from './components/ConfigurationSimulation.vue'
import ScoreSimulation from './components/ScoreSimulation.vue'
import Home from './views/HomeView.vue'

const routes = [
  { path: '/simulation/:step', name: 'simulation', component: SimulationSales,   props: route => ({ step: Number(route.params.step) || 0 })  },
  { path: '/score', name: 'score', component: ScoreSimulation },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router