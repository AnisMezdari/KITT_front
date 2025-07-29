<script setup>
import { ref, computed } from 'vue'
import { useSimulationStore } from '../stores/simulationStore'
import bgImage from '../assets/KITT_tete.png'
import LoadingSimulation from './LoadingSimulation.vue'  // import du composant loading

const store = useSimulationStore()
const step = ref(0)
const maxStep = 2  // 3 étapes : 0, 1, 2
const selected = ref(store.selections[step.value] || '')
const isLoading = ref(false)

function updateSelected() {
  selected.value = store.selections[step.value] || ''
}

function handleChange() {
  if (selected.value) {
    store.saveSelection(step.value, selected.value)
    if (step.value < maxStep) {
      step.value++
      updateSelected()
    } else {
      // Dernière étape, lancement du chargement
      isLoading.value = true
    }
  }
}

function nextStep() {
  if (step.value < maxStep) {
    step.value++
    updateSelected()
  }
}

function prevStep() {
  if (step.value > 0) {
    step.value--
    updateSelected()
  }
}

const stepData = computed(() => {
  switch (step.value) {
    case 0: return {
      progress: '33%',
      title: "Quel type d’appel ?",
      desc: "",
      choices: [
        { value: 'Cold call', label: 'Cold call' },
        { value: 'Qualification de call', label: 'Qualification de call' },
        { value: 'Mise en situation de vente', label: 'Mise en situation de vente' }
      ],
      stepLabel: '1/3'
    }
    case 1: return {
      progress: '67%',
      title: "Quel type de secteur ?",
      desc: "",
      choices: [
        { value: '⁠Tech / IT / Logiciels', label: '⁠Tech / IT / Logiciels' },
        { value: '⁠Services professionnels / cabinets / agences', label: '⁠Services professionnels / cabinets / agences' },
        { value: '⁠Industrie / Manufacturing / BTP', label: '⁠Industrie / Manufacturing / BTP' },
      ],
      stepLabel: '2/3',
      grid: true
    }
    case 2: return {
      progress: '100%',
      title: "Qui appelles-tu ?",
      desc: "Persona",
      choices: [
        { value: 'CEO / Founder', label: 'CEO / Founder' },
        { value: 'Head of Sales / Sales Director / VP Sales', label: 'Head of Sales / Sales Director / VP Sales' },
        { value: 'Sales Ops / RevOps', label: 'Sales Ops / RevOps' },
      ],
      stepLabel: '3/3',
      grid: true
    }
    default: return {}
  }
})
</script>

<template>

  <div v-if="isLoading">
    <LoadingSimulation />
  </div>
  <div v-else class="config-simu">
    <div class="simu-header">
      <h2>Configure ton entraînement</h2>
    </div>

    <div class="progress-bar">
      <div class="progress" :style="{ width: stepData.progress }"></div>
    </div>

    <div class="simu-body" :style="{ backgroundImage: `url(${bgImage})` }">
      <div class="question">
        <div class="question-title">
          <strong>{{ stepData.title }}</strong>
        </div>
        <div class="question-desc">
          {{ stepData.desc }}
        </div>
      </div>
      <div
        class="choices"
        :class="{ 'choices-grid': stepData.grid }"
      >
        <label
          v-for="choice in stepData.choices"
          :key="choice.value"
          :class="['choice', selected === choice.value && 'selected']"
        >
          <input
            type="radio"
            :name="'step' + step"
            :value="choice.value"
            v-model="selected"
            @change="handleChange"
          />
          <span>{{ choice.label }}</span>
        </label>
      </div>
    </div>

    <div class="footer">
      <button class="nav-btn" @click="prevStep" :disabled="step === 0">
        <span>&lt;</span>
      </button>
      <span class="step">{{ stepData.stepLabel }}</span>
      <button class="nav-btn" @click="nextStep" :disabled="step === maxStep">
        <span>&gt;</span>
      </button>
    </div>

  </div>
</template>


<style scoped>
.config-simu {
  max-width: 94%;
  margin: 0 auto;
  background: #fafafa;
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 rgba(60,72,88,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 667px;
  user-select: none;
  padding-bottom: 1rem;
}

.simu-header {
  width: 100%;
  background: #000;
  padding: 2rem 0 1rem;
  text-align: center;
  border-radius: 25px 25px 0 0;
  color: #ff2222;
  text-shadow: 0 0 6px #ff2222;
}

.simu-header h2 {
  font-size: 2.6rem;
  font-weight: 300;
  margin: 0;
  color: #f3cdcd;
}

.progress-bar {
  width: 90%;
  height: 8px;
  background: #eee;
  border-radius: 8px;
  margin: 1rem 0;
  overflow: hidden;
}
.progress {
  height: 100%;
  background: linear-gradient(90deg, #b71c1c 0%, #ff2222 100%);
  border-radius: 8px;
  transition: width 0.3s;
}

.simu-body {
  flex-grow: 1;
  width: 100%;
  background-size: 30% auto; /* taille réduite */
  background-repeat: no-repeat;
  background-position: right bottom; /* aligné à droite en bas */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.question {
  width: 100%;
  margin-bottom: 1rem;
}

.question-title {
  font-size: 1.6rem;
  margin-bottom: 0.3rem;
  margin-top: 1rem;
  text-align: center;
}

.question-desc {
  font-size: 1rem;
  color: #444;
  opacity: 0.85;
  margin-bottom: 1rem;
  text-align: center;
}

.choices {
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
  user-select: none;
}
.choices-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem 1.2rem;
}
.choice {
  display: flex;
  align-items: center;
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 12px;
  padding: 0.7rem 1.2rem;
  font-size: 1.08rem;
  cursor: pointer;
  transition: border 0.2s, background 0.2s, color 0.2s;
  position: relative;
}
.choice:hover:not(.selected) {
  background: #ffeaea;
  border-color: #ff2222;
  color: #b71c1c;
}
.choice.selected {
  background: #b71c1c;
  border-color: #b71c1c;
  color: #fff;
}
.choice input[type="radio"] {
  margin-right: 1rem;
  accent-color: #b71c1c;
}
.choice.selected input[type="radio"] {
  accent-color: #fff;
}

.footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding: 1rem 2rem;
}
.nav-btn {
  background: none;
  border: none;
  color: #b71c1c;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.2rem 0.7rem;
  border-radius: 50%;
  transition: background 0.2s;
}
.nav-btn:hover {
  background: #f5f5f5;
}
.nav-btn:disabled {
  color: #ddd;
  cursor: default;
  background: none;
}
.step {
  font-size: 1.1rem;
  color: #222;
  opacity: 0.8;
}
</style>
