<script setup>
import { formatDate } from '@/utils/dateFormatter.js';

const props = defineProps({
  weather: Object
});
</script>

<template>
  <section class="bg-white bg-opacity-75 rounded-lg shadow p-5 mb-6 grow flex flex-col">
    <header class="mb-4">
      <h2 class="font-bold text-xl">Météo Instantanée</h2>
    </header>
    <!-- Vérifiez si weather et weather.main sont présents -->
    <article v-if="weather && weather.main" class="flex items-center justify-between grow">
      <div>
        <h3 class="text-lg font-semibold">{{ weather.name }}</h3>
        <time class="text-sm text-gray-600" :datetime="formatDate(weather.dt, 'datetime')">
          {{ formatDate(weather.dt, 'time') }}<br />
          {{ formatDate(weather.dt, 'date') }}
        </time>
      </div>
      <div class="flex">
        <div class="text-right">
          <p class="text-5xl">{{ weather.main.temp.toFixed(0) }}°C</p>
          <p class="text-lg text-gray-600">{{ weather.weather[0].description }}</p>
        </div>
        <div class="w-10 h-10 bg-blue-300 rounded-full mx-auto my-2 ml-2 w-20 h-20" :style="`background-image: url('https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png'); background-size: cover;`"></div>
      </div>
    </article>
    <div v-else>
      Chargement des données météorologiques...
    </div>
  </section>
</template>
