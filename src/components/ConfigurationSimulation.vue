<script setup>
import { ref, computed } from 'vue'
import bgImage from '../assets/KITT_tete.png'

const props = defineProps({
  step: { type: Number, default: 1 }
})
const selected = ref('')

const stepData = computed(() => {
  if (props.step === 0) {
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
  if (props.step === 1) {
    return {
      progress: '50%',
      title: "Quel type d’appel ?",
      desc: "en profondeur ?",
      choices: [
        { value: 'cold', label: 'Cold call' },
        { value: 'rdv', label: 'Qualification de call' },
        { value: 'alea', label: 'Mise en situation de vente' }
      ],
      stepLabel: '1/3'
    }
  }
  if (props.step === 2) {
    return {
      progress: '75%',
      title: "Quel type de secteur ?",
      desc: "Kaylon ou Kaydop ?",
      choices: [
        { value: '⁠Tech', label: '⁠Tech / IT / Logiciels' },
        { value: 'agences', label: '⁠Services professionnels / cabinets / agences' },
        { value: '⁠Industrie', label: '⁠Industrie / Manufacturing / BTP' },
        /*{ value: 'telecom', label: 'Telecommunication' },
        { value: 'luxe', label: 'Sport ( Kanu tu en as besoin)' },
        { value: 'alea', label: 'Aléatoire' }*/
      ],
      stepLabel: '2/3',
      grid: true
    }
  }
  if (props.step === 3) {
  return {
    progress: '100%',
    title: "Qui appelles-tu ?",
    desc: "Persona",
    choices: [
      { value: 'ceo', label: 'CEO / Founder' },
      { value: 'cmo', label: 'Head of Sales / Sales Director / VP Sales' },
      { value: 'daf', label: 'Sales Ops / RevOps' },
    ],
    stepLabel: '3/3',
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
            :name="'step' + props.step"
            :value="choice.value"
            v-model="selected"
            @change="handleChange"
          />
          <span>{{ choice.label }}</span>
        </label>
      </div>
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
  max-width: 94%;
  margin: 0 auto;
  background: #fafafa;
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 rgba(60,72,88,0.08);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  height : 667px;
  user-select: none;
}
.simu-header {
  width: 100%;
  background: rgb(0, 0, 0);;
  padding: 1rem 0;
  text-align: center;
  height : 60px;
  border-radius: 25px 25px 0 0;
  color : #ff2222;
  text-shadow: 0 0 6px #ff2222;
  padding-top :  1.5rem;
  padding-bottom :  2.6rem;
}

.simu-header h2 {
  font-size: 2.6rem;
  font-weight: 200;
  margin: 0;
  color: #f3cdcd;
}

@keyframes slowBlink {
  0%, 100% { opacity: 1; }
  25% { opacity: 0.6; }
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #eee;
  border-radius: 8px;
  margin-bottom: 1.2rem;
  overflow: hidden;
  margin-top : -5px;
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
  font-size: 1.65rem;
  margin-bottom: 0.2rem;
  margin-top: 1.5rem;
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
 width: 40%;
  margin: 0 auto; /* <-- recentre horizontalement */
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 1.2rem;
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
.simu-body {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
   background-image: url('../assets/KITT.tete.png');
  background-repeat: no-repeat;
  background-position: right bottom;  /* bas à droite */
  background-size: 450px auto;       /* largeur 150px, hauteur auto */
}
</style>