<template>
  <div class="sim-root">
    <!-- Header -->
    <div class="sim-header">
      <div class="header-left">
        <div class="container-video-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="video-icon">
            <rect x="4" y="12" width="28" height="24" rx="5" fill="#F06262"/>
            <polygon points="32,20 44,12 44,36 32,28" fill="#F06262"/>
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
        <div class="avatar-card active-speaker">
          <span class="avatar-timer-top">24:01:45</span>
          <div class="avatar-img blue">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Steve" alt="Avatar Steve Rogers" class="avatar-profile" />
          </div>
          <div class="avatar-timer avatar-timer-row">
            <span class="mic-on material-icons" style="font-size:1.7rem;color:#3b8edc;">volume_up</span>
          </div>
          <div class="avatar-name avatar-name-bottom">Steve ROGERS</div>
        </div>

        <div class="avatar-card">
          <div class="avatar-img red">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Tony" alt="Avatar Tony Stark" class="avatar-profile" />
          </div>
          <div class="avatar-timer avatar-timer-row">
            <span class="mic-off material-icons mic-icon">{{ isMicOn ? 'mic' : 'mic_off' }}</span>
          </div>
          <div class="avatar-name avatar-name-bottom">Tony STARK</div>
        </div>
      </div>

      <!-- Transcript -->
      <div class="sim-transcript">
        <div class="transcript-header">
          Transcript
          <div class="toggle-switch">
            <button class="switch-btn active">Show</button>
            <button class="switch-btn">Hide</button>
          </div>
        </div>

        <div class="transcript-list">
          <!-- STEVE (gauche) -->
          <div class="transcript-row left">
            <div class="transcript-item left">
              <div class="item-texts">
                <h3 class="item-title">STEVE</h3>
                <p class="item-description">yooo</p>
              </div>
            </div>
            <span class="item-info">00:26</span>
          </div>

          <div class="transcript-row left">
            <div class="transcript-item left">
              <div class="item-texts">
                <p class="item-description">gooooo Rocket league !!</p>
              </div>
            </div>
            <span class="item-info">00:31</span>
          </div>

          <!-- TONY (droite) -->
          <div class="transcript-row right">
            <span class="item-info">00:17</span>
            <div class="transcript-item right">
              <div class="item-texts">
                <h3 class="item-title right-name">TONY</h3>
                <p class="item-message-right">Bonjour, c'est quoi ton rank ?</p>
              </div>
            </div>
          </div>

          <div class="transcript-row left">
            <div class="transcript-item left">
              <div class="item-texts">
                <h3 class="item-title">STEVE</h3>
                <p class="item-message-right">Je suis platine 2 mais je sais faire des flips resets.</p>
              </div>
            </div>
            <span class="item-info">00:26</span>
          </div>

          <div class="transcript-row right">
            <span class="item-info">00:21</span>
            <div class="transcript-item right">
              <div class="item-texts">
                <h3 class="item-title right-name">TONY</h3>
                <p class="item-message-right">ok non merci.</p>
              </div>
            </div>
          </div>

          <div class="transcript-row right">
            <span class="item-info">00:21</span>
            <div class="transcript-item right">
              <div class="item-texts">
                <p class="item-message-right">Au revoir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Insight -->
      <div class="sim-insight">
        <div class="insight-header">
          Insight
          <div class="toggle-switch">
            <button class="switch-btn active">Show</button>
            <button class="switch-btn">Hide</button>
          </div>
        </div>
        <div class="insight-list">
          <div class="insight-item">• Proposes une demo</div>
          <div class="insight-item">• Demandes si...</div>
          <div class="insight-item">• on est là pour kiffer avant tout ?</div>
        </div>
        <div class="insight-input">
          <input type="text" placeholder="Type Something..." />
          <button class="send-btn">➤</button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="sim-footer">
      <button class="footer-btn mic">
        <span class="material-icons">mic</span>
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
      <button class="end-btn">
        End Call
        <span class="material-icons endcall-icon">phone_disabled</span>
      </button>
    </div>
  </div>
</template>

<script setup>
// Pas de logique pour la maquette
</script>

<style scoped>
.sim-root {
  background: #fff;
  border-radius: 16px;
  width: 97.5%;
  box-shadow: 0 2px 16px 0 rgba(60,72,88,0.08);
  display: flex;
  flex-direction: column;
  padding-bottom : 20px;
}
.sim-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #f2f2f2;

}
.header-left {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.header-daf{
  color : #888;
}

.container-video-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 110px;
  background: #fff;
  border-radius: 12px 0 0 12px;
  box-shadow: 0 1px 4px 0 rgba(60,72,88,0.07);
  border-right: 2.5px solid #f1f3f6;
}
.video-icon {
  width: 90px;
  height: 110px;
}
.header-info {
  font-size : 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding : 1rem 0 0.5rem 0.2rem
}
.sim-header b {
  font-weight: bold;
}
.avatar-profile{
  width: 120px;
  height: 100px;
  margin-bottom: 10px;;
}
.avatar-timer-top {
  position: absolute;
  top: 0.7rem;
  left: 1.2rem;
  font-size: 0.95rem;
  color: #888;
  background: #f8fafd;
  border-radius: 8px;
  padding: 0.1rem 0.7rem;
  z-index: 2;
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
  font-size: 0.95rem;
  color: #888;
  margin-top: 0.2rem;
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
  flex-direction: row;
  flex: 1;
  border-bottom: 1px solid #f2f2f2;

}
.sim-avatars {
  max-width: 600px;
  background-color: #f8fafd;
  flex: 1.1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding : 15px 15px 15px 15px;
  align-items: center;
}
.avatar-card {
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  min-height: 225px;
  padding-bottom: 1.2rem;
  border-radius: 12px;
  border: 2px solid #f2f2f2;
  min-width: 550px;;
}

