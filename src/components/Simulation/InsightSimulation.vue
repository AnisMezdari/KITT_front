<template>
  <div class="sim-insight" :class="{ collapsed: !showInsight }">
    <div class="insight-header">
      <span v-if="showInsight">Insight</span>
      <div class="toggle-switch">
        <button class="switch-btn" :class="{ active: showInsight }" @click="showInsight = true">Show</button>
        <button class="switch-btn" :class="{ active: !showInsight }" @click="showInsight = false">Hide</button>
      </div>
    </div>
    <div class="insight-list" v-show="showInsight">
      <div
        v-for="(insight, index) in insights"
        :key="index"
        class="insight-item"
      >
        • {{ insight }}
      </div>
    </div>
    <div class="ask-advice-container" v-show="showInsight">
      <button
        class="ask-advice-btn"
        @click="askAdvice"
        :disabled="loading"
      >
        <BrainCircuit class="icon-brain" />
        {{ loading ? "Loading..." : "Ask advice" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BrainCircuit } from 'lucide-vue-next';

// Etat pour afficher/cacher l'insight
const showInsight = ref(true);

// Liste dynamique des conseils affichés
const insights = ref([
  "Proposes une demo",
  "Demandes si...",
  "Hupper > iop ?",
]);

// Etat loading pour la requête
const loading = ref(false);

// Exemple d'historique de conversation à envoyer (à adapter avec ta vraie data)
const conversationHistory = [
  { role: "client", content: "Bonjour, je regarde vos produits mais j’ai des doutes sur le prix." },
  { role: "sales", content: "Bonjour, quels sont vos besoins exactement ?" },
  { role: "client", content: "Le prix me semble un peu élevé, avez-vous des remises ?" },
  { role: "sales", content: "Nous avons quelques promotions ce mois-ci, je peux vous en parler." }
];

// Fonction qui envoie la requête et ajoute la réponse aux insights
async function askAdvice() {
  loading.value = true;

  try {
    const response = await fetch("http://localhost:8000/api/v1/insights/getInsight", {  // adapte l'URL selon ton backend
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept-language": "fr"  // ou dynamique selon la langue
      },
      body: JSON.stringify({
        conversation_history: conversationHistory,
        secteur: "logiciel"
      })
    });

    if (!response.ok) {
      throw new Error(`Erreur réseau: ${response.status}`);
    }

    const data = await response.json();

    if (data.advice) {
      // Ajoute la nouvelle réponse à la liste des insights
      insights.value.push(data.advice);
    } else {
      insights.value.push("Pas de conseil reçu");
    }

  } catch (error) {
    insights.value.push(`Erreur: ${error.message}`);
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
/* Ton CSS reste identique */
.sim-insight {
  flex: 1.2;
  background: #f8fafd;
  box-shadow: 0 1px 4px 0 rgba(60, 72, 88, 0.07);
  display: flex;
  flex-direction: column;
  min-width: 220px;
  transition: all 0.3s ease;
  max-width: 30%;
}

.insight-header {
  font-weight: 600;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background-color: white;
  min-height: 40px;
  padding: 1rem 1.2rem;
  font-size: 1.5rem;
  user-select: none;
}

.insight-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 1.2rem;
  margin-left: 15px;
  margin-right: 15px;
}

.insight-item {
  background: #fff;
  border-radius: 25px;
  padding: 0.7rem 1rem;
  font-size: 1.05rem;
  box-shadow: 0 1px 2px 0 rgba(60, 72, 88, 0.04);
  border: 2px solid #f2f2f2;
  min-height: 40px;
  display: flex;
  align-items: center;
}

.toggle-switch {
  display: flex;
  align-items: center;
  background: #f2f2f2;
  border-radius: 999px;
  gap: 0;
  margin-left: auto;
}

.switch-btn {
  border: none;
  background: transparent;
  color: #d32f2f;
  font-size: 0.7rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  font-weight: 500;
  padding: 0.5rem 1rem;
}

.switch-btn.active {
  background: #d54040;
  color: #fff;
}

.switch-btn:not(.active) {
  color: #d54040;
  background: transparent;
  opacity: 0.7;
}

.switch-btn:not(.active):hover {
  background: rgba(213, 64, 64, 0.12);
  color: #d54040;
  opacity: 1;
  box-shadow: 0 0 4px rgba(213, 64, 64, 0.35);
}

.switch-btn.active:hover {
  background: #c73838;
  color: #fff;
}

.ask-advice-container {
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 1rem;
}

.ask-advice-btn {
  background-color: #d03d3d;
  color: white;
  border: none;
  border-radius: 999px;
  padding: 0.7rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  box-shadow: 0 2px 6px #d03d3d;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.ask-advice-btn:hover {
  background-color: #e64949;
}

.ask-advice-btn:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.icon-brain {
  width: 28px;
  height: 28px;
  stroke-width: 2;
  stroke: white;
}

.collapsed {
  max-width: 140px;
  min-width: 0px;
}
</style>