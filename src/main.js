import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

defineProps({
  isDark: Boolean,
  selected: String
})
defineEmits(['toggle-theme', 'navigate'])