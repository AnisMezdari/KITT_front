<template>
  <div class="sim-header">
    <div class="header-left">
      <div class="container-video-icon">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="e74c3c" stroke="#dd2a16c7" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" class="video-icon">
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
</template>

<style scoped>
.sim-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(26, 3, 3, 0.90);
  color: #fff;
  padding: 1.2rem 1.5rem;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  border-bottom: 5px solid #dd2a16c7;
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

.video-icon:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease, filter 0.2s ease;
  filter: drop-shadow(0 0 6px #dd2a16c7);
  cursor: pointer;
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

.role {
  font-weight: bold;
}
</style>