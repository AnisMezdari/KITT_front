import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSimulationStore = defineStore('simulation', () => {
  const selections = ref([]) // réponses étapes
  const messages = ref([])   // messages affichés (optionnel)
  const conversationHistory = ref([]) // historique complet partagé

  function saveSelection(step, value) {
    selections.value[step] = value
  }

  function addMessage(msg) {
    messages.value.push(msg)
    conversationHistory.value.push(msg)
  }

  function resetHistory() {
    messages.value = []
    conversationHistory.value = []
  }

  return {
    selections,
    saveSelection,
    messages,
    conversationHistory,
    addMessage,
    resetHistory,
  }
})