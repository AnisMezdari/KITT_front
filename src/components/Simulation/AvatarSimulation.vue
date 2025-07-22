<template>
  <div class="sim-avatars">
    <div class="avatar-list">
      <!-- IA -->
      <div :class="['avatar-card', isIaSpeaking ? 'active-speaker' : '']">
        <div class="avatar-top">
          <span class="avatar-timer-top">24:01:45</span>
        </div>
        <div class="avatar-img blue">
          <img
            src="https://api.dicebear.com/9.x/bottts/svg?seed=Destiny"
            alt="Avatar IA"
            class="avatar-profile"
          />
        </div>
        <div class="avatar-name">IA</div>
        <div class="avatar-timer avatar-bottom">
          <span
            class="material-icons mic-icon mic-on"
            :class="{ pulsing: isIaSpeaking }"
          >
            volume_up
          </span>
        </div>
      </div>

      <!-- Utilisateur -->
      <div :class="['avatar-card', isUserSpeaking ? 'active-speaker' : '']">
        <div class="avatar-top">
          <span class="avatar-timer-top">24:01:45</span>
        </div>
        <div class="avatar-img red">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar Utilisateur"
            class="avatar-profile"
          />
        </div>
        <div class="avatar-name">Kanu l'aristocrate</div>
        <div class="avatar-timer avatar-bottom">
          <span
            :class="[
              'material-icons',
              'mic-icon',
              isMicOn ? 'mic-on' : 'mic-off',
              isUserSpeaking ? 'pulsing' : ''
            ]"
          >
            {{ isMicOn ? 'mic' : 'mic_off' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isIaSpeaking: Boolean,
  isUserSpeaking: Boolean,
  isMicOn: Boolean
});
</script>

<style scoped>
.sim-avatars {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 20px;
  background: linear-gradient(120deg, #f6f6f6, #fbfbfb);
  max-height: 53vh;
  user-select: none;
}

.avatar-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 420px;
}

.avatar-card {
  position: relative;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 0.5rem 1.2rem;
  border: 1px solid #e8e1e1;
  transition: transform 0.2s ease;
  max-height: 200px;
}

.avatar-card:hover {
  transform: translateY(-2px);
}

.avatar-img {
  width: 90px;
  height: 80px;
  border-radius: 50%;
  margin: 10px 0;
  background: linear-gradient(135deg, #ececec, #e0e0e0);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.08);
}

.avatar-img img {
  width: 100%;
  height: auto;
}

.avatar-img.blue {
  background: #3b8edc;
}

.avatar-img.red {
  background: #e57373;
}

.avatar-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.3rem;
}

.avatar-timer {
  font-size: 0.85rem;
  color: #888;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding-right: 1rem;
  box-sizing: border-box;
}

.mic-on {
  color: #2ecc71;
  font-size: 1.4rem;
}

.mic-off {
  color: #e74c3c;
  font-size: 1.4rem;
}

/* Animation du micro actif */
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.pulsing {
  animation: pulse 1s infinite;
}

.avatar-card.active-speaker {
  border: 2px solid #c5847d;
  box-shadow: 0 0 0 1px #e8d1cd;
}

.avatar-card.active-speaker .avatar-img.blue {
  box-shadow: 0 0 0 4px #3b8edc55;
}

.avatar-card.active-speaker .avatar-img.red {
  box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.3);
}
</style>