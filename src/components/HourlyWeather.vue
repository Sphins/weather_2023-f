<script setup>
import { watchEffect, ref } from 'vue';
import Hour from "@/components/Hour.vue";


const props = defineProps({
  forecast: Object
});


</script>

<template>
  <section class="bg-white bg-opacity-75 rounded-lg shadow p-5 mb-6 grow flex flex-col">
    <h2 class="font-bold text-xl mb-4">Prochaines Heures</h2>
    <div class="overflow-x-auto" v-if="forecast && forecast.length">
      <div class="flex space-x-8">
        <Hour v-for="item,index in forecast" :key="index" :forecast="item" class="text-center"/>
      </div>
    </div>
    <div v-else class="text-center">
      Chargement des prévisions horaires...
    </div>
  </section>
</template>
