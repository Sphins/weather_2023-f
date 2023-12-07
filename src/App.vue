<script setup>
import { ref, computed, onMounted } from 'vue';
import { getCurrentPosition } from '@/stores/geolocServices.js';


const icon = ref(null);
const coordinates = ref({ lat: null, lon: null })

const handleIconChange = (newIcon) => {
  icon.value = newIcon; 
};

async function handleFavoriteCoord(favorite) {
  if (favorite) {
    coordinates.value = { lat: favorite.lat, lon: favorite.lon };
  } else {
    try {
      const position = await getCurrentPosition();
      coordinates.value = { lat: position.coords.latitude, lon: position.coords.longitude };
    } catch (error) {
      console.error('Erreur lors de la récupération de la position actuelle:', error);
    }
  }
}

const backgroundStyle = computed(() => {
  if (icon.value) {
    return {
      backgroundImage: `url('../src/assets/backgrounds/${icon.value}.jpg')`,
      backgroundSize: 'cover'
    };
  } else {
    return {
      backgroundImage: `url('../src/assets/backgrounds/default.jpg')`,
      backgroundSize: 'cover'
    };
  }
});

onMounted(async () => {
  await handleFavoriteCoord(); // Chargez les coordonnées initiales
});
</script>

<template>
  <div :style="backgroundStyle">
    <router-view @coord="handleFavoriteCoord" @iconChanged="handleIconChange" :coordinates="coordinates"/>
  </div>
</template>
