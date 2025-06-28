<template>
  <aside class="sidebar">
    <div>
      <div class="logo-zone">
        <img src="../assets/Kitt_logo_v3.png" alt="KITT Logo" class="logo" />
      </div>
      <nav class="nav">
        <a class="nav-item active">
          <span class="icon">
            <!-- Home SVG -->
            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M3 12L12 3l9 9" />
              <path d="M9 21V9h6v12" />
            </svg>
          </span>
          Home page
        </a>
        <a class="nav-item">
          <span class="icon">
            <!-- Mic SVG -->
            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="9" y="2" width="6" height="12" rx="3"/>
              <path d="M5 10v2a7 7 0 0 0 14 0v-2"/>
              <line x1="12" y1="22" x2="12" y2="18"/>
            </svg>
          </span>
          Simulation
        </a>
        <a class="nav-item">
          <span class="icon">
            <!-- User SVG -->
            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="7" r="4"/>
              <path d="M5.5 21a8.38 8.38 0 0 1 13 0"/>
            </svg>
          </span>
          Profil client
        </a>
        <a class="nav-item">
          <span class="icon">
            <!-- Phone SVG -->
            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72l.3 2.18a2 2 0 0 1-1 2.11l-2.2 1.1a16 16 0 0 0 6.29 6.29l1.1-2.2a2 2 0 0 1 2.11-1l2.18.3a2 2 0 0 1 1.72 2V21z"/>
            </svg>
          </span>
          Liste d'appels
        </a>
        <a class="nav-item">
          <span class="icon">
            <!-- Dashboard SVG -->
            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="9"/>
              <rect x="14" y="3" width="7" height="5"/>
              <rect x="14" y="12" width="7" height="9"/>
              <rect x="3" y="16" width="7" height="5"/>
            </svg>
          </span>
          Dashboard
        </a>
        
      </nav>
    </div>
    <div class="bottom-bar">
        <a class="nav-item">
        <span class="icon">
            <!-- Settings SVG -->
            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 5 15.4a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09c0 .66.39 1.26 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 8c.13.31.2.65.2 1v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09c-.35 0-.69.07-1 .2z"/>
            </svg>
        </span>
        Setting
        </a>
      <button class="theme-toggle" @click="$emit('toggle-theme')" :aria-label="isDark ? 'Activer le mode clair' : 'Activer le mode sombre'">
        <span v-if="isDark">☀️</span>
        <span v-else>🌙</span>
      </button>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  isDark: Boolean
})
defineEmits(['toggle-theme'])
</script>

<style scoped>
.sidebar {
  width: 220px;
  background: #111;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 1rem 1rem 1rem;
}
.logo-zone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 150px;
  margin: 0 auto 2.5rem auto;
  border-radius: 1.5rem;
  transition:
    transform 0.4s cubic-bezier(.4,2,.6,1),
    box-shadow 0.4s cubic-bezier(.4,2,.6,1),
    filter 0.3s;
  box-shadow: 0 2px 16px 0 rgba(60,72,88,0.10);
  cursor: pointer;
}
.logo-zone:hover {
  transform: scale(1.04) rotate(-2deg);
  box-shadow: 0 4px 16px 0 #1976d2, 0 0 0 4px #e5393533;
  filter: brightness(1.08) drop-shadow(0 0 4px #e5393588);
}
.logo {
  width: 160px;
  height: 120px;
  border-radius: 1.2rem;
  transition: filter 0.3s;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #e53935;
  margin-left: 0.5rem;
}
.nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-size: 1.08rem;
  color: #fff;
  padding: 0.7rem 1rem;
  border-radius: 0.7rem;
  text-decoration: none;
  transition: 
    background 0.3s cubic-bezier(.4,2,.6,1),
    color 0.2s,
    box-shadow 0.3s,
    transform 0.2s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.nav-item .icon {
  display: flex;
  align-items: center;
  font-size: 1.25em;
  transition: color 0.2s, transform 0.2s;
}
.nav-item.active,
.nav-item:hover {
  background: linear-gradient(90deg, #e53935 0%, #1976d2 100%);
  color: #fff;
  box-shadow: 0 4px 16px 0 rgba(229,57,53,0.10);
  transform: scale(1.04);
}
.nav-item:hover .icon,
.nav-item.active .icon {
  color: #ffe082;
  transform: scale(1.18) rotate(-8deg);
}
.nav-item::before {
  content: "";
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #e53935 0%, #1976d2 100%);
  opacity: 0.18;
  transition: left 0.4s cubic-bezier(.4,2,.6,1);
  z-index: 0;
}
.nav-item:hover::before,
.nav-item.active::before {
  left: 0;
}
.nav-item > * {
  position: relative;
  z-index: 1;
}
.bottom-bar {
  width: 100%;
  display: flex;
  flex-direction: column; /* Ajouté */
  justify-content: center;
  align-items: center;
  gap: 0.7rem; /* Ajoute un espace entre Setting et le bouton thème */
  padding: 1rem 0 0 0;
  box-sizing: border-box;
}
.theme-toggle {
  background: linear-gradient(90deg, #e53935 0%, #1976d2 100%);
  color: #ffe082;
  border: none;
  border-radius: 1.5rem;
  padding: 0.5rem 1.1rem;
  font-size: 1.15rem;
  cursor: pointer;
  box-shadow: 0 4px 16px 0 rgba(229,57,53,0.10);
  transition:
    background 0.3s cubic-bezier(.4,2,.6,1),
    color 0.2s,
    box-shadow 0.3s,
    transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.theme-toggle:hover {
  background: linear-gradient(90deg, #1976d2 0%, #e53935 100%);
  color: #fffbe7;
  box-shadow: 0 8px 32px 0 #1976d2, 0 0 0 8px #e5393533;
  transform: scale(1.08) rotate(-3deg);
}
.theme-toggle span {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(.4,2,.6,1);
}

.theme-toggle:hover span {
  transform: rotate(-18deg) scale(1.18);
}
</style>