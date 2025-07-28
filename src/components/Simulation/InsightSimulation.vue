<template>
  <div class="sim-insight" :class="{ collapsed: !showInsight }">
    <!-- Header -->
    <div class="insight-header">
      <span v-if="showInsight">Insight</span>
      <div class="toggle-switch">
        <button class="switch-btn" :class="{ active: showInsight }" @click="showInsight = true">Show</button>
        <button class="switch-btn" :class="{ active: !showInsight }" @click="showInsight = false">Hide</button>
      </div>
    </div>

    <!-- Liste d'insights -->
    <div class="insight-list" v-show="showInsight" ref="insightListRef">
      <div
        v-for="(insight, index) in insights"
        :key="index"
        class="insight-item"
        @click="openInsight(insight)"
      >
        {{ insight.length > 100 ? insight.slice(0, 100) + '...' : insight }}
      </div>
    </div>

    <!-- Bouton Ask Advice -->
    <div class="ask-advice-container" v-show="showInsight">
      <button class="ask-advice-btn" @click="askAdvice" :disabled="loading">
        <BrainCircuit class="icon-brain" />
        {{ loading ? "Loading..." : "Ask advice" }}
      </button>
    </div>

    <!-- Modal avec insight complet -->
    <div class="insight-modal" v-if="selectedInsight" @click.self="selectedInsight = null">
      <div class="modal-content">
        <h3>Insight complet</h3>
        <p>{{ selectedInsight }}</p>
        <button class="close-btn" @click="selectedInsight = null">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';
import { BrainCircuit } from 'lucide-vue-next';

const insightListRef = ref(null);
const showInsight = ref(true);
const selectedInsight = ref(null); // Insight sélectionné

const props = defineProps({
  advice: String,
  loading: Boolean,
  askAdvice: Function
});

 const insights = ref([
  "Proposes une demo qui met en avant les fonctionnalités clés , et les avantages du produit. Et ensuite, propose un essai gratuit ou une démo personnalisée. afin de permettre au client de tester le produit avant de prendre une décision. et de répondre à ses questions. pour chaque génération de insight, on ajoute un nouveau conseil à la liste ",
  "Demandes si...",
  "Hupper > iop ?",
   "Hupper > iop ?",
    "Hupper > iop ?",
     "Hupper > iop ?",
      "Hupper > iop ?",
       "Hupper > iop ?",
        "Hupper > iop ?",
         "Hupper > iop ?",
]);

watch(() => props.advice, async (newAdvice) => {
  if (newAdvice && !insights.value.includes(newAdvice)) {
    insights.value.push(newAdvice);

    await nextTick();
    if (insightListRef.value) {
      insightListRef.value.scrollTop = insightListRef.value.scrollHeight;
    }
  }
});

// Ouvre le modal
function openInsight(insight) {
  selectedInsight.value = insight;
}


// Liste dynamique des conseils affichés


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
  margin-bottom: 0.3rem;
  margin-left: 15px;
  margin-right: 15px;

  max-height: 350px;
  overflow-y: auto;
  padding-right: 5px;
}

.insight-item {
  background: #fff;
  border-radius: 25px;
  padding: 0.7rem 1rem;
  padding-bottom : 1rem;
  font-size: 1.05rem;
  box-shadow: 0 1px 2px 0 rgba(60, 72, 88, 0.04);
  border: 2px solid #f2f2f2;
  min-height: 40px;
  display: flex;
  align-items: center;

  display: -webkit-box;
  -webkit-line-clamp: 2;       /* nombre de lignes max */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;

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
  font-size: 0.8rem;
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

.insight-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  width: 80%;
  max-width: 600px;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close-btn {
  margin-top: 1rem;
  background-color: #d03d3d;
  color: white;
  border: none;
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  cursor: pointer;
}


</style>