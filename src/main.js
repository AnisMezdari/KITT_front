import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'


const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')

defineProps({
  isDark: Boolean,
  selected: String
})
defineEmits(['toggle-theme', 'navigate'])