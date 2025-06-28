<template>
  <div class="chat-root">
    <div class="chat-card">
      <ConversationHistory :messages="messages" class="history"/>
      <VoiceDisplay :currentSpeaker="currentSpeaker" class="voice"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ConversationHistory from '../components/ConversationHistory.vue'
import VoiceDisplay from '../components/VoiceDisplay.vue'

const messages = ref([
  { sender: 'IA', text: 'Bonjour, comment puis-je vous aider ?' },
  { sender: 'Vendeur', text: 'Bonjour, je voudrais vérifier le stock du produit X.' },
  { sender: 'IA', text: 'Bien sûr, un instant. Je vérifie le stock du produit X.' },
  { sender: 'IA', text: 'Le produit X est disponible en 12 exemplaires.' },
  { sender: 'Vendeur', text: 'Merci ! Peux-tu aussi vérifier le prix du produit Y ?' },
  { sender: 'IA', text: 'Le prix du produit Y est de 29,99 €.' },
  { sender: 'Vendeur', text: 'Est-ce qu’il y a une promotion en ce moment ?' },
  { sender: 'IA', text: 'Oui, une remise de 10% est appliquée sur le produit Y.' },
  { sender: 'Vendeur', text: 'Parfait, peux-tu préparer une commande pour 3 exemplaires ?' },
  { sender: 'IA', text: 'La commande de 3 exemplaires du produit Y est prête.' },
  { sender: 'Vendeur', text: 'Merci beaucoup pour ton aide.' },
  { sender: 'IA', text: 'Avec plaisir ! N’hésitez pas si vous avez d’autres questions.' }
])
const currentSpeaker = ref('IA') // ou 'Vendeur'
</script>

<style scoped>
.chat-card {
  display: flex;
  width: 1250px;
  min-height: 600px;
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 rgba(60,72,88,0.12);
  overflow: hidden;
  height: 80vh;
}
.history {
  width: 48%;
  background: #f8fafc;
  padding: 2rem 1.5rem;
  overflow-y: auto;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-right: 1.5px solid #e3e8ee;
}
.voice {
  width: 52%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f7fa;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
}
</style>