.avatar-name-bottom {
  position: absolute;
  left: 1.2rem;
  bottom: 0.7rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #222;
  background: transparent;
}
.avatar-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;;
  background: #e3e8ee;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-img.blue {
  background: #3b8edc;
}
.avatar-img.red {
  background: #e57373;
}
.avatar-name {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
}
.avatar-timer {
  font-size: 0.95rem;
  color: #888;
  margin-top: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.mic-on {
  color: #888;
  font-size: 1.1rem;
}
.mic-off {
  color: #e57373;
  font-size: 1.7rem;
  margin-left: auto;
}
.sim-transcript {
  flex: 2.2;
  background: #f8fafd;

  box-shadow: 0 1px 4px 0 rgba(60,72,88,0.07);
  display: flex;
  flex-direction: column;
  min-width: 260px;
  max-width: 550px;

}
.transcript-header {
  font-weight: 600;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background-color: white;
  min-height: 40px;
  padding : 1rem 1.2rem;
  font-size : 1.5rem;
}
.toggle-switch {
  display: flex;
  align-items: center;
  background: #f2f2f2;
  border-radius: 999px;
  padding: 2px 6px;
  gap: 0;
  margin-left: auto;
}
.switch-btn {
  border: none;
  background: transparent;
  color: #d32f2f;
  font-size: 0.95rem;
  padding: 0.2rem 1.1rem;
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
.show-btn, .hide-btn {
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
  padding: 20px;
  max-width: 600px;
  margin: auto;

  max-height: 400px; /* limite la hauteur */
  overflow-y: auto;  /* active le scroll vertical */
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
  width : 100%;
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
  margin-left : 5px;
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
  background: #fff;      /* Fond blanc pour les messages */
  border-radius: 10px;
  padding: 0.7rem;
  box-shadow: 0 1px 2px 0 rgba(60,72,88,0.04);
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


  box-shadow: 0 1px 4px 0 rgba(60,72,88,0.07);
  display: flex;
  flex-direction: column;
  min-width: 220px;
  max-width: 360px;
}
.insight-header {
  font-weight: 600;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background-color: white;
  min-height: 40px;
  padding : 1rem 1.2rem;
  font-size : 1.5rem;
}
.insight-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 1.2rem;
  margin-left : 5px;
  margin-right: 5px;
}
.insight-item {
  background: #fff;
  border-radius: 25px;
  padding: 0.7rem 1rem;
  font-size: 1.05rem;
  box-shadow: 0 1px 2px 0 rgba(60,72,88,0.04);
  border: 2px solid #f2f2f2;
  min-height:  40px;
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
  box-shadow: 0 1px 2px 0 rgba(60,72,88,0.04);
  outline: none;
}
.send-btn {
  background: #ff2222;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sim-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.2rem;
  margin-top: 1.5rem;
}
.footer-btn {
  background: #d3d8dd;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  position: relative;
}
.footer-btn.mic {
  background: #cfd6dd;
  color: #fff;
}
.footer-btn.upload {
  background: #f4f4f4;
  color: #555;
}
.footer-btn.rec {
  background: #ffeaea;
  color: #ff5a5a;
  box-shadow: 0 0 0 6px #ff5a5a22, 0 0 0 12px #ff5a5a11;
}
.rec-icon {
  color: #ff5a5a;
  font-size: 2rem;
}
.footer-btn.more {
  background: #f4f4f4;
  color: #555;
}

.material-icons {
  font-size: 2rem;
  line-height: 1;
}

.end-btn {
  background: #ff5a5a;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 0.7rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-left: 2.5rem;
  cursor: pointer;
  box-shadow: none;
  transition: background 0.2s;
  display: flex;
  align-items: center;;
}
.endcall-icon {
  font-size: 1.6rem;
  margin-left: 0.5rem;
  color: #fff;
  opacity: 0.85;
}
.end-btn:hover {
  background: #d32f2f;
}

.avatar-card.active-speaker {
  border: 2.5px solid #3b8edc;
  box-shadow: 0 0 0 4px #3b8edc22;
}
.avatar-card.active-speaker .avatar-img.blue {
  box-shadow: 0 0 0 4px #3b8edc55;
}
.avatar-card.active-speaker .avatar-img.red {
  box-shadow: 0 0 0 4px #e5737355;
  border-color: #e57373;
}

.msg-text + .msg-text {
  margin-top: 0.4rem;
}
</style>