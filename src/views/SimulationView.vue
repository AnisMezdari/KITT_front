<template>
  
   <ConfigurationSimulation v-if="currentView === 'simulation'" />
</template>

<script setup>
import SimulationModule from './SimulationModule.vue'
import ConfigurationSimulation from '../components/ConfigurationSimulation.vue';
</script>