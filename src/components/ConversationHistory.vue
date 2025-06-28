<template>
  <div class="conversation-history">
    <div class="history-header">
      <span class="icon">📊</span>
      <h2 class="history-title">Historique</h2>
      <span class="persona">Directeur de vente</span>
    </div>
    <div class="messages-list">
      <MessageItem
        v-for="(msg, i) in messages"
        :key="i"
        :message="msg"
        class="fade-in"
        :style="{ animationDelay: (i * 80) + 'ms' }"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({ messages: Array })
import MessageItem from './MessageItem.vue'
</script>

<style scoped>
.conversation-history {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255,0.85);
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px 0 rgba(60,72,88,0.10);
  padding: 1.5rem 1.2rem 1.2rem 1.2rem;
  position: relative;
  overflow: hidden;
}

.history-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  padding-bottom: 0.7rem;
  border-bottom: 1.5px solid #e3e8ee;
  background: transparent;
}

.icon {
  font-size: 1.5rem;
  opacity: 0.7;
}

.history-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #1976d2;
  letter-spacing: 0.01em;
  margin: 0;
}

.persona {
  margin-left: auto;
  font-size: 1rem;
  color: #388e3c;
  font-weight: 500;
  background: #e8f5e9;
  border-radius: 0.7rem;
  padding: 0.25rem 0.9rem;
  letter-spacing: 0.01em;
}

.messages-list {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding-right: 0.5rem;
  padding-bottom: 2.5rem;
  padding-top: 0.5rem;
  /* effet glassmorphism léger */
  background: rgba(248,250,252,0.7);
  border-radius: 1.2rem;
  box-shadow: 0 2px 8px 0 rgba(60,72,88,0.03);
  transition: background 0.3s;
}

/* Animation d'apparition des messages */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: none;
  }
}
</style>