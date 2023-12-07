<script setup>
import { ref, watch } from 'vue';
import { getInstantWeather } from '@/stores/instantWeatherService.js';
import { getHourlyDailyAllData } from '@/stores/hourlyDailyService.js';
import { hourlyProcessDataForNext24Hours } from '@/stores/hourlyWeatherTraitement.js';
import { dailyProcessDataForNext5days } from '@/stores/dailyWeatherTraitement.js';
import InstantWeather from '@/components/InstantWeather.vue';
import HourlyWeather from '@/components/HourlyWeather.vue';
import DailyWeather from '@/components/DailyWeather.vue';

const props = defineProps({
  coordinates: Object
});

const emit = defineEmits(['iconChanged']);
const weather = ref(null);
const hourlyForecast = ref(null);
const dailyForecast = ref(null);

async function loadWeatherData(lat, lon) {
  if (lat == null || lon == null) {
    return;
  }
  try {
    weather.value = await getInstantWeather(lat, lon);
    const allData = await getHourlyDailyAllData(lat, lon);
    const weatherIcon = weather.value.weather[0].icon;
    emit('iconChanged', weatherIcon);
    hourlyForecast.value = hourlyProcessDataForNext24Hours(allData);
    dailyForecast.value = dailyProcessDataForNext5days(allData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

watch(() => props.coordinates, (newCoords, oldCoords) => {
  if (newCoords && (newCoords.lat !== oldCoords?.lat || newCoords.lon !== oldCoords?.lon)) {
    loadWeatherData(newCoords.lat, newCoords.lon);
  }
}, { immediate: true });
</script>

<template>
 <div v-if="weather && weather.weather && weather.weather[0]" 
       class="mx-auto p-4 min-h-screen flex flex-col pb-16">
    <InstantWeather :weather="weather"/>
    <HourlyWeather :forecast="hourlyForecast" />
    <DailyWeather :forecast="dailyForecast" />

    <div class="fixed inset-x-0 bottom-0 pb-4 flex justify-center">
      <router-link :to="{name: 'favorites'}" class="bg-blue-500 hover:bg-blue-700 text-white h-16 w-16 leading-8 rounded-full shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-4xl flex items-center justify-center">
        +
      </router-link>
    </div>
  </div>
</template>
