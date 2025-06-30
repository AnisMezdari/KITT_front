<script setup>
import { ref, watch, onMounted } from 'vue'
import HomeView from './views/HomeView.vue' // 

const isDark = ref(false)
function toggleTheme() {
  isDark.value = !isDark.value
}

// Ajoute la classe sur le body selon le thème
const updateBodyClass = () => {
  document.body.classList.toggle('dark-bg', isDark.value)
  document.body.classList.toggle('light-bg', !isDark.value)
}
onMounted(updateBodyClass)
watch(isDark, updateBodyClass)
</script>

<template>
 

    <HomeView />
      

</template>

<style>
body.light-bg {
  background: #fff;
  transition: background 0.3s;
}
body.dark-bg {
  background: #23272f;
  transition: background 0.3s;
}
body {
  min-height: 100vh;
  min-width: 100vw;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  background-repeat: no-repeat;
  background-attachment: fixed;
    color : black
}
.app-root {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  height: 100vh;
  transition: background 0.3s, color 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0; /* Assure-toi qu'il n'y a pas de padding */
}
.app-root.light {
  color: #222b45;
}
</style>