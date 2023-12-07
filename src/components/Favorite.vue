<script setup>
const props = defineProps({
  favorite: Object,
});

</script>

<template>
  <div class="bg-gray-200 hover:bg-blue-500 hover:text-white rounded-lg p-4 flex justify-between items-center">
    <router-link :to="{name: 'home'}" @click="$emit('coord', favorite)" class="flex-grow">
      <span>{{ favorite.name }}</span>
    </router-link>
    <button
      @click.stop="$emit('delete', favorite.id)"
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-2"
    >
      Supprimer
    </button>
  </div>
</template>