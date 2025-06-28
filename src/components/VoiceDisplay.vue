<template>
  <div class="voice-display">
    <div :class="['voice', 'ia', { active: currentSpeaker === 'IA' }]">
      <div class="voice-content">
        <span class="dot" v-if="currentSpeaker === 'IA'"></span>
        <span class="avatar">🤖</span>
        <span class="label">IA</span>
        <span v-if="currentSpeaker === 'IA'" class="speaking">parle...</span>
      </div>
    </div>
    <div :class="['voice', 'vendeur', { active: currentSpeaker === 'Vendeur' }]">
      <div class="voice-content">
        <span class="dot" v-if="currentSpeaker === 'Vendeur'"></span>
        <span class="avatar">🧑</span>
        <span class="label">Vendeur</span>
        <span v-if="currentSpeaker === 'Vendeur'" class="speaking">parle...</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ currentSpeaker: String })
</script>

<style scoped>
.voice-display {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1.5rem; /* Ajoute de l'espace entre les deux zones */
}
.voice {
  width: 100%;
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f7fa;
  border-radius: 1rem; /* Plus petit pour éviter la superposition */
  box-sizing: border-box;
  /* box-shadow: 0 2px 8px 0 rgba(60,72,88,0.04);  <-- Optionnel : retire pour éviter l'effet "superposé" */
  padding: 0.7rem 1.2rem; /* Moins de padding */
}
.voice-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.avatar {
  font-size: 5rem;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.label {
  font-size: 1.2rem;
  font-weight: 600;
  color: #222b45;
  margin-bottom: 0.3rem;
}
.speaking {
  font-size: 1rem;
  color: #4caf50;
  font-weight: 500;
  margin-top: 0.2rem;
}
.active {
  box-shadow: 0 0 10px 2px #4caf50;
  border-width: 3px;
}
.dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #4caf50;
  animation: blink 1s infinite;
  margin-bottom: 0.5rem;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
</style>