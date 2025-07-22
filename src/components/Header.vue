<template>
  <header class="main-header">
    <div class="header-left">
      <div class="logo-row">
        <img src="../assets/KITT_v5.png" alt="KITT Logo" class="logo logo-hover" />
        <span class="brand">KITT</span>
      </div>
      <div class="header-titles">
        <span class="home-page">Simulation</span>
        <span class="welcome">Welcome back, <b>Tony STARK</b></span>
      </div>
    </div>

  <div class="header-right">
    <div class="top-icons">
      <div class="search-wrapper">
        <input class="search" placeholder="Search" />
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
      </div>

      <div class="notif-wrapper">
        <i class="fa-solid fa-bell notif"></i>
        <span class="notif-badge">1</span>
      </div>

      <div class="profile-wrapper">
        <i class="fa-solid fa-user profile-icon"></i>
      </div>
    </div>

    <div class="date-wrapper">
      <span class="date">{{ today }}</span>
    </div>
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
  justify-content: space-between;
  align-items: flex-center;
  padding: 15px 40px 60px 15px;
  background: #fff;
  box-shadow: 0 4px 24px rgba(60, 72, 88, 0.1);
  border-radius: 0 0 16px 16px;
  user-select: none;
}

.header-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}

.logo-row {
  display: flex;
  align-items: center;
}

.logo {
  width: 110px;
}

.logo-hover {
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}

.logo-hover:hover {
  transform: scale(1.05);
}

.brand {
  font-size: 2.4rem;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 0.1em;
  color: #222;
  font-family: 'Syne Mono', monospace;
  margin-left: 5px;
}

.header-titles {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding-left: 15px;
}

.home-page {
  font-size: 1.5rem;
  color: #888;
  margin-top: -10px;;
}

.welcome {
  font-size: 2rem;
  font-weight: 400;
  color: #222;
  margin-top: -12px;
}

.header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  margin-top : 15px;
}

.search-wrapper {
  position: relative;
}

.search {
  padding: 0.5rem 2.2rem 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: #f4f7fa;
  color: black;
  width: 180px;
}
.search:focus {
  border-color: #d32f2f; 
  outline: none;
  border: 0 0 0 2px rgba(153, 34, 34, 0.3); 
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 0.9rem;
}

.notif-wrapper {
  position: relative;
}

.notif {
  font-size: 1.4rem;
  color: #222;
  cursor: pointer;
}

.notif-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: red;
  color: white;
  font-size: 0.65rem;
  border-radius: 50%;
  padding: 2px 5px;
  font-weight: bold;
}

.profile-wrapper {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-icon {
  font-size: 1.3rem;
  color: #555;
}

.date {
  color: #555;
  font-size: 1rem;
  margin-left: 1rem;
  white-space: nowrap;
}

.top-icons {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.date-wrapper {
  margin-top: 0.5rem;
}

.date {
  color: #555;
  font-size: 1rem;
  white-space: nowrap;
}

</style>