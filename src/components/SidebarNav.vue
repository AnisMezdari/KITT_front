<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <nav class="nav">
        <a
          class="nav-item"
          :class="{ active: selected === 'dashboard' }"
          @click="$emit('navigate', 'dashboard')"
        >
          <span class="icon">
            <!-- Dashboard SVG -->
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
          </span>
          <span class="nav-label">Dashboard</span>
        </a>
        <a
          class="nav-item"
          :class="{ active: selected === 'product' }"
          @click="$emit('navigate', 'product')"
        >
          <span class="icon">
            <!-- Product SVG (lock) -->
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="11" rx="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </span>
          <span class="nav-label"> Product</span>
         
        </a>
        <a
          class="nav-item"
          :class="{ active: selected === 'simulation' }"
          @click="$emit('navigate', 'simulation')"
        >
          <span class="icon">
            <!-- Simulation SVG (play) -->
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <polygon points="5,3 19,12 5,21 5,3"/>
            </svg>
          </span>
          <span class="nav-label">Simulation</span>
        </a>
        <a
          class="nav-item"
          :class="{ active: selected === 'analytics' }"
          @click="$emit('navigate', 'analytics')"
        >
          <span class="icon">
            <!-- Analytics SVG -->
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="3" y="12" width="4" height="8"/>
              <rect x="9" y="8" width="4" height="12"/>
              <rect x="15" y="4" width="4" height="16"/>
            </svg>
          </span>
          <span class="nav-label">Saless Analytic</span>
        </a>
        <a
          class="nav-item"
          :class="{ active: selected === 'income' }"
          @click="$emit('navigate', 'income')"
        >
          <span class="icon">
            <!-- Income SVG -->
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 8v8m0 0l-3-3m3 3l3-3"/>
              <rect x="3" y="3" width="18" height="18" rx="2"/>
            </svg>
          </span>
          <span class="nav-label">Income</span>
        </a>
        <a
          class="nav-item"
          :class="{ active: selected === 'profile' }"
          @click="$emit('navigate', 'profile')"
        >
          <span class="icon">
            <!-- Profile SVG -->
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20v-1a8 8 0 0 1 16 0v1"/>
            </svg>
          </span>
          <span class="nav-label">Profile</span>
        </a>
      </nav>
      <div class="sidebar-separator"></div>
    </div>
    <div class="bottom-bar">
      <a class="nav-item settings">
        <span class="icon">
          <!-- Settings SVG -->
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 5 15.4a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09c0 .66.39 1.26 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 8c.13.31.2.65.2 1v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09c-.35 0-.69.07-1 .2z"/>
          </svg>
        </span>
         <span class="nav-label">Settings</span>
        <span class="arrow">&gt;</span>
      </a>
      <div class="theme-switch">
        <button
          class="theme-option"
          :class="{ active: !isDark }"
          @click="$emit('toggle-theme')"
          aria-label="Light mode"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        </button>
        <button
          class="theme-option"
          :class="{ active: isDark }"
          @click="$emit('toggle-theme')"
          aria-label="Dark mode"
        >
          <!-- Dark mode icon -->
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg> 
          
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  isDark: Boolean,
  selected: String
})
defineEmits(['toggle-theme', 'navigate'])
</script>

<style scoped>
.sidebar {
  width: 230px;
  background: #111;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  padding-top: 25px;
  min-height: 70vh;
  margin: 40px 0 24px 24px;
  box-shadow: 0 2px 16px 0 rgba(60,72,88,0.10);
  min-height : 700px;
}
.sidebar-content {
  padding: 0 0 0 0;
}
.nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-size: 1.08rem;
  color: #fff;
  padding: 0.7rem 1.2rem;
  border-radius: 0.7rem;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
  position: relative;
  margin: 0 1.2rem;
  user-select: none;
}
.nav-item .icon {
  display: flex;
  align-items: center;
  font-size: 1.25em;
  transition: color 0.2s, transform 0.2s;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(174, 83, 83, 0.1); /* zone hover classique, léger fond rouge */
  color: #fff;
  transition: background 0.18s, color 0.18s;
}

.nav-item:hover .icon,
.nav-item.active .icon {
  color: #ff2222; /* rouge vif comme le logo */
  filter: drop-shadow(0 0 8px #ff2222);
  transform: scale(1.18) rotate(-6deg);
  transition: color 0.18s, filter 0.18s, transform 0.18s;
}
.nav-item:hover .icon{
transform: scale(1.38) rotate(-14deg);
}

.sidebar-separator {
  border-top: 2px solid #222;
  margin: 2.2rem 1.2rem 0 1.2rem;
}
.bottom-bar {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: center;
  margin-bottom: 1.2rem;
}
.nav-item.settings {
  margin: 1.2rem 1.2rem 0 1.2rem;
  background: none;
  color: #fff;
  font-weight: 500;
  justify-content: space-between;
  padding-right: 1.5rem;
}
.nav-item.settings .arrow {
  margin-left: auto;
  color: #fff;
  font-size: 1.2em;
}
.theme-switch {
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  background: #111; /* Même fond que la sidebar */
  margin-top: 12px;
  box-shadow: inset 0 0 8px rgba(255, 34, 34, 0.15);
}
.theme-option {
  flex: 1;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, filter 0.25s ease;
  user-select: none;
  text-align: center;
  border-radius: 0;
  filter: drop-shadow(0 0 0 transparent);
}

.theme-option.active {
  background: rgba(255, 34, 34, 0.25);
  color: #ff2222;
  filter: drop-shadow(0 0 8px #ff2222);
}

.theme-option:hover {
  background: rgba(255, 34, 34, 0.12);
  color: #ff2222;
  filter: drop-shadow(0 0 6px #ff2222);
}

.nav-item:hover span,
.nav-item.active span {
  color: #ff2222;
  text-shadow: 0 0 4px #ff2222;
  transition: color 0.18s, text-shadow 0.18s;
}
</style>