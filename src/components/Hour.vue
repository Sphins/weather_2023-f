<script setup>
import { formatDate } from '@/utils/dateFormatter.js';

const props = defineProps({
  forecast: Object,
});


</script>
<template>
    <div class="text-center">
        <p class="text-lg">{{ formatDate(forecast.dt , 'time') }}</p>
        <div class="w-10 h-10 bg-blue-300 rounded-full mx-auto my-2"
            :style="`background-image: url('https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png'); background-size: cover;`">
        </div>
        <p class="text-lg pb-4">{{ forecast.main.temp.toFixed(0) }}°C</p>
    </div>
</template>