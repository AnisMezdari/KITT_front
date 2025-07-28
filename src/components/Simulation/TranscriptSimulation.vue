<template>
  <div class="sim-transcript" :class="{ collapsed: !showTranscript }">
    <div class="transcript-header">
      <span v-if="showTranscript">Transcript</span>
      <div class="toggle-switch">
        <button class="switch-btn" :class="{ active: showTranscript }" @click="showTranscript = true">Show</button>
        <button class="switch-btn" :class="{ active: !showTranscript }" @click="showTranscript = false">Hide</button>
      </div>
    </div>

    <div class="transcript-list" v-if="showTranscript" ref="transcriptListRef">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        class="transcript-row"
        :class="msg.from === 'user' ? 'right' : 'left'"
      >
        <span v-if="msg.from === 'user'" class="item-info">{{ msg.time }}</span>
        <div class="transcript-item" :class="msg.from === 'user' ? 'right' : 'left'">
          <div class="item-texts">
            <h3 v-if="msg.from === 'user'" class="item-title right-name">TONY</h3>
            <h3 v-else class="item-title">STEVE</h3>
            <p class="item-description">{{ msg.text }}</p>
          </div>
        </div>
        <span v-if="msg.from === 'ia'" class="item-info">{{ msg.time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';

const showTranscript = ref(true);

const props = defineProps({
  messages: Array
});

// Référence sur le container scrollable
const transcriptListRef = ref(null);

watch(() => props.messages, async () => {
  await nextTick();
  if (transcriptListRef.value) {
    transcriptListRef.value.scrollTop = transcriptListRef.value.scrollHeight;
  }
}, { deep: true });
</script>

<style scoped>
.sim-transcript {
  background: #f8fafd;
  box-shadow: 0 4px 4px 0 rgba(60, 72, 88, 0.07);
  display: flex;
  flex-direction: column;
  min-width: 260px;
  max-width: 50%;
}

.transcript-header {
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

.transcript-row {
  display: flex;
  align-items: flex-end;
  max-width: 100%;
  padding-right: 1rem;
}

.transcript-row.left {
  justify-content: flex-start;
}

.transcript-row.right {
  justify-content: flex-end;
}

.transcript-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 1rem;
  max-height: 400px;
  overflow-y: auto;
  margin-left: 15px;
  margin-right: 0px;
  box-sizing: border-box;

}

.transcript-item {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  padding: 16px 20px;
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  min-width: 40%;
}

.transcript-item.left {
  justify-content: flex-start;
  margin-left: 0;
  margin-right: 5px;
}

.transcript-item.right {
  align-self: flex-end;
  margin-left: auto;
  margin-right: 0;
}

.item-texts {
  background-color: white;
  padding-top: 0;
  border-radius: 10px;
  width: 100%;
}

.item-title {
  font-size: 1.0em;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 4px;
  color: #2c3e50;
}

.item-title.right-name {
  text-align: right;
}

.item-description {
  font-size: 14px;
  color: #444;
  margin: 0;
  margin-left: 5px;
}

.item-info {
  font-size: 0.75em;
  color: #aaa;
  margin: 0 5px;
  white-space: nowrap;
  align-self: center;
}

.collapsed {
  max-width: 140px;
  min-width: 0px;
}
</style>