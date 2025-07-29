<template>
  <div class="loading-simu" v-if="!finished">
    <!-- La barre de chargement -->
    <div class="simu-header">
      <h2>Configuration reçue, agent.</h2>
    </div>

    <div class="simu-body">
      <div class="subtitle">
        <strong>
          KITT analyse les paramètres de mission et génère ton scénario d’entraînement.
        </strong>
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
  </div>

    <SimulationSales
      v-else-if="selected === 'simulation-sales'"
      @navigate="handleNavigate"
    />

  <ScoreSimulation v-else-if="selected === 'score-simulation'" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SimulationSales from './SimulationSales.vue'
import ScoreSimulation from './ScoreSimulation.vue'

const percent = ref(0)
const finished = ref(false)
const selected = ref('simulation-sales')  // vue initiale après chargement
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
      }, 400)
    }
  }, 30)
})

function handleNavigate(page) {
  console.log('handleNavigate reçu dans homeView:', page)
  selected.value = page
}
</script>

<style scoped>
.loading-simu {
  width: 94%;
  margin: 0 auto;
  background: #fafafa;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(60, 72, 88, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 667px;
}

.simu-header {
  width: 100%;
  background: rgb(3, 1, 1);
  padding: 1rem 0;
  text-align: center;
  height: 50px;
  border-radius: 18px 18px 0 0;
  color: white;
  padding-top: 1.0rem;
  padding-bottom: 2.6rem;
}

.simu-header h2 {
  font-size: 2.4rem;
  font-weight: 500;
  margin: 0;
}

.simu-body {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-top: 40px;
}

.subtitle {
  font-size: 1.65rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  text-align: center;
}

.desc {
  color: #555;
  margin-bottom: 2.2rem;
  text-align: center;
  font-size: 1rem;
  opacity: 0.85;
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