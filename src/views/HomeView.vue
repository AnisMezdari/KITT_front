<template>
  <div class="home-layout">
    <SidebarNav :isDark="isDark" @toggle-theme="toggleTheme" />
    <main class="main-content">
      <!-- Header -->
      <header class="header">
        <div class="header-left">
          <span class="section-title">Simulation</span>
          <h1>
            Welcome back, <strong>Tony STARK</strong>
          </h1>
        </div>
        <div class="header-right">
          <input class="search" placeholder="Search" />
          <span class="notif">🔔</span>
          <span class="profile">👤</span>
        </div>
      </header>
      <div class="date">{{ today }}</div>

      <!-- Simulation module -->
      <SimulationModule />
    </main>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import SidebarNav from '../components/SidebarNav.vue'
import SimulationModule from '../components/SimulationModule.vue'

const today = new Date().toLocaleDateString('en-GB', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
})
const isDark = ref(false)
function toggleTheme() {
  isDark.value = !isDark.value
}
const updateBodyClass = () => {
  document.body.classList.toggle('dark-bg', isDark.value)
  document.body.classList.toggle('light-bg', !isDark.value)
}
onMounted(updateBodyClass)
watch(isDark, updateBodyClass)
</script>

<style scoped>
.home-layout {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-content {
  flex: 1;
  padding: 2.5rem 2.5rem 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}
.header-left .section-title {
  font-size: 1rem;
  color: #888;
  margin-bottom: 0.2rem;
  display: block;
}
.header-left h1 {
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
   color: #888;
}
.header-left strong {
  font-weight: 700;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 1.2rem;
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
  text-align: right;
  color: #888;
  font-size: 1.05rem;
  margin-bottom: 2.2rem;
}
</style>