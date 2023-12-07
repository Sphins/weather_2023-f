<script setup>
import { reactive, watch} from 'vue';

import Favorite from "@/components/Favorite.vue";
import { favoritesStore } from "@/stores/favoritesStore.js";

const favorites = reactive(favoritesStore.findAll());
const emit = defineEmits(['coord']);


watch(
  () => favorites,
  (newValue) => {
    favoritesStore.save(newValue);
  },
  { deep: true }
);

function deleteOnebyId(id) {
  favorites.splice(
    favorites.findIndex((favorite) => favorite.id == id),
    1
  )};

function transmit(data){
  emit('coord', data)
}
</script>
<template>
    <section class="bg-white rounded-lg shadow p-5">
        <h2 class="font-bold text-xl mb-4">Vos Localisations Favorites</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <favorite
            v-for="favorite in favorites"
            :key="favorite.id"
            :favorite="favorite"
            @delete="deleteOnebyId"
            @coord="transmit"/>
        </div>
      </section>
</template>