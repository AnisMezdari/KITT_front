<template>
  <div class="loading-simu" v-if="!finished">
    <h2>Configuration reçue, agent.</h2>
    <div class="subtitle">
      <strong>KITT analyse les paramètres de mission et génère ton scénario d’entraînement.</strong>
    </div>
    <div class="desc">
      Chargement en cours... Tu seras mis en situation dans quelques instants.
    </div>
    <div class="circle-container">
      <svg width="180" height="180">
        <circle
          cx="90" cy="90" r="80"
          stroke="#ffb3b3" stroke-width="10"
          fill="none"
        />
        <circle
          cx="90" cy="90" r="80"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="circumference - (circumference * percent / 100)"
          stroke="#ff2222" stroke-width="10"
          fill="none"
          stroke-linecap="round"
          transform="rotate(-90 90 90)"
        />
      </svg>
      <div class="percent">
        <span>{{ percent }}</span><span class="unit">%</span>
      </div>
    </div>
  </div>
  <SimulationSales v-else />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SimulationSales from './SimulationSales.vue'

const percent = ref(0)
const finished = ref(false)
const circumference = 2 * Math.PI * 80

onMounted(() => {
  let i = 0
  const interval = setInterval(() => {
    if (i < 100) {
      i++
      percent.value = i
    } else {
      clearInterval(interval)
      setTimeout(() => {
        finished.value = true
      }, 400) // petite pause avant de lancer le composant suivant
    }
  }, 30) // vitesse plus lente (plus grand = plus lent)
})
</script>

<style scoped>
.loading-simu {
  width: 90%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  border-radius: 18px;
  padding: 2rem 1rem;
}
h2 {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  text-align: center;
}
.subtitle {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  text-align: center;
}
.desc {
  color: #555;
  margin-bottom: 2.2rem;
  text-align: center;
}
.circle-container {
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto;
}
.percent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3.2rem;
  font-weight: 700;
  color: #b71c1c;
  display: flex;
  align-items: flex-end;
}
.unit {
  font-size: 1.5rem;
  margin-left: 0.2rem;
  color: #b71c1c;
}
</style>