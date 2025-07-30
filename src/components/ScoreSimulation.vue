<template>
  <div class="analysis-container">
    <div class="analysis-header">
      <h2>Analyse de la performance</h2>
      <p class="score">{{ analysis.global_score }}/20</p>
    </div>

    <div class="analysis-body">
      <div class="column">
        <h3 class="column-title">Points positifs</h3>
        <ul>
          <li v-for="(point, i) in analysis.positive_points" :key="'pos-' + i">
            <CheckCircle class="icon positive" /> {{ point }}
          </li>
        </ul>
      </div>
      <div class="column">
        <h3 class="column-title">Points négatifs</h3>
        <ul>
          <li v-for="(point, i) in analysis.improvement_points" :key="'neg-' + i">
            <AlertTriangle class="icon negative" /> {{ point }}
          </li>
        </ul>
      </div>
    </div>

    <div class="analysis-tags">
      <div class="tag" v-for="(value, key) in analysis.detailed_scores" :key="key">
        {{ formatKey(key) }} : {{ value }}/10
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { CheckCircle, AlertTriangle } from 'lucide-vue-next'
import { useSimulationStore } from '../stores/simulationStore'

const store = useSimulationStore()

const analysis = ref({
  global_score: 0,
  positive_points: [],
  improvement_points: [],
  detailed_scores: {},
})

const formatKey = (key) => {
  const mapping = {
    politeness: "Politesse",
    active_listening: "Écoute",
    persuasion: "Persuasion",
    objection_handling: "Réfutation",
    clarity: "Clarté",
  }
  return mapping[key] || key
}

function convertMessagesToApiFormat(messages) {
  if (!Array.isArray(messages)) return []
  return messages.map((msg) => ({
    role: msg.from === 'user' ? 'user' : 'assistant',
    content: msg.text || '',
  }))
}

watch(
  () => store.conversationHistory,
  async (newMessages) => {
    if (!Array.isArray(newMessages) || newMessages.length === 0) return

    try {
      const response = await fetch('http://localhost:8000/api/v1/scores/getScore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          history_conversation: convertMessagesToApiFormat(newMessages),
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Erreur API: ${response.status} - ${errorText}`)
      }

      const data = await response.json()

      if (data && data.score_analysis && typeof data.score_analysis === 'object') {
        analysis.value = data.score_analysis

        // Ici : reset du store APRES réception et traitement OK de la réponse
        store.resetHistory()  // ou resetMessages(), selon ce que tu veux vider
      } else {
        console.warn('Réponse API sans score_analysis:', data)
      }
    } catch (err) {
      console.error('Erreur lors de la récupération des scores :', err)
    }
  },
  { immediate: true, deep: true }
)
</script>

<style scoped>
.analysis-container {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  font-family: "Segoe UI", sans-serif;
  color: #2d2d2d;
}

.analysis-header {
  text-align: center;
  margin-bottom: 24px;
}

.analysis-header h2 {
  font-size: 34px;
  font-weight: 700;
}

.score {
  font-size: 38px;
  font-weight: bold;
  color: #e74c3c;
  margin-top: 4px;
}

.analysis-body {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
}

.column {
  background: #f7f7f7;
  border-radius: 8px;
  padding: 20px;
  flex: 1;
  min-height: 370px;
}

.column-title {
  text-align: center;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 12px;
}

.column ul {
  padding-left: 0;
  list-style: none;
}

.column li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  font-size: 18px;
}

.icon {
  width: 20px;
  height: 20px;
}

.positive {
  color: #2ecc71;
}

.negative {
  color: #e67e22;
}

.analysis-tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.tag {
  background: #f0f0f0;
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 15px;
  border: 1px solid #ccc;
  font-weight: 500;
}
</style>
