<template>
  <div :class="['message-item', message.sender.toLowerCase()]">
    <div class="avatar">
      <span v-if="message.sender === 'IA'">🤖</span>
      <span v-else>🧑</span>
    </div>
    <div class="bubble">
      <div class="text">{{ message.text }}</div>
      <div class="sender">{{ message.sender }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({ message: Object })
</script>

<style scoped>
.message-item {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
}
.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #e3e8ee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  box-shadow: 0 1px 4px 0 rgba(60,72,88,0.06);
}
.bubble {
  background: #fff;
  border-radius: 1.2rem 1.2rem 1.2rem 1.2rem;
  padding: 0.7rem 1.2rem 2.2rem 1.2rem;
  box-shadow: 0 2px 8px 0 rgba(60,72,88,0.04);
  min-width: 120px;
  max-width: 340px;
  word-break: break-word;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.text {
  font-size: 1.05rem;
  color: #222b45;
}
.sender {
  font-weight: 600;
  font-size: 0.95rem;
  color: #1976d2;
  position: absolute;
  right: 1rem;
  bottom: 0.4rem; /* ↑ espace augmenté */
  opacity: 0.7;
  letter-spacing: 0.01em;
}
.ia .sender {
  color: #1976d2;
}
.vendeur .sender {
  color: #388e3c;
}
</style>