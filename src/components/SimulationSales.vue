<template>
  <div class="sim-root">
    <HeaderSimulation />
    <div class="sim-main">
      <AvatarSimulation
        :isIaSpeaking="isIaSpeaking"
        :isUserSpeaking="isUserSpeaking"
        :isMicOn="isMicOn"
      />
      <TranscriptSimulation :messages="messages" />
      <InsightSimulation />
    </div>
    <FooterSimulation :isMicOn="isMicOn" @toggleMic="toggleMic" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeaderSimulation from './Simulation/HeaderSimulation.vue';
import AvatarSimulation from './Simulation/AvatarSimulation.vue';
import TranscriptSimulation from './Simulation/TranscriptSimulation.vue';
import InsightSimulation from './Simulation/InsightSimulation.vue';
import FooterSimulation from './Simulation/FooterSimulation.vue';

const isMicOn = ref(true);
const recognition = ref(null);
const messages = ref([]);
const isUserSpeaking = ref(false);
const isIaSpeaking = ref(false);
let userSilenceTimeout = null;
let iaSilenceTimeout = null;
const isListeningAllowed = ref(true);

async function textToSpeech(text) {
  console.log("sa passe");
  try {
    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/nr2EGJNe96rzn9FRlTId', {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': 'sk_58fc3edec9c32f13abdee09185792ac9b9bda54c413f273b'
      },
      body: JSON.stringify({
        text: text,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const audioData = await response.blob();
    const audioUrl = URL.createObjectURL(audioData);
    const audio = new Audio(audioUrl);
    audio.play();
  } catch (error) {
    console.error('Error:', error);
  }
}

onMounted(() => {
  if (!('webkitSpeechRecognition' in window)) {
    alert('Reconnaissance vocale non supportée—utilise Chrome.');
    return;
  }

  const r = new webkitSpeechRecognition();
  recognition.value = r;
  r.continuous = false;
  r.interimResults = true;
  r.lang = 'fr-FR';

  r.onspeechstart = () => triggerUserSpeaking();
  r.onspeechend = () => scheduleUserSilence();
  r.onsoundend = () => scheduleUserSilence();
  r.onaudio = () => scheduleUserSilence();

  function triggerUserSpeaking() {
    isUserSpeaking.value = true;
    if (userSilenceTimeout) clearTimeout(userSilenceTimeout);
  }

  function scheduleUserSilence() {
    if (userSilenceTimeout) clearTimeout(userSilenceTimeout);
    userSilenceTimeout = setTimeout(() => {
      isUserSpeaking.value = false;
    }, 50);
  }
r.onresult = async (ev) => {
  const last = ev.results[ev.results.length - 1];
  if (!last.isFinal) return;

  const text = last[0].transcript.trim();
  messages.value.push({ from: 'user', text, time: timestamp() });

  recognition.value.stop();            
  isListeningAllowed.value = false;
  isUserSpeaking.value = false;
  isIaSpeaking.value = true;

  try {
    const resp = await fetch('http://localhost:8000/api/v1/simulation/simulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_input: text })
    });

    const { response } = await resp.json();

    setTimeout(async () => {
      messages.value.push({ from: 'ia', text: response, time: timestamp() });

      // Tu peux décommenter si tu veux la voix
      // await textToSpeech(response); 

      setTimeout(() => {
        isIaSpeaking.value = false;
        isListeningAllowed.value = true;

        if (isMicOn.value) {
          recognition.value.start(); // ✅ redémarre ici
        }
      }, 2000); // Durée supposée de la parole de l’IA

    }, 1000); // délai avant que l'IA réponde

  } catch (e) {
    console.error(e);
    messages.value.push({ from: 'ia', text: 'Erreur serveur', time: timestamp() });

    // fail-safe
    isIaSpeaking.value = false;
    isListeningAllowed.value = true;
    if (isMicOn.value) recognition.value.start();
  }
};

  r.onerror = (e) => console.error('Mic error', e.error);
  r.onend = () => {
    if (isMicOn.value && isListeningAllowed.value) {
      console.log('🔁 On redémarre la reco');
      recognition.value.start();
    }
  };

  r.start();
});

function toggleMic() {
  if (!recognition.value) return;
  isMicOn.value = !isMicOn.value;
  if (isMicOn.value) {
    recognition.value.start();
  } else {
    recognition.value.stop();
    isUserSpeaking.value = false;
    isIaSpeaking.value = false;
    clearTimeout(userSilenceTimeout);
    clearTimeout(iaSilenceTimeout);
  }
}

function timestamp() {
  return new Date().toLocaleTimeString().slice(0, 5);
}
</script>

<style scoped>
.sim-root {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px 0 rgba(60, 72, 88, 0.08);
  display: flex;
  flex-direction: column;
  min-height: 78.5vh;
}
.sim-main {
  display: flex;
  flex: 1;
  overflow: hidden;
}
.sim-avatars,
.sim-insight,
.sim-transcript {
  flex-grow: 1;
  transition: all 0.3s ease;
  border-left: 2px solid #eee;
}
</style>