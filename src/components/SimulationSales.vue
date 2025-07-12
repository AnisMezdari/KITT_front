<template>
  <div class="sim-root">
    <!-- Header -->
    <div class="sim-header">
      <div class="header-left">
        <div class="container-video-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="e74c3c" stroke="#dd2a16c7" stroke-width="1.5"  xmlns="http://www.w3.org/2000/svg"
            class="video-icon">
            <rect x="4" y="12" width="28" height="24" rx="5" fill="currentColor" />
            <polygon points="32,20 44,12 44,36 32,28" fill="currentColor" />
          </svg>
        </div>
        <div class="header-info">
          <div>
            Vous êtes en call avec <b>Steve ROGERS</b>
          </div>
          <div class="header-daf">
            <span class="role">DAF</span> dans le <b>RETAIL</b>
          </div>
          <div class="sim-date">June 12th, 2022 | 11:00 AM</div>
        </div>
      </div>
      <div class="sim-room">
        <span class="room-id">cem-jmnt-hsu</span>
      </div>
    </div>

    <!-- Main content -->
    <div class="sim-main">
      <div class="sim-avatars">
        <div class="avatar-list">
          <div :class="['avatar-card', isIaSpeaking ? 'active-speaker' : '']">
            <div class="avatar-top">
              <span class="avatar-timer-top">24:01:45</span>
            </div>
            <div class="avatar-img blue">
              <img
                src="https://api.dicebear.com/9.x/bottts/svg?seed=Destiny&scale=90&baseColor=00897b,1e88e5,3949ab,5e35b1,757575,e53935,f4511e,fb8c00&textureProbability=55&backgroundColor[]"
                alt="Avatar Steve Rogers"
                class="avatar-profile"
              />
            </div>
            <div class="avatar-name">IA</div>
            <div class="avatar-timer avatar-bottom">
              <span class="mic-on material-icons">volume_up</span>
            </div>
          </div>
          <div :class="['avatar-card', isUserSpeaking ? 'active-speaker' : '']">
            <div class="avatar-top">
              <span class="avatar-timer-top">24:01:45</span>
            </div>
            <div class="avatar-img red">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Avatar Tony Stark"
                class="avatar-profile"
              />
            </div>
            <div class="avatar-name">Kanu l'aristocrate</div>
            <div class="avatar-timer avatar-bottom">
              <span class="mic-off material-icons mic-icon">
                {{ isMicOn ? 'mic' : 'mic_off' }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Transcript -->
      <div class="sim-transcript"  :class="{ collapsed: !showTranscript }" >
        <div class="transcript-header">
          <span v-if="showTranscript">Transcript</span>
          <div class="toggle-switch">
            <button class="switch-btn" :class="{ active: showTranscript }" @click="showTranscript = true">Show</button>
            <button class="switch-btn" :class="{ active: !showTranscript }" @click="showTranscript = false">Hide</button>
          </div>
        </div>

        <div class="transcript-list" v-show="showTranscript">
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

      <!-- Insight -->
      <div class="sim-insight"  :class="{ collapsed: !showInsight }">
        <div class="insight-header">
         <span v-if="showInsight">Insight</span>
          <div class="toggle-switch">
            <button class="switch-btn" :class="{ active: showInsight }" @click="showInsight = true">Show</button>
            <button class="switch-btn" :class="{ active: !showInsight }" @click="showInsight = false">Hide</button>
          </div>
        </div>
        <div class="insight-list" v-show="showInsight">
          <div class="insight-item">• Proposes une demo</div>
          <div class="insight-item">• Demandes si...</div>
          <div class="insight-item">• Hupper > iop ?</div>
        </div>
        <div class="ask-advice-container" v-show="showInsight">
          <button class="ask-advice-btn">
            <BrainCircuit class="icon-brain" />
            Ask advice
          </button>
        </div>
      </div>
      

    </div>

    <!-- Footer -->
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { BrainCircuit } from 'lucide-vue-next'

const isMicOn = ref(true)
const recognition = ref(null)
const messages = ref([])

const isUserSpeaking = ref(false)
const isIaSpeaking = ref(false)

const showTranscript = ref(true)
const showInsight = ref(true)

let userSilenceTimeout = null
let iaSilenceTimeout = null

onMounted(() => {
  if (!('webkitSpeechRecognition' in window)) {
    alert('Reconnaissance vocale non supportée—utilise Chrome.')
    return
  }

  const r = new webkitSpeechRecognition();
  recognition.value = r;
  r.continuous = false;
  r.interimResults = true;
  r.lang = 'fr-FR';

  r.onstart = () => console.log('✅ Reconnaissance démarrée');
  r.onaudiostart = () => console.log('🔊 Audio détecté')
  r.onspeechstart = () => triggerUserSpeaking();

  r.onspeechend = () => scheduleUserSilence();
  r.onsoundend = () => scheduleUserSilence();

  r.onaudio = () => scheduleUserSilence();

  function triggerUserSpeaking() {
    console.log('⬆️ user speaking true');
    isUserSpeaking.value = true;
    if (userSilenceTimeout) clearTimeout(userSilenceTimeout);
  }

  function scheduleUserSilence() {
    if (userSilenceTimeout) clearTimeout(userSilenceTimeout);
    userSilenceTimeout = setTimeout(() => {
      isUserSpeaking.value = false;
      console.log('⬇️ user speaking false');
    }, 50);
  }

  r.onresult = async (ev) => {
    const last = ev.results[ev.results.length - 1]
    if (!last.isFinal) return

    const text = last[0].transcript.trim()
    messages.value.push({ from: 'user', text, time: timestamp() })

    try {
      const resp = await fetch('http://localhost:8000/api/v1/simulation/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_input: text })
      })
      const { response } = await resp.json()
      messages.value.push({ from: 'ia', text: response, time: timestamp() })
    } catch (e) {
      console.error(e)
      messages.value.push({ from: 'ia', text: 'Erreur serveur', time: timestamp() })
    } finally {
      isIaSpeaking.value = true
      iaSilenceTimeout = setTimeout(() => {
        isIaSpeaking.value = false
      }, 2000)
    }
  }

  r.onerror = (e) => console.error('Mic error', e.error)
  r.onend = () => {
    console.log('🔄 Reconnaissance arrêtée, on relance');
    if (isMicOn.value) r.start();
  };

  r.start()
})

