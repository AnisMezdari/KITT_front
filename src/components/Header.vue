<template>
  <header class="main-header">
    <div class="header-left">
      <div class="logo-row logo-hover">
        <img src="../assets/logo_v2.png" alt="KITT Logo" class="logo" />
        <img src="../assets/logo_text_v4.png" alt="KITT Logo" class="logo" />
      </div>
      <div class="header-titles">
        <span class="home-page">Simulation / </span>
        <span class="welcome">Welcome back, <b>Tony STARK</b></span>
      </div>
    </div>
    <div class="header-right">
      <input class="search" placeholder="Search" />
      <span class="notif">🔔</span>
      <span class="profile">👤</span>
      <span class="date">{{ today }} (bientot la fin du monde ?)</span>
    </div>
  </header>
</template>

<script setup>
const today = new Date().toLocaleDateString('en-GB', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
})
</script>

<style scoped>
.main-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 40px 32px 40px;
  background: #fff;
 
  box-shadow: 0 4px 24px 0 rgba(60,72,88,0.10);
  min-height: 210px;
  z-index: 10;

}
.header-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-top: -25px;
}
.logo-row {
  display: flex;
  align-items: center;
  margin-top : 20px;
}
.logo {
  width: 130px;
  margin-bottom: -20px;
  margin-top: 0; /* retire tout éventuel margin-top */
}

.logo-hover {
  transition: transform 0.3s ease, filter 0.3s ease;
  display: flex;
  align-items: center;
}

.logo-hover:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.6));
  cursor: pointer;
}
.brand {
  font-size: 2.5rem;
  font-weight: 1000;
  font-style: italic;
  letter-spacing: 0.1em;
  color: #222;
  font-family: 'Syne Mono', monospace;
}
.container-logo-text{

  height: 130px;
  align-items: center;
}
.header-titles {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 25px;
  padding-left : 15px;
  margin-top: 18px;
}
.home-page {
  font-size: 1.5rem;
  color: #888;

}
.welcome {
  font-size: 1.5rem;
  font-weight: 400;
  color: #222;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 8px;
}
.search {
  border: 1px solid #e3e8ee;
  border-radius: 1.2rem;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  outline: none;
  background: #f4f7fa;
}
.notif {
  font-size: 1.5rem;
  cursor: pointer;
}
.profile {
  font-size: 1.7rem;
  cursor: pointer;
}
.date {
  color: #888;
  font-size: 1.05rem;
  margin-left: 1.2rem;
  white-space: nowrap;
}
</style>