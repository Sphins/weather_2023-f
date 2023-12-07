<script setup>
import Daily from "@/components/Daily.vue";
const props = defineProps({
  forecast: Array // Puisque vous recevez un tableau de prévisions
});


</script>

<template>
  <section class="bg-white bg-opacity-75 rounded-lg shadow p-5 mb-6 grow flex flex-col" v-if="forecast && forecast.length">
    <h2 class="font-bold text-xl mb-4">Prochains Jours</h2>
    <div class="overflow-x-auto">
      <div class="flex space-x-8">
        <daily v-for="day, index in forecast" :key="index" :forecast="day"/>
      </div>
    </div>
  </section>
  <!-- Affichez un message si les données ne sont pas disponibles -->
  <div v-else class="bg-white rounded-lg shadow p-5 text-center">
    <p>Données météorologiques non disponibles pour le moment.</p>
  </div>
</template>