function toggleMic() {
  if (!recognition.value) return
  isMicOn.value = !isMicOn.value
  if (isMicOn.value) {
    recognition.value.start()
  } else {
    recognition.value.stop()
    isUserSpeaking.value = false
    isIaSpeaking.value = false
    clearTimeout(userSilenceTimeout)
    clearTimeout(iaSilenceTimeout)
  }
}

function timestamp() {
  return new Date().toLocaleTimeString().slice(0, 5)
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

.sim-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*background: #2b1313;*/
  background: rgba(26, 3, 3,0.90);
  color: #fff;
  padding: 1.2rem 1.5rem; 
  border-radius: 20px 20px 0 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  border-bottom : 5px solid #dd2a16c7;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.header-daf {
  font-size: 0.95rem;
  color: #aaa;
  
}

.container-video-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 70px;
  border-radius: 12px 0 0 12px;
  box-shadow: 0 1px 4px 0 rgba(60, 72, 88, 0.07);
  border-right: 2.5px solid #b03a2e;
}

.video-icon {
  width: 90px;
  height: 110px;
  color: black;

}

.header-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 1.1rem;
  color: #f1f1f1;
}

.header-info b {
  color: #fff;
  font-weight: 600;
}

.sim-header b {
  font-weight: bold;
}

.avatar-profile {
  width: 100px;
  height: 80px;
  margin-bottom: 10px;
  ;
}

.avatar-card-top {
  align-self: flex-start;
  /* aligne à gauche */
}

.avatar-top {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}


.avatar-timer-top {
  font-size: 0.85rem;
  color: #444;
  background: #f1f1f1;
  border-radius: 8px;
  padding: 0.2rem 0.7rem;
}

.avatar-timer-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0;
  padding-right: 1.2rem;
  box-sizing: border-box;
}

.role {
  font-weight: bold;
}

.sim-date {
  font-size: 0.85rem;
  color: #888;
}

