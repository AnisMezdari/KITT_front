<template>
  <div class="global-layout">
    <Header />
    <div class="content-row">
      <SidebarNav
        :isDark="!isDark"
        :selected="selected"
        @toggle-theme="toggleTheme"
        @navigate="handleNavigate"
        class="sidebar"
      />
    <main class="main-content">
        <LoadingSimulation
          v-if="selected === 'simulation' && simulationStep > 3"
        />
        <ConfigurationSimulation
          v-else-if="selected === 'simulation'"
          :step="simulationStep"
          @next="simulationStep++"
          @prev="simulationStep--"
        />
        <slot v-else />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import SidebarNav from '../components/SidebarNav.vue'
import Header from '../components/Header.vue'
import ConfigurationSimulation from '../components/ConfigurationSimulation.vue'
import LoadingSimulation from '../components/LoadingSimulation.vue'


const isDark = ref(false)
const selected = ref('dashboard')
function handleNavigate(page) { selected.value = page }
function toggleTheme() { isDark.value = !isDark.value }
const updateBodyClass = () => {
  document.body.classList.toggle('dark-bg', isDark.value)
  document.body.classList.toggle('light-bg', !isDark.value)
}
onMounted(updateBodyClass)
watch(isDark, updateBodyClass)
const simulationStep = ref(1)
</script>

<style scoped>
.global-layout {
  min-height: 100vh;
  background: #f1f3f6;
}
.content-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: -45px;
  padding: 0 24px 0px 0px;
}
.sidebar {
  flex-shrink: 0;
  margin-top: 0;
  margin-right: 24px;
}
.main-content {
  flex: 1;
  padding-right : 15px;
  border-radius: 20px;
  box-shadow: none;
}

@media (max-width: 900px) {
  .content-row {
    flex-direction: column;
    margin-top: 0;
    padding: 0 8px;
  }
  .main-content {
    margin-top: 24px;
    padding: 16px;
  }
}
</style>