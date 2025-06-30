<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  step: { type: Number, default: 1 }
})
const selected = ref('non')

const stepData = computed(() => {
  if (props.step === 1) {
    return {
      progress: '25%',
      title: "Veux-tu passer par l’étape de qualification ?",
      desc: "C’est quoi cette étape : apple va mettre en place un système de filtre ...",
      choices: [
        { value: 'oui', label: 'Oui' },
        { value: 'non', label: 'Non' },
        { value: 'alea', label: 'Aléatoire' }
      ],
      stepLabel: '1/4'
    }
  }
  if (props.step === 2) {
    return {
      progress: '50%',
      title: "Quel type d’appel ?",
      desc: "en profondeur ?",
      choices: [
        { value: 'cold', label: 'Cold call' },
        { value: 'rdv', label: 'Rendez-vous de vente' },
        { value: 'alea', label: 'Aléatoire' }
      ],
      stepLabel: '2/4'
    }
  }
  if (props.step === 3) {
    return {
      progress: '75%',
      title: "Quel type de secteur ?",
      desc: "Kaylon ou Kaydop ?",
      choices: [
        { value: 'retail', label: 'Retail' },
        { value: 'immobilier', label: 'Immobilier' },
        { value: 'energie', label: 'Energie' },
        { value: 'telecom', label: 'Telecommunication' },
        { value: 'luxe', label: 'Sport ( Kanu tu en as besoin)' },
        { value: 'alea', label: 'Aléatoire' }
      ],
      stepLabel: '3/4',
      grid: true
    }
  }
  if (props.step === 4) {
  return {
    progress: '100%',
    title: "Qui appelles-tu ?",
    desc: "Persona",
    choices: [
      { value: 'ceo', label: 'CEO' },
      { value: 'cmo', label: 'CMO' },
      { value: 'daf', label: 'DAF' },
      { value: 'alea', label: 'Aléatoire' }
    ],
    stepLabel: '4/4',
    grid: true
  }
}
  return {}
})

function handleChange() {
  if (selected.value) {
    setTimeout(() => {
      emit('next')
    }, 120)
  }
}
const emit = defineEmits(['next', 'prev'])


</script>

<template>
  <div class="config-simu">
    <h2>Configure ton entraînement</h2>
    <div class="progress-bar">
      <div class="progress" :style="{ width: stepData.progress }"></div>
    </div>
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
          :name="'step' + props.step"
          :value="choice.value"
          v-model="selected"
          @change="handleChange"
        />
        <span>{{ choice.label }}</span>
      </label>
    </div>
    <div class="footer">
      <button class="nav-btn" @click="$emit('prev')">
        <span>&lt;</span>
      </button>
      <span class="step">{{ stepData.stepLabel }}</span>
      <button class="nav-btn" @click="$emit('next')">
        <span>&gt;</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.config-simu {
  max-width: 60%;
  margin: 0 auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 rgba(60,72,88,0.08);
  padding: 2.2rem 1.5rem 1.2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.progress-bar {
  width: 100%;
  height: 12px;
  background: #eee;
  border-radius: 8px;
  margin-bottom: 1.2rem;
  overflow: hidden;
}
.progress {
  height: 100%;
  background: linear-gradient(90deg, #b71c1c 0%, #ff2222 100%);
  border-radius: 8px;
  transition: width 0.3s;
}
h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
  text-align: center;
}
.question {
  width: 100%;
  margin-bottom: 1.2rem;
}
.question-title {
  font-size: 1.4rem;
  margin-bottom: 0.2rem;
  text-align: center;
}
.question-desc {
  font-size: 1rem;
  color: #444;
  opacity: 0.85;
  margin-bottom: 1.2rem;
  text-align: center;
}
.choices {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 1.2rem;
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
  margin-top: 0.8rem;
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
.step {
  font-size: 1.1rem;
  color: #222;
  opacity: 0.8;
}
</style>