.sim-room {
  background: #ffeaea;
  color: #d32f2f;
  border-radius: 12px;
  padding: 0.5rem 1.2rem;
  font-size: 1.1rem;
  font-weight: 500;
  align-self: flex-start;
}

.room-id {
  font-size: 1rem;
}

.sim-main {
  display: flex;
  flex: 1;
  overflow: hidden;
  /* cache le débordement global */
}

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

.sim-avatars,
.sim-insight,
.sim-transcript {
  flex-grow: 1;
  transition: all 0.3s ease;
    border-left: 2px solid #eee;
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
  max-height : 200px;
}

.avatar-card:hover {
  transform: translateY(-2px);
}

.avatar-name-bottom {
  font-size: 1.1rem;
  font-weight: 500;
  color: #222;
  background: transparent;
}

.avatar-img {
  width: 90px;
  height: 110px;
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

.mic-on,
.mic-off {
  font-size: 1.6rem;
  color: #888;
}


.sim-transcript {
  background: #f8fafd;
  box-shadow: 0 px 4px 0 rgba(60, 72, 88, 0.07);
  display: flex;
  flex-direction: column;
  min-width: 260px;
  max-width : 50%;

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
}

.switch-btn.active {
  background: #ff5a5a;
  color: #fff;
}

.switch-btn:not(.active) {
  color: #d32f2f;
  background: transparent;
  opacity: 0.7;
}

.show-btn,
.hide-btn {
  background: #ffeaea;
  color: #d32f2f;
  border: none;
  border-radius: 8px;
  padding: 0.1rem 0.7rem;
  font-size: 0.95rem;
  margin-left: 0.3rem;
  cursor: pointer;
}

.transcript-row {
  display: flex;
  align-items: flex-end;

  max-width: 100%;
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
  max-height: 300px;
  margin: auto;

  max-height: 400px;
  /* limite la hauteur */
  overflow-y: auto;
  /* active le scroll vertical */
}

/* Message commun */
.transcript-item {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  padding: 16px 20px;
  max-width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
  max-width: 80%;
  min-width: 40%;
}

/* Messages de gauche (TONY) */
.transcript-item.left {
  justify-content: flex-start;
  margin-left: 0;
  margin-right: 5px;
}

/* Messages de droite (PETER) */
.transcript-item.right {

  align-self: flex-end;
  margin-left: 5px;
}

/* Texte */
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

.item-message-right {
  margin: 0;
}


.right-name {
  text-align: right;
}

.item-info {
  font-size: 0.75em;
  color: #aaa;
  margin: 0 5px;
  white-space: nowrap;
  align-self: center;
}

.transcript-msg {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  background: #fff;
  /* Fond blanc pour les messages */
  border-radius: 10px;
  padding: 0.7rem;
  box-shadow: 0 1px 2px 0 rgba(60, 72, 88, 0.04);
  border: 2px solid #f2f2f2;
}

.transcript-msg.left {
  flex-direction: row;
}

.transcript-msg.right {
  flex-direction: row-reverse;
}

.msg-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-top: 0.2rem;
}

.msg-avatar.blue {
  background: #3b8edc;
}

.msg-avatar.red {
  background: #e57373;
}

.msg-author {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.msg-text {
  font-size: 1.05rem;
  margin-bottom: 0.2rem;
}

.msg-time {
  font-size: 0.9rem;
  color: #aaa;
}

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

.insight-input {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;

}

.insight-input input {
  flex: 1;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(60, 72, 88, 0.04);
  outline: none;
  color: black;
}

.send-btn {
  background: #ff2222;
}

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
  height: 55px;;
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
   /* rouge doux et foncé */
  border : 2px solid #d32f2f;
  color : #d32f2f;
}



.endcall-icon {
  font-size: 2rem;
  opacity: 0.9;
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

.msg-text+.msg-text {
  margin-top: 0.4rem;
}

.collapsed {

  max-width: 140px;;
  min-width: 0px;

}

.ask-advice-container {
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 1rem;
}

.ask-advice-btn {
 background-color: #ff5a5a;
  color: white;
  border: none;
  border-radius: 999px;
  padding: 0.7rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.ask-advice-btn:hover {
  background-color: #e64949;
}


.icon-brain {
  width: 28px;
  height: 28px;
  stroke-width: 2;
  stroke: white;
}


</style>