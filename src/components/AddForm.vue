<script setup>
import { ref, reactive } from 'vue';
import { getCoordinatesForCity } from '@/stores/geolocServices.js';
import { favoritesStore } from '@/stores/favoritesStore.js';

const cityName = ref('');
const errorMessage = ref('');

const favorites = reactive(favoritesStore.findAll());

async function addCity() {
  try {
    const coordinates = await getCoordinatesForCity(cityName.value);
    if (coordinates) {
      favorites.unshift({
      id: favorites.length + 1,
      name: coordinates.name,
      lat: coordinates.lat,
      lon: coordinates.lon
    });
      cityName.value = '';
      errorMessage.value = ''; 
    }
  } catch (error) {
    errorMessage.value = error.message;
    cityName.value = ''; 
  }
}


</script>

<template>
<section class="bg-white bg-opacity-75 rounded-lg shadow p-5 mb-6 mt-12">
  <h2 class="font-bold text-xl mb-4">Ajouter une Localisation</h2>
  <form>
    <div class="mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="location"
      >
        Nom de la Localisation
      </label>
      <input
        v-model="cityName"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="location"
        type="text"
        placeholder="Paris, France"
      />
      <p v-if="errorMessage" class="text-red-500 text-xs italic">{{ errorMessage }}</p>
    </div>
    <div class="flex items-center justify-between">
      <button
        @click.prevent="addCity"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Ajouter
      </button>
    </div>
  </form>
</section>
</template>
