<script setup>
import { ref } from 'vue';
import AddForm from "@/components/AddForm.vue";
import FavoritesList from "@/components/FavoritesList.vue";

const props = defineProps({
  favorites: Array,
});

const emit = defineEmits(['coord']);

function transmit(data){
  emit('coord', data)
}
</script>


<template>
  <div class="mx-auto p-4 min-h-screen flex flex-col">
       <div class="fixed top-2 right-5 text-4xl">
         <router-link :to="{ name: 'home' }" @click="transmit(null)" class="text-white">x</router-link>
       </div>
       <!-- Formulaire d'ajout de localisation -->
       <AddForm/>
       <!-- Liste des localisations favorites -->
       <FavoritesList @coord="transmit"/>
     </div>
 </template>
