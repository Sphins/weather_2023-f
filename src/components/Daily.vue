<script setup>
const props = defineProps({
  forecast: Object,
});

const getDayName = (dateString) => {
  return new Date(dateString).toLocaleDateString('fr-FR', { weekday: 'long' });
};
</script>
<template>
    <div  class="text-center">
          <p class="text-lg">{{ getDayName(forecast.date) }}</p>
          <div class="w-10 h-10 bg-blue-300 rounded-full mx-auto my-2"
               :style="`background-image: url('https://openweathermap.org/img/wn/${forecast.icon}@2x.png'); background-size: cover;`">
          </div>
          <p class="text-sm text-blue-500">{{ forecast.avgMinTemp.toFixed(0) }}°C</p>
          <p class="text-sm text-red-600 pb-4">{{ forecast.avgMaxTemp.toFixed(0) }}°C</p>
        </div>
</template>