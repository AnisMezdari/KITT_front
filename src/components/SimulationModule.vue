<template>
  <section class="simulation-module">
    <div class="sim-title">
      <span class="red-line"></span>
      <span>Sélectionnez votre <strong>simulateur</strong></span>
      <span class="red-line"></span>
    </div>
    <div class="sim-cards">
      <div class="sim-card">COLD CALL</div>
      <div class="sim-card">VENTES</div>
    </div>
  </section>
</template>

<script setup>
// Tu peux ajouter des props ou des emits ici si besoin plus tard
</script>

<style scoped>
.simulation-module {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.sim-title {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 2rem;
  font-family: 'Orbitron', 'Segoe UI', Arial, sans-serif;
  margin-bottom: 2.5rem;
  color: #222;
}
.sim-title strong {
  font-weight: 700;
}
.red-line {
  display: inline-block;
  width: 60px;
  height: 2px;
  background: #e53935;
  border-radius: 2px;
}
.sim-cards {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  margin-top: 1.5rem;
}
.sim-card {
  width: 240px;
  height: 180px;
  background: #ededed;
  border-radius: 1rem;
  box-shadow: 0 4px 12px 0 rgba(60,72,88,0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-family: 'Orbitron', 'Segoe UI', Arial, sans-serif;
  color: #444;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
  text-align: center;
  font-weight: 500;
}
.sim-card:hover {
  box-shadow: 0 8px 24px 0 rgba(60,72,88,0.18);
  transform: translateY(-4px) scale(1.03);
}
</style>