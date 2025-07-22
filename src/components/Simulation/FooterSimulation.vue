<template>
  <div class="sim-footer">
    <button class="footer-btn mic" @click="toggleMic">
      <span class="material-icons">{{ isMicOn ? 'mic' : 'mic_off' }}</span>
    </button>
    <button class="footer-btn upload">
      <span class="material-icons">upload</span>
    </button>
    <button class="footer-btn rec">
      <span class="material-icons rec-icon">radio_button_checked</span>
    </button>
    <button class="footer-btn more">
      <span class="material-icons">more_horiz</span>
    </button>
    <button class="footer-btn end-btn">
      <span class="material-icons endcall-icon">phone_disabled</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  isMicOn: Boolean
});

const emit = defineEmits(['toggleMic']);

function toggleMic() {
  emit('toggleMic');
}
</script>

<style scoped>
.sim-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem;
  background: #fff;
  border-top: 1px solid #e0e0e0;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
}

.footer-btn {
  background: rgba(255, 34, 34, 0.10);
  border: 1px solid #dcdcdc;
  border-radius: 50%;
  width: 40px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
  font-size: 1.4rem;
  cursor: pointer;
}

.footer-btn:hover {
  background: #f0f0f0;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.footer-btn.mic {
  color: #555;
}

.footer-btn.upload {
  background: rgba(255, 34, 34, 0.10);
  color: #555;
}

.footer-btn.rec {
  background: rgba(255, 90, 90, 0.1);
  color: #d32f2f;
  border: 1px solid #ffcaca;
  box-shadow: 0 0 0 6px #ff5a5a22;
}

.footer-btn.rec:hover {
  background: rgba(255, 90, 90, 0.2);
  box-shadow: 0 0 0 8px #ff5a5a33;
}

.rec-icon {
  font-size: 2.1rem;
}

.footer-btn.more {
  background: #f6f6f6;
  color: #666;
}

.material-icons {
  font-size: 2rem;
  line-height: 1;
}

.end-btn {
  border: 2px solid #d32f2f;
  color: #d32f2f;
}

.endcall-icon {
  font-size: 2rem;
  opacity: 0.9;
}
</style>