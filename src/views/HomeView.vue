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
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </main>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import SidebarNav from '../components/SidebarNav.vue'
import Header from '../components/Header.vue'

const isDark = ref(false)
const simulationStep = ref(1)

const route = useRoute()
const router = useRouter()

// selected suit la route active
const selected = computed(() => {
  if (route.path.startsWith('/simulation')) return 'simulation'
  if (route.path.startsWith('/score')) return 'score'
  return 'dashboard'
})

function handleNavigate(page) {
  switch (page) {
    case 'simulation':
      router.push('/simulation/:step')
      break
    case 'score':
      router.push('/score')
      break
    case 'dashboard':
      router.push('/')
      break
    default:
      router.push('/')
  }
  if (page !== 'simulation') simulationStep.value = 1
}